import { ArrowRight, Download, MapPin } from "lucide-react";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { buttonVariants } from "@/components/ui/button";
import { experience, profile, stats } from "@/data/site";
import { cn } from "@/lib/utils";

const current = experience.find((item) => item.current);
const heroStats = stats.slice(0, 3);

export function HeroSection() {
  return (
    <section aria-labelledby="hero-heading" className="relative isolate -mt-16 overflow-hidden pt-16">
      <div aria-hidden="true" className="bg-grid absolute inset-0 -z-10" />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 -z-10 h-[28rem] w-[56rem] -translate-x-1/2 rounded-full bg-accent/15 blur-[120px] dark:bg-accent/10"
      />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-6 pb-20 pt-14 sm:pt-20 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16 lg:px-8 lg:pb-28 lg:pt-24">
        <div className="reveal">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/80 py-1 pl-2 pr-3.5 text-[0.8125rem] text-muted shadow-xs backdrop-blur">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            Available for new opportunities
          </div>

          <p className="mt-8 font-mono text-sm text-subtle">
            Hi, I&apos;m <span className="text-ink">{profile.name}</span> &mdash; {profile.role}
          </p>

          <h1
            id="hero-heading"
            className="mt-4 text-balance text-[2.75rem] font-semibold leading-[1.04] tracking-[-0.045em] text-ink sm:text-6xl lg:text-[4.25rem]"
          >
            Building scalable applications that{" "}
            <span className="bg-gradient-to-br from-accent to-violet-500 bg-clip-text text-transparent dark:to-violet-300">
              drive business forward.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-lg leading-8 text-muted">
            {profile.tagline}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="#projects" className={buttonVariants()}>
              View my work
              <ArrowRight aria-hidden="true" size={16} />
            </a>
            <a href={profile.resume} download className={buttonVariants({ variant: "outline" })}>
              <Download aria-hidden="true" size={16} />
              Download resume
            </a>
            <div className="flex gap-1 sm:ml-2">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className={buttonVariants({ variant: "ghost", size: "icon", className: "size-11" })}
              >
                <FaGithub aria-hidden="true" size={18} />
                <span className="sr-only">GitHub (opens in a new tab)</span>
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className={buttonVariants({ variant: "ghost", size: "icon", className: "size-11" })}
              >
                <FaLinkedin aria-hidden="true" size={18} />
                <span className="sr-only">LinkedIn (opens in a new tab)</span>
              </a>
            </div>
          </div>

          <dl className="mt-14 grid max-w-xl grid-cols-3 divide-x divide-line border-y border-line">
            {heroStats.map((stat, index) => (
              <div key={stat.label} className={cn("flex flex-col py-5", index === 0 ? "pr-4" : "px-4 sm:px-6")}>
                <dt className="text-xs leading-5 text-subtle sm:text-[0.8125rem]">{stat.label}</dt>
                <dd className="order-first text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="reveal relative mx-auto w-full max-w-sm lg:mr-0">
          <div className="relative rounded-2xl border border-line bg-surface p-1.5 shadow-[0_24px_64px_-24px_rgb(9_9_11/0.25)] dark:shadow-[0_24px_64px_-24px_rgb(0_0_0/0.8)]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[0.8rem] bg-sunken">
              <Image
                src={profile.portrait}
                alt="Portrait of Anand K H"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 384px"
                className="object-cover"
              />
            </div>
            <div className="flex items-center justify-between gap-3 px-3.5 py-3.5">
              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-ink">{profile.title}</p>
                <p className="mt-0.5 flex items-center gap-1 text-xs text-subtle">
                  <MapPin aria-hidden="true" size={12} />
                  Bengaluru, India
                </p>
              </div>
              <span className="shrink-0 rounded-md bg-accent-soft px-2 py-1 font-mono text-[0.6875rem] font-medium text-accent-ink">
                {profile.years} yrs
              </span>
            </div>
          </div>

          {current && (
            <div className="absolute -left-6 top-8 hidden max-w-[15rem] rounded-xl border border-line bg-surface/90 p-3.5 shadow-lg shadow-zinc-950/5 backdrop-blur sm:block lg:-left-14">
              <p className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-subtle">
                Currently
              </p>
              <p className="mt-1.5 text-sm font-medium leading-5 text-ink">{current.role}</p>
              <p className="mt-0.5 text-xs leading-5 text-muted">{current.company}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
