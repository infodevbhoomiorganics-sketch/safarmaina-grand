import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/site/PageHero";
import { Reveal } from "../components/site/Reveal";
import { useState } from "react";
import { X } from "lucide-react";
import exteriorMist from "../assets/hotel/exterior-mist.png";
import poolSunset from "../assets/hotel/pool-sunset.png";
import restaurant from "../assets/hotel/restaurant.png";
import terraceNight from "../assets/hotel/terrace-night.png";
import roomBlue from "../assets/hotel/room-blue.png";
import roomWood from "../assets/hotel/room-wood.png";
import exteriorEvening from "../assets/hotel/exterior-evening.png";
import coffeeView from "../assets/hotel/coffee-view.png";
import entranceNight from "../assets/hotel/entrance-night.png";
import sunsetValley from "../assets/hotel/sunset-valley.png";

type Cat = "all" | "rooms" | "pool" | "restaurant" | "nature" | "resort";
const IMAGES: { src: string; alt: string; cat: Exclude<Cat, "all">; h: number }[] = [
  { src: exteriorMist, alt: "Resort in morning mist", cat: "resort", h: 2 },
  { src: poolSunset, alt: "Pool at sunset", cat: "pool", h: 1 },
  { src: restaurant, alt: "Restaurant interior", cat: "restaurant", h: 1 },
  { src: terraceNight, alt: "Lit terrace at night", cat: "resort", h: 1 },
  { src: roomBlue, alt: "Valley view suite", cat: "rooms", h: 2 },
  { src: roomWood, alt: "Pine wood cabin", cat: "rooms", h: 1 },
  { src: exteriorEvening, alt: "Resort at dusk", cat: "resort", h: 1 },
  { src: coffeeView, alt: "Coffee with valley view", cat: "restaurant", h: 1 },
  { src: entranceNight, alt: "Entrance lit at night", cat: "resort", h: 2 },
  { src: sunsetValley, alt: "Sunset over valley", cat: "nature", h: 1 },
];

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Safarmaina Resort Kasauli" },
      { name: "description", content: "Photo gallery of Safarmaina Resort — rooms, pool, restaurant, waterfall and mountain views in Kasauli." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Gallery,
});

function Gallery() {
  const [cat, setCat] = useState<Cat>("all");
  const [open, setOpen] = useState<string | null>(null);
  const cats: Cat[] = ["all", "rooms", "pool", "restaurant", "nature", "resort"];
  const visible = IMAGES.filter((i) => cat === "all" || i.cat === cat);

  return (
    <>
      <PageHero image={exteriorMist} eyebrow="Gallery" title={<>The mountain, in <em className="italic gradient-text">frames</em>.</>} />

      <section className="py-20">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="flex flex-wrap gap-2 justify-center mb-14">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`px-6 py-2.5 rounded-full text-[11px] tracking-[0.3em] uppercase transition ${cat === c ? "bg-foreground text-background" : "border border-border hover:bg-muted"}`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
            {visible.map((img, i) => (
              <Reveal key={img.src + i} delay={i * 0.03}>
                <button onClick={() => setOpen(img.src)} className="block w-full overflow-hidden rounded-2xl group">
                  <img src={img.src} alt={img.alt} className={`w-full ${img.h === 2 ? "aspect-[3/4]" : "aspect-[4/3]"} object-cover group-hover:scale-105 transition-transform duration-[1500ms]`} />
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {open && (
        <div onClick={() => setOpen(null)} className="fixed inset-0 z-[100] bg-charcoal/95 backdrop-blur-xl flex items-center justify-center p-6 animate-fade-in-slow">
          <button className="absolute top-6 right-6 text-white" onClick={() => setOpen(null)}><X /></button>
          <img src={open} alt="Gallery viewer" className="max-h-[90vh] max-w-[90vw] rounded-2xl shadow-luxury" />
        </div>
      )}
    </>
  );
}
