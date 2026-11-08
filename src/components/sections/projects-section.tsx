import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

export function ProjectsSection() {
  return (
      <section
        id="projects"
        className="border-t border-slate-200/80 bg-white px-6 py-24 lg:px-8 lg:py-32"
      >
        <div className="mx-auto w-full max-w-7xl">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
                Selected work
              </p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.04em] text-slate-950 sm:text-5xl">
                Projects built with curiosity and care.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                A selection of applications exploring frontend experiences,
                APIs, data, and full-stack development.
              </p>
            </div>
            <a
              href="https://github.com/Anand-KH"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition hover:text-indigo-600"
            >
              View GitHub profile
              <FaGithub aria-hidden="true" size={18} />
            </a>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {[
              {
                title: "FormaCV",
                description:
                  "A browser-based resume builder and ATS analyzer with editable templates, document import, live preview, and local resume storage.",
                technologies: ["React 19", "TypeScript", "Material UI"],
                href: "https://github.com/Anand-KH/FormaCV-Resume-Builder-ATS-Analyzer",
                demo: "https://formacv.surge.sh/",
                image: "/images/formacv.png",
                accent: "from-indigo-500 to-violet-500",
              },
              {
                title: "Skycast Weather Dashboard",
                description:
                  "A responsive weather dashboard using the OpenWeather API to show current conditions and detailed city forecasts.",
                technologies: ["React.js", "REST API", "JavaScript"],
                href: "https://github.com/Anand-KH/Weather_api_react",
                demo: "https://weather_react.surge.sh/",
                image: "/images/skycast.png?v=2",
                accent: "from-emerald-400 to-teal-500",
              },
              {
                title: "Credit Card Application",
                description:
                  "A full-stack application for applicant submission, eligibility evaluation, approvals, card dispatch, reporting, audit history, and role-based authentication.",
                technologies: ["Angular", "Express.js", "MongoDB"],
                href: "https://github.com/Anand-KH/Credit-Carrd-Application",
                accent: "from-sky-400 to-indigo-500",
              },
              /*
              {
                title: "BioDataBlog",
                description:
                  "A full-stack blog application with a separated frontend, backend middleware, database, models, and routing layers.",
                technologies: ["JavaScript", "Node.js", "MongoDB"],
                href: "https://github.com/Anand-KH/BioDataBlog",
                accent: "from-cyan-400 to-blue-500",
              },
              */
            ].map((project) => (
              <article
                key={project.title}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-[#f7f8fa] transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-950/10"
              >
                {"image" in project && project.image ? (
                  <div className="relative h-40 overflow-hidden bg-slate-100">
                    <Image
                      src={project.image}
                      alt={`${project.title} project preview`}
                      fill
                      sizes="(max-width: 768px) 90vw, 45vw"
                      className="object-cover object-top transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                    <span className="absolute left-7 top-7 text-sm font-semibold uppercase tracking-[0.2em] text-white/90">
                      Live demo project
                    </span>
                  </div>
                ) : (
                  <div
                    className={`relative h-40 overflow-hidden bg-gradient-to-br ${project.accent} p-7`}
                  >
                    <div className="absolute -right-10 -top-20 size-56 rounded-full border border-white/25" />
                    <div className="absolute -bottom-28 -left-10 size-64 rounded-full border border-white/20" />
                    <span className="relative text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
                      {"demo" in project && project.demo
                        ? "Live demo project"
                        : "GitHub project"}
                    </span>
                  </div>
                )}
                <div className="p-7">
                  <h3 className="mb-4 text-2xl font-semibold tracking-tight text-slate-950">
                    {project.title}
                  </h3>
                  <p className="min-h-20 leading-7 text-slate-600">
                    {project.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 shadow-sm"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-slate-950 transition group-hover:text-indigo-600"
                  >
                    View on GitHub
                    <ArrowUpRight aria-hidden="true" size={17} />
                  </a>
                  {"demo" in project && project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="ml-5 mt-7 inline-flex items-center gap-2 text-sm font-semibold text-slate-950 transition hover:text-indigo-600"
                    >
                      Live demo
                      <ArrowUpRight aria-hidden="true" size={17} />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
  );
}
