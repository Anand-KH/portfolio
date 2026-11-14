import { Database, Layers3, Monitor, Server, Sparkles } from "lucide-react";
import { Section, SectionHeading, Tag } from "@/components/ui/section";
import { skillGroups } from "@/data/site";
import { cn } from "@/lib/utils";

const icons = {
  monitor: Monitor,
  server: Server,
  database: Database,
  layers: Layers3,
  sparkles: Sparkles,
} as const;

/**
 * Bento layout on a 6-column grid: rows alternate wide+narrow / narrow+wide,
 * and a leftover last card spans the full row.
 */
function spanFor(index: number, count: number) {
  if (index === count - 1 && index % 2 === 0) return "md:col-span-6";
  return index % 4 === 0 || index % 4 === 3 ? "md:col-span-4" : "md:col-span-2";
}

export function SkillsSection() {
  return (
    <Section id="skills" tone="surface">
      <SectionHeading
        id="skills"
        index="02"
        eyebrow="Technical expertise"
        title="Technologies I work with"
        description="A versatile technology stack for developing scalable applications, intuitive user experiences, and reliable backend systems."
      />

      <div className="mt-14 grid gap-4 md:grid-cols-6">
        {skillGroups.map((group, index) => {
          const Icon = icons[group.icon];
          return (
            <div
              key={group.title}
              className={cn(
                "group relative overflow-hidden rounded-xl border border-line bg-canvas p-6 transition-colors duration-300 hover:border-line-strong sm:p-7",
                spanFor(index, skillGroups.length),
              )}
            >
              <div className="flex items-center gap-3">
                <span className="flex size-9 items-center justify-center rounded-lg border border-line bg-surface text-accent">
                  <Icon aria-hidden="true" size={18} strokeWidth={1.75} />
                </span>
                <span className="font-mono text-xs text-subtle">
                  {String(group.skills.length).padStart(2, "0")} skills
                </span>
              </div>
              <h3 className="mt-6 text-lg font-semibold tracking-tight text-ink">{group.title}</h3>
              <p className="mt-1.5 text-sm leading-6 text-muted">{group.description}</p>
              <ul className="mt-6 flex flex-wrap gap-1.5">
                {group.skills.map((skill) => (
                  <Tag key={skill}>{skill}</Tag>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
