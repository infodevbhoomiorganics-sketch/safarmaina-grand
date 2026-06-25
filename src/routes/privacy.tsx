import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/site/PageHero";
import exteriorMist from "../assets/hotel/exterior-mist.png";

export const Route = createFileRoute("/privacy")({
  head: () => ({ meta: [{ title: "Privacy Policy — Safarmaina Resort" }, { name: "description", content: "Privacy policy for Safarmaina Resort, Kasauli." }], links: [{ rel: "canonical", href: "/privacy" }] }),
  component: () => (
    <>
      <PageHero image={exteriorMist} eyebrow="Legal" title="Privacy Policy" height="h-[45vh]" />
      <section className="py-24"><div className="mx-auto max-w-[800px] px-6 prose prose-stone space-y-5 text-foreground/80 leading-relaxed">
        <p>Safarmaina Resort respects your privacy. We collect only the information needed to confirm and service your reservation — name, contact details, stay dates and any preferences you share with us.</p>
        <p>We never sell or share your personal information with third parties for marketing purposes. Information may be shared with payment processors and travel partners strictly for fulfilling your booking.</p>
        <p>We use secure systems to store guest data and retain it only as long as required by Indian law and accounting practice.</p>
        <p>For any privacy questions, write to stay@safarmaina.com or call +91 98218 70540.</p>
      </div></section>
    </>
  ),
});
