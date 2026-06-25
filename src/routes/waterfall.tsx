import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "../components/site/PageHero";
import { Reveal, SectionLabel } from "../components/site/Reveal";
import sunsetValley from "../assets/hotel/sunset-valley.png";
import exteriorMist from "../assets/hotel/exterior-mist.png";

export const Route = createFileRoute("/waterfall")({
  head: () => ({
    meta: [
      { title: "The Old Waterfall — Safarmaina Resort Kasauli" },
      { name: "description", content: "A natural waterfall walk from Safarmaina Resort in Garkhal, Kasauli. Mountain trail, cold pool, and forest quiet." },
      { property: "og:url", content: "/waterfall" },
    ],
    links: [{ rel: "canonical", href: "/waterfall" }],
  }),
  component: Waterfall,
});

function Waterfall() {
  return (
    <>
      <PageHero image={exteriorMist} eyebrow="The Old Waterfall" title={<>An old waterfall <em className="italic gradient-text">remembers</em>.</>} subtitle="A short trail from the resort. A long memory once you're there." />

      <section className="py-32">
        <div className="mx-auto max-w-[1000px] mx-auto px-6 text-center">
          <Reveal>
            <p className="font-serif text-3xl lg:text-4xl leading-[1.3] text-foreground/85 text-balance">
              The trail dips through pine, crosses a wooden bridge, opens at a basin where the water has been falling for longer than we know how to count.
            </p>
            <p className="mt-8 text-muted-foreground text-lg">Sit. Listen. Most guests stay an hour without noticing.</p>
          </Reveal>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid grid-cols-12 gap-6">
          <Reveal className="col-span-12 md:col-span-8"><img src={sunsetValley} alt="Mountain valley near waterfall" className="rounded-3xl shadow-luxury w-full h-[560px] object-cover" /></Reveal>
          <Reveal delay={0.1} className="col-span-12 md:col-span-4"><img src={exteriorMist} alt="Forest mist near waterfall trail" className="rounded-3xl shadow-luxury w-full h-[560px] object-cover" /></Reveal>
        </div>
      </section>

      <section className="py-32 bg-emerald-deep text-white text-center">
        <Reveal>
          <SectionLabel><span className="mx-auto">Plan The Walk</span></SectionLabel>
          <h2 className="mt-6 font-serif text-5xl">Best at golden hour.</h2>
          <Link to="/booking" className="mt-10 inline-block px-8 py-4 bg-gradient-gold text-charcoal text-[11px] tracking-[0.3em] uppercase">Stay With Us</Link>
        </Reveal>
      </section>
    </>
  );
}
