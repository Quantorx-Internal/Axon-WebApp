import { useRef, useState, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaPlay } from "react-icons/fa";
import Header from "./Header";
import { AnimatedAurora } from "../../components/AnimatedAurora";
import { Magnetic } from "../../components/Magnetic";
import { Eyebrow } from "../../components/Eyebrow";
import { SectionHeader } from "../../components/SectionHeader";
import { Reveal, WordReveal } from "../../components/Reveal";
import { scrollTo } from "@/lib/scrollTo";

gsap.registerPlugin(ScrollTrigger);

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

export default function Hero() {
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const playOverview = () => {
    setPlaying(true);
    scrollTo("watch", 90);
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Subtle parallax drift of hero content as you scroll away.
      gsap.to(contentRef.current, {
        yPercent: 18,
        opacity: 0.4,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      <section
        ref={heroRef}
        className="relative w-full min-h-[100svh] bg-ink-900 overflow-hidden grain flex flex-col"
      >
        <AnimatedAurora className="absolute inset-0 w-full h-full" />
        <div className="absolute inset-0 vignette pointer-events-none" />

        <Header dark />

        <div
          ref={contentRef}
          id="main"
          tabIndex={-1}
          className="relative z-10 flex-1 flex items-center focus:outline-none"
        >
          <div className="max-w-7xl mx-auto w-full px-5 md:px-8 pt-28">
            <Reveal y={14} duration={0.7}>
              <Eyebrow light brace className="mb-8 inline-block">
                Agentic AI · GIS Intelligence
              </Eyebrow>
            </Reveal>

            <h1 className="font-display font-medium text-white text-[3rem] leading-[0.98] sm:text-7xl lg:text-[6.4rem] lg:leading-[0.92] tracking-[-0.04em] max-w-5xl">
              <WordReveal text="Spatial intelligence," className="block" />
              <WordReveal
                text="reimagined with"
                className="block text-white/55"
                delay={0.1}
              />
              <WordReveal
                text="agentic AI."
                className="block"
                delay={0.2}
              />
            </h1>

            <Reveal
              as="p"
              y={18}
              delay={0.2}
              className="mt-8 text-lg md:text-xl text-white/55 leading-relaxed max-w-xl"
            >
              Ask spatial questions in plain language — in English or Arabic —
              and get instant maps, charts, and answers. No SQL. No GIS training.
            </Reveal>

            <Reveal
              y={18}
              delay={0.3}
              className="mt-10 flex flex-col sm:flex-row items-start gap-3"
            >
              <MagButton variant="white" onClick={() => scrollTo("request-demo", 90)}>
                Get a demo
              </MagButton>
              <MagButton variant="outline" onClick={playOverview}>
                Watch overview
              </MagButton>
            </Reveal>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-5 md:px-8 pb-8">
          <div className="flex items-center justify-between">
            <button
              onClick={() => scrollTo("customers", 0)}
              className="flex items-center gap-3 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-white/45 hover:text-white transition-colors bg-transparent border-none cursor-pointer"
            >
              <span className="relative flex h-8 w-px bg-white/20 overflow-hidden">
                <span className="absolute inset-0 bg-white animate-scroll-line" />
              </span>
              Scroll to explore
            </button>
            <span className="hidden md:block font-mono text-[0.65rem] uppercase tracking-[0.2em] text-white/30">
              © {`2026 — AXON`}
            </span>
          </div>
        </div>
      </section>

      {/* Watch the overview */}
      <section id="watch" className="w-full bg-white py-20 md:py-28 px-5 md:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            index="✦"
            label="Watch"
            title="See AXON work in two minutes"
            description="From a plain-language question to a live map, chart, and answer — the whole flow, end to end."
            className="mb-12 md:mb-14"
          />

          <Reveal>
            <div className="group relative w-full overflow-hidden rounded-[1.75rem] border border-line bg-ink-900">
              <div className="relative aspect-video overflow-hidden">
                {playing ? (
                  <video
                    src="/axon-demo.mp4"
                    className="absolute inset-0 w-full h-full object-cover bg-black"
                    controls
                    autoPlay
                    playsInline
                  />
                ) : (
                  <button
                    type="button"
                    onClick={() => setPlaying(true)}
                    data-cursor-label="Play"
                    aria-label="Play the AXON product overview"
                    className="absolute inset-0 w-full h-full cursor-pointer"
                  >
                    <span
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-[1200ms] ease-smooth group-hover:scale-105"
                      style={{ backgroundImage: "url('/axon-demo-poster.jpg')" }}
                    />
                    <span className="absolute inset-0 bg-gradient-to-t from-ink-900/75 via-ink-900/10 to-ink-900/25" />

                    {/* play button */}
                    <span className="absolute inset-0 flex items-center justify-center">
                      <span className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/95 flex items-center justify-center text-ink shadow-lift transition-all duration-300 group-hover:scale-110 group-hover:bg-white">
                        <FaPlay className="text-xl md:text-2xl ml-1" />
                      </span>
                    </span>

                    {/* caption */}
                    <span className="absolute left-5 bottom-5 md:left-7 md:bottom-7 flex items-center gap-3">
                      <span className="font-mono text-[0.62rem] uppercase tracking-wider bg-white/90 text-ink rounded-md px-2.5 py-1.5">
                        Product overview
                      </span>
                      <span className="font-mono text-xs text-white/85">1:54</span>
                    </span>
                  </button>
                )}
              </div>
            </div>
          </Reveal>

          {/* what the demo covers */}
          <Reveal delay={0.1} className="mt-7 flex flex-wrap items-center gap-3">
            <span className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-ink-muted">
              In this demo
            </span>
            {["Ask in plain language", "Live map & charts", "Grounded answers"].map(
              (w) => (
                <button
                  key={w}
                  onClick={() => scrollTo("how", 90)}
                  className="rounded-full border border-line bg-white px-4 py-2 font-mono text-[0.62rem] uppercase tracking-wider text-ink-soft hover:border-ink/30 hover:text-ink transition-colors cursor-pointer"
                >
                  {w}
                </button>
              )
            )}
          </Reveal>
        </div>
      </section>
    </>
  );
}
