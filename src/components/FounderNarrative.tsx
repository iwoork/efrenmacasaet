import { FOUNDER_NARRATIVE } from "@/lib/constants";

export default function FounderNarrative() {
  return (
    <section id="narrative" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold tracking-tight text-[var(--color-accent)] sm:text-4xl">
          {FOUNDER_NARRATIVE.title}
        </h2>

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          {/* Enterprise credentials */}
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-[var(--color-text-secondary)]">
              Enterprise Foundation
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              {FOUNDER_NARRATIVE.companies.map((company) => (
                <span
                  key={company}
                  className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-3 text-sm font-medium text-[var(--color-text-primary)]"
                >
                  {company}
                </span>
              ))}
            </div>
            <p className="mt-6 text-base leading-relaxed text-[var(--color-text-secondary)]">
              {FOUNDER_NARRATIVE.narrative}
            </p>
          </div>

          {/* Founder pivot */}
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-[var(--color-text-secondary)]">
              Founder Execution
            </p>
            <p className="mt-6 text-base leading-relaxed text-[var(--color-text-secondary)]">
              Now he builds AI-powered products that are:
            </p>
            <ul className="mt-4 space-y-3">
              {FOUNDER_NARRATIVE.founderQualities.map((quality) => (
                <li
                  key={quality}
                  className="flex items-center text-base text-[var(--color-text-primary)]"
                >
                  <span className="mr-3 h-1.5 w-1.5 rounded-full bg-[var(--color-accent-blue)]" />
                  {quality}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
