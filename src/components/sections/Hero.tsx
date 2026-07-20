import { Mail, Code2, ArrowUpRight, GitCommitHorizontal } from "lucide-react";
import { SiGithub, SiLinkedin } from "@/components/icons/BrandIcons";
import { profile } from "@/data/content";
import { LinkButton } from "@/components/ui/Button";
import { useGithubActivity } from "@/hooks/useGithubActivity";

const socials = [
  { href: profile.links.github, label: "GitHub", icon: SiGithub },
  { href: profile.links.linkedin, label: "LinkedIn", icon: SiLinkedin },
  { href: profile.links.leetcode, label: "LeetCode", icon: Code2 },
  { href: `mailto:${profile.email}`, label: "Email", icon: Mail },
];

export function Hero() {
  const { events, failed } = useGithubActivity("AazimKhursheed");

  return (
    <section id="top" className="section-shell pt-32 pb-8 md:pt-44 md:pb-12">
      <div className="grid md:grid-cols-[1fr_320px] gap-12 md:gap-8 items-start">
        <div>
          <p className="mono-label mb-6">FULL STACK DEVELOPER — MERN / REAL-TIME SYSTEMS</p>
          <h1 className="font-display font-semibold text-5xl sm:text-6xl lg:text-[4.5rem] leading-[1.02] tracking-tight text-text-primary">
            Aazim Khursheed
          </h1>
          <p className="mt-6 max-w-xl text-lg sm:text-xl text-text-secondary leading-relaxed">
            {profile.headline}. I build production-quality backends, real-time features, and
            AI-integrated web applications.
          </p>
          <p className="mt-3 mono-label normal-case tracking-normal text-text-tertiary">
            {profile.now}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <LinkButton href="#work">View Projects</LinkButton>
            <LinkButton
              href={profile.links.resume}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
            >
              Download Resume
            </LinkButton>
          </div>

          <ul className="mt-10 flex flex-wrap items-center gap-6">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors"
                >
                  <s.icon size={16} strokeWidth={1.5} />
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Real, live artifact instead of a decorative animated background */}
        <div className="border border-border-default rounded-lg bg-bg-raised p-5 w-full">
          <div className="flex items-center gap-2 mono-label mb-4">
            <GitCommitHorizontal size={14} strokeWidth={1.5} />
            ACTIVITY
          </div>
          {events && (
            <ul className="space-y-4">
              {events.map((e, i) => (
                <li key={i} className="text-sm">
                  <p className="text-text-primary font-mono text-[13px] leading-snug truncate">
                    {e.message}
                  </p>
                  <p className="mt-1 text-xs text-text-tertiary font-mono">
                    {e.repo} · {e.time}
                  </p>
                </li>
              ))}
            </ul>
          )}
          {!events && !failed && (
            <p className="text-sm text-text-tertiary font-mono">Loading recent activity…</p>
          )}
          {failed && (
            <p className="text-sm text-text-tertiary font-mono leading-relaxed">
              Actively building — see recent work on GitHub.
            </p>
          )}
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1 text-xs text-text-secondary hover:text-text-primary transition-colors"
          >
            View GitHub <ArrowUpRight size={12} strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </section>
  );
}
