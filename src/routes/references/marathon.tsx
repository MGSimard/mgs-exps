import { createFileRoute } from "@tanstack/react-router";
import { PageTypeMD } from "@/components/layout/PageType-MD";
import { Section } from "@/components/elements/Section";
import { Label } from "@/components/elements/Label";
import { ExternalLink } from "@/components/elements/ExternalLink";
import { GridGallery } from "#/components/GridGallery";
import { Separator } from "@/components/shadcn-ui/separator";

export const Route = createFileRoute("/references/marathon")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <PageTypeMD>
      <h1>
        <Label className="mb-2">REFERENCES</Label>
        <span className="block text-4xl font-bold uppercase">Marathon</span>
      </h1>
      <ul>
        <li>
          <ExternalLink href="https://marathonthegame.com/">marathonthegame.com</ExternalLink>
        </li>
      </ul>
      <Separator />
      <Section title="MISC">{/* <GridGallery slides={ORYN_SLIDES} /> */}</Section>
      <Separator />
      <Section title="SR3">{/* <GridGallery slides={SR3_SLIDES} /> */}</Section>
    </PageTypeMD>
  );
}
