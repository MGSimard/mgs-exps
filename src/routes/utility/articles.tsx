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
