import { createFileRoute } from "@tanstack/react-router";
import { PageTypeMD } from "@/components/layout/PageTypeMD";
import { Section } from "@/components/elements/Section";
import { GridGallery } from "#/components/GridGallery";
import type { Slide } from "#/components/GridGallery";
import { Separator } from "@/components/shadcn-ui/separator";

export const Route = createFileRoute("/references/creative-mints")({
  component: RouteComponent,
});

const HEADER_LINKS = [
  {
    url: "https://x.com/creativemints/",
    label: "x.com/creativemints",
  },
  {
    url: "https://creativemints.com/",
    label: "creativemints.com",
  },
  {
    url: "https://dribbble.com/creativemints/",
    label: "dribbble.com/creativemints",
  },
  {
    url: "https://www.behance.net/creativemints/",
    label: "behance.net/creativemints",
  },
];

function RouteComponent() {
  return (
    <PageTypeMD label="REFERENCES" title="Creative Mints" links={HEADER_LINKS}>
      <Section title="MISC">
        <GridGallery slides={MISC_SLIDES} />
      </Section>
    </PageTypeMD>
  );
}

const MISC_SLIDES: Array<Slide> = [
  {
    url: "/assets/references/creative-mints/creative-mints-1.webp",
    thumbUrl: "/assets/references/creative-mints/creative-mints-1-thumb.webp",
    alt: "Creative Mints 1",
  },
  {
    url: "/assets/references/creative-mints/creative-mints-2.webp",
    thumbUrl: "/assets/references/creative-mints/creative-mints-2-thumb.webp",
    alt: "Creative Mints 2",
  },
  {
    url: "/assets/references/creative-mints/creative-mints-3.webp",
    thumbUrl: "/assets/references/creative-mints/creative-mints-3-thumb.webp",
    alt: "Creative Mints 3",
  },
  {
    url: "/assets/references/creative-mints/creative-mints-4.webp",
    thumbUrl: "/assets/references/creative-mints/creative-mints-4-thumb.webp",
    alt: "Creative Mints 4",
  },
  {
    url: "/assets/references/creative-mints/creative-mints-5.webp",
    thumbUrl: "/assets/references/creative-mints/creative-mints-5-thumb.webp",
    alt: "Creative Mints 5",
  },
  {
    url: "/assets/references/creative-mints/creative-mints-6.webp",
    thumbUrl: "/assets/references/creative-mints/creative-mints-6-thumb.webp",
    alt: "Creative Mints 6",
  },
  {
    url: "/assets/references/creative-mints/creative-mints-7.webp",
    thumbUrl: "/assets/references/creative-mints/creative-mints-7-thumb.webp",
    alt: "Creative Mints 7",
  },
  {
    url: "/assets/references/creative-mints/creative-mints-8.webp",
    thumbUrl: "/assets/references/creative-mints/creative-mints-8-thumb.webp",
    alt: "Creative Mints 8",
  },
  {
    url: "/assets/references/creative-mints/creative-mints-9.webp",
    thumbUrl: "/assets/references/creative-mints/creative-mints-9-thumb.webp",
    alt: "Creative Mints 9",
  },
  {
    url: "/assets/references/creative-mints/creative-mints-10.webp",
    thumbUrl: "/assets/references/creative-mints/creative-mints-10-thumb.webp",
    alt: "Creative Mints 10",
  },
  {
    url: "/assets/references/creative-mints/creative-mints-11.webp",
    thumbUrl: "/assets/references/creative-mints/creative-mints-11-thumb.webp",
    alt: "Creative Mints 11",
  },
  {
    url: "/assets/references/creative-mints/creative-mints-12.webp",
    thumbUrl: "/assets/references/creative-mints/creative-mints-12-thumb.webp",
    alt: "Creative Mints 12",
  },
  {
    url: "/assets/references/creative-mints/creative-mints-13.webp",
    thumbUrl: "/assets/references/creative-mints/creative-mints-13-thumb.webp",
    alt: "Creative Mints 13",
  },
  {
    url: "/assets/references/creative-mints/creative-mints-14.webp",
    thumbUrl: "/assets/references/creative-mints/creative-mints-14-thumb.webp",
    alt: "Creative Mints 14",
  },
  {
    url: "/assets/references/creative-mints/creative-mints-15.webp",
    thumbUrl: "/assets/references/creative-mints/creative-mints-15-thumb.webp",
    alt: "Creative Mints 15",
  },
  {
    url: "/assets/references/creative-mints/creative-mints-16.webp",
    thumbUrl: "/assets/references/creative-mints/creative-mints-16-thumb.webp",
    alt: "Creative Mints 16",
  },
];
