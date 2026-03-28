import { IconCircleDashedX, IconFaceIdError } from "@tabler/icons-react";
import { memo } from "react";
import type { TweetBookmark, TweetMedia } from "@/data/tweet-bookmarks";
import { cn } from "@/lib/utils";

interface TweetPreviewCardProps extends React.ComponentProps<"a"> {
  tweet: TweetBookmark;
}

function getAspectRatioClass(media: TweetMedia): string {
  switch (media.aspectRatio) {
    case "square":
      return "aspect-square";
    case "portrait":
      return "aspect-[4/5]";
    default:
      return "aspect-video";
  }
}

export const TweetPreviewCard = memo(function TweetPreviewCard({ tweet, className, ...props }: TweetPreviewCardProps) {
  const mediaPreviewSrc =
    tweet.media?.type === "video"
      ? (tweet.media.poster ?? null)
      : tweet.media?.type === "image"
        ? (tweet.media.thumbSrc ?? tweet.media.src)
        : null;
  const mediaPreviewAlt = tweet.media?.alt ?? `${tweet.authorName} tweet media preview`;

  return (
    <a
      href={tweet.url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "flex h-full min-h-80 flex-col gap-4 border bg-background p-4 shadow-sm transition-colors hover:bg-muted/20 focus-visible:bg-muted/20 focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none",
        className
      )}
      {...props}>
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-start gap-3">
          <div className="relative flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-full border bg-muted text-muted-foreground">
            <IconCircleDashedX strokeWidth={1} className="text-muted" />
            {tweet.avatarUrl && (
              <img
                src={tweet.avatarUrl}
                alt={`${tweet.authorName} avatar`}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />
            )}
          </div>
          <div className="min-w-0">
            <p className="truncate font-medium">{tweet.authorName}</p>
            <p className="truncate font-mono text-xs text-muted-foreground uppercase">@{tweet.authorHandle}</p>
          </div>
        </div>
      </div>

      <p className="text-sm leading-6 text-foreground/95">{tweet.text}</p>

      {tweet.media ? (
        <div
          className={cn(
            "relative flex items-center justify-center overflow-hidden border bg-muted/20 text-muted-foreground",
            getAspectRatioClass(tweet.media)
          )}>
          <IconFaceIdError strokeWidth={0.5} className="size-[50%] text-muted" />
          {mediaPreviewSrc && (
            <img
              src={mediaPreviewSrc}
              alt={mediaPreviewAlt}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />
          )}
        </div>
      ) : null}

      <div className="mt-auto flex flex-wrap gap-1">
        {tweet.tags.map((tag) => (
          <span
            key={tag}
            className="border bg-muted/40 px-2 py-1 font-mono text-[11px] leading-none text-muted-foreground uppercase">
            {tag}
          </span>
        ))}
      </div>

      <div className="border-t pt-3">
        <span className="font-mono text-xs text-muted-foreground uppercase">{tweet.postedAt ?? "Preview cache"}</span>
      </div>
    </a>
  );
});
