"use client";

import { Menu, Moon, Sun, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Experience", "#experience"],
  ["Projects", "#projects"],
  ["Education", "#education"],
  ["Resume", "#resume"],
  ["Contact", "#contact"],
] as const;

export function SiteNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("portfolio-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldUseDark = savedTheme === "dark" || (!savedTheme && prefersDark);
    document.documentElement.classList.toggle("dark", shouldUseDark);
    requestAnimationFrame(() => setIsDark(shouldUseDark));
  }, []);

  function toggleTheme() {
    const nextIsDark = !isDark;
    setIsDark(nextIsDark);
    document.documentElement.classList.toggle("dark", nextIsDark);
    window.localStorage.setItem("portfolio-theme", nextIsDark ? "dark" : "light");
  }

  return (
    <nav className="mx-auto w-full max-w-7xl px-6 py-6 lg:px-8">
      <div className="flex items-center justify-between">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight transition-opacity hover:opacity-70"
        >
          Anand K H<span className="text-indigo-600">.</span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-indigo-600"
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-white"
          >
            Let&apos;s Talk
          </a>
          <button
            type="button"
            aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
            onClick={toggleTheme}
            className="flex size-10 items-center justify-center rounded-full border border-slate-200 bg-white/70 text-slate-700 shadow-sm transition hover:border-indigo-200 hover:text-indigo-600"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setIsOpen((open) => !open)}
          className="flex size-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-indigo-200 hover:text-indigo-600 md:hidden"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isOpen && (
        <div
          id="mobile-navigation"
          className="mt-4 rounded-2xl border border-slate-200 bg-white p-3 shadow-lg shadow-slate-950/5 md:hidden"
        >
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={() => setIsOpen(false)}
              className="block rounded-xl px-3 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-indigo-50 hover:text-indigo-700"
            >
              {label}
            </a>
          ))}
          <button
            type="button"
            onClick={toggleTheme}
            className="mt-2 flex w-full items-center gap-2 rounded-xl px-3 py-2.5 text-left text-sm font-medium text-slate-700 transition hover:bg-indigo-50 hover:text-indigo-700"
          >
            {isDark ? <Sun size={17} /> : <Moon size={17} />}
            {isDark ? "Light theme" : "Dark theme"}
          </button>
        </div>
      )}
    </nav>
  );
}
