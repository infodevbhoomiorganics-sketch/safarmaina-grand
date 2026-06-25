import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "../components/site/PageHero";
import exteriorMist from "../assets/hotel/exterior-mist.png";

export const Route = createFileRoute("/sitemap")({
  head: () => ({ meta: [{ title: "Sitemap — Safarmaina Resort" }], links: [{ rel: "canonical", href: "/sitemap" }] }),
  component: () => (
    <>
      <PageHero image={exteriorMist} eyebrow="Sitemap" title="All Pages" height="h-[45vh]" />
      <section className="py-24"><div className="mx-auto max-w-[800px] px-6">
        <ul className="grid sm:grid-cols-2 gap-4">
          {[["/", "Home"],["/about", "About"],["/rooms", "Rooms & Suites"],["/dining", "Dining"],["/pool", "Swimming Pool"],["/waterfall", "Waterfall"],["/experiences", "Experiences"],["/gallery", "Gallery"],["/attractions", "Nearby Attractions"],["/contact", "Contact"],["/booking", "Book Now"],["/faq", "FAQ"],["/privacy", "Privacy Policy"],["/terms", "Terms & Conditions"],["/cancellation", "Cancellation Policy"]].map(([to,l]) => (
            <li key={to}><Link to={to} className="luxury-link text-foreground/85 hover:text-accent">{l}</Link></li>
          ))}
        </ul>
      </div></section>
    </>
  ),
});
