import { SectionHeader } from "../../components/SectionHeader";
import { Reveal } from "../../components/Reveal";
import { Counter } from "../../components/Counter";
import { SpotlightCard } from "../../components/SpotlightCard";

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

const certs = ["SSO / SAML", "RBAC", "Audit logs", "TLS 1.3", "Data residency", "On-prem ready"];

const smallCards = [
  {
    label: "Your data",
    title: "Connect, don't move",
    desc: "Query PostGIS, Oracle, SQL Server, and ArcGIS in place — no copies, no ETL.",
    path: (
      <>
        <ellipse cx="12" cy="5" rx="8" ry="3" />
        <path d="M4 5v6a8 3 0 0 0 16 0V5" />
        <path d="M4 11v6a8 3 0 0 0 16 0v-6" />
      </>
    ),
  },
  {
    label: "Deploy",
    title: "Cloud or self-hosted",
    desc: "Run fully managed or inside your own VPC, data center, or air-gapped network.",
    path: (
      <>
        <path d="M17.5 19a4.5 4.5 0 0 0 0-9h-1.8A7 7 0 1 0 4 15.3" />
        <path d="M12 12v9" />
        <path d="m8 17 4-4 4 4" />
      </>
    ),
  },
  {
    label: "Developer-first",
    title: "REST API & MCP tools",
    desc: "Automate chat, spatial analysis, and live map actions over a clean API.",
    path: (
      <>
        <path d="m16 18 6-6-6-6" />
        <path d="m8 6-6 6 6 6" />
      </>
    ),
  },
];

export default function Enterprise() {
  return (
    <section className="w-full bg-mesh-soft section-pad px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          index="02"
          label="Enterprise-grade"
          title="Built for the enterprise"
          description="Enterprise-grade infrastructure with unmatched performance, security, and reliability — at any scale."
        />

        <Reveal className="grid lg:grid-cols-3 gap-4 md:gap-5 mt-14 auto-rows-fr">
          {/* Anchor: security (dark, spans 2x2) */}
          <div className="lg:col-span-2 lg:row-span-2 relative overflow-hidden rounded-3xl bg-ink-900 p-8 md:p-10 flex flex-col justify-between min-h-[300px]">
            <div
              className="absolute -top-20 -right-16 w-80 h-80 pointer-events-none opacity-70"
              style={{
                background:
                  "radial-gradient(circle, rgba(34,211,204,0.4), transparent 60%), radial-gradient(circle at 70% 70%, rgba(59,141,255,0.4), transparent 60%)",
                filter: "blur(20px)",
              }}
            />
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-11 h-11 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-white">
                  <Icon path={<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />} className="w-5 h-5" />
                </span>
                <span className="font-mono text-xs uppercase tracking-[0.14em] text-white/50">
                  Security &amp; governance
                </span>
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-medium text-white tracking-[-0.03em] max-w-md leading-snug">
                Governed end to end
              </h3>
              <p className="text-white/55 leading-relaxed mt-3 max-w-md">
                SSO, granular roles, and on-demand audit logs keep your most
                sensitive spatial data locked down — in the cloud or inside your
                own network.
              </p>
            </div>
            <div className="relative flex flex-wrap gap-2 mt-8">
              {certs.map((c) => (
                <span
                  key={c}
                  className="font-mono text-[0.62rem] uppercase tracking-wider text-white/75 border border-white/15 rounded-md px-2.5 py-1.5"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* Uptime stat */}
          <div className="rounded-3xl border border-line bg-white p-7 flex flex-col justify-between min-h-[140px]">
            <span className="font-mono text-xs uppercase tracking-[0.14em] text-ink-muted">
              Reliability
            </span>
            <div>
              <div className="font-display text-5xl font-semibold text-ink tracking-[-0.04em]">
                <Counter value={99.9} suffix="%" decimals={1} />
              </div>
              <p className="text-ink-soft mt-1">uptime SLA, multi-region</p>
            </div>
          </div>

          {/* Latency stat */}
          <div className="rounded-3xl border border-line bg-white p-7 flex flex-col justify-between min-h-[140px]">
            <span className="font-mono text-xs uppercase tracking-[0.14em] text-ink-muted">
              Performance
            </span>
            <div>
              <div className="font-display text-5xl font-semibold text-ink tracking-[-0.04em]">
                <Counter value={100} suffix="ms" />
              </div>
              <p className="text-ink-soft mt-1">streaming first-token latency</p>
            </div>
          </div>

          {/* Three small capability cards */}
          {smallCards.map((c) => (
            <SpotlightCard
              key={c.label}
              className="group rounded-3xl border border-line bg-white p-7 hover:border-ink/20 hover:-translate-y-1 transition-all duration-500 ease-smooth"
            >
              <div className="flex items-center gap-3 mb-5">
                <Icon
                  path={c.path}
                  className="w-7 h-7 text-accent transition-all duration-300 group-hover:text-ink group-hover:scale-110 origin-left"
                />
                <span className="font-mono text-xs uppercase tracking-[0.14em] text-ink-muted">
                  {c.label}
                </span>
              </div>
              <h3 className="font-display text-lg font-medium text-ink mb-2 tracking-[-0.02em]">
                {c.title}
              </h3>
              <p className="text-ink-soft text-[0.95rem] leading-relaxed">
                {c.desc}
              </p>
            </SpotlightCard>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
