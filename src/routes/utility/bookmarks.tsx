import { createFileRoute } from "@tanstack/react-router";
import { PageTypeTweetGrid } from "@/components/layout/PageTypeTweetGrid";
import { TWEET_BOOKMARKS } from "@/data/tweet-bookmarks";

export type BookmarkSourceEntry = {
  url: string;
  tags: Array<string>;
};

// Reminder to manually sync changes with pnpm run bookmarks:sync before deploying

export const Route = createFileRoute("/utility/bookmarks")({
  component: RouteComponent,
});

function RouteComponent() {
  return <PageTypeTweetGrid label="UTILITY" title="BOOKMARKS" data={TWEET_BOOKMARKS} />;
}

export const BOOKMARKS_SOURCE: Array<BookmarkSourceEntry> = [
  {
    url: "https://x.com/feross/status/2038867034419982449",
    tags: ["Security"],
  },
  {
    url: "https://x.com/emirayaaz/status/1931827480073019740",
    tags: ["ASCII", "Design", "Generative AI"],
  },
  {
    url: "https://x.com/raul_dronca/status/2023341511375737291",
    tags: ["Design"],
  },
  {
    url: "https://x.com/aaronmahlke/status/2023466163234365667",
    tags: ["Shaders", "WebGL"],
  },
  {
    url: "https://x.com/loseva_pro/status/2023416480759705888",
    tags: ["Design"],
  },
  {
    url: "https://x.com/jh3yy/status/1973758534761521292",
    tags: ["Animation"],
  },
  {
    url: "https://x.com/lifeofmansoor/status/2036367122117566674",
    tags: ["Design"],
  },
  {
    url: "https://x.com/DrapzDZN/status/2036760002548138308",
    tags: ["Design"],
  },
  {
    url: "https://x.com/pdotcv/status/2036775214160232717",
    tags: ["Design", "ASCII"],
  },
  {
    url: "https://x.com/_chenglou/status/2037713766205608234",
    tags: ["Performance"],
  },
  {
    url: "https://x.com/rincidium/status/2015930122776564113",
    tags: ["Design", "Generative AI"],
  },
  {
    url: "https://x.com/ctnicholasdev/status/2018354238867591321",
    tags: ["Animation"],
  },
  {
    url: "https://x.com/viktoroddy/status/2018645043909939419",
    tags: ["Design", "Generative AI"],
  },
  {
    url: "https://x.com/viktorhofte/status/2018725322712027255",
    tags: ["Design", "Onboarding"],
  },
  {
    url: "https://x.com/diegohaz/status/2019751466169229542",
    tags: ["CSS"],
  },
  {
    url: "https://x.com/sorenblank/status/2021671940646482267",
    tags: ["Performance"],
  },
  {
    url: "https://x.com/jh3yy/status/2024146610398130486",
    tags: ["Design"],
  },
];
