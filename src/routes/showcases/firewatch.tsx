import { createFileRoute } from "@tanstack/react-router";
import { PageTypeMD } from "@/components/layout/PageType-MD";
import { Section } from "@/components/elements/Section";
import { Label } from "@/components/elements/Label";
import { ExternalLink } from "@/components/elements/ExternalLink";
import { Separator } from "@/components/shadcn-ui/separator";

export const Route = createFileRoute("/showcases/firewatch")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <PageTypeMD>
      <h1>
        <Label className="mb-2">SHOWCASES</Label>
        <span className="block text-4xl font-bold uppercase">Firewatch</span>
      </h1>
      <ul>
        <li>
          <ExternalLink href="https://www.firewatchgame.com/">firewatchgame.com</ExternalLink>
        </li>
      </ul>
      <Separator />
      <Section title="MISC">
        <iframe src="https://www.firewatchgame.com/" width="100%" height="600px"></iframe>
      </Section>
    </PageTypeMD>
  );
}
