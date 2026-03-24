import { createFileRoute } from "@tanstack/react-router";
import { PageTypeMD } from "@/components/layout/PageTypeMD";
import { Section } from "@/components/elements/Section";
import { GridGallery } from "#/components/GridGallery";
import type { Slide } from "#/components/GridGallery";

export const Route = createFileRoute("/references/james-lee")({
  component: RouteComponent,
});

const HEADER_LINKS = [
  {
    url: "https://x.com/jameslee03/",
    label: "x.com/jameslee03",
  },
  {
    url: "https://www.youtube.com/@JamesLee/",
    label: "youtube.com/@JamesLee",
  },
];

function RouteComponent() {
  return (
    <PageTypeMD label="REFERENCES" title="James Lee" links={HEADER_LINKS}>
      <Section title="BREAKING UP WITH ADOBE">
        <GridGallery slides={BREAKING_UP_WITH_ADOBE_SLIDES} />
      </Section>
    </PageTypeMD>
  );
}

const BREAKING_UP_WITH_ADOBE_SLIDES: Array<Slide> = [
  {
    url: "/assets/references/james-lee/adobe-1.webp",
    thumbUrl: "/assets/references/james-lee/adobe-1-thumb.webp",
    alt: "BREAKING UP WITH ADOBE 1",
  },
  {
    url: "/assets/references/james-lee/adobe-2.webp",
    thumbUrl: "/assets/references/james-lee/adobe-2-thumb.webp",
    alt: "BREAKING UP WITH ADOBE 2",
  },
  {
    url: "/assets/references/james-lee/adobe-3.webp",
    thumbUrl: "/assets/references/james-lee/adobe-3-thumb.webp",
    alt: "BREAKING UP WITH ADOBE 3",
  },
  {
    url: "/assets/references/james-lee/adobe-4.webp",
    thumbUrl: "/assets/references/james-lee/adobe-4-thumb.webp",
    alt: "BREAKING UP WITH ADOBE 4",
  },
  {
    url: "/assets/references/james-lee/adobe-5.webp",
    thumbUrl: "/assets/references/james-lee/adobe-5-thumb.webp",
    alt: "BREAKING UP WITH ADOBE 5",
  },
  {
    url: "/assets/references/james-lee/adobe-6.webp",
    thumbUrl: "/assets/references/james-lee/adobe-6-thumb.webp",
    alt: "BREAKING UP WITH ADOBE 6",
  },
  {
    url: "/assets/references/james-lee/adobe-7.webp",
    thumbUrl: "/assets/references/james-lee/adobe-7-thumb.webp",
    alt: "BREAKING UP WITH ADOBE 7",
  },
  {
    url: "/assets/references/james-lee/adobe-8.webp",
    thumbUrl: "/assets/references/james-lee/adobe-8-thumb.webp",
    alt: "BREAKING UP WITH ADOBE 8",
  },
];
