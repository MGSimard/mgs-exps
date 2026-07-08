import { createFileRoute } from "@tanstack/react-router";
import { PageTypeMD } from "@/components/layout/PageTypeMD";
import { Section } from "@/components/elements/Section";
import { GridGallery } from "#/components/GridGallery";
import type { Slide } from "#/components/GridGallery";
import { Separator } from "@/components/shadcn-ui/separator";
import { ExternalLink } from "#/components/elements/ExternalLink";

export const Route = createFileRoute("/references/msi")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <PageTypeMD label="REFERENCES" title="Mid-Season Invitational">
      <Section title="MSI 2026">
        <ul>
          <li>
            <ExternalLink href="https://lolesports.com/en-US/news/msi-2026-primer">MSI 2026 Primer</ExternalLink>
          </li>
          <li>
            <ExternalLink href="https://x.com/lolesports">@lolesports</ExternalLink>
          </li>
        </ul>

        <GridGallery slides={MSI_2026_SLIDES} />
      </Section>
      <Separator />
      <Section title="MSI 2025">
        <ul>
          <li>
            <ExternalLink href="https://buck.co/work/riot-games-msi">
              Riot Games League of Legends - Mid-Season Invitational | BUCK
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href="https://www.brandsinmotion.xyz/resource/buck-msi25" className="block">
              MSI-25 &ndash; Brands In Motion
            </ExternalLink>
          </li>
        </ul>
        <GridGallery slides={MSI_2025_SLIDES} />
      </Section>
    </PageTypeMD>
  );
}

const MSI_2026_SLIDES: Array<Slide> = [
  {
    url: "/assets/references/msi/msi26-1.webp",
    thumbUrl: "/assets/references/msi/msi26-1-thumb.webp",
    alt: "MSI 26 - 1",
  },
  {
    url: "/assets/references/msi/msi26-2.webp",
    thumbUrl: "/assets/references/msi/msi26-2-thumb.webp",
    alt: "MSI 26 - 2",
  },
  {
    url: "/assets/references/msi/msi26-3.webp",
    thumbUrl: "/assets/references/msi/msi26-3-thumb.webp",
    alt: "MSI 26 - 3",
  },
  {
    url: "/assets/references/msi/msi26-4.webp",
    thumbUrl: "/assets/references/msi/msi26-4-thumb.webp",
    alt: "MSI 26 - 4",
  },
  {
    url: "/assets/references/msi/msi26-5.webp",
    thumbUrl: "/assets/references/msi/msi26-5-thumb.webp",
    alt: "MSI 26 - 5",
  },
  {
    url: "/assets/references/msi/msi26-6.webp",
    thumbUrl: "/assets/references/msi/msi26-6-thumb.webp",
    alt: "MSI 26 - 6",
  },
  {
    url: "/assets/references/msi/msi26-7.webp",
    thumbUrl: "/assets/references/msi/msi26-7-thumb.webp",
    alt: "MSI 26 - 7",
  },
  {
    url: "/assets/references/msi/msi26-8.webp",
    thumbUrl: "/assets/references/msi/msi26-8-thumb.webp",
    alt: "MSI 26 - 8",
  },
  {
    url: "/assets/references/msi/msi26-9.webp",
    thumbUrl: "/assets/references/msi/msi26-9-thumb.webp",
    alt: "MSI 26 - 9",
  },
  {
    url: "/assets/references/msi/msi26-10.webp",
    thumbUrl: "/assets/references/msi/msi26-10-thumb.webp",
    alt: "MSI 26 - 10",
  },
  {
    url: "/assets/references/msi/msi26-11.webp",
    thumbUrl: "/assets/references/msi/msi26-11-thumb.webp",
    alt: "MSI 26 - 11",
  },
  {
    url: "/assets/references/msi/msi26-12.webp",
    thumbUrl: "/assets/references/msi/msi26-12-thumb.webp",
    alt: "MSI 26 - 12",
  },
  {
    url: "/assets/references/msi/msi26-13.webp",
    thumbUrl: "/assets/references/msi/msi26-13-thumb.webp",
    alt: "MSI 26 - 13",
  },
  {
    url: "/assets/references/msi/msi26-14.webp",
    thumbUrl: "/assets/references/msi/msi26-14-thumb.webp",
    alt: "MSI 26 - 14",
  },
  {
    url: "/assets/references/msi/msi26-15.webp",
    thumbUrl: "/assets/references/msi/msi26-15-thumb.webp",
    alt: "MSI 26 - 15",
  },
  {
    url: "/assets/references/msi/msi26-16.webp",
    thumbUrl: "/assets/references/msi/msi26-16-thumb.webp",
    alt: "MSI 26 - 16",
  },
  {
    url: "/assets/references/msi/msi26-17.webp",
    thumbUrl: "/assets/references/msi/msi26-17-thumb.webp",
    alt: "MSI 26 - 17",
  },
  {
    url: "/assets/references/msi/msi26-18.webp",
    thumbUrl: "/assets/references/msi/msi26-18-thumb.webp",
    alt: "MSI 26 - 18",
  },
  {
    url: "/assets/references/msi/msi26-19.webp",
    thumbUrl: "/assets/references/msi/msi26-19-thumb.webp",
    alt: "MSI 26 - 19",
  },
  {
    url: "/assets/references/msi/msi26-20.webp",
    thumbUrl: "/assets/references/msi/msi26-20-thumb.webp",
    alt: "MSI 26 - 20",
  },
  {
    url: "/assets/references/msi/msi26-21.webp",
    thumbUrl: "/assets/references/msi/msi26-21-thumb.webp",
    alt: "MSI 26 - 21",
  },
  {
    url: "/assets/references/msi/msi26-22.webp",
    thumbUrl: "/assets/references/msi/msi26-22-thumb.webp",
    alt: "MSI 26 - 22",
  },
  {
    url: "/assets/references/msi/msi26-23.webp",
    thumbUrl: "/assets/references/msi/msi26-23-thumb.webp",
    alt: "MSI 26 - 23",
  },
  {
    url: "/assets/references/msi/msi26-24.webp",
    thumbUrl: "/assets/references/msi/msi26-24-thumb.webp",
    alt: "MSI 26 - 24",
  },
];

const MSI_2025_SLIDES: Array<Slide> = [
  {
    url: "/assets/references/msi/msi25-1.mp4",
    thumbUrl: "/assets/references/msi/msi25-1-thumb.webp",
    posterUrl: "/assets/references/msi/msi25-1-poster.webp",
    alt: "MSI 25 - 1",
  },
  {
    url: "/assets/references/msi/msi25-2.webp",
    thumbUrl: "/assets/references/msi/msi25-2-thumb.webp",
    alt: "MSI 25 - 2",
  },
  {
    url: "/assets/references/msi/msi25-3.mp4",
    thumbUrl: "/assets/references/msi/msi25-3-thumb.webp",
    posterUrl: "/assets/references/msi/msi25-3-poster.webp",
    alt: "MSI 25 - 3",
  },
  {
    url: "/assets/references/msi/msi25-4.mp4",
    thumbUrl: "/assets/references/msi/msi25-4-thumb.webp",
    posterUrl: "/assets/references/msi/msi25-4-poster.webp",
    alt: "MSI 25 - 4",
  },
  {
    url: "/assets/references/msi/msi25-5.mp4",
    thumbUrl: "/assets/references/msi/msi25-5-thumb.webp",
    posterUrl: "/assets/references/msi/msi25-5-poster.webp",
    alt: "MSI 25 - 5",
  },
  {
    url: "/assets/references/msi/msi25-6.mp4",
    thumbUrl: "/assets/references/msi/msi25-6-thumb.webp",
    posterUrl: "/assets/references/msi/msi25-6-poster.webp",
    alt: "MSI 25 - 6",
  },
  {
    url: "/assets/references/msi/msi25-7.mp4",
    thumbUrl: "/assets/references/msi/msi25-7-thumb.webp",
    posterUrl: "/assets/references/msi/msi25-7-poster.webp",
    alt: "MSI 25 - 7",
  },
  {
    url: "/assets/references/msi/msi25-8.webp",
    thumbUrl: "/assets/references/msi/msi25-8-thumb.webp",
    alt: "MSI 25 - 8",
  },
  {
    url: "/assets/references/msi/msi25-9.webp",
    thumbUrl: "/assets/references/msi/msi25-9-thumb.webp",
    alt: "MSI 25 - 9",
  },
  {
    url: "/assets/references/msi/msi25-10.webp",
    thumbUrl: "/assets/references/msi/msi25-10-thumb.webp",
    alt: "MSI 25 - 10",
  },
  {
    url: "/assets/references/msi/msi25-11.webp",
    thumbUrl: "/assets/references/msi/msi25-11-thumb.webp",
    alt: "MSI 25 - 11",
  },
  {
    url: "/assets/references/msi/msi25-12.webp",
    thumbUrl: "/assets/references/msi/msi25-12-thumb.webp",
    alt: "MSI 25 - 12",
  },
  {
    url: "/assets/references/msi/msi25-13.webp",
    thumbUrl: "/assets/references/msi/msi25-13-thumb.webp",
    alt: "MSI 25 - 13",
  },
  {
    url: "/assets/references/msi/msi25-14.webp",
    thumbUrl: "/assets/references/msi/msi25-14-thumb.webp",
    alt: "MSI 25 - 14",
  },
  {
    url: "/assets/references/msi/msi25-15.webp",
    thumbUrl: "/assets/references/msi/msi25-15-thumb.webp",
    alt: "MSI 25 - 15",
  },
  {
    url: "/assets/references/msi/msi25-16.webp",
    thumbUrl: "/assets/references/msi/msi25-16-thumb.webp",
    alt: "MSI 25 - 16",
  },
  {
    url: "/assets/references/msi/msi25-17.webp",
    thumbUrl: "/assets/references/msi/msi25-17-thumb.webp",
    alt: "MSI 25 - 17",
  },
  {
    url: "/assets/references/msi/msi25-18.webp",
    thumbUrl: "/assets/references/msi/msi25-18-thumb.webp",
    alt: "MSI 25 - 18",
  },
  {
    url: "/assets/references/msi/msi25-19.webp",
    thumbUrl: "/assets/references/msi/msi25-19-thumb.webp",
    alt: "MSI 25 - 19",
  },
  {
    url: "/assets/references/msi/msi25-20.mp4",
    thumbUrl: "/assets/references/msi/msi25-20-thumb.webp",
    posterUrl: "/assets/references/msi/msi25-20-poster.webp",
    alt: "MSI 25 - 20",
  },
  {
    url: "/assets/references/msi/msi25-21.webp",
    thumbUrl: "/assets/references/msi/msi25-21-thumb.webp",
    alt: "MSI 25 - 21",
  },
  {
    url: "/assets/references/msi/msi25-22.webp",
    thumbUrl: "/assets/references/msi/msi25-22-thumb.webp",
    alt: "MSI 25 - 22",
  },
  {
    url: "/assets/references/msi/msi25-23.webp",
    thumbUrl: "/assets/references/msi/msi25-23-thumb.webp",
    alt: "MSI 25 - 23",
  },
  {
    url: "/assets/references/msi/msi25-24.webp",
    thumbUrl: "/assets/references/msi/msi25-24-thumb.webp",
    alt: "MSI 25 - 24",
  },
  {
    url: "/assets/references/msi/msi25-25.webp",
    thumbUrl: "/assets/references/msi/msi25-25-thumb.webp",
    alt: "MSI 25 - 25",
  },
  {
    url: "/assets/references/msi/msi25-26.webp",
    thumbUrl: "/assets/references/msi/msi25-26-thumb.webp",
    alt: "MSI 25 - 26",
  },
];
