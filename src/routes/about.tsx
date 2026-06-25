import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "../components/site/PageHero";
import { Reveal, SectionLabel } from "../components/site/Reveal";
import exteriorEvening from "../assets/hotel/exterior-evening.png";
import exteriorMist from "../assets/hotel/exterior-mist.png";
import sunsetValley from "../assets/hotel/sunset-valley.png";
import terraceNight from "../assets/hotel/terrace-night.png";
import coffeeView from "../assets/hotel/coffee-view.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Safarmaina — Our Story | Luxury Resort Kasauli" },
      { name: "description", content: "The story of Safarmaina Resort — a brookside retreat near the old waterfall in Garkhal, Kasauli, designed for slowness, nature and mountain quiet." },
      { property: "og:title", content: "About Safarmaina Resort" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero image={exteriorEvening} eyebrow="Our Story" title={<>A retreat built around a <em className="italic gradient-text">waterfall</em>.</>} subtitle="Family-run, mountain-rooted, quietly luxurious." />

      <section className="py-32">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-10">
          <Reveal>
            <p className="font-serif text-3xl lg:text-4xl leading-[1.3] text-foreground/85 text-balance">
              Safarmaina began as a love letter to the hills above Garkhal — a slow build of stone, wood and patience, set on a slope where an old waterfall has been falling longer than any of us have been here.
            </p>
            <p className="mt-10 text-muted-foreground text-lg leading-relaxed">
              The architecture follows the contour of the mountain, not the other way around. Terraces step gently down with the slope, lanterns thread the stone walls, and every room is oriented to catch the morning fog or the evening valley fire.
            </p>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              We don't try to be more than the mountain. We just open the windows wider.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid grid-cols-12 gap-6">
          <Reveal className="col-span-12 md:col-span-7"><img src={exteriorMist} alt="Resort enveloped in morning mist" className="rounded-3xl shadow-luxury w-full h-[520px] object-cover" /></Reveal>
          <Reveal delay={0.1} className="col-span-12 md:col-span-5 grid gap-6">
            <img src={coffeeView} alt="Morning coffee with valley view" className="rounded-2xl shadow-soft w-full h-[250px] object-cover" />
            <img src={terraceNight} alt="Terrace lit at night" className="rounded-2xl shadow-soft w-full h-[250px] object-cover" />
          </Reveal>
          <Reveal delay={0.15} className="col-span-12"><img src={sunsetValley} alt="Sunset over the valley" className="rounded-3xl shadow-luxury w-full h-[480px] object-cover" /></Reveal>
        </div>
      </section>

      <section className="py-32 bg-emerald-deep text-white">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid lg:grid-cols-3 gap-12">
          {[
            { n: "01", t: "Nature First", d: "Every design choice begins with the trees, the brook, and the wind direction." },
            { n: "02", t: "Quiet Luxury", d: "Soft light, warm linens, slow service, no theatrics." },
            { n: "03", t: "Mountain Made", d: "Our team, our stone, our cooks — all from the villages around us." },
          ].map((v, i) => (
            <Reveal key={v.n} delay={i * 0.1}>
              <div className="text-gold font-serif text-5xl">{v.n}</div>
              <h3 className="mt-6 font-serif text-3xl text-white">{v.t}</h3>
              <p className="mt-4 text-white/65 leading-relaxed">{v.d}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-32 text-center">
        <Reveal>
          <SectionLabel><span className="mx-auto">Visit Us</span></SectionLabel>
          <h2 className="mt-6 font-serif text-5xl">Come, stay a while.</h2>
          <Link to="/booking" className="mt-10 inline-block px-8 py-4 bg-gradient-gold text-charcoal text-[11px] tracking-[0.3em] uppercase">Book Your Stay</Link>
        </Reveal>
      </section>
    </>
  );
}
