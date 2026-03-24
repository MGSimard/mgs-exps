import { createFileRoute } from "@tanstack/react-router";
import { PageTypeMD } from "@/components/layout/PageTypeMD";

export const Route = createFileRoute("/readme")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <PageTypeMD label="NOTES" title="README">
      Hello "/readme"!
    </PageTypeMD>
  );
}
