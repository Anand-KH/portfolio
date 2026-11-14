import { Quote } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { impactHighlights, stats, testimonials } from "@/data/site";

export function ImpactSection() {
  return (
    <Section id="impact">
      <SectionHeading
        id="impact"
        index="05"
        eyebrow="Impact & recognition"
        title="Key contributions and recognition."
        description="A snapshot of delivery across teams and the contributions I'm most proud of."
      />

      <dl className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col bg-surface px-6 py-7">
            <dt className="mt-2 text-sm text-subtle">{stat.label}</dt>
            <dd className="order-first text-3xl font-semibold tracking-[-0.03em] text-ink sm:text-4xl">
              {stat.value}
            </dd>
          </div>
        ))}
      </dl>

      <ul className="mt-5 grid gap-5 md:grid-cols-3">
        {impactHighlights.map((item, index) => (
          <li
            key={item.title}
            className="flex flex-col rounded-xl border border-line bg-surface p-6 transition-colors duration-300 hover:border-line-strong sm:p-7"
          >
            <span className="font-mono text-xs text-accent">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-8 text-lg font-semibold tracking-tight text-ink">{item.title}</h3>
            <p className="mt-2 text-sm leading-6 text-muted">{item.detail}</p>
          </li>
        ))}
      </ul>

      {testimonials.length > 0 && (
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <figure key={testimonial.name} className="rounded-xl border border-line bg-surface p-7">
              <Quote aria-hidden="true" className="text-accent" size={20} />
              <blockquote className="mt-4 leading-7 text-ink">{testimonial.quote}</blockquote>
              <figcaption className="mt-5 text-sm">
                <span className="font-medium text-ink">{testimonial.name}</span>
                <span className="text-subtle"> · {testimonial.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      )}
    </Section>
  );
}
