import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/site/PageHero";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import terraceNight from "../assets/hotel/terrace-night.png";

const FAQS = [
  { q: "What are the check-in and check-out times?", a: "Check-in is from 1 PM and check-out by 11 AM. Early check-in and late check-out are subject to availability." },
  { q: "Is the resort pet friendly?", a: "Yes. We welcome well-behaved pets at no extra cost. Please inform us in advance so we can prepare the room." },
  { q: "Is there a swimming pool?", a: "Yes, our valley-facing pool is open from 7 AM to 7 PM." },
  { q: "How far is the natural waterfall?", a: "A short 8–10 minute walk from the resort along a marked forest trail." },
  { q: "Do you serve all meals?", a: "Yes — breakfast, lunch and dinner are served daily in our mountain restaurant." },
  { q: "Is parking available?", a: "Free on-site parking for all guests." },
  { q: "Do you provide bonfires?", a: "Bonfires are available on request, weather permitting." },
  { q: "What's the cancellation policy?", a: "Free cancellation up to 7 days before check-in. See our Cancellation Policy page for full details." },
];

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Safarmaina Resort Kasauli" },
      { name: "description", content: "Frequently asked questions about staying at Safarmaina Resort in Garkhal, Kasauli." },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      }),
    }],
  }),
  component: Faq,
});

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <>
      <PageHero image={terraceNight} eyebrow="Help" title={<>Frequently <em className="italic gradient-text">asked</em>.</>} height="h-[55vh]" />
      <section className="py-24">
        <div className="mx-auto max-w-[900px] px-6 lg:px-10 space-y-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="border border-border rounded-2xl bg-card overflow-hidden">
                <button onClick={() => setOpen(isOpen ? null : i)} className="w-full p-6 flex items-center justify-between text-left">
                  <span className="font-serif text-xl">{f.q}</span>
                  {isOpen ? <Minus className="h-5 w-5 text-accent shrink-0" /> : <Plus className="h-5 w-5 text-accent shrink-0" />}
                </button>
                {isOpen && <div className="px-6 pb-6 text-muted-foreground leading-relaxed animate-fade-up">{f.a}</div>}
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
