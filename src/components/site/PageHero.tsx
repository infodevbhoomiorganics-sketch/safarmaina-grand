import type { ReactNode } from "react";
import { motion } from "framer-motion";

export function PageHero({ image, eyebrow, title, subtitle, height = "h-[70vh]" }: { image: string; eyebrow: string; title: ReactNode; subtitle?: string; height?: string }) {
  return (
    <section className={`relative ${height} min-h-[480px] w-full overflow-hidden bg-charcoal`}>
      <img src={image} alt={typeof title === "string" ? title : eyebrow} className="absolute inset-0 h-full w-full object-cover animate-ken-burns" />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/20 to-charcoal/80" />
      <div className="relative z-10 h-full flex items-end pb-24">
        <div className="mx-auto max-w-[1400px] w-full px-6 lg:px-10 text-white">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-gold" />
              <span className="text-[11px] tracking-[0.4em] uppercase text-gold">{eyebrow}</span>
            </div>
            <h1 className="mt-6 font-serif text-[clamp(2.5rem,6vw,5.5rem)] leading-[1] text-balance max-w-4xl">{title}</h1>
            {subtitle && <p className="mt-6 text-white/75 text-lg max-w-2xl">{subtitle}</p>}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
