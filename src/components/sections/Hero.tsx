import { motion } from "motion/react";
import { ArrowRight, Download, ChevronDown } from "lucide-react";
import { AuroraBackground, GridBackground, ParticlesLayer } from "@/components/shared/AmbientBackground";
import { MagneticButton } from "@/components/shared/Primitives";
import { TypewriterText } from "@/components/shared/TypewriterText";
import { CONTACT } from "@/lib/portfolio-data";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as const },
});

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] items-center overflow-hidden pt-[var(--nav-height)]">
      <AuroraBackground />
      <GridBackground />
      <ParticlesLayer count={40} />

      {/* Floating tech chips (desktop only) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 hidden lg:block">
        <div className="absolute left-[8%] top-[28%] glass rounded-full px-4 py-2 text-xs font-medium text-text-secondary" style={{ animation: "float-y 7s ease-in-out infinite" }}>
          Python
        </div>
        <div className="absolute right-[10%] top-[35%] glass rounded-full px-4 py-2 text-xs font-medium text-text-secondary" style={{ animation: "float-y 9s ease-in-out infinite", animationDelay: "-2s" }}>
          Machine Learning
        </div>
        <div className="absolute right-[14%] bottom-[22%] glass rounded-full px-4 py-2 text-xs font-medium text-text-secondary" style={{ animation: "float-y 8s ease-in-out infinite", animationDelay: "-4s" }}>
          SQL
        </div>
      </div>

      <div className="container-x relative z-10 text-center">
        <motion.div {...fadeUp(0.05)} className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-medium text-text-secondary">
          <span className="inline-block h-2 w-2 rounded-full bg-success" style={{ animation: "pulse-dot 2.2s ease-out infinite" }} />
          Available for Data Science &amp; AI Internships
        </motion.div>

        <motion.div {...fadeUp(0.15)} className="eyebrow mb-5">
           Data Science & AIML Enthusiast
        </motion.div>

        <motion.h1
          {...fadeUp(0.25)}
          className="mx-auto max-w-5xl text-[clamp(2.5rem,6vw,5rem)] font-semibold leading-[1.02] tracking-[-0.02em]"
        >
          Hi, I&apos;m <span className="text-gradient">Mustafa Dahodwala.</span>
        </motion.h1>

        <motion.div
          {...fadeUp(0.4)}
          className="mt-5 text-[clamp(1.1rem,2vw,1.6rem)] font-medium text-text-primary/90 min-h-[2em]"
        >
          <TypewriterText
            phrases={[
              "Aspiring AI Engineer.",
              "Building Intelligent Solutions.",
              "Turning Data into Insights.",
              "Machine Learning Enthusiast.",
              "Creating Impact with Data.",
            ]}
          />
        </motion.div>

        <motion.p
          {...fadeUp(0.55)}
          className="mx-auto mt-6 max-w-[600px] text-[clamp(1rem,1.4vw,1.15rem)] leading-relaxed text-text-secondary"
        >
          Turning data into insights and ideas into intelligent solutions. I'm a Data Science student passionate about Machine Learning, Artificial Intelligence, and Data Analytics. From predictive models to AI-powered applications, I enjoy creating data-driven solutions that solve real-world problems. I'm constantly learning, exploring emerging technologies, and working towards building innovative products that create meaningful impact.
        </motion.p>

        <motion.div {...fadeUp(0.7)} className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
          <MagneticButton
            variant="primary"
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            View My Work <ArrowRight size={16} />
          </MagneticButton>
          <a
  href={CONTACT.resumeUrl}
  download
  aria-label="Download resume as PDF"
>
  <MagneticButton variant="secondary" type="button">
    <Download size={16} />
    Download Resume
  </MagneticButton>
</a>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to About"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-text-tertiary hover:text-text-primary transition-colors"
      >
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
          <ChevronDown size={22} />
        </motion.div>
      </motion.a>
    </section>
  );
}
