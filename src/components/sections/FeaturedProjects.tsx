import { Section, Eyebrow } from "@/components/ui/Section";
import { featuredProjects } from "@/data/content";
import { SmartAgriProject } from "@/components/projects/SmartAgriProject";
import { OmniMindProject } from "@/components/projects/OmniMindProject";
import { JabWeMetProject } from "@/components/projects/JabWeMetProject";

// Order is fixed: SmartAgri AI -> OmniMind -> Jab We Met. Do not reorder.
export function FeaturedProjects() {
  const [smartAgri, omniMind, jabWeMet] = featuredProjects;

  return (
    <Section id="work" className="border-t border-border-subtle">
      <Eyebrow>Selected Work</Eyebrow>
      <div className="flex flex-col gap-32 md:gap-40">
        <SmartAgriProject project={smartAgri} />
        <OmniMindProject project={omniMind} />
        <JabWeMetProject project={jabWeMet} />
      </div>
    </Section>
  );
}
