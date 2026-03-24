import { createFileRoute } from "@tanstack/react-router";
import { PageTypeMD } from "@/components/layout/PageTypeMD";
import { Section } from "@/components/elements/Section";

export const Route = createFileRoute("/showcases/shoya-kajita")({
  component: RouteComponent,
});

const HEADER_LINKS = [
  {
    url: "https://dev.shoya-kajita.com/069/",
    label: "dev.shoya-kajita.com/069",
  },
];

function RouteComponent() {
  return (
    <PageTypeMD label="SHOWCASES" title="Shoya Kajita" links={HEADER_LINKS}>
      <Section title="Hand Tracking Fluid Demo">
        <iframe src="https://dev.shoya-kajita.com/069/" title="Shoya Kajita" width="100%" height="600px"></iframe>
      </Section>
    </PageTypeMD>
  );
}
