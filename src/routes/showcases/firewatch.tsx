import { createFileRoute } from "@tanstack/react-router";
import { PageTypeMD } from "@/components/layout/PageType-MD";
import { Section } from "@/components/elements/Section";
import { Label } from "@/components/elements/Label";
import { ExternalLink } from "@/components/elements/ExternalLink";
import { Separator } from "@/components/shadcn-ui/separator";

export const Route = createFileRoute("/showcases/firewatch")({
  component: RouteComponent,
});

const HEADER_LINKS = [
  {
    url: "https://www.firewatchgame.com/",
    label: "firewatchgame.com",
  },
];

function RouteComponent() {
  return (
    <PageTypeMD label="SHOWCASES" title="Firewatch" links={HEADER_LINKS}>
      <Section>
        <iframe src="https://www.firewatchgame.com/" title="Firewatch" width="100%" height="600px"></iframe>
      </Section>
    </PageTypeMD>
  );
}
