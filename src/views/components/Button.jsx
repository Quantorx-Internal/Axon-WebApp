import { FaArrowRight } from "react-icons/fa";
import { cn } from "../../lib/utils";

const base =
  "group inline-flex items-center justify-center gap-2.5 font-mono text-xs md:text-[0.78rem] font-medium uppercase tracking-[0.08em] rounded-[10px] transition-all duration-300 ease-smooth whitespace-nowrap cursor-pointer select-none";

const variants = {
  // Primary — near-black, kore.ai signature
  primary: "bg-ink text-white hover:bg-ink-700 hover:-translate-y-[1px]",
  // Secondary — white with hairline border
  secondary:
    "bg-white text-ink border border-line hover:border-ink/40 hover:-translate-y-[1px]",
  ghost:
    "bg-white text-ink border border-line hover:border-ink/40 hover:-translate-y-[1px]",
  // On dark backgrounds
  white: "bg-white text-ink hover:bg-cloud hover:-translate-y-[1px]",
  outlineLight:
    "bg-transparent text-white border border-white/35 hover:bg-white/10 hover:-translate-y-[1px]",
  // Legacy alias used by pricing
  transparent:
    "bg-white text-ink border border-line hover:border-ink/40 hover:-translate-y-[1px]",
  // Optional brand-blue (used sparingly)
  accent: "bg-accent text-white hover:bg-accent-ink hover:-translate-y-[1px]",
};

export default function Button({
  text,
  children,
  variant = "primary",
  className = "",
  onClick,
  href,
  withArrow = false,
  bullet = true,
  type = "button",
  disabled = false,
}) {
  const classes = cn(base, variants[variant] || variants.primary, className);

  const mark = withArrow ? (
    <FaArrowRight className="text-[0.85em] transition-transform duration-300 group-hover:translate-x-1" />
  ) : bullet ? (
    <span className="text-[1.15em] leading-none -mt-px transition-transform duration-300 group-hover:translate-x-0.5">
      •
    </span>
  ) : null;

  const content = (
    <>
      {text || children}
      {mark}
    </>
  );

  if (href) {
    return (
      <a className={classes} href={href} onClick={onClick}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick} type={type} disabled={disabled}>
      {content}
    </button>
  );
}
