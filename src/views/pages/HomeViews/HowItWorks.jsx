import { SectionHeader } from "../../components/SectionHeader";
import { Reveal } from "../../components/Reveal";
import { TiltCard } from "../../components/TiltCard";
import { scrollTo } from "@/lib/scrollTo";

const Icon = ({ path, className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
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
        <path d="M4 7h16M4 12h16M4 17h16" />
        <circle cx="9" cy="7" r="1.7" fill="currentColor" stroke="none" />
        <circle cx="16" cy="12" r="1.7" fill="currentColor" stroke="none" />
        <circle cx="12" cy="17" r="1.7" fill="currentColor" stroke="none" />
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
        <path d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2h-7l-5 4v-4H5a2 2 0 0 1-2-2Z" />
        <path d="m8.5 10.5 2.2 2.2 4.3-4.4" />
      </>
    ),
  },
];

function Step({ s }) {
  return (
    <TiltCard className="group relative h-full">
      <div className="relative h-full rounded-3xl border border-line bg-white shadow-soft p-7 overflow-hidden transition-all duration-300 group-hover:border-accent/30 group-hover:shadow-card group-hover:-translate-y-1">
        {/* cursor-follow glow */}
        <span
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background:
              "radial-gradient(240px circle at var(--mx,50%) var(--my,0%), rgba(2,111,227,0.10), transparent 70%)",
          }}
        />

        {/* oversized outlined number watermark */}
        <span
          className="pointer-events-none absolute -top-3 right-3 font-display text-[5.5rem] leading-none font-semibold text-transparent select-none transition-transform duration-500 group-hover:-translate-y-1"
          style={{ WebkitTextStroke: "1.5px rgba(18,19,23,0.07)" }}
          aria-hidden="true"
        >
          {s.n}
        </span>

        <div className="relative flex flex-col h-full" style={{ transform: "translateZ(30px)" }}>
          {/* bare line icon — no container */}
          <Icon
            path={s.path}
            className="w-9 h-9 text-accent transition-all duration-300 group-hover:text-ink group-hover:scale-110 origin-left"
          />

          <p className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-accent mt-7">
            {s.label}
          </p>
          <h3 className="font-display text-xl font-medium text-ink tracking-[-0.02em] mt-1.5 leading-snug">
            {s.title}
          </h3>
          <p className="text-ink-soft text-[0.95rem] leading-relaxed mt-2.5 flex-1">
            {s.desc}
          </p>
          <span className="mt-6 inline-flex w-fit items-center rounded-lg bg-cloud border border-line px-2.5 py-1.5 font-mono text-[0.6rem] text-ink-soft leading-tight">
            {s.chip}
          </span>
        </div>
      </div>
    </TiltCard>
  );
}

export default function HowItWorks() {
  return (
    <section className="relative w-full bg-white section-pad px-5 md:px-8 overflow-hidden">
      {/* soft top glow for depth */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[60%]"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, rgba(2,111,227,0.05), transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        <SectionHeader
          index="✦"
          label="How it works"
          title="From a question to an answer in seconds"
          description="No SQL, no GIS training, no waiting on the analytics team. Just ask — AXON does the rest."
          className="mb-16"
        />

        <div className="relative">
          {/* flowing connector beam above the cards (desktop) */}
          <div className="hidden lg:block absolute left-6 right-6 -top-7 h-px overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-line to-transparent" />
            <div className="absolute inset-y-0 left-0 w-1/5 bg-gradient-to-r from-transparent via-accent to-transparent animate-flow" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08} y={26}>
                <Step s={s} />
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.1} className="mt-12">
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
