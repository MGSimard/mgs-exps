import { createFileRoute } from "@tanstack/react-router";
import { PageTypeMD } from "@/components/layout/PageType-MD";
import { Section } from "@/components/elements/Section";
import { Label } from "@/components/elements/Label";
import { ExternalLink } from "@/components/elements/ExternalLink";
import { GridGallery } from "#/components/GridGallery";
import type { Slide } from "#/components/GridGallery";
import { Separator } from "@/components/shadcn-ui/separator";

export const Route = createFileRoute("/references/kuba")({
  component: RouteComponent,
});

const CYPHER_SLIDES: Array<Slide> = [
  {
    url: "/assets/references/kuba/cypher-1.webp",
    thumbUrl: "/assets/references/kuba/cypher-1-thumb.webp",
    alt: "CYPHER 1",
  },
  {
    url: "/assets/references/kuba/cypher-2.webp",
    thumbUrl: "/assets/references/kuba/cypher-2-thumb.webp",
    alt: "CYPHER 2",
  },
  {
    url: "/assets/references/kuba/cypher-3.webp",
    thumbUrl: "/assets/references/kuba/cypher-3-thumb.webp",
    alt: "CYPHER 3",
  },
  {
    url: "/assets/references/kuba/cypher-4.webp",
    thumbUrl: "/assets/references/kuba/cypher-4-thumb.webp",
    alt: "CYPHER 4",
  },
  {
    url: "/assets/references/kuba/cypher-5.webp",
    thumbUrl: "/assets/references/kuba/cypher-5-thumb.webp",
    alt: "CYPHER 5",
  },
  {
    url: "/assets/references/kuba/cypher-6.webp",
    thumbUrl: "/assets/references/kuba/cypher-6-thumb.webp",
    alt: "CYPHER 6",
  },
];

function RouteComponent() {
  return (
    <PageTypeMD>
      <h1>
        <Label className="mb-2">REFERENCES</Label>
        <span className="block text-4xl font-bold uppercase">Kuba</span>
      </h1>
      <ul>
        <li>
          <ExternalLink href="https://x.com/kubadesign">x.com/kubadesign</ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://heykuba.com/">heykuba.com</ExternalLink>
        </li>
      </ul>
      <Separator />
      <Section title="CYPHER">
        <GridGallery slides={CYPHER_SLIDES} />
      </Section>
      <Separator />
    </PageTypeMD>
  );
}
