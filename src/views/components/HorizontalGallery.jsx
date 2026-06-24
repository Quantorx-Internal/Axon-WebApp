import { useRef, useLayoutEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "../../lib/utils";

gsap.registerPlugin(ScrollTrigger);

function pinSupported() {
  if (typeof window === "undefined") return false;
  return (
    window.matchMedia("(pointer: fine)").matches &&
    window.matchMedia("(min-width: 1024px)").matches &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

/**
 * Horizontal scroll-pinned track (Lusion-style). On desktop, the section pins
 * and vertical scroll drives horizontal movement. On touch / small / reduced
 * environments it falls back to a native horizontal scroll.
 */
export function HorizontalGallery({ children, className }) {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const [pinned] = useState(pinSupported);

  useLayoutEffect(() => {
    if (!pinned) return;
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const ctx = gsap.context(() => {
      const distance = () => Math.max(0, track.scrollWidth - window.innerWidth + 96);
      gsap.to(track, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${distance()}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, [pinned]);

  if (!pinned) {
    return (
      <div className={cn("overflow-x-auto hide-scrollbar", className)}>
        <div className="flex gap-5 px-5 md:px-8 w-max snap-x snap-mandatory">
          {children}
        </div>
      </div>
    );
  }

  return (
    <div
      ref={sectionRef}
      className={cn("relative h-screen flex items-center overflow-hidden", className)}
    >
      <div ref={trackRef} className="flex gap-6 px-5 md:px-8 will-change-transform">
        {children}
      </div>
    </div>
  );
}
