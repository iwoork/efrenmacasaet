import { SITE } from "@/lib/constants";

export default function Footer() {
  return (
    <footer id="contact" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-[var(--color-accent)] sm:text-4xl">
          Building the Next Generation of Trusted AI Systems.
        </h2>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={`mailto:efren@iwoork.com`}
            className="inline-flex items-center rounded-lg bg-[var(--color-accent)] px-6 py-3 text-sm font-medium text-[var(--color-bg)] transition-colors duration-200 hover:bg-[var(--color-text-primary)]"
          >
            Let&apos;s Build
          </a>
          <a
            href={SITE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg border border-[var(--color-border)] px-6 py-3 text-sm font-medium text-[var(--color-text-primary)] transition-colors duration-200 hover:border-[var(--color-text-secondary)] hover:bg-[var(--color-surface)]"
          >
            Get in Touch
          </a>
        </div>

        {/* Divider */}
        <div className="mx-auto mt-16 h-px max-w-xs bg-[var(--color-border)]" />

        {/* Bottom footer */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-[var(--color-text-secondary)]">
            &copy; {new Date().getFullYear()} Efren Macasaet. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[var(--color-text-secondary)] transition-colors duration-200 hover:text-[var(--color-text-primary)]"
            >
              LinkedIn
            </a>
            <a
              href={SITE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[var(--color-text-secondary)] transition-colors duration-200 hover:text-[var(--color-text-primary)]"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
