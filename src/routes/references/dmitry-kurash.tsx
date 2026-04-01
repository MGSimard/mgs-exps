import { createFileRoute } from "@tanstack/react-router";
import { PageTypeMD } from "@/components/layout/PageTypeMD";
import { Section } from "@/components/elements/Section";
import { GridGallery } from "#/components/GridGallery";
import type { Slide } from "#/components/GridGallery";
import { Separator } from "@/components/shadcn-ui/separator";

export const Route = createFileRoute("/references/dmitry-kurash")({
  component: RouteComponent,
});

const HEADER_LINKS = [
  {
    url: "https://x.com/DmitryKurash/",
    label: "x.com/DmitryKurash",
  },
];

function RouteComponent() {
  return (
    <PageTypeMD label="REFERENCES" title="Dmitry Kurash" links={HEADER_LINKS}>
      <Section title="MISC">
        <GridGallery slides={MISC_SLIDES} />
      </Section>
      <Separator />
    </PageTypeMD>
  );
}

const MISC_SLIDES: Array<Slide> = [
  {
    url: "/assets/references/dmitry-kurash/dmitry-kurash-1.webp",
    thumbUrl: "/assets/references/dmitry-kurash/dmitry-kurash-1-thumb.webp",
    alt: "Dmitry Kurash 1",
  },
  {
    url: "/assets/references/dmitry-kurash/dmitry-kurash-2.webp",
    thumbUrl: "/assets/references/dmitry-kurash/dmitry-kurash-2-thumb.webp",
    alt: "Dmitry Kurash 2",
  },
  {
    url: "/assets/references/dmitry-kurash/dmitry-kurash-3.webp",
    thumbUrl: "/assets/references/dmitry-kurash/dmitry-kurash-3-thumb.webp",
    alt: "Dmitry Kurash 3",
  },
  {
    url: "/assets/references/dmitry-kurash/dmitry-kurash-4.webp",
    thumbUrl: "/assets/references/dmitry-kurash/dmitry-kurash-4-thumb.webp",
    alt: "Dmitry Kurash 4",
  },
  {
    url: "/assets/references/dmitry-kurash/dmitry-kurash-5.webp",
    thumbUrl: "/assets/references/dmitry-kurash/dmitry-kurash-5-thumb.webp",
    alt: "Dmitry Kurash 5",
  },
  {
    url: "/assets/references/dmitry-kurash/dmitry-kurash-6.webp",
    thumbUrl: "/assets/references/dmitry-kurash/dmitry-kurash-6-thumb.webp",
    alt: "Dmitry Kurash 6",
  },
  {
    url: "/assets/references/dmitry-kurash/dmitry-kurash-7.webp",
    thumbUrl: "/assets/references/dmitry-kurash/dmitry-kurash-7-thumb.webp",
    alt: "Dmitry Kurash 7",
  },
  {
    url: "/assets/references/dmitry-kurash/dmitry-kurash-8.webp",
    thumbUrl: "/assets/references/dmitry-kurash/dmitry-kurash-8-thumb.webp",
    alt: "Dmitry Kurash 8",
  },
];
