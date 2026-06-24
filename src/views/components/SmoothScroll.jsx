import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { setLenis } from "@/lib/smoothScroll";

gsap.registerPlugin(ScrollTrigger);

/**
 * Wraps the app in a Lenis-powered smooth scroll context and keeps GSAP
 * ScrollTrigger perfectly in sync with it. Respects reduced-motion.
 */
export default function SmoothScroll({ children }) {
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      // Still register a no-op so scrollTo falls back gracefully.
      return;
    }

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.6,
      lerp: 0.1,
    });

    setLenis(lenis);

    // Drive ScrollTrigger from Lenis' scroll events.
    lenis.on("scroll", ScrollTrigger.update);

    const onRaf = (time) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(onRaf);
    gsap.ticker.lagSmoothing(0);

    // Recalculate trigger positions once fonts/images have settled.
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    const refreshTimer = setTimeout(refresh, 600);

    return () => {
      clearTimeout(refreshTimer);
      window.removeEventListener("load", refresh);
      gsap.ticker.remove(onRaf);
      lenis.destroy();
      setLenis(null);
    };
  }, []);

  return children;
}
