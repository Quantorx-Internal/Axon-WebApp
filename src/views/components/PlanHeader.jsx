import Button from "./Button";
import { scrollTo } from "@/lib/scrollTo";

const plans = [
  {
    title: "Enterprise",
    badge: false,
    colour: false,
    description: "For a business unit-level implementation of advanced spatial analytics in the cloud."
  },
  {
    title: "Strategic",
    badge: true,
    colour: true,
    description: "For multi-departmental teams running analytics at scale."
  },
  {
    title: "Custom",
    badge: false,
    colour: true,
    description: "For large enterprises and/or complex analytics scenarios."
  },
];

export default function PlanHeader() {
  return (
    <div className="flex flex-row bg-[#EFEFEF] rounded-t-xl mt-8 pt-5">
      {plans.map((plan, index) => (
        <div
          key={plan.title}
          className={`relative flex flex-col flex-1 p-10 gap-4 border-b border-[#D9D9D9]
            ${index < plans.length - 1 ? 'border-r' : ''}`}
        >
          {plan.badge && (
            <div className="absolute -top-10 left-0 right-0 flex justify-center">
              <span className="bg-[#21B3E6] text-white text-sm tracking-[0.7px] font-[500] rounded-full uppercase py-[10px] px-[24px]">
                Most Popular
              </span>
            </div>
          )}

          <h1 className="font-Roboto font-[600] text-3xl leading-[32px] items-center text-[#162945] ">
            {plan.title}
          </h1>
          <p className="font-Roboto font-[400] text-lg leading-[30px] items-center text-[#162945]">
            {plan.description}
          </p>
          <span className="mt-auto">
            <Button
              text="Get A Quote"
              variant={plan.colour ? "primary" : "transparent"}
              className="w-full py-3"
              onClick={() => scrollTo("request-demo", 80)}
            />
          </span>
        </div>
      ))}
    </div>
  );
}