import { motion } from "motion/react";
import { BadgeCheck, ArrowUpRight } from "lucide-react";
import { SectionWrapper, SectionHeading } from "@/components/shared/Primitives";
import { CERTIFICATIONS } from "@/lib/portfolio-data";

export function Certifications() {
  return (
    <SectionWrapper id="certifications" alt wide>
      <SectionHeading
        eyebrow="Certifications"
        title={<>Continuous <span className="text-gradient">Learning.</span></>}
        subtitle="Formal credentials that back up the projects — from cloud AI foundations to generative AI and applied AI skills."
      />

      <motion.div
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
      >
        {CERTIFICATIONS.map((c) => (
          <motion.a
            key={c.title}
            href={c.url || "#"}
            // TODO: real credential URL
            className="group relative overflow-hidden rounded-2xl glass p-6 transition-all duration-500 hover:-translate-y-1 hover:border-border-strong hover:shadow-[0_20px_60px_-20px_rgba(124,58,237,0.5)]"
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16,1,0.3,1] } } }}
          >
            {/* Shine sweep */}
            <span
              aria-hidden
              className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 opacity-0 group-hover:opacity-100"
              style={{
                background: "linear-gradient(120deg, transparent, rgba(255,255,255,0.1), transparent)",
                animation: "shimmer-sweep 1.4s ease-out forwards",
              }}
            />
            <div className="relative flex flex-col h-full">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-aurora shadow-[0_0_24px_-6px_rgba(124,58,237,0.7)]">
                <BadgeCheck className="text-white" size={20} />
              </div>
              <div className="eyebrow text-[0.65rem] mb-1.5">{c.issuer}</div>
              <h3 className="text-base font-semibold text-text-primary leading-snug flex-1">{c.title}</h3>
              <div className="mt-5 flex items-center justify-between border-t border-border-hairline pt-4">
                <span className="text-xs text-text-tertiary">{c.date}</span>
                <span className="inline-flex items-center gap-1 text-xs text-text-secondary group-hover:text-text-primary transition-colors">
                  Credential <ArrowUpRight size={12} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
