import { createFileRoute } from "@tanstack/react-router";
import { PageTypeMD } from "@/components/layout/PageTypeMD";
import { Section } from "@/components/elements/Section";
import { GridGallery } from "#/components/GridGallery";
import type { Slide } from "#/components/GridGallery";
import { Separator } from "@/components/shadcn-ui/separator";

export const Route = createFileRoute("/references/kuba")({
  component: RouteComponent,
});

const HEADER_LINKS = [
  {
    url: "https://x.com/kubadesign/",
    label: "x.com/kubadesign",
  },
  {
    url: "https://heykuba.com/",
    label: "heykuba.com",
  },
];

function RouteComponent() {
  return (
    <PageTypeMD label="REFERENCES" title="Kuba" links={HEADER_LINKS}>
      <Section title="CYPHER">
        <GridGallery slides={CYPHER_SLIDES} />
      </Section>
      <Separator />
    </PageTypeMD>
  );
}

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
