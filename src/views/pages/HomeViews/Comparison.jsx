import { SectionHeader } from "../../components/SectionHeader";
import { Reveal } from "../../components/Reveal";
import { AxonMark } from "../../components/AxonLogo";

/* status cell — yes / partial / no, with a short label */
function Cell({ status, label, strong }) {
  const icon = {
    yes: (
      <svg className="w-4 h-4 text-accent shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 6 9 17l-5-5" />
      </svg>
    ),
    partial: (
      <svg className="w-4 h-4 text-ink-muted shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
        <path d="M5 12h14" />
      </svg>
    ),
    no: (
      <svg className="w-4 h-4 text-ink-muted/60 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
        <path d="M6 6l12 12M18 6 6 18" />
      </svg>
    ),
  }[status];

  return (
    <div className="flex items-center gap-2.5 px-5 py-4">
      {icon}
      <span className={`text-sm leading-tight ${strong ? "text-ink font-medium" : "text-ink-soft"}`}>
        {label}
      </span>
    </div>
  );
}

const features = [
  { label: "Plain-language queries", axon: ["yes", "Full · EN + AR"], trad: ["no", "None"], ai: ["partial", "No spatial context"] },
  { label: "Spatial analysis", axon: ["yes", "AI-automated"], trad: ["partial", "Manual workflows"], ai: ["no", "Not available"] },
  { label: "Arabic support", axon: ["yes", "Native"], trad: ["partial", "Partial"], ai: ["partial", "Limited"] },
  { label: "Map visualization", axon: ["yes", "Integrated"], trad: ["partial", "Separate tool"], ai: ["no", "None"] },
  { label: "Grounded in your data", axon: ["yes", "Always"], trad: ["yes", "Yes"], ai: ["no", "Can hallucinate"] },
  { label: "No GIS training needed", axon: ["yes", "Anyone can use"], trad: ["no", "Specialists only"], ai: ["partial", "Not spatial"] },
];

export default function Comparison() {
  return (
    <section className="w-full bg-white section-pad px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          index="✦"
          label="Comparison"
          title="How AXON compares"
          description="Traditional GIS is powerful but locked behind specialists. Generic AI can chat, but it can't reason over your spatial data. AXON does both."
          className="mb-12"
        />

        <Reveal className="overflow-x-auto hide-scrollbar -mx-5 px-5 md:mx-0 md:px-0">
          <div className="min-w-[680px] rounded-[1.75rem] border border-line overflow-hidden">
            {/* header row */}
            <div className="grid grid-cols-[1.3fr_1.1fr_1fr_1fr]">
              <div className="px-5 py-5 bg-mist/60" />
              <div className="relative px-5 py-5 bg-ink-900 text-white flex items-center gap-2">
                <AxonMark className="w-4 h-4" />
                <span className="font-display text-base font-medium">AXON</span>
                <span className="ml-auto font-mono text-[0.55rem] uppercase tracking-wider text-teal-bright border border-white/15 rounded px-1.5 py-0.5">
                  You
                </span>
              </div>
              <div className="px-5 py-5 bg-mist/60 font-mono text-[0.66rem] uppercase tracking-[0.1em] text-ink-muted flex items-center">
                Traditional GIS
              </div>
              <div className="px-5 py-5 bg-mist/60 font-mono text-[0.66rem] uppercase tracking-[0.1em] text-ink-muted flex items-center">
                Generic AI
              </div>
            </div>

            {/* feature rows */}
            {features.map((row, i) => (
              <div
                key={row.label}
                className={`grid grid-cols-[1.3fr_1.1fr_1fr_1fr] ${
                  i > 0 ? "border-t border-line" : "border-t border-line"
                }`}
              >
                <div className="px-5 py-4 bg-mist/30 flex items-center">
                  <span className="text-sm font-medium text-ink">{row.label}</span>
                </div>
                <div className="bg-accent/[0.04] border-x border-accent/15">
                  <Cell status={row.axon[0]} label={row.axon[1]} strong />
                </div>
                <Cell status={row.trad[0]} label={row.trad[1]} />
                <Cell status={row.ai[0]} label={row.ai[1]} />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
