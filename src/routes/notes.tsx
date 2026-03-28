import { createFileRoute } from "@tanstack/react-router";
import { PageTypeMD } from "@/components/layout/PageTypeMD";
import { Section } from "@/components/elements/Section";
import { ExternalLink } from "@/components/elements/ExternalLink";
import { Separator } from "@/components/shadcn-ui/separator";

export const Route = createFileRoute("/notes")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <PageTypeMD label="NOTES" title="NOTES" description="Exported from Discord">
      <ul>
        <li>https://liveblocks.io/blog/how-to-animate-multiplayer-cursors</li>
        <li>https://www.youtube.com/watch?v=L7_BzwSLmCA (Joji - Sojourn)</li>
      </ul>
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
        <ol className="list-inside list-decimal space-y-1 text-xs text-muted-foreground [&>li>*:last-child]:text-muted">
          <li>
            <ExternalLink href="http://paulgraham.com/ds.html">Do Things That Don&apos;t Scale</ExternalLink>{" "}
            <span>by Paul Graham</span>
          </li>
          <li>
            <ExternalLink href="http://www.paulgraham.com/corpdev.html">Don&apos;t Talk to Corp Dev</ExternalLink>{" "}
            <span>by Paul Graham</span>
          </li>
          <li>
            <ExternalLink href="https://blog.ycombinator.com/how-not-to-fail/">How Not To Fail</ExternalLink>{" "}
            <span>by Jessica Livingston</span>
          </li>
          <li>
            <ExternalLink href="http://blog.samaltman.com/the-post-yc-slump">The Post YC Slump</ExternalLink>{" "}
            <span>by Sam Altman</span>
          </li>
          <li>
            <ExternalLink href="http://www.michaelseibel.com/blog/users-you-don-t-want">
              Users You Don&apos;t Want
            </ExternalLink>{" "}
            <span>by Michael Seibel</span>
          </li>
          <li>
            <ExternalLink href="http://www.michaelseibel.com/blog/the-real-product-market-fit">
              The Real Product Market Fit
            </ExternalLink>{" "}
            <span>by Michael Seibel</span>
          </li>
          <li>
            <ExternalLink href="http://blog.samaltman.com/unit-economics">Unit Economics</ExternalLink>{" "}
            <span>by Sam Altman</span>
          </li>
          <li>
            <ExternalLink href="http://blog.geoffralston.com/startup-priorities">Startup Priorities</ExternalLink>{" "}
            <span>by Geoff Ralston</span>
          </li>
          <li>
            <ExternalLink href="https://blog.ycombinator.com/how-to-raise-a-seed-round/">
              A Guide to Seed Fundraising
            </ExternalLink>{" "}
            <span>by Geoff Ralston.</span>
          </li>
          <li>
            <ExternalLink href="https://blog.ycombinator.com/fundraising-rounds-are-not-milestones/">
              Fundraising Rounds are not Milestones
            </ExternalLink>{" "}
            <span>by Michael Seibel</span>
          </li>
          <li>
            <ExternalLink href="http://www.paulgraham.com/mean.html">Mean People Fail</ExternalLink>{" "}
            <span>by Paul Graham</span>
          </li>
          <li>
            <ExternalLink href="http://www.paulgraham.com/fundraising.html">A Fundraising Survival Guide</ExternalLink>{" "}
            <span>by Paul Graham</span>
          </li>
          <li>
            <ExternalLink href="http://paulgraham.com/fr.html">How to Raise Money</ExternalLink>{" "}
            <span>by Paul Graham</span>
          </li>
          <li>
            <ExternalLink href="https://blog.aaronkharris.com/taking-advice">Taking Advice</ExternalLink>{" "}
            <span>by Aaron Harris</span>
          </li>
        </ol>
      </Section>
      <Separator />
    </PageTypeMD>
  );
}
