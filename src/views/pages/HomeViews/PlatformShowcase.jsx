import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PlatformShowcase() {
    const [activeIndex, setActiveIndex] = useState(0);

    const items = [
        {
            id: 1,
            num: "1",
            title: "Nova Intelligence Engine",
            desc: "Our proprietary AI engine processes billions of data points to deliver real-time spatial insights across your entire organization.",
            img: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/292NacUvQT/n1b1unav_expires_30_days.png"
        },
        {
            id: 2,
            num: "2",
            title: "Unified Platform Dashboard",
            desc: "A single pane of glass for all your location intelligence needs — analytics, visualization, and collaboration in one place.",
            img: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/292NacUvQT/fcqes9jt_expires_30_days.png"
        },
        {
            id: 3,
            num: "3",
            title: "Advanced Data Integration",
            desc: "Seamlessly connect and analyze layers from any global data warehouse or database directly within a single unified view.",
            img: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/292NacUvQT/n1b1unav_expires_30_days.png"
        }
    ];

    const activeItem = items[activeIndex];
    const nextItem = items[(activeIndex + 1) % items.length];

    const handleNextClick = () => {
        setActiveIndex((prev) => (prev + 1) % items.length);
    };

    const PinIcon = ({ number, isActive }) => (
        <div className={`relative shrink-0 flex items-center justify-center w-20 h-24 md:w-24 md:h-28 transition-all duration-500 ease-in-out ${isActive ? 'scale-100 opacity-100' : 'scale-90 opacity-60'}`}>
            <svg viewBox="0 0 100 130" className={`absolute inset-0 w-full h-full drop-shadow-md transition-colors duration-500 ${isActive ? 'text-[#47A0FF]' : 'text-[#a2c9f5]'}`}>
                <path d="M50 0 C22.4 0 0 22.4 0 50 C0 87.5 50 130 50 130 C50 130 100 87.5 100 50 C100 22.4 77.6 0 50 0 Z" fill="currentColor"/>
                <circle cx="50" cy="45" r="30" fill="white"/>
            </svg>
            <span className={`relative z-10 text-4xl md:text-5xl font-black mb-6 transition-colors duration-500 ${isActive ? 'text-[#031021]' : 'text-[#031021]/50'}`}>
                {number}
            </span>
        </div>
    );

    const transitionSettings = { duration: 0.5, ease: [0.32, 0.72, 0, 1] };

    return (
        <section className="w-full bg-[#f4f8fc] py-16 md:py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12 flex flex-col items-center relative z-10 max-w-7xl">
                
                {/* Header Section */}
                <div className="text-center mb-16 md:mb-24 flex flex-col items-center relative">
                    <span className="text-[#47A0FF] font-semibold tracking-wide mb-4 text-sm md:text-base uppercase">
                        Platform Showcase
                    </span>
                    <h2 className="text-[#031021] text-4xl md:text-5xl font-bold mb-4">
                        See AXON in Action
                    </h2>
                    <p className="text-[#031021] text-lg md:text-xl max-w-2xl mx-auto">
                        Discover how our platform transforms complex spatial data into actionable insights
                    </p>
                    <img
                        src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/292NacUvQT/ria9feqw_expires_30_days.png"
                        alt=""
                        className="hidden md:block absolute -left-12 lg:-left-24 top-1/2 -translate-y-1/2 w-10 h-10 object-contain opacity-70 pointer-events-none"
                    />
                </div>

                {/* Steps Section */}
                <div className="w-full relative flex flex-col lg:flex-row gap-12 lg:gap-8 min-h-[650px] items-start">
                    
                    {/* Background Line (Desktop only) */}
                    <div className="hidden lg:block absolute left-[25%] right-[25%] top-[45px] z-0 pointer-events-none">
                        <img 
                            src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/292NacUvQT/0wex3wga_expires_30_days.png" 
                            alt="Connection line" 
                            className="w-full object-cover h-[2px] opacity-70 border border-[#47a0ff]/20"
                        />
                    </div>

                    {/* Left Column - Active Step */}
                    <div className="w-full lg:w-1/2 relative z-10 min-h-[500px]">
                        <AnimatePresence mode="popLayout">
                            <motion.div 
                                key={`active-${activeItem.id}`}
                                initial={{ opacity: 0, x: -50, scale: 0.95 }}
                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                exit={{ opacity: 0, x: 50, scale: 0.95 }}
                                transition={transitionSettings}
                                className="w-full flex flex-col items-center lg:items-start"
                            >
                                <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6 lg:gap-8 mb-10 w-full relative z-10">
                                    <PinIcon number={activeItem.num} isActive={true} />
                                    <div className="flex flex-col gap-2 mt-2 bg-[#f4f8fc]/80 backdrop-blur-sm rounded-xl pr-4">
                                        <h3 className="text-[#031021] text-2xl md:text-3xl font-bold">
                                            {activeItem.title}
                                        </h3>
                                        <p className="text-[#030E1F]/80 text-base leading-relaxed max-w-md mx-auto sm:mx-0">
                                            {activeItem.desc}
                                        </p>
                                    </div>
                                </div>
                                
                                {/* Active Image */}
                                <div className="w-full">
                                    <img
                                        src={activeItem.img}
                                        alt={activeItem.title}
                                        className="w-full h-auto object-contain drop-shadow-xl rounded-xl border border-gray-100"
                                    />
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Right Column - Next Step (Inactive, Clickable) */}
                    <div className="w-full lg:w-1/2 mt-12 lg:mt-32 relative z-10 group cursor-pointer min-h-[500px]" onClick={handleNextClick}>
                        <AnimatePresence mode="popLayout">
                            <motion.div 
                                key={`next-${nextItem.id}`}
                                initial={{ opacity: 0, x: 50, scale: 0.95 }}
                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                exit={{ opacity: 0, x: -50, scale: 0.95 }}
                                transition={transitionSettings}
                                className="w-full flex flex-col items-center lg:items-start"
                            >
                                <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6 lg:gap-8 mb-10 w-full relative z-10">
                                    {/* Decorative background curve */}
                                    <div className="absolute -z-10 w-[200%] h-[200%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-60 pointer-events-none hidden lg:block transition-all duration-700 group-hover:opacity-100 group-hover:scale-105"
                                        style={{
                                            backgroundImage: 'url(https://storage.googleapis.com/tagjs-prod.appspot.com/v1/292NacUvQT/2ba63xfj_expires_30_days.png)',
                                            backgroundSize: 'contain',
                                            backgroundRepeat: 'no-repeat',
                                            backgroundPosition: 'center'
                                        }}
                                    />
                                    <PinIcon number={nextItem.num} isActive={false} />
                                    <div className="flex flex-col gap-2 mt-2 bg-[#f4f8fc]/80 backdrop-blur-sm rounded-xl px-2 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                                        <h3 className="text-[#031021]/60 text-xl md:text-2xl font-bold group-hover:text-[#031021] transition-colors">
                                            {nextItem.title}
                                        </h3>
                                        <p className="text-[#030E1F]/50 text-sm leading-relaxed max-w-md mx-auto sm:mx-0 group-hover:text-[#030E1F]/80 transition-colors">
                                            {nextItem.desc}
                                        </p>
                                    </div>
                                </div>

                                {/* Inactive Image (Blurred) */}
                                <div className="w-full lg:w-[90%] lg:ml-auto relative z-20 opacity-70 group-hover:opacity-95 blur-[6px] group-hover:blur-[2px] transition-all duration-500 scale-95 group-hover:scale-[0.98]">
                                    <img
                                        src={nextItem.img}
                                        alt={nextItem.title}
                                        className="w-full h-auto object-contain drop-shadow-2xl rounded-xl border border-gray-100"
                                    />
                                    {/* Click to focus overlay */}
                                    <div className="absolute inset-0 flex items-center justify-center bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl">
                                        <span className="bg-[#47A0FF] text-white px-6 py-2 rounded-full font-semibold shadow-lg backdrop-blur-md translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                            Click to Focus
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </section>
    );
}
