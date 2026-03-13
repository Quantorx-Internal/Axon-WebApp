import Button from "../../../components/Button";
import { scrollTo } from "@/lib/scrollTo";

function SpaitalData() {
    return (
        <section className="relative flex flex-col bg-[#031125] items-center justify-center overflow-hidden max-h-none md:max-h-[437px] md:h-screen gap-6 md:gap-8 py-12 md:py-0">
            <div className="relative flex flex-col items-center w-full max-w-[1552px] px-6 md:px-10 ">
                <p className="font-Roboto text-[28px] md:text-[40px] lg:text-[50px] font-[900] leading-[36px] md:leading-[60px] lg:leading-[90px] text-center justify-center capitalize text-white">
                    Ready to transform your spatial data?
                </p>

                <h3 className="font-Roboto text-[16px] md:text-[22px] lg:text-[26px] font-[500] leading-[26px] md:leading-[40px] lg:leading-[50px] text-center justify-center capitalize text-white mt-2 md:mt-0">
                    Start your free trial today and experience the power of location intelligence
                </h3>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto px-6 sm:px-0">
                <Button
                    text="Contact Us"
                    variant="white"
                    className="w-full sm:w-auto py-3 md:py-5 px-8 md:px-16 text-base md:text-2xl"
                    onClick={() => scrollTo("request-demo", 80)}
                />
                <Button
                    text="Request Demo"
                    variant="primary"
                    className="w-full sm:w-auto py-3 md:py-5 px-8 md:px-16 text-base md:text-2xl"
                    onClick={() => scrollTo("request-demo", 80)}
                />
            </div>
        </section>
    );
}

export default SpaitalData;