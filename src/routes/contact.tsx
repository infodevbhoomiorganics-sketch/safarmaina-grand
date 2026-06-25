import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/site/PageHero";
import { Reveal } from "../components/site/Reveal";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import entranceNight from "../assets/hotel/entrance-night.png";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Safarmaina Resort, Kasauli" },
      { name: "description", content: "Reach Safarmaina Resort in Garkhal, Kasauli. Phone +91 98218 70540. Reservations, directions and enquiries." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHero image={entranceNight} eyebrow="Contact" title={<>Plan your <em className="italic gradient-text">arrival</em>.</>} subtitle="We answer every enquiry within a few hours." />

      <section className="py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-5">
            <h2 className="font-serif text-4xl">Reach the resort</h2>
            <div className="mt-10 space-y-6">
              {[
                { i: MapPin, t: "Address", d: "Parwanoo Kasauli Road, Near Old Waterfall, Garkhal, Kasauli, Himachal Pradesh 173204" },
                { i: Phone, t: "Phone", d: "+91 98218 70540", href: "tel:+919821870540" },
                { i: Mail, t: "Email", d: "stay@safarmaina.com", href: "mailto:stay@safarmaina.com" },
                { i: Clock, t: "Hours", d: "Check-in 1 PM · Check-out 11 AM · Reception 24x7" },
              ].map((x) => (
                <div key={x.t} className="flex gap-5 glass-light p-6 rounded-2xl">
                  <div className="h-12 w-12 rounded-full bg-gradient-gold flex items-center justify-center shrink-0"><x.i className="h-5 w-5 text-charcoal" /></div>
                  <div>
                    <div className="text-[10px] tracking-[0.3em] uppercase text-accent">{x.t}</div>
                    {x.href ? <a href={x.href} className="block mt-1 text-foreground/85">{x.d}</a> : <p className="mt-1 text-foreground/85">{x.d}</p>}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-7">
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="bg-card border border-border rounded-3xl p-10 shadow-soft space-y-5">
              <h3 className="font-serif text-3xl">Send a note</h3>
              <div className="grid md:grid-cols-2 gap-5">
                <input required placeholder="Name" className="bg-background border border-border rounded-xl px-4 py-3.5 focus:border-accent outline-none" />
                <input required type="email" placeholder="Email" className="bg-background border border-border rounded-xl px-4 py-3.5 focus:border-accent outline-none" />
              </div>
              <input placeholder="Phone" className="w-full bg-background border border-border rounded-xl px-4 py-3.5 focus:border-accent outline-none" />
              <textarea required rows={5} placeholder="Your message" className="w-full bg-background border border-border rounded-xl px-4 py-3.5 focus:border-accent outline-none" />
              <button type="submit" className="w-full py-4 bg-gradient-gold text-charcoal text-[11px] tracking-[0.3em] uppercase">{sent ? "Thank you — we'll be in touch" : "Send Message"}</button>
            </form>
          </Reveal>
        </div>
      </section>

      <section className="pb-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <Reveal>
            <div className="rounded-3xl overflow-hidden shadow-luxury aspect-[16/8]">
              <iframe
                title="Safarmaina Resort map"
                src="https://www.google.com/maps?q=Safarmaina+Resort+Garkhal+Kasauli&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>
            <div className="mt-6 text-center">
              <a href="https://maps.app.goo.gl/qiUSoVNM7SQNhSiC8" target="_blank" rel="noopener noreferrer" className="luxury-link text-accent text-xs tracking-[0.3em] uppercase">Open in Google Maps →</a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
