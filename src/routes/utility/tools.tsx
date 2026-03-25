import { createFileRoute } from "@tanstack/react-router";
import { PageTypeCSV } from "@/components/layout/PageTypeCSV";

export const Route = createFileRoute("/utility/tools")({
  component: RouteComponent,
});

function RouteComponent() {
  return <PageTypeCSV label="UTILITY" title="TOOLS" data={TABLE_DATA} />;
}

const TABLE_DATA = [
  {
    id: "tool-010",
    name: "Observable",
    url: "https://observablehq.com",
    tags: ["Collaboration", "Data Analysis", "Data Visualization"],
  },

  {
    id: "tool-009",
    name: "Agent Auth",
    url: "https://agent-auth-protocol.com",
    tags: ["AI Toolkit", "Agent Authentication", "Better Auth"],
  },
  {
    id: "tool-008",
    name: "json-render",
    url: "https://json-render.dev",
    tags: ["AI Toolkit", "Radix UI", "React", "shadcn/ui", "Tailwind CSS"],
  },
  {
    id: "tool-007",
    name: "The Agent Skills Directory",
    url: "https://skills.sh",
    tags: ["AI Toolkit", "Configuration", "Skills"],
  },
  {
    id: "tool-006",
    name: "ui.sh",
    url: "https://ui.sh",
    tags: ["AI Toolkit"],
  },
  {
    id: "tool-005",
    name: "Midjourney",
    url: "https://midjourney.com",
    tags: ["Generative AI", "Image", "Inspiration", "Video"],
  },
  {
    id: "tool-004",
    name: "Unicorn Studio",
    url: "https://unicorn.studio",
    tags: ["Inspiration", "Shaders", "WebGL"],
  },
  {
    id: "tool-003",
    name: "Smooth Blur",
    url: "https://smooth-blur.vercel.app",
    tags: ["Progressive Blur"],
  },
  {
    id: "tool-002",
    name: "Graindrad",
    url: "https://grainrad.com",
    tags: ["ASCII", "Filters", "Image", "Shaders", "Video", "WebGL"],
  },
  {
    id: "tool-001",
    name: "pixelCrash",
    url: "https://pixelcrash.xyz",
    tags: ["ASCII", "Filters", "Video"],
  },
];
