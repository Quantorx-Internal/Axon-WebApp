import { getLenis } from "./smoothScroll";

/**
 * Smoothly scrolls to a section. Uses Lenis when available (so the motion
 * matches the page's smooth-scroll feel), otherwise falls back to a manual
 * eased rAF animation for reduced-motion / no-Lenis environments.
 */
export function scrollTo(sectionId, offset = 80, duration = 1.2) {
  const el = document.getElementById(sectionId);
  if (!el) return;

  const lenis = getLenis();
  if (lenis) {
    lenis.scrollTo(el, { offset: -offset, duration });
    return;
  }

  // Fallback: cubic ease-in-out rAF scroll.
  const start = window.scrollY;
  const target = el.getBoundingClientRect().top + window.scrollY - offset;
  const distance = target - start;
  if (Math.abs(distance) < 1) return;

  const ms = duration * 1000;
  let startTime = null;

  const easeInOutCubic = (t) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

  const step = (timestamp) => {
    if (!startTime) startTime = timestamp;
    const progress = Math.min((timestamp - startTime) / ms, 1);
    window.scrollTo(0, start + distance * easeInOutCubic(progress));
    if (progress < 1) requestAnimationFrame(step);
  };

  requestAnimationFrame(step);
}
