import Button from "../../components/Button";
import { SectionHeader } from "../../components/SectionHeader";
import { Reveal } from "../../components/Reveal";
import { Magnetic } from "../../components/Magnetic";
import { scrollTo } from "@/lib/scrollTo";

const deploymentIcons = [
  { src: "/AWSIconClean.png", alt: "AWS" },
  { src: "/AzureIconClean.png", alt: "Azure" },
  { src: "/CloudIconClean.png", alt: "Google Cloud" },
];

const plansData = [
  {
    title: "Enterprise",
    badge: false,
    highlight: false,
    description:
      "For a single business unit bringing natural-language spatial analytics to its team.",
    features: [
      { label: "Users", values: ["For one team"] },
      { label: "Usage", subtitle: "per year", values: ["Standard query & analysis quota"] },
      { label: "Languages", values: ["English & Arabic"] },
      { label: "Deployment options", values: ["Cloud"], image: true },
      { label: "Administration & security", values: ["SLA", "SSO, roles & audit logs", "Usage metrics", "Custom branding"] },
      { label: "Spatial data & analysis", values: ["Core spatial operations", "ArcGIS map visualization"] },
      { label: "API & integrations", values: ["REST API access", "Standard token limits"] },
      { label: "Support package", values: ["Standard or Premium"] },
    ],
  },
  {
    title: "Strategic",
    badge: true,
    highlight: true,
    description: "For multi-department teams running spatial analysis at scale.",
    features: [
      { label: "Users", values: ["For growing teams"] },
      { label: "Usage", subtitle: "per year", values: ["Expanded query & analysis quota"] },
      { label: "Languages", values: ["English & Arabic"] },
      { label: "Deployment options", values: ["Cloud", "Self-hosted optional"], image: true },
      { label: "Administration & security", values: ["SLA", "SSO, roles & audit logs", "Usage metrics", "Custom branding"] },
      { label: "Spatial data & analysis", values: ["Full spatial operations", "ArcGIS map visualization", "Shapefile upload"] },
      { label: "API & integrations", values: ["REST API & MCP tools", "Higher token limits"] },
      { label: "Support package", values: ["Premium or Elite"] },
    ],
  },
  {
    title: "Custom",
    badge: false,
    highlight: false,
    description: "For large enterprises with complex data, compliance, and deployment needs.",
    features: [
      { label: "Users", values: ["For large enterprises"] },
      { label: "Usage", subtitle: "per year", values: ["High-volume / unlimited quota"] },
      { label: "Languages", values: ["English & Arabic"] },
      { label: "Deployment options", values: ["Cloud", "Self-hosted / on-prem"], image: true },
      { label: "Administration & security", values: ["SLA", "SSO, roles & audit logs", "Usage metrics", "Custom branding"] },
      { label: "Spatial data & analysis", values: ["Full spatial operations", "Custom datasets & connectors"] },
      { label: "API & integrations", values: ["Unlimited API & MCP tools", "Custom integrations"] },
      { label: "Support package", values: ["Elite + dedicated success"] },
    ],
  },
];

function Check({ dark }) {
  return (
    <svg
      className={`w-4 h-4 shrink-0 mt-0.5 ${dark ? "text-teal-bright" : "text-accent"}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function DeploymentIcons() {
  return (
    <div className="flex flex-wrap gap-1.5 mt-1.5">
      {deploymentIcons.map((icon) => (
        <img
          key={icon.alt}
          src={icon.src}
          alt={icon.alt}
          className="w-7 h-7 object-contain rounded-md border border-line bg-white p-0.5"
        />
      ))}
    </div>
  );
}

export default function Plans() {
  return (
    <section className="w-full bg-mist section-pad px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          index="06"
          label="Pricing"
          title="Predictable pricing for spatial analytics at scale"
          description="Straightforward, up-front pricing with no hidden add-ons. Focus on your work, not your licenses."
          className="mb-14"
        />

        <Reveal stagger={0.1} className="grid lg:grid-cols-3 gap-5 items-start">
          {plansData.map((plan) => {
            const dark = plan.highlight;
            return (
              <div
                key={plan.title}
                className={`relative flex flex-col rounded-[1.75rem] p-7 md:p-8 overflow-hidden transition-all duration-500 ease-smooth ${
                  dark
                    ? "bg-ink-900 grain text-white lg:-translate-y-4 shadow-lift"
                    : "bg-white border border-line shadow-soft hover:shadow-card hover:-translate-y-1.5"
                }`}
              >
                {dark && (
                  <div
                    className="absolute -top-20 -right-12 w-[28rem] h-[28rem] pointer-events-none opacity-70"
                    style={{
                      background:
                        "radial-gradient(circle at 70% 30%, rgba(2,111,227,0.4), transparent 55%), radial-gradient(circle at 90% 70%, rgba(34,211,204,0.32), transparent 55%)",
                      filter: "blur(38px)",
                    }}
                  />
                )}

                <div className="relative flex items-center justify-between mb-4">
                  <h3
                    className={`font-display text-2xl font-medium tracking-[-0.02em] ${
                      dark ? "text-white" : "text-ink"
                    }`}
                  >
                    {plan.title}
                  </h3>
                  {plan.badge && (
                    <span className="font-mono text-[0.6rem] uppercase tracking-[0.12em] text-white bg-gradient-to-r from-accent to-teal rounded-full px-3 py-1">
                      Most popular
                    </span>
                  )}
                </div>

                <p
                  className={`relative text-sm leading-relaxed min-h-[3.5rem] ${
                    dark ? "text-white/55" : "text-ink-soft"
                  }`}
                >
                  {plan.description}
                </p>

                <Magnetic className="relative mt-5 w-full">
                  <Button
                    text="Get a quote"
                    variant={dark ? "white" : "secondary"}
                    className="w-full py-3"
                    onClick={() => scrollTo("request-demo", 90)}
                  />
                </Magnetic>

                <div
                  className={`relative h-px my-7 ${
                    dark ? "bg-white/15" : "bg-line"
                  }`}
                />

                <ul className="relative flex flex-col gap-5">
                  {plan.features.map((feat) => (
                    <li key={feat.label}>
                      <p
                        className={`font-mono text-[0.65rem] font-medium uppercase tracking-[0.1em] ${
                          dark ? "text-accent-soft" : "text-accent"
                        }`}
                      >
                        {feat.label}
                        {feat.subtitle && (
                          <span
                            className={
                              dark
                                ? "text-white/40 normal-case tracking-normal"
                                : "text-ink-muted normal-case tracking-normal"
                            }
                          >
                            {" "}
                            · {feat.subtitle}
                          </span>
                        )}
                      </p>
                      {feat.image && <DeploymentIcons />}
                      <div className="mt-1.5 flex flex-col gap-1.5">
                        {feat.values.map((val) => (
                          <span
                            key={val}
                            className={`flex items-start gap-2 text-sm leading-relaxed ${
                              dark ? "text-white/75" : "text-ink-soft"
                            }`}
                          >
                            <Check dark={dark} />
                            {val}
                          </span>
                        ))}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
