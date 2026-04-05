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

  // Track scroll position for header background
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track active section via Intersection Observer
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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleNavClick = useCallback(() => {
    setMobileOpen(false);
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-bg)]/80 backdrop-blur-lg transition-all duration-300 md:border-transparent md:bg-transparent md:backdrop-blur-none ${
        scrolled || mobileOpen
          ? "md:border-[var(--color-border)] md:bg-[var(--color-bg)]/80 md:backdrop-blur-lg"
          : ""
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo / Name */}
        <a
          href="#hero"
          className="flex items-center gap-2.5 transition-colors duration-200 group"
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 64 64"
            fill="none"
            className="transition-colors duration-200"
            aria-hidden="true"
          >
            {/* Head shape */}
            <ellipse cx="32" cy="30" rx="16" ry="18" fill="var(--color-text-secondary)" opacity="0.25" />
            <ellipse cx="32" cy="30" rx="15" ry="17" fill="var(--color-bg)" />
            {/* Face skin */}
            <ellipse cx="32" cy="32" rx="13" ry="14" fill="var(--color-text-secondary)" opacity="0.15" />
            {/* Spiky hair */}
            <path d="M17 25c0-10 7-17 15-17s15 7 15 17" fill="var(--color-accent)" />
            <path d="M17 25c1-4 3-8 5-10l-2-3 5 2c2-3 4-5 7-6l-1-3 4 3c2-1 5-2 7-1l1-3 1 4c3 1 5 3 6 5l3-1-2 4c2 3 3 6 3 9z" fill="var(--color-accent)" />
            {/* Ears */}
            <ellipse cx="18" cy="30" rx="2.5" ry="3.5" fill="var(--color-text-secondary)" opacity="0.2" />
            <ellipse cx="46" cy="30" rx="2.5" ry="3.5" fill="var(--color-text-secondary)" opacity="0.2" />
            {/* Sunglasses */}
            <rect x="20" y="27" width="11" height="7" rx="2" fill="var(--color-accent)" opacity="0.85" />
            <rect x="33" y="27" width="11" height="7" rx="2" fill="var(--color-accent)" opacity="0.85" />
            <path d="M31 30h2" stroke="var(--color-accent)" strokeWidth="1.5" />
            <path d="M19 29h-1" stroke="var(--color-accent)" strokeWidth="1" />
            <path d="M45 29h1" stroke="var(--color-accent)" strokeWidth="1" />
            {/* Nose */}
            <path d="M32 35v3.5" stroke="var(--color-text-secondary)" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
            {/* Slight smile */}
            <path d="M28 41c2 2 6 2 8 0" stroke="var(--color-text-secondary)" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.5" />
            {/* Goatee */}
            <path d="M29 42c1 2 2 3 3 3s2-1 3-3" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.4" />
            {/* Jaw line */}
            <path d="M19 30c0 10 5 17 13 17s13-7 13-17" fill="none" stroke="var(--color-text-secondary)" strokeWidth="0.5" opacity="0.15" />
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
            onClick={() => setMobileOpen((prev) => !prev)}
            className="relative z-50 flex h-8 w-8 items-center justify-center"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <div className="flex w-5 flex-col gap-[5px]">
              <span
                className={`block h-[1.5px] w-full bg-[var(--color-text-primary)] transition-all duration-300 ${
                  mobileOpen ? "translate-y-[6.5px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-[1.5px] w-full bg-[var(--color-text-primary)] transition-all duration-300 ${
                  mobileOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-[1.5px] w-full bg-[var(--color-text-primary)] transition-all duration-300 ${
                  mobileOpen ? "-translate-y-[6.5px] -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col items-center justify-center md:hidden"
          style={{ backgroundColor: "var(--color-bg)" }}
        >
          <div className="flex flex-col items-center gap-8">
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
          </div>
        </div>
      )}
    </header>
  );
}
