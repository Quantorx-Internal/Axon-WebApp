import { SectionHeader } from "../../components/SectionHeader";

const cards = [
  {
    n: "01",
    label: "Outcomes",
    title: "From spatial data to decisions",
    desc: "Agentic AI reasons over your location context and acts — turning raw geospatial data into decisions your teams can ship.",
    dark: true,
  },
  {
    n: "02",
    label: "Accessibility",
    title: "One platform, every team",
    desc: "Analysts, scientists, and developers work in the same place — drag-and-drop analytics, rich visualization, and a full API.",
    dark: false,
  },
  {
    n: "03",
    label: "Trust",
    title: "Enterprise-grade by default",
    desc: "SOC 2, SSO, a 99.9% uptime SLA, and deploy-anywhere flexibility — built for the most demanding organizations.",
    dark: true,
  },
];

export function WhyAxon() {
  return (
    <section className="w-full bg-white section-pad px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          index="✦"
          label="Why AXON"
          title="Why teams choose AXON"
          description="Three reasons the platform earns a place at the center of your spatial stack."
          className="mb-14"
        />

        <div className="relative">
          {cards.map((c, i) => (
            <div
              key={c.n}
              className="sticky"
              style={{ top: `${88 + i * 26}px` }}
            >
              <div
                className={`relative overflow-hidden rounded-[2rem] p-8 md:p-14 min-h-[58vh] flex flex-col justify-between mb-6 ${
                  c.dark
                    ? "bg-ink-900 text-white grain"
                    : "bg-mist text-ink border border-line"
                }`}
              >
                {c.dark && (
                  <div
                    className="absolute -top-20 -right-12 w-[34rem] h-[34rem] pointer-events-none opacity-60"
                    style={{
                      background:
                        "radial-gradient(circle at 70% 30%, rgba(2,111,227,0.35), transparent 55%), radial-gradient(circle at 90% 70%, rgba(34,211,204,0.3), transparent 55%)",
                      filter: "blur(40px)",
                    }}
                  />
                )}

                <div className="relative flex items-center justify-between">
                  <span
                    className={`font-mono text-xs uppercase tracking-[0.14em] ${
                      c.dark ? "text-white/50" : "text-ink-muted"
                    }`}
                  >
                    {c.label}
                  </span>
                  <span
                    className={`font-display text-2xl font-medium ${
                      c.dark ? "text-white/30" : "text-ink/20"
                    }`}
                  >
                    {c.n}
                  </span>
                </div>

                <div className="relative max-w-2xl">
                  <h3
                    className={`font-display text-3xl md:text-5xl lg:text-6xl font-medium tracking-[-0.04em] leading-[0.98] ${
                      c.dark ? "text-white" : "text-ink"
                    }`}
                  >
                    {c.title}
                  </h3>
                  <p
                    className={`mt-5 text-lg md:text-xl leading-relaxed max-w-xl ${
                      c.dark ? "text-white/60" : "text-ink-soft"
                    }`}
                  >
                    {c.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
