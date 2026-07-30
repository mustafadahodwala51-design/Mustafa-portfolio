import { Download, ExternalLink } from "lucide-react";
import { SectionWrapper, SectionHeading, MagneticButton, Reveal } from "@/components/shared/Primitives";
import { CONTACT } from "@/lib/portfolio-data";

export function ResumeSection() {
  return (
    <SectionWrapper id="resume">
      <div className="max-w-2xl">
        <SectionHeading
          eyebrow="Resume"
          title={<>Get the <span className="text-gradient">full picture.</span></>}
          subtitle="One page, dense with the projects, tools, coursework, and certifications that back up everything above."
        />
        <Reveal className="flex flex-wrap items-center gap-3">
          <a
  href="/Resume/Mustafa_CV.pdf"
  download
  aria-label="Download resume PDF"
>
            {/* TODO: add public/resume-mustafa-dahodwala.pdf */}
            <MagneticButton variant="primary">
              <Download size={16} className="transition-transform group-hover:translate-y-0.5" />
              Download Resume (PDF)
            </MagneticButton>
          </a>
          <a
  href="/Resume/Mustafa_CV.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-1.5 text-sm text-text-secondary hover:text-text-primary transition-colors px-4 py-2"
>
            <ExternalLink size={14} /> View Online
          </a>
        </Reveal>
      </div>
    </SectionWrapper>
  );
}
