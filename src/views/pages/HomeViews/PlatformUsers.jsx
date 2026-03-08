import React, { useState } from "react";

export default function PlatformUsers() {
    // Simple state to track which tab is active (for demo purposes)
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        { name: "Analytics", icon: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/292NacUvQT/j4ik19vu_expires_30_days.png" },
        { name: "Visualization", icon: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/292NacUvQT/xwrh94az_expires_30_days.png" },
        { name: "AI Agents", icon: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/292NacUvQT/a24oww62_expires_30_days.png" },
        { name: "App Development", icon: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/292NacUvQT/0jvczxhf_expires_30_days.png" }
    ];

    return (
        <section className="w-full bg-white py-16 md:py-24 px-4 flex flex-col items-center">

            {/* Header Area */}
            <div className="text-center max-w-4xl mb-12 md:mb-20">
                <h2 className="text-[#031125] text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                    One Location Intelligence platform for all users
                </h2>
                <p className="text-[#4A4A4A] text-lg md:text-xl lg:text-2xl leading-relaxed">
                    Redefine how GIS serves your organization with an end-to-end platform built for the enterprise. From data analysts to developers, CARTO’s tools make spatial analysis accessible to everyone.
                </p>
            </div>

            {/* Content Switcher Area */}
            <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-8 lg:gap-16 items-start relative">

                {/* Left Side: Tabs */}
                <div className="w-full lg:w-1/3 flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 gap-6 lg:gap-12 pl-4 lg:pl-12 shrink-0 hide-scrollbar snap-x">
                    {tabs.map((tab, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActiveTab(idx)}
                            className={`flex items-center gap-4 cursor-pointer group snap-start whitespace-nowrap bg-transparent border-none ${activeTab === idx ? 'opacity-100' : 'opacity-60 hover:opacity-80'} transition-opacity`}
                        >
                            <img
                                src={tab.icon}
                                alt={tab.name}
                                className={`w-6 h-6 md:w-8 md:h-8 object-contain ${activeTab === idx ? 'scale-110' : ''} transition-transform`}
                            />
                            <span className={`text-xl md:text-2xl lg:text-3xl font-bold ${activeTab === idx ? 'text-[#036FE2]' : 'text-[#717171]'}`}>
                                {tab.name}
                            </span>
                        </button>
                    ))}
                </div>

                {/* Vertical Divider (Desktop only) */}
                <div className="hidden lg:block absolute left-1/3 top-0 bottom-0 w-px bg-gray-200" />

                {/* Right Side: Tab Content Container */}
                <div className="w-full lg:w-2/3 flex-1">
                    <div className="w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl relative min-h-[400px] md:min-h-[500px] bg-cover bg-center flex flex-col justify-center p-6 md:p-12 lg:p-20"
                        style={{
                            backgroundImage: 'url(https://storage.googleapis.com/tagjs-prod.appspot.com/v1/292NacUvQT/ao761o97_expires_30_days.png)',
                        }}
                    >
                        {/* Semi-transparent overlay to ensure text readability */}
                        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm md:backdrop-blur-none" />

                        {/* Content inside the right box */}
                        <div className="relative z-10 flex flex-col items-start bg-white/80 md:bg-transparent backdrop-blur-md md:backdrop-blur-none p-6 md:p-0 rounded-2xl md:rounded-none">
                            <div className="flex items-center gap-6 mb-4 md:mb-6">
                                <img
                                    src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/292NacUvQT/f76gsjju_expires_30_days.png"
                                    alt="Visualization icon"
                                    className="w-12 h-12 md:w-16 md:h-16 lg:w-[78px] lg:h-[76px] object-contain"
                                />
                                <h3 className="text-[#031125] text-2xl md:text-3xl lg:text-4xl font-bold max-w-sm leading-tight">
                                    Unmatched data visualization capabilities
                                </h3>
                            </div>

                            <p className="text-[#031125]/90 text-lg md:text-xl lg:text-2xl mb-8 leading-relaxed max-w-xl">
                                Transform complex geospatial data into actionable insights with our intuitive analytics platform.
                            </p>

                            <ul className="flex flex-col gap-4">
                                <li className="flex items-start gap-4">
                                    <img src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/292NacUvQT/9pvlb12w_expires_30_days.png" className="w-5 h-5 mt-1 object-contain shrink-0" alt="" />
                                    <span className="text-[#031125] text-base md:text-lg lg:text-xl font-medium">Automated analysis with drag-and-drop interface</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <img src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/292NacUvQT/m7i70bsd_expires_30_days.png" className="w-5 h-5 mt-1 object-contain shrink-0" alt="" />
                                    <span className="text-[#031125] text-base md:text-lg lg:text-xl font-medium">100+ ready-to-go analysis components with native ML & AI integrations</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <img src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/292NacUvQT/x8j7ojje_expires_30_days.png" className="w-5 h-5 mt-1 object-contain shrink-0" alt="" />
                                    <span className="text-[#031125] text-base md:text-lg lg:text-xl font-medium">Automate deployment with APIs, AI Agents & MCP tools</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

            {/* Optional Custom CSS for hiding scrollbar on mobile sticky tabs */}
            <style jsx>{`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .hide-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </section>
    );
}
