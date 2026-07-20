import { Reveal } from "@/components/ui/Reveal";
import { FeatureGrid, BuildLog, Tradeoff, TechRow, ProjectLinks } from "@/components/projects/shared";
import type { FeaturedProject } from "@/data/content";

function VerticalStack({ steps, note }: { steps: string[]; note: string }) {
  return (
    <div className="border border-border-default rounded-lg bg-bg-raised p-6 md:p-8">
      <div className="flex flex-col gap-3">
        {steps.map((s, i) => (
          <div key={i}>
            <div className="border border-border-default rounded-md px-4 py-3 bg-bg-inset">
              <p className="font-mono text-xs text-text-secondary">
                <span className="text-accent-cyan">0{i + 1}</span> &nbsp;{s}
              </p>
            </div>
            {i < steps.length - 1 && (
              <div className="flex justify-center py-1">
                <div className="w-px h-4 bg-border-default" />
              </div>
            )}
          </div>
        ))}
      </div>
      <p className="mt-6 text-sm text-text-tertiary leading-relaxed border-t border-border-subtle pt-4">
        {note}
      </p>
    </div>
  );
}

function ChatMock() {
  return (
    <div className="border border-border-default rounded-lg bg-bg-inset p-4 h-full">
      <div className="flex items-center gap-1.5 mb-3">
        <span className="w-2 h-2 rounded-full bg-border-default" />
        <span className="w-2 h-2 rounded-full bg-border-default" />
        <span className="w-2 h-2 rounded-full bg-border-default" />
      </div>
      <div className="space-y-2">
        <div className="rounded-md bg-bg-raised px-3 py-2 text-xs text-text-tertiary font-mono w-2/3">
          Conversation 1
        </div>
        <div className="rounded-md bg-bg-raised px-3 py-2 text-xs text-text-secondary font-mono w-3/4 border border-accent-cyan/30">
          Conversation 2 — active
        </div>
        <div className="rounded-md bg-bg-raised px-3 py-2 text-xs text-text-tertiary font-mono w-1/2">
          Conversation 3
        </div>
      </div>
      <div className="mt-4 pt-4 border-t border-border-subtle space-y-2">
        <div className="rounded-md bg-bg-raised px-3 py-2 text-xs text-text-secondary max-w-[85%]">
          User message
        </div>
        <div className="rounded-md bg-bg-base border border-accent-cyan/30 px-3 py-2 text-xs text-text-secondary max-w-[85%] ml-auto">
          Assistant response
        </div>
      </div>
    </div>
  );
}

export function OmniMindProject({ project }: { project: FeaturedProject }) {
  return (
    <div className="grid md:grid-cols-[1fr_320px] gap-10 items-start">
      <div className="grid gap-10">
        <Reveal>
          <div className="flex items-baseline gap-4 mb-4">
            <span className="font-mono text-accent-cyan text-sm">{project.index}</span>
            <h3 className="font-display font-semibold text-3xl sm:text-4xl text-text-primary">
              {project.name}
            </h3>
          </div>
          <p className="max-w-xl text-lg text-text-secondary leading-relaxed">{project.overview}</p>
        </Reveal>

        <Reveal delay={0.05}>
          <div>
            <p className="mono-label mb-2">Problem → Solution</p>
            <p className="text-sm text-text-secondary leading-relaxed mb-2">{project.problem}</p>
            <p className="text-sm text-text-secondary leading-relaxed">{project.solution}</p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <VerticalStack steps={project.architecture.steps} note={project.architecture.note} />
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

      <Reveal delay={0.1} className="hidden md:block sticky top-24">
        <ChatMock />
      </Reveal>
    </div>
  );
}
