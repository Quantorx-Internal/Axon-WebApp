import { cn } from "../../lib/utils";
import { AxonMark } from "./AxonLogo";

/* Window chrome wrapper shared by every mockup. */
function MockFrame({ title, children, className }) {
  return (
    <div
      className={cn(
        "relative rounded-2xl border border-line bg-white overflow-hidden shadow-card",
        className
      )}
    >
      <div className="flex items-center gap-2 px-4 h-10 border-b border-line bg-mist/70">
        <span className="w-2.5 h-2.5 rounded-full bg-line" />
        <span className="w-2.5 h-2.5 rounded-full bg-line" />
        <span className="w-2.5 h-2.5 rounded-full bg-line" />
        <span className="ml-3 font-mono text-[0.62rem] uppercase tracking-[0.12em] text-ink-muted">
          {title}
        </span>
        <span className="ml-auto w-1.5 h-1.5 rounded-full bg-teal" />
      </div>
      <div className="relative">{children}</div>
    </div>
  );
}

/* ---------------- Analytics dashboard ---------------- */
export function AnalyticsMock({ className }) {
  const kpis = [
    { label: "Coverage", value: "94.2%", delta: "+6.1%" },
    { label: "Sites", value: "1,284", delta: "+38" },
    { label: "Risk score", value: "0.21", delta: "-0.04" },
  ];
  const bars = [38, 52, 44, 66, 58, 78, 71, 90, 84];
  return (
    <MockFrame title="axon · analytics" className={className}>
      <div className="p-5">
        <div className="grid grid-cols-3 gap-3 mb-5">
          {kpis.map((k) => (
            <div key={k.label} className="rounded-xl border border-line p-3">
              <p className="font-mono text-[0.6rem] uppercase tracking-wider text-ink-muted">
                {k.label}
              </p>
              <p className="font-display text-xl font-semibold text-ink mt-1 tracking-tight">
                {k.value}
              </p>
              <p className="font-mono text-[0.6rem] text-teal mt-0.5">{k.delta}</p>
            </div>
          ))}
        </div>
        <div className="rounded-xl border border-line p-4">
          <div className="flex items-center justify-between mb-3">
            <p className="font-mono text-[0.6rem] uppercase tracking-wider text-ink-muted">
              Spatial demand · 30d
            </p>
            <span className="font-mono text-[0.6rem] text-accent">live</span>
          </div>
          <div className="flex items-end gap-2 h-24">
            {bars.map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t-[3px] bg-gradient-to-t from-accent/30 to-accent"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
      </div>
    </MockFrame>
  );
}

/* ---------------- GIS map ---------------- */
export function MapMock({ className }) {
  return (
    <MockFrame title="axon · atlas" className={className}>
      <div className="relative h-[320px] bg-[#eef3f9] bg-grid overflow-hidden">
        {/* heat blobs */}
        <div className="absolute left-[18%] top-[30%] w-40 h-40 rounded-full bg-accent/25 blur-2xl" />
        <div className="absolute right-[16%] bottom-[18%] w-36 h-36 rounded-full bg-teal/25 blur-2xl" />

        {/* abstract roads / region */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 320" fill="none" preserveAspectRatio="none">
          <path d="M-10 90 L150 120 L250 70 L420 110" stroke="#cdd9e8" strokeWidth="2" />
          <path d="M40 -10 L70 140 L120 260 L100 340" stroke="#cdd9e8" strokeWidth="2" />
          <path d="M-10 230 L160 210 L300 250 L420 220" stroke="#cdd9e8" strokeWidth="2" />
          <path d="M300 -10 L280 120 L330 250" stroke="#cdd9e8" strokeWidth="2" />
          <path
            d="M150 120 L250 70 L300 130 L260 200 L160 210 L120 160 Z"
            fill="rgba(2,111,227,0.10)"
            stroke="rgba(2,111,227,0.45)"
            strokeWidth="1.5"
          />
          <path d="M70 250 Q 180 180 320 240" stroke="#10B8B0" strokeWidth="2" strokeDasharray="5 5" />
        </svg>

        {/* pins */}
        <div className="absolute left-[34%] top-[34%] -translate-x-1/2 -translate-y-full">
          <AxonMark className="w-6 h-6 drop-shadow" />
        </div>
        <div className="absolute left-[58%] top-[52%] -translate-x-1/2 -translate-y-full">
          <AxonMark className="w-5 h-5 drop-shadow opacity-80" />
        </div>
        <div className="absolute left-[46%] top-[68%] -translate-x-1/2 -translate-y-full">
          <AxonMark className="w-4 h-4 drop-shadow opacity-70" />
        </div>

        {/* search */}
        <div className="absolute top-4 left-4 right-4 flex items-center gap-2 bg-white/90 backdrop-blur border border-line rounded-lg px-3 h-9 shadow-soft">
          <svg className="w-3.5 h-3.5 text-ink-muted" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <circle cx="11" cy="11" r="7" />
            <path d="m21 21-4.3-4.3" strokeLinecap="round" />
          </svg>
          <span className="text-xs text-ink-muted">Find optimal retail sites near…</span>
        </div>

        {/* legend card */}
        <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur border border-line rounded-xl p-3 shadow-soft">
          <p className="font-mono text-[0.58rem] uppercase tracking-wider text-ink-muted mb-2">
            Demand density
          </p>
          <div className="h-2 w-32 rounded-full bg-gradient-to-r from-teal via-accent to-violet" />
          <div className="flex justify-between mt-1">
            <span className="font-mono text-[0.55rem] text-ink-muted">low</span>
            <span className="font-mono text-[0.55rem] text-ink-muted">high</span>
          </div>
        </div>

        {/* layers */}
        <div className="absolute top-16 right-4 bg-white/95 backdrop-blur border border-line rounded-xl p-2.5 shadow-soft flex flex-col gap-1.5">
          {["Heatmap", "Roads", "Regions"].map((l, i) => (
            <div key={l} className="flex items-center gap-2">
              <span className={cn("w-3 h-3 rounded-[4px]", i === 0 ? "bg-accent" : "border border-ink/30")} />
              <span className="font-mono text-[0.58rem] text-ink-soft">{l}</span>
            </div>
          ))}
        </div>
      </div>
    </MockFrame>
  );
}

/* ---------------- Agent chat ---------------- */
export function ChatMock({ className }) {
  return (
    <MockFrame title="axon · agent" className={className}>
      <div className="p-5 flex flex-col gap-4 min-h-[320px]">
        <div className="flex items-center gap-3 pb-3 border-b border-line">
          <span className="w-9 h-9 rounded-full bg-gradient-to-br from-accent to-teal flex items-center justify-center text-white">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2 2 7l10 5 10-5-10-5Zm0 7L2 14l10 5 10-5-10-5Z" />
            </svg>
          </span>
          <div>
            <p className="text-sm font-medium text-ink leading-none">Nova Agent</p>
            <p className="font-mono text-[0.6rem] text-teal mt-1 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-teal" /> online
            </p>
          </div>
        </div>

        <div className="self-end max-w-[80%] bg-accent text-white rounded-2xl rounded-tr-sm px-4 py-2.5 text-sm">
          Where should we open 3 new stores in Austin?
        </div>

        <div className="self-start max-w-[88%] bg-mist border border-line rounded-2xl rounded-tl-sm px-4 py-3 text-sm text-ink-soft">
          Based on footfall, competition and drive-time, here are the top sites:
          <div className="mt-3 flex flex-col gap-2">
            {[
              ["South Congress", "score 0.94"],
              ["Mueller District", "score 0.91"],
              ["Domain North", "score 0.88"],
            ].map(([name, score]) => (
              <div key={name} className="flex items-center justify-between bg-white border border-line rounded-lg px-3 py-2">
                <span className="flex items-center gap-2 text-ink text-[0.8rem]">
                  <AxonMark className="w-3.5 h-3.5" /> {name}
                </span>
                <span className="font-mono text-[0.62rem] text-accent">{score}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="self-start flex items-center gap-1.5 px-2">
          <span className="w-1.5 h-1.5 rounded-full bg-ink-muted animate-pulse-soft" />
          <span className="w-1.5 h-1.5 rounded-full bg-ink-muted animate-pulse-soft" style={{ animationDelay: "0.2s" }} />
          <span className="w-1.5 h-1.5 rounded-full bg-ink-muted animate-pulse-soft" style={{ animationDelay: "0.4s" }} />
        </div>

        <div className="mt-auto flex items-center gap-2 border border-line rounded-xl px-3 h-10">
          <span className="text-xs text-ink-muted flex-1">Ask AXON anything…</span>
          <span className="w-6 h-6 rounded-md bg-ink text-white flex items-center justify-center text-xs">↑</span>
        </div>
      </div>
    </MockFrame>
  );
}

/* ---------------- Code / API ---------------- */
export function CodeMock({ className }) {
  const lines = [
    [["import", "kw"], [" { axon } ", "fn"], ["from", "kw"], [" 'axon-sdk'", "str"]],
    [],
    [["const", "kw"], [" sites ", "var"], ["= await", "kw"], [" axon.", ""], ["query", "fn"], ["({", ""]],
    [["  layer:", "prop"], [" 'demand',", "str"]],
    [["  near:", "prop"], [" [30.26, -97.74],", "num"]],
    [["  topK:", "prop"], [" 3,", "num"]],
    [["})", ""]],
  ];
  const color = {
    kw: "text-violet",
    fn: "text-accent",
    str: "text-teal",
    num: "text-accent",
    prop: "text-ink",
    var: "text-ink",
    "": "text-ink-soft",
  };
  return (
    <MockFrame title="axon · sdk" className={className}>
      <div className="p-5 bg-[#0b0c0e] min-h-[320px]">
        <div className="flex items-center justify-between mb-4">
          <span className="font-mono text-[0.62rem] uppercase tracking-wider text-white/40">
            query.ts
          </span>
          <span className="font-mono text-[0.6rem] text-teal-bright bg-teal/15 rounded px-2 py-0.5">
            200 OK
          </span>
        </div>
        <pre className="font-mono text-[0.8rem] leading-7">
          {lines.map((line, i) => (
            <div key={i} className="flex">
              <span className="w-6 select-none text-white/25">{i + 1}</span>
              <span>
                {line.length === 0 ? (
                  <span>&nbsp;</span>
                ) : (
                  line.map(([t, c], j) => (
                    <span key={j} className={cn(color[c] || "text-white/80")}>
                      {t}
                    </span>
                  ))
                )}
              </span>
            </div>
          ))}
        </pre>
        <div className="mt-4 rounded-lg border border-white/10 bg-white/5 p-3">
          <p className="font-mono text-[0.62rem] text-white/40 mb-2">→ response</p>
          <p className="font-mono text-[0.7rem] text-teal-bright">
            3 sites · 142ms · cached
          </p>
        </div>
      </div>
    </MockFrame>
  );
}
