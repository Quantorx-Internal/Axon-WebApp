import PlanHeader from "../../../components/PlanHeader";
import RowLabel from "../../../components/RowLabel";
import FeatureCell from "../../../components/FeatureCell";

export default function Plans() {
  return (
    <section className="max-w-[1400px] mx-auto overflow-hidden">
      <div className="flex flex-col items-center justify-center text-center gap-4 mb-8 md:mb-12 px-4 md:px-0">
        <p className="flex font-Roboto color-[#031125] font-black text-[28px] md:text-[38px] lg:text-[50px] leading-[110%] lg:leading-[100%] text-center items-align justify-center capitalize max-w-4xl mx-auto text-slate-800 pt-[40px] md:pt-[70px]">
                    Predictable pricing for enterprise
                    spatial analytics at scale
                </p>
                <p className="flex font-Roboto color-[#031125] font-[500] text-[18px] md:text-[22px] lg:text-[26px] leading-[28px] md:leading-[40px] lg:leading-[50px] text-center items-align justify-center capitalize max-w-3xl mx-auto text-slate-800 pt-[16px] md:pt-[29px]">
                    Straightforward, up-front pricing with no hidden add-ons.
Focus on your work, not your licenses.
                </p>
            </div>
      <div className="overflow-x-auto px-4 md:px-0">
      <div className="min-w-[900px]" style={{ display: 'grid', gridTemplateColumns: 'minmax(auto, 400px) repeat(3, 1fr)' }}>

        {/* Plan header row - spans all 3 columns */}
        <div />
        <div style={{ gridColumn: 'span 3' }}>
          <PlanHeader />
        </div>

        {/*Users*/}
        <RowLabel text= "Users" position="first" />
        <FeatureCell text="For a team" />
        <FeatureCell text="For growing teams" />
        <FeatureCell text="For large enterprises" />

        {/*Usage row*/}
        <RowLabel text= "Usage" subtitle="per year" />
        <FeatureCell text=" Basic Usage Quota consumption" />
        <FeatureCell text="Expanded Usage Quota consumption" />
        <FeatureCell text="High-volume Usage Quota Consumption" />

        {/*Deployment row*/}
        <RowLabel text="Deployment options" />
        <FeatureCell image={true} text="Cloud" />
        <FeatureCell image={true} text="Cloud" text2="Self-hosted Optional" />
        <FeatureCell image={true} text="Cloud" text2="Self-hosted Optional"   />

        {/*Admin row*/}
        <RowLabel text="Administration and Security" />
        <FeatureCell text="SLA" text2="Usage metrics" text3="Audit logs on demand" text4="SSO" text5="Groups" text6="Custom branding"/>
        <FeatureCell text="SLA" text2="Usage metrics" text3="Audit logs on demand" text4="SSO" text5="Groups" text6="Custom branding"/>
        <FeatureCell text="SLA" text2="Usage metrics" text3="Audit logs on demand" text4="SSO" text5="Groups" text6="Custom branding"/>

        {/*Location row*/}
        <RowLabel text= "Location Data Services"subtitle="Geocoding, isolines and routing operations per year" />
        <FeatureCell text="Limited based on platform usage quota" />
        <FeatureCell text="Limited based on platform usage quota" />
        <FeatureCell text="Up to unlimited" />

        {/* Developer Tools row */}
        <RowLabel text="Developer Tools" />
        <FeatureCell text="Limited API Access, Limited Tokens" />
        <FeatureCell text="Unlimited API Access, Unlimited Tokens" />
        <FeatureCell text="Unlimited API Access, Unlimited Tokens" />

        {/* Support row */}
        <RowLabel text= "Support Package" position="last" />
        <FeatureCell text="Standard or Premium" />
        <FeatureCell text="Premium or Elite" />
        <FeatureCell text="Elite" />

      </div>
      </div>
    </section>
  );
}