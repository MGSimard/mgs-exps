import { createFileRoute } from "@tanstack/react-router";
import { PageTypeMD } from "@/_components/PageType-MD";
import { Separator } from "@/_components/shadcn-ui/separator";

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
          <li>
            Solo logo (text-less) must have high legibility in miniaturized 1:1 ratio sizes (e.g., 16x16, 32x32, 48x48
            web & mobile favicons)
          </li>
          <li>
            Beyond that, all deviations from references are 100% fine - no single color, font, or shape is off-limits.
            These are just suggestions.
          </li>
        </ul>
      </section>
      <Separator />
      <section>
        <h2 className="text-lg font-bold">TAG REFERENCES</h2>
        <ul className="list-inside list-disc">
          <li>Neotokyo</li>
          <li>Cyberpunk</li>
          <li>Tag 3</li>
          <li>Tag 4</li>
          <li>Tag 5</li>
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
          <li className="bg-[#5EF6FF] text-black">#5EF6FF (CP2077 CYAN)</li>
          <li className="bg-[#FFFFFF] text-black">#FFFFFF (CP2077 WHITE)</li>
          <li className="bg-[#0E0E17] text-white">#0E0E17 (CP2077 DARKEST BLUE)</li>
        </ul>
      </section>
      <Separator />
      <section className="flex flex-col gap-2">
        <h2 className="text-lg font-bold uppercase">FONT REFERENCES</h2>
        <div className="font-[Tomorrow]">
          <h3 className="text-base font-bold uppercase">Tomorrow</h3>
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
        <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-2 *:border">
          <img src="/assets/r-exp/arasaka.jpg" alt="Arasaka Logo" loading="lazy" />
          <img src="/assets/r-exp/channel54.jpg" alt="Channel 54 Logo" loading="lazy" />
          <img src="/assets/r-exp/kiroshi.jpg" alt="Kiroshi Logo" loading="lazy" />
          <img src="/assets/r-exp/malorian.jpg" alt="Malorian Logo" loading="lazy" />
          <img src="/assets/r-exp/mahir.jpg" alt="Mahir Logo" loading="lazy" />
          <img src="/assets/r-exp/makigai.jpg" alt="Makigai Logo" loading="lazy" />
        </div>
      </section>
      <section>
        <h2 className="text-lg font-bold">CONTEXTUAL REFERENCES</h2>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-2 *:border *:bg-red-500">
          <div>Item</div>
          <div>Item</div>
          <div>Item</div>
          <div>Item</div>
          <div>Item</div>
          <div>Item</div>
        </div>
      </section>
    </PageTypeMD>
  );
}
