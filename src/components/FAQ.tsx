import { FAQ_ITEMS } from "@/lib/constants";

export default function FAQ() {
  return (
    <section id="faq" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold tracking-tight text-[var(--color-accent)] sm:text-4xl">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 text-base text-[var(--color-text-secondary)]">
          Common questions about Efren Macasaet&apos;s work, expertise, and
          approach to AI product development.
        </p>

        <div className="mt-12 space-y-6">
          {FAQ_ITEMS.map((item) => (
            <article
              key={item.question}
              className="border-l-2 border-[var(--color-accent-blue)] py-2 pl-6"
            >
              <h3 className="text-lg font-medium text-[var(--color-text-primary)]">
                {item.question}
              </h3>
              <p className="mt-2 text-base leading-relaxed text-[var(--color-text-secondary)]">
                {item.answer}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
