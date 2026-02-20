import { HERO } from "@/lib/constants";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center px-6"
    >
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="animate-fade-in-up text-5xl font-bold tracking-tight text-[var(--color-accent)] opacity-0 sm:text-6xl lg:text-7xl">
          {HERO.headline}
        </h1>

        <p className="animate-fade-in-up-delay-1 mx-auto mt-6 max-w-2xl text-lg text-[var(--color-text-secondary)] opacity-0 sm:text-xl">
          {HERO.subheadline}
        </p>

        <div className="animate-fade-in-up-delay-2 mt-10 flex flex-col items-center justify-center gap-4 opacity-0 sm:flex-row">
          {HERO.ctas.map((cta) => {
            const isExternal = "external" in cta && cta.external;
            return (
              <a
                key={cta.label}
                href={cta.href}
                {...(isExternal
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className={`inline-flex items-center rounded-lg px-6 py-3 text-sm font-medium transition-all duration-200 ${
                  cta.label === "Explore My Work"
                    ? "bg-[var(--color-accent)] text-[var(--color-bg)] hover:bg-[var(--color-text-primary)]"
                    : "border border-[var(--color-border)] text-[var(--color-text-primary)] hover:border-[var(--color-text-secondary)] hover:bg-[var(--color-surface)]"
                }`}
              >
                {cta.label}
                {isExternal && (
                  <svg
                    className="ml-2 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                )}
              </a>
            );
          })}
        </div>
      </div>

      {/* Subtle gradient overlay at bottom */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32"
        style={{
          background:
            "linear-gradient(to top, var(--color-bg), transparent)",
        }}
        aria-hidden="true"
      />
    </section>
  );
}
