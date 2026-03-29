import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/elements/Section";
import { PageTypeMD } from "@/components/layout/PageTypeMD";
import { GridGallery } from "@/components/GridGallery";
import type { Slide } from "@/components/GridGallery";
import { Grid } from "@/components/Grid";
import { Separator } from "@/components/shadcn-ui/separator";

const MOODBOARD_SLIDES: Array<Slide> = [
  {
    url: "/assets/r-exp/moodboard/splash-screen.webp",
    thumbUrl: "/assets/r-exp/moodboard/splash-screen-thumb.webp",
    alt: "Marathon Splash Screen",
  },
  {
    url: "/assets/r-exp/moodboard/disclaimer.webp",
    thumbUrl: "/assets/r-exp/moodboard/disclaimer-thumb.webp",
    alt: "Marathon Disclaimer",
  },
  {
    url: "/assets/r-exp/moodboard/loading.webp",
    thumbUrl: "/assets/r-exp/moodboard/loading-thumb.webp",
    alt: "Marathon Loading",
  },
  {
    url: "/assets/r-exp/moodboard/license.webp",
    thumbUrl: "/assets/r-exp/moodboard/license-thumb.webp",
    alt: "Marathon License",
  },
  {
    url: "/assets/r-exp/moodboard/license2.webp",
    thumbUrl: "/assets/r-exp/moodboard/license2-thumb.webp",
    alt: "Marathon License 2",
  },
  {
    url: "/assets/r-exp/moodboard/dob.webp",
    thumbUrl: "/assets/r-exp/moodboard/dob-thumb.webp",
    alt: "Marathon Date of Birth",
  },
  {
    url: "/assets/r-exp/moodboard/loading2.webp",
    thumbUrl: "/assets/r-exp/moodboard/loading2-thumb.webp",
    alt: "Marathon Loading 2",
  },
  {
    url: "/assets/r-exp/moodboard/presentation.webp",
    thumbUrl: "/assets/r-exp/moodboard/presentation-thumb.webp",
    alt: "Marathon Presentation",
  },
  {
    url: "/assets/r-exp/moodboard/presentation2.webp",
    thumbUrl: "/assets/r-exp/moodboard/presentation2-thumb.webp",
    alt: "Marathon Presentation",
  },
  {
    url: "/assets/r-exp/moodboard/presentation3.webp",
    thumbUrl: "/assets/r-exp/moodboard/presentation3-thumb.webp",
    alt: "Marathon Presentation",
  },
  {
    url: "/assets/r-exp/moodboard/presentation4.webp",
    thumbUrl: "/assets/r-exp/moodboard/presentation4-thumb.webp",
    alt: "Marathon Presentation",
  },
  {
    url: "/assets/r-exp/moodboard/presentation5.webp",
    thumbUrl: "/assets/r-exp/moodboard/presentation5-thumb.webp",
    alt: "Marathon Presentation",
  },
  {
    url: "/assets/r-exp/moodboard/presentation6.webp",
    thumbUrl: "/assets/r-exp/moodboard/presentation6-thumb.webp",
    alt: "Marathon Presentation",
  },
  {
    url: "/assets/r-exp/moodboard/presentation7.webp",
    thumbUrl: "/assets/r-exp/moodboard/presentation7-thumb.webp",
    alt: "Marathon Presentation",
  },
  {
    url: "/assets/r-exp/moodboard/presentation8.webp",
    thumbUrl: "/assets/r-exp/moodboard/presentation8-thumb.webp",
    alt: "Marathon Presentation",
  },
  {
    url: "/assets/r-exp/moodboard/presentation9.webp",
    thumbUrl: "/assets/r-exp/moodboard/presentation9-thumb.webp",
    alt: "Marathon Presentation",
  },
  {
    url: "/assets/r-exp/moodboard/presentation10.webp",
    thumbUrl: "/assets/r-exp/moodboard/presentation10-thumb.webp",
    alt: "Marathon Presentation",
  },
  {
    url: "/assets/r-exp/moodboard/presentation11.webp",
    thumbUrl: "/assets/r-exp/moodboard/presentation11-thumb.webp",
    alt: "Marathon Presentation",
  },
  {
    url: "/assets/r-exp/moodboard/presentation12.webp",
    thumbUrl: "/assets/r-exp/moodboard/presentation12-thumb.webp",
    alt: "Marathon Presentation",
  },
  {
    url: "/assets/r-exp/moodboard/halftone-thing.webp",
    thumbUrl: "/assets/r-exp/moodboard/halftone-thing-thumb.webp",
    alt: "Halftone Gradient",
  },
];

export const Route = createFileRoute("/r-exp/moodboard")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <PageTypeMD label="R-EXP" title="Moodboard">
      <Section title="Notes">
        <p className="mb-4">
          This moodboard defines the thematic and visual territory the logo should draw from. The references highlight
          system interfaces, authentication workflows, aerospace environments, diagnostic overlays, and structured grid
          compositions. The dominant qualities are precision, control, modularity, and technical rigor. Typography
          trends toward functional, system-oriented forms. Visual language is built from panels, frames, schematics, and
          data structures rather than expressive illustration.
        </p>
        <p>
          The purpose of this board is not to replicate these visuals, but to anchor the logo in the same world. The
          mark should feel engineered, intentional, and structurally sound. It should suggest authority, security, and
          operational clarity without becoming overly decorative or literal.
        </p>
      </Section>
      <Separator />
      <Section title="Moodboard">
        <GridGallery slides={MOODBOARD_SLIDES} />
      </Section>
      <Separator />
      <Section title="Video Media">
        <Grid>
          <div className="aspect-video overflow-hidden">
            <video
              src="/assets/r-exp/moodboard/ZRj7ayLAKeX59GFW.mp4"
              loop
              autoPlay={false}
              muted
              playsInline
              controls
              className="h-full w-full object-cover"
            />
          </div>
          <div className="aspect-video overflow-hidden">
            <video
              src="/assets/r-exp/moodboard/rqoE074b4ZyyXnJA.mp4"
              loop
              autoPlay={false}
              muted
              playsInline
              controls
              className="h-full w-full object-cover"
            />
          </div>
        </Grid>
      </Section>
    </PageTypeMD>
  );
}
