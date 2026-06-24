import { SectionHeader } from "../../components/SectionHeader";
import { Reveal } from "../../components/Reveal";
import { Counter } from "../../components/Counter";

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

const certs = ["SOC 2 Type II", "SSO / SAML", "RBAC", "Audit logs", "GDPR", "HIPAA-ready"];

const smallCards = [
  {
    label: "Scale",
    title: "Billions of rows, in place",
    desc: "No data movement, no sampling, no performance cliffs.",
    path: (
      <>
        <path d="M3 3v18h18" />
        <rect x="7" y="11" width="3" height="6" />
        <rect x="12" y="7" width="3" height="10" />
        <rect x="17" y="13" width="3" height="4" />
      </>
    ),
  },
  {
    label: "Deploy",
    title: "Cloud or self-hosted",
    desc: "Run fully managed or inside your own VPC — your stack, your rules.",
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
    title: "API, SDKs, AI agents & MCP",
    desc: "Automate everything with a full REST & GraphQL surface.",
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
          index="03"
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
                  Security &amp; compliance
                </span>
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-medium text-white tracking-[-0.03em] max-w-md leading-snug">
                Governed end to end, certified by default
              </h3>
              <p className="text-white/55 leading-relaxed mt-3 max-w-md">
                SSO, granular roles, and audit logs on demand keep your most
                sensitive spatial data locked down and compliant.
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
                <Counter value={120} suffix="ms" />
              </div>
              <p className="text-ink-soft mt-1">p95 query latency</p>
            </div>
          </div>

          {/* Three small capability cards */}
          {smallCards.map((c) => (
            <div
              key={c.label}
              className="group rounded-3xl border border-line bg-white p-7 hover:border-ink/20 hover:-translate-y-1 transition-all duration-500 ease-smooth"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="w-10 h-10 rounded-xl bg-cloud flex items-center justify-center text-ink group-hover:bg-ink group-hover:text-white transition-colors duration-300">
                  <Icon path={c.path} className="w-5 h-5" />
                </span>
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
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
