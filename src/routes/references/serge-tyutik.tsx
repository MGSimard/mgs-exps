import { createFileRoute } from "@tanstack/react-router";
import { PageTypeMD } from "@/components/layout/PageType-MD";
import { Separator } from "@/components/shadcn-ui/separator";
import { Label } from "@/components/elements/Label";
import { ExternalLink } from "@/components/elements/ExternalLink";

export const Route = createFileRoute("/references/serge-tyutik")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <PageTypeMD>
      <h1>
        <Label className="mb-2">REFERENCES</Label>
        <span className="block text-4xl font-bold uppercase">SERGE TYUTIK</span>
      </h1>
      <Separator />
      <section>
        <h2 className="sr-only">LINKS</h2>
        <ul>
          <li>
            <ExternalLink href="https://x.com/tdeser/">https://x.com/tdeser/</ExternalLink>
          </li>
          <li>
            <ExternalLink href="https://growa.studio/">https://growa.studio/</ExternalLink>
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
