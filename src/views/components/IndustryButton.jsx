import { FaArrowRight } from "react-icons/fa";
import { scrollTo } from "@/lib/scrollTo";

function IndustryButton() {
    return (
        <button
            className="flex flex-row sm:flex-row items-center justify-between bg-[#036FE2] text-white rounded-[36.83px] w-full px-2 sm:px-8 py-2 sm:py-[9px] gap- sm:gap-0"
            onClick={() => scrollTo("plans", 80)}
        >
            <p className="font-Roboto text-base font-semibold">
                Explore Industry Insights
            </p>
            <span className="flex items-center gap-2 sm:gap-4 font-Roboto font-semibold text-base uppercase">
                <p>LEARN MORE</p>
                <FaArrowRight />
            </span>
        </button>
    );
}
export default IndustryButton;