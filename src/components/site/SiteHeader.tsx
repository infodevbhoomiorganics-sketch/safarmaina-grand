import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/rooms", label: "Rooms" },
  { to: "/dining", label: "Dining" },
  { to: "/pool", label: "Pool" },
  { to: "/waterfall", label: "Waterfall" },
  { to: "/experiences", label: "Experiences" },
  { to: "/gallery", label: "Gallery" },
  { to: "/attractions", label: "Nearby" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-light shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3 group">
          <div className={`h-9 w-9 rounded-full border flex items-center justify-center transition ${scrolled ? "border-forest text-forest" : "border-white/70 text-white"}`}>
            <span className="font-serif text-lg italic">S</span>
          </div>
          <div className={`leading-tight ${scrolled ? "text-foreground" : "text-white"}`}>
            <div className="font-serif text-xl tracking-wide">Safarmaina</div>
            <div className="text-[10px] tracking-[0.3em] uppercase opacity-70">Kasauli · Himachal</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeProps={{ className: "text-accent" }}
              className={`luxury-link text-[13px] tracking-[0.15em] uppercase transition ${scrolled ? "text-foreground/80 hover:text-foreground" : "text-white/85 hover:text-white"}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a href="tel:+919821870540" className={`flex items-center gap-2 text-xs tracking-wider ${scrolled ? "text-foreground" : "text-white"}`}>
            <Phone className="h-4 w-4" /> +91 98218 70540
          </a>
          <Link to="/booking" className="px-5 py-3 bg-gradient-gold text-charcoal text-[11px] tracking-[0.25em] uppercase font-medium shadow-gold-glow hover:scale-[1.03] transition-transform">
            Book Stay
          </Link>
        </div>

        <button className={`lg:hidden ${scrolled ? "text-foreground" : "text-white"}`} onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-border">
          <div className="px-6 py-6 flex flex-col gap-4">
            {NAV.map((item) => (
              <Link key={item.to} to={item.to} onClick={() => setOpen(false)} className="text-foreground text-sm tracking-wider uppercase py-2 border-b border-border/50">
                {item.label}
              </Link>
            ))}
            <Link to="/booking" onClick={() => setOpen(false)} className="mt-4 px-5 py-3 bg-gradient-gold text-charcoal text-xs tracking-widest uppercase text-center">Book Stay</Link>
          </div>
        </div>
      )}
    </header>
  );
}
