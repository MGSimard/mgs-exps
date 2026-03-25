import { createFileRoute } from "@tanstack/react-router";
import { PageTypeCSV } from "@/components/layout/PageTypeCSV";

export const Route = createFileRoute("/utility/ui-libraries")({
  component: RouteComponent,
});

function RouteComponent() {
  return <PageTypeCSV label="UTILITY" title="UI LIBRARIES" data={TABLE_DATA} />;
}

const TABLE_DATA = [
  {
    id: "lib-009",
    name: "tailark",
    url: "https://tailark.com",
    tags: ["Base UI", "Components", "Radix UI", "React", "shadcn/ui", "Tailwind CSS", "Templates"],
  },
  {
    id: "lib-008",
    name: "React Bits",
    url: "https://reactbits.dev",
    tags: ["Components", "GSAP", "Shaders", "React", "Tailwind CSS", "WebGL"],
  },
  {
    id: "lib-007",
    name: "mapcn",
    url: "https://mapcn.dev",
    tags: ["Base UI", "Components", "MapLibre", "Radix UI", "React", "shadcn/ui", "Tailwind CSS"],
  },
  {
    id: "lib-006",
    name: "fulldev/ui",
    url: "https://ui.full.dev",
    tags: ["Astro", "Base UI", "Components", "Radix UI", "React", "shadcn/ui", "Tailwind CSS"],
  },
  {
    id: "lib-005",
    name: "21st",
    url: "https://21st.dev",
    tags: ["Components", "Inspiration", "React"],
  },
  {
    id: "lib-004",
    name: "Eldora UI",
    url: "https://eldoraui.site",
    tags: ["Components", "Motion", "React", "shadcn/ui", "Tailwind CSS", "Templates"],
  },
  {
    id: "lib-003",
    name: "ReUI",
    url: "https://reui.io/",
    tags: ["Base UI", "Components", "Radix UI", "React", "shadcn/ui", "Tailwind CSS"],
  },
  {
    id: "lib-002",
    name: "shadcn/ui Directory",
    url: "https://ui.shadcn.com/docs/directory",
    tags: ["Base UI", "Components", "Radix UI", "React", "shadcn/ui", "Tailwind CSS"],
  },
  {
    id: "lib-001",
    name: "shadcn/ui",
    url: "https://ui.shadcn.com",
    tags: ["Base UI", "Components", "Design System", "Radix UI", "React", "shadcn/ui", "Tailwind CSS"],
  },
];
