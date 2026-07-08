import { execFile } from "node:child_process";
import { promises as fs } from "node:fs";
import path from "node:path";
import { promisify } from "node:util";
import sharp from "sharp";

const execFileAsync = promisify(execFile);

const DROP_DIRECTORY = path.resolve("scripts/image-drop");
const SOURCE_DIRECTORY = path.join(DROP_DIRECTORY, "input");
const OUTPUT_DIRECTORY = path.join(DROP_DIRECTORY, "output");
const VIDEO_EXTENSIONS = new Set([".mp4", ".mov", ".webm", ".mkv"]);
const MAX_WIDTH = 1920;
const CRF = 26;
const PRESET = "slow";
// Timestamp (seconds) used for poster/thumb extraction. Bump via POSTER_TIME env
// when a video fades in from black and frame 0 is unusable.
const POSTER_TIME = Number(process.env.POSTER_TIME ?? 0);
const POSTER_QUALITY = 82;
const THUMB_WIDTH = 640;
const THUMB_QUALITY = 68;

async function walk(directoryPath: string): Promise<Array<string>> {
  const entries = await fs.readdir(directoryPath, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const entryPath = path.join(directoryPath, entry.name);

      if (entry.isDirectory()) {
        return walk(entryPath);
      }

      return [entryPath];
    })
  );

  return files.flat();
}

function isVideo(filePath: string): boolean {
  return VIDEO_EXTENSIONS.has(path.extname(filePath).toLowerCase());
}

function getOutputPath(sourcePath: string, suffix: string, extension: string): string {
  const relativePath = path.relative(SOURCE_DIRECTORY, sourcePath);
  const withoutExtension = relativePath.slice(0, -path.extname(relativePath).length);
  return path.join(OUTPUT_DIRECTORY, withoutExtension + suffix + extension);
}

async function shouldGenerate(sourcePath: string, outputPath: string): Promise<boolean> {
  try {
    const [sourceStats, outputStats] = await Promise.all([fs.stat(sourcePath), fs.stat(outputPath)]);
    return sourceStats.mtimeMs > outputStats.mtimeMs;
  } catch {
    return true;
  }
}

async function ensureParentDirectory(filePath: string): Promise<void> {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
}

async function hasAudioStream(sourcePath: string): Promise<boolean> {
  const { stdout } = await execFileAsync("ffprobe", [
    "-v",
    "error",
    "-select_streams",
    "a",
    "-show_entries",
    "stream=codec_type",
    "-of",
    "csv=p=0",
    sourcePath,
  ]);
  return stdout.trim().length > 0;
}

async function compressVideo(sourcePath: string, outputPath: string): Promise<void> {
  const audioArgs = (await hasAudioStream(sourcePath)) ? ["-c:a", "aac", "-b:a", "128k"] : ["-an"];

  await execFileAsync("ffmpeg", [
    "-y",
    "-i",
    sourcePath,
    "-vf",
    `scale='min(${MAX_WIDTH},iw)':-2`,
    "-c:v",
    "libx264",
    "-crf",
    String(CRF),
    "-preset",
    PRESET,
    "-pix_fmt",
    "yuv420p",
    "-movflags",
    "+faststart",
    ...audioArgs,
    outputPath,
  ]);
}

async function extractPosterFrame(sourcePath: string): Promise<Buffer> {
  // PNG to stdout so sharp controls the final WebP encode, matching the image pipeline.
  const { stdout } = await execFileAsync(
    "ffmpeg",
    ["-ss", String(POSTER_TIME), "-i", sourcePath, "-frames:v", "1", "-f", "image2pipe", "-vcodec", "png", "pipe:1"],
    { encoding: "buffer", maxBuffer: 256 * 1024 * 1024 }
  );
  return stdout;
}

type ProcessResult = {
  sourcePath: string;
  generatedVideo: boolean;
  generatedPoster: boolean;
  generatedThumb: boolean;
};

async function processVideo(sourcePath: string): Promise<ProcessResult> {
  const videoPath = getOutputPath(sourcePath, "", ".mp4");
  const posterPath = getOutputPath(sourcePath, "-poster", ".webp");
  const thumbPath = getOutputPath(sourcePath, "-thumb", ".webp");

  const [needsVideo, needsPoster, needsThumb] = await Promise.all([
    shouldGenerate(sourcePath, videoPath),
    shouldGenerate(sourcePath, posterPath),
    shouldGenerate(sourcePath, thumbPath),
  ]);

  if (!needsVideo && !needsPoster && !needsThumb) {
    return { sourcePath, generatedVideo: false, generatedPoster: false, generatedThumb: false };
  }

  await Promise.all([ensureParentDirectory(videoPath), ensureParentDirectory(posterPath)]);

  if (needsVideo) {
    await compressVideo(sourcePath, videoPath);
  }

  if (needsPoster || needsThumb) {
    const frame = await extractPosterFrame(sourcePath);
    const tasks: Array<Promise<unknown>> = [];

    if (needsPoster) {
      tasks.push(sharp(frame).webp({ quality: POSTER_QUALITY, effort: 6 }).toFile(posterPath));
    }

    if (needsThumb) {
      tasks.push(
        sharp(frame)
          .resize({ width: THUMB_WIDTH, withoutEnlargement: true })
          .webp({ quality: THUMB_QUALITY, effort: 6 })
          .toFile(thumbPath)
      );
    }

    await Promise.all(tasks);
  }

  return { sourcePath, generatedVideo: needsVideo, generatedPoster: needsPoster, generatedThumb: needsThumb };
}

async function main(): Promise<void> {
  await Promise.all([fs.mkdir(SOURCE_DIRECTORY, { recursive: true }), fs.mkdir(OUTPUT_DIRECTORY, { recursive: true })]);

  const candidateFiles = await walk(SOURCE_DIRECTORY);
  const videoFiles = candidateFiles.filter(isVideo);

  if (videoFiles.length === 0) {
    console.log(`No videos found in ${SOURCE_DIRECTORY}.`);
    return;
  }

  console.log(`Input folder: ${SOURCE_DIRECTORY}`);
  console.log(`Output folder: ${OUTPUT_DIRECTORY}`);
  console.log(`Found ${videoFiles.length} video(s).`);

  // Sequential on purpose: parallel ffmpeg encodes thrash the CPU without saving time.
  const results: Array<ProcessResult> = [];
  for (const videoFile of videoFiles) {
    const relativeName = path.relative(SOURCE_DIRECTORY, videoFile);
    console.log(`Processing ${relativeName}...`);
    results.push(await processVideo(videoFile));
  }

  const generatedVideoCount = results.filter((result) => result.generatedVideo).length;
  const generatedPosterCount = results.filter((result) => result.generatedPoster).length;
  const generatedThumbCount = results.filter((result) => result.generatedThumb).length;
  const skippedCount = results.filter(
    (result) => !result.generatedVideo && !result.generatedPoster && !result.generatedThumb
  ).length;

  console.log(`Generated ${generatedVideoCount} compressed MP4 file(s).`);
  console.log(`Generated ${generatedPosterCount} poster(s) and ${generatedThumbCount} thumbnail(s).`);
  console.log(`Skipped ${skippedCount} up-to-date video(s).`);
}

main().catch((error: unknown) => {
  console.error(error);
  process.exitCode = 1;
});
