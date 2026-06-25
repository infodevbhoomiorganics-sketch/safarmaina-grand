import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/site/PageHero";
import sunsetValley from "../assets/hotel/sunset-valley.png";

export const Route = createFileRoute("/cancellation")({
  head: () => ({ meta: [{ title: "Cancellation Policy — Safarmaina Resort" }, { name: "description", content: "Cancellation policy for bookings at Safarmaina Resort, Kasauli." }], links: [{ rel: "canonical", href: "/cancellation" }] }),
  component: () => (
    <>
      <PageHero image={sunsetValley} eyebrow="Legal" title="Cancellation Policy" height="h-[45vh]" />
      <section className="py-24"><div className="mx-auto max-w-[800px] px-6 space-y-5 text-foreground/80 leading-relaxed">
        <p><strong>More than 7 days before check-in:</strong> Full refund of any advance paid.</p>
        <p><strong>3 to 7 days before check-in:</strong> 50% refund of the advance paid.</p>
        <p><strong>Less than 3 days before check-in:</strong> No refund. The advance may be adjusted against a future stay within 6 months, subject to availability.</p>
        <p>Peak season and group bookings may carry different terms; these will be communicated at the time of confirmation. To cancel, write to stay@safarmaina.com or call +91 98218 70540.</p>
      </div></section>
    </>
  ),
});
