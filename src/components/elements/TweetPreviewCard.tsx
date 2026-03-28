import { memo, useState } from "react";
import type { TweetBookmark, TweetMedia } from "@/data/tweet-bookmarks";
import { cn } from "@/lib/utils";

interface TweetPreviewCardProps extends React.ComponentProps<"a"> {
  tweet: TweetBookmark;
}

function getInitials(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
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

export const TweetPreviewCard = memo(function TweetPreviewCard({
  tweet,
  className,
  ...props
}: TweetPreviewCardProps) {
  const [hasMediaError, setHasMediaError] = useState(false);

  return (
    <a
      href={tweet.url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "flex h-full min-h-80 flex-col gap-4 border bg-background p-4 shadow-sm transition-colors hover:bg-muted/20 focus-visible:bg-muted/20 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
        className
      )}
      {...props}>
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-start gap-3">
          {tweet.avatarUrl ? (
            <img
              src={tweet.avatarUrl}
              alt={`${tweet.authorName} avatar`}
              loading="lazy"
              decoding="async"
              className="size-10 shrink-0 rounded-full border bg-muted object-cover"
            />
          ) : (
            <div className="flex size-10 shrink-0 items-center justify-center rounded-full border bg-muted font-mono text-xs font-medium uppercase">
              {getInitials(tweet.authorName)}
            </div>
          )}
          <div className="min-w-0">
            <p className="truncate font-medium">{tweet.authorName}</p>
            <p className="truncate font-mono text-xs uppercase text-muted-foreground">@{tweet.authorHandle}</p>
          </div>
        </div>
        <span className="shrink-0 font-mono text-xs uppercase text-muted-foreground">X</span>
      </div>

      <p className="text-sm leading-6 text-foreground/95">{tweet.text}</p>

      {tweet.media && !hasMediaError ? (
        <div className={cn("overflow-hidden border bg-muted/30", getAspectRatioClass(tweet.media))}>
          {tweet.media.type === "image" ? (
            <img
              src={tweet.media.thumbSrc ?? tweet.media.src}
              alt={tweet.media.alt}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
              onError={() => setHasMediaError(true)}
            />
          ) : (
            <video
              src={tweet.media.src}
              poster={tweet.media.poster}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="h-full w-full object-cover"
              aria-label={tweet.media.alt ?? `${tweet.authorName} tweet video preview`}
              onError={() => setHasMediaError(true)}
            >
              <track kind="captions" label="No captions available" />
            </video>
          )}
        </div>
      ) : tweet.media ? (
        <div className="flex aspect-video items-center justify-center border border-dashed bg-muted/20 px-4 text-center font-mono text-xs uppercase text-muted-foreground">
          Media preview unavailable
        </div>
      ) : null}

      <div className="mt-auto flex flex-wrap gap-1">
        {tweet.tags.map((tag) => (
          <span
            key={tag}
            className="border bg-muted/40 px-2 py-1 font-mono text-[11px] leading-none uppercase text-muted-foreground">
            {tag}
          </span>
        ))}
      </div>

      <div className="border-t pt-3">
        <span className="font-mono text-xs uppercase text-muted-foreground">{tweet.postedAt ?? "Preview cache"}</span>
      </div>
    </a>
  );
});
