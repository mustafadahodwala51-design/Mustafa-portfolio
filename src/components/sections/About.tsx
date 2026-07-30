import { motion } from "motion/react";
import { SectionWrapper, SectionHeading, Chip, StatCounter, Reveal } from "@/components/shared/Primitives";
import { AuroraBackground } from "@/components/shared/AmbientBackground";
import profile from "@/assets/profile.jpeg";
import mdLogo from "@/assets/md-logo.png";

const TRAITS = [
  "Curious",
  "Analytical Thinking",
  "Fast Learner",
  "Creative",
  "Problem Solver",
  "Critical Thinking",
  "Adaptability",
];

const MINI_TAGS = ["Python", "Pandas", "Scikit-Learn", "SQL", "Jupyter"];

export function About() {
  return (
    <SectionWrapper id="about">
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <AuroraBackground intensity={0.4} />
      </div>

      <div className="relative grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-16 items-center">
        <div>
          <SectionHeading
            eyebrow="About Me"
            title={
              <>
                Turning Data <span className="text-gradient">into Intelligence.</span>
              </>
            }
          />

         <div className="space-y-6 text-text-secondary leading-8 max-w-[65ch]">
  <p>
    I'm a <span className="text-text-primary font-medium">Data Science undergraduate</span> at{" "}
    <span className="text-text-primary">
      B.K. Birla College of Arts, Science & Commerce
    </span>
    , passionate about transforming data into intelligent solutions. My interests
    span Machine Learning, Artificial Intelligence, Data Analytics, and Data
    Visualization, where I enjoy building practical applications that solve
    real-world problems. I believe the best way to learn is by creating,
    experimenting, and continuously improving through hands-on projects.
  </p>

  <p>
    My goal is to become an{" "}
    <span className="text-gradient font-semibold">AI Engineer</span> who
    develops impactful products powered by data and modern AI. I'm actively
    seeking internship opportunities where I can apply my skills, collaborate
    with experienced professionals, and contribute to innovative projects while
    growing as a developer and problem solver.
  </p>
</div>

          <Reveal delay={0.1} className="mt-8 flex flex-wrap gap-2">
            {TRAITS.map((t) => (
              <Chip key={t}>{t}</Chip>
            ))}
          </Reveal>

          <Reveal
            delay={0.2}
            className="mt-10 grid grid-cols-3 gap-6 border-t border-border-hairline pt-8"
          >
            <StatCounter value={6} suffix="+" label="Projects Built" />
            <StatCounter value={7} label="Certifications" />
            <StatCounter staticText="1" label="Goal:Data Scientist/AI Engineer" />
          </Reveal>
        </div>

        {/* Right Side */}
<Reveal
  delay={0.15}
  className="relative flex items-center justify-center min-h-[620px]"
>
  {/* Cyan Glow */}
  <motion.div
    className="absolute w-[560px] h-[560px] rounded-full blur-3xl"
    style={{
      background:
        "radial-gradient(circle, rgba(34,211,238,.22), transparent 65%)",
    }}
    animate={{
      scale: [1, 1.08, 0.95, 1],
      opacity: [0.45, 0.75, 0.45],
    }}
    transition={{
      duration: 10,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />

  {/* Purple Glow */}
  <motion.div
    className="absolute w-[470px] h-[470px] rounded-full blur-3xl"
    style={{
      background:
        "radial-gradient(circle, rgba(124,58,237,.18), transparent 70%)",
    }}
    animate={{
      scale: [1, 0.95, 1.05, 1],
    }}
    transition={{
      duration: 12,
      repeat: Infinity,
    }}
  />

  {/* Glass Orb */}
  <motion.div
    animate={{
      y: [0, -10, 0],
      rotate: [0, 1, -1, 0],
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="
      relative
      w-[470px]
      h-[470px]
      rounded-full
      overflow-hidden
      border border-white/10
      backdrop-blur-xl
      bg-white/[0.03]
      shadow-[0_0_140px_rgba(34,211,238,.22)]
    "
  >
    {/* Inner Ring */}
    <div className="absolute inset-5 rounded-full border border-cyan-400/20" />

    {/* Rotating Ring */}
    <motion.div
      className="absolute inset-2 rounded-full border border-cyan-400/40"
      animate={{ rotate: 360 }}
      transition={{
        duration: 25,
        repeat: Infinity,
        ease: "linear",
      }}
    />

    {/* Counter Rotating Ring */}
    <motion.div
      className="absolute inset-0 rounded-full border border-cyan-400/10"
      animate={{ rotate: -360 }}
      transition={{
        duration: 40,
        repeat: Infinity,
        ease: "linear",
      }}
    />

    {/* Center Glow */}
    <div
      className="absolute inset-16 rounded-full blur-3xl"
      style={{
        background:
          "radial-gradient(circle, rgba(34,211,238,.25), transparent 70%)",
      }}
    />

    {/* Logo */}
    <div className="absolute inset-10 flex items-center justify-center">
      <img
        src="favicon.png"
        alt="MD Logo"
        className="w-[72%] h-[72%] object-contain drop-shadow-[0_0_45px_rgba(34,211,238,.45)]"
      />
    </div>
  </motion.div>

  {/* Floating Tags */}
  {[
    { text: "Python", top: "10%", left: "18%" },
    { text: "SQL", top: "26%", right: "6%" },
    { text: "Scikit-Learn", bottom: "30%", left: "2%" },
    { text: "Pandas", bottom: "14%", right: "10%" },
    { text: "AI", top: "74%", right: "34%" },
  ].map((item, i) => (
    <motion.div
      key={item.text}
      className="
        absolute
        rounded-full
        border border-cyan-400/20
        bg-white/[0.05]
        backdrop-blur-xl
        px-4
        py-2
        text-sm
        font-medium
        text-cyan-200
        shadow-[0_8px_30px_rgba(34,211,238,.15)]
      "
      style={item}
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 4 + i,
        repeat: Infinity,
      }}
    >
      {item.text}
    </motion.div>
  ))}

  {/* Floating Particles */}
  {Array.from({ length: 18 }).map((_, i) => (
    <motion.div
      key={i}
      className="absolute h-1.5 w-1.5 rounded-full bg-cyan-300"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        opacity: 0.4,
      }}
      animate={{
        y: [0, -12, 0],
        opacity: [0.2, 0.8, 0.2],
        scale: [1, 1.5, 1],
      }}
      transition={{
        duration: 2 + Math.random() * 3,
        repeat: Infinity,
        delay: Math.random() * 2,
      }}
    />
  ))}
</Reveal>
      </div>
    </SectionWrapper>
  );
}