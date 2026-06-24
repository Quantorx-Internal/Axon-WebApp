import { useRef, useLayoutEffect } from "react";
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

const testCases = [
  {
    title: "Find sites near transit",
    tag: "Real estate",
    bgImage:
      "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/292NacUvQT/250v9pdf_expires_30_days.png",
    duration: "2:14",
  },
  {
    title: "Proximity & buffer analysis",
    tag: "Government",
    bgImage:
      "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/292NacUvQT/vdmri7wb_expires_30_days.png",
    duration: "1:48",
  },
  {
    title: "Coverage & network planning",
    tag: "Telecom",
    bgImage:
      "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/292NacUvQT/6sg7ezd6_expires_30_days.png",
    duration: "3:02",
  },
];

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
          className="relative z-10 flex-1 flex items-center"
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
              <MagButton variant="outline" onClick={() => scrollTo("showcase", 90)}>
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
              © {`2025 — AXON`}
            </span>
          </div>
        </div>
      </section>

      {/* Explore common test cases */}
      <section className="w-full bg-white py-20 md:py-28 px-5 md:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            index="✦"
            label="Common workflows"
            title="Explore common test cases"
            description="See how AXON answers the spatial questions your teams ask every day."
            className="mb-12 md:mb-14"
          />

          <Reveal
            stagger={0.12}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          >
            {testCases.map((vid, i) => (
              <button
                key={vid.title}
                onClick={() => alert("Play Video")}
                data-cursor-label="Play"
                className="group text-left bg-white rounded-2xl border border-line hover:border-ink/20 hover:-translate-y-1.5 transition-all duration-500 ease-smooth overflow-hidden cursor-pointer"
              >
                <div className="relative aspect-video overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-[900ms] ease-smooth group-hover:scale-110"
                    style={{ backgroundImage: `url(${vid.bgImage})` }}
                  />
                  <div className="absolute inset-0 bg-ink/20 group-hover:bg-ink/10 transition-colors" />
                  <span className="absolute top-4 left-4 font-mono text-[0.62rem] uppercase tracking-wider bg-white/90 text-ink rounded-md px-2.5 py-1.5">
                    {vid.tag}
                  </span>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center group-hover:bg-ink group-hover:text-white text-ink transition-all duration-300">
                      <FaPlay className="text-sm ml-0.5" />
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-5">
                  <h3 className="flex items-center gap-3 text-lg font-medium text-ink">
                    <span className="font-mono text-xs text-ink-muted">{`0${i + 1}`}</span>
                    {vid.title}
                  </h3>
                  <span className="font-mono text-xs text-ink-muted">
                    {vid.duration}
                  </span>
                </div>
              </button>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}
