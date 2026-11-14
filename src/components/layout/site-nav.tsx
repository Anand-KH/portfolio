"use client";

import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState, useSyncExternalStore } from "react";
import { buttonVariants } from "@/components/ui/button";
import { navLinks, profile } from "@/data/site";
import { cn } from "@/lib/utils";

// Theme state lives on <html class="dark">; subscribe to it instead of mirroring it in state.
function subscribeToTheme(callback: () => void) {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });
  return () => observer.disconnect();
}

const getIsDark = () => document.documentElement.classList.contains("dark");
const getServerIsDark = () => false;

function subscribeToScroll(callback: () => void) {
  window.addEventListener("scroll", callback, { passive: true });
  return () => window.removeEventListener("scroll", callback);
}

const getIsScrolled = () => window.scrollY > 8;
const getServerIsScrolled = () => false;

// "Contact" is shown as a button on desktop, so it is left out of the plain links.
const sectionLinks = navLinks.filter((link) => link.id !== "contact");

export function SiteNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>("");
  const isDark = useSyncExternalStore(subscribeToTheme, getIsDark, getServerIsDark);
  const isScrolled = useSyncExternalStore(subscribeToScroll, getIsScrolled, getServerIsScrolled);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  function toggleTheme() {
    const nextIsDark = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", nextIsDark);
    try {
      window.localStorage.setItem("portfolio-theme", nextIsDark ? "dark" : "light");
    } catch {
      // Storage can be unavailable (private mode); the toggle still works for this visit.
    }
  }

  const themeLabel = isDark ? "Switch to light theme" : "Switch to dark theme";
  const initials = profile.name
    .split(" ")
    .map((part) => part[0])
    .join("");

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors duration-300",
        isScrolled || isOpen
          ? "border-line bg-canvas/80 backdrop-blur-xl backdrop-saturate-150"
          : "border-transparent bg-canvas/0",
      )}
    >
      <nav aria-label="Primary" className="mx-auto w-full max-w-6xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-6">
          <Link
            href="/"
            className="group flex items-center gap-2.5 text-[0.9375rem] font-semibold tracking-tight text-ink"
          >
            <span
              aria-hidden="true"
              className="flex size-8 items-center justify-center rounded-lg bg-ink font-mono text-xs font-semibold text-canvas transition-transform group-hover:-rotate-6"
            >
              {initials}
            </span>
            {profile.name}
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {sectionLinks.map((link) => {
              const isActive = activeId === link.id;
              return (
                <Link
                  key={link.id}
                  href={`/#${link.id}`}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "rounded-md px-3 py-1.5 text-sm transition-colors",
                    isActive ? "bg-sunken text-ink" : "text-muted hover:text-ink",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="hidden items-center gap-2 lg:flex">
            <button
              type="button"
              aria-label={themeLabel}
              onClick={toggleTheme}
              className={buttonVariants({ variant: "ghost", size: "icon" })}
            >
              {isDark ? <Sun size={17} /> : <Moon size={17} />}
            </button>
            <Link href="/#contact" className={buttonVariants({ size: "sm" })}>
              Let&apos;s talk
              <ArrowUpRight aria-hidden="true" size={15} />
            </Link>
          </div>

          <div className="flex items-center gap-1 lg:hidden">
            <button
              type="button"
              aria-label={themeLabel}
              onClick={toggleTheme}
              className={buttonVariants({ variant: "ghost", size: "icon" })}
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              onClick={() => setIsOpen((open) => !open)}
              className={buttonVariants({ variant: "outline", size: "icon" })}
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div id="mobile-navigation" className="border-t border-line pb-4 pt-2 lg:hidden">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={`/#${link.id}`}
                onClick={() => setIsOpen(false)}
                aria-current={activeId === link.id ? "true" : undefined}
                className={cn(
                  "flex items-center justify-between rounded-md px-3 py-3 text-[0.9375rem] transition-colors hover:bg-sunken hover:text-ink",
                  activeId === link.id ? "bg-sunken text-ink" : "text-muted",
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
