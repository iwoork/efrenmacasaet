import { GLOBAL_EXPERIENCE } from "@/lib/constants";

export default function GlobalExperience() {
  return (
    <section id="global-experience" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold tracking-tight text-[var(--color-accent)] sm:text-4xl">
          {GLOBAL_EXPERIENCE.title}
        </h2>
        <p className="mt-4 text-base text-[var(--color-text-secondary)]">
          {GLOBAL_EXPERIENCE.subtitle}
        </p>

        <div className="mt-12 flex flex-wrap gap-4">
          {GLOBAL_EXPERIENCE.cities.map((city) => (
            <span
              key={city}
              className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-3 text-sm font-medium text-[var(--color-text-primary)] transition-colors duration-200 hover:border-[var(--color-text-secondary)]"
            >
              {city}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
