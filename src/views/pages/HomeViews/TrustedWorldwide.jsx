import { Marquee } from "../../components/Marquee";
import { Reveal } from "../../components/Reveal";
import { Counter } from "../../components/Counter";
import { Eyebrow } from "../../components/Eyebrow";
import { Parallax } from "../../components/Parallax";

const partners = [
  { src: "/AWSIconClean.png", alt: "AWS" },
  { src: "/AzureIconClean.png", alt: "Microsoft Azure" },
  { src: "/CloudIconClean.png", alt: "Google Cloud" },
];

const stats = [
  { value: 95, suffix: "%", label: "Faster spatial insight" },
  { value: 80, suffix: "%", label: "Less GIS training" },
  { value: 25, suffix: "+", label: "Spatial operations" },
  { value: 99.9, suffix: "%", decimals: 1, label: "Uptime SLA" },
];

export default function TrustedWorldwide() {
  return (
    <section className="relative w-full bg-ink-900 grain overflow-hidden border-y border-white/10">
      {/* parallax earth-from-space backdrop */}
      <Parallax amount={12} className="absolute inset-x-0 -top-[16%] h-[132%]">
        <img
          src="/unsplash-earth-night.jpg"
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover"
        />
      </Parallax>
      <div className="absolute inset-0 bg-gradient-to-b from-ink-900/85 via-ink-900/72 to-ink-900/94" />
      <div className="absolute inset-0 vignette pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="flex flex-col gap-4 max-w-xl">
            <Eyebrow light brace>
              Trusted foundation
            </Eyebrow>
            <h2 className="font-display text-3xl lg:text-[2.6rem] font-medium text-white tracking-[-0.035em] leading-[1.05]">
              Built for the teams mapping the world.
            </h2>
          </div>
          <p className="font-mono text-xs uppercase tracking-[0.12em] text-white/50 md:text-right md:max-w-[15rem] leading-relaxed">
            Runs on the cloud you already trust — or fully self-hosted
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <Marquee duration={32} className="mb-16 py-2">
            {partners.map((p, i) => (
              <div
                key={`${p.alt}-${i}`}
                className="flex items-center justify-center mx-8 md:mx-14 h-16"
              >
                <img
                  src={p.src}
                  alt={p.alt}
                  className="h-9 md:h-11 w-auto object-contain brightness-0 invert opacity-65 hover:opacity-100 hover:scale-110 transition-all duration-500 ease-smooth"
                />
              </div>
            ))}
          </Marquee>
        </Reveal>

        <Reveal stagger={0.1} className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`flex flex-col gap-2 py-5 lg:py-0 px-2 lg:px-8 ${
                i > 0 ? "lg:border-l border-dashed border-white/15" : ""
              }`}
            >
              <div className="font-display text-5xl md:text-6xl font-medium text-white tracking-[-0.04em]">
                <Counter
                  value={s.value}
                  suffix={s.suffix}
                  decimals={s.decimals || 0}
                />
              </div>
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.1em] text-white/55">
                {s.label}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
