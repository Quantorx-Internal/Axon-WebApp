import { cn } from "../../lib/utils";

/**
 * Seamless infinite marquee. Children are duplicated so the track can loop
 * with a -50% translate. CSS-driven for buttery, GPU-friendly motion.
 */
export function Marquee({ children, duration = 38, reverse = false, className }) {
  return (
    <div className={cn("mask-fade-x overflow-hidden", className)}>
      <div
        className="flex w-max animate-marquee"
        style={{
          "--marquee-duration": `${duration}s`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
