import { createFileRoute } from "@tanstack/react-router";
import { PageTypeMD } from "@/components/layout/PageType-MD";
import { Section } from "@/components/elements/Section";
import { Label } from "@/components/elements/Label";
import { ExternalLink } from "@/components/elements/ExternalLink";
import { GridGallery } from "#/components/GridGallery";
import type { Slide } from "#/components/GridGallery";
import { Separator } from "@/components/shadcn-ui/separator";

export const Route = createFileRoute("/references/james-lee")({
  component: RouteComponent,
});

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

function RouteComponent() {
  return (
    <PageTypeMD>
      <h1>
        <Label className="mb-2">REFERENCES</Label>
        <span className="block text-4xl font-bold uppercase">James Lee</span>
      </h1>
      <ul>
        <li>
          <ExternalLink href="https://x.com/jameslee03/">x.com/jameslee03</ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://www.youtube.com/@JamesLee">youtube.com/@JamesLee</ExternalLink>
        </li>
      </ul>
      <Separator />
      <Section title="BREAKING UP WITH ADOBE">
        <GridGallery slides={BREAKING_UP_WITH_ADOBE_SLIDES} />
      </Section>
    </PageTypeMD>
  );
}
