import { GraduationCap, MapPin, Calendar } from "lucide-react";
import { SectionWrapper, SectionHeading, GlassCard, Reveal } from "@/components/shared/Primitives";

const educationData = [
  {
    level: "Undergraduate Degree",
    degree: "Bachelor of Science (B.Sc.) in Data Science",
    college: "B.K. Birla College of Arts, Science & Commerce",
    location: "Kalyan, Maharashtra, India",
    period: "2025 — Present",
    description:
      "First Year CGPA: 9.64/10 • Pursuing Data Science with a focus on Python, Machine Learning, SQL, Statistics, Artificial Intelligence, and Data Analytics.",
  },
  {
    level: "Higher Secondary Education",
    degree: "Higher Secondary Certificate (HSC)",
    college: "Model College",
    location: "Dombivli, Maharashtra, India",
    period: "2023 — 2025",
    description: "Percentage: 92.33%",
  },
  {
    level: "Secondary Education",
    degree: "Secondary School Certificate (SSC)",
    college: "Mubaraka English High School",
    location: "Dombivli, Maharashtra, India",
    period: "2022 — 2023",
    description: "Percentage: 89%",
  },
];

export function Education() {
  return (
    <SectionWrapper id="education">
      <SectionHeading
        eyebrow="Education"
        title={
          <>
            Academic <span className="text-gradient">Background.</span>
          </>
        }
      />

      <div className="space-y-6">
        {educationData.map((edu, index) => (
          <Reveal key={index}>
            <GlassCard className="p-8 md:p-10 max-w-3xl">
              <div className="flex items-start gap-5">
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-aurora shadow-[0_0_30px_-6px_rgba(124,58,237,0.7)]">
                  <GraduationCap className="text-white" size={26} />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="eyebrow mb-2">{edu.level}</div>

                  <h3 className="text-xl md:text-2xl font-semibold text-text-primary">
                    {edu.degree}
                  </h3>

                  <p className="mt-1 text-text-secondary">{edu.college}</p>

                  <div className="mt-4 flex flex-wrap gap-4 text-sm text-text-tertiary">
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin size={14} /> {edu.location}
                    </span>

                    <span className="inline-flex items-center gap-1.5">
                      <Calendar size={14} /> {edu.period}
                    </span>
                  </div>

                  <p className="mt-5 text-sm text-text-secondary leading-relaxed border-t border-border-hairline pt-5">
                    {edu.description}
                  </p>
                </div>
              </div>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </SectionWrapper>
  );
}