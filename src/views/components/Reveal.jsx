import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "../../lib/utils";

gsap.registerPlugin(ScrollTrigger);

const prefersReduced = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Scroll-triggered reveal. Animates the wrapper in, or — when `stagger` is
 * set — its direct children one after another.
 */
export function Reveal({
  children,
  as: Tag = "div",
  className,
  y = 30,
  delay = 0,
  duration = 0.9,
  stagger = 0,
  start = "top 86%",
  once = true,
}) {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = stagger ? Array.from(el.children) : el;

    if (prefersReduced()) {
      gsap.set(targets, { opacity: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration,
          delay,
          ease: "power3.out",
          stagger,
          clearProps: "transform",
          scrollTrigger: { trigger: el, start, once },
        }
      );
    }, el);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}

/**
 * Word-by-word headline reveal (kore.ai-style). Renders a string as animated
 * inline words. Compose several pieces for multi-color / gradient headlines.
 */
export function WordReveal({
  text,
  as: Tag = "span",
  className,
  wordClassName,
  delay = 0,
  duration = 0.85,
  stagger = 0.08,
  start = "top 92%",
}) {
  const ref = useRef(null);
  const words = String(text).split(" ");

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const spans = el.querySelectorAll("[data-word]");

    if (prefersReduced()) {
      gsap.set(spans, { opacity: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        spans,
        { yPercent: 60, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration,
          delay,
          ease: "power3.out",
          stagger,
          clearProps: "transform",
          scrollTrigger: { trigger: el, start, once: true },
        }
      );
    }, el);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Tag ref={ref} className={className}>
      {words.map((word, i) => (
        <span
          key={i}
          data-word
          className={cn("inline-block will-change-transform mr-[0.26em]", wordClassName)}
        >
          {word}
        </span>
      ))}
    </Tag>
  );
}
