import { Section, SectionHeading } from "@/components/ui/section";
import { experience } from "@/data/site";
import { cn } from "@/lib/utils";

export function ExperienceSection() {
  return (
    <Section id="experience" tone="surface">
      <SectionHeading
        id="experience"
        index="04"
        eyebrow="Experience"
        title="My professional journey"
        description="Over 5 years of experience building enterprise applications, developing scalable solutions, collaborating with clients, and delivering end-to-end software products."
      />

      <ol className="mt-14 border-t border-line">
        {experience.map((item) => (
          <li
            key={`${item.company}-${item.period}`}
            className="grid gap-4 border-b border-line py-8 sm:py-10 md:grid-cols-[13rem_1fr] md:gap-10"
          >
            <div className="flex flex-wrap items-center gap-2 md:flex-col md:items-start md:gap-3">
              <p className="font-mono text-[0.8125rem] text-muted">{item.period}</p>
              {item.employment && (
                <span className="rounded-md border border-line px-2 py-0.5 text-xs text-muted">
                  {item.employment}
                </span>
              )}
              {item.current && (
                <span className="inline-flex items-center gap-1.5 rounded-md bg-success-soft px-2 py-0.5 text-xs font-medium text-success">
                  <span aria-hidden="true" className="size-1.5 rounded-full bg-current" />
                  Current role
                </span>
              )}
            </div>

            <article>
              <h3 className="text-lg font-semibold tracking-tight text-ink sm:text-xl">{item.role}</h3>
              <p className="mt-1 text-[0.9375rem] text-accent">{item.company}</p>
              <p className="mt-4 max-w-2xl text-pretty leading-7 text-muted">{item.summary}</p>
              <ul
                className={cn(
                  "mt-5 grid max-w-3xl gap-x-8 gap-y-2.5 text-sm leading-6 text-muted",
                  item.highlights.length > 2 && "lg:grid-cols-2",
                )}
              >
                {item.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3">
                    <span aria-hidden="true" className="mt-[0.6875rem] h-px w-3 shrink-0 bg-line-strong" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ol>
    </Section>
  );
}
