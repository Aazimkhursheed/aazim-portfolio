import { Section, Eyebrow } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { about, profile, certifications } from "@/data/content";

export function About() {
  return (
    <Section id="about">
      <Reveal>
        <Eyebrow>About</Eyebrow>
        <p className="max-w-2xl text-xl sm:text-2xl leading-relaxed text-text-primary font-normal">
          {about.paragraph}
        </p>
        <p className="mt-8 font-mono text-sm text-text-tertiary">
          {profile.currentBase} · {profile.education.degree}, {profile.education.affiliation} (
          {profile.education.years}) · Also completed: {certifications[0]}, {certifications[1]} —
          full list on{" "}
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-text-secondary"
          >
            LinkedIn
          </a>
        </p>
      </Reveal>
    </Section>
  );
}
