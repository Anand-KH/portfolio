import { ArrowLeft, ArrowRight, ArrowUpRight, Check } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { FaGithub } from "react-icons/fa";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteNav } from "@/components/layout/site-nav";
import { buttonVariants } from "@/components/ui/button";
import { BrowserFrame, displayAddress } from "@/components/ui/browser-frame";
import { Eyebrow, Tag } from "@/components/ui/section";
import { projects } from "@/data/site";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return {};

  const title = `${project.title} | Anand K H`;
  const images = project.image
    ? [{ url: project.image, alt: `Screenshot of ${project.title}` }]
    : undefined;

  // openGraph and twitter replace the root layout's objects rather than merging
  // with them, so the shared fields are repeated here; otherwise project links
  // would preview with the home page's title and image.
  return {
    title: project.title,
    description: project.tagline,
    openGraph: {
      type: "website",
      siteName: "Anand K H",
      url: `/projects/${project.slug}`,
      title,
      description: project.tagline,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: project.tagline,
      images,
    },
  };
}

export default function ProjectPage({ params }: PageProps) {
  return (
    <>
      <SiteNav />
      <Suspense fallback={<ProjectPageFallback />}>
        <ProjectDetails params={params} />
      </Suspense>
      <SiteFooter />
    </>
  );
}

function ProjectPageFallback() {
  return (
    <main id="main" className="bg-canvas text-ink">
      <div
        aria-busy="true"
        aria-label="Loading project case study"
        className="mx-auto w-full max-w-5xl px-6 py-16 lg:px-8 lg:py-20"
      >
        <div className="h-4 w-24 animate-pulse rounded bg-sunken" />
        <div className="mt-12 h-12 w-2/3 animate-pulse rounded bg-sunken sm:h-14" />
        <div className="mt-5 h-6 w-1/2 animate-pulse rounded bg-sunken" />
        <div className="mt-12 aspect-[16/9] animate-pulse rounded-xl bg-sunken" />
      </div>
    </main>
  );
}

async function ProjectDetails({ params }: PageProps) {
  const { slug } = await params;
  const index = projects.findIndex((item) => item.slug === slug);
  if (index === -1) notFound();

  const project = projects[index];
  const next = projects[(index + 1) % projects.length];

  return (
    <main id="main" className="relative isolate bg-canvas text-ink">
      <div aria-hidden="true" className="bg-grid absolute inset-x-0 top-0 -z-10 h-[36rem]" />

      <article className="mx-auto w-full max-w-5xl px-6 py-12 lg:px-8 lg:py-16">
        <Link
          href="/#projects"
          className={buttonVariants({ variant: "ghost", size: "sm", className: "-ml-3.5" })}
        >
          <ArrowLeft aria-hidden="true" size={15} />
          All projects
        </Link>

        <header className="mt-10">
          <Eyebrow index={String(index + 1).padStart(2, "0")}>Case study</Eyebrow>
          <h1 className="mt-5 text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.045em] sm:text-6xl">
            {project.title}
          </h1>
          <p className="mt-5 max-w-2xl text-pretty text-lg leading-8 text-muted sm:text-xl">
            {project.tagline}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noreferrer" className={buttonVariants()}>
                Live demo
                <ArrowUpRight aria-hidden="true" size={16} />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            )}
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({ variant: "outline" })}
            >
              <FaGithub aria-hidden="true" size={16} />
              View source
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </div>
        </header>

        <BrowserFrame
          address={displayAddress(project.demo ?? project.repo)}
          className="mt-14 aspect-[16/10] rounded-xl"
        >
          {project.image ? (
            <Image
              src={project.image}
              alt={`${project.title} project preview`}
              fill
              priority
              sizes="(max-width: 1024px) 92vw, 960px"
              className="object-cover object-top"
            />
          ) : (
            <div aria-hidden="true" className={`absolute inset-0 bg-gradient-to-br ${project.accent}`} />
          )}
        </BrowserFrame>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_17rem] lg:gap-16">
          <div className="space-y-14">
            <section aria-labelledby="overview-heading">
              <h2 id="overview-heading" className="text-xl font-semibold tracking-tight">
                Overview
              </h2>
              <p className="mt-4 text-pretty text-lg leading-8 text-muted">{project.overview}</p>
            </section>

            <section aria-labelledby="features-heading">
              <h2 id="features-heading" className="text-xl font-semibold tracking-tight">
                Key features
              </h2>
              <ul className="mt-5 divide-y divide-line border-y border-line">
                {project.features.map((feature) => (
                  <li key={feature} className="flex gap-3.5 py-4 leading-7 text-muted">
                    <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-md bg-accent-soft text-accent-ink">
                      <Check aria-hidden="true" size={12} strokeWidth={3} />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <aside aria-label="Project details" className="lg:sticky lg:top-24 lg:self-start">
            <dl className="divide-y divide-line rounded-xl border border-line bg-surface">
              <div className="p-5">
                <dt className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-subtle">
                  Tech stack
                </dt>
                <dd>
                  <ul className="mt-3 flex flex-wrap gap-1.5">
                    {project.technologies.map((technology) => (
                      <Tag key={technology} className="bg-canvas">
                        {technology}
                      </Tag>
                    ))}
                  </ul>
                </dd>
              </div>
              <div className="p-5">
                <dt className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-subtle">
                  Links
                </dt>
                <dd className="mt-3 space-y-2 text-sm">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between gap-2 text-ink transition-colors hover:text-accent"
                    >
                      <span className="truncate">{displayAddress(project.demo)}</span>
                      <ArrowUpRight aria-hidden="true" size={14} className="shrink-0" />
                      <span className="sr-only">(opens in a new tab)</span>
                    </a>
                  )}
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between gap-2 text-ink transition-colors hover:text-accent"
                  >
                    <span className="truncate">Source code</span>
                    <ArrowUpRight aria-hidden="true" size={14} className="shrink-0" />
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                </dd>
              </div>
            </dl>
          </aside>
        </div>

        <nav aria-label="Next project" className="mt-20">
          <Link
            href={`/projects/${next.slug}`}
            className="group flex items-center justify-between gap-6 rounded-xl border border-line bg-surface p-6 transition-colors hover:border-line-strong sm:p-8"
          >
            <span>
              <span className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-subtle">
                Next project
              </span>
              <span className="mt-2 block text-xl font-semibold tracking-tight sm:text-2xl">
                {next.title}
              </span>
            </span>
            <ArrowRight
              aria-hidden="true"
              size={22}
              className="shrink-0 text-muted transition-transform duration-300 group-hover:translate-x-1 group-hover:text-ink"
            />
          </Link>
        </nav>
      </article>
    </main>
  );
}
