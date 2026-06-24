import { cn } from "../../lib/utils";

/**
 * kore.ai-style section label — monospace, uppercase, tracked. Optionally
 * wrapped in the brand's { } brace motif.
 */
export function Eyebrow({ children, className, brace = false, light = false }) {
  return (
    <span
      className={cn(
        "font-mono text-xs font-medium uppercase tracking-[0.14em]",
        light ? "text-white/55" : "text-ink-muted",
        className
      )}
    >
      {brace ? (
        <>
          <span className="text-accent">{"{ "}</span>
          {children}
          <span className="text-accent">{" }"}</span>
        </>
      ) : (
        children
      )}
    </span>
  );
}
