import { ArrowDown, ArrowUpRight, Download, Sparkles } from "lucide-react";
import Image from "next/image";
import { SiteNav } from "@/components/layout/site-nav";
import { Reveal } from "@/components/ui/reveal";

export function HeroSection() {
  return (
      <section className="relative isolate overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 -z-10 h-[34rem] bg-[radial-gradient(circle_at_top_right,_rgba(129,140,248,0.2),_transparent_42%),radial-gradient(circle_at_top_left,_rgba(45,212,191,0.12),_transparent_32%)]"
        />

        <SiteNav />

        <div className="mx-auto grid min-h-[calc(100vh-88px)] w-full max-w-7xl items-center gap-12 px-6 py-16 sm:gap-16 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 lg:px-8 lg:py-24">
          <Reveal className="max-w-3xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white/70 px-3.5 py-2 text-sm font-medium text-indigo-700 shadow-sm">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
              </span>
              Available for new opportunities
            </div>

            <p className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
              <Sparkles aria-hidden="true" size={16} />
              Software Engineer
            </p>

            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.08] tracking-[-0.04em] text-slate-950 sm:text-6xl lg:text-7xl">
              Building scalable applications that{" "}
              <span className="text-indigo-600">drive business forward.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              Full Stack Developer with 5+ years of experience building
              scalable applications with Angular, React.js, Node.js,
              Express.js, and MongoDB.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-slate-950/10 transition hover:-translate-y-0.5 hover:bg-indigo-700"
              >
                View My Projects
                <ArrowUpRight aria-hidden="true" size={18} />
              </a>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50"
              >
                <Download aria-hidden="true" size={17} />
                Download Resume
              </a>
            </div>

            <a
              href="#about"
              className="mt-16 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-indigo-600"
            >
              Scroll to explore
              <ArrowDown aria-hidden="true" size={16} />
            </a>
          </Reveal>

          <Reveal className="relative mx-auto w-full max-w-lg lg:ml-auto" delay={0.12}>
            <div className="absolute -inset-6 rounded-[2.5rem] bg-[radial-gradient(circle_at_top_right,_rgba(129,140,248,0.28),_transparent_60%)] blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/90 bg-white p-2 shadow-2xl shadow-indigo-950/10 transition duration-300 hover:-translate-y-1 hover:shadow-indigo-950/15">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-slate-100">
                <Image
                  src="/images/Profile-new.png"
                  alt="Portrait of Anand K H"
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 40vw"
                  className="object-cover"
                />
              </div>
              <div className="flex items-center justify-between px-5 py-4">
                <div>
                  <p className="text-sm font-semibold text-slate-950">
                    Full Stack Developer
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Building with purpose
                  </p>
                </div>
                <span className="rounded-full bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-700">
                  5+ years
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
  );
}
