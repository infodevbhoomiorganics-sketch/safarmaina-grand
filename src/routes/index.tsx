import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronDown, MapPin, Mountain, Waves, Utensils, Flame, TreePine, Star } from "lucide-react";
import heroImage from "../assets/hotel/exterior-mist.png";
import poolSunset from "../assets/hotel/pool-sunset.png";
import roomBlue from "../assets/hotel/room-blue.png";
import roomWood from "../assets/hotel/room-wood.png";
import restaurant from "../assets/hotel/restaurant.png";
import terraceNight from "../assets/hotel/terrace-night.png";
import coffeeView from "../assets/hotel/coffee-view.png";
import sunsetValley from "../assets/hotel/sunset-valley.png";
import entranceNight from "../assets/hotel/entrance-night.png";
import exteriorEvening from "../assets/hotel/exterior-evening.png";
import { Reveal, SectionLabel } from "../components/site/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Safarmaina Resort — Luxury Brookside Retreat in Kasauli, Himachal" },
      { name: "description", content: "Discover Safarmaina Resort — a luxury mountain retreat with a swimming pool, restaurant, and natural waterfall near Garkhal, Kasauli, Himachal Pradesh." },
      { property: "og:title", content: "Safarmaina Resort — Brookside Retreat in Kasauli" },
      { property: "og:description", content: "Luxury mountain retreat with pool, restaurant & natural waterfall near Garkhal, Kasauli." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <>
      {/* HERO */}
      <section ref={heroRef} className="relative h-screen min-h-[700px] w-full overflow-hidden bg-charcoal">
        <motion.div style={{ y }} className="absolute inset-0">
          <img src={heroImage} alt="Safarmaina Resort enveloped in golden morning mist, Kasauli" className="h-[115%] w-full object-cover animate-ken-burns" />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-transparent to-charcoal/90" />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/50 via-transparent to-transparent" />
        </motion.div>

        <motion.div style={{ opacity }} className="relative z-10 h-full flex flex-col">
          <div className="flex-1 flex items-center">
            <div className="mx-auto max-w-[1400px] w-full px-6 lg:px-10">
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.3 }}>
                <div className="flex items-center gap-3 text-white/80 mb-6">
                  <span className="h-px w-12 bg-gold" />
                  <span className="text-[11px] tracking-[0.4em] uppercase">Garkhal · Kasauli · Himachal Pradesh</span>
                </div>
                <h1 className="font-serif text-white text-[clamp(3rem,8vw,7.5rem)] leading-[0.95] tracking-tight text-balance max-w-5xl">
                  A brookside <em className="italic gradient-text">retreat</em><br/>
                  woven into the mountain.
                </h1>
                <p className="mt-8 max-w-xl text-white/75 text-lg leading-relaxed font-light">
                  Where pine winds carry the sound of an old waterfall and the valley unfolds beneath your balcony.
                </p>
                <div className="mt-10 flex flex-wrap gap-4">
                  <Link to="/booking" className="px-8 py-4 bg-gradient-gold text-charcoal text-xs tracking-[0.3em] uppercase font-medium shadow-gold-glow hover:scale-105 transition-transform">
                    Reserve Your Stay
                  </Link>
                  <Link to="/rooms" className="px-8 py-4 glass text-white text-xs tracking-[0.3em] uppercase hover:bg-white/10 transition">
                    Explore Rooms
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Floating booking card */}
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.8 }} className="hidden md:block pb-16">
            <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
              <div className="glass rounded-2xl p-6 grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl text-white">
                {[
                  ["Check In", "1 PM"],
                  ["Check Out", "11 AM"],
                  ["Guests", "2 Adults"],
                  ["Rooms", "1 Suite"],
                ].map(([l, v]) => (
                  <div key={l} className="border-r border-white/10 last:border-0 pr-4">
                    <div className="text-[10px] tracking-[0.3em] uppercase text-gold mb-1">{l}</div>
                    <div className="font-serif text-xl">{v}</div>
                  </div>
                ))}
                <Link to="/booking" className="bg-gradient-gold text-charcoal text-[11px] tracking-[0.3em] uppercase flex items-center justify-center rounded-xl hover:scale-[1.02] transition py-3">
                  Check Availability
                </Link>
              </div>
            </div>
          </motion.div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 flex flex-col items-center gap-2 animate-float">
            <span className="text-[10px] tracking-[0.4em] uppercase">Scroll</span>
            <ChevronDown className="h-4 w-4" />
          </div>
        </motion.div>
      </section>

      {/* INTRO STORY */}
      <section className="py-32 bg-background">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid lg:grid-cols-12 gap-16 items-center">
          <Reveal className="lg:col-span-5">
            <SectionLabel>The Retreat</SectionLabel>
            <h2 className="mt-6 font-serif text-5xl lg:text-6xl leading-[1.05] text-balance">
              Stillness, served with a view of the valley.
            </h2>
            <p className="mt-8 text-muted-foreground leading-relaxed text-lg">
              Safarmaina is a quiet hideaway tucked along the Parwanoo–Kasauli road, where mountain brooks thread through deodar pines and the old waterfall hums all year. Wake to mist on the rails. Linger over coffee. Disappear into the trees.
            </p>
            <Link to="/about" className="mt-10 inline-block luxury-link text-accent text-xs tracking-[0.3em] uppercase">Read Our Story</Link>
          </Reveal>
          <Reveal delay={0.15} className="lg:col-span-7 grid grid-cols-2 gap-5">
            <div className="space-y-5">
              <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-luxury">
                <img src={exteriorEvening} alt="Safarmaina Resort at dusk, lanterns lit along the hillside" className="h-full w-full object-cover hover:scale-105 transition-transform duration-1000" />
              </div>
              <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-soft">
                <img src={coffeeView} alt="Cappuccino on the balcony with mountain view" className="h-full w-full object-cover hover:scale-105 transition-transform duration-1000" />
              </div>
            </div>
            <div className="pt-16 space-y-5">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-soft">
                <img src={poolSunset} alt="Infinity-edge pool at sunset overlooking Kasauli valley" className="h-full w-full object-cover hover:scale-105 transition-transform duration-1000" />
              </div>
              <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-luxury">
                <img src={terraceNight} alt="Stone terrace illuminated at night" className="h-full w-full object-cover hover:scale-105 transition-transform duration-1000" />
              </div>
            </div>
          </Reveal>
        </div>

        {/* Counters */}
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 mt-32 grid grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-3xl overflow-hidden">
          {[
            ["12+", "Curated Rooms"],
            ["1500m", "Mountain Elevation"],
            ["4.8★", "Guest Rating"],
            ["365", "Days of Magic"],
          ].map(([n, l]) => (
            <div key={l} className="bg-background p-10 text-center">
              <div className="font-serif text-5xl lg:text-6xl gradient-text">{n}</div>
              <div className="mt-3 text-xs tracking-[0.3em] uppercase text-muted-foreground">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCES STRIP */}
      <section className="py-32 bg-emerald-deep text-white">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <Reveal className="max-w-3xl">
            <SectionLabel>The Experience</SectionLabel>
            <h2 className="mt-6 font-serif text-5xl lg:text-6xl leading-[1.05]">
              A day at <em className="italic gradient-text">Safarmaina</em>.
            </h2>
          </Reveal>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Waves, title: "Swimming Pool", desc: "Sunset dips with the valley in front of you.", to: "/pool" },
              { icon: Utensils, title: "Mountain Kitchen", desc: "Home-style meals, Himachali specialities.", to: "/dining" },
              { icon: TreePine, title: "Old Waterfall", desc: "A short walk into the trees and a cold rush of water.", to: "/waterfall" },
              { icon: Flame, title: "Evening Bonfire", desc: "Stories under a sky thick with stars.", to: "/experiences" },
              { icon: Mountain, title: "Nature Trails", desc: "Gilbert Trail, sunrise and sunset points nearby.", to: "/attractions" },
              { icon: Star, title: "Pet Friendly", desc: "Bring the whole pack. The mountain has room.", to: "/experiences" },
            ].map((c, i) => (
              <Reveal key={c.title} delay={i * 0.08}>
                <Link to={c.to} className="group block glass rounded-2xl p-8 h-full hover-lift">
                  <c.icon className="h-7 w-7 text-gold mb-6" />
                  <h3 className="font-serif text-2xl text-white">{c.title}</h3>
                  <p className="mt-3 text-sm text-white/65 leading-relaxed">{c.desc}</p>
                  <span className="mt-6 inline-block text-[10px] tracking-[0.3em] uppercase text-gold luxury-link">Discover</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ROOMS PREVIEW */}
      <section className="py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <Reveal>
              <SectionLabel>Stays</SectionLabel>
              <h2 className="mt-6 font-serif text-5xl lg:text-6xl leading-[1.05] max-w-2xl">Rooms with a window onto the mountain.</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <Link to="/rooms" className="luxury-link text-accent text-xs tracking-[0.3em] uppercase">View All Suites →</Link>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { img: roomBlue, name: "Valley View Suite", price: "from ₹5,800", desc: "Azure walls, balcony, valley below your feet." },
              { img: roomWood, name: "Pine Wood Cabin", price: "from ₹4,800", desc: "Wrapped in deodar wood, warm and woody quiet." },
            ].map((r, i) => (
              <Reveal key={r.name} delay={i * 0.1}>
                <div className="group relative overflow-hidden rounded-3xl shadow-luxury">
                  <div className="aspect-[4/5] overflow-hidden">
                    <img src={r.img} alt={`${r.name} at Safarmaina Resort, Kasauli`} className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-[1500ms]" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/30 to-transparent" />
                  <div className="absolute inset-0 p-10 flex flex-col justify-end text-white">
                    <div className="text-[10px] tracking-[0.4em] uppercase text-gold">{r.price}</div>
                    <h3 className="font-serif text-4xl mt-2">{r.name}</h3>
                    <p className="mt-3 text-white/70 max-w-md">{r.desc}</p>
                    <Link to="/rooms" className="mt-6 inline-block w-fit px-6 py-3 glass rounded-full text-[11px] tracking-[0.3em] uppercase hover:bg-white/15">Reserve</Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DINING */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={restaurant} alt="Safarmaina restaurant with valley-facing windows" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-charcoal/70" />
        </div>
        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 text-white">
          <Reveal className="max-w-2xl">
            <SectionLabel>Mountain Kitchen</SectionLabel>
            <h2 className="mt-6 font-serif text-5xl lg:text-6xl leading-[1.05]">Slow cooked. Locally rooted.</h2>
            <p className="mt-6 text-white/75 text-lg leading-relaxed">
              Breakfast on the terrace, long Himachali lunches, candle-lit dinners. Our kitchen pulls from the village garden and the family recipe book in equal measure.
            </p>
            <Link to="/dining" className="mt-8 inline-block px-7 py-4 bg-gradient-gold text-charcoal text-[11px] tracking-[0.3em] uppercase">Explore the Menu</Link>
          </Reveal>
        </div>
      </section>

      {/* WATERFALL TEASER */}
      <section className="py-32 bg-background">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="aspect-[5/6] rounded-3xl overflow-hidden shadow-luxury">
              <img src={sunsetValley} alt="Sunset over the Kasauli valley from Safarmaina" className="h-full w-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <SectionLabel>Natural Waterfall</SectionLabel>
            <h2 className="mt-6 font-serif text-5xl lg:text-6xl leading-[1.05]">The waterfall remembers everyone who visits.</h2>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              A short trail from the resort opens into a cold, clear basin. Sit a while. Listen. The mountain does most of the talking.
            </p>
            <Link to="/waterfall" className="mt-8 inline-block luxury-link text-accent text-xs tracking-[0.3em] uppercase">Walk With Us</Link>
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-32 bg-beige">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 text-center">
          <SectionLabel><span className="mx-auto">Guests Speak</span></SectionLabel>
          <Reveal>
            <p className="mt-8 font-serif italic text-3xl lg:text-5xl text-foreground/85 max-w-4xl mx-auto leading-[1.15]">
              "We arrived tired and left rearranged. The mist, the food, the gold light at six — Safarmaina is something rare."
            </p>
            <div className="mt-10 flex items-center justify-center gap-1 text-gold">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
            </div>
            <p className="mt-4 text-xs tracking-[0.3em] uppercase text-muted-foreground">Aanya & Ishaan · Mumbai</p>
            <Link to="/contact" className="mt-12 inline-block luxury-link text-accent text-xs tracking-[0.3em] uppercase">Plan Your Visit</Link>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-40 bg-charcoal text-white overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img src={entranceNight} alt="Resort entrance illuminated at night" className="h-full w-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/70 to-charcoal" />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <SectionLabel><span className="mx-auto">Reserve</span></SectionLabel>
            <h2 className="mt-6 font-serif text-5xl lg:text-7xl leading-[1.05]">The mountain is waiting.</h2>
            <p className="mt-6 text-white/70 text-lg">A short drive from Chandigarh. A world from everywhere else.</p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link to="/booking" className="px-8 py-4 bg-gradient-gold text-charcoal text-[11px] tracking-[0.3em] uppercase shadow-gold-glow hover:scale-105 transition">Book Your Stay</Link>
              <a href="tel:+919821870540" className="px-8 py-4 glass text-white text-[11px] tracking-[0.3em] uppercase">+91 98218 70540</a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
