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
    id: "tool-000",
    name: "Midjourney",
    url: "https://www.midjourney.com/",
    tags: ["Generative AI", "Image", "Inspiration", "Video"],
  },
  {
    id: "tool-004",
    name: "Unicorn Studio",
    url: "https://unicorn.studio/",
    tags: ["Inspiration", "Shaders", "WebGL"],
  },
  {
    id: "tool-003",
    name: "Smooth Blur",
    url: "https://smooth-blur.vercel.app/",
    tags: ["Progressive Blur"],
  },
  {
    id: "tool-002",
    name: "Graindrad",
    url: "https://grainrad.com/",
    tags: ["ASCII", "Filters", "Image", "Shaders", "Video", "WebGL"],
  },
  {
    id: "tool-001",
    name: "pixelCrash",
    url: "https://pixelcrash.xyz/",
    tags: ["ASCII", "Filters", "Video"],
  },
];
