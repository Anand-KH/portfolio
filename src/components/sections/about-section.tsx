import { Code2, Layers3, UsersRound } from "lucide-react";

export function AboutSection() {
  return (
      <section
        id="about"
        className="border-t border-slate-200/80 bg-white px-6 py-24 lg:px-8 lg:py-32"
      >
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-24">
            <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
              About me
            </p>
            <h2 className="mt-4 max-w-md text-4xl font-semibold leading-tight tracking-[-0.04em] text-slate-950 sm:text-5xl">
              Building solutions that make a difference.
            </h2>
            </div>

            <div className="space-y-5 text-lg leading-8 text-slate-600">
              <p className="font-semibold text-slate-950">
                I&apos;m Anand K H, a Full Stack Developer with 5+ years of
                experience building scalable, reliable, and user-focused web
                applications.
              </p>
              <p>
                My expertise spans frontend and backend development, working
                with Angular, React.js, Node.js, Express.js, and MongoDB. I
                enjoy transforming complex business requirements into
                practical technical solutions, developing RESTful APIs,
                optimizing application performance, and delivering features
                from concept to deployment.
              </p>
              <p>
                I value clean code, thoughtful architecture, collaboration,
                and continuous learning to build applications that are
                maintainable and ready to scale.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-3 border-t border-slate-200 pt-5 sm:grid-cols-3">
            <div className="rounded-2xl border border-indigo-100 bg-indigo-50/60 p-5">
              <Code2 aria-hidden="true" className="text-indigo-600" size={22} />
              <p className="mt-6 font-semibold text-slate-950">
                Engineering Excellence
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Clean, maintainable, and efficient code.
              </p>
            </div>
            <div className="rounded-2xl border border-indigo-100 bg-indigo-50/60 p-5">
              <Layers3 aria-hidden="true" className="text-indigo-600" size={22} />
              <p className="mt-6 font-semibold text-slate-950">
                End-to-End Ownership
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                From requirements to implementation and delivery.
              </p>
            </div>
            <div className="rounded-2xl border border-indigo-100 bg-indigo-50/60 p-5">
              <UsersRound
                aria-hidden="true"
                className="text-indigo-600"
                size={22}
              />
              <p className="mt-6 font-semibold text-slate-950">
                Team Collaboration
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Clear communication and Agile teamwork.
              </p>
            </div>
          </div>
        </div>
      </section>
  );
}
