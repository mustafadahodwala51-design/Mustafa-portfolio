import { ArrowRight } from "lucide-react";
import { SectionWrapper, SectionHeading, MagneticButton } from "@/components/shared/Primitives";

const TAGS = ["Data Science Internship", "Machine Learning Internship", "AI Internship", "Python Internship"];

export function Availability() {
  return (
    <SectionWrapper id="availability" alt>
      <div className="max-w-3xl">
        <SectionHeading
          eyebrow="Currently"
          title={<>Looking for my <span className="text-gradient">next opportunity.</span></>}
          subtitle="I'm actively seeking a Data Science, Machine Learning, AI, or Python internship where I can apply what I've built to real problems, ship with a team, and keep growing as an engineer."
        />
        <div className="flex flex-wrap gap-2.5">
          {TAGS.map((t) => (
            <span
              key={t}
              className="inline-flex items-center gap-2 rounded-full glass-strong px-4 py-2 text-sm font-medium text-text-primary border-[rgba(124,58,237,0.35)] shadow-[0_0_24px_-10px_rgba(124,58,237,0.6)]"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-aurora" />
              {t}
            </span>
          ))}
        </div>
        <div className="mt-8">
          <div className="flex flex-wrap gap-3">
  <MagneticButton
    variant="primary"
    onClick={() =>
      window.open(
        "https://wa.me/919967534714?text=Hi%20Mustafa,%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect.",
        "_blank"
      )
    }
  >
    💬 WhatsApp
  </MagneticButton>

  <MagneticButton
    variant="secondary"
    onClick={() =>
      window.location.href =
        "mailto:dahodmustafa53@gmail.com?subject=Portfolio Inquiry&body=Hi Mustafa,%0A%0AI visited your portfolio and would like to connect."
    }
  >
    📧 Email
  </MagneticButton>

  <MagneticButton
    variant="secondary"
    onClick={() =>
      window.open(
        "https://www.linkedin.com/in/mustafa-dahodwala-876b78366",
        "_blank"
      )
    }
  >
    💼 LinkedIn
  </MagneticButton>
</div>
        </div>
      </div>
    </SectionWrapper>
  );
}
