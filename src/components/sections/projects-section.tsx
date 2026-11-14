import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { buttonVariants } from "@/components/ui/button";
import { BrowserFrame, displayAddress } from "@/components/ui/browser-frame";
import { Section, SectionHeading, Tag } from "@/components/ui/section";
import { profile, projects, type Project } from "@/data/site";
import { cn } from "@/lib/utils";

export function ProjectsSection() {
  return (
    <Section id="projects">
      <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <SectionHeading
          id="projects"
          index="03"
          eyebrow="Selected work"
          title="Projects built with curiosity and care."
          description="A selection of applications exploring frontend experiences, APIs, data, and full-stack development."
        />
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants({ variant: "outline", size: "sm", className: "self-start sm:self-auto" })}
        >
          <FaGithub aria-hidden="true" size={15} />
          All repositories
          <span className="sr-only">(opens in a new tab)</span>
        </a>
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} featured={index === 0} />
        ))}
      </div>
    </Section>
  );
}

function ProjectCard({ project, featured }: { project: Project; featured: boolean }) {
  const address = displayAddress(project.demo ?? project.repo);

  return (
    <article
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-xl border border-line bg-surface transition-[border-color,box-shadow] duration-300 hover:border-line-strong hover:shadow-[0_20px_48px_-28px_rgb(9_9_11/0.3)]",
        featured && "md:col-span-2 md:grid md:grid-cols-[1.15fr_1fr]",
      )}
    >
      <div
        className={cn(
          "relative overflow-hidden border-b border-line bg-sunken px-6 pt-6 sm:px-8 sm:pt-8",
          featured && "md:border-b-0 md:border-r",
        )}
      >
        <div
          aria-hidden="true"
          className={cn("absolute inset-0 bg-gradient-to-br opacity-[0.14] dark:opacity-20", project.accent)}
        />
        <BrowserFrame
          address={address}
          className={cn(
            "relative translate-y-2 rounded-b-none border-b-0 transition-transform duration-500 group-hover:translate-y-0",
            featured ? "h-56 sm:h-72 md:h-full md:min-h-80" : "h-48 sm:h-56",
          )}
        >
          {project.image ? (
            <Image
              src={project.image}
              alt={`${project.title} project preview`}
              fill
              sizes={featured ? "(max-width: 768px) 90vw, 560px" : "(max-width: 768px) 90vw, 480px"}
              className="object-cover object-top"
            />
          ) : (
            <div aria-hidden="true" className={cn("absolute inset-0 bg-gradient-to-br", project.accent)} />
          )}
        </BrowserFrame>
      </div>

      <div className={cn("flex flex-1 flex-col p-6 sm:p-7", featured && "md:justify-center md:p-10")}>
        <p className="font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-subtle">
          {project.demo ? "Live project" : "Source on GitHub"}
        </p>
        <h3
          className={cn(
            "mt-3 font-semibold tracking-tight text-ink",
            featured ? "text-2xl sm:text-3xl" : "text-xl",
          )}
        >
          <Link
            href={`/projects/${project.slug}`}
            className="after:absolute after:inset-0 after:content-[''] focus-visible:outline-none focus-visible:after:rounded-xl focus-visible:after:ring-2 focus-visible:after:ring-accent"
          >
            {project.title}
          </Link>
        </h3>
        <p className="mt-3 flex-1 text-pretty leading-7 text-muted">{project.description}</p>

        <ul className="mt-6 flex flex-wrap gap-1.5">
          {project.technologies.map((technology) => (
            <Tag key={technology} className="bg-canvas">
              {technology}
            </Tag>
          ))}
        </ul>

        <div className="relative z-10 mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-line pt-5 text-sm font-medium">
          <span className="inline-flex items-center gap-1.5 text-ink">
            Read case study
            <ArrowRight
              aria-hidden="true"
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </span>
          <span className="ml-auto flex items-center gap-4">
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-muted transition-colors hover:text-ink"
            >
              Code
              <ArrowUpRight aria-hidden="true" size={14} />
              <span className="sr-only">for {project.title} (opens in a new tab)</span>
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-muted transition-colors hover:text-ink"
              >
                Live demo
                <ArrowUpRight aria-hidden="true" size={14} />
                <span className="sr-only">of {project.title} (opens in a new tab)</span>
              </a>
            )}
          </span>
        </div>
      </div>
    </article>
  );
}
