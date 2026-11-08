import { Download, FileText } from "lucide-react";

export function ResumeSection() {
  return (
      <section
        id="resume"
        className="border-t border-slate-200/80 bg-[#f7f8fa] px-6 py-24 lg:px-8 lg:py-32"
      >
        <div className="mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-7 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-950/5 sm:p-8 lg:flex-row lg:items-center">
          <div className="flex items-start gap-4">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
              <FileText aria-hidden="true" size={21} />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
                My resume
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-[-0.03em] text-slate-950">
                Explore my professional journey.
              </h2>
              <p className="mt-3 max-w-2xl leading-7 text-slate-600">
                Get a closer look at my experience, technical skills, projects,
                and professional background.
              </p>
            </div>
          </div>
          <div className="flex w-full shrink-0 flex-col gap-3 sm:w-auto sm:flex-row">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700 sm:w-auto"
            >
              View Resume
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700 sm:w-auto"
            >
              <Download aria-hidden="true" size={17} />
              Download Resume
            </a>
          </div>
        </div>
      </section>
  );
}
