import { Section, Eyebrow } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { experience } from "@/data/content";
import { cn } from "@/lib/utils";

export function Experience() {
  return (
    <Section id="experience">
      <Eyebrow>Experience</Eyebrow>
      <div className="flex flex-col gap-16 md:gap-20">
        {experience.map((role) => (
          <Reveal key={role.company}>
            <div
              className={cn(
                "grid gap-6",
                role.weight === "primary"
                  ? "md:grid-cols-[280px_1fr]"
                  : "md:grid-cols-[280px_1fr] opacity-90"
              )}
            >
              <div>
                <h3
                  className={cn(
                    "font-display font-semibold text-text-primary",
                    role.weight === "primary" ? "text-2xl" : "text-lg"
                  )}
                >
                  {role.company}
                </h3>
                <p className="mt-1 text-sm text-text-secondary">{role.role}</p>
                <p className="mt-1 font-mono text-xs text-text-tertiary">{role.period}</p>
              </div>
              <div>
                <p
                  className={cn(
                    "text-text-secondary leading-relaxed",
                    role.weight === "primary" ? "text-lg max-w-2xl" : "text-base max-w-xl"
                  )}
                >
                  {role.summary}
                </p>
                {role.weight === "primary" && (
                  <ul className="mt-5 space-y-2">
                    {role.contributions.map((c) => (
                      <li key={c} className="text-sm text-text-secondary flex gap-3">
                        <span className="text-text-tertiary">—</span>
                        {c}
                      </li>
                    ))}
                  </ul>
                )}
                <div className="mt-5 flex flex-wrap gap-x-3 gap-y-2">
                  {role.tech.map((t) => (
                    <span key={t} className="font-mono text-xs text-text-tertiary">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
