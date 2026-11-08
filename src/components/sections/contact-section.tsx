import { Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function ContactSection() {
  return (
      <section
        id="contact"
        className="border-t border-slate-200/80 bg-white px-6 py-24 lg:px-8 lg:py-32"
      >
        <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
              Contact
            </p>
            <h2 className="mt-4 max-w-2xl text-4xl font-semibold leading-tight tracking-[-0.04em] text-slate-950 sm:text-5xl">
              Let&apos;s build something meaningful.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
              Open to exciting opportunities, challenging projects, and
              collaborations. Feel free to reach out.
            </p>
            <a
              href="mailto:khanand1998@gmail.com"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-indigo-700"
            >
              <Mail aria-hidden="true" size={18} />
              Send Me an Email
            </a>
          </div>
          <div className="contact-details flex flex-col items-start gap-5 text-sm">
            <a
              href="mailto:khanand1998@gmail.com"
              className="group inline-flex items-center gap-3 font-semibold text-slate-700 transition hover:text-indigo-600"
            >
              <span className="flex size-9 items-center justify-center rounded-xl bg-rose-50 text-rose-500 transition group-hover:bg-rose-100">
                <Mail aria-hidden="true" size={18} />
              </span>
              khanand1998@gmail.com
            </a>
            <div className="inline-flex items-center gap-3 text-slate-600">
              <span className="flex size-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <MapPin aria-hidden="true" size={18} />
              </span>
              Bengaluru, Karnataka, India
            </div>
            <a
              href="https://www.linkedin.com/in/anand-k-h-0bb22416b/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 font-semibold text-slate-700 transition hover:text-indigo-600"
            >
              <span className="flex size-9 items-center justify-center rounded-xl bg-sky-50 text-sky-600 transition hover:bg-sky-100">
                <FaLinkedin aria-hidden="true" size={18} />
              </span>
              LinkedIn
            </a>
            <a
              href="https://github.com/Anand-KH"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 font-semibold text-slate-700 transition hover:text-indigo-600"
            >
              <span className="flex size-11 items-center justify-center rounded-xl bg-slate-100 text-slate-700 transition hover:bg-slate-200">
                <FaGithub aria-hidden="true" className="text-[#181717] dark:text-slate-100" size={18} />
              </span>
              GitHub
            </a>
          </div>
        </div>
      </section>
  );
}
