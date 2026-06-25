import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "../components/site/PageHero";
import { Reveal } from "../components/site/Reveal";
import { Bed, Wifi, Coffee, Mountain, Wind, Tv } from "lucide-react";
import roomBlue from "../assets/hotel/room-blue.png";
import roomWood from "../assets/hotel/room-wood.png";
import coffeeView from "../assets/hotel/coffee-view.png";

const ROOMS = [
  { img: roomBlue, name: "Valley View Suite", price: "₹5,800", desc: "Spacious king suite with private balcony opening to the Kasauli valley. Azure accent walls, soft linens, and a writing desk by the window.", size: "32 sqm", guests: "2 Adults + 1 Child" },
  { img: roomWood, name: "Pine Wood Cabin", price: "₹4,800", desc: "Wrapped in deodar pine, a warm woody hideaway with mountain-facing windows and bespoke lighting.", size: "26 sqm", guests: "2 Adults" },
  { img: coffeeView, name: "Brookside Family Room", price: "₹7,200", desc: "Family-sized retreat closer to the waterfall trail, with a sit-out and panoramic balcony.", size: "42 sqm", guests: "4 Guests" },
];

export const Route = createFileRoute("/rooms")({
  head: () => ({
    meta: [
      { title: "Rooms & Suites — Safarmaina Resort, Kasauli" },
      { name: "description", content: "Mountain-view rooms, pine wood cabins and family suites at Safarmaina Resort, Garkhal, Kasauli. Private balconies and brookside calm." },
      { property: "og:url", content: "/rooms" },
    ],
    links: [{ rel: "canonical", href: "/rooms" }],
  }),
  component: Rooms,
});

function Rooms() {
  return (
    <>
      <PageHero image={roomBlue} eyebrow="Rooms & Suites" title={<>Sleep with the mountain at your window.</>} subtitle="Three room categories, each with its own view of the valley." />

      <section className="py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 space-y-24">
          {ROOMS.map((r, i) => (
            <Reveal key={r.name}>
              <div className={`grid lg:grid-cols-12 gap-10 items-center ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                <div className="lg:col-span-7 overflow-hidden rounded-3xl shadow-luxury group">
                  <img src={r.img} alt={`${r.name} at Safarmaina Resort`} className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-[1500ms]" />
                </div>
                <div className="lg:col-span-5">
                  <div className="text-[11px] tracking-[0.3em] uppercase text-accent">From {r.price} / night</div>
                  <h2 className="mt-3 font-serif text-5xl leading-tight">{r.name}</h2>
                  <p className="mt-6 text-muted-foreground leading-relaxed text-lg">{r.desc}</p>
                  <div className="mt-8 grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2"><Bed className="h-4 w-4 text-gold" /> {r.guests}</div>
                    <div className="flex items-center gap-2"><Mountain className="h-4 w-4 text-gold" /> {r.size}</div>
                    <div className="flex items-center gap-2"><Wifi className="h-4 w-4 text-gold" /> Free Wi-Fi</div>
                    <div className="flex items-center gap-2"><Coffee className="h-4 w-4 text-gold" /> Breakfast</div>
                    <div className="flex items-center gap-2"><Wind className="h-4 w-4 text-gold" /> Mountain Air</div>
                    <div className="flex items-center gap-2"><Tv className="h-4 w-4 text-gold" /> Smart TV</div>
                  </div>
                  <div className="mt-10 flex gap-4">
                    <Link to="/booking" className="px-7 py-3 bg-gradient-gold text-charcoal text-[11px] tracking-[0.3em] uppercase">Book Now</Link>
                    <Link to="/contact" className="px-7 py-3 border border-foreground/20 text-[11px] tracking-[0.3em] uppercase hover:bg-foreground hover:text-background transition">Enquire</Link>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
