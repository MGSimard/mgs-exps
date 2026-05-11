import { writeFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { BOOKMARKS_SOURCE } from "../src/data/tweet-bookmark-source.ts";
import type { TweetBookmark, TweetMedia } from "../src/data/tweet-bookmarks.ts";

type SourceRecord = {
  url: string;
  tags: Array<string>;
};

type TweetVariant = {
  type?: unknown;
  bitrate?: unknown;
  src?: unknown;
};

type TweetPayload = {
  __typename?: unknown;
  id_str?: unknown;
  text?: unknown;
  created_at?: unknown;
  user?: {
    name?: unknown;
    screen_name?: unknown;
    profile_image_url_https?: unknown;
  };
  video?: {
    variants?: Array<TweetVariant>;
    aspectRatio?: Array<unknown>;
    poster?: unknown;
  };
  photos?: Array<{
    url?: unknown;
    width?: unknown;
    height?: unknown;
  }>;
  mediaDetails?: Array<{
    type?: unknown;
    media_url_https?: unknown;
    original_info?: {
      width?: unknown;
      height?: unknown;
    };
  }>;
};

const ROOT = process.cwd();
const OUTPUT_PATH = path.join(ROOT, "src/data/tweet-bookmarks.ts");

function decodeHtmlEntities(value: string) {
  return value
    .replaceAll("&amp;", "&")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&quot;", '"')
    .replaceAll("&#39;", "'");
}

function parseSourceRecords() {
  return Object.entries(BOOKMARKS_SOURCE).map(([url, tags]) => {
    if (typeof url !== "string" || url.length === 0) {
      throw new Error("Each bookmark tweet source entry needs a url.");
    }
    if (!Array.isArray(tags) || !tags.every((tag) => typeof tag === "string")) {
      throw new Error(`Bookmark tweet source entry for ${url} needs a string tags array.`);
    }

    return {
      url: url.replace(/\/$/, ""),
      tags,
    };
  });
}

function getTweetId(url: string) {
  const match = url.match(/status\/(\d+)/);
  if (!match?.[1]) {
    throw new Error(`Could not parse tweet id from ${url}`);
  }

  return match[1];
}

function getSyndicationToken(tweetId: string) {
  return ((Number(tweetId) / 1e15) * Math.PI)
    .toString(36)
    .replace(/(0+\.|[lhz]+$)/g, "")
    .slice(-10);
}

function optionalString(value: unknown) {
  return typeof value === "string" ? value : undefined;
}

function optionalNumber(value: unknown) {
  return typeof value === "number" ? value : undefined;
}

function getAspectRatioLabel(width: unknown, height: unknown): NonNullable<TweetMedia["aspectRatio"]> {
  const numericWidth = optionalNumber(width);
  const numericHeight = optionalNumber(height);
  if (!numericWidth || !numericHeight) {
    return "video";
  }

  const ratio = numericWidth / numericHeight;
  if (ratio < 0.9) {
    return "portrait";
  }
  if (ratio < 1.1) {
    return "square";
  }

  return "video";
}

function pickMedia(tweet: TweetPayload): TweetMedia | undefined {
  if (tweet.video?.variants?.length) {
    const bestMp4 = [...tweet.video.variants]
      .filter((variant) => variant.type === "video/mp4" && typeof variant.src === "string")
      .sort((left, right) => (optionalNumber(right.bitrate) ?? 0) - (optionalNumber(left.bitrate) ?? 0))[0];

    if (bestMp4 && typeof bestMp4.src === "string") {
      const [width, height] = tweet.video.aspectRatio ?? [];
      return {
        type: "video",
        src: bestMp4.src,
        poster: optionalString(tweet.video.poster) ?? optionalString(tweet.mediaDetails?.[0]?.media_url_https),
        alt: `${optionalString(tweet.user?.name) ?? "Tweet"} video preview`,
        aspectRatio: getAspectRatioLabel(width, height),
      };
    }
  }

  const photo = tweet.photos?.[0];
  if (typeof photo?.url === "string") {
    return {
      type: "image",
      src: photo.url,
      alt: `${optionalString(tweet.user?.name) ?? "Tweet"} image preview`,
      thumbSrc: photo.url,
      aspectRatio: getAspectRatioLabel(photo.width, photo.height),
    };
  }

  const mediaPhoto = tweet.mediaDetails?.find((media) => media.type === "photo");
  if (typeof mediaPhoto?.media_url_https === "string") {
    return {
      type: "image",
      src: mediaPhoto.media_url_https,
      alt: `${optionalString(tweet.user?.name) ?? "Tweet"} image preview`,
      thumbSrc: mediaPhoto.media_url_https,
      aspectRatio: getAspectRatioLabel(mediaPhoto.original_info?.width, mediaPhoto.original_info?.height),
    };
  }

  return undefined;
}

function formatTweetRecord(tweet: TweetPayload, sourceRecord: SourceRecord): TweetBookmark {
  if (typeof tweet.id_str !== "string") {
    throw new Error(`Tweet payload for ${sourceRecord.url} is missing id_str.`);
  }

  const text = decodeHtmlEntities(optionalString(tweet.text) ?? "")
    .replace(/\s+/g, " ")
    .trim();

  return {
    id: `tweet-${tweet.id_str}`,
    url: sourceRecord.url,
    authorName: optionalString(tweet.user?.name) ?? "Unknown",
    authorHandle: optionalString(tweet.user?.screen_name) ?? "unknown",
    avatarUrl: optionalString(tweet.user?.profile_image_url_https),
    text,
    tags: sourceRecord.tags,
    postedAt: optionalString(tweet.created_at)?.slice(0, 10),
    media: pickMedia(tweet),
  };
}

function serializeMedia(media: TweetMedia, indent: string) {
  const lines = [`${indent}media: {\n`];
  for (const [key, value] of Object.entries(media)) {
    if (value === undefined) {
      continue;
    }
    lines.push(`${indent}  ${key}: ${JSON.stringify(value)},\n`);
  }
  lines.push(`${indent}},\n`);
  return lines.join("");
}

function generateTypeScript(records: Array<TweetBookmark>) {
  const lines = [
    "export type TweetMedia =\n",
    "  | {\n",
    '      type: "image";\n',
    "      src: string;\n",
    "      alt: string;\n",
    "      thumbSrc?: string;\n",
    '      aspectRatio?: "video" | "square" | "portrait";\n',
    "    }\n",
    "  | {\n",
    '      type: "video";\n',
    "      src: string;\n",
    "      poster?: string;\n",
    "      alt?: string;\n",
    '      aspectRatio?: "video" | "square" | "portrait";\n',
    "    };\n\n",
    "export type TweetBookmark = {\n",
    "  id: string;\n",
    "  url: string;\n",
    "  authorName: string;\n",
    "  authorHandle: string;\n",
    "  avatarUrl?: string;\n",
    "  text: string;\n",
    "  tags: Array<string>;\n",
    "  postedAt?: string;\n",
    "  media?: TweetMedia;\n",
    "};\n\n",
    "export const TWEET_BOOKMARKS: Array<TweetBookmark> = [\n",
  ];

  for (const record of records) {
    lines.push("  {\n");
    lines.push(`    id: ${JSON.stringify(record.id)},\n`);
    lines.push(`    url: ${JSON.stringify(record.url)},\n`);
    lines.push(`    authorName: ${JSON.stringify(record.authorName)},\n`);
    lines.push(`    authorHandle: ${JSON.stringify(record.authorHandle)},\n`);
    if (record.avatarUrl) {
      lines.push(`    avatarUrl: ${JSON.stringify(record.avatarUrl)},\n`);
    }
    lines.push(`    text: ${JSON.stringify(record.text)},\n`);
    lines.push(`    tags: ${JSON.stringify(record.tags)},\n`);
    if (record.postedAt) {
      lines.push(`    postedAt: ${JSON.stringify(record.postedAt)},\n`);
    }
    if (record.media) {
      lines.push(serializeMedia(record.media, "    "));
    }
    lines.push("  },\n");
  }

  lines.push("];\n");
  return lines.join("");
}

async function fetchTweet(sourceRecord: SourceRecord) {
  const tweetId = getTweetId(sourceRecord.url);
  const token = getSyndicationToken(tweetId);
  const endpoint = `https://cdn.syndication.twimg.com/tweet-result?id=${tweetId}&token=${token}&lang=en`;
  const response = await fetch(endpoint);

  if (!response.ok) {
    throw new Error(`Failed to fetch ${tweetId}: ${response.status}`);
  }

  const tweet = (await response.json()) as TweetPayload;
  if (tweet.__typename !== "Tweet") {
    throw new Error(`Unexpected payload for ${tweetId}: ${String(tweet.__typename)}`);
  }

  return formatTweetRecord(tweet, sourceRecord);
}

function getErrorCode(error: unknown) {
  if (error && typeof error === "object" && "code" in error) {
    const code = (error as { code?: unknown }).code;
    return typeof code === "string" ? code : undefined;
  }

  return undefined;
}

async function loadExistingByUrl() {
  try {
    const existingModule = (await import(pathToFileURL(OUTPUT_PATH).href)) as {
      TWEET_BOOKMARKS: Array<TweetBookmark>;
    };
    return new Map(existingModule.TWEET_BOOKMARKS.map((record) => [record.url.replace(/\/$/, ""), record]));
  } catch (error) {
    if (getErrorCode(error) === "ENOENT" || getErrorCode(error) === "ERR_MODULE_NOT_FOUND") {
      return new Map<string, TweetBookmark>();
    }
    throw error;
  }
}

async function main() {
  const refresh = process.argv.includes("--refresh") || process.argv.includes("-r");
  const sourceRecords = parseSourceRecords();
  const existingByUrl = refresh ? new Map<string, TweetBookmark>() : await loadExistingByUrl();

  let reusedCount = 0;
  let fetchedCount = 0;
  const records = await Promise.all(
    sourceRecords.map(async (sourceRecord) => {
      const existing = existingByUrl.get(sourceRecord.url);
      if (existing) {
        reusedCount += 1;
        return {
          ...existing,
          url: sourceRecord.url,
          tags: sourceRecord.tags,
        };
      }

      fetchedCount += 1;
      return fetchTweet(sourceRecord);
    })
  );

  const output = generateTypeScript(records);
  await writeFile(OUTPUT_PATH, output, "utf8");
  console.log(`Wrote ${records.length} tweet bookmarks to ${path.relative(ROOT, OUTPUT_PATH)}`);
  console.log(`Reused ${reusedCount}, fetched ${fetchedCount}${refresh ? " (refresh mode)" : ""}.`);
}

main().catch((error: unknown) => {
  console.error(error);
  process.exitCode = 1;
});
