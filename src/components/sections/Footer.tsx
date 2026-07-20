import { certifications, profile } from "@/data/content";

export function Footer() {
  return (
    <footer className="bg-bg-invert text-text-invert-secondary">
      <div className="section-shell py-8 border-t border-border-invert">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-sm">
            {profile.name} · {new Date().getFullYear()} · Built with React, TypeScript, Tailwind CSS, Framer Motion.
          </p>
        </div>
        <p className="mt-3 text-xs leading-relaxed max-w-3xl">
          Certifications: {certifications.join(" · ")}
        </p>
      </div>
    </footer>
  );
}
