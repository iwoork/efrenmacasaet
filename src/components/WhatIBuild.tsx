import { PROJECTS } from "@/lib/constants";

export default function WhatIBuild() {
  return (
    <section id="what-i-build" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold tracking-tight text-[var(--color-accent)] sm:text-4xl">
          What I Build
        </h2>
        <p className="mt-4 text-base text-[var(--color-text-secondary)]">
          Founder-built AI products — from zero to production.
        </p>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {PROJECTS.map((project) => (
            <div
              key={project.name}
              className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 transition-colors duration-200 hover:border-[var(--color-text-secondary)]"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-[var(--color-accent)]">
                  {project.name}
                </h3>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[var(--color-accent-blue)] hover:underline"
                >
                  Visit &rarr;
                </a>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                {project.description}
              </p>

              <ul className="mt-6 space-y-2">
                {project.capabilities.map((cap) => (
                  <li
                    key={cap}
                    className="flex items-start text-sm text-[var(--color-text-primary)]"
                  >
                    <span className="mr-2 mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--color-accent-blue)]" />
                    {cap}
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-xs font-medium uppercase tracking-widest text-[var(--color-text-secondary)]">
                {project.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
