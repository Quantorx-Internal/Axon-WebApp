import PlanHeader from "../../../components/PlanHeader";
import RowLabel from "../../../components/RowLabel";
import FeatureCell from "../../../components/FeatureCell";
import Button from "../../../components/Button";

const plansData = [
  {
    title: "Enterprise",
    badge: false,
    colour: false,
    description: "For a business unit-level implementation of advanced spatial analytics in the cloud.",
    features: [
      { label: "Users", values: ["For a team"] },
      { label: "Usage", subtitle: "per year", values: ["Basic Usage Quota consumption"] },
      { label: "Deployment options", values: ["Cloud"], image: true },
      { label: "Administration and Security", values: ["SLA", "Usage metrics", "Audit logs on demand", "SSO", "Groups", "Custom branding"] },
      { label: "Location Data Services", subtitle: "Geocoding, isolines and routing operations per year", values: ["Limited based on platform usage quota"] },
      { label: "Developer Tools", values: ["Limited API Access, Limited Tokens"] },
      { label: "Support Package", values: ["Standard or Premium"] },
    ],
  },
  {
    title: "Strategic",
    badge: true,
    colour: true,
    description: "For multi-departmental teams running analytics at scale.",
    features: [
      { label: "Users", values: ["For growing teams"] },
      { label: "Usage", subtitle: "per year", values: ["Expanded Usage Quota consumption"] },
      { label: "Deployment options", values: ["Cloud", "Self-hosted Optional"], image: true },
      { label: "Administration and Security", values: ["SLA", "Usage metrics", "Audit logs on demand", "SSO", "Groups", "Custom branding"] },
      { label: "Location Data Services", subtitle: "Geocoding, isolines and routing operations per year", values: ["Limited based on platform usage quota"] },
      { label: "Developer Tools", values: ["Unlimited API Access, Unlimited Tokens"] },
      { label: "Support Package", values: ["Premium or Elite"] },
    ],
  },
  {
    title: "Custom",
    badge: false,
    colour: true,
    description: "For large enterprises and/or complex analytics scenarios.",
    features: [
      { label: "Users", values: ["For large enterprises"] },
      { label: "Usage", subtitle: "per year", values: ["High-volume Usage Quota Consumption"] },
      { label: "Deployment options", values: ["Cloud", "Self-hosted Optional"], image: true },
      { label: "Administration and Security", values: ["SLA", "Usage metrics", "Audit logs on demand", "SSO", "Groups", "Custom branding"] },
      { label: "Location Data Services", subtitle: "Geocoding, isolines and routing operations per year", values: ["Up to unlimited"] },
      { label: "Developer Tools", values: ["Unlimited API Access, Unlimited Tokens"] },
      { label: "Support Package", values: ["Elite"] },
    ],
  },
];

function MobileDeploymentIcons() {
  return (
    <div className="flex flex-row flex-wrap gap-2 items-center mb-1">
      <img src="/CloudIconClean.png" alt="Cloud" className="w-8 h-8 shrink-0 object-contain border border-[#D9D9D9]" />
      <img src="/AWSIconClean.png" alt="AWS" className="w-8 h-8 shrink-0 object-contain border border-[#D9D9D9]" />
      <img src="/AzureIconClean.png" alt="Azure" className="w-8 h-8 shrink-0 object-contain border border-[#D9D9D9]" />
      <img src="/DataBricksClean.png" alt="Databricks" className="w-8 h-8 shrink-0 object-contain border border-[#D9D9D9]" />
      <img src="/SnowFlakeClean.png" alt="Snowflake" className="w-8 h-8 shrink-0 object-contain border border-[#D9D9D9]" />
    </div>
  );
}

export default function Plans() {
  return (
    <section className="w-full">
      <div className="flex flex-col items-center justify-center text-center gap-4 mb-8 md:mb-12 px-4 md:px-0 max-w-[1400px] mx-auto">
        <p className="font-Roboto font-black text-[28px] md:text-[38px] lg:text-[50px] leading-[110%] lg:leading-[100%] text-center capitalize max-w-4xl mx-auto text-slate-800 pt-[40px] md:pt-[70px]">
          Predictable pricing for enterprise spatial analytics at scale
        </p>
        <p className="font-Roboto font-[500] text-[18px] md:text-[22px] lg:text-[26px] leading-[28px] md:leading-[40px] lg:leading-[50px] text-center capitalize max-w-3xl mx-auto text-slate-800 pt-[16px] md:pt-[29px]">
          Straightforward, up-front pricing with no hidden add-ons. Focus on your work, not your licenses.
        </p>
      </div>

      {/*  Mobile View  */}
      <div className="md:hidden overflow-x-auto pt-6 pb-4">
        <div
          className="inline-grid px-4 gap-x-4"
          style={{ gridTemplateColumns: 'repeat(3, min(75vw, 300px))' }}
        >
          {/* Header row — one cell per plan, CSS grid aligns heights automatically */}
          {plansData.map((plan) => (
            <div
              key={`header-${plan.title}`}
              className="relative flex flex-col justify-between p-5 gap-3 bg-[#EFEFEF] rounded-t-xl border border-[#D9D9D9] overflow-visible"
            >
              <div className="flex flex-col gap-3">
                {plan.badge && (
                  <div className="absolute top-0 left-0 right-0 flex translate-y-[-15px] justify-center">
                    <span className="bg-[#21B3E6] text-white text-xs tracking-[0.7px] font-[500] rounded-full uppercase py-2 px-4">
                      Most Popular
                    </span>
                  </div>
                )}
                <h2 className="font-Roboto font-[600] text-2xl leading-[32px] text-[#162945]">
                  {plan.title}
                </h2>
                <p className="font-Roboto font-[400] text-sm leading-[22px] text-[#162945]">
                  {plan.description}
                </p>
              </div>
              <Button
                text="Get A Quote"
                variant={plan.colour ? "primary" : "transparent"}
                className="w-full py-2.5"
                onClick={() => {}}
              />
            </div>
          ))}

          {/* Feature rows — outer loop = row (feature index), inner loop = column (plan)
              flatMap produces a flat list so CSS grid places items left→right, top→bottom,
              meaning all three cells for the same feature end up in the same grid row and
              share the same height automatically. */}
          {plansData[0].features.flatMap((_, featIdx) =>
            plansData.map((plan) => {
              const feat = plan.features[featIdx];
              const isLast = featIdx === plansData[0].features.length - 1;
              return (
                <div
                  key={`${plan.title}-feat-${featIdx}`}
                  className={`flex flex-col gap-1 px-5 py-4 bg-[#EFEFEF] border-l border-r border-b border-[#D9D9D9]${isLast ? ' rounded-b-xl' : ''}`}
                >
                  <span className="font-Roboto font-[700] text-sm leading-[20px] text-[#036FE2] uppercase">
                    {feat.label}
                  </span>
                  {feat.subtitle && (
                    <span className="font-Roboto font-[400] text-xs leading-[16px] text-[#036FE2] opacity-70">
                      {feat.subtitle}
                    </span>
                  )}
                  {feat.image && <MobileDeploymentIcons />}
                  {feat.values.map((val) => (
                    <span key={val} className="font-Roboto font-[400] text-base leading-[26px] text-[#162945]">
                      {val}
                    </span>
                  ))}
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* Desktop view */}
      <div className="hidden md:block overflow-x-auto px-4 md:px-0 max-w-[1400px] mx-auto">
        <div className="min-w-[900px]" style={{ display: 'grid', gridTemplateColumns: 'minmax(auto, 400px) repeat(3, 1fr)' }}>
          <div />
          <div style={{ gridColumn: 'span 3' }}>
            <PlanHeader />
          </div>

          <RowLabel text="Users" position="first" />
          <FeatureCell text="For a team" />
          <FeatureCell text="For growing teams" />
          <FeatureCell text="For large enterprises" />

          <RowLabel text="Usage" subtitle="per year" />
          <FeatureCell text=" Basic Usage Quota consumption" />
          <FeatureCell text="Expanded Usage Quota consumption" />
          <FeatureCell text="High-volume Usage Quota Consumption" />

          <RowLabel text="Deployment options" />
          <FeatureCell image={true} text="Cloud" />
          <FeatureCell image={true} text="Cloud" text2="Self-hosted Optional" />
          <FeatureCell image={true} text="Cloud" text2="Self-hosted Optional" />

          <RowLabel text="Administration and Security" />
          <FeatureCell text="SLA" text2="Usage metrics" text3="Audit logs on demand" text4="SSO" text5="Groups" text6="Custom branding" />
          <FeatureCell text="SLA" text2="Usage metrics" text3="Audit logs on demand" text4="SSO" text5="Groups" text6="Custom branding" />
          <FeatureCell text="SLA" text2="Usage metrics" text3="Audit logs on demand" text4="SSO" text5="Groups" text6="Custom branding" />

          <RowLabel text="Location Data Services" subtitle="Geocoding, isolines and routing operations per year" />
          <FeatureCell text="Limited based on platform usage quota" />
          <FeatureCell text="Limited based on platform usage quota" />
          <FeatureCell text="Up to unlimited" />

          <RowLabel text="Developer Tools" />
          <FeatureCell text="Limited API Access, Limited Tokens" />
          <FeatureCell text="Unlimited API Access, Unlimited Tokens" />
          <FeatureCell text="Unlimited API Access, Unlimited Tokens" />

          <RowLabel text="Support Package" position="last" />
          <FeatureCell text="Standard or Premium" />
          <FeatureCell text="Premium or Elite" />
          <FeatureCell text="Elite" />
        </div>
      </div>
    </section>
  );
}