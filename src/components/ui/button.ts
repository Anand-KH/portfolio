import { cva, type VariantProps } from "class-variance-authority";

/** Shared button styles, applied to <a> and <button> elements alike. */
export const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-[color,background-color,border-color,box-shadow,transform] duration-200 active:scale-[0.98]",
  {
    variants: {
      variant: {
        primary:
          "bg-ink text-canvas shadow-sm hover:bg-ink/85",
        accent:
          "bg-accent text-white shadow-sm shadow-accent/20 hover:bg-accent-strong dark:text-zinc-950",
        outline:
          "border border-line-strong bg-surface text-ink shadow-xs hover:border-ink/30 hover:bg-sunken",
        ghost: "text-muted hover:bg-sunken hover:text-ink",
        inverse:
          "bg-canvas text-ink shadow-sm hover:bg-canvas/85",
        "inverse-outline":
          "border border-canvas/25 text-canvas hover:border-canvas/50 hover:bg-canvas/10",
      },
      size: {
        sm: "h-9 px-3.5",
        md: "h-11 px-5",
        icon: "size-9",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;
