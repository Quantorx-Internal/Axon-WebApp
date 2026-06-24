import { useRef } from "react";
import { cn } from "../../lib/utils";

/**
 * 21st.dev-style spotlight card — a soft radial glow tracks the cursor across
 * the surface. Pure CSS variables, no re-renders. Degrades gracefully on touch
 * (the glow simply never appears).
 */
export function SpotlightCard({
  children,
  className,
  glow = "rgba(2,111,227,0.16)",
  radius = 360,
}) {
  const ref = useRef(null);

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      className={cn("group/spot relative overflow-hidden", className)}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/spot:opacity-100"
        style={{
          background: `radial-gradient(${radius}px circle at var(--mx, 50%) var(--my, 0%), ${glow}, transparent 70%)`,
        }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  );
}
