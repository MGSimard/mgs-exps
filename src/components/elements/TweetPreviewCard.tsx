import { IconCircleDashedX, IconFaceIdError } from "@tabler/icons-react";
import { memo } from "react";
import type { TweetBookmark, TweetMedia } from "@/data/tweet-bookmarks";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/shadcn-ui/separator";

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
        "space-y-4 border bg-background p-4 pb-3 shadow-sm transition-colors hover:bg-muted/20 focus-visible:bg-muted/20",
        className
      )}
      {...props}>
      <div className="flex gap-2">
        <div className="relative grid size-10 shrink-0 place-items-center overflow-hidden rounded-full border bg-muted text-muted">
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
        <div className="overflow-hidden">
          <p className="truncate font-medium">{tweet.authorName}</p>
          <p className="truncate font-mono text-xs text-muted-foreground uppercase">@{tweet.authorHandle}</p>
        </div>
      </div>

      <p className="text-sm">{tweet.text}</p>

      {tweet.media && (
        <div
          className={cn(
            "relative grid place-items-center overflow-hidden border bg-muted/20 text-muted-foreground",
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
      )}

      <div className="flex flex-wrap gap-1">
        {tweet.tags.map((tag) => (
          <span
            key={tag}
            className="border bg-muted/40 px-2 py-1 font-mono text-xs leading-none text-muted-foreground uppercase">
            {tag}
          </span>
        ))}
      </div>

      <Separator />

      <div className="-mt-1 font-mono text-xs text-muted uppercase">{tweet.postedAt ?? "Preview cache"}</div>
    </a>
  );
});
