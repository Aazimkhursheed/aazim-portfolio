import { Reveal } from "@/components/ui/Reveal";
import { FeatureGrid, BuildLog, Tradeoff, TechRow, ProjectLinks } from "@/components/projects/shared";
import type { FeaturedProject } from "@/data/content";

function Pipeline({ steps, note }: { steps: string[]; note: string }) {
  return (
    <div className="border border-border-default rounded-lg bg-bg-raised p-6 md:p-8">
      <div className="overflow-x-auto pb-2">
        <div className="min-w-[500px]">
          <svg viewBox="0 0 640 90" className="w-full h-auto" role="img" aria-label="SmartAgri AI request pipeline">
            <line x1="20" y1="45" x2="620" y2="45" stroke="#2A2A2E" strokeWidth="1.5" />
            {steps.map((_, i) => {
              const x = 20 + (i * 600) / (steps.length - 1);
              return (
                <g key={i}>
                  <circle cx={x} cy={45} r="6" fill="#0A0A0B" stroke="#3ECF8E" strokeWidth="1.5" />
                </g>
              );
            })}
          </svg>
          <div className="mt-4 grid grid-cols-4 gap-4">
            {steps.map((s, i) => (
              <p key={i} className="font-mono text-xs text-text-secondary leading-snug">
                <span className="text-accent-green">0{i + 1}</span> {s}
              </p>
            ))}
          </div>
        </div>
      </div>
      <p className="mt-6 text-sm text-text-tertiary leading-relaxed border-t border-border-subtle pt-4">
        {note}
      </p>
    </div>
  );
}

export function SmartAgriProject({ project }: { project: FeaturedProject }) {
  return (
    <div className="grid gap-10">
      <Reveal>
        <div className="flex items-baseline gap-4 mb-4">
          <span className="font-mono text-accent-green text-sm">{project.index}</span>
          <h3 className="font-display font-semibold text-3xl sm:text-4xl text-text-primary">
            {project.name}
          </h3>
        </div>
        <p className="max-w-2xl text-lg text-text-secondary leading-relaxed">{project.overview}</p>
      </Reveal>

      <Reveal delay={0.05}>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="mono-label mb-2">Problem</p>
            <p className="text-sm text-text-secondary leading-relaxed">{project.problem}</p>
          </div>
          <div>
            <p className="mono-label mb-2">Solution</p>
            <p className="text-sm text-text-secondary leading-relaxed">{project.solution}</p>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <Pipeline steps={project.architecture.steps} note={project.architecture.note} />
      </Reveal>

      <Reveal delay={0.15}>
        <p className="mono-label mb-4">Key Features</p>
        <FeatureGrid features={project.features} />
      </Reveal>

      <Reveal delay={0.2}>
        <BuildLog entries={project.buildLog} accent={project.accent} />
      </Reveal>

      <Reveal delay={0.25}>
        <div className="flex flex-col gap-6">
          <Tradeoff text={project.tradeoff} />
          <TechRow project={project} />
          <ProjectLinks project={project} />
        </div>
      </Reveal>
    </div>
  );
}
