import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { profile } from "@/data/content";
import { LinkButton } from "@/components/ui/Button";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links.map((l) => document.querySelector(l.href)).filter(Boolean) as Element[];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-200",
          scrolled
            ? "border-b border-border-subtle bg-bg-base/80 backdrop-blur-md"
            : "border-b border-transparent"
        )}
      >
        <nav className="section-shell flex items-center justify-between h-16">
          <a
            href="#top"
            className="flex items-center"
            aria-label="Home"
          >
            <img 
              src="/profile-logo.png" 
              alt="Aazim Khursheed Logo" 
              className="h-10 w-10 rounded-full object-cover border border-border-subtle bg-bg-raised hover:border-text-secondary transition-colors"
            />
          </a>

          <ul className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={cn(
                    "text-sm transition-colors",
                    active === l.href
                      ? "text-text-primary"
                      : "text-text-secondary hover:text-text-primary"
                  )}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <LinkButton
              href={profile.links.resume}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              className="text-sm px-4 py-2"
            >
              Resume
            </LinkButton>
          </div>

          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-sm text-text-primary"
            aria-label="Open menu"
            aria-expanded={menuOpen}
          >
            Menu
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-bg-base flex flex-col"
          >
            <div className="section-shell flex items-center justify-between h-16">
              <span className="flex items-center">
                <img 
                  src="/profile-logo.png" 
                  alt="Aazim Khursheed Logo" 
                  className="h-10 w-10 rounded-full object-cover border border-border-subtle bg-bg-raised"
                />
              </span>
              <button
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className="text-text-primary"
              >
                <X size={22} strokeWidth={1.5} />
              </button>
            </div>
            <ul className="section-shell flex flex-col gap-6 mt-8">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setMenuOpen(false)}
                    className="font-display text-3xl font-medium text-text-primary"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
