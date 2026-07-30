import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { SectionWrapper, SectionHeading } from "@/components/shared/Primitives";
import { TIMELINE } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

export function Journey() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 20%"] });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <SectionWrapper id="journey" alt>
      <SectionHeading eyebrow="My Journey" title={<>The Path <span className="text-gradient">So Far.</span></>} />

      <div ref={ref} className="relative mx-auto max-w-4xl">
        {/* Center line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-border-hairline" />
        <motion.div
          style={{ scaleY: lineScale, transformOrigin: "top" }}
          className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-accent-violet via-accent-blue to-accent-cyan"
        />

        <ul className="space-y-10 md:space-y-16">
          {TIMELINE.map((e, i) => {
            const right = i % 2 === 1;
            return (
              <motion.li
                key={e.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className={cn("relative pl-16 md:pl-0 md:grid md:grid-cols-2 md:gap-12 items-center")}
              >
                {/* Dot */}
                <div className="absolute left-6 md:left-1/2 top-4 -translate-x-1/2 z-10">
                  <span className="block h-4 w-4 rounded-full bg-gradient-aurora shadow-[0_0_16px_4px_rgba(124,58,237,0.5)] ring-4 ring-bg-elev" />
                </div>

                <div className={cn("glass rounded-2xl p-6", right ? "md:col-start-2" : "md:col-start-1 md:text-right")}>
                  <div className="eyebrow text-[0.65rem] mb-2">{e.stage}</div>
                  <h3 className="text-xl font-semibold text-text-primary">{e.title}</h3>
                  <p className="mt-2 text-sm text-text-secondary leading-relaxed">{e.description}</p>
                </div>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </SectionWrapper>
  );
}
