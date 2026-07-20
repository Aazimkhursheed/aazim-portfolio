import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { FeatureGrid, BuildLog, Tradeoff, TechRow, ProjectLinks } from "@/components/projects/shared";
import type { FeaturedProject } from "@/data/content";

function SignalingDiagram({ note }: { note: string }) {
  const [hover, setHover] = useState<string | null>(null);

  return (
    <div className="border border-border-default rounded-lg bg-bg-raised p-6 md:p-8">
      <svg viewBox="0 0 400 220" className="w-full h-auto" role="img" aria-label="WebRTC signaling and peer connection diagram">
        {/* peer A */}
        <rect x="20" y="20" width="100" height="50" rx="6" fill="#0A0A0B" stroke="#5B8DEF" strokeWidth="1.5" />
        <text x="70" y="49" textAnchor="middle" fontSize="11" fill="#EDEDEF" fontFamily="monospace">Peer A</text>

        {/* peer B */}
        <rect x="280" y="20" width="100" height="50" rx="6" fill="#0A0A0B" stroke="#5B8DEF" strokeWidth="1.5" />
        <text x="330" y="49" textAnchor="middle" fontSize="11" fill="#EDEDEF" fontFamily="monospace">Peer B</text>

        {/* signaling server */}
        <rect
          x="150"
          y="20"
          width="100"
          height="50"
          rx="6"
          fill="#0A0A0B"
          stroke="#5B8DEF"
          strokeWidth={hover === "signal" ? 2.5 : 1.5}
          onMouseEnter={() => setHover("signal")}
          onMouseLeave={() => setHover(null)}
          style={{ cursor: "pointer" }}
        />
        <text x="200" y="49" textAnchor="middle" fontSize="11" fill="#EDEDEF" fontFamily="monospace">Socket.io</text>

        {/* signaling lines */}
        <line x1="120" y1="45" x2="150" y2="45" stroke="#5B8DEF" strokeWidth="1.5" strokeDasharray="4 3" />
        <line x1="250" y1="45" x2="280" y2="45" stroke="#5B8DEF" strokeWidth="1.5" strokeDasharray="4 3" />

        {/* direct P2P connection */}
        <path
          d="M 70 70 Q 200 140 330 70"
          fill="none"
          stroke="#3ECF8E"
          strokeWidth="1.5"
          opacity={hover === "signal" ? 1 : 0.6}
        />
        <text x="200" y="155" textAnchor="middle" fontSize="10" fill="#A1A1AA" fontFamily="monospace">
          direct P2P media (audio/video)
        </text>

        <text x="200" y="90" textAnchor="middle" fontSize="9" fill="#6B6B70" fontFamily="monospace">
          offer / answer / ICE
        </text>
      </svg>

      <p className="mt-4 text-sm text-text-secondary leading-relaxed">{note}</p>
    </div>
  );
}

export function JabWeMetProject({ project }: { project: FeaturedProject }) {
  return (
    <div className="grid md:grid-cols-2 gap-10 items-start">
      <div className="md:sticky md:top-24">
        <Reveal>
          <SignalingDiagram note={project.architecture.note} />
        </Reveal>
      </div>

      <div className="grid gap-10">
        <Reveal>
          <div className="flex items-baseline gap-4 mb-4">
            <span className="font-mono text-accent-blue text-sm">{project.index}</span>
            <h3 className="font-display font-semibold text-3xl sm:text-4xl text-text-primary">
              {project.name}
            </h3>
          </div>
          <p className="text-lg text-text-secondary leading-relaxed">{project.overview}</p>
        </Reveal>

        <Reveal delay={0.05}>
          <div>
            <p className="mono-label mb-2">Problem → Solution</p>
            <p className="text-sm text-text-secondary leading-relaxed mb-2">{project.problem}</p>
            <p className="text-sm text-text-secondary leading-relaxed">{project.solution}</p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mono-label mb-4">Key Features</p>
          <FeatureGrid features={project.features} />
        </Reveal>

        <Reveal delay={0.15}>
          <BuildLog entries={project.buildLog} accent={project.accent} />
        </Reveal>

        <Reveal delay={0.2}>
          <div className="flex flex-col gap-6">
            <Tradeoff text={project.tradeoff} />
            <TechRow project={project} />
            <ProjectLinks project={project} />
          </div>
        </Reveal>
      </div>
    </div>
  );
}
