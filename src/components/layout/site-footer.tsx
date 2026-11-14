import { ArrowUp } from "lucide-react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { navLinks, profile } from "@/data/site";

async function getCurrentYear() {
  "use cache";
  return new Date().getFullYear();
}

const socialClass =
  "flex size-9 items-center justify-center rounded-lg border border-line text-muted transition-colors hover:border-line-strong hover:text-ink";

export async function SiteFooter() {
  const year = await getCurrentYear();

  return (
    <footer className="border-t border-line bg-canvas px-6 lg:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <div className="flex flex-col gap-8 py-12 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="text-[0.9375rem] font-semibold tracking-tight text-ink">{profile.name}</p>
            <p className="mt-2 text-sm leading-6 text-muted">
              {profile.role} based in Bengaluru, building dependable web applications
              end to end.
            </p>
            <div className="mt-5 flex gap-2">
              <a href={profile.github} target="_blank" rel="noreferrer" className={socialClass}>
                <FaGithub aria-hidden="true" size={16} />
                <span className="sr-only">GitHub (opens in a new tab)</span>
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className={socialClass}>
                <FaLinkedin aria-hidden="true" size={16} />
                <span className="sr-only">LinkedIn (opens in a new tab)</span>
              </a>
            </div>
          </div>

          <nav aria-label="Footer">
            <ul className="grid grid-cols-2 gap-x-12 gap-y-2.5 text-sm sm:grid-cols-3">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <Link href={`/#${link.id}`} className="text-muted transition-colors hover:text-ink">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex flex-col-reverse gap-3 border-t border-line py-6 text-sm text-subtle sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {profile.name}. All rights reserved.
          </p>
          <a
            href="#main"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-ink"
          >
            Back to top
            <ArrowUp aria-hidden="true" size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
