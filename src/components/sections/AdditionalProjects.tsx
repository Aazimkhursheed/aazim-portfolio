import { ArrowUpRight } from "lucide-react";
import { SiGithub } from "@/components/icons/BrandIcons";
import { Section, Eyebrow } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { additionalProjects } from "@/data/content";

export function AdditionalProjects() {
  return (
    <Section id="additional-work" className="border-t border-border-subtle">
      <Eyebrow>Additional Projects</Eyebrow>
      <div className="border-t border-border-subtle">
        {additionalProjects.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.04}>
            <div className="grid sm:grid-cols-[1fr_auto] gap-3 sm:gap-6 items-baseline py-6 border-b border-border-subtle">
              <div>
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="font-display font-medium text-lg text-text-primary">{p.name}</h3>
                  <p className="text-sm text-text-secondary">{p.description}</p>
                </div>
                <div className="mt-2 flex flex-wrap gap-x-3">
                  {p.tech.map((t) => (
                    <span key={t} className="font-mono text-xs text-text-tertiary">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-5 shrink-0">
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-text-secondary hover:text-text-primary transition-colors"
                  >
                    <SiGithub size={14} /> Code
                  </a>
                )}
                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-text-secondary hover:text-text-primary transition-colors"
                  >
                    Live <ArrowUpRight size={13} strokeWidth={1.5} />
                  </a>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
