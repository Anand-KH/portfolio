import type { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

type RevealProps = PropsWithChildren<{
  className?: string;
}>;

/**
 * Fades content in as it scrolls into view. Pure CSS (see `.reveal` in
 * globals.css): the content is visible in the server HTML, so crawlers,
 * link previews and no-JS visitors always see it.
 */
export function Reveal({ children, className }: RevealProps) {
  return <div className={cn("reveal", className)}>{children}</div>;
}
