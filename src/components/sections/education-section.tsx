import { GraduationCap, MapPin } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { education } from "@/data/site";

export function EducationSection() {
  return (
    <Section id="education" tone="surface">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-20">
        <SectionHeading
          id="education"
          index="06"
          eyebrow="Education"
          title="The foundation behind my craft."
        />

        <article className="rounded-xl border border-line bg-canvas p-6 sm:p-7">
          <div className="flex items-start gap-4">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-line bg-surface text-accent">
              <GraduationCap aria-hidden="true" size={20} strokeWidth={1.75} />
            </span>
            <div className="min-w-0">
              <h3 className="text-lg font-semibold leading-snug tracking-tight text-ink">
                {education.degree}
              </h3>
              <p className="mt-0.5 text-muted">{education.field}</p>
            </div>
          </div>

          <dl className="mt-6 grid gap-4 border-t border-line pt-5 text-sm sm:grid-cols-[1fr_auto_auto] sm:gap-8">
            <div>
              <dt className="sr-only">Institution</dt>
              <dd className="font-medium text-ink">{education.school}</dd>
              <dd className="mt-1 inline-flex items-center gap-1.5 text-subtle">
                <MapPin aria-hidden="true" size={13} />
                {education.location}
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-subtle">Years</dt>
              <dd className="mt-1 text-ink">{education.period}</dd>
            </div>
            <div>
              <dt className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-subtle">Grade</dt>
              <dd className="mt-1 text-ink">{education.grade.replace(/^CGPA:\s*/, "CGPA ")}</dd>
            </div>
          </dl>
        </article>
      </div>
    </Section>
  );
}
