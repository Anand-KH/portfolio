import { Database, Layers3, Monitor, Server } from "lucide-react";

export function SkillsSection() {
  return (
      <section
        id="skills"
        className="border-t border-slate-200/80 bg-[#f7f8fa] px-6 py-24 lg:px-8 lg:py-32"
      >
        <div className="mx-auto w-full max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
              Technical expertise
            </p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.04em] text-slate-950 sm:text-5xl">
              Technologies I work with
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              A versatile technology stack for developing scalable applications,
              intuitive user experiences, and reliable backend systems.
            </p>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="flex size-11 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
                <Monitor aria-hidden="true" size={22} />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-slate-950">
                Frontend Development
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Building responsive, interactive, and user-friendly interfaces.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Angular",
                  "React.js",
                  "Next.js",
                  "JavaScript",
                  "TypeScript",
                  "HTML5",
                  "CSS3",
                  "Bootstrap",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="flex size-11 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
                <Server aria-hidden="true" size={22} />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-slate-950">
                Backend Development
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Developing scalable APIs and robust server-side applications.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Node.js",
                  "Express.js",
                  "NestJS",
                  "RESTful API Development",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="flex size-11 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
                <Database aria-hidden="true" size={22} />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-slate-950">
                Databases
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Designing and working with data stores for dependable
                applications.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["MongoDB", "MySQL", "SQL"].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="flex size-11 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
                <Layers3 aria-hidden="true" size={22} />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-slate-950">
                Cloud &amp; Development Tools
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Tools and practices that support reliable delivery.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "AWS S3",
                  "Git",
                  "GitHub",
                  "GitLab",
                  "Postman",
                  "VS Code",
                  "CI/CD",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
