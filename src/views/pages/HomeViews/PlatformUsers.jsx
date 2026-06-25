import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "../../components/SectionHeader";
import { Reveal } from "../../components/Reveal";
import {
  AnalyticsMock,
  MapMock,
  ChatMock,
  CodeMock,
} from "../../components/Mockups";
import { scrollTo } from "@/lib/scrollTo";

const tabs = [
  {
    name: "Ask",
    Mock: ChatMock,
    title: "Query your data in plain language",
    desc: "Ask spatial questions the way you'd ask a colleague — in English or Arabic — and get a clear answer back in seconds.",
    points: [
      "No SQL or GIS training required",
      "Full English and Arabic support, including place names",
      "Answers stream in real time, grounded in your own data",
    ],
  },
  {
    name: "Visualize",
    Mock: MapMock,
    title: "See every answer on the map",
    desc: "Results render as live ArcGIS layers you can explore, highlight, and drill into — not walls of text.",
    points: [
      "ArcGIS basemaps and feature layers, light or dark",
      "Heatmaps, clusters, buffers, and routes on demand",
      "Upload a shapefile and ask about the area right away",
    ],
  },
  {
    name: "Analyze",
    Mock: AnalyticsMock,
    title: "Spatial analysis, fully automated",
    desc: "AXON discovers your schema, resolves the right values, runs the analysis, and explains the result — no expert in the loop.",
    points: [
      "25+ operations: buffer, proximity, isochrone, routing",
      "Charts and tables generated on demand",
      "Read-only, validated queries — your data stays safe",
    ],
  },
  {
    name: "Integrate",
    Mock: CodeMock,
    title: "Bring AXON into your own stack",
    desc: "A clean API and live map tools let you embed AXON wherever your teams already work.",
    points: [
      "REST API with real-time SSE streaming",
      "MCP tools for live, in-app map actions",
      "Deploy in the cloud or your own VPC",
    ],
  },
];

const ease = [0.22, 1, 0.36, 1];

export default function PlatformUsers() {
  const [active, setActive] = useState(0);
  const tab = tabs[active];
  const ActiveMock = tab.Mock;

  return (
    <section className="w-full bg-mist section-pad px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          index="01"
          label="Platform"
          title="One platform for everyone who works with location"
          description="From planners and analysts to developers, AXON makes spatial analysis accessible across your whole organization — in English and Arabic."
          className="max-w-3xl"
        />

        {/* Tab pills */}
        <Reveal className="flex flex-wrap gap-2 md:gap-3 mt-10 mb-10">
          {tabs.map((t, i) => {
            const isActive = i === active;
            return (
              <button
                key={t.name}
                onClick={() => setActive(i)}
                className={`rounded-[10px] px-5 py-3 font-mono text-xs uppercase tracking-[0.08em] transition-all duration-300 border ${
                  isActive
                    ? "bg-ink text-white border-ink"
                    : "bg-white text-ink-soft border-line hover:border-ink/30 hover:text-ink"
                }`}
              >
                {t.name}
              </button>
            );
          })}
        </Reveal>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease }}
              className="order-2 lg:order-1"
            >
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent mb-4">
                {`0${active + 1} — ${tab.name}`}
              </p>
              <h3 className="font-display text-2xl lg:text-[2rem] font-medium text-ink tracking-[-0.03em] mb-4 leading-tight">
                {tab.title}
              </h3>
              <p className="text-ink-soft text-lg leading-relaxed mb-7 max-w-lg">
                {tab.desc}
              </p>
              <ul className="flex flex-col">
                {tab.points.map((point, i) => (
                  <li
                    key={point}
                    className={`flex items-start gap-3 py-3.5 ${
                      i > 0 ? "border-t border-dashed border-ink/15" : ""
                    }`}
                  >
                    <span className="font-mono text-xs text-ink-muted mt-1 shrink-0">
                      {`0${i + 1}`}
                    </span>
                    <span className="text-ink-soft text-base leading-relaxed">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => scrollTo("watch", 90)}
                className="group mt-7 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.1em] text-ink hover:text-accent transition-colors bg-transparent border-none cursor-pointer p-0"
              >
                See it in action
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </button>
            </motion.div>
          </AnimatePresence>

          <div className="order-1 lg:order-2 relative">
            <div className="absolute -inset-6 bg-gradient-to-tr from-accent/12 to-teal/12 blur-3xl rounded-[2rem] pointer-events-none" />
            <AnimatePresence mode="wait">
              <motion.div
                key={`mock-${active}`}
                initial={{ opacity: 0, scale: 0.98, y: 10 }}
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
