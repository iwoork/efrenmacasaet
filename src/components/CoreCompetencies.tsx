import { COMPETENCIES } from "@/lib/constants";

export default function CoreCompetencies() {
  return (
    <section id="competencies" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold tracking-tight text-[var(--color-accent)] sm:text-4xl">
          Core Competencies
        </h2>
        <p className="mt-4 text-base text-[var(--color-text-secondary)]">
          The intersection of AI engineering, platform thinking, and product execution.
        </p>

        <div className="mt-12 flex flex-wrap gap-3">
          {COMPETENCIES.map((skill) => (
            <span
              key={skill}
              className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-3 text-sm font-medium text-[var(--color-text-primary)] transition-colors duration-200 hover:border-[var(--color-text-secondary)]"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
