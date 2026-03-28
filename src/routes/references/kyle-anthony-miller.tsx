import { createFileRoute } from "@tanstack/react-router";
import { PageTypeMD } from "@/components/layout/PageTypeMD";
import { Section } from "@/components/elements/Section";
import { GridGallery } from "#/components/GridGallery";
import type { Slide } from "#/components/GridGallery";
import { Separator } from "@/components/shadcn-ui/separator";

export const Route = createFileRoute("/references/kyle-anthony-miller")({
  component: RouteComponent,
});

const HEADER_LINKS = [
  {
    url: "https://x.com/kyleanthony/",
    label: "x.com/kyleanthony",
  },
  {
    url: "https://brasshands.com/",
    label: "brasshands.com",
  },
];

function RouteComponent() {
  return (
    <PageTypeMD label="REFERENCES" title="Kyle Anthony Miller" links={HEADER_LINKS}>
      <Section title="CATHEDRAL THERAPEUTICS">
        <GridGallery slides={CATHEDRAL_THERAPEUTICS_SLIDES} />
      </Section>
      <Separator />
      <Section title="FACTORY">
        <GridGallery slides={FACTORY_SLIDES} />
      </Section>
      <Separator />
      <Section title="SYNTHETIC">
        <GridGallery slides={SYNTHETIC_SLIDES} />
      </Section>
      <Separator />
      <Section title="UNITED DRONE COMPANY">
        <GridGallery slides={UNITED_DRONE_COMPANY_SLIDES} />
      </Section>
      <Separator />
      <Section title="MISC">
        <GridGallery slides={MISC_SLIDES} />
      </Section>
      <Separator />
    </PageTypeMD>
  );
}

const CATHEDRAL_THERAPEUTICS_SLIDES: Array<Slide> = [
  {
    url: "/assets/references/kyle-anthony-miller/cathedral-therapeutics-1.webp",
    thumbUrl: "/assets/references/kyle-anthony-miller/cathedral-therapeutics-1-thumb.webp",
    alt: "Cathedral Therapeutics 1",
  },
  {
    url: "/assets/references/kyle-anthony-miller/cathedral-therapeutics-2.webp",
    thumbUrl: "/assets/references/kyle-anthony-miller/cathedral-therapeutics-2-thumb.webp",
    alt: "Cathedral Therapeutics 2",
  },
  {
    url: "/assets/references/kyle-anthony-miller/cathedral-therapeutics-3.webp",
    thumbUrl: "/assets/references/kyle-anthony-miller/cathedral-therapeutics-3-thumb.webp",
    alt: "Cathedral Therapeutics 3",
  },
  {
    url: "/assets/references/kyle-anthony-miller/cathedral-therapeutics-4.webp",
    thumbUrl: "/assets/references/kyle-anthony-miller/cathedral-therapeutics-4-thumb.webp",
    alt: "Cathedral Therapeutics 4",
  },
];

const FACTORY_SLIDES: Array<Slide> = [
  {
    url: "/assets/references/kyle-anthony-miller/factory-1.webp",
    thumbUrl: "/assets/references/kyle-anthony-miller/factory-1-thumb.webp",
    alt: "Factory 1",
  },
  {
    url: "/assets/references/kyle-anthony-miller/factory-2.webp",
    thumbUrl: "/assets/references/kyle-anthony-miller/factory-2-thumb.webp",
    alt: "Factory 2",
  },
  {
    url: "/assets/references/kyle-anthony-miller/factory-3.webp",
    thumbUrl: "/assets/references/kyle-anthony-miller/factory-3-thumb.webp",
    alt: "Factory 3",
  },
  {
    url: "/assets/references/kyle-anthony-miller/factory-4.webp",
    thumbUrl: "/assets/references/kyle-anthony-miller/factory-4-thumb.webp",
    alt: "Factory 4",
  },
];

const SYNTHETIC_SLIDES: Array<Slide> = [
  {
    url: "/assets/references/kyle-anthony-miller/synthetic-1.webp",
    thumbUrl: "/assets/references/kyle-anthony-miller/synthetic-1-thumb.webp",
    alt: "Synthetic 1",
  },
  {
    url: "/assets/references/kyle-anthony-miller/synthetic-2.webp",
    thumbUrl: "/assets/references/kyle-anthony-miller/synthetic-2-thumb.webp",
    alt: "Synthetic 2",
  },
  {
    url: "/assets/references/kyle-anthony-miller/synthetic-3.webp",
    thumbUrl: "/assets/references/kyle-anthony-miller/synthetic-3-thumb.webp",
    alt: "Synthetic 3",
  },
  {
    url: "/assets/references/kyle-anthony-miller/synthetic-4.webp",
    thumbUrl: "/assets/references/kyle-anthony-miller/synthetic-4-thumb.webp",
    alt: "Synthetic 4",
  },
];

const UNITED_DRONE_COMPANY_SLIDES: Array<Slide> = [
  {
    url: "/assets/references/kyle-anthony-miller/united-drone-company-1.webp",
    thumbUrl: "/assets/references/kyle-anthony-miller/united-drone-company-1-thumb.webp",
    alt: "United Drone Company 1",
  },
  {
    url: "/assets/references/kyle-anthony-miller/united-drone-company-2.webp",
    thumbUrl: "/assets/references/kyle-anthony-miller/united-drone-company-2-thumb.webp",
    alt: "United Drone Company 2",
  },
  {
    url: "/assets/references/kyle-anthony-miller/united-drone-company-3.webp",
    thumbUrl: "/assets/references/kyle-anthony-miller/united-drone-company-3-thumb.webp",
    alt: "United Drone Company 3",
  },
  {
    url: "/assets/references/kyle-anthony-miller/united-drone-company-4.webp",
    thumbUrl: "/assets/references/kyle-anthony-miller/united-drone-company-4-thumb.webp",
    alt: "United Drone Company 4",
  },
  {
    url: "/assets/references/kyle-anthony-miller/united-drone-company-5.webp",
    thumbUrl: "/assets/references/kyle-anthony-miller/united-drone-company-5-thumb.webp",
    alt: "United Drone Company 5",
  },
];

const MISC_SLIDES: Array<Slide> = [
  {
    url: "/assets/references/kyle-anthony-miller/misc-1.webp",
    thumbUrl: "/assets/references/kyle-anthony-miller/misc-1-thumb.webp",
    alt: "Misc 1",
  },
  {
    url: "/assets/references/kyle-anthony-miller/misc-2.webp",
    thumbUrl: "/assets/references/kyle-anthony-miller/misc-2-thumb.webp",
    alt: "Misc 2",
  },
  {
    url: "/assets/references/kyle-anthony-miller/misc-3.webp",
    thumbUrl: "/assets/references/kyle-anthony-miller/misc-3-thumb.webp",
    alt: "Misc 3",
  },
  {
    url: "/assets/references/kyle-anthony-miller/misc-4.webp",
    thumbUrl: "/assets/references/kyle-anthony-miller/misc-4-thumb.webp",
    alt: "Misc 4",
  },
  {
    url: "/assets/references/kyle-anthony-miller/misc-5.webp",
    thumbUrl: "/assets/references/kyle-anthony-miller/misc-5-thumb.webp",
    alt: "Misc 5",
  },
  {
    url: "/assets/references/kyle-anthony-miller/misc-6.webp",
    thumbUrl: "/assets/references/kyle-anthony-miller/misc-6-thumb.webp",
    alt: "Misc 6",
  },
  {
    url: "/assets/references/kyle-anthony-miller/misc-7.webp",
    thumbUrl: "/assets/references/kyle-anthony-miller/misc-7-thumb.webp",
    alt: "Misc 7",
  },
  {
    url: "/assets/references/kyle-anthony-miller/misc-8.webp",
    thumbUrl: "/assets/references/kyle-anthony-miller/misc-8-thumb.webp",
    alt: "Misc 8",
  },
  {
    url: "/assets/references/kyle-anthony-miller/misc-9.webp",
    thumbUrl: "/assets/references/kyle-anthony-miller/misc-9-thumb.webp",
    alt: "Misc 9",
  },
  {
    url: "/assets/references/kyle-anthony-miller/misc-10.webp",
    thumbUrl: "/assets/references/kyle-anthony-miller/misc-10-thumb.webp",
    alt: "Misc 10",
  },
  {
    url: "/assets/references/kyle-anthony-miller/misc-11.webp",
    thumbUrl: "/assets/references/kyle-anthony-miller/misc-11-thumb.webp",
    alt: "Misc 11",
  },
  {
    url: "/assets/references/kyle-anthony-miller/misc-12.webp",
    thumbUrl: "/assets/references/kyle-anthony-miller/misc-12-thumb.webp",
    alt: "Misc 12",
  },
  {
    url: "/assets/references/kyle-anthony-miller/misc-13.webp",
    thumbUrl: "/assets/references/kyle-anthony-miller/misc-13-thumb.webp",
    alt: "Misc 13",
  },
  {
    url: "/assets/references/kyle-anthony-miller/misc-14.webp",
    thumbUrl: "/assets/references/kyle-anthony-miller/misc-14-thumb.webp",
    alt: "Misc 14",
  },
  {
    url: "/assets/references/kyle-anthony-miller/misc-15.webp",
    thumbUrl: "/assets/references/kyle-anthony-miller/misc-15-thumb.webp",
    alt: "Misc 15",
  },
  {
    url: "/assets/references/kyle-anthony-miller/misc-16.webp",
    thumbUrl: "/assets/references/kyle-anthony-miller/misc-16-thumb.webp",
    alt: "Misc 16",
  },
];
