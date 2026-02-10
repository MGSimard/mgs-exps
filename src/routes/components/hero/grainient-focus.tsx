import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/components/hero/grainient-focus")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/components/hero/grainient-focus"!</div>;
}
