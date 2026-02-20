import { ENTERPRISE_EXPERIENCE } from "@/lib/constants";

export default function EnterpriseExperience() {
  return (
    <section id="experience" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold tracking-tight text-[var(--color-accent)] sm:text-4xl">
          Enterprise Experience
        </h2>
        <p className="mt-4 text-base text-[var(--color-text-secondary)]">
          Scale, complexity, and systems thinking — proven at the highest level.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ENTERPRISE_EXPERIENCE.map((item) => (
            <div
              key={item.company}
              className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 transition-colors duration-200 hover:border-[var(--color-text-secondary)]"
            >
              <h3 className="text-lg font-semibold text-[var(--color-accent)]">
                {item.company}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                {item.summary}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
