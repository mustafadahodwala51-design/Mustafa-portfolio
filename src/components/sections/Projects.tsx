import { motion } from "motion/react";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { SectionWrapper, SectionHeading, TiltCard } from "@/components/shared/Primitives";
import { PROJECTS } from "@/lib/portfolio-data";
import type { Project } from "@/types/portfolio";
import { cn } from "@/lib/utils";
import employeeAttritionImg from "@/assets/employee-attrition-dashboard.png";

function CoverGraphic({ project }: { project: Project }) {
  // Decorative generative cover — replace with a real image later.
  // TODO: swap for /projects/{project.slug}-cover.jpg
  const palettes: Record<string, string> = {
    "employee-attrition-prediction":
      "radial-gradient(circle at 20% 30%, rgba(124,58,237,0.55), transparent 55%), radial-gradient(circle at 80% 70%, rgba(34,211,238,0.4), transparent 55%)",
    "house-price-prediction":
      "radial-gradient(circle at 30% 30%, rgba(16,185,129,.55), transparent 55%), radial-gradient(circle at 80% 70%, rgba(59,130,246,.45), transparent 55%)",
    traffinityx:
      "radial-gradient(circle at 70% 30%, rgba(59,130,246,0.6), transparent 55%), radial-gradient(circle at 20% 80%, rgba(236,72,153,0.35), transparent 55%)",
    sahasya:
      "radial-gradient(circle at 30% 30%, rgba(236,72,153,0.5), transparent 55%), radial-gradient(circle at 80% 80%, rgba(124,58,237,0.45), transparent 55%)",
    weatherzilla:
      "radial-gradient(circle at 30% 30%, rgba(34,211,238,0.55), transparent 55%), radial-gradient(circle at 80% 70%, rgba(59,130,246,0.5), transparent 55%)",
  };
  return (
  <div className="absolute inset-0 overflow-hidden">
    {project.slug === "employee-attrition-prediction" ? (
      <>
        <img
          src={employeeAttritionImg}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Dark overlay for better readability */}
        <div className="absolute inset-0 bg-black/25" />

        {/* Bottom gradient */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-bg to-transparent" />
      </>
    ) : (
      <>
        <div
          className="absolute inset-0"
          style={{
            background: palettes[project.slug] ?? palettes.traffinityx,
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            maskImage: "linear-gradient(180deg, black, transparent)",
          }}
        />

        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-bg to-transparent" />

        <div className="absolute inset-0 grid place-items-center">
          <div className="font-display font-bold text-white/20 text-[clamp(3rem,6vw,5rem)] tracking-tighter">
            {project.title
              .split(" ")
              .map((w) => w[0])
              .slice(0, 2)
              .join("")}
          </div>
        </div>
      </>
    )}
  </div>
);
}

function ProjectCard({ project, large }: { project: Project; large?: boolean }) {
  return (
    <TiltCard className={cn("group relative rounded-2xl", large && "md:col-span-2")}>
      <a
        href={project.github || "#"}
        // TODO: link to case study route/modal
        aria-label={`${project.title} — view case study`}
        className="block relative overflow-hidden rounded-2xl glass hover:border-border-strong transition-all duration-500 hover:-translate-y-2
hover:scale-[1.02]
hover:shadow-[0_25px_70px_rgba(59,130,246,.25)]"
      >
        
        <div
  className={cn(
    "relative w-full overflow-hidden",
    large ? "aspect-video" : "h-56"
  )}
>
          <CoverGraphic project={project} />
          <span className="absolute top-4 left-4 rounded-full glass-strong px-3 py-1 text-[11px] font-medium text-text-primary">
            {project.category}
          </span>
          <motion.div
            className="absolute inset-0 grid place-items-center opacity-0 group-hover:opacity-100 transition-opacity"
            initial={false}
          >
            <span className="rounded-full bg-gradient-aurora px-5 py-2 text-sm font-medium text-white shadow-[0_0_40px_-8px_rgba(124,58,237,0.8)] flex items-center gap-1.5">
              View Case Study <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </motion.div>
        </div>

        <div className="p-5">
          <h3 className={cn("font-semibold text-text-primary", large ? "text-2xl" : "text-xl")}>{project.title}</h3>
          <p className="mt-2 text-sm text-text-secondary leading-relaxed line-clamp-3">{project.description}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.slice(0, large ? 8 : 5).map((t) => (
              <span key={t} className="rounded-full border border-border-hairline bg-surface px-2.5 py-0.5 text-[11px] text-text-tertiary">{t}</span>
            ))}
            {project.tech.length > (large ? 8 : 5) && (
              <span className="text-[11px] text-text-tertiary self-center">+{project.tech.length - (large ? 8 : 5)}</span>
            )}
          </div>
          <div className="mt-4 flex gap-6 text-xs">

  {project.slug === "employee-attrition-prediction" && (
    <>
      <div>
        <p className="font-bold text-green-400">88.44%</p>
        <p className="text-text-tertiary">Accuracy</p>
      </div>

      <div>
        <p className="font-bold text-cyan-400">Logistic Regression</p>
        <p className="text-text-tertiary">Best Model</p>
      </div>

      <div>
        <p className="font-bold text-violet-400">HR Analytics</p>
        <p className="text-text-tertiary">Dataset</p>
      </div>
    </>
  )}

  {project.slug === "house-price-prediction" && (
    <>
      <div>
        <p className="font-bold text-orange-400">Regression</p>
        <p className="text-text-tertiary">ML Models</p>
      </div>

      <div>
        <p className="font-bold text-blue-400">Streamlit</p>
        <p className="text-text-tertiary">Dashboard</p>
      </div>

      <div>
        <p className="font-bold text-green-400">EDA</p>
        <p className="text-text-tertiary">Feature Eng.</p>
      </div>
    </>
  )}

  {project.slug === "traffinityx" && (
    <>
      <div>
        <p className="font-bold text-red-400">Computer Vision</p>
        <p className="text-text-tertiary">Detection</p>
      </div>

      <div>
        <p className="font-bold text-cyan-400">Real-Time</p>
        <p className="text-text-tertiary">Monitoring</p>
      </div>

      <div>
        <p className="font-bold text-yellow-400">AI</p>
        <p className="text-text-tertiary">Prediction</p>
      </div>
    </>
  )}

  {project.slug === "sahasya" && (
    <>
      <div>
        <p className="font-bold text-pink-400">SOS</p>
        <p className="text-text-tertiary">Emergency</p>
      </div>

      <div>
        <p className="font-bold text-green-400">GPS</p>
        <p className="text-text-tertiary">Live Tracking</p>
      </div>

      <div>
        <p className="font-bold text-violet-400">AI</p>
        <p className="text-text-tertiary">Safety</p>
      </div>
    </>
  )}

  {project.slug === "weatherzilla" && (
    <>
      <div>
        <p className="font-bold text-cyan-400">Live API</p>
        <p className="text-text-tertiary">Weather</p>
      </div>

      <div>
        <p className="font-bold text-blue-400">Real-Time</p>
        <p className="text-text-tertiary">Forecast</p>
      </div>

      <div>
        <p className="font-bold text-orange-400">Responsive</p>
        <p className="text-text-tertiary">UI</p>
      </div>
    </>
  )}

</div>

          <div className="mt-5 flex items-center justify-between border-t border-border-hairline pt-4">
            <div className="flex gap-2">
              <span
                onClick={(e) => e.preventDefault()}
                className="grid h-9 w-9 place-items-center rounded-lg glass text-text-secondary hover:text-text-primary" aria-label="GitHub repository"
              >
                <Github size={15} />
              </span>
              <span
                onClick={(e) => e.preventDefault()}
                className="grid h-9 w-9 place-items-center rounded-lg glass text-text-secondary hover:text-text-primary" aria-label="Live demo"
              >
                <ExternalLink size={15} />
              </span>
            </div>
            <span className="text-xs text-text-tertiary group-hover:text-text-primary transition-colors flex items-center gap-1">
              Explore Project <ArrowUpRight size={12} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </div>
        </div>
      </a>
    </TiltCard>
  );
}

export function Projects() {
  const [featured, ...rest] = PROJECTS;
  return (
    <SectionWrapper id="projects" wide>
      <SectionHeading
        eyebrow="Selected Work"
        title={<>Projects <span className="text-gradient">I&apos;ve Built.</span></>}
        subtitle="Real end-to-end work — from raw data and messy problems to working models, dashboards, and shipped applications."
      />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
        className="grid gap-6 md:grid-cols-2 lg:gap-8"
      >
        <motion.div variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16,1,0.3,1] } } }} className="md:col-span-2">
          <ProjectCard project={featured} large />
        </motion.div>
        {rest.map((p) => (
  <div key={p.slug}>
    <ProjectCard project={p} />
  </div>
))}
      </motion.div>
    </SectionWrapper>
  );
}
