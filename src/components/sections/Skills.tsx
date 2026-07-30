import { SectionWrapper, SectionHeading, Reveal } from "@/components/shared/Primitives";
import { MARQUEE_SKILLS, SKILL_GROUPS } from "@/lib/portfolio-data";
import { Code2 } from "lucide-react";

export function Skills() {
  const marquee = [...MARQUEE_SKILLS, ...MARQUEE_SKILLS];
  return (
    <SectionWrapper id="skills" wide>
      <div className="mb-12">
  <SectionHeading
    eyebrow="Skills"
    title={
      <>
        Tools I <span className="text-gradient">Reach For.</span>
      </>
    }
  />

  <p className="mt-4 max-w-2xl text-text-secondary leading-7">
    Technologies, libraries, and platforms I use to build modern AI,
    Machine Learning, and Data Science solutions.
  </p>
</div>
      {/* Marquee */}
      <div className="relative mb-16 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
        <div className="flex gap-3 w-max" style={{ animation: "marquee-x 40s linear infinite" }}>
          {marquee.map((s, i) => (
            <div key={i} className="glass rounded-full px-5 py-2.5 text-sm font-medium text-text-secondary whitespace-nowrap flex items-center gap-2">
              <Code2 size={14} className="text-accent-cyan" /> {s}
            </div>
          ))}
        </div>
      </div>

      {/* Categorized grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {SKILL_GROUPS.map((group, gi) => (
          <Reveal key={group.label} delay={gi * 0.1}>
            <div
  className="
    glass
    rounded-3xl
    p-7
    h-full
    transition-all
    duration-500
    hover:-translate-y-2
    hover:border-cyan-400/20
    hover:shadow-[0_0_45px_rgba(34,211,238,.18)]
  "
>
              <div className="mb-5 flex items-center justify-between">
  <div className="eyebrow">{group.label}</div>

  <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[10px] uppercase tracking-widest text-cyan-300">
    Core
  </span>
</div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((s) => (
                  <span
  key={s}
  className="
    inline-flex
    items-center
    gap-2
    rounded-full
    border
    border-border-hairline
    bg-surface/80
    px-3.5
    py-2
    text-xs
    font-medium
    text-text-secondary
    transition-all
    duration-300
    hover:-translate-y-1
    hover:scale-105
    hover:border-cyan-400/40
    hover:text-white
    hover:shadow-[0_0_20px_rgba(34,211,238,.25)]
  "
>
  <div className="h-2 w-2 rounded-full bg-cyan-400" />
  {s}
</span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
