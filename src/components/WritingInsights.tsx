import { WRITING_TOPICS } from "@/lib/constants";

export default function WritingInsights() {
  return (
    <section id="writing" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold tracking-tight text-[var(--color-accent)] sm:text-4xl">
          Writing &amp; Insights
        </h2>
        <p className="mt-4 text-base text-[var(--color-text-secondary)]">
          Thinking on AI, platform strategy, and building systems that last.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WRITING_TOPICS.map((topic) => (
            <a
              key={topic.title}
              href={topic.href}
              className="group rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-colors duration-200 hover:border-[var(--color-text-secondary)]"
            >
              <h3 className="text-base font-semibold text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)]">
                {topic.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                {topic.summary}
              </p>
              <span className="mt-4 inline-block text-sm text-[var(--color-accent-blue)]">
                Read &rarr;
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
