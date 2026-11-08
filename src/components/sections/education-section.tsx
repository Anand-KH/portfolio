import { GraduationCap, MapPin } from "lucide-react";

export function EducationSection() {
  return (
      <section
        id="education"
        className="border-t border-slate-200/80 bg-white px-6 py-24 lg:px-8 lg:py-32"
      >
        <div className="mx-auto w-full max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
              Education
            </p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.04em] text-slate-950 sm:text-5xl">
              The foundation behind my craft.
            </h2>
          </div>

          <article className="mt-10 rounded-3xl border border-slate-200 bg-[#f7f8fa] p-6 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-950/5 sm:p-8">
            <div className="flex flex-col gap-7 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex items-start gap-5">
                <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
                  <GraduationCap aria-hidden="true" size={27} />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-indigo-600">
                    Bachelor&apos;s degree
                  </p>
                  <h3 className="mt-2 max-w-2xl text-xl font-semibold leading-snug text-slate-950 sm:text-2xl">
                    Bachelor of Engineering (B.E.)
                  </h3>
                  <p className="mt-1 text-base font-medium text-slate-700">
                    Electronics and Communication
                  </p>
                </div>
              </div>
              <div className="flex shrink-0 flex-wrap gap-2 sm:justify-end">
                <span className="rounded-full bg-white px-3.5 py-2 text-sm font-semibold text-slate-600 shadow-sm">
                  2016 – 2020
                </span>
                <span className="rounded-full bg-indigo-100 px-3.5 py-2 text-sm font-semibold text-indigo-700">
                  CGPA: 6.48
                </span>
              </div>
            </div>
            <div className="mt-7 border-t border-slate-200 pt-5">
              <p className="font-semibold text-slate-950">
                RAJARAJESHWARI COLLEGE OF ENGINEERING
              </p>
              <p className="mt-2 inline-flex items-center gap-2 text-sm text-slate-500">
                <MapPin aria-hidden="true" className="text-indigo-600" size={16} />
                Bengaluru, Karnataka
              </p>
            </div>
          </article>
        </div>
      </section>
  );
}
