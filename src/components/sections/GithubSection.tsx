import { Github, ArrowUpRight } from "lucide-react";
import { SectionWrapper, SectionHeading, Reveal, MagneticButton } from "@/components/shared/Primitives";

// TODO: replace with real GitHub username
const GH_USER = "mustafadahodwala";

export function GithubSection() {
  return (
    <SectionWrapper id="github" alt>
      <SectionHeading
        eyebrow="Open Source & Code"
        title={<>What I&apos;m building <span className="text-gradient">in public.</span></>}
        subtitle="Every project, every commit — building in the open while learning to ship like an engineer."
      />

      <Reveal>
        <div className="grid gap-5 md:grid-cols-2">
          <div className="glass rounded-2xl p-3 overflow-hidden">
            <img
              loading="lazy"
              width={495} height={195}
              src={`https://github-readme-stats.vercel.app/api?username=${GH_USER}&theme=tokyonight&hide_border=true&bg_color=00000000&title_color=a78bfa&text_color=a1a1aa&icon_color=22d3ee`}
              alt="GitHub contribution statistics"
              className="w-full h-auto"
            />
          </div>
          <div className="glass rounded-2xl p-3 overflow-hidden">
            <img
              loading="lazy"
              width={495} height={195}
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${GH_USER}&theme=tokyonight&hide_border=true&bg_color=00000000&title_color=a78bfa&text_color=a1a1aa&layout=compact`}
              alt="Top languages used"
              className="w-full h-auto"
            />
          </div>
        </div>
      </Reveal>

      <div className="mt-8">
        <a href={`https://github.com/${GH_USER}`} target="_blank" rel="noopener noreferrer">
          <MagneticButton variant="secondary">
            <Github size={16} /> View Full Profile on GitHub <ArrowUpRight size={14} />
          </MagneticButton>
        </a>
      </div>
    </SectionWrapper>
  );
}
