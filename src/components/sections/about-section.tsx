import { Code2, Layers3, UsersRound } from "lucide-react";
import { Eyebrow, Section } from "@/components/ui/section";

const pillars = [
  {
    icon: Code2,
    title: "Engineering excellence",
    text: "Clean, maintainable, and efficient code.",
  },
  {
    icon: Layers3,
    title: "End-to-end ownership",
    text: "From requirements to implementation and delivery.",
  },
  {
    icon: UsersRound,
    title: "Team collaboration",
    text: "Clear communication and Agile teamwork.",
  },
];

export function AboutSection() {
  return (
    <Section id="about">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Eyebrow index="01">About me</Eyebrow>
          <h2
            id="about-heading"
            className="mt-5 max-w-md text-balance text-3xl font-semibold leading-[1.1] tracking-[-0.035em] text-ink sm:text-4xl lg:text-[2.75rem]"
          >
            Building solutions that make a difference.
          </h2>
        </div>

        <div>
          <div className="space-y-5 text-pretty text-base leading-7 text-muted sm:text-lg sm:leading-8">
            <p className="text-ink">
              I&apos;m Anand K H, a Full Stack Developer with 5+ years of experience
              building scalable, reliable, and user-focused web applications.
            </p>
            <p>
              My expertise spans frontend and backend development, working with
              Angular, React.js, Next.js, Node.js, Express.js, NestJS, MongoDB, and
              Microsoft SQL Server.
              I enjoy transforming complex business requirements into practical technical
              solutions, developing RESTful APIs, optimizing application
              performance, and delivering features from concept to deployment.
            </p>
            <p>
              I value clean code, thoughtful architecture, collaboration, and
              continuous learning to build applications that are maintainable and
              ready to scale.
            </p>
          </div>

          <ul className="mt-12 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-3">
            {pillars.map(({ icon: Icon, title, text }) => (
              <li key={title} className="bg-surface p-5">
                <Icon aria-hidden="true" className="text-accent" size={20} strokeWidth={1.75} />
                <p className="mt-4 text-sm font-medium text-ink">{title}</p>
                <p className="mt-1.5 text-sm leading-6 text-subtle">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
