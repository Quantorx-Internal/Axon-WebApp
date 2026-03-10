import React, { useState } from "react";

const AnalyticsIcon = ({ className }) => (
    <svg className={className} width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.0835 2.08325V28.7499C2.0835 29.634 2.43469 30.4818 3.05981 31.1069C3.68493 31.7321 4.53277 32.0833 5.41683 32.0833H32.0835" stroke="currentColor" strokeWidth="4.16667" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M27.0835 25.4166V12.0833" stroke="currentColor" strokeWidth="4.16667" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18.7505 25.4167V5.41675" stroke="currentColor" strokeWidth="4.16667" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10.4165 25.4167V20.4167" stroke="currentColor" strokeWidth="4.16667" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const VisualizationIcon = ({ className }) => (
    <svg className={className} width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.091 6.04884C21.5661 6.28625 22.0899 6.40984 22.6211 6.40984C23.1522 6.40984 23.676 6.28625 24.1511 6.04884L30.4133 2.91686C30.6745 2.78638 30.9646 2.72485 31.2562 2.73813C31.5478 2.75141 31.8312 2.83906 32.0794 2.99273C32.3276 3.14641 32.5323 3.36101 32.6742 3.61613C32.816 3.87126 32.8903 4.15842 32.8898 4.45033V26.2954C32.8897 26.6132 32.801 26.9246 32.6339 27.1949C32.4667 27.4651 32.2276 27.6835 31.9434 27.8255L24.1511 31.7225C23.676 31.9599 23.1522 32.0835 22.6211 32.0835C22.0899 32.0835 21.5661 31.9599 21.091 31.7225L13.8823 28.1182C13.4072 27.8807 12.8834 27.7572 12.3523 27.7572C11.8212 27.7572 11.2973 27.8807 10.8222 28.1182L4.55999 31.2501C4.29874 31.3807 4.00842 31.4422 3.71668 31.4288C3.42493 31.4155 3.14145 31.3277 2.89322 31.1738C2.64499 31.0199 2.44027 30.8051 2.29854 30.5497C2.15681 30.2944 2.08278 30.007 2.0835 29.7149V7.87155C2.08367 7.55379 2.1723 7.24236 2.33945 6.97213C2.50661 6.7019 2.7457 6.48353 3.02994 6.3415L10.8222 2.4445C11.2973 2.20709 11.8212 2.0835 12.3523 2.0835C12.8834 2.0835 13.4072 2.20709 13.8823 2.4445L21.091 6.04884Z" stroke="currentColor" strokeWidth="4.16667" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22.6211 6.40967V32.0816" stroke="currentColor" strokeWidth="4.16667" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12.3521 2.0835V27.7554" stroke="currentColor" strokeWidth="4.16667" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const AiAgentsIcon = ({ className }) => (
    <svg className={className} width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_76_2210)">
            <path d="M13.7713 2.51756C13.8249 2.23082 13.977 1.97183 14.2014 1.78546C14.4258 1.59909 14.7084 1.49707 15.0001 1.49707C15.2918 1.49707 15.5743 1.59909 15.7987 1.78546C16.0231 1.97183 16.1753 2.23082 16.2288 2.51756L17.5426 9.46506C17.6359 9.959 17.8759 10.4133 18.2313 10.7688C18.5868 11.1242 19.0411 11.3643 19.5351 11.4576L26.4826 12.7713C26.7693 12.8249 27.0283 12.977 27.2147 13.2014C27.401 13.4258 27.5031 13.7084 27.5031 14.0001C27.5031 14.2918 27.401 14.5743 27.2147 14.7987C27.0283 15.0231 26.7693 15.1753 26.4826 15.2288L19.5351 16.5426C19.0411 16.6359 18.5868 16.8759 18.2313 17.2313C17.8759 17.5868 17.6359 18.0411 17.5426 18.5351L16.2288 25.4826C16.1753 25.7693 16.0231 26.0283 15.7987 26.2147C15.5743 26.401 15.2918 26.5031 15.0001 26.5031C14.7084 26.5031 14.4258 26.401 14.2014 26.2147C13.977 26.0283 13.8249 25.7693 13.7713 25.4826L12.4576 18.5351C12.3643 18.0411 12.1242 17.5868 11.7688 17.2313C11.4133 16.8759 10.959 16.6359 10.4651 16.5426L3.51756 15.2288C3.23082 15.1753 2.97183 15.0231 2.78546 14.7987C2.59909 14.5743 2.49707 14.2918 2.49707 14.0001C2.49707 13.7084 2.59909 13.4258 2.78546 13.2014C2.97183 12.977 3.23082 12.8249 3.51756 12.7713L10.4651 11.4576C10.959 11.3643 11.4133 11.1242 11.7688 10.7688C12.1242 10.4133 12.3643 9.959 12.4576 9.46506L13.7713 2.51756Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M25 3V8" stroke="currentColor" strokeWidth="4.17" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M27.5 5.5H22.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M5 26.5C6.38071 26.5 7.5 25.3807 7.5 24C7.5 22.6193 6.38071 21.5 5 21.5C3.61929 21.5 2.5 22.6193 2.5 24C2.5 25.3807 3.61929 26.5 5 26.5Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
            <clipPath id="clip0_76_2210">
                <rect width="30" height="30" fill="white" />
            </clipPath>
        </defs>
    </svg>
);

const AppDevelopmentIcon = ({ className }) => (
    <svg className={className} width="35" height="21" viewBox="0 0 35 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28.0049 14.3255L32.0849 10.2455L28.0049 6.16553" stroke="currentColor" strokeWidth="4.17" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6.16496 6.16553L2.08496 10.2455L6.16496 14.3255" stroke="currentColor" strokeWidth="4.17" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M19.1552 2.08545L14.0552 18.4054" stroke="currentColor" strokeWidth="4.17" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export default function PlatformUsers() {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        { name: "Analytics", Icon: AnalyticsIcon },
        { name: "Visualization", Icon: VisualizationIcon },
        { name: "AI Agents", Icon: AiAgentsIcon },
        { name: "App Development", Icon: AppDevelopmentIcon }
    ];

    const ActiveIcon = tabs[activeTab].Icon;

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
                <div className="relative w-full lg:w-1/3 flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 gap-6 lg:gap-0 pl-4 lg:pl-12 lg:pr-10 shrink-0 hide-scrollbar snap-x h-auto lg:justify-between lg:min-h-[400px]">
                    
                    {/* Slider Track & Thumb (Desktop Only) */}
                    <div className="hidden lg:block absolute right-0 top-2 bottom-2 w-1.5 bg-gray-200 rounded-full">
                        <div 
                            className="absolute left-0 w-full bg-[#026FE3] rounded-full transition-all duration-500 ease-in-out shadow-md"
                            style={{
                                height: `${100 / tabs.length}%`,
                                top: `${(100 / tabs.length) * activeTab}%`
                            }}
                        />
                    </div>

                    {tabs.map((tab, idx) => (
                        <div key={idx} className="flex lg:flex-1 lg:items-center flex-shrink-0">
                            <button
                                onClick={() => setActiveTab(idx)}
                                className={`flex items-center gap-4 cursor-pointer group snap-start whitespace-nowrap bg-transparent border-none ${activeTab === idx ? 'opacity-100' : 'opacity-60 hover:opacity-80'} transition-opacity`}
                            >
                                <tab.Icon
                                    className={`w-6 h-6 md:w-8 md:h-8 transition-all duration-300 shrink-0 ${activeTab === idx ? 'scale-110 text-[#026FE3]' : 'text-[#717171]'}`}
                                />
                                <span className={`text-xl md:text-2xl lg:text-3xl font-bold transition-colors duration-300 tracking-wide ${activeTab === idx ? 'text-[#026FE3]' : 'text-[#717171]'}`}>
                                    {tab.name.toUpperCase()}
                                </span>
                            </button>
                        </div>
                    ))}
                </div>

                {/* Right Side: Tab Content Container */}
                <div className="w-full lg:w-2/3 flex-1">
                    <div className="w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl relative min-h-[400px] md:min-h-[500px] bg-cover bg-center flex flex-col justify-center p-6 md:p-12 lg:p-20"
                        style={{
                            backgroundImage: 'url("/BlueredImage.png")',
                        }}
                    >
                        {/* Semi-transparent overlay to ensure text readability */}
                        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm md:backdrop-blur-none" />

                        {/* Content inside the right box */}
                        <div className="relative z-10 flex flex-col items-start bg-white/80 md:bg-transparent backdrop-blur-md md:backdrop-blur-none p-6 md:p-0 rounded-2xl md:rounded-none">
                            <div className="flex items-center gap-6 mb-4 md:mb-6">
                                <ActiveIcon className="w-12 h-12 md:w-16 md:h-16 lg:w-[78px] lg:h-[76px] text-[#031125] shrink-0" />
                                <h3 className="text-[#031125] text-2xl md:text-3xl lg:text-4xl font-bold max-w-sm leading-tight">
                                    Unmatched data visualization capabilities
                                </h3>
                            </div>

                            <p className="text-[#031125]/90 text-lg md:text-xl lg:text-2xl mb-8 leading-relaxed max-w-xl">
                                Transform complex geospatial data into actionable insights with our intuitive analytics platform.
                            </p>

                            <ul className="flex flex-col gap-4">
                                <li className="flex items-start gap-4">
                                    <span className="w-5 h-5 mt-1 rounded-full bg-[#031125] shrink-0 block" />
                                    <span className="text-[#031125] text-base md:text-lg lg:text-xl font-medium">Automated analysis with drag-and-drop interface</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="w-5 h-5 mt-1 rounded-full bg-[#031125] shrink-0 block" />
                                    <span className="text-[#031125] text-base md:text-lg lg:text-xl font-medium">100+ ready-to-go analysis components with native ML & AI integrations</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="w-5 h-5 mt-1 rounded-full bg-[#031125] shrink-0 block" />
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
