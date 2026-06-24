import { useScroll, useSpring, motion } from "framer-motion";

/**
 * Thin reading-progress bar pinned to the very top of the page — a small,
 * premium Lusion-style touch. Sits above the header but below overlays.
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.3,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 z-[150] h-[3px] origin-left bg-gradient-to-r from-accent via-accent-bright to-teal-bright"
      aria-hidden="true"
    />
  );
}
