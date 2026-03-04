import { createFileRoute } from "@tanstack/react-router";
import { MasonryGallery } from "@/components/MasonryGallery";
import { PageTypeMD } from "@/components/layout/PageType-MD";
import { Separator } from "@/components/shadcn-ui/separator";

const LOGO_REF_SLIDES = [
  { url: "/assets/r-exp/references/marathon.png", alt: "Marathon Logo" },
  { url: "/assets/r-exp/references/arasaka.jpg", alt: "Arasaka Logo" },
  { url: "/assets/r-exp/references/kiroshi.jpg", alt: "Kiroshi Logo" },
  { url: "/assets/r-exp/references/malorian.jpg", alt: "Malorian Logo" },
  { url: "/assets/r-exp/references/mahir.jpg", alt: "Mahir Logo" },
  { url: "/assets/r-exp/references/makigai.jpg", alt: "Makigai Logo" },
];

const OTHER_REF_SLIDES = [
  { url: "/assets/r-exp/references/maratype.png", alt: "Maratype Font" },
  { url: "/assets/r-exp/references/bots.png", alt: "" },
  { url: "/assets/r-exp/references/deathisinevitable.png", alt: "" },
  { url: "/assets/r-exp/references/poster.png", alt: "" },
  { url: "/assets/r-exp/references/poster2.png", alt: "" },
  { url: "/assets/r-exp/references/poster3.png", alt: "" },
  { url: "/assets/r-exp/references/poster4.png", alt: "" },
  { url: "/assets/r-exp/references/poster5.png", alt: "" },
];

export const Route = createFileRoute("/r-exp/logo-refs")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <PageTypeMD>
      <h1 className="text-2xl font-bold uppercase">R REFERENCES</h1>
      {/* <section>
        <h2 className="text-lg font-bold">DOWNLOAD</h2>
      </section> */}
      <section>
        <h2 className="text-lg font-bold">Notes:</h2>
        <ul className="list-inside list-disc">
          <li>Logomark must be legible in miniaturized 1:1 ratios (e.g., 16x16, 32x32, 48x48 web & mobile favicons)</li>
          <li>Logomark & typemark must function when displayed in single color</li>
        </ul>
      </section>
      <Separator />
      <section>
        <h2 className="text-lg font-bold">TAG REFERENCES</h2>
        <ul className="list-inside list-disc">
          <li>Marathon (2026 Game)</li>
          <li>Cyberpunk</li>
          <li>Neotokyo</li>
          <li>Digital Brutalism</li>
          <li>Aerospace Tech</li>
          <li>Grid Structures</li>
          <li>System UI</li>
        </ul>
      </section>
      <Separator />
      <section>
        <h2 className="text-lg font-bold uppercase">COLOUR REFERENCES</h2>
        <ul className="*:p-2 *:not-aria-hidden:border">
          <li className="bg-[#E02B20] text-white">#E02B20 (R RED)</li>
          <li className="bg-[#1B1B1B] text-white">#1B1B1B (R BLACK)</li>
          <li aria-hidden>
            <Separator />
          </li>
          <li className="bg-[#F75049] text-black">#F75049 (CP2077 RED)</li>
          <li className="bg-[#FFFFFF] text-black">#FFFFFF (CP2077 WHITE)</li>
          <li className="bg-[#0E0E17] text-white">#0E0E17 (CP2077 DARKEST BLUE)</li>
        </ul>
      </section>
      <Separator />
      <section className="flex flex-col gap-2">
        <h2 className="text-lg font-bold uppercase">FONT REFERENCES</h2>
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
      </section>
      <Separator />
      <section>
        <h2 className="text-lg font-bold">LOGO REFERENCES</h2>
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
      </section>
      <section>
        <h2 className="text-lg font-bold">OTHER REFERENCES</h2>
        <MasonryGallery slides={OTHER_REF_SLIDES} />
      </section>
    </PageTypeMD>
  );
}
