import { createFileRoute } from "@tanstack/react-router";
import { PageTypeMD } from "@/components/layout/PageType-MD";
import { Section } from "@/components/elements/Section";
import { Label } from "@/components/elements/Label";
import { ExternalLink } from "@/components/elements/ExternalLink";
import { Separator } from "@/components/shadcn-ui/separator";

export const Route = createFileRoute("/articles")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <PageTypeMD>
      <h1>
        <Label className="mb-2">NOTES</Label>
        <span className="block text-4xl font-bold uppercase">ARTICLES</span>
      </h1>
      <Separator />
      <Section title="The Pocket Guide of Essential YC Advice"></Section>
      <Separator />
    </PageTypeMD>
  );
}
