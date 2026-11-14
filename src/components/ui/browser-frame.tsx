import type { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

type BrowserFrameProps = PropsWithChildren<{
  /** Address shown in the toolbar, e.g. "formacv.surge.sh". */
  address?: string;
  className?: string;
}>;

/** A minimal browser window around a project screenshot. */
export function BrowserFrame({ address, className, children }: BrowserFrameProps) {
  return (
    <div
      className={cn(
        "flex flex-col overflow-hidden rounded-lg border border-line bg-surface shadow-[0_16px_48px_-20px_rgb(9_9_11/0.25)] dark:shadow-[0_16px_48px_-20px_rgb(0_0_0/0.8)]",
        className,
      )}
    >
      <div aria-hidden="true" className="flex h-8 shrink-0 items-center gap-3 border-b border-line bg-sunken/70 px-3">
        <div className="flex gap-1.5">
          <span className="size-2 rounded-full bg-line-strong" />
          <span className="size-2 rounded-full bg-line-strong" />
          <span className="size-2 rounded-full bg-line-strong" />
        </div>
        {address && (
          <span className="mx-auto max-w-[60%] truncate rounded bg-surface px-2.5 py-0.5 font-mono text-[0.625rem] text-subtle">
            {address}
          </span>
        )}
      </div>
      <div className="relative flex-1 bg-sunken">{children}</div>
    </div>
  );
}

/** "https://formacv.surge.sh/" -> "formacv.surge.sh", "github.com/user/repo" for repos. */
export function displayAddress(url: string) {
  try {
    const { host, pathname } = new URL(url);
    return host === "github.com" ? `${host}${pathname}` : host;
  } catch {
    return url;
  }
}
