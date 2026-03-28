import { createFileRoute } from "@tanstack/react-router";
import { PageTypeCSV } from "@/components/layout/PageTypeCSV";

export const Route = createFileRoute("/utility/articles")({
  component: RouteComponent,
});

function RouteComponent() {
  return <PageTypeCSV label="UTILITY" title="ARTICLES" data={TABLE_DATA} />;
}

const TABLE_DATA = [
  {
    id: "article-014",
    name: "How Google handles JavaScript throughout the indexing process",
    url: "https://vercel.com/blog/how-google-handles-javascript-throughout-the-indexing-process",
    tags: ["SEO"],
  },
  {
    id: "article-013",
    name: "Announcing Neki",
    url: "https://planetscale.com/blog/announcing-neki",
    tags: ["Postgres"],
  },
  {
    id: "article-012",
    name: "Web Interface Guidelines",
    url: "https://vercel.com/design/guidelines",
    tags: ["Accessibility"],
  },
  {
    id: "article-011",
    name: "Building real-time apps with AWS AppSync Events' WebSocket publishing",
    url: "https://aws.amazon.com/blogs/mobile/building-real-time-apps-with-aws-appsync-events-websocket-publishing",
    tags: ["Animation"],
  },
  {
    id: "article-010",
    name: "Offline caching with AWS Amplify, Tanstack, AppSync and MongoDB Atlas",
    url: "https://aws.amazon.com/blogs/mobile/offline-caching-with-aws-amplify-tanstack-appsync-and-mongodb-atlas",
    tags: ["AWS", "TanStack"],
  },
  {
    id: "article-009",
    name: "What is AWS AppSync Events?",
    url: "https://docs.aws.amazon.com/appsync/latest/eventapi/event-api-welcome.html",
    tags: ["AWS"],
  },
  {
    id: "article-008",
    name: "How to animate multiplayer cursors",
    url: "https://liveblocks.io/blog/how-to-animate-multiplayer-cursor",
    tags: ["Animation"],
  },
  {
    id: "article-007",
    name: "Building Bulletproof React Components",
    url: "https://shud.in/thoughts/build-bulletproof-react-components",
    tags: ["Performance"],
  },
  {
    id: "article-006",
    name: "Deploy TanStack Start serverless on AWS",
    url: "https://johanneskonings.dev/blog/2025-11-30-tanstack-start-aws-serverless",
    tags: ["AWS", "TanStack", "TanStack Start"],
  },
  {
    id: "article-005",
    name: "Base64 & perceived performance",
    url: "https://sorenblank.com/writing/base64-and-perceived-performance",
    tags: ["Performance"],
  },
  {
    id: "article-004",
    name: "Logging Sucks - Your Logs Are Lying To You",
    url: "https://loggingsucks.com",
    tags: ["Logs"],
  },
  {
    id: "article-003",
    name: "Static prerendering support for TanStack Start",
    url: "https://developers.cloudflare.com/changelog/2025-12-19-tanstack-start-prerendering",
    tags: ["TanStack", "TanStack Start"],
  },
  {
    id: "article-002",
    name: "The Beauty of TanStack Router",
    url: "https://tkdodo.eu/blog/the-beauty-of-tan-stack-router",
    tags: ["TanStack", "TanStack Router"],
  },
  {
    id: "article-001",
    name: "The Pocket Guide of Essential YC Advice",
    url: "https://ycombinator.com/library/4D-yc-s-essential-startup-advice",
    tags: ["Startups", "Y Combinator"],
  },
];
