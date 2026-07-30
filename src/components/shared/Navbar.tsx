import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import { Download, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { NAV_LINKS, CONTACT } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";
import mdLogo from "@/assets/md-logo.png";

function Monogram({ size = 44 }: { size?: number }) {
  return (
    <motion.div
      whileHover={{
        scale: 1.08,
        rotate: 4,
      }}
      transition={{
        duration: 0.3,
      }}
      className="relative flex items-center justify-center"
      style={{
        width: size,
        height: size,
      }}
      aria-hidden
    >
      {/* Cyan Glow */}
      <div
        className="absolute inset-0 rounded-full blur-xl"
        style={{
          background:
            "radial-gradient(circle, rgba(34,211,238,.35), transparent 70%)",
        }}
      />

      {/* Logo */}
      <img
        src="favicon.png"
        alt="MD Logo"
        className="
          relative
          object-contain
          scale-[1.8]
          drop-shadow-[0_0_22px_rgba(34,211,238,.55)]
          select-none
          pointer-events-none
        "
        style={{
          width: size,
          height: size,
        }}
      />
    </motion.div>
  );
}

export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return (
    <motion.div
      aria-hidden
      style={{ scaleX, transformOrigin: "0% 50%" }}
      className="fixed left-0 right-0 top-0 z-[60] h-[2px] bg-gradient-aurora"
    />
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("about");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.getElementById(l.id)).filter(Boolean) as HTMLElement[];
    if (!sections.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) setActive(visible[0].target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.2, 0.5, 1] },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setMenuOpen(false); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <ScrollProgressBar />
      <motion.header
        initial={false}
        animate={{
          backgroundColor: scrolled ? "rgba(5,5,10,0.7)" : "rgba(5,5,10,0)",
          borderColor: scrolled ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0)",
          backdropFilter: scrolled ? "blur(18px) saturate(140%)" : "blur(0px)",
        }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        style={{ height: "var(--nav-height)" }}
        className="fixed inset-x-0 top-0 z-50 border-b"
      >
        <div className="container-wide flex h-full items-center justify-between">
          <a href="#top" className="flex items-center gap-3 shrink-0" aria-label="Home">
            <motion.div animate={{ scale: scrolled ? 0.9 : 1 }} transition={{ duration: 0.3 }}>
              <Monogram size={scrolled ? 32 : 36} />
            </motion.div>
          </a>

          <nav aria-label="Primary" className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-colors",
                  active === l.id ? "text-text-primary" : "text-text-tertiary hover:text-text-primary",
                )}
              >
                {l.label}
                {active === l.id && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-x-3 -bottom-0.5 h-[2px] bg-gradient-aurora rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
  href="/Resume/Mustafa_CV.pdf"
  target="_blank"
  rel="noopener noreferrer"
  download
  className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-gradient-aurora px-4 py-2 text-sm font-medium text-white shadow-[0_0_24px_-8px_rgba(124,58,237,0.7)] hover:shadow-[0_0_32px_-4px_rgba(124,58,237,0.9)] transition-shadow"
>
  <Download size={14} /> Resume
</a>
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="lg:hidden grid h-11 w-11 place-items-center rounded-full glass"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              <AnimatePresence mode="wait" initial={false}>
                {menuOpen ? (
                  <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <X size={20} />
                  </motion.span>
                ) : (
                  <motion.span key="m" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <Menu size={20} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-bg/95 backdrop-blur-2xl lg:hidden"
            onClick={(e) => { if (e.target === e.currentTarget) setMenuOpen(false); }}
          >
            <div className="flex h-full flex-col items-center justify-center gap-6 px-8" style={{ paddingTop: "var(--nav-height)" }}>
              {NAV_LINKS.map((l, i) => (
                <motion.a
                  key={l.id}
                  href={`#${l.id}`}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + i * 0.06, duration: 0.4 }}
                  className="text-3xl font-display font-semibold text-text-primary"
                >
                  {l.label}
                </motion.a>
              ))}
              <a
                href={CONTACT.resumeUrl}
                download
                onClick={() => setMenuOpen(false)}
                className="mt-4 rounded-full bg-gradient-aurora px-6 py-3 text-sm font-medium text-white"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
