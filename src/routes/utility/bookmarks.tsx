import { createFileRoute } from "@tanstack/react-router";
import { PageTypeTweetGrid } from "@/components/layout/PageTypeTweetGrid";
import { TWEET_BOOKMARKS } from "@/data/tweet-bookmarks";

// Reminder to manually sync changes with pnpm run bookmarks:sync before deploying

export const Route = createFileRoute("/utility/bookmarks")({
  component: RouteComponent,
});

function RouteComponent() {
  return <PageTypeTweetGrid label="UTILITY" title="BOOKMARKS" data={TWEET_BOOKMARKS} />;
}
