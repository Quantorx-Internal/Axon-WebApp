import { FiArrowUp } from "react-icons/fi";
import { AxonLogo } from "../../components/AxonLogo";
import { Magnetic } from "../../components/Magnetic";
import { Reveal, WordReveal } from "../../components/Reveal";
import { scrollTo } from "@/lib/scrollTo";
import { CONTACT, activeSocials } from "@/lib/site";

const platformLinks = [
  { label: "Overview", id: "platform" },
  { label: "AXON Agent", id: "platform" },
  { label: "How it works", id: "how" },
  { label: "Pricing", id: "plans" },
];

const solutionLinks = [
  { label: "By industry", id: "industry" },
  { label: "Integrations", id: "solution" },
  { label: "Security", id: "enterprise" },
  { label: "FAQ", id: "faq" },
];

function LinkColumn({ title, links }) {
  return (
    <div className="flex flex-col gap-4">
      <p className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-white/40">
        {title}
      </p>
      <div className="flex flex-col gap-3">
        {links.map((link) => (
          <button
            key={link.label}
            onClick={() => scrollTo(link.id, 90)}
            className="text-left text-[0.95rem] text-white/65 hover:text-white transition-colors bg-transparent border-none cursor-pointer p-0 w-fit"
          >
            {link.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function Footer() {
  const socials = activeSocials();

  return (
    <footer className="relative bg-ink-900 text-white overflow-hidden grain">
      {/* static aurora glow */}
      <div
        className="absolute -top-24 right-0 w-[42rem] h-[42rem] pointer-events-none opacity-60"
        style={{
          background:
            "radial-gradient(circle at 70% 30%, rgba(2,111,227,0.35), transparent 55%), radial-gradient(circle at 90% 60%, rgba(34,211,204,0.3), transparent 55%)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        {/* Big CTA */}
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 items-end py-16 md:py-20">
          <h2 className="font-display text-white font-medium text-4xl md:text-6xl lg:text-[4.5rem] leading-[0.95] tracking-[-0.04em]">
            <WordReveal text="Let's build something" className="block" />
            <WordReveal text="spatial." className="block text-white/45" delay={0.1} />
          </h2>
          <Reveal className="flex flex-col items-start lg:items-end gap-6">
            <Magnetic>
              <button
                onClick={() => scrollTo("request-demo", 90)}
                className="inline-flex items-center gap-2.5 rounded-[10px] bg-white text-ink font-mono text-xs md:text-[0.78rem] font-medium uppercase tracking-[0.08em] py-3.5 px-7 hover:bg-cloud transition-colors"
              >
                Request a demo
                <span className="text-[1.15em] leading-none -mt-px">•</span>
              </button>
            </Magnetic>
            {socials.length > 0 && (
              <div className="flex items-center gap-2.5">
                {socials.map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:bg-white hover:text-ink hover:border-white transition-colors"
                  >
                    <Icon className="text-sm" />
                  </a>
                ))}
              </div>
            )}
          </Reveal>
        </div>

        <hr className="border-0 border-t border-dashed border-white/15" />

        {/* Columns */}
        <div className="grid lg:grid-cols-[1.5fr_1fr_1fr_1.2fr] gap-12 lg:gap-8 py-14">
          <div className="flex flex-col gap-5 max-w-xs">
            <AxonLogo variant="light" onClick={() => scrollTo("hero", 0)} />
            <p className="text-white/55 leading-relaxed">
              Natural-language GIS intelligence — ask your spatial data anything,
              in English or Arabic, and get instant maps and answers.
            </p>
            <a
              href={CONTACT.website}
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit font-mono text-xs uppercase tracking-[0.12em] text-white/35 hover:text-white/70 transition-colors"
            >
              Powered by {CONTACT.company} ↗
            </a>
          </div>
          <LinkColumn title="Platform" links={platformLinks} />
          <LinkColumn title="Solutions" links={solutionLinks} />
          <div className="flex flex-col gap-4">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-white/40">
              Contact
            </p>
            <div className="flex flex-col gap-3 text-[0.95rem]">
              <a href={`mailto:${CONTACT.email}`} className="text-white/65 hover:text-white transition-colors">
                {CONTACT.email}
              </a>
              <a href={CONTACT.phoneHref} className="text-white/65 hover:text-white transition-colors">
                {CONTACT.phoneDisplay}
              </a>
              <span className="text-white/65">{CONTACT.location}</span>
            </div>
          </div>
        </div>

        <hr className="border-0 border-t border-dashed border-white/15" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-6">
          <p className="font-mono text-xs uppercase tracking-[0.1em] text-white/35 order-2 md:order-1">
            © 2026 {CONTACT.company}. All rights reserved.
          </p>
          <button
            onClick={() => scrollTo("hero", 0)}
            className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.12em] text-white/55 hover:text-white transition-colors bg-transparent border-none cursor-pointer order-1 md:order-2"
          >
            Back to top <FiArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
}
