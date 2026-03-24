import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: PageHome });

function PageHome() {
  return (
    <h1 className="pointer-events-none grid grow place-items-center font-pixel-line text-[clamp(2rem,10vw,10rem)] text-muted uppercase select-none">
      MGS//EXPS
    </h1>
  );
}
