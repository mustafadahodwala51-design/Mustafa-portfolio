import { Clock } from "lucide-react";
import { SectionWrapper, SectionHeading, Reveal } from "@/components/shared/Primitives";
import { BLOG_POSTS } from "@/lib/portfolio-data";

export function Blog() {
  return (
    <SectionWrapper id="blog">
      <SectionHeading
        eyebrow="Writing"
        title={<>Thoughts on <span className="text-gradient">Data &amp; AI.</span></>}
        subtitle="Notes from the learning process — coming soon."
      />
      <div className="grid gap-6 md:grid-cols-3">
        {BLOG_POSTS.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.08}>
            <article className="group h-full glass rounded-2xl overflow-hidden hover:border-border-strong transition-all duration-500 hover:-translate-y-1">
              <div className="relative aspect-video overflow-hidden">
                {/* TODO: real cover image */}
                <div className="absolute inset-0" style={{
                  background: "radial-gradient(circle at 30% 40%, rgba(124,58,237,0.5), transparent 55%), radial-gradient(circle at 80% 70%, rgba(34,211,238,0.4), transparent 55%)",
                }} />
                <div className="absolute inset-0" style={{
                  backgroundImage: "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
                  backgroundSize: "36px 36px",
                }} />
                <span className="absolute top-3 left-3 rounded-full glass-strong px-2.5 py-1 text-[11px] font-medium">{p.category}</span>
              </div>
              <div className="p-5">
                <h3 className="text-base font-semibold text-text-primary leading-snug">{p.title}</h3>
                <div className="mt-4 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1 text-xs text-text-tertiary">
                    <Clock size={12} /> {p.readTime}
                  </span>
                  <span className="rounded-full border border-border-hairline bg-surface px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-text-tertiary">
                    Coming Soon
                  </span>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
