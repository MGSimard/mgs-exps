import { createFileRoute } from "@tanstack/react-router";
import { PageTypeCSV } from "@/components/layout/PageType-CSV";

export const Route = createFileRoute("/utility/tools")({
  component: RouteComponent,
});

function RouteComponent() {
  return <PageTypeCSV label="UTILITY" title="TOOLS" data={TABLE_DATA} />;
}

const TABLE_DATA = [
  {
    id: "tool-001",
    name: "Google",
    url: "https://www.google.com",
    tags: ["search", "engine"],
  },
  {
    id: "tool-002",
    name: "YouTube",
    url: "https://www.youtube.com",
    tags: ["video", "streaming"],
  },
  {
    id: "tool-003",
    name: "Wikipedia",
    url: "https://www.wikipedia.org",
    tags: ["reference", "knowledge"],
  },
  {
    id: "tool-004",
    name: "GitHub",
    url: "https://github.com",
    tags: ["code", "collaboration"],
  },
  {
    id: "tool-005",
    name: "Stack Overflow",
    url: "https://stackoverflow.com",
    tags: ["developer", "questions"],
  },
  // {
  //   id: "tool-006",
  //   name: "Figma",
  //   url: "https://www.figma.com",
  //   tags: ["design", "prototype"],
  // },
  // {
  //   id: "tool-007",
  //   name: "Notion",
  //   url: "https://www.notion.so",
  //   tags: ["notes", "workspace"],
  // },
  // {
  //   id: "tool-008",
  //   name: "Slack",
  //   url: "https://slack.com",
  //   tags: ["chat", "team"],
  // },
  // {
  //   id: "tool-009",
  //   name: "Discord",
  //   url: "https://discord.com",
  //   tags: ["community", "voice"],
  // },
  // {
  //   id: "tool-010",
  //   name: "Trello",
  //   url: "https://trello.com",
  //   tags: ["boards", "planning"],
  // },
  // {
  //   id: "tool-011",
  //   name: "Asana",
  //   url: "https://asana.com",
  //   tags: ["tasks", "management"],
  // },
  // {
  //   id: "tool-012",
  //   name: "Linear",
  //   url: "https://linear.app",
  //   tags: ["issues", "productivity"],
  // },
  // {
  //   id: "tool-013",
  //   name: "Jira",
  //   url: "https://www.atlassian.com/software/jira",
  //   tags: ["tracking", "agile"],
  // },
  // {
  //   id: "tool-014",
  //   name: "Airtable",
  //   url: "https://www.airtable.com",
  //   tags: ["database", "spreadsheet"],
  // },
  // {
  //   id: "tool-015",
  //   name: "Canva",
  //   url: "https://www.canva.com",
  //   tags: ["graphics", "templates"],
  // },
  // {
  //   id: "tool-016",
  //   name: "Vercel",
  //   url: "https://vercel.com",
  //   tags: ["hosting", "deploy"],
  // },
  // {
  //   id: "tool-017",
  //   name: "Netlify",
  //   url: "https://www.netlify.com",
  //   tags: ["frontend", "hosting"],
  // },
  // {
  //   id: "tool-018",
  //   name: "Cloudflare",
  //   url: "https://www.cloudflare.com",
  //   tags: ["cdn", "security"],
  // },
  // {
  //   id: "tool-019",
  //   name: "Postman",
  //   url: "https://www.postman.com",
  //   tags: ["api", "testing"],
  // },
  // {
  //   id: "tool-020",
  //   name: "Insomnia",
  //   url: "https://insomnia.rest",
  //   tags: ["rest", "client"],
  // },
  // {
  //   id: "tool-021",
  //   name: "Sentry",
  //   url: "https://sentry.io",
  //   tags: ["errors", "monitoring"],
  // },
  // {
  //   id: "tool-022",
  //   name: "LogRocket",
  //   url: "https://logrocket.com",
  //   tags: ["session", "debugging"],
  // },
  // {
  //   id: "tool-023",
  //   name: "Loom",
  //   url: "https://www.loom.com",
  //   tags: ["recording", "async"],
  // },
  // {
  //   id: "tool-024",
  //   name: "Miro",
  //   url: "https://miro.com",
  //   tags: ["whiteboard", "brainstorm"],
  // },
  // {
  //   id: "tool-025",
  //   name: "Zapier",
  //   url: "https://zapier.com",
  //   tags: ["automation", "workflow"],
  // },
  // {
  //   id: "tool-026",
  //   name: "n8n",
  //   url: "https://n8n.io",
  //   tags: ["automation", "self-hosted"],
  // },
  // {
  //   id: "tool-027",
  //   name: "Framer",
  //   url: "https://www.framer.com",
  //   tags: ["site", "design"],
  // },
  // {
  //   id: "tool-028",
  //   name: "CodePen",
  //   url: "https://codepen.io",
  //   tags: ["frontend", "playground"],
  // },
  // {
  //   id: "tool-029",
  //   name: "Replit",
  //   url: "https://replit.com",
  //   tags: ["coding", "cloud"],
  // },
  // {
  //   id: "tool-030",
  //   name: "Dribbble",
  //   url: "https://dribbble.com",
  //   tags: ["inspiration", "portfolio"],
  // },
  // {
  //   id: "tool-031",
  //   name: "Behance",
  //   url: "https://www.behance.net",
  //   tags: ["design", "portfolio"],
  // },
  // {
  //   id: "tool-032",
  //   name: "Adobe Photoshop",
  //   url: "https://www.adobe.com/products/photoshop.html",
  //   tags: ["graphics", "editing"],
  // },
  // {
  //   id: "tool-033",
  //   name: "Adobe Illustrator",
  //   url: "https://www.adobe.com/products/illustrator.html",
  //   tags: ["graphics", "editing"],
  // },
];
