import { promises as fs } from "node:fs";
import path from "node:path";
import sharp from "sharp";

const DROP_DIRECTORY = path.resolve("scripts/image-drop");
const SOURCE_DIRECTORY = path.join(DROP_DIRECTORY, "input");
const OUTPUT_DIRECTORY = path.join(DROP_DIRECTORY, "output");
const GIF_OUTPUT_DIRECTORY = path.join(OUTPUT_DIRECTORY, "gif-originals");
const THUMB_WIDTH = 640;
const WEBP_QUALITY = 82;
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

async function isProcessableImage(filePath: string): Promise<boolean> {
  try {
    const metadata = await sharp(filePath).metadata();
    return Boolean(metadata.format);
  } catch {
    return false;
  }
}

function isGif(filePath: string): boolean {
  return path.extname(filePath).toLowerCase() === ".gif";
}

function getBaseOutputPath(sourcePath: string, outputRoot: string): string {
  const relativePath = path.relative(SOURCE_DIRECTORY, sourcePath);
  const extension = path.extname(relativePath);
  const outputRelativePath = relativePath.slice(0, -extension.length) + ".webp";
  return path.join(outputRoot, outputRelativePath);
}

function getThumbPath(sourcePath: string): string {
  const webpPath = getBaseOutputPath(sourcePath, OUTPUT_DIRECTORY);
  const extension = path.extname(webpPath);
  return webpPath.slice(0, -extension.length) + "-thumb.webp";
}

function getWebpPath(sourcePath: string): string {
  return getBaseOutputPath(sourcePath, OUTPUT_DIRECTORY);
}

function getGifCopyPath(sourcePath: string): string {
  const relativePath = path.relative(SOURCE_DIRECTORY, sourcePath);
  return path.join(GIF_OUTPUT_DIRECTORY, relativePath);
}

async function shouldGenerate(sourcePath: string, outputPath: string): Promise<boolean> {
  try {
    const [sourceStats, outputStats] = await Promise.all([fs.stat(sourcePath), fs.stat(outputPath)]);
    return sourceStats.mtimeMs > outputStats.mtimeMs;
  } catch {
    return true;
  }
}

type ProcessResult = {
  sourcePath: string;
  webpPath: string;
  thumbPath: string;
  skippedWebp: boolean;
  skippedThumb: boolean;
};

async function ensureParentDirectory(filePath: string): Promise<void> {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
}

async function copyGif(sourcePath: string): Promise<boolean> {
  const outputPath = getGifCopyPath(sourcePath);

  if (!(await shouldGenerate(sourcePath, outputPath))) {
    return false;
  }

  await ensureParentDirectory(outputPath);
  await fs.copyFile(sourcePath, outputPath);
  return true;
}

async function processImage(sourcePath: string): Promise<ProcessResult> {
  const webpPath = getWebpPath(sourcePath);
  const thumbPath = getThumbPath(sourcePath);
  const [needsWebp, needsThumb] = await Promise.all([
    shouldGenerate(sourcePath, webpPath),
    shouldGenerate(sourcePath, thumbPath),
  ]);

  if (!needsWebp && !needsThumb) {
    return { sourcePath, webpPath, thumbPath, skippedWebp: true, skippedThumb: true };
  }

  await Promise.all([ensureParentDirectory(webpPath), ensureParentDirectory(thumbPath)]);

  const sourceImage = sharp(sourcePath).rotate();
  const tasks: Array<Promise<unknown>> = [];

  if (needsWebp) {
    tasks.push(sourceImage.clone().webp({ quality: WEBP_QUALITY, effort: 6 }).toFile(webpPath));
  }

  if (needsThumb) {
    tasks.push(
      sourceImage
        .clone()
        .resize({ width: THUMB_WIDTH, withoutEnlargement: true })
        .webp({ quality: THUMB_QUALITY, effort: 6 })
        .toFile(thumbPath)
    );
  }

  await Promise.all(tasks);

  return { sourcePath, webpPath, thumbPath, skippedWebp: !needsWebp, skippedThumb: !needsThumb };
}

async function main(): Promise<void> {
  await Promise.all([fs.mkdir(SOURCE_DIRECTORY, { recursive: true }), fs.mkdir(OUTPUT_DIRECTORY, { recursive: true })]);

  const candidateFiles = await walk(SOURCE_DIRECTORY);
  const gifFiles = candidateFiles.filter(isGif);
  const sourceFiles = (
    await Promise.all(
      candidateFiles.map(async (filePath) => {
        if (isGif(filePath)) {
          return null;
        }

        return (await isProcessableImage(filePath)) ? filePath : null;
      })
    )
  ).filter((filePath): filePath is string => filePath !== null);
  const unsupportedCount = candidateFiles.length - sourceFiles.length - gifFiles.length;
  const copiedGifCount = (await Promise.all(gifFiles.map(copyGif))).filter(Boolean).length;
  const skippedGifCopyCount = gifFiles.length - copiedGifCount;

  if (sourceFiles.length === 0 && gifFiles.length === 0) {
    console.log(`No processable images found in ${SOURCE_DIRECTORY}.`);

    if (unsupportedCount > 0) {
      console.log(`Skipped ${unsupportedCount} non-image or unsupported file(s).`);
    }

    return;
  }

  const results = await Promise.all(sourceFiles.map(processImage));
  const generatedWebpCount = results.filter((result) => !result.skippedWebp).length;
  const skippedWebpCount = results.length - generatedWebpCount;
  const generatedThumbCount = results.filter((result) => !result.skippedThumb).length;
  const skippedThumbCount = results.length - generatedThumbCount;

  console.log(`Input folder: ${SOURCE_DIRECTORY}`);
  console.log(`Output folder: ${OUTPUT_DIRECTORY}`);
  console.log(`Processed ${results.length} image(s).`);
  console.log(`Generated ${generatedWebpCount} optimized WebP file(s).`);
  console.log(`Skipped ${skippedWebpCount} up-to-date WebP file(s).`);
  console.log(`Generated ${generatedThumbCount} thumbnail(s).`);
  console.log(`Skipped ${skippedThumbCount} up-to-date thumbnail(s).`);

  if (gifFiles.length > 0) {
    console.log(`Copied ${copiedGifCount} GIF file(s) to ${GIF_OUTPUT_DIRECTORY}.`);
    console.log(`Skipped ${skippedGifCopyCount} up-to-date GIF file(s).`);
    console.log(`GIF files are copied unchanged. Handle animated GIFs with the video pipeline.`);
  }

  if (unsupportedCount > 0) {
    console.log(`Skipped ${unsupportedCount} non-image or unsupported file(s).`);
  }
}

main().catch((error: unknown) => {
  console.error(error);
  process.exitCode = 1;
});
