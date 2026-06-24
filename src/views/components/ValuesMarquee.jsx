import { Marquee } from "./Marquee";

const words = [
  "Spatial Intelligence",
  "Agentic AI",
  "Location Data",
  "Enterprise Scale",
  "Real-time Insight",
];

/**
 * Oversized scrolling text band (Lusion-style) — alternating filled and
 * outlined words on near-black, separated by the brand mark.
 */
export function ValuesMarquee() {
  return (
    <section className="w-full bg-ink-900 py-10 md:py-16 overflow-hidden">
      <Marquee duration={30}>
        {words.map((w, i) => (
          <span key={i} className="flex items-center gap-8 md:gap-14 pr-8 md:pr-14">
            <span
              className="font-display text-5xl md:text-7xl lg:text-[6rem] font-medium tracking-[-0.045em] leading-none whitespace-nowrap"
              style={
                i % 2 === 1
                  ? {
                      WebkitTextStroke: "1px rgba(255,255,255,0.4)",
                      color: "transparent",
                    }
                  : { color: "#fff" }
              }
            >
              {w}
            </span>
            <span className="text-accent text-3xl md:text-5xl leading-none">✺</span>
          </span>
        ))}
      </Marquee>
    </section>
  );
}
