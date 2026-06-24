import { useRef } from "react";
import { cn } from "../../lib/utils";

/**
 * Magnetic hover — gently pulls its child toward the cursor, then snaps back.
 * A signature award-site micro-interaction.
 */
export function Magnetic({ children, strength = 0.35, className }) {
  const ref = useRef(null);

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);
    el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  };

  const onLeave = () => {
    const el = ref.current;
    if (el) el.style.transform = "translate(0px, 0px)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={cn("inline-flex transition-transform duration-300 ease-out", className)}
    >
      {children}
    </div>
  );
}
