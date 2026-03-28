import { createFileRoute } from "@tanstack/react-router";
import { PageTypeMD } from "@/components/layout/PageTypeMD";
import { Section } from "@/components/elements/Section";
import { GridGallery } from "#/components/GridGallery";
import type { Slide } from "#/components/GridGallery";
import { Separator } from "@/components/shadcn-ui/separator";
import { ExternalLink } from "#/components/elements/ExternalLink";

export const Route = createFileRoute("/references/marathon")({
  component: RouteComponent,
});

const HEADER_LINKS = [
  {
    url: "https://www.marathonthegame.com",
    label: "marathonthegame.com",
  },
];

function RouteComponent() {
  return (
    <PageTypeMD label="REFERENCES" title="Marathon" links={HEADER_LINKS}>
      <Section title="Michael Rigley">
        <ExternalLink href="https://www.behance.net/gallery/205038723/MARATHON">MARATHON</ExternalLink>
        <GridGallery slides={MARATHON_MICHAEL_RIGLEY_SLIDES} />
      </Section>
      <Separator />
      <Section title="George Varodi">
        <ExternalLink href="https://www.behance.net/gallery/241988427/Marathon-Cinematic-Trailer">
          Marathon Cinematic Trailer
        </ExternalLink>
        <GridGallery slides={MARATHON_GEORGE_VARODI_SLIDES} />
      </Section>
      <Separator />
      <Section title="Samuel Jutras">
        <ExternalLink href="https://www.behance.net/gallery/222908727/SPCTR-Marathon-inspired">
          SPCTR - Marathon inspired
        </ExternalLink>
        <GridGallery slides={MARATHON_SAMUEL_JUTRAS_SLIDES} />
      </Section>
      <Separator />
      <Section title="Ghassan Habib">
        <ExternalLink href="https://www.behance.net/gallery/220385101/ANTIBODY-A-Marathon-Inspired-Visual-Design">
          ANTIBODY: A Marathon-Inspired Visual Design
        </ExternalLink>
        <GridGallery slides={MARATHON_GHASSAN_HABIB_SLIDES} />
      </Section>
    </PageTypeMD>
  );
}

const MARATHON_MICHAEL_RIGLEY_SLIDES: Array<Slide> = [
  {
    url: "/assets/references/marathon/michael-rigley-1.webp",
    thumbUrl: "/assets/references/marathon/michael-rigley-1-thumb.webp",
    alt: "Michael Rigley 1",
  },
  {
    url: "/assets/references/marathon/michael-rigley-2.webp",
    thumbUrl: "/assets/references/marathon/michael-rigley-2-thumb.webp",
    alt: "Michael Rigley 2",
  },
  {
    url: "/assets/references/marathon/michael-rigley-3.webp",
    thumbUrl: "/assets/references/marathon/michael-rigley-3-thumb.webp",
    alt: "Michael Rigley 3",
  },
  {
    url: "/assets/references/marathon/michael-rigley-4.webp",
    thumbUrl: "/assets/references/marathon/michael-rigley-4-thumb.webp",
    alt: "Michael Rigley 4",
  },
  {
    url: "/assets/references/marathon/michael-rigley-5.webp",
    thumbUrl: "/assets/references/marathon/michael-rigley-5-thumb.webp",
    alt: "Michael Rigley 5",
  },
  {
    url: "/assets/references/marathon/michael-rigley-6.webp",
    thumbUrl: "/assets/references/marathon/michael-rigley-6-thumb.webp",
    alt: "Michael Rigley 6",
  },
  {
    url: "/assets/references/marathon/michael-rigley-7.webp",
    thumbUrl: "/assets/references/marathon/michael-rigley-7-thumb.webp",
    alt: "Michael Rigley 7",
  },
  {
    url: "/assets/references/marathon/michael-rigley-8.webp",
    thumbUrl: "/assets/references/marathon/michael-rigley-8-thumb.webp",
    alt: "Michael Rigley 8",
  },
  {
    url: "/assets/references/marathon/michael-rigley-9.webp",
    thumbUrl: "/assets/references/marathon/michael-rigley-9-thumb.webp",
    alt: "Michael Rigley 9",
  },
  {
    url: "/assets/references/marathon/michael-rigley-10.webp",
    thumbUrl: "/assets/references/marathon/michael-rigley-10-thumb.webp",
    alt: "Michael Rigley 10",
  },
  {
    url: "/assets/references/marathon/michael-rigley-11.webp",
    thumbUrl: "/assets/references/marathon/michael-rigley-11-thumb.webp",
    alt: "Michael Rigley 11",
  },
  {
    url: "/assets/references/marathon/michael-rigley-12.webp",
    thumbUrl: "/assets/references/marathon/michael-rigley-12-thumb.webp",
    alt: "Michael Rigley 12",
  },
  {
    url: "/assets/references/marathon/michael-rigley-13.webp",
    thumbUrl: "/assets/references/marathon/michael-rigley-13-thumb.webp",
    alt: "Michael Rigley 13",
  },
  {
    url: "/assets/references/marathon/michael-rigley-14.webp",
    thumbUrl: "/assets/references/marathon/michael-rigley-14-thumb.webp",
    alt: "Michael Rigley 14",
  },
  {
    url: "/assets/references/marathon/michael-rigley-15.webp",
    thumbUrl: "/assets/references/marathon/michael-rigley-15-thumb.webp",
    alt: "Michael Rigley 15",
  },
  {
    url: "/assets/references/marathon/michael-rigley-16.webp",
    thumbUrl: "/assets/references/marathon/michael-rigley-16-thumb.webp",
    alt: "Michael Rigley 16",
  },
  {
    url: "/assets/references/marathon/michael-rigley-17.webp",
    thumbUrl: "/assets/references/marathon/michael-rigley-17-thumb.webp",
    alt: "Michael Rigley 17",
  },
  {
    url: "/assets/references/marathon/michael-rigley-18.webp",
    thumbUrl: "/assets/references/marathon/michael-rigley-18-thumb.webp",
    alt: "Michael Rigley 18",
  },
  {
    url: "/assets/references/marathon/michael-rigley-19.webp",
    thumbUrl: "/assets/references/marathon/michael-rigley-19-thumb.webp",
    alt: "Michael Rigley 19",
  },
  {
    url: "/assets/references/marathon/michael-rigley-20.webp",
    thumbUrl: "/assets/references/marathon/michael-rigley-20-thumb.webp",
    alt: "Michael Rigley 20",
  },
  {
    url: "/assets/references/marathon/michael-rigley-21.webp",
    thumbUrl: "/assets/references/marathon/michael-rigley-21-thumb.webp",
    alt: "Michael Rigley 21",
  },
  {
    url: "/assets/references/marathon/michael-rigley-22.webp",
    thumbUrl: "/assets/references/marathon/michael-rigley-22-thumb.webp",
    alt: "Michael Rigley 22",
  },
  {
    url: "/assets/references/marathon/michael-rigley-23.webp",
    thumbUrl: "/assets/references/marathon/michael-rigley-23-thumb.webp",
    alt: "Michael Rigley 23",
  },
  {
    url: "/assets/references/marathon/michael-rigley-24.webp",
    thumbUrl: "/assets/references/marathon/michael-rigley-24-thumb.webp",
    alt: "Michael Rigley 24",
  },
  {
    url: "/assets/references/marathon/michael-rigley-25.gif",
    alt: "Michael Rigley 25",
  },
];

const MARATHON_GEORGE_VARODI_SLIDES: Array<Slide> = [
  {
    url: "/assets/references/marathon/george-varodi-1.webp",
    thumbUrl: "/assets/references/marathon/george-varodi-1-thumb.webp",
    alt: "George Varodi 1",
  },
  {
    url: "/assets/references/marathon/george-varodi-2.webp",
    thumbUrl: "/assets/references/marathon/george-varodi-2-thumb.webp",
    alt: "George Varodi 2",
  },
  {
    url: "/assets/references/marathon/george-varodi-3.webp",
    thumbUrl: "/assets/references/marathon/george-varodi-3-thumb.webp",
    alt: "George Varodi 3",
  },
  {
    url: "/assets/references/marathon/george-varodi-4.webp",
    thumbUrl: "/assets/references/marathon/george-varodi-4-thumb.webp",
    alt: "George Varodi 4",
  },
  {
    url: "/assets/references/marathon/george-varodi-5.webp",
    thumbUrl: "/assets/references/marathon/george-varodi-5-thumb.webp",
    alt: "George Varodi 5",
  },
];

const MARATHON_SAMUEL_JUTRAS_SLIDES: Array<Slide> = [
  {
    url: "/assets/references/marathon/samuel-jutras-1.webp",
    thumbUrl: "/assets/references/marathon/samuel-jutras-1-thumb.webp",
    alt: "Samuel Jutras 1",
  },
  {
    url: "/assets/references/marathon/samuel-jutras-2.webp",
    thumbUrl: "/assets/references/marathon/samuel-jutras-2-thumb.webp",
    alt: "Samuel Jutras 2",
  },
  {
    url: "/assets/references/marathon/samuel-jutras-3.webp",
    thumbUrl: "/assets/references/marathon/samuel-jutras-3-thumb.webp",
    alt: "Samuel Jutras 3",
  },
  {
    url: "/assets/references/marathon/samuel-jutras-4.webp",
    thumbUrl: "/assets/references/marathon/samuel-jutras-4-thumb.webp",
    alt: "Samuel Jutras 4",
  },
  {
    url: "/assets/references/marathon/samuel-jutras-5.webp",
    thumbUrl: "/assets/references/marathon/samuel-jutras-5-thumb.webp",
    alt: "Samuel Jutras 5",
  },
  {
    url: "/assets/references/marathon/samuel-jutras-6.webp",
    thumbUrl: "/assets/references/marathon/samuel-jutras-6-thumb.webp",
    alt: "Samuel Jutras 6",
  },
  {
    url: "/assets/references/marathon/samuel-jutras-7.webp",
    thumbUrl: "/assets/references/marathon/samuel-jutras-7-thumb.webp",
    alt: "Samuel Jutras 7",
  },
  {
    url: "/assets/references/marathon/samuel-jutras-8.webp",
    thumbUrl: "/assets/references/marathon/samuel-jutras-8-thumb.webp",
    alt: "Samuel Jutras 8",
  },
  {
    url: "/assets/references/marathon/samuel-jutras-9.webp",
    thumbUrl: "/assets/references/marathon/samuel-jutras-9-thumb.webp",
    alt: "Samuel Jutras 9",
  },
  {
    url: "/assets/references/marathon/samuel-jutras-10.webp",
    thumbUrl: "/assets/references/marathon/samuel-jutras-10-thumb.webp",
    alt: "Samuel Jutras 10",
  },
  {
    url: "/assets/references/marathon/samuel-jutras-11.webp",
    thumbUrl: "/assets/references/marathon/samuel-jutras-11-thumb.webp",
    alt: "Samuel Jutras 11",
  },
  {
    url: "/assets/references/marathon/samuel-jutras-12.webp",
    thumbUrl: "/assets/references/marathon/samuel-jutras-12-thumb.webp",
    alt: "Samuel Jutras 12",
  },
  {
    url: "/assets/references/marathon/samuel-jutras-13.webp",
    thumbUrl: "/assets/references/marathon/samuel-jutras-13-thumb.webp",
    alt: "Samuel Jutras 13",
  },
  {
    url: "/assets/references/marathon/samuel-jutras-14.webp",
    thumbUrl: "/assets/references/marathon/samuel-jutras-14-thumb.webp",
    alt: "Samuel Jutras 14",
  },
  {
    url: "/assets/references/marathon/samuel-jutras-15.webp",
    thumbUrl: "/assets/references/marathon/samuel-jutras-15-thumb.webp",
    alt: "Samuel Jutras 15",
  },
  {
    url: "/assets/references/marathon/samuel-jutras-16.webp",
    thumbUrl: "/assets/references/marathon/samuel-jutras-16-thumb.webp",
    alt: "Samuel Jutras 16",
  },
  {
    url: "/assets/references/marathon/samuel-jutras-17.webp",
    thumbUrl: "/assets/references/marathon/samuel-jutras-17-thumb.webp",
    alt: "Samuel Jutras 17",
  },
  {
    url: "/assets/references/marathon/samuel-jutras-18.webp",
    thumbUrl: "/assets/references/marathon/samuel-jutras-18-thumb.webp",
    alt: "Samuel Jutras 18",
  },
  {
    url: "/assets/references/marathon/samuel-jutras-19.webp",
    thumbUrl: "/assets/references/marathon/samuel-jutras-19-thumb.webp",
    alt: "Samuel Jutras 19",
  },
  {
    url: "/assets/references/marathon/samuel-jutras-20.webp",
    thumbUrl: "/assets/references/marathon/samuel-jutras-20-thumb.webp",
    alt: "Samuel Jutras 20",
  },
  {
    url: "/assets/references/marathon/samuel-jutras-21.gif",
    alt: "Samuel Jutras 21",
  },
];

const MARATHON_GHASSAN_HABIB_SLIDES: Array<Slide> = [
  {
    url: "/assets/references/marathon/ghassan-habib-1.webp",
    thumbUrl: "/assets/references/marathon/ghassan-habib-1-thumb.webp",
    alt: "Ghassan Habib 1",
  },
  {
    url: "/assets/references/marathon/ghassan-habib-2.webp",
    thumbUrl: "/assets/references/marathon/ghassan-habib-2-thumb.webp",
    alt: "Ghassan Habib 2",
  },
  {
    url: "/assets/references/marathon/ghassan-habib-3.webp",
    thumbUrl: "/assets/references/marathon/ghassan-habib-3-thumb.webp",
    alt: "Ghassan Habib 3",
  },
  {
    url: "/assets/references/marathon/ghassan-habib-4.webp",
    thumbUrl: "/assets/references/marathon/ghassan-habib-4-thumb.webp",
    alt: "Ghassan Habib 4",
  },
  {
    url: "/assets/references/marathon/ghassan-habib-5.webp",
    thumbUrl: "/assets/references/marathon/ghassan-habib-5-thumb.webp",
    alt: "Ghassan Habib 5",
  },
  {
    url: "/assets/references/marathon/ghassan-habib-6.webp",
    thumbUrl: "/assets/references/marathon/ghassan-habib-6-thumb.webp",
    alt: "Ghassan Habib 6",
  },
  {
    url: "/assets/references/marathon/ghassan-habib-7.webp",
    thumbUrl: "/assets/references/marathon/ghassan-habib-7-thumb.webp",
    alt: "Ghassan Habib 7",
  },
  {
    url: "/assets/references/marathon/ghassan-habib-8.webp",
    thumbUrl: "/assets/references/marathon/ghassan-habib-8-thumb.webp",
    alt: "Ghassan Habib 8",
  },
  {
    url: "/assets/references/marathon/ghassan-habib-9.webp",
    thumbUrl: "/assets/references/marathon/ghassan-habib-9-thumb.webp",
    alt: "Ghassan Habib 9",
  },
  {
    url: "/assets/references/marathon/ghassan-habib-10.webp",
    thumbUrl: "/assets/references/marathon/ghassan-habib-10-thumb.webp",
    alt: "Ghassan Habib 10",
  },
  {
    url: "/assets/references/marathon/ghassan-habib-11.webp",
    thumbUrl: "/assets/references/marathon/ghassan-habib-11-thumb.webp",
    alt: "Ghassan Habib 11",
  },
  {
    url: "/assets/references/marathon/ghassan-habib-12.webp",
    thumbUrl: "/assets/references/marathon/ghassan-habib-12-thumb.webp",
    alt: "Ghassan Habib 12",
  },
  {
    url: "/assets/references/marathon/ghassan-habib-13.webp",
    thumbUrl: "/assets/references/marathon/ghassan-habib-13-thumb.webp",
    alt: "Ghassan Habib 13",
  },
  {
    url: "/assets/references/marathon/ghassan-habib-14.webp",
    thumbUrl: "/assets/references/marathon/ghassan-habib-14-thumb.webp",
    alt: "Ghassan Habib 14",
  },
];
