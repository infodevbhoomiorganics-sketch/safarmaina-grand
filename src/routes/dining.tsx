import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/site/PageHero";
import { Reveal, SectionLabel } from "../components/site/Reveal";
import restaurant from "../assets/hotel/restaurant.png";
import coffeeView from "../assets/hotel/coffee-view.png";
import terraceNight from "../assets/hotel/terrace-night.png";

export const Route = createFileRoute("/dining")({
  head: () => ({
    meta: [
      { title: "Dining — Mountain Kitchen | Safarmaina Resort Kasauli" },
      { name: "description", content: "Home-style meals, Himachali specialties and slow breakfasts at Safarmaina Resort's mountain restaurant in Garkhal, Kasauli." },
      { property: "og:url", content: "/dining" },
    ],
    links: [{ rel: "canonical", href: "/dining" }],
  }),
  component: Dining,
});

const MENU = [
  { time: "Breakfast", h: "7:30 — 10:30", items: ["Aloo Paratha · butter · curd", "Masala Omelette · pahari herbs", "Stuffed Kulcha · pickles", "Filter Coffee · Himalayan honey"] },
  { time: "Lunch", h: "12:30 — 15:00", items: ["Madra · chickpea · yogurt", "Sidu · stuffed wheat bread", "Tandoori Trout · lemon", "Garden Salad · local greens"] },
  { time: "Dinner", h: "19:00 — 22:30", items: ["Chha Gosht · slow lamb", "Babru · black-gram kachori", "Vegetable Thali · 7 courses", "Apple Crumble · cinnamon"] },
];

function Dining() {
  return (
    <>
      <PageHero image={restaurant} eyebrow="Mountain Kitchen" title={<>Slow cooked. <em className="italic gradient-text">Locally rooted.</em></>} subtitle="Three meals a day, each one tied to the valley." />

      <section className="py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <SectionLabel>The Table</SectionLabel>
            <h2 className="mt-6 font-serif text-5xl leading-[1.05]">A long table with the valley as the centerpiece.</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
              Our restaurant runs floor-to-ceiling windows on both sides — sun in the morning, fog by lunch, fire-light by night. The menu is home-style: Himachali staples, Indian comfort food, and a chef's special each evening.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <img src={restaurant} alt="Restaurant interior with floor to ceiling windows" className="rounded-3xl shadow-luxury w-full aspect-[4/3] object-cover" />
          </Reveal>
        </div>
      </section>

      <section className="py-20 bg-beige">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <Reveal><h2 className="font-serif text-5xl text-center">A Day on the Menu</h2></Reveal>
          <div className="mt-16 grid lg:grid-cols-3 gap-8">
            {MENU.map((m, i) => (
              <Reveal key={m.time} delay={i * 0.1}>
                <div className="bg-background rounded-3xl p-10 shadow-soft hover-lift h-full">
                  <div className="text-[11px] tracking-[0.3em] uppercase text-accent">{m.h}</div>
                  <h3 className="font-serif text-4xl mt-3">{m.time}</h3>
                  <ul className="mt-8 space-y-4">
                    {m.items.map((it) => (
                      <li key={it} className="flex gap-3 text-foreground/80 leading-relaxed border-b border-border/60 pb-3 last:border-0">
                        <span className="text-gold">·</span>{it}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid md:grid-cols-2 gap-6">
          <Reveal><img src={coffeeView} alt="Mountain coffee" className="rounded-3xl w-full aspect-[4/5] object-cover shadow-luxury" /></Reveal>
          <Reveal delay={0.1}><img src={terraceNight} alt="Terrace at night" className="rounded-3xl w-full aspect-[4/5] object-cover shadow-luxury" /></Reveal>
        </div>
      </section>
    </>
  );
}
