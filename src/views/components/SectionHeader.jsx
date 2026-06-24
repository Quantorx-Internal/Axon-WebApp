import { Reveal } from "./Reveal";
import { cn } from "../../lib/utils";

/**
 * Editorial section header — mono index + accent label on a short rule, then a
 * large left-aligned heading. Far less "centered SaaS template" than a centered
 * eyebrow+title block.
 */
export function SectionHeader({
  index,
  label,
  title,
  description,
  align = "left",
  dark = false,
  className,
  titleClassName,
}) {
  const centered = align === "center";
  return (
    <Reveal
      className={cn(
        "flex flex-col gap-5",
        centered && "items-center text-center",
        className
      )}
    >
      <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.14em]">
        {index && (
          <>
            <span className={dark ? "text-white/45" : "text-ink-muted"}>
              {index}
            </span>
            <span className={cn("h-px w-7", dark ? "bg-white/25" : "bg-ink/20")} />
          </>
        )}
        <span className={dark ? "text-accent-soft" : "text-accent"}>{label}</span>
      </div>

      <h2
        className={cn(
          "font-display font-medium tracking-[-0.035em] leading-[1.04] text-[2rem] md:text-4xl lg:text-[2.9rem] max-w-2xl",
          dark ? "text-white" : "text-ink",
          centered && "mx-auto",
          titleClassName
        )}
      >
        {title}
      </h2>

      {description && (
        <p
          className={cn(
            "text-lg leading-relaxed max-w-xl",
            dark ? "text-white/60" : "text-ink-soft",
            centered && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
