import { Mail, Code2, ArrowUpRight, FileText } from "lucide-react";
import { SiGithub, SiLinkedin } from "@/components/icons/BrandIcons";
import { Reveal } from "@/components/ui/Reveal";
import { profile } from "@/data/content";

const links = [
  { href: `mailto:${profile.email}`, label: profile.email, icon: Mail },
  { href: profile.links.github, label: "GitHub", icon: SiGithub },
  { href: profile.links.linkedin, label: "LinkedIn", icon: SiLinkedin },
  { href: profile.links.leetcode, label: "LeetCode", icon: Code2 },
  { href: profile.links.resume, label: "Resume", icon: FileText },
];

export function Contact() {
  return (
    <section id="contact" className="bg-bg-invert text-text-invert-primary py-24 md:py-40">
      <div className="section-shell">
        <Reveal>
          <p className="mono-label text-text-invert-secondary mb-6">Contact</p>
          <h2 className="font-display font-semibold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight max-w-2xl text-text-invert-primary">
            Looking for backend-leaning full-stack roles where I can work close to real systems —
            not just interfaces.
          </h2>

          <ul className="mt-14 flex flex-col gap-5">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 text-xl sm:text-2xl font-display font-medium text-text-invert-primary"
                >
                  <l.icon size={20} strokeWidth={1.5} />
                  {l.label}
                  <ArrowUpRight
                    size={18}
                    strokeWidth={1.5}
                    className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-150"
                  />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
