import IndustryButton from "../../../components/IndustryButton";

function Industry() {
    return (
        <section
            className="relative flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat w-full"
            style={{ backgroundImage: 'url(/Industry-Cover.jpg)' }}
        >
            <div className="absolute inset-0 bg-white opacity-70 pointer-events-none z-0" />

            <div className="relative z-10 flex flex-col items-center w-full max-w-[1552px] mx-auto px-4 sm:px-6 md:px-10 py-10 md:py-16 gap-6 md:gap-10">
             
                <div className="flex flex-col items-center w-full">
                    <p className="font-Roboto text-4xl lg:text-5xl font-semibold tracking-tight text-center uppercase">
                        WHAT'S HAPPENING IN YOUR INDUSTRY?
                    </p>
                    <h3 className="font-Roboto text-xl lg:text-2xl font-medium text-center">
                        Discover How Leading Organizations Across Sectors Leverage Spatial Intelligence
                    </h3>
                </div>
                <div className="flex flex-col w-full gap-4 md:gap-8">
                    <div className="flex flex-col md:flex-row items-center bg-white/70 rounded-[20px] md:rounded-[34px] w-full p-4 md:p-8 gap-4 md:gap-8">
                        <p className="flex-1 min-w-0 font-Roboto text-base leading-relaxed tracking-normal text-center md:text-left">
                            Our Role Is To Help Industries Turn Complex, Sensitive Data Into Clear, Actionable Intelligence—Whether By Enabling Smarter Network Planning In Telecom, More Flexible Analytics In Finance, Sharper Customer Targeting In Retail And Marketing, Greater Operational Efficiency In Logistics, Or Better Asset And Risk Management Across Enterprise Environments.
                        </p>
                        <img
                            className="w-full md:w-2/5 flex-shrink-0 h-auto rounded-[20px] md:rounded-[34px] shadow-md object-cover"
                            src="/Industry-Card.png"
                            alt="Industry Card"
                        />
                    </div>
                    <IndustryButton />
                </div>
            </div>
        </section>
    );
}

export default Industry;