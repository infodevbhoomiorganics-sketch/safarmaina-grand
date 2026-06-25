import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/site/PageHero";
import { Reveal } from "../components/site/Reveal";
import { useState } from "react";
import { Check } from "lucide-react";
import roomBlue from "../assets/hotel/room-blue.png";

export const Route = createFileRoute("/booking")({
  head: () => ({
    meta: [
      { title: "Book Your Stay — Safarmaina Resort Kasauli" },
      { name: "description", content: "Reserve a luxury room or suite at Safarmaina Resort in Garkhal, Kasauli." },
      { property: "og:url", content: "/booking" },
    ],
    links: [{ rel: "canonical", href: "/booking" }],
  }),
  component: Booking,
});

function Booking() {
  const [done, setDone] = useState(false);
  if (done) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-emerald-deep text-white text-center px-6">
        <div className="animate-fade-up">
          <div className="mx-auto h-20 w-20 rounded-full bg-gradient-gold flex items-center justify-center"><Check className="h-9 w-9 text-charcoal" /></div>
          <h1 className="mt-10 font-serif text-5xl">Reservation Received</h1>
          <p className="mt-4 text-white/70 max-w-md mx-auto">Our reservations desk will call you within a few hours to confirm. The mountain is keeping a window open for you.</p>
          <a href="tel:+919821870540" className="mt-10 inline-block px-8 py-4 bg-gradient-gold text-charcoal text-[11px] tracking-[0.3em] uppercase">Call +91 98218 70540</a>
        </div>
      </section>
    );
  }
  return (
    <>
      <PageHero image={roomBlue} eyebrow="Reservations" title={<>Reserve your <em className="italic gradient-text">retreat</em>.</>} height="h-[55vh]" />
      <section className="py-24">
        <div className="mx-auto max-w-[900px] px-6 lg:px-10">
          <Reveal>
            <form onSubmit={(e) => { e.preventDefault(); setDone(true); }} className="bg-card border border-border rounded-3xl p-10 lg:p-14 shadow-luxury space-y-6">
              <h2 className="font-serif text-4xl">Booking Details</h2>
              <div className="grid md:grid-cols-2 gap-5">
                <Field label="Full Name"><input required className={input} /></Field>
                <Field label="Email"><input required type="email" className={input} /></Field>
                <Field label="Phone"><input required className={input} placeholder="+91" /></Field>
                <Field label="Room Type">
                  <select className={input}><option>Valley View Suite</option><option>Pine Wood Cabin</option><option>Brookside Family Room</option></select>
                </Field>
                <Field label="Check In"><input required type="date" className={input} /></Field>
                <Field label="Check Out"><input required type="date" className={input} /></Field>
                <Field label="Adults"><input type="number" min={1} defaultValue={2} className={input} /></Field>
                <Field label="Children"><input type="number" min={0} defaultValue={0} className={input} /></Field>
                <Field label="Rooms"><input type="number" min={1} defaultValue={1} className={input} /></Field>
                <Field label="Pet?"><select className={input}><option>No</option><option>Yes</option></select></Field>
              </div>
              <Field label="Special Requests"><textarea rows={4} className={input} placeholder="Anniversary, dietary preferences, early check-in…" /></Field>
              <button type="submit" className="w-full py-4 bg-gradient-gold text-charcoal text-[11px] tracking-[0.3em] uppercase">Confirm Reservation</button>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
const input = "w-full bg-background border border-border rounded-xl px-4 py-3.5 focus:border-accent outline-none";
function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">{label}</span>
      <div className="mt-2">{children}</div>
    </label>
  );
}
