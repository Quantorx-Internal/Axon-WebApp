import { SectionHeader } from "../../components/SectionHeader";
import { Reveal } from "../../components/Reveal";
import { SpotlightCard } from "../../components/SpotlightCard";
import { scrollTo } from "@/lib/scrollTo";

const Icon = ({ path, className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {path}
  </svg>
);

const steps = [
  {
    n: "01",
    label: "Ask",
    title: "Ask in plain language",
    desc: "Type or speak your question in English or Arabic. No SQL, no filters, no GIS desk.",
    chip: "“Parcels within 2 km of Al Olaya metro”",
    path: (
      <>
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z" />
        <path d="M8 10h8M8 13.5h5" />
      </>
    ),
  },
  {
    n: "02",
    label: "Understand",
    title: "AXON understands intent",
    desc: "It finds the right tables, resolves place names to your data, and plans the analysis.",
    chip: "Schema discovery · value matching",
    path: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m21 21-4.3-4.3" />
      </>
    ),
  },
  {
    n: "03",
    label: "Analyze",
    title: "Spatial analysis runs",
    desc: "Validated, read-only queries — buffer, proximity, routing, isochrones, and more.",
    chip: "25+ spatial operations",
    path: (
      <>
        <path d="M3 6h18M3 12h18M3 18h18" />
        <circle cx="8" cy="6" r="1.6" fill="currentColor" stroke="none" />
        <circle cx="15" cy="12" r="1.6" fill="currentColor" stroke="none" />
        <circle cx="11" cy="18" r="1.6" fill="currentColor" stroke="none" />
      </>
    ),
  },
  {
    n: "04",
    label: "Answer",
    title: "You get a grounded answer",
    desc: "A short, plain-language reply with an interactive map, chart, and suggested follow-ups.",
    chip: "Map · chart · follow-ups",
    path: (
      <>
        <path d="M20 6 9 17l-5-5" />
      </>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section className="w-full bg-white section-pad px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          index="✦"
          label="How it works"
          title="From a question to an answer in seconds"
          description="No SQL, no GIS training, no waiting on the analytics team. Just ask — AXON does the rest."
          className="mb-14"
        />

        <div className="relative">
          {/* connecting line behind the cards (desktop) */}
          <div className="hidden lg:block absolute top-[4.5rem] left-0 right-0 h-px bg-gradient-to-r from-transparent via-line to-transparent" />

          <Reveal
            stagger={0.12}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5"
          >
            {steps.map((s) => (
              <SpotlightCard
                key={s.n}
                className="rounded-3xl border border-line bg-mist/40 hover:border-ink/15 transition-colors duration-500 h-full"
              >
                <div className="flex flex-col h-full p-6 md:p-7">
                  <div className="flex items-center justify-between">
                    <span className="relative w-11 h-11 rounded-2xl bg-white border border-line flex items-center justify-center text-accent shadow-soft">
                      <Icon path={s.path} className="w-5 h-5" />
                    </span>
                    <span className="font-display text-3xl font-medium text-ink/15">
                      {s.n}
                    </span>
                  </div>

                  <p className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-accent mt-6">
                    {s.label}
                  </p>
                  <h3 className="font-display text-xl font-medium text-ink tracking-[-0.02em] mt-1.5 leading-snug">
                    {s.title}
                  </h3>
                  <p className="text-ink-soft text-[0.95rem] leading-relaxed mt-2.5 flex-1">
                    {s.desc}
                  </p>

                  <span className="mt-5 inline-flex w-fit items-center rounded-lg bg-white border border-line px-2.5 py-1.5 font-mono text-[0.62rem] text-ink-soft leading-tight">
                    {s.chip}
                  </span>
                </div>
              </SpotlightCard>
            ))}
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mt-10">
          <button
            onClick={() => scrollTo("request-demo", 90)}
            className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.1em] text-ink hover:text-accent transition-colors bg-transparent border-none cursor-pointer p-0"
          >
            See it on your own data
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </button>
        </Reveal>
      </div>
    </section>
  );
}
