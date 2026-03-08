
import IndustryButton from "../../../components/IndustryButton";

function IndustryPage() {
    return (
        <div className="relative flex flex-col items-center justify-center overflow-hidden h-screen">
            <img
                src="/Industry-Cover.jpg"
                alt="Industry Cover"
                className="absolute inset-0 w-full h-full object-cover opacity-40"
            />
            <div className="relative flex flex-col items-center w-full max-w-[1552px] px-4 sm:px-6 md:px-10 gap-6 md:gap-12">
                <div className="flex flex-col items-center w-full py-6 md:py-140 px-2 md:px-188">
                    <p className="font-Roboto text-2xl sm:text-4xl md:text-[53.45px] font-[900] leading-tight md:leading-[67px] tracking-[-1.34px] text-center uppercase w-full">
                        WHAT'S HAPPENING IN YOUR INDUSTRY?
                    </p>
                    <h3 className="font-Roboto font-[500] text-sm sm:text-lg md:text-[24px] leading-[30px] md:leading-[50px] text-center w-full">
                        Discover How Leading Organizations Across Sectors Leverage Spatial Intelligence
                    </h3>
                </div>
                <div className="flex flex-col w-full py-4 md:py-[30px] px-2 md:px-188 gap-4 md:gap-8">
                    <div className="flex flex-col md:flex-row items-center bg-white/40 rounded-[20px] md:rounded-[34px] backdrop-blur-[5.9px] w-full p-4 md:p-8 gap-4 md:gap-0">
                        <p className="font-Roboto font-medium text-base md:text-2xl leading-[28px] md:leading-[50px] tracking-normal">
                            Our Role Is To Help Industries Turn Complex, Sensitive Data Into Clear, Actionable Intelligence—Whether By Enabling Smarter Network Planning In Telecom, More Flexible Analytics In Finance, Sharper Customer Targeting In Retail And Marketing, Greater Operational Efficiency In Logistics, Or Better Asset And Risk Management Across Enterprise Environments.
                        </p>
                        <img
                            className="w-full md:w-[460px] h-auto md:h-[251px] rounded-[20px] md:rounded-[34px] shadow-md object-cover"
                            src="/Industry-Card.png"
                            alt="Industry Card"
                        />
                    </div>
                    <IndustryButton />
                </div>
            </div>
        </div>
    );
}
export default IndustryPage;