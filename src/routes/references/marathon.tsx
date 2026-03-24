import { createFileRoute } from "@tanstack/react-router";
import { PageTypeMD } from "@/components/layout/PageType-MD";
import { Section } from "@/components/elements/Section";
// import { GridGallery } from "#/components/GridGallery";
import { Separator } from "@/components/shadcn-ui/separator";

export const Route = createFileRoute("/references/marathon")({
  component: RouteComponent,
});

const HEADER_LINKS = [
  {
    url: "https://marathonthegame.com/",
    label: "marathonthegame.com",
  },
];

function RouteComponent() {
  return (
    <PageTypeMD label="REFERENCES" title="Marathon" links={HEADER_LINKS}>
      <Section title="MISC">{/* <GridGallery slides={ORYN_SLIDES} /> */}</Section>
      <Separator />
      <Section title="SR3">{/* <GridGallery slides={SR3_SLIDES} /> */}</Section>
    </PageTypeMD>
  );
}
