import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/references/kyle-anthony-miller")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/references/kyle-anthony-miller"!</div>;
}
