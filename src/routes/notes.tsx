import { createFileRoute } from "@tanstack/react-router";
import { PageTypeMD } from "@/components/layout/PageType-MD";
import { Section } from "@/components/elements/Section";
import { Label } from "@/components/elements/Label";
import { ExternalLink } from "@/components/elements/ExternalLink";
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
      <Section title="The Pocket Guide of Essential YC Advice">
        <ExternalLink href="https://www.ycombinator.com/library/4D-yc-s-essential-startup-advice">
          ycombinator.com/library/4D-yc-s-essential-startup-advice
        </ExternalLink>
        <ul className="list-inside list-[square] space-y-2">
          <li>Launch now</li>
          <li>Build something people want</li>
          <li>Do things that don't scale</li>
          <li>Find the 90 / 10 solution</li>
          <li>Find 10-100 customers who love your product</li>
          <li>All startups are badly broken at some point</li>
          <li>Write code - talk to users</li>
          <li>"It's not your money"</li>
          <li>Growth is the result of a great product not the precursor</li>
          <li>Don't scale your team/product until you have built something people want</li>
          <li>Valuation is not equal to success or even probability of success</li>
          <li>Avoid long negotiated deals with big customers if you can</li>
          <li>Avoid big company corporate development queries - they will only waste time</li>
          <li>Avoid conferences unless they are the best way to get customers</li>
          <li>Pre-product market fit - do things that don't scale: remain small/nimble</li>
          <li>Startups can only solve one problem well at any given time</li>
          <li>Founder relationships matter more than you think</li>
          <li>Sometimes you need to fire your customers (they might be killing you)</li>
          <li>Ignore your competitors, you will more likely die of suicide than murder</li>
          <li>Most companies don't die because they run out of money</li>
          <li>Be nice! Or at least don't be a jerk.</li>
          <li>Get sleep and exercise - take care of yourself</li>
        </ul>
        References 1. Do Things That Don&apos;t Scale by Paul Graham ↩ 2. Don&apos;t Talk to Corp Dev by Paul Graham ↩
        3. How Not To Fail by Jessica Livingston ↩ 4. The Post YC Slump by Sam Altman ↩ 5. Users You Don&apos;t Want by
        Michael Seibel ↩ 6. The Real Product Market Fit by Michael Seibel ↩ 7. Unit Economics by Sam Altman ↩ 8. Startup
        Priorities by Geoff Ralston ↩ 9. A Guide to Seed Fundraising by Geoff Ralston. ↩ 10. Fundraising Rounds are not
        Milestones by Michael Seibel ↩ 11. Mean People Fail by Paul Graham ↩ Recommended Reading 1. A Fundraising
        Survival Guide by Paul Graham 2. How to Raise Money by Paul Graham 3. Taking Advice by Aaron Harris
      </Section>
      <Separator />
    </PageTypeMD>
  );
}
