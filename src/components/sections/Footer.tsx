import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { NAV_LINKS, CONTACT } from "@/lib/portfolio-data";
import { MagneticButton } from "@/components/shared/Primitives";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden border-t border-border-hairline bg-bg-elev">

      <div className="container-wide relative pt-16 pb-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <img
  src="/favicon.png"
  alt="Mustafa Dahodwala Logo"
  className="h-10 w-10 rounded-xl object-contain"
/>
              <span className="font-display font-semibold text-lg">Mustafa Dahodwala</span>
            </div>
            <p className="mt-3 text-sm text-text-tertiary max-w-xs">
              Data Science Student. Aspiring AI Engineer.
            </p>
          </div>

          <div>
            <div className="eyebrow mb-4">Navigate</div>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              {NAV_LINKS.map((l) => (
                <li key={l.id}>
                  <a href={`#${l.id}`} className="text-text-secondary hover:text-text-primary transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="eyebrow mb-4">Connect</div>
            <div className="flex gap-2">
              <a href="https://github.com/mustafadahodwala51-design" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="grid h-10 w-10 place-items-center rounded-full glass hover:bg-surface-strong hover:text-accent-cyan hover:shadow-[0_0_24px_-6px_rgba(34,211,238,0.6)] transition-all">
                <Github size={16} />
              </a>
              <a href="https://www.linkedin.com/in/mustafa-dahodwala-876b78366" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="grid h-10 w-10 place-items-center rounded-full glass hover:bg-surface-strong hover:text-accent-blue hover:shadow-[0_0_24px_-6px_rgba(59,130,246,0.6)] transition-all">
                <Linkedin size={16} />
              </a>
              <a href={`mailto:${CONTACT.email}`} aria-label="Email" className="grid h-10 w-10 place-items-center rounded-full glass hover:bg-surface-strong hover:text-accent-violet hover:shadow-[0_0_24px_-6px_rgba(124,58,237,0.6)] transition-all">
                <Mail size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-border-strong to-transparent" />

        <div className="mt-6 flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-text-tertiary">© {year} Mustafa Dahodwala. All rights reserved.</p>
          <MagneticButton
            variant="secondary"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="self-start sm:self-auto text-xs py-2 px-4 min-h-9"
          >
            Back to top <ArrowUp size={14} />
          </MagneticButton>
        </div>
      </div>
    </footer>
  );
}
