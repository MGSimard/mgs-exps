import { createFileRoute } from "@tanstack/react-router";
import { PageTypeMD } from "@/components/layout/PageType-MD";
import { Section } from "@/components/elements/Section";
import { Label } from "@/components/elements/Label";
import { ExternalLink } from "@/components/elements/ExternalLink";
import { GridGallery } from "#/components/GridGallery";
import { Separator } from "@/components/shadcn-ui/separator";

export const Route = createFileRoute("/references/serge-tyutik")({
  component: RouteComponent,
});

const ORYN_SLIDES = [
  { url: "/assets/references/serge-tyutik/oryn-1.webp", alt: "Oryn 1" },
  { url: "/assets/references/serge-tyutik/oryn-2.webp", alt: "Oryn 2" },
  { url: "/assets/references/serge-tyutik/oryn-3.webp", alt: "Oryn 3" },
  { url: "/assets/references/serge-tyutik/oryn-4.webp", alt: "Oryn 4" },
  { url: "/assets/references/serge-tyutik/oryn-5.webp", alt: "Oryn 5" },
  { url: "/assets/references/serge-tyutik/oryn-6.webp", alt: "Oryn 6" },
  { url: "/assets/references/serge-tyutik/oryn-7.webp", alt: "Oryn 7" },
  { url: "/assets/references/serge-tyutik/oryn-8.webp", alt: "Oryn 8" },
];

const SR3_SLIDES = [
  { url: "/assets/references/serge-tyutik/sr3-1.webp", alt: "SR3 1" },
  { url: "/assets/references/serge-tyutik/sr3-2.webp", alt: "SR3 2" },
  { url: "/assets/references/serge-tyutik/sr3-3.webp", alt: "SR3 3" },
  { url: "/assets/references/serge-tyutik/sr3-4.webp", alt: "SR3 4" },
];

function RouteComponent() {
  return (
    <PageTypeMD>
      <h1>
        <Label className="mb-2">REFERENCES</Label>
        <span className="block text-4xl font-bold uppercase">Serge Tyutik</span>
      </h1>
      <ul>
        <li>
          <ExternalLink href="https://x.com/tdeser/">https://x.com/tdeser/</ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://growa.studio/">https://growa.studio/</ExternalLink>
        </li>
      </ul>
      <Separator />
      <Section title="MISC">
        <GridGallery slides={ORYN_SLIDES} />
      </Section>
      <Separator />
      <Section title="SR3">
        <GridGallery slides={SR3_SLIDES} />
      </Section>
    </PageTypeMD>
  );
}
