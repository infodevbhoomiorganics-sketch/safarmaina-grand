import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/site/PageHero";
import exteriorEvening from "../assets/hotel/exterior-evening.png";

export const Route = createFileRoute("/terms")({
  head: () => ({ meta: [{ title: "Terms & Conditions — Safarmaina Resort" }, { name: "description", content: "Terms and conditions for stays at Safarmaina Resort." }], links: [{ rel: "canonical", href: "/terms" }] }),
  component: () => (
    <>
      <PageHero image={exteriorEvening} eyebrow="Legal" title="Terms & Conditions" height="h-[45vh]" />
      <section className="py-24"><div className="mx-auto max-w-[800px] px-6 space-y-5 text-foreground/80 leading-relaxed">
        <p>By booking with Safarmaina Resort, guests accept these terms. Check-in is from 1 PM; check-out by 11 AM. Valid government-issued photo identification is required at check-in.</p>
        <p>Children of all ages are welcome. Pets are welcome with prior intimation. Smoking is permitted only in designated outdoor areas.</p>
        <p>Tariffs are subject to applicable taxes. Rates and inclusions may change without prior notice except for confirmed bookings.</p>
      </div></section>
    </>
  ),
});
