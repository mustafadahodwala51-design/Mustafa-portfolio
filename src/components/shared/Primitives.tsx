import { motion, useInView, useMotionValue, useSpring, useTransform } from "motion/react";
import { useEffect, useRef, useState, type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/* ---------- SectionWrapper ---------- */
export function SectionWrapper({
  id, children, alt, wide, className,
}: {
  id?: string; children: ReactNode; alt?: boolean; wide?: boolean; className?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "section-y relative overflow-hidden",
        alt && "bg-bg-elev",
        className,
      )}
    >
      <div className={wide ? "container-wide relative" : "container-x relative"}>{children}</div>
    </section>
  );
}

/* ---------- SectionHeading ---------- */
export function SectionHeading({
  eyebrow, title, subtitle, align = "left",
}: { eyebrow: string; title: ReactNode; subtitle?: string; align?: "left" | "center" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={cn("mb-12 lg:mb-16 max-w-3xl", align === "center" && "mx-auto text-center")}
    >
      <div className="eyebrow mb-4">{eyebrow}</div>
      <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.1]">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-[clamp(1rem,1.3vw,1.125rem)] text-text-secondary leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

/* ---------- MagneticButton ---------- */
type ButtonVariant = "primary" | "secondary" | "ghost";
export function MagneticButton({
  variant = "primary", className, children, magnetic = true, ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: ButtonVariant; magnetic?: boolean }) {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0); const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 180, damping: 14 });
  const sy = useSpring(y, { stiffness: 180, damping: 14 });

  useEffect(() => {
    if (!magnetic) return;
    const el = ref.current; if (!el) return;
    if (typeof window !== "undefined" && (window.matchMedia("(hover: none)").matches || window.matchMedia("(prefers-reduced-motion: reduce)").matches)) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const relX = e.clientX - (r.left + r.width / 2);
      const relY = e.clientY - (r.top + r.height / 2);
      x.set(Math.max(-10, Math.min(10, relX * 0.3)));
      y.set(Math.max(-10, Math.min(10, relY * 0.3)));
    };
    const onLeave = () => { x.set(0); y.set(0); };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => { el.removeEventListener("mousemove", onMove); el.removeEventListener("mouseleave", onLeave); };
  }, [magnetic, x, y]);

  const base = "relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-shadow duration-300 whitespace-nowrap min-h-11";
  const variants: Record<ButtonVariant, string> = {
    primary: "bg-gradient-aurora text-white shadow-[0_0_40px_-8px_rgba(124,58,237,0.6)] hover:shadow-[0_0_60px_-6px_rgba(124,58,237,0.8)]",
    secondary: "glass text-text-primary hover:bg-surface-strong",
    ghost: "text-text-primary hover:bg-surface",
  };

  return (
    <motion.button
      ref={ref}
      style={{ x: sx, y: sy }}
      className={cn(base, variants[variant], className)}
      {...(props as any)}
    >
      {children}
    </motion.button>
  );
}

/* ---------- GlassCard ---------- */
export function GlassCard({ className, children, hoverable = true, ...rest }: { className?: string; children: ReactNode; hoverable?: boolean } & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "group relative rounded-2xl glass p-6 transition-all duration-500",
        hoverable && "hover:-translate-y-1 hover:border-border-strong hover:bg-surface-strong hover:shadow-[0_20px_60px_-20px_rgba(124,58,237,0.35)]",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}

/* ---------- Chip ---------- */
export function Chip({ children, tone = "default", className }: { children: ReactNode; tone?: "default" | "accent"; className?: string }) {
  return (
    <span className={cn(
      "inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-all",
      tone === "default"
        ? "glass text-text-secondary hover:text-text-primary hover:bg-surface-strong"
        : "glass-strong text-text-primary shadow-[0_0_24px_-8px_rgba(124,58,237,0.6)] border-[rgba(124,58,237,0.35)]",
      className,
    )}>{children}</span>
  );
}

/* ---------- StatCounter ---------- */
export function StatCounter({ value, label, suffix = "", staticText }: { value?: number; label: string; suffix?: string; staticText?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView || value == null) return;
    const start = performance.now();
    const duration = 1200;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.round(value * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="text-center sm:text-left"
    >
      <div className="text-[clamp(2rem,3.5vw,2.75rem)] font-semibold text-gradient font-display leading-none">
        {staticText ?? `${display}${suffix}`}
      </div>
      <div className="mt-2 text-xs uppercase tracking-[0.14em] text-text-tertiary">{label}</div>
    </motion.div>
  );
}

/* ---------- FadeInWhenVisible ---------- */
export function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ---------- TiltCard (subtle 3D) ---------- */
export function TiltCard({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0.5); const my = useMotionValue(0.5);
  const rx = useTransform(my, [0, 1], [4, -4]);
  const ry = useTransform(mx, [0, 1], [-4, 4]);
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    setEnabled(!(window.matchMedia("(hover: none)").matches || window.matchMedia("(prefers-reduced-motion: reduce)").matches));
  }, []);

  return (
    <motion.div
      ref={ref}
      style={enabled ? { rotateX: rx, rotateY: ry, transformPerspective: 1000 } : undefined}
      onMouseMove={(e) => {
        if (!enabled) return;
        const r = e.currentTarget.getBoundingClientRect();
        mx.set((e.clientX - r.left) / r.width);
        my.set((e.clientY - r.top) / r.height);
      }}
      onMouseLeave={() => { mx.set(0.5); my.set(0.5); }}
      className={cn("will-change-transform", className)}
    >
      {children}
    </motion.div>
  );
}
