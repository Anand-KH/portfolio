import { ArrowUpRight, Download, FileText, Mail, MapPin } from "lucide-react";
import type { ReactNode } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { buttonVariants } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { profile } from "@/data/site";

type ContactItem = {
  label: string;
  value: string;
  icon: ReactNode;
  href?: string;
  external?: boolean;
};

const contactItems: ContactItem[] = [
  {
    label: "Email",
    value: profile.email,
    icon: <Mail aria-hidden="true" size={16} />,
    href: `mailto:${profile.email}`,
  },
  {
    label: "LinkedIn",
    value: "Connect with me",
    icon: <FaLinkedin aria-hidden="true" size={16} />,
    href: profile.linkedin,
    external: true,
  },
  {
    label: "GitHub",
    value: "Browse my code",
    icon: <FaGithub aria-hidden="true" size={16} />,
    href: profile.github,
    external: true,
  },
  {
    label: "Location",
    value: profile.location,
    icon: <MapPin aria-hidden="true" size={16} />,
  },
];

export function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="border-t border-line bg-canvas px-6 py-20 sm:py-24 lg:px-8 lg:py-28"
    >
      <Reveal className="mx-auto w-full max-w-6xl">
        {/* Inverted panel: dark in light mode, light in dark mode. */}
        <div className="relative isolate overflow-hidden rounded-2xl bg-ink px-6 py-14 text-canvas sm:px-12 sm:py-16 lg:px-16 lg:py-20">
          <div
            aria-hidden="true"
            className="absolute -right-24 -top-32 -z-10 size-[28rem] rounded-full bg-accent/40 blur-[100px] dark:bg-accent/25"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 opacity-[0.08] [background-image:linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] [background-size:48px_48px] [mask-image:linear-gradient(to_bottom,#000,transparent)]"
          />

          <p className="flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.18em] text-canvas/60">
            <span className="text-indigo-300 dark:text-indigo-600">07</span>
            <span aria-hidden="true" className="h-px w-6 bg-canvas/25" />
            Contact
          </p>
          <h2
            id="contact-heading"
            className="mt-5 max-w-2xl text-balance text-3xl font-semibold leading-[1.1] tracking-[-0.035em] sm:text-5xl"
          >
            Let&apos;s build something meaningful.
          </h2>
          <p className="mt-5 max-w-xl text-pretty text-base leading-7 text-canvas/70 sm:text-lg sm:leading-8">
            Open to exciting opportunities, challenging projects, and collaborations.
            Feel free to reach out.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href={`mailto:${profile.email}`} className={buttonVariants({ variant: "inverse" })}>
              <Mail aria-hidden="true" size={16} />
              Send me an email
            </a>
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({ variant: "inverse-outline" })}
            >
              <FileText aria-hidden="true" size={16} />
              View resume
              <span className="sr-only">(opens in a new tab)</span>
            </a>
            <a href={profile.resume} download className={buttonVariants({ variant: "inverse-outline" })}>
              <Download aria-hidden="true" size={16} />
              Download
            </a>
          </div>

          <ul className="mt-14 grid gap-px overflow-hidden rounded-xl border border-canvas/15 bg-canvas/15 sm:grid-cols-2 lg:grid-cols-4">
            {contactItems.map((item) => {
              const content = (
                <>
                  <span className="flex items-center justify-between text-canvas/60">
                    <span className="flex items-center gap-2 font-mono text-[0.6875rem] uppercase tracking-[0.14em]">
                      {item.icon}
                      {item.label}
                    </span>
                    {item.href && (
                      <ArrowUpRight
                        aria-hidden="true"
                        size={15}
                        className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    )}
                  </span>
                  <span className="mt-3 block break-words text-sm font-medium text-canvas">
                    {item.value}
                  </span>
                </>
              );

              return (
                <li key={item.label} className="bg-ink">
                  {item.href ? (
                    <a
                      href={item.href}
                      {...(item.external ? { target: "_blank", rel: "noreferrer" } : {})}
                      className="group block h-full p-5 transition-colors hover:bg-canvas/5"
                    >
                      {content}
                      {item.external && <span className="sr-only">(opens in a new tab)</span>}
                    </a>
                  ) : (
                    <div className="h-full p-5">{content}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
