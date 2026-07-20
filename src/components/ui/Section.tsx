import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionProps = {
  id: string;
  children: ReactNode;
  className?: string;
  invert?: boolean;
};

export function Section({ id, children, className, invert }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 md:py-24 lg:py-40",
        invert && "bg-bg-invert text-text-invert-primary",
        className
      )}
    >
      <div className="section-shell">{children}</div>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <h2 className="mono-label mb-4 font-normal">{children}</h2>;
}
