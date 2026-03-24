import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/elements/Section";
import { PageTypeMD } from "@/components/layout/PageType-MD";
import { GridGallery } from "@/components/GridGallery";
import type { Slide } from "@/components/GridGallery";
import { Grid } from "@/components/Grid";
import { Separator } from "@/components/shadcn-ui/separator";

const withThumb = <T extends { url: string }>(slide: T): T & { thumbUrl: string } => ({
  ...slide,
  thumbUrl: slide.url.replace(/\.[^./]+$/, "-thumb.webp"),
});

const MOODBOARD_SLIDES: Array<Slide> = [
  { url: "/assets/r-exp/moodboard/splash-screen.png", alt: "Marathon Splash Screen" },
  { url: "/assets/r-exp/moodboard/disclaimer.png", alt: "Marathon Disclaimer" },
  { url: "/assets/r-exp/moodboard/loading.png", alt: "Marathon Loading" },
  { url: "/assets/r-exp/moodboard/license.png", alt: "Marathon License" },
  { url: "/assets/r-exp/moodboard/license2.png", alt: "Marathon License 2" },
  { url: "/assets/r-exp/moodboard/dob.png", alt: "Marathon Date of Birth" },
  { url: "/assets/r-exp/moodboard/loading2.png", alt: "Marathon Loading 2" },
  { url: "/assets/r-exp/moodboard/presentation.png", alt: "Marathon Presentation" },
  { url: "/assets/r-exp/moodboard/presentation2.png", alt: "Marathon Presentation" },
  { url: "/assets/r-exp/moodboard/presentation3.png", alt: "Marathon Presentation" },
  { url: "/assets/r-exp/moodboard/presentation4.png", alt: "Marathon Presentation" },
  { url: "/assets/r-exp/moodboard/presentation5.png", alt: "Marathon Presentation" },
  { url: "/assets/r-exp/moodboard/presentation6.png", alt: "Marathon Presentation" },
  { url: "/assets/r-exp/moodboard/presentation7.png", alt: "Marathon Presentation" },
  { url: "/assets/r-exp/moodboard/presentation8.png", alt: "Marathon Presentation" },
  { url: "/assets/r-exp/moodboard/presentation9.png", alt: "Marathon Presentation" },
  { url: "/assets/r-exp/moodboard/presentation10.png", alt: "Marathon Presentation" },
  { url: "/assets/r-exp/moodboard/presentation11.png", alt: "Marathon Presentation" },
  { url: "/assets/r-exp/moodboard/presentation12.png", alt: "Marathon Presentation" },
  { url: "/assets/r-exp/moodboard/halftone-thing.png", alt: "Halftone Gradient" },
].map(withThumb);

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
