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
    id: "lib-001",
    name: "shadcn/ui",
    url: "https://ui.shadcn.com/",
    tags: ["Design System", "shadcn/ui"],
  },
];
