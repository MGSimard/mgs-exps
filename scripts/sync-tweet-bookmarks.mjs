import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const SOURCE_PATH = path.join(ROOT, "src/routes/utility/bookmarks.tsx");
const OUTPUT_PATH = path.join(ROOT, "src/data/tweet-bookmarks.ts");

function decodeHtmlEntities(value) {
  return value
    .replaceAll("&amp;", "&")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&quot;", '"')
    .replaceAll("&#39;", "'");
}

function parseSourceRecords(source) {
  const match = source.match(/export const BOOKMARKS_SOURCE(?:\s*:\s*[^=]+)?\s*=\s*(\[[\s\S]*\]);/);
  if (!match?.[1]) {
    throw new Error("Could not find BOOKMARKS_SOURCE in bookmarks.tsx");
  }

  const records = Function(`"use strict"; return (${match[1]});`)();
  if (!Array.isArray(records)) {
    throw new Error("Bookmark tweet source must be an array.");
  }

  return records.map((record) => {
    if (!record || typeof record !== "object") {
      throw new Error("Each bookmark tweet source entry must be an object.");
    }

    const { url, tags } = record;
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

function parseExistingRecords(source) {
  const match = source.match(/export const TWEET_BOOKMARKS(?:\s*:\s*[^=]+)?\s*=\s*(\[[\s\S]*\]);/);
  if (!match?.[1]) {
    throw new Error("Could not find TWEET_BOOKMARKS in tweet-bookmarks.ts");
  }

  const records = Function(`"use strict"; return (${match[1]});`)();
  if (!Array.isArray(records)) {
    throw new Error("Existing tweet bookmarks must be an array.");
  }

  return records.filter(
    (record) =>
      record &&
      typeof record === "object" &&
      typeof record.url === "string" &&
      record.url.length > 0,
  );
}

function getTweetId(url) {
  const match = url.match(/status\/(\d+)/);
  if (!match) {
    throw new Error(`Could not parse tweet id from ${url}`);
  }

  return match[1];
}

function getSyndicationToken(tweetId) {
  return ((Number(tweetId) / 1e15) * Math.PI).toString(36).replace(/(0+\.|[lhz]+$)/g, "").slice(-10);
}

function getAspectRatioLabel(width, height) {
  if (!width || !height) {
    return "video";
  }

  const ratio = width / height;
  if (ratio < 0.9) {
    return "portrait";
  }
  if (ratio < 1.1) {
    return "square";
  }

  return "video";
}

function pickMedia(tweet) {
  if (tweet.video?.variants?.length) {
    const bestMp4 = [...tweet.video.variants]
      .filter((variant) => variant.type === "video/mp4")
      .sort((left, right) => (right.bitrate ?? 0) - (left.bitrate ?? 0))[0];

    if (bestMp4?.src) {
      const [width, height] = tweet.video.aspectRatio ?? [];
      return {
        type: "video",
        src: bestMp4.src,
        poster: tweet.video.poster ?? tweet.mediaDetails?.[0]?.media_url_https,
        alt: `${tweet.user?.name ?? "Tweet"} video preview`,
        aspectRatio: getAspectRatioLabel(width, height),
      };
    }
  }

  const photo = tweet.photos?.[0];
  if (photo?.url) {
    return {
      type: "image",
      src: photo.url,
      alt: `${tweet.user?.name ?? "Tweet"} image preview`,
      thumbSrc: photo.url,
      aspectRatio: getAspectRatioLabel(photo.width, photo.height),
    };
  }

  const mediaPhoto = tweet.mediaDetails?.find((media) => media.type === "photo");
  if (mediaPhoto?.media_url_https) {
    const width = mediaPhoto.original_info?.width;
    const height = mediaPhoto.original_info?.height;
    return {
      type: "image",
      src: mediaPhoto.media_url_https,
      alt: `${tweet.user?.name ?? "Tweet"} image preview`,
      thumbSrc: mediaPhoto.media_url_https,
      aspectRatio: getAspectRatioLabel(width, height),
    };
  }

  return undefined;
}

function formatTweetRecord(tweet, sourceRecord) {
  const text = decodeHtmlEntities(tweet.text ?? "").replace(/\s+/g, " ").trim();
  return {
    id: `tweet-${tweet.id_str}`,
    url: sourceRecord.url,
    authorName: tweet.user?.name ?? "Unknown",
    authorHandle: tweet.user?.screen_name ?? "unknown",
    avatarUrl: tweet.user?.profile_image_url_https,
    text,
    tags: sourceRecord.tags,
    postedAt: tweet.created_at?.slice(0, 10),
    media: pickMedia(tweet),
  };
}

function serializeMedia(media, indent) {
  if (!media) {
    return `${indent}media: undefined,\n`;
  }

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

function generateTypeScript(records) {
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

async function fetchTweet(sourceRecord) {
  const tweetId = getTweetId(sourceRecord.url);
  const token = getSyndicationToken(tweetId);
  const endpoint = `https://cdn.syndication.twimg.com/tweet-result?id=${tweetId}&token=${token}&lang=en`;
  const response = await fetch(endpoint);

  if (!response.ok) {
    throw new Error(`Failed to fetch ${tweetId}: ${response.status}`);
  }

  const tweet = await response.json();
  if (tweet.__typename !== "Tweet") {
    throw new Error(`Unexpected payload for ${tweetId}: ${tweet.__typename}`);
  }

  return formatTweetRecord(tweet, sourceRecord);
}

async function loadExistingByUrl() {
  try {
    const source = await readFile(OUTPUT_PATH, "utf8");
    const records = parseExistingRecords(source);
    return new Map(records.map((record) => [record.url.replace(/\/$/, ""), record]));
  } catch (error) {
    if (error?.code === "ENOENT") {
      return new Map();
    }
    throw error;
  }
}

async function main() {
  const refresh = process.argv.includes("--refresh") || process.argv.includes("-r");
  const source = await readFile(SOURCE_PATH, "utf8");
  const sourceRecords = parseSourceRecords(source);
  const existingByUrl = refresh ? new Map() : await loadExistingByUrl();

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
    }),
  );
  const output = generateTypeScript(records);
  await writeFile(OUTPUT_PATH, output, "utf8");
  console.log(`Wrote ${records.length} tweet bookmarks to ${path.relative(ROOT, OUTPUT_PATH)}`);
  console.log(`Reused ${reusedCount}, fetched ${fetchedCount}${refresh ? " (refresh mode)" : ""}.`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
