export function ExperienceSection() {
  return (
      <section
        id="experience"
        className="border-t border-slate-200/80 bg-[#f7f8fa] px-6 py-24 lg:px-8 lg:py-32"
      >
        <div className="mx-auto w-full max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
              Experience
            </p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.04em] text-slate-950 sm:text-5xl">
              My professional journey
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Over 5 years of experience building enterprise applications,
              developing scalable solutions, collaborating with clients, and
              delivering end-to-end software products.
            </p>
          </div>

          <div className="relative mt-10 space-y-5 before:absolute before:bottom-4 before:left-[7px] before:top-4 before:w-px before:bg-indigo-300">
            {[
              {
                role: "Associate IT Consultant",
                company: "ITC Infotech India Pvt. Ltd.",
                period: "Jan 2024 – Present",
                current: true,
                summary:
                  "Developing full-stack enterprise application modules from scratch using Next.js and NestJS.",
                highlights: [
                  "Full-stack enterprise application development using Next.js, NestJS, Angular, Node.js and MongoDB.",
                  "Designed and implemented a Job Scheduler module supporting automated scheduling, sequential execution and workflow management.",
                  "Developed RESTful APIs and integrated frontend and backend services across microservices.",
                  "Collaborated with clients and cross-functional teams to understand requirements, resolve issues and deliver solutions.",
                ],
              },
              {
                role: "Software Engineer – Advanced",
                company: "Maiora IT Services and Consulting Pvt. Ltd.",
                period: "Dec 2021 – Dec 2023",
                summary:
                  "Built and maintained full-stack enterprise applications using Angular, Node.js, Express.js, and MongoDB.",
                highlights: [
                  "Developed and maintained enterprise applications using Angular, Node.js, Express.js and MongoDB.",
                  "Integrated HDFC Payment Gateway into a Learning Management System.",
                  "Implemented AWS S3 for storing images, videos and documents.",
                  "Contributed to 7 in-house projects, delivering application features, API integrations and enhancements.",
                  "Received multiple quarterly appreciations in recognition of consistent performance, technical contributions, and project delivery.",
                ],
              },
              {
                role: "Full Stack Developer",
                company: "AILOTTE Technologies Pvt. Ltd.",
                period: "Aug 2021 – Dec 2021",
                summary:
                  "Developed responsive React.js interfaces and scalable Node.js RESTful APIs.",
                highlights: [
                  "Developed responsive frontend applications using React.js.",
                  "Built Node.js RESTful APIs and improved frontend-backend integration and application reliability.",
                ],
              },
              {
                role: "Student Trainee",
                company: "Sweng Solutions",
                period: "Sep 2020 – Aug 2021",
                summary:
                  "Built responsive React.js interfaces and Node.js APIs as part of a collaborative product team.",
                highlights: [
                  "Developed responsive user interfaces using React.js.",
                  "Implemented Node.js APIs and collaborated with team members to develop and troubleshoot application features.",
                ],
              },
            ].map((experience) => (
              <article key={`${experience.company}-${experience.period}`} className="relative pl-7 sm:pl-9">
                <span className="absolute left-0 top-7 size-3.5 rounded-full border-[3px] border-[#f7f8fa] bg-indigo-600" />
                <div className="rounded-2xl border border-slate-200 bg-white px-5 py-5 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-950/5 sm:px-6 sm:py-6">
                  <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                    <div>
                      <h3 className="text-xl font-semibold text-slate-950">
                        {experience.role}
                      </h3>
                      <p className="mt-1 font-medium text-indigo-600">
                        {experience.company}
                      </p>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      {experience.current && (
                        <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                          Current Position
                        </span>
                      )}
                      <time className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                        {experience.period}
                      </time>
                    </div>
                  </div>
                  <p className="mt-4 leading-7 text-slate-600">
                    {experience.summary}
                  </p>
                  <ul className="mt-4 grid gap-2 text-sm leading-6 text-slate-600 sm:grid-cols-2">
                    {experience.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-2">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-indigo-500" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
  );
}
