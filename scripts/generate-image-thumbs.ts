import { promises as fs } from "node:fs";
import path from "node:path";
import sharp from "sharp";

const SUPPORTED_EXTENSIONS = new Set([".avif", ".jpeg", ".jpg", ".png", ".webp"]);
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

function isSourceImage(filePath: string): boolean {
  const extension = path.extname(filePath).toLowerCase();
  const basename = path.basename(filePath, extension).toLowerCase();

  return SUPPORTED_EXTENSIONS.has(extension) && !basename.endsWith("-thumb");
}

function getThumbPath(filePath: string): string {
  const extension = path.extname(filePath);
  return filePath.slice(0, -extension.length) + "-thumb.webp";
}

async function shouldGenerate(sourcePath: string, thumbPath: string): Promise<boolean> {
  try {
    const [sourceStats, thumbStats] = await Promise.all([fs.stat(sourcePath), fs.stat(thumbPath)]);
    return sourceStats.mtimeMs > thumbStats.mtimeMs;
  } catch {
    return true;
  }
}

async function generateThumb(sourcePath: string): Promise<{ sourcePath: string; thumbPath: string; skipped: boolean }> {
  const thumbPath = getThumbPath(sourcePath);

  if (!(await shouldGenerate(sourcePath, thumbPath))) {
    return { sourcePath, thumbPath, skipped: true };
  }

  await sharp(sourcePath)
    .rotate()
    .resize({ width: THUMB_WIDTH, withoutEnlargement: true })
    .webp({ quality: THUMB_QUALITY, effort: 6 })
    .toFile(thumbPath);

  return { sourcePath, thumbPath, skipped: false };
}

async function main(): Promise<void> {
  const targetDirectories = process.argv.slice(2).filter((argument) => argument !== "--");

  if (targetDirectories.length === 0) {
    console.error("Usage: node ./scripts/generate-image-thumbs.ts <folder> [more-folders...]");
    process.exitCode = 1;
    return;
  }

  const sourceFiles = (
    await Promise.all(
      targetDirectories.map(async (directory) => {
        const directoryPath = path.resolve(directory);
        return walk(directoryPath);
      })
    )
  )
    .flat()
    .filter(isSourceImage);

  const results = await Promise.all(sourceFiles.map(generateThumb));
  const generatedCount = results.filter((result) => !result.skipped).length;
  const skippedCount = results.length - generatedCount;

  console.log(`Processed ${results.length} image(s).`);
  console.log(`Generated ${generatedCount} thumbnail(s).`);
  console.log(`Skipped ${skippedCount} up-to-date thumbnail(s).`);
}

main().catch((error: unknown) => {
  console.error(error);
  process.exitCode = 1;
});
