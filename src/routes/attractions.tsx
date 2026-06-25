import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/site/PageHero";
import { Reveal } from "../components/site/Reveal";
import { MapPin, Clock } from "lucide-react";
import sunsetValley from "../assets/hotel/sunset-valley.png";
import exteriorMist from "../assets/hotel/exterior-mist.png";
import terraceNight from "../assets/hotel/terrace-night.png";
import coffeeView from "../assets/hotel/coffee-view.png";
import exteriorEvening from "../assets/hotel/exterior-evening.png";

const PLACES = [
  { name: "Gilbert Nature Trail", dist: "6 km", time: "15 min", img: sunsetValley, desc: "A misty forest trail with British-era charm and birdsong." },
  { name: "Sunset Point", dist: "8 km", time: "20 min", img: exteriorMist, desc: "Kasauli's iconic ridge that paints the sky every evening." },
  { name: "Sunrise Point", dist: "9 km", time: "22 min", img: coffeeView, desc: "First light on the Himalayas. Worth the early alarm." },
  { name: "Manki Point", dist: "10 km", time: "25 min", img: terraceNight, desc: "Highest viewpoint in Kasauli, with the Hanuman temple." },
  { name: "Kasauli Market", dist: "11 km", time: "28 min", img: exteriorEvening, desc: "Charming colonial-era market lanes for tea, jams and curios." },
];

export const Route = createFileRoute("/attractions")({
  head: () => ({
    meta: [
      { title: "Nearby Attractions — Kasauli & Garkhal | Safarmaina Resort" },
      { name: "description", content: "Gilbert Trail, Sunset Point, Manki Point, Kasauli Market and more — all close to Safarmaina Resort in Garkhal." },
      { property: "og:url", content: "/attractions" },
    ],
    links: [{ rel: "canonical", href: "/attractions" }],
  }),
  component: Att,
});

function Att() {
  return (
    <>
      <PageHero image={sunsetValley} eyebrow="Nearby" title={<>Kasauli's quiet <em className="italic gradient-text">corners</em>, close by.</>} />
      <section className="py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PLACES.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.06}>
              <article className="group bg-card rounded-3xl overflow-hidden shadow-soft hover-lift">
                <div className="overflow-hidden aspect-[4/3]">
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1500ms]" />
                </div>
                <div className="p-8">
                  <h3 className="font-serif text-2xl">{p.name}</h3>
                  <p className="mt-3 text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
                  <div className="mt-6 flex gap-6 text-xs tracking-wider uppercase text-accent">
                    <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" />{p.dist}</span>
                    <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" />{p.time}</span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
