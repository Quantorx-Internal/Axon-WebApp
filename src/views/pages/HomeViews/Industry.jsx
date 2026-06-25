import { SectionHeader } from "../../components/SectionHeader";
import { HorizontalGallery } from "../../components/HorizontalGallery";
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

const industries = [
  {
    n: "01",
    name: "Real Estate",
    desc: "Site evaluation, market analysis, and neighborhood assessment — value a plot in minutes, not weeks.",
    path: (
      <>
        <path d="M3 21h18" />
        <path d="M5 21V8l7-5 7 5v13" />
        <path d="M10 21v-6h4v6" />
      </>
    ),
  },
  {
    n: "02",
    name: "Government & Planning",
    desc: "Land use, infrastructure, and demographics — self-service spatial queries for planning and permits.",
    path: (
      <>
        <path d="M3 21h18" />
        <path d="M12 3 4 8h16Z" />
        <path d="M6 11v7M10 11v7M14 11v7M18 11v7" />
      </>
    ),
  },
  {
    n: "03",
    name: "Telecom & Infrastructure",
    desc: "Coverage gaps, site selection, and customer density across your network.",
    path: (
      <>
        <path d="M5 18a8 8 0 0 1 0-12" />
        <path d="M19 6a8 8 0 0 1 0 12" />
        <path d="M8.5 15a4 4 0 0 1 0-6" />
        <path d="M15.5 9a4 4 0 0 1 0 6" />
        <circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none" />
      </>
    ),
  },
  {
    n: "04",
    name: "Retail & Commercial",
    desc: "Sharper site selection, catchment analysis, and competitor proximity.",
    path: (
      <>
        <path d="M3 9l1.5-5h15L21 9" />
        <path d="M4 9v10a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9" />
        <path d="M3 9h18M9.5 20v-6h5v6" />
      </>
    ),
  },
  {
    n: "05",
    name: "Insurance & Risk",
    desc: "Hazard proximity, flood-zone exposure, and risk classification, on demand.",
    path: (
      <>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
  },
  {
    n: "06",
    name: "Logistics & Supply Chain",
    desc: "Warehouse siting, delivery zones, and route planning across regions.",
    path: (
      <>
        <path d="M2 7h11v9H2z" />
        <path d="M13 10h4l3 3v3h-7z" />
        <circle cx="6" cy="18" r="1.6" />
        <circle cx="17" cy="18" r="1.6" />
      </>
    ),
  },
];

export default function Industry() {
  return (
    <section className="w-full bg-mist">
      <div className="max-w-7xl mx-auto px-5 md:px-8 pt-20 md:pt-28 pb-12 md:pb-16">
        <SectionHeader
          index="04"
          label="By industry"
          title="What's happening in your industry?"
          description="Discover how teams across sectors put natural-language spatial analysis to work. Scroll to explore."
        />
      </div>

      <HorizontalGallery className="bg-mist pb-20 md:pb-0">
        {industries.map((ind) => (
          <article
            key={ind.n}
            className="group relative snap-start shrink-0 w-[82vw] sm:w-[24rem] lg:w-[27rem] h-auto lg:h-[56vh] bg-white rounded-[1.75rem] border border-line overflow-hidden flex flex-col hover:border-accent/30 hover:-translate-y-1 transition-all duration-300"
          >
            {/* faint GIS grid texture fading downward — no colored gradient */}
            <div
              className="pointer-events-none absolute inset-0 bg-grid opacity-50"
              style={{
                maskImage: "linear-gradient(to bottom, black, transparent 55%)",
                WebkitMaskImage: "linear-gradient(to bottom, black, transparent 55%)",
              }}
            />

            <div className="relative flex flex-col flex-1 p-7 md:p-8">
              <div className="flex items-start justify-between">
                <Icon
                  path={ind.path}
                  className="w-9 h-9 text-accent transition-all duration-300 group-hover:text-ink group-hover:scale-110 origin-left"
                />
                <span
                  className="font-display text-5xl font-semibold leading-none text-transparent select-none transition-transform duration-500 group-hover:-translate-y-1"
                  style={{ WebkitTextStroke: "1.5px rgba(18,19,23,0.10)" }}
                  aria-hidden="true"
                >
                  {ind.n}
                </span>
              </div>

              <h3 className="font-display text-2xl md:text-3xl font-medium text-ink tracking-[-0.03em] mt-8">
                {ind.name}
              </h3>
              <p className="text-ink-soft leading-relaxed mt-3 flex-1">
                {ind.desc}
              </p>
              <button
                onClick={() => scrollTo("plans", 90)}
                className="group/btn mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.1em] text-ink hover:text-accent transition-colors bg-transparent border-none cursor-pointer p-0 w-fit"
              >
                Explore
                <span className="transition-transform group-hover/btn:translate-x-1">→</span>
              </button>
            </div>
          </article>
        ))}
      </HorizontalGallery>
    </section>
  );
}
