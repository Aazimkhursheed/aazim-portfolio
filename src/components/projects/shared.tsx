import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { SiGithub } from "@/components/icons/BrandIcons";
import type { FeaturedProject } from "@/data/content";
import { cn } from "@/lib/utils";

const accentText: Record<FeaturedProject["accent"], string> = {
  green: "text-accent-green",
  cyan: "text-accent-cyan",
  blue: "text-accent-blue",
};

const accentBorder: Record<FeaturedProject["accent"], string> = {
  green: "border-accent-green/40",
  cyan: "border-accent-cyan/40",
  blue: "border-accent-blue/40",
};

const accentUnderline: Record<FeaturedProject["accent"], string> = {
  green: "decoration-accent-green",
  cyan: "decoration-accent-cyan",
  blue: "decoration-accent-blue",
};

export function AccentText({ accent, children }: { accent: FeaturedProject["accent"]; children: ReactNode }) {
  return <span className={accentText[accent]}>{children}</span>;
}

export function ProjectLinks({ project }: { project: FeaturedProject }) {
  return (
    <div className="flex flex-wrap items-center gap-6">
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-sm text-text-secondary hover:text-text-primary transition-colors"
      >
        <SiGithub size={15} /> GitHub
      </a>
      <a
        href={project.live}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-sm text-text-secondary hover:text-text-primary transition-colors"
      >
        Live Demo <ArrowUpRight size={14} strokeWidth={1.5} />
      </a>
    </div>
  );
}

export function TechRow({ project }: { project: FeaturedProject }) {
  return (
    <div className="flex flex-wrap gap-x-4 gap-y-2">
      {project.tech.map((t) => (
        <span
          key={t}
          className={cn(
            "font-mono text-xs text-text-secondary underline decoration-1 underline-offset-4",
            accentUnderline[project.accent]
          )}
        >
          {t}
        </span>
      ))}
    </div>
  );
}

export function FeatureGrid({ features }: { features: string[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
      {features.map((f) => (
        <p key={f} className="text-sm text-text-primary">
          {f}
        </p>
      ))}
    </div>
  );
}

export function BuildLog({ entries, accent }: { entries: string[]; accent: FeaturedProject["accent"] }) {
  return (
    <div className={cn("border-l pl-5", accentBorder[accent])}>
      <p className="mono-label mb-3">Build Log</p>
      <ul className="space-y-3">
        {entries.map((e) => (
          <li key={e} className="text-sm text-text-secondary leading-relaxed">
            {e}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Tradeoff({ text }: { text: string }) {
  return (
    <p className="text-sm text-text-tertiary leading-relaxed italic">
      What I'd revisit — {text}
    </p>
  );
}
