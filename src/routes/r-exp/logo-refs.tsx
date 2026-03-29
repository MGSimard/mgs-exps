import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/elements/Section";
import { MasonryGallery } from "@/components/MasonryGallery";
import type { Slide } from "@/components/MasonryGallery";
import { PageTypeMD } from "@/components/layout/PageTypeMD";
import { Separator } from "@/components/shadcn-ui/separator";

const LOGO_REF_SLIDES: Array<Slide> = [
  {
    url: "/assets/r-exp/references/marathon.webp",
    thumbUrl: "/assets/r-exp/references/marathon-thumb.webp",
    alt: "Marathon Logo",
  },
  {
    url: "/assets/r-exp/references/arasaka.webp",
    thumbUrl: "/assets/r-exp/references/arasaka-thumb.webp",
    alt: "Arasaka Logo",
  },
  {
    url: "/assets/r-exp/references/kiroshi.webp",
    thumbUrl: "/assets/r-exp/references/kiroshi-thumb.webp",
    alt: "Kiroshi Logo",
  },
  {
    url: "/assets/r-exp/references/malorian.webp",
    thumbUrl: "/assets/r-exp/references/malorian-thumb.webp",
    alt: "Malorian Logo",
  },
  {
    url: "/assets/r-exp/references/mahir.webp",
    thumbUrl: "/assets/r-exp/references/mahir-thumb.webp",
    alt: "Mahir Logo",
  },
  {
    url: "/assets/r-exp/references/makigai.webp",
    thumbUrl: "/assets/r-exp/references/makigai-thumb.webp",
    alt: "Makigai Logo",
  },
  {
    url: "/assets/r-exp/references/oryn.webp",
    thumbUrl: "/assets/r-exp/references/oryn-thumb.webp",
    alt: "Oryn Logo",
  },
  {
    url: "/assets/r-exp/references/oryn2.webp",
    thumbUrl: "/assets/r-exp/references/oryn2-thumb.webp",
    alt: "Oryn Logo",
  },
  {
    url: "/assets/r-exp/references/lined-star.webp",
    thumbUrl: "/assets/r-exp/references/lined-star-thumb.webp",
    alt: "Star Logo",
  },
  {
    url: "/assets/r-exp/references/lined-h.webp",
    thumbUrl: "/assets/r-exp/references/lined-h-thumb.webp",
    alt: "H Logo",
  },
  {
    url: "/assets/r-exp/references/lined-n.webp",
    thumbUrl: "/assets/r-exp/references/lined-n-thumb.webp",
    alt: "N Logo",
  },
];

const OTHER_REF_SLIDES: Array<Slide> = [
  {
    url: "/assets/r-exp/references/maratype.webp",
    thumbUrl: "/assets/r-exp/references/maratype-thumb.webp",
    alt: "Maratype Font",
  },
  {
    url: "/assets/r-exp/references/bots.webp",
    thumbUrl: "/assets/r-exp/references/bots-thumb.webp",
    alt: "",
  },
  {
    url: "/assets/r-exp/references/deathisinevitable.webp",
    thumbUrl: "/assets/r-exp/references/deathisinevitable-thumb.webp",
    alt: "",
  },
  {
    url: "/assets/r-exp/references/poster.webp",
    thumbUrl: "/assets/r-exp/references/poster-thumb.webp",
    alt: "",
  },
  {
    url: "/assets/r-exp/references/poster2.webp",
    thumbUrl: "/assets/r-exp/references/poster2-thumb.webp",
    alt: "",
  },
  {
    url: "/assets/r-exp/references/poster3.webp",
    thumbUrl: "/assets/r-exp/references/poster3-thumb.webp",
    alt: "",
  },
  {
    url: "/assets/r-exp/references/poster4.webp",
    thumbUrl: "/assets/r-exp/references/poster4-thumb.webp",
    alt: "",
  },
  {
    url: "/assets/r-exp/references/poster5.webp",
    thumbUrl: "/assets/r-exp/references/poster5-thumb.webp",
    alt: "",
  },
];

export const Route = createFileRoute("/r-exp/logo-refs")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <PageTypeMD label="R-EXP" title="Logo References">
      <Section title="Notes">
        <ul className="list-inside list-disc">
          <li>Logomark must be legible in miniaturized 1:1 ratios (e.g., 16x16, 32x32, 48x48 web & mobile favicons)</li>
          <li>Logomark & typemark must function when displayed in single color</li>
          <li>Logomark does not need to be an "R"</li>
          <li>
            However if logomark is an "R", prefer not to have it wrapped in a solid-fill shape (i.e. MALORIAN & MAKIGAI
            logomarks below are good examples)
          </li>
        </ul>
      </Section>
      <Separator />
      <Section title="Tags">
        <ul className="list-inside list-disc">
          <li>Marathon (2026 Game)</li>
          <li>Cyberpunk</li>
          <li>Neotokyo</li>
          <li>Digital Brutalism</li>
          <li>Aerospace Tech</li>
          <li>Grid Structures</li>
          <li>System UI</li>
        </ul>
      </Section>
      <Separator />
      <Section title="Colours">
        <ul className="*:border *:p-2">
          <li className="bg-[#E02B20] text-white">#E02B20 (R RED)</li>
          <li className="bg-[#1B1B1B] text-white">#1B1B1B (R BLACK)</li>
          <li className="bg-[#F75049] text-black">#F75049 (CP2077 RED)</li>
          <li className="bg-[#FFFFFF] text-black">#FFFFFF (CP2077 WHITE)</li>
          <li className="bg-[#0E0E17] text-white">#0E0E17 (CP2077 DARKEST BLUE)</li>
        </ul>
      </Section>
      <Separator />
      <Section title="Fonts" className="flex flex-col gap-2">
        <div className="font-[Tomorrow]">
          <h3 className="text-base font-bold uppercase">
            Tomorrow (General aesthetic reference, will not be used in our app)
          </h3>
          <ul>
            <li>License: OFL (Open Font License)</li>
            <li>
              Source:{" "}
              <a
                href="https://fonts.google.com/specimen/Tomorrow"
                target="_blank"
                rel="noopener noreferrer"
                className="underline">
                https://fonts.google.com/specimen/Tomorrow
              </a>
            </li>
          </ul>
          <p className="uppercase">The quick brown fox jumps over the lazy dog</p>
          <p>The quick brown fox jumps over the lazy dog</p>
          <p>1 2 3 4 5 6 7 8 9 0</p>
        </div>
        <div className="font-sans">
          <h3 className="text-base font-bold uppercase">Geist Sans (App Body Text)</h3>
          <ul>
            <li>License: OFL (Open Font License)</li>
            <li>
              Source:{" "}
              <a href="https://vercel.com/font" target="_blank" rel="noopener noreferrer" className="underline">
                https://vercel.com/font
              </a>
            </li>
          </ul>
          <p className="uppercase">The quick brown fox jumps over the lazy dog</p>
          <p>The quick brown fox jumps over the lazy dog</p>
          <p>1 2 3 4 5 6 7 8 9 0</p>
        </div>
        <div className="font-mono">
          <h3 className="font-mono text-base font-bold uppercase">Geist Mono (App Tabular Text)</h3>
          <ul>
            <li>License: OFL (Open Font License)</li>
            <li>
              Source:{" "}
              <a href="https://vercel.com/font" target="_blank" rel="noopener noreferrer" className="underline">
                https://vercel.com/font
              </a>
            </li>
          </ul>
          <p className="uppercase">The quick brown fox jumps over the lazy dog</p>
          <p>The quick brown fox jumps over the lazy dog</p>
          <p>1 2 3 4 5 6 7 8 9 0</p>
        </div>
      </Section>
      <Separator />
      <Section title="Logo References">
        <p>
          More:{" "}
          <a
            href="https://www.valencygraphics.com/cyberpunk-2077"
            target="_blank"
            rel="noopener noreferrer"
            className="underline">
            https://www.valencygraphics.com/cyberpunk-2077
          </a>
        </p>
        <MasonryGallery slides={LOGO_REF_SLIDES} />
      </Section>
      <Separator />
      <Section title="Other References">
        <MasonryGallery slides={OTHER_REF_SLIDES} />
      </Section>
    </PageTypeMD>
  );
}
