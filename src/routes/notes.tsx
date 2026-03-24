import { createFileRoute } from "@tanstack/react-router";
import { PageTypeMD } from "@/components/layout/PageType-MD";
import { Label } from "@/components/elements/Label";
import { Separator } from "@/components/shadcn-ui/separator";

export const Route = createFileRoute("/notes")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <PageTypeMD>
      <h1>
        <Label className="mb-2">NOTES</Label>
        <span className="block text-4xl font-bold uppercase">NOTES</span>
      </h1>
      <p className="text-muted-foreground italic">Exported from Discord</p>
      <Separator />
    </PageTypeMD>
  );
}
