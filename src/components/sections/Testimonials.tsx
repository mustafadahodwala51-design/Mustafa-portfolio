import { AnimatePresence, motion } from "motion/react";
import { Quote } from "lucide-react";
import { useEffect, useState } from "react";
import { SectionWrapper, SectionHeading } from "@/components/shared/Primitives";
import { TESTIMONIALS } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI((v) => (v + 1) % TESTIMONIALS.length), 5000);
    return () => clearInterval(t);
  }, [paused]);
  const t = TESTIMONIALS[i];
  const initials = t.name.split(" ").map((w) => w[0]).slice(0, 2).join("");

  return (
    <SectionWrapper id="testimonials" alt>
      <SectionHeading eyebrow="Testimonials" title={<>What people <span className="text-gradient">say.</span></>} />

      <div
        className="relative max-w-3xl mx-auto"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="glass rounded-3xl p-8 md:p-12 relative overflow-hidden min-h-[280px]">
          <Quote className="absolute top-6 left-6 text-accent-violet/30" size={44} />
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5, ease: [0.16,1,0.3,1] }}
              className="relative pt-6"
            >
              <p className="italic text-lg md:text-xl text-text-primary leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-8 flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-full bg-gradient-aurora text-white text-sm font-semibold">
                  {initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-text-primary">{t.name}</div>
                  <div className="text-xs text-text-tertiary">{t.role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="mt-5 flex items-center justify-center gap-2">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Testimonial ${idx + 1}`}
              className={cn(
                "h-1.5 rounded-full transition-all",
                idx === i ? "w-8 bg-gradient-aurora" : "w-1.5 bg-border-strong hover:bg-text-tertiary",
              )}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
