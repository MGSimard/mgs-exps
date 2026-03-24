import { createFileRoute } from "@tanstack/react-router";
import { PageTypeCSV } from "@/components/layout/PageType-CSV";

export const Route = createFileRoute("/utility/ui-libraries")({
  component: RouteComponent,
});

function RouteComponent() {
  return <PageTypeCSV label="UTILITY" title="UI LIBRARIES" data={TABLE_DATA} />;
}

const TABLE_DATA = [
  {
    id: "lib-001",
    name: "Item",
    url: "https://www.url.com",
    tags: ["tag", "example"],
  },
];
