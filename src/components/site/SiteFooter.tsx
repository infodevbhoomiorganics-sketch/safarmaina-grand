import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Mail, MapPin, Phone, Clock } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-emerald-deep text-white/85 mt-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-20 grid lg:grid-cols-4 gap-12">
        <div>
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full border border-gold/60 flex items-center justify-center text-gold">
              <span className="font-serif italic text-lg">S</span>
            </div>
            <div>
              <div className="font-serif text-2xl text-white">Safarmaina</div>
              <div className="text-[10px] tracking-[0.3em] uppercase opacity-60">Brookside Retreat</div>
            </div>
          </div>
          <p className="mt-6 text-sm leading-relaxed text-white/65">
            A quiet luxury retreat carved into the pines of Garkhal, where the brook sings and the mountains hold the sky.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#" aria-label="Instagram" className="h-10 w-10 glass rounded-full flex items-center justify-center hover:bg-gold/20 transition"><Instagram className="h-4 w-4" /></a>
            <a href="#" aria-label="Facebook" className="h-10 w-10 glass rounded-full flex items-center justify-center hover:bg-gold/20 transition"><Facebook className="h-4 w-4" /></a>
            <a href="mailto:stay@safarmaina.com" aria-label="Email" className="h-10 w-10 glass rounded-full flex items-center justify-center hover:bg-gold/20 transition"><Mail className="h-4 w-4" /></a>
          </div>
        </div>

        <div>
          <h4 className="text-gold text-xs tracking-[0.3em] uppercase mb-5">Explore</h4>
          <ul className="space-y-3 text-sm">
            {[["/about","About"],["/rooms","Rooms & Suites"],["/dining","Dining"],["/pool","Swimming Pool"],["/waterfall","Waterfall"],["/experiences","Experiences"],["/gallery","Gallery"],["/attractions","Nearby"]].map(([to,label])=>(
              <li key={to}><Link to={to} className="text-white/70 hover:text-gold transition luxury-link">{label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-gold text-xs tracking-[0.3em] uppercase mb-5">Visit</h4>
          <ul className="space-y-4 text-sm text-white/75">
            <li className="flex gap-3"><MapPin className="h-4 w-4 mt-0.5 text-gold shrink-0" /><span>Parwanoo Kasauli Road, Near Old Waterfall, Garkhal, Kasauli, HP 173204</span></li>
            <li className="flex gap-3"><Phone className="h-4 w-4 mt-0.5 text-gold shrink-0" /><a href="tel:+919821870540">+91 98218 70540</a></li>
            <li className="flex gap-3"><Clock className="h-4 w-4 mt-0.5 text-gold shrink-0" /><span>Check-in 1 PM · Check-out 11 AM</span></li>
          </ul>
        </div>

        <div>
          <h4 className="text-gold text-xs tracking-[0.3em] uppercase mb-5">Newsletter</h4>
          <p className="text-sm text-white/65 mb-4">Whispers from the mountain, once a season.</p>
          <form className="flex glass rounded-full overflow-hidden">
            <input type="email" placeholder="Your email" className="flex-1 bg-transparent px-4 py-3 text-sm placeholder:text-white/40 focus:outline-none" />
            <button className="px-5 bg-gradient-gold text-charcoal text-[10px] tracking-[0.25em] uppercase">Join</button>
          </form>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-6 flex flex-col md:flex-row justify-between gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Safarmaina Resort. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/faq" className="hover:text-gold">FAQ</Link>
            <Link to="/privacy" className="hover:text-gold">Privacy</Link>
            <Link to="/terms" className="hover:text-gold">Terms</Link>
            <Link to="/cancellation" className="hover:text-gold">Cancellation</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
