import { Trophy, Award, Star } from "lucide-react";
import { SectionWrapper, SectionHeading, GlassCard, Reveal } from "@/components/shared/Primitives";
import { ACHIEVEMENTS } from "@/lib/portfolio-data";

// TODO: replace placeholder achievements with real ones as earned.
const ICONS = { trophy: Trophy, award: Award, star: Star } as const;

export function Achievements() {
  return (
    <SectionWrapper id="achievements">
      <SectionHeading
        eyebrow="Achievements"
        title={<>Milestones &amp; <span className="text-gradient">Recognition.</span></>}
      />
      <div className="grid gap-5 md:grid-cols-3">
        {ACHIEVEMENTS.map((a, i) => {
          const Icon = ICONS[a.icon];
          return (
            <Reveal key={i} delay={i * 0.08}>
              <GlassCard className="h-full">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-surface-strong border border-border-strong">
                  <Icon size={18} className="text-accent-cyan" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-text-primary">{a.title}</h3>
                <p className="mt-1.5 text-sm text-text-secondary leading-relaxed">{a.description}</p>
              </GlassCard>
            </Reveal>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
