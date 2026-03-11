import React from "react";



export default function Footer() {
    return (
        <footer className="bg-[#090D13]">
                <div className="flex flex-col md:flex-row items-start justify-between max-w-[1552px] mx-auto px-6 md:px-10 py-8 md:py-12 gap-8 md:gap-0">
                <div className="flex flex-col items-left gap-2">
                    <img src="./HeaderLogo.png" alt="Axon Logo" className="w-28 md:w-36 h-auto" />
                    <img src="./FooterPoweredByQuant.png" alt="Powered By Quant" className="w-28 md:w-36 h-auto" /> 
                </div>
                <div className="flex flex-row items-start ml-auto gap-12">
    
                    <div className="flex flex-col gap-10 px-12">
                        <p className="font-Roboto font-[700] text-2xl leading-none uppercase text-white">
                        Contact us
                        </p>
                        <div className="flex flex-col gap-2">
                        <div className="flex flex-col gap-1">
                            <p className="font-Roboto font-[600] text-lg leading-[20px] tracking-[1.4px] uppercase text-white">Location</p>
                            <p className="font-Roboto font-[400] text-base leading-[26px] text-[#CFCFCF]">Egypt-Cairo</p>
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="font-Roboto font-[600] text-lg leading-[20px] tracking-[1.4px] uppercase text-white">Phone</p>
                            <a href="#"><p className="font-Roboto font-[400] text-base leading-[26px] text-[#CFCFCF]">01000000000000</p></a>
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="font-Roboto font-[600] text-lg leading-[20px] tracking-[1.4px] uppercase text-white">Email</p>
                            <a href="#"><p className="font-Roboto font-[400] text-base leading-[26px] text-[#CFCFCF]">AOXN@gmail.com</p></a>
                        </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-10">
                        <p className="font-Roboto font-[700] text-2xl leading-none uppercase text-white">
                        Important Links
                        </p>
                        <div className="flex flex-col gap-4">
                        <p className="font-Roboto font-[600] text-lg leading-[20px] tracking-[1.4px] uppercase text-white">Platform</p>
                        
                        <div className="flex flex-col gap-2">
                        <a href="#"><p className="font-Roboto font-[400] text-base leading-[26px] text-[#CFCFCF]">Overview</p></a>
                        <a href="#"><p className="font-Roboto font-[400] text-base leading-[26px] text-[#CFCFCF]">AXON AI Assistant</p></a>
                        <a href="#"><p className="font-Roboto font-[400] text-base leading-[26px] text-[#CFCFCF]">Pricing</p></a>
                        <a href="#"><p className="font-Roboto font-[400] text-base leading-[26px] text-[#CFCFCF]">Security</p></a>
                        
                        </div>
                    </div>
                </div>
            </div> 
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between max-w-[1552px] mx-auto px-8 md:px-10 py-4 gap-4 md:gap-0">
            <div className="flex flex-row items-center gap-2">
                    <img src="./FooterFullLogo.png" alt="Axon Logo" className="w-24 md:w-32 h-auto" /> 
            </div>
            <div className="flex flex-row items-center gap-4">
                    <a href="#"><img src="./LinkedIn.png" alt="Linkedin Logo" className="w-5 h-5 object-contain" /> </a>
                    <a href="#"><img src="./Twitter.png" alt="Twitter Logo" className="w-5 h-5 object-contain" /> </a>
                    <a href="#"><img src="./Github.png" alt="Github Logo" className="w-5 h-5 object-contain" /> </a>
                    <a href="#"><img src="./Youtube.png" alt="Youtube Logo" className="w-5 h-5 object-contain" /> </a>
            </div>
            <div>
                <p className = "font-Roboto font-[400] text-base leading-[16px] tracking-[0.6px] items-center uppercase text-[#737373] ">
                    © 2025 QuantorX. All rights reserved.
                </p>
            </div>
        </div>
        </footer>
        )
}