import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/r-exp/logo-refs")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/r-exp/logo-refs"!</div>;
}
