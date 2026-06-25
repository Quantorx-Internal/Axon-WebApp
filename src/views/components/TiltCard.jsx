import { useRef } from "react";
import { cn } from "../../lib/utils";

/**
 * Pointer-driven 3D tilt + spotlight. Tracks the cursor to rotate the card in
 * perspective and exposes --mx/--my so children can render a glow that follows
 * the pointer. One handler, no re-renders. Degrades to flat on touch.
 */
export function TiltCard({ children, className, max = 6 }) {
  const ref = useRef(null);

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
    el.style.setProperty("--rx", `${(-py * max).toFixed(2)}deg`);
    el.style.setProperty("--ry", `${(px * max).toFixed(2)}deg`);
  };

  const reset = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{
        transform:
          "perspective(1000px) rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg))",
      }}
      className={cn(
        "transition-transform duration-300 ease-out will-change-transform [transform-style:preserve-3d]",
        className
      )}
    >
      {children}
    </div>
  );
}
