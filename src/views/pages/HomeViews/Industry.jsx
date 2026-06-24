import { SectionHeader } from "../../components/SectionHeader";
import { HorizontalGallery } from "../../components/HorizontalGallery";
import { AxonMark } from "../../components/AxonLogo";
import { scrollTo } from "@/lib/scrollTo";

const industries = [
  {
    n: "01",
    name: "Real Estate",
    desc: "Site evaluation, market analysis, and neighborhood assessment — value a plot in minutes, not weeks.",
    grad: "from-accent/30 to-teal/20",
  },
  {
    n: "02",
    name: "Government & Planning",
    desc: "Land use, infrastructure, and demographics — self-service spatial queries for planning and permits.",
    grad: "from-violet/30 to-accent/20",
  },
  {
    n: "03",
    name: "Telecom & Infrastructure",
    desc: "Coverage gaps, site selection, and customer density across your network.",
    grad: "from-teal/30 to-accent/20",
  },
  {
    n: "04",
    name: "Retail & Commercial",
    desc: "Sharper site selection, catchment analysis, and competitor proximity.",
    grad: "from-accent/30 to-violet/20",
  },
  {
    n: "05",
    name: "Insurance & Risk",
    desc: "Hazard proximity, flood-zone exposure, and risk classification, on demand.",
    grad: "from-teal/30 to-violet/20",
  },
  {
    n: "06",
    name: "Logistics & Supply Chain",
    desc: "Warehouse siting, delivery zones, and route planning across regions.",
    grad: "from-accent/30 to-teal/20",
  },
];

export default function Industry() {
  return (
    <section className="w-full bg-mist">
      <div className="max-w-7xl mx-auto px-5 md:px-8 pt-20 md:pt-28 pb-12 md:pb-16">
        <SectionHeader
          index="05"
          label="By industry"
          title="What's happening in your industry?"
          description="Discover how teams across sectors put natural-language spatial analysis to work. Scroll to explore."
        />
      </div>

      <HorizontalGallery className="bg-mist pb-20 md:pb-0">
        {industries.map((ind) => (
          <article
            key={ind.n}
            className="group snap-start shrink-0 w-[82vw] sm:w-[24rem] lg:w-[27rem] h-auto lg:h-[60vh] bg-white rounded-[1.75rem] border border-line overflow-hidden flex flex-col hover:border-ink/20 transition-colors duration-300"
          >
            {/* gradient header */}
            <div className={`relative h-40 lg:h-1/3 bg-gradient-to-tr ${ind.grad} flex items-center justify-center`}>
              <div className="absolute inset-0 bg-grid opacity-40" />
              <AxonMark className="relative w-9 h-9 transition-transform duration-500 group-hover:-translate-y-1" />
              <span className="absolute top-4 right-5 font-mono text-xs text-ink/40">
                {ind.n}
              </span>
            </div>

            <div className="flex flex-col flex-1 p-7 md:p-8">
              <h3 className="font-display text-2xl md:text-3xl font-medium text-ink tracking-[-0.03em]">
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
