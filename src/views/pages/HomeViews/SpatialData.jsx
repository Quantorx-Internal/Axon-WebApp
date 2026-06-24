import { AnimatedAurora } from "../../components/AnimatedAurora";
import { Magnetic } from "../../components/Magnetic";
import { Eyebrow } from "../../components/Eyebrow";
import { Reveal, WordReveal } from "../../components/Reveal";
import { scrollTo } from "@/lib/scrollTo";

function MagButton({ children, onClick, variant = "white" }) {
  const styles =
    variant === "white"
      ? "bg-white text-ink hover:bg-cloud"
      : "bg-transparent text-white border border-white/30 hover:bg-white/10";
  return (
    <Magnetic>
      <button
        onClick={onClick}
        className={`inline-flex items-center gap-2.5 rounded-[10px] font-mono text-xs md:text-[0.78rem] font-medium uppercase tracking-[0.08em] py-3.5 px-7 transition-colors duration-300 ${styles}`}
      >
        {children}
        <span className="text-[1.15em] leading-none -mt-px">•</span>
      </button>
    </Magnetic>
  );
}

export default function SpatialData() {
  return (
    <section className="w-full px-5 md:px-8 py-16 md:py-24">
      <div className="relative max-w-7xl mx-auto rounded-[2rem] overflow-hidden bg-ink-900 grain">
        <AnimatedAurora className="absolute inset-0 w-full h-full" />
        <div className="absolute inset-0 vignette pointer-events-none" />

        <div className="relative z-10 px-6 md:px-16 py-20 md:py-28 flex flex-col items-start max-w-3xl">
          <Reveal>
            <Eyebrow light brace className="mb-6 inline-block">
              Get started
            </Eyebrow>
          </Reveal>
          <h2 className="font-display text-white font-medium text-4xl md:text-6xl lg:text-[4.25rem] tracking-[-0.04em] leading-[0.96]">
            <WordReveal text="Ready to transform your spatial data?" className="block" />
          </h2>
          <Reveal
            as="p"
            delay={0.1}
            className="mt-6 text-white/60 text-lg md:text-xl max-w-xl leading-relaxed"
          >
            Start your free trial today and experience the power of location
            intelligence.
          </Reveal>
          <Reveal
            delay={0.2}
            className="mt-10 flex flex-col sm:flex-row items-start gap-3"
          >
            <MagButton variant="white" onClick={() => scrollTo("request-demo", 90)}>
              Get a demo
            </MagButton>
            <MagButton variant="outline" onClick={() => scrollTo("request-demo", 90)}>
              Contact us
            </MagButton>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
