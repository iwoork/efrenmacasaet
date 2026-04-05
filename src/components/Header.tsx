"use client";

import { useEffect, useState, useCallback } from "react";
import { SITE } from "@/lib/constants";
import ThemeToggle from "@/components/ThemeToggle";

const NAV_LINKS = [
  { label: "Work", href: "#what-i-build" },
  { label: "Experience", href: "#experience" },
  { label: "Thinking", href: "#principles" },
  { label: "Writing", href: "#writing" },
  { label: "Contact", href: "#contact" },
] as const;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ["what-i-build", "experience", "principles", "writing", "contact"];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${id}`);
          }
        },
        { threshold: 0.3, rootMargin: "-80px 0px -50% 0px" }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleNavClick = useCallback(() => {
    setMobileOpen(false);
  }, []);

  return (
    <>
      {/* Mobile menu overlay — rendered outside header to avoid z-index stacking issues */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-[60] flex flex-col items-center justify-center md:hidden"
          style={{ backgroundColor: "var(--color-bg)" }}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            className="absolute top-4 right-6 flex h-10 w-10 items-center justify-center"
            aria-label="Close menu"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="var(--color-text-primary)" strokeWidth="1.5" strokeLinecap="round">
              <path d="M4 4l12 12M16 4L4 16" />
            </svg>
          </button>

          <nav className="flex flex-col items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={handleNavClick}
                className={`text-2xl font-medium transition-colors duration-200 ${
                  activeSection === link.href
                    ? "text-[var(--color-accent)]"
                    : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}

      <header
        className="fixed top-0 right-0 left-0 z-50 transition-all duration-300"
        style={
          scrolled
            ? { backgroundColor: "color-mix(in srgb, var(--color-bg) 80%, transparent)", backdropFilter: "blur(12px)", borderBottom: "1px solid var(--color-border)" }
            : { backgroundColor: "color-mix(in srgb, var(--color-bg) 80%, transparent)", backdropFilter: "blur(12px)", borderBottom: "1px solid var(--color-border)" }
        }
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          {/* Logo / Name */}
          <a
            href="#hero"
            className="flex items-center gap-2 transition-colors duration-200 group"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 32 32"
              fill="none"
              aria-hidden="true"
            >
              <rect width="32" height="32" rx="8" fill="var(--color-accent-blue)" />
              <path
                d="M9 8h14v3H12.5v4h9v3h-9v4H23v3H9z"
                fill="white"
              />
            </svg>
            <span className="text-sm font-semibold tracking-tight text-[var(--color-accent)] group-hover:text-[var(--color-text-primary)]">
              {SITE.name}
            </span>
          </a>

          {/* Desktop nav links + theme toggle */}
          <div className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm transition-colors duration-200 ${
                  activeSection === link.href
                    ? "text-[var(--color-accent)]"
                    : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
                }`}
              >
                {link.label}
              </a>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile: theme toggle + hamburger */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="flex h-8 w-8 items-center justify-center"
              aria-label="Open menu"
            >
              <div className="flex w-5 flex-col gap-[5px]">
                <span className="block h-[1.5px] w-full bg-[var(--color-text-primary)]" />
                <span className="block h-[1.5px] w-full bg-[var(--color-text-primary)]" />
                <span className="block h-[1.5px] w-full bg-[var(--color-text-primary)]" />
              </div>
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}
