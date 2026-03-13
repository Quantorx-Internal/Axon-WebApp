import { scrollTo } from "@/lib/scrollTo";

export default function Footer() {
    return (
        <footer className="bg-[#090D13]">
            {/* Main content section */}
            <div className="flex flex-col md:flex-row items-start justify-between max-w-[1552px] mx-auto px-6 md:px-10 py-8 md:py-12 gap-10 md:gap-0">

                {/* Logo block */}
                <div className="flex flex-col items-start gap-2">
                    <img
                        src="./HeaderLogo.png"
                        alt="Axon Logo"
                        className="w-28 md:w-36 h-auto cursor-pointer"
                        onClick={() => scrollTo("hero", 0)}
                    />
                    <img src="./FooterPoweredByQuant.png" alt="Powered By Quant" className="w-28 md:w-36 h-auto" />
                </div>

                {/* Links & Contact — row on desktop, stacked column on mobile */}
                <div className="flex flex-col md:flex-row items-start w-full md:w-auto md:ml-auto gap-10 md:gap-12">

                    {/* Contact Us */}
                    <div className="flex flex-col gap-6 md:gap-10 md:px-12">
                        <p className="font-Roboto font-[700] text-2xl leading-none uppercase text-white">
                            Contact us
                        </p>
                        <div className="flex flex-col gap-4 md:gap-2">
                            <div className="flex flex-col gap-1">
                                <p className="font-Roboto font-[600] text-lg leading-[20px] tracking-[1.4px] uppercase text-white">Location</p>
                                <p className="font-Roboto font-[400] text-base leading-[26px] text-[#CFCFCF]">Egypt-Cairo</p>
                            </div>
                            <div className="flex flex-col gap-1">
                                <p className="font-Roboto font-[600] text-lg leading-[20px] tracking-[1.4px] uppercase text-white">Phone</p>
                                <a href="tel:+201000000000">
                                    <p className="font-Roboto font-[400] text-base leading-[26px] text-[#CFCFCF] hover:text-white transition-colors">01000000000000</p>
                                </a>
                            </div>
                            <div className="flex flex-col gap-1">
                                <p className="font-Roboto font-[600] text-lg leading-[20px] tracking-[1.4px] uppercase text-white">Email</p>
                                <a href="mailto:info@axon.ai">
                                    <p className="font-Roboto font-[400] text-base leading-[26px] text-[#CFCFCF] hover:text-white transition-colors">AOXN@gmail.com</p>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Important Links */}
                    <div className="flex flex-col gap-6 md:gap-10">
                        <p className="font-Roboto font-[700] text-2xl leading-none uppercase text-white">
                            Important Links
                        </p>
                        <div className="flex flex-col gap-4">
                            <p className="font-Roboto font-[600] text-lg leading-[20px] tracking-[1.4px] uppercase text-white">Platform</p>
                            <div className="flex flex-col gap-2">
                                <button onClick={() => scrollTo("platform", 80)} className="font-Roboto font-[400] text-base leading-[26px] text-[#CFCFCF] hover:text-white transition-colors text-left bg-transparent border-none cursor-pointer p-0">
                                    Overview
                                </button>
                                <button onClick={() => scrollTo("showcase", 80)} className="font-Roboto font-[400] text-base leading-[26px] text-[#CFCFCF] hover:text-white transition-colors text-left bg-transparent border-none cursor-pointer p-0">
                                    AXON AI Assistant
                                </button>
                                <button onClick={() => scrollTo("plans", 80)} className="font-Roboto font-[400] text-base leading-[26px] text-[#CFCFCF] hover:text-white transition-colors text-left bg-transparent border-none cursor-pointer p-0">
                                    Pricing
                                </button>
                                <button onClick={() => scrollTo("solution", 80)} className="font-Roboto font-[400] text-base leading-[26px] text-[#CFCFCF] hover:text-white transition-colors text-left bg-transparent border-none cursor-pointer p-0">
                                    Security
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Bottom bar */}
            <div className="flex flex-col md:flex-row items-center justify-between max-w-[1552px] mx-auto px-6 md:px-10 py-4 gap-4 md:gap-0">
                <div className="flex flex-row items-center gap-2">
                    <img src="./FooterFullLogo.png" alt="Axon Logo" className="w-24 md:w-32 h-auto" />
                </div>
                <div className="flex flex-row items-center gap-4">
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <img src="./LinkedIn.png" alt="Linkedin Logo" className="w-5 h-5 object-contain opacity-70 hover:opacity-100 transition-opacity" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <img src="./Twitter.png" alt="Twitter Logo" className="w-5 h-5 object-contain opacity-70 hover:opacity-100 transition-opacity" />
                    </a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                        <img src="./Github.png" alt="Github Logo" className="w-5 h-5 object-contain opacity-70 hover:opacity-100 transition-opacity" />
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                        <img src="./Youtube.png" alt="Youtube Logo" className="w-5 h-5 object-contain opacity-70 hover:opacity-100 transition-opacity" />
                    </a>
                </div>
                <div>
                    <p className="font-Roboto font-[400] text-base leading-[16px] tracking-[0.6px] text-center uppercase text-[#737373]">
                        © 2025 QuantorX. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}