import { createFileRoute } from "@tanstack/react-router";
import { PageTypeMD } from "@/components/layout/PageType-MD";

export const Route = createFileRoute("/notes")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <PageTypeMD label="NOTES" title="NOTES" description="Exported from Discord">
      <ul>
        <li>https://ui.shadcn.com/docs/directory (Registry Directory)</li>
        <li>https://www.eldoraui.site/ (Eldora UI)</li>
        <li>https://21st.dev/community/components (Discover community-made UI components | 21st.dev)</li>
        <li>https://ui.full.dev/ (Astro UI component and block library for content-driven websites - fulldev/ui)</li>
        <li>
          https://developers.cloudflare.com/changelog/2025-12-19-tanstack-start-prerendering/ (Static prerendering
          support for TanStack Start)
        </li>
        <li>https://loggingsucks.com/ (Logging Sucks - Your Logs Are Lying To You)</li>
        <li>https://www.mapcn.dev/ (mapcn - Beautiful maps made simple)</li>
        <li>
          https://docs.ag-ui.com/ (AG-UI Overview - Agent User Interaction Protocol) (TanStack AI ag-ui compliant)
        </li>
        <li>
          https://x.com/rincidium/status/2015930122776564113 (Create an OG image for your website with Nano Banana Pro)
        </li>
        <li>
          https://x.com/ctnicholasdev/status/2018354238867591321 (Interactive article: How to animate multiplayer
          cursors.)
        </li>
        <li>
          https://x.com/viktoroddy/status/2018645043909939419 (Google Flow is so freaking good at animating backgrounds
          for landing pages.)
        </li>
        <li>https://x.com/viktorhofte/status/2018725322712027255 (Midday onboarding)</li>
        <li>https://reactbits.dev/ (React Bits)</li>
        <li>
          https://shud.in/thoughts/build-bulletproof-react-components (Building Bulletproof React Components - Shu Ding)
        </li>
        <li>https://x.com/diegohaz/status/2019751466169229542/ (Modern CSS capabilities.)</li>
        <li>https://ui.sh/ (ui.sh — Turn your terminal into a design engineer)</li>
        <li>
          https://x.com/sorenblank/status/2021671940646482267 (here's how I optimized video assets on my site and
          improved perceived performance:)
        </li>
        <li>https://sorenblank.com/writing/base64-and-perceived-performance (Base64 & perceived performance)</li>
        <li>https://www.youtube.com/watch?v=L7_BzwSLmCA (Joji - Sojourn)</li>
        <li>https://skills.sh/ (The Agent Skills Directory)</li>
        <li>
          https://johanneskonings.dev/blog/2025-11-30-tanstack-start-aws-serverless/ (Deploy TanStack Start serverless
          on AWS | Johannes Konings)
        </li>
        <li>https://json-render.dev/ (json-render | The Generative UI Framework)</li>
        <li>
          https://x.com/jh3yy/status/2024146610398130486 (the trick to this css card glow/shine effect is blurring a
          duplicated layer that moves around)
        </li>
        <li>https://tailark.com/veil (Veil Kit | Tailark)</li>
        <li>https://observablehq.com/ (Observable | The modern data visualization platform | Observable)</li>
        <li>https://agent-auth-protocol.com/ (Agent Auth)</li>
      </ul>
    </PageTypeMD>
  );
}
