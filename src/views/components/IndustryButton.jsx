import { FaArrowRight } from "react-icons/fa";

function IndustryButton() {
    return (
        <button className="flex flex-row sm:flex-row items-center justify-between bg-[#036FE2] hov text-white rounded-[36.83px] w-full px-2 sm:px-8 py-2 sm:py-[9px] gap- sm:gap-0 transition-all duration-300 shadow-blue-500/30 hover:bg-blue-600 hover:shadow-blue-500/50 hover:scale-105" >
            <p className="font-Roboto text-base sm:text-2xl md:text-3xl leading-tight sm:leading-[48.96px]">
                Explore Industry Insights
            </p>
            <span className="flex items-center gap-2 sm:gap-4 font-Roboto font-bold text-base sm:text-lg md:text-2xl leading-tight sm:leading-[33.48px] tracking-[1.17px] uppercase">
                <p>LEARN MORE</p>
                <FaArrowRight />
            </span>
        </button>
    );
}
export default IndustryButton;