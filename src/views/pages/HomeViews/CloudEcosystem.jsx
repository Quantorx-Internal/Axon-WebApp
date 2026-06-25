import { SectionHeader } from "../../components/SectionHeader";
import { Reveal } from "../../components/Reveal";

const integrations = [
  { label: "PostgreSQL / PostGIS" },
  { label: "Oracle Spatial" },
  { label: "SQL Server" },
  { label: "ArcGIS Online" },
  { label: "ArcGIS Enterprise" },
  { label: "REST APIs" },
];

const deployment = [
  {
    tag: "Managed",
    title: "Cloud",
    desc: "Fully managed, automatically scaled, and continuously updated — we run the infrastructure, you ask the questions.",
  },
  {
    tag: "Self-hosted",
    title: "Your environment",
    desc: "Run AXON inside your own VPC, data center, or air-gapped network — your stack, your rules.",
  },
];

export default function CloudEcosystem() {
  return (
    <section className="w-full bg-white section-pad px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          index="03"
          label="Integrations"
          title="Connect your spatial data, deploy anywhere"
          description="Connect the spatial databases and ArcGIS services you already run, then deploy in the cloud or self-host in your own environment."
        />

        <div className="grid lg:grid-cols-[1.25fr_1fr] gap-5 mt-14">
          {/* Connectors */}
          <Reveal className="rounded-3xl border border-line bg-mist/50 p-7 md:p-8">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-ink-muted mb-6">
              Connect your spatial data
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {integrations.map((it) => (
                <div
                  key={it.label}
                  className="group flex items-center gap-3 rounded-2xl bg-white border border-line p-4 hover:border-ink/20 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <span className="w-2 h-2 rounded-full bg-gradient-to-tr from-accent to-teal shrink-0" />
                  <span className="font-mono text-[0.62rem] uppercase tracking-wider text-ink-soft leading-tight">
                    {it.label}
                  </span>
                </div>
              ))}
              <div className="flex items-center justify-center rounded-2xl border border-dashed border-ink/20 p-4">
                <span className="font-mono text-[0.62rem] uppercase tracking-wider text-ink-muted">
                  + more
                </span>
              </div>
            </div>
          </Reveal>

          {/* Deploy anywhere (dark) */}
          <Reveal className="relative overflow-hidden rounded-3xl bg-ink-900 p-7 md:p-8 flex flex-col">
            <img
              src="/unsplash-city-grid.jpg"
              alt=""
              aria-hidden="true"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover opacity-25"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/90 to-ink-900/65" />
            <div
              className="absolute -top-16 -right-12 w-60 h-60 pointer-events-none opacity-70"
              style={{
                background:
                  "radial-gradient(circle, rgba(59,141,255,0.4), transparent 60%), radial-gradient(circle at 60% 70%, rgba(34,211,204,0.35), transparent 60%)",
                filter: "blur(18px)",
              }}
            />
            <p className="relative font-mono text-xs uppercase tracking-[0.14em] text-white/50 mb-6">
              Deploy anywhere
            </p>
            <div className="relative flex flex-col">
              {deployment.map((d, i) => (
                <div
                  key={d.title}
                  className={`py-5 ${i > 0 ? "border-t border-dashed border-white/15" : ""}`}
                >
                  <div className="flex items-center gap-3 mb-1.5">
                    <span className="font-mono text-[0.6rem] uppercase tracking-wider text-teal-bright border border-white/15 rounded px-2 py-0.5">
                      {d.tag}
                    </span>
                    <h3 className="font-display text-lg font-medium text-white">
                      {d.title}
                    </h3>
                  </div>
                  <p className="text-white/55 text-[0.95rem] leading-relaxed">
                    {d.desc}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
