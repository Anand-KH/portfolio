import type { PropsWithChildren, ReactNode } from "react";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

type SectionProps = PropsWithChildren<{
  id: string;
  tone?: "canvas" | "surface";
  className?: string;
}>;

export function Section({ id, tone = "canvas", className, children }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={cn(
        "border-t border-line px-6 py-20 sm:py-24 lg:px-8 lg:py-28",
        tone === "surface" ? "bg-surface" : "bg-canvas",
        className,
      )}
    >
      <Reveal className="mx-auto w-full max-w-6xl">{children}</Reveal>
    </section>
  );
}

/** Small monospace label, e.g. "01 · About". */
export function Eyebrow({ index, children }: { index?: string; children: ReactNode }) {
  return (
    <p className="flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.18em] text-subtle">
      {index && <span className="text-accent">{index}</span>}
      {index && <span aria-hidden="true" className="h-px w-6 bg-line-strong" />}
      {children}
    </p>
  );
}

type SectionHeadingProps = {
  id: string;
  index?: string;
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeading({
  id,
  index,
  eyebrow,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", className)}>
      <Eyebrow index={index}>{eyebrow}</Eyebrow>
      <h2
        id={`${id}-heading`}
        className="mt-5 text-balance text-3xl font-semibold leading-[1.1] tracking-[-0.035em] text-ink sm:text-4xl lg:text-[2.75rem]"
      >
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-pretty text-base leading-7 text-muted sm:text-lg sm:leading-8">
          {description}
        </p>
      )}
    </div>
  );
}

/** Small bordered tag for technologies and skills. */
export function Tag({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <li
      className={cn(
        "rounded-md border border-line bg-surface px-2.5 py-1 text-[0.8125rem] font-medium text-muted",
        className,
      )}
    >
      {children}
    </li>
  );
}
