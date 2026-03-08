import { FaArrowRight } from "react-icons/fa";

function IndustryButton() {
    return (
        <button className="flex flex-col sm:flex-row items-center justify-between bg-[#036FE2] text-white rounded-[36.83px] w-full px-4 sm:px-8 py-2 sm:py-[9px] gap-2 sm:gap-0">
            <p className="font-Roboto text-lg sm:text-2xl md:text-3xl leading-tight sm:leading-[48.96px]">
                Explore Industry Insights
            </p>
            <span className="flex items-center gap-2 sm:gap-4 font-Roboto font-bold text-base sm:text-xl md:text-2xl leading-tight sm:leading-[33.48px] tracking-[1.17px] uppercase">
                <p>LEARN MORE</p>
                <FaArrowRight />
            </span>
        </button>
    );
}
export default IndustryButton;