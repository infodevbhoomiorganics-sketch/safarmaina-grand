import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/site/PageHero";
import { Reveal } from "../components/site/Reveal";
import { Flame, Mountain, Camera, Sun, Sunrise, Heart, TreePine, Users, PawPrint } from "lucide-react";
import terraceNight from "../assets/hotel/terrace-night.png";

const EXP = [
  { icon: Flame, t: "Bonfire Evenings", d: "Crackling fires under a thick mountain sky." },
  { icon: Sunrise, t: "Mountain Sunrise", d: "Wake early. Catch first light from the terrace." },
  { icon: Sun, t: "Sunset Views", d: "The valley turns gold every evening, on cue." },
  { icon: Mountain, t: "Nature Walks", d: "Easy trails through pine forest and brookside paths." },
  { icon: TreePine, t: "Hiking", d: "Longer treks to Gilbert Trail and surrounding ridges." },
  { icon: Camera, t: "Photography", d: "Mist, mountain, lantern light — endlessly photogenic." },
  { icon: Users, t: "Family Activities", d: "Badminton, board games and pool-deck afternoons." },
  { icon: Heart, t: "Pure Relaxation", d: "Slow mornings. Long lunches. No notifications." },
  { icon: PawPrint, t: "Pet Friendly", d: "Your dog is welcome. The mountain has room for all." },
];

export const Route = createFileRoute("/experiences")({
  head: () => ({
    meta: [
      { title: "Experiences — Bonfire, Hiking, Pet Friendly | Safarmaina Resort" },
      { name: "description", content: "Bonfire evenings, nature walks, hiking, photography, pet-friendly stays and more at Safarmaina Resort, Kasauli." },
      { property: "og:url", content: "/experiences" },
    ],
    links: [{ rel: "canonical", href: "/experiences" }],
  }),
  component: Exp,
});

function Exp() {
  return (
    <>
      <PageHero image={terraceNight} eyebrow="Experiences" title={<>Things that happen <em className="italic gradient-text">slowly</em>.</>} subtitle="A mountain stay measured in fires lit and paths walked." />
      <section className="py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EXP.map((e, i) => (
            <Reveal key={e.t} delay={i * 0.05}>
              <div className="group bg-card border border-border rounded-3xl p-10 h-full hover-lift">
                <e.icon className="h-8 w-8 text-accent" />
                <h3 className="mt-6 font-serif text-3xl">{e.t}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{e.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
