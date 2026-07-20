import { Section, Eyebrow } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { skills } from "@/data/content";

export function Skills() {
  return (
    <Section id="skills" className="border-t border-border-subtle">
      <Reveal>
        <Eyebrow>Reference — Skills</Eyebrow>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <p className="mono-label mb-3">{category}</p>
              <p className="text-sm text-text-secondary leading-relaxed">{items.join(" · ")}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
