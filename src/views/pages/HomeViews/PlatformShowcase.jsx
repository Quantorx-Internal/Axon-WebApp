import { useState, useRef, useLayoutEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionHeader } from "../../components/SectionHeader";
import {
  ChatMock,
  AnalyticsMock,
  CodeMock,
  MapMock,
} from "../../components/Mockups";
import { getLenis } from "@/lib/smoothScroll";

gsap.registerPlugin(ScrollTrigger);

const items = [
  {
    title: "Natural-language agent",
    desc: "Ask in English or Arabic. The agent plans the analysis, queries your data, and replies with a short, grounded answer — never a guess.",
    Mock: ChatMock,
  },
  {
    title: "Interactive ArcGIS maps",
    desc: "Answers appear as live map layers — districts, parcels, buffers, heatmaps — that you can highlight, filter, and explore.",
    Mock: MapMock,
  },
  {
    title: "Your spatial data, connected",
    desc: "Connect PostGIS, Oracle Spatial, SQL Server, and ArcGIS feature services. AXON discovers the schema for you — no data movement.",
    Mock: CodeMock,
  },
  {
    title: "Automated spatial analysis",
    desc: "Buffer, proximity, isochrone, routing, clustering, and more — with charts and tables generated on demand.",
    Mock: AnalyticsMock,
  },
  {
    title: "Shapefile upload & instant answers",
    desc: "Drop in a shapefile and start asking questions about the area right away — no setup, no GIS desk.",
    Mock: MapMock,
  },
];

const ease = [0.22, 1, 0.36, 1];

function pinSupported() {
  if (typeof window === "undefined") return false;
  return (
    window.matchMedia("(min-width: 1024px)").matches &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export default function PlatformShowcase() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef(null);
  const stRef = useRef(null);
  const [pinned] = useState(pinSupported);

  useLayoutEffect(() => {
    if (!pinned) return;
    const ctx = gsap.context(() => {
      const st = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: () => `+=${items.length * Math.round(window.innerHeight * 0.7)}`,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const idx = Math.min(
            items.length - 1,
            Math.floor(self.progress * items.length)
          );
          setActive((p) => (p === idx ? p : idx));
        },
      });
      stRef.current = st;
    }, sectionRef);
    return () => ctx.revert();
  }, [pinned]);

  const goTo = (i) => {
    const st = stRef.current;
    if (!st) {
      setActive(i);
      return;
    }
    const target = st.start + ((i + 0.5) / items.length) * (st.end - st.start);
    const lenis = getLenis();
    if (lenis) lenis.scrollTo(target, { duration: 1 });
    else window.scrollTo({ top: target, behavior: "smooth" });
  };

  const ActiveMock = items[active].Mock;

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-white overflow-hidden lg:h-screen flex items-center px-5 md:px-8 py-16 lg:py-0"
    >
      <div className="max-w-7xl mx-auto w-full">
        <SectionHeader
          index="02"
          label="Showcase"
          title="See AXON in action"
          className="mb-10 lg:mb-12"
        />

        <div className="grid lg:grid-cols-[0.82fr_1.18fr] gap-10 lg:gap-16 items-center">
          {/* steps */}
          <div className="flex flex-col">
            {items.map((item, i) => {
              const isActive = i === active;
              return (
                <button
                  key={item.title}
                  onClick={() => goTo(i)}
                  className="group text-left py-4 border-t border-dashed first:border-t-0 border-ink/15"
                >
                  <div className="flex items-start gap-4">
                    <span
                      className={`font-mono text-xs mt-1.5 transition-colors ${
                        isActive ? "text-accent" : "text-ink-muted"
                      }`}
                    >
                      {`0${i + 1}`}
                    </span>
                    <div className="flex-1">
                      <h3
                        className={`font-display text-xl md:text-2xl font-medium tracking-[-0.02em] transition-colors ${
                          isActive
                            ? "text-ink"
                            : "text-ink-muted group-hover:text-ink"
                        }`}
                      >
                        {item.title}
                      </h3>
                      <AnimatePresence initial={false}>
                        {isActive && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.35, ease }}
                            className="text-ink-soft leading-relaxed mt-2 overflow-hidden"
                          >
                            {item.desc}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </button>
              );
            })}

            <div className="mt-6 h-px bg-line relative overflow-hidden">
              <div
                className="absolute inset-y-0 left-0 bg-accent transition-all duration-500 ease-smooth"
                style={{ width: `${((active + 1) / items.length) * 100}%` }}
              />
            </div>
          </div>

          {/* visual */}
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-tr from-accent/12 via-teal/10 to-violet/10 blur-3xl rounded-[2.5rem] pointer-events-none" />
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 0.98, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.45, ease }}
                className="relative"
              >
                <ActiveMock />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
