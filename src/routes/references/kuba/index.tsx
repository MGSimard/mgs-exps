import { createFileRoute } from "@tanstack/react-router";
import { PageTypeMD } from "@/components/layout/PageType-MD";
import { Separator } from "@/components/shadcn-ui/separator";
import { Label } from "@/components/elements/Label";
import { ExternalLink } from "@/components/elements/ExternalLink";

export const Route = createFileRoute("/references/kuba/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <PageTypeMD>
      <h1>
        <Label className="mb-2">REFERENCES</Label>
        <span className="block text-4xl font-bold uppercase">KUBA</span>
      </h1>
      <Separator />
      <section>
        <h2 className="sr-only">LINKS</h2>
        <ul>
          <li>
            <ExternalLink href="https://heykuba.com/">https://heykuba.com/</ExternalLink>
          </li>
          <li>
            <ExternalLink href="https://x.com/kubadesign/">https://x.com/kubadesign/</ExternalLink>
          </li>
        </ul>
      </section>
      <Separator />
      <section>
        <h2 className="text-2xl font-bold">NEXT</h2>
      </section>
    </PageTypeMD>
  );
}
