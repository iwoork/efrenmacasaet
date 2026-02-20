import { PRINCIPLES } from "@/lib/constants";

export default function HowIThink() {
  return (
    <section id="principles" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold tracking-tight text-[var(--color-accent)] sm:text-4xl">
          How I Think
        </h2>
        <p className="mt-4 text-base text-[var(--color-text-secondary)]">
          Principles that guide every system I design and every product I build.
        </p>

        <div className="mt-12 space-y-6">
          {PRINCIPLES.map((principle, i) => (
            <blockquote
              key={i}
              className="border-l-2 border-[var(--color-accent-blue)] py-2 pl-6"
            >
              <p className="text-lg font-medium leading-relaxed text-[var(--color-text-primary)] sm:text-xl">
                &ldquo;{principle}&rdquo;
              </p>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
