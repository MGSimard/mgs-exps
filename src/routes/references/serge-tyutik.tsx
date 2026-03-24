import { createFileRoute } from "@tanstack/react-router";
import { PageTypeMD } from "@/components/layout/PageType-MD";
import { Section } from "@/components/elements/Section";
import { GridGallery } from "#/components/GridGallery";
import type { Slide } from "#/components/GridGallery";
import { Separator } from "@/components/shadcn-ui/separator";

export const Route = createFileRoute("/references/serge-tyutik")({
  component: RouteComponent,
});

const HEADER_LINKS = [
  {
    url: "https://x.com/tdeser/",
    label: "x.com/tdeser",
  },
  {
    url: "https://growa.studio/",
    label: "growa.studio",
  },
];

function RouteComponent() {
  return (
    <PageTypeMD label="REFERENCES" title="Serge Tyutik" links={HEADER_LINKS}>
      <Section title="ORYN">
        <GridGallery slides={ORYN_SLIDES} />
      </Section>
      <Separator />
      <Section title="SR3">
        <GridGallery slides={SR3_SLIDES} />
      </Section>
    </PageTypeMD>
  );
}

const ORYN_SLIDES: Array<Slide> = [
  {
    url: "/assets/references/serge-tyutik/oryn-1.webp",
    thumbUrl: "/assets/references/serge-tyutik/oryn-1-thumb.webp",
    alt: "Oryn 1",
  },
  {
    url: "/assets/references/serge-tyutik/oryn-2.webp",
    thumbUrl: "/assets/references/serge-tyutik/oryn-2-thumb.webp",
    alt: "Oryn 2",
  },
  {
    url: "/assets/references/serge-tyutik/oryn-3.webp",
    thumbUrl: "/assets/references/serge-tyutik/oryn-3-thumb.webp",
    alt: "Oryn 3",
  },
  {
    url: "/assets/references/serge-tyutik/oryn-4.webp",
    thumbUrl: "/assets/references/serge-tyutik/oryn-4-thumb.webp",
    alt: "Oryn 4",
  },
  {
    url: "/assets/references/serge-tyutik/oryn-5.webp",
    thumbUrl: "/assets/references/serge-tyutik/oryn-5-thumb.webp",
    alt: "Oryn 5",
  },
  {
    url: "/assets/references/serge-tyutik/oryn-6.webp",
    thumbUrl: "/assets/references/serge-tyutik/oryn-6-thumb.webp",
    alt: "Oryn 6",
  },
  {
    url: "/assets/references/serge-tyutik/oryn-7.webp",
    thumbUrl: "/assets/references/serge-tyutik/oryn-7-thumb.webp",
    alt: "Oryn 7",
  },
  {
    url: "/assets/references/serge-tyutik/oryn-8.webp",
    thumbUrl: "/assets/references/serge-tyutik/oryn-8-thumb.webp",
    alt: "Oryn 8",
  },
];

const SR3_SLIDES: Array<Slide> = [
  {
    url: "/assets/references/serge-tyutik/sr3-1.webp",
    thumbUrl: "/assets/references/serge-tyutik/sr3-1-thumb.webp",
    alt: "SR3 1",
  },
  {
    url: "/assets/references/serge-tyutik/sr3-2.webp",
    thumbUrl: "/assets/references/serge-tyutik/sr3-2-thumb.webp",
    alt: "SR3 2",
  },
  {
    url: "/assets/references/serge-tyutik/sr3-3.webp",
    thumbUrl: "/assets/references/serge-tyutik/sr3-3-thumb.webp",
    alt: "SR3 3",
  },
  {
    url: "/assets/references/serge-tyutik/sr3-4.webp",
    thumbUrl: "/assets/references/serge-tyutik/sr3-4-thumb.webp",
    alt: "SR3 4",
  },
];
