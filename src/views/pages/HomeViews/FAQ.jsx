import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "../../components/SectionHeader";
import { Reveal } from "../../components/Reveal";
import { scrollTo } from "@/lib/scrollTo";

const ease = [0.22, 1, 0.36, 1];

const faqs = [
  {
    q: "Do I need to know SQL or GIS to use AXON?",
    a: "No. You ask questions in plain language — the way you'd ask a colleague — and AXON discovers the right data, runs the analysis, and replies with a map and a clear answer. It's built for non-experts first.",
  },
  {
    q: "Does it really work in Arabic?",
    a: "Yes — full English and Arabic support. AXON answers in the language you ask in and matches Arabic place names against your data (including alef and spelling variants), so districts like العليا / Al Olaya resolve correctly.",
  },
  {
    q: "Where does my data live? Do I have to move it?",
    a: "Your data stays where it is. AXON connects in place to PostgreSQL/PostGIS, Oracle Spatial, SQL Server, and ArcGIS feature services — no copies, no ETL. It discovers your schema automatically.",
  },
  {
    q: "How do I know the answers are accurate?",
    a: "Every answer is grounded in live, read-only queries against your own data. AXON validates each query before running it and never invents tables, values, or results — if it can't find evidence, it asks instead of guessing.",
  },
  {
    q: "What kinds of spatial analysis can it run?",
    a: "25+ operations including buffer, proximity / nearest, point-in-polygon, intersection, routing, isochrones, clustering, and heatmaps — plus charts, tables, and shapefile (.zip) upload for ad-hoc areas.",
  },
  {
    q: "Can we run AXON on-premises?",
    a: "Yes. Deploy fully managed in the cloud, or self-host inside your own VPC, data center, or air-gapped network. Enterprise controls include SSO, role-based access, and audit logs.",
  },
];

function Item({ faq, isOpen, onToggle }) {
  return (
    <div className="border-t border-dashed border-ink/15 first:border-t-0">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="group w-full flex items-start gap-5 py-6 text-left bg-transparent border-none cursor-pointer"
      >
        <span className="flex-1 font-display text-lg md:text-xl font-medium text-ink tracking-[-0.01em]">
          {faq.q}
        </span>
        <span
          className={`relative mt-1 w-6 h-6 shrink-0 rounded-full border flex items-center justify-center transition-colors duration-300 ${
            isOpen
              ? "border-accent text-accent"
              : "border-ink/20 text-ink-muted group-hover:border-ink/40"
          }`}
        >
          <span className="absolute w-3 h-px bg-current" />
          <span
            className={`absolute h-3 w-px bg-current transition-transform duration-300 ${
              isOpen ? "scale-y-0" : "scale-y-100"
            }`}
          />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease }}
            className="overflow-hidden"
          >
            <p className="text-ink-soft leading-relaxed max-w-2xl pb-6 pr-10">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="relative w-full bg-white section-pad px-5 md:px-8 overflow-hidden">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[55%]"
        style={{
          background:
            "radial-gradient(55% 50% at 50% 0%, rgba(2,111,227,0.05), transparent 70%)",
        }}
      />
      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16">
        <div className="lg:sticky lg:top-28 self-start flex flex-col gap-8">
          <SectionHeader
            index="✦"
            label="FAQ"
            title="Questions, answered"
            description="The things teams ask us most before they bring AXON to their own data."
          />

          {/* premium contact card */}
          <div className="hidden lg:block relative rounded-2xl overflow-hidden border border-line shadow-soft">
            <img
              src="/unsplash-city-aerial.jpg"
              alt=""
              aria-hidden="true"
              loading="lazy"
              decoding="async"
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-900/92 via-ink-900/45 to-transparent" />
            <div className="absolute inset-0 p-5 flex flex-col justify-end">
              <p className="font-display text-lg font-medium text-white">
                Still have questions?
              </p>
              <button
                onClick={() => scrollTo("request-demo", 90)}
                className="group mt-1.5 inline-flex w-fit items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.1em] text-white/80 hover:text-white transition-colors bg-transparent border-none cursor-pointer p-0"
              >
                Talk to our team
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </button>
            </div>
          </div>
        </div>

        <Reveal>
          <div className="flex flex-col">
            {faqs.map((faq, i) => (
              <Item
                key={faq.q}
                faq={faq}
                isOpen={open === i}
                onToggle={() => setOpen(open === i ? -1 : i)}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
