import { createFileRoute } from "@tanstack/react-router";
import { PageTypeCSV } from "@/components/layout/PageType-CSV";
import { Section } from "@/components/elements/Section";

export const Route = createFileRoute("/utility/ui-libraries")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <PageTypeCSV label="UTILITY" title="UI LIBRARIES">
      <Section></Section>
    </PageTypeCSV>
  );
}
