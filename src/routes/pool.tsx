import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "../components/site/PageHero";
import { Reveal } from "../components/site/Reveal";
import poolSunset from "../assets/hotel/pool-sunset.png";
import terraceNight from "../assets/hotel/terrace-night.png";

export const Route = createFileRoute("/pool")({
  head: () => ({
    meta: [
      { title: "Swimming Pool — Safarmaina Resort Kasauli" },
      { name: "description", content: "A valley-facing pool with sunset views and lit terraces at Safarmaina Resort, Garkhal, Kasauli." },
      { property: "og:url", content: "/pool" },
    ],
    links: [{ rel: "canonical", href: "/pool" }],
  }),
  component: Pool,
});

function Pool() {
  return (
    <>
      <PageHero image={poolSunset} eyebrow="Swimming Pool" title={<>Sunset on the <em className="italic gradient-text">water line</em>.</>} subtitle="A pool that opens to the valley, not the wall." />

      <section className="py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <h2 className="font-serif text-5xl leading-[1.05]">Where the day softens.</h2>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              Sun loungers along the deck, prayer flags between the pines, and the sky doing what skies in Kasauli do best. A small bar serves cold drinks and warm towels. Pool hours: 7 AM — 7 PM.
            </p>
            <Link to="/booking" className="mt-10 inline-block px-7 py-4 bg-gradient-gold text-charcoal text-[11px] tracking-[0.3em] uppercase">Book Your Stay</Link>
          </Reveal>
          <Reveal delay={0.1}>
            <img src={poolSunset} alt="Pool at sunset with valley view" className="rounded-3xl shadow-luxury w-full aspect-[4/5] object-cover" />
          </Reveal>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid md:grid-cols-2 gap-6">
          <Reveal><img src={terraceNight} alt="Pool terrace at night" className="rounded-3xl w-full aspect-[4/3] object-cover shadow-luxury" /></Reveal>
          <Reveal delay={0.1}><img src={poolSunset} alt="Pool sunset view" className="rounded-3xl w-full aspect-[4/3] object-cover shadow-luxury" /></Reveal>
        </div>
      </section>
    </>
  );
}
