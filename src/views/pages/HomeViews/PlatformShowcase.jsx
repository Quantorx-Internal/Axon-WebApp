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
        },
        {
            id: 4,
            num: "4",
            title: "Predictive Analytics",
            desc: "Anticipate market trends and optimize resource allocation with advanced predictive models built directly into the platform.",
            img: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/292NacUvQT/fcqes9jt_expires_30_days.png"
        },
        {
            id: 5,
            num: "5",
            title: "Automated Workflows",
            desc: "Trigger intelligent actions automatically based on spatial rules, saving thousands of hours in manual work.",
            img: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/292NacUvQT/n1b1unav_expires_30_days.png"
        }
    ];

    const lastIndex = items.length - 1; // 4
    const getWindow = (idx) => {
        if (idx === 0) {
            return { left: 0, center: 1, right: 2, focusedSlot: "left" };
        } else if (idx === lastIndex) {
            return { left: lastIndex - 2, center: lastIndex - 1, right: lastIndex, focusedSlot: "right" };
        } else {
            return { left: idx - 1, center: idx, right: idx + 1, focusedSlot: "center" };
        }
    };

    const window = getWindow(activeIndex);

    const slots = [
        { key: "left", itemIndex: window.left, isFocused: window.focusedSlot === "left" },
        { key: "center", itemIndex: window.center, isFocused: window.focusedSlot === "center" },
        { key: "right", itemIndex: window.right, isFocused: window.focusedSlot === "right" },
    ];

    const PinIcon = ({ number, isActive }) => (
        <div className={`relative shrink-0 flex items-center justify-center w-20 h-24 md:w-24 md:h-28 transition-all duration-500 ease-in-out ${isActive ? 'scale-100 opacity-100' : 'scale-90 opacity-60'}`}>
            <svg viewBox="0 0 100 130" className={`absolute inset-0 w-full h-full drop-shadow-md transition-colors duration-500 ${isActive ? 'text-[#47A0FF]' : 'text-[#a2c9f5]'}`}>
                <path d="M50 0 C22.4 0 0 22.4 0 50 C0 87.5 50 130 50 130 C50 130 100 87.5 100 50 C100 22.4 77.6 0 50 0 Z" fill="currentColor" />
                <circle cx="50" cy="45" r="30" fill="white" />
            </svg>
            <span className={`relative z-10 text-4xl md:text-5xl font-black mb-6 transition-colors duration-500 ${isActive ? 'text-[#031021]' : 'text-[#031021]/50'}`}>
                {number}
            </span>
        </div>
    );

    const transitionSettings = { duration: 0.5, ease: [0.32, 0.72, 0, 1] };

    return (
        <section className="w-full bg-[#f4f8fc] py-16 md:py-24 xl:py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12 xl:px-16 flex flex-col items-center relative z-10 max-w-[1600px]">

                {/* Header Section */}
                <div className="text-center mb-16 md:mb-24 flex flex-col items-center relative">
                    <span className="text-[#47A0FF] font-semibold tracking-wide mb-4 text-sm md:text-base uppercase">
                        Platform Showcase
                    </span>
                    <h2 className="text-[#031021] text-2xl lg:text-3xl font-semibold tracking-tight mb-4">
                        See AXON in Action
                    </h2>
                    <p className="text-[#031021] text-base leading-relaxed max-w-2xl mx-auto">
                        Discover how our platform transforms complex spatial data into actionable insights
                    </p>
                    <img
                        src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/292NacUvQT/ria9feqw_expires_30_days.png"
                        alt=""
                        className="hidden md:block absolute -left-12 lg:-left-24 top-1/2 -translate-y-1/2 w-10 h-10 object-contain opacity-70 pointer-events-none"
                    />
                </div>

                {/* Steps Section — 3-slot sliding window */}
                <div className="w-full relative flex flex-col lg:flex-row gap-6 min-h-[650px] items-end">

                    {/* Background connecting line */}
                    <div className="hidden lg:block absolute left-[10%] right-[10%] top-[45px] z-0 pointer-events-none">
                        <img
                            src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/292NacUvQT/0wex3wga_expires_30_days.png"
                            alt="Connection line"
                            className="w-full object-cover h-[2px] opacity-70 border border-[#47a0ff]/20"
                        />
                    </div>

                    <AnimatePresence mode="popLayout">
                        {slots.map(({ key, itemIndex, isFocused }) => {
                            const item = items[itemIndex];

                            /* ---- slot-level layout weights ---- */
                            const widthClass = isFocused
                                ? "lg:w-[45%]"
                                : "lg:w-[27.5%]";

                            /* ---- visual treatment ---- */
                            const imgBlur = isFocused ? "" : "blur-[4px] opacity-70";
                            const cardOpacity = isFocused ? "opacity-100" : "opacity-60";
                            const scaleClass = isFocused ? "scale-100" : "scale-90";

                            /* top offset — left ghost sits higher, right ghost lower */
                            const topOffset = key === "center"
                                ? "lg:mt-10"
                                : key === "left"
                                    ? "lg:mt-0"
                                    : "lg:mt-24";

                            return (
                                <motion.div
                                    key={`slot-${key}-item-${item.id}`}
                                    layout
                                    initial={{ opacity: 0, scale: 0.92 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.92 }}
                                    transition={transitionSettings}
                                    onClick={() => !isFocused && setActiveIndex(itemIndex)}
                                    className={`
                                        w-full ${widthClass} flex flex-col items-center
                                        transition-all duration-500 origin-bottom
                                        ${cardOpacity} ${scaleClass}
                                        ${!isFocused ? "group cursor-pointer hover:opacity-90 hover:scale-95" : ""}
                                    `}
                                >
                                    {/* Pin + text header */}
                                    <div className={`flex flex-col items-center text-center gap-3 mb-8 w-full relative z-10 ${topOffset}`}>
                                        {/* Decorative background curve (inactive only) */}
                                        {!isFocused && (
                                            <div
                                                className="absolute -z-10 w-[200%] h-[200%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-60 pointer-events-none hidden lg:block transition-all duration-700 group-hover:opacity-100 group-hover:scale-105"
                                                style={{
                                                    backgroundImage: 'url(https://storage.googleapis.com/tagjs-prod.appspot.com/v1/292NacUvQT/2ba63xfj_expires_30_days.png)',
                                                    backgroundSize: 'contain',
                                                    backgroundRepeat: 'no-repeat',
                                                    backgroundPosition: 'center'
                                                }}
                                            />
                                        )}

                                        <PinIcon number={item.num} isActive={isFocused} />

                                        <div className={`flex flex-col gap-2 mt-2 rounded-xl px-3 transition-opacity duration-300 ${isFocused ? "" : "bg-[#f4f8fc]/80 backdrop-blur-sm"}`}>
                                            {isFocused ? (
                                                /* Active: large left-aligned text */
                                                <>
                                                    <h3 className="text-[#031021] text-xl lg:text-2xl font-medium">
                                                        {item.title}
                                                    </h3>
                                                    <p className="text-[#030E1F]/80 text-base leading-relaxed max-w-md mx-auto">
                                                        {item.desc}
                                                    </p>
                                                </>
                                            ) : (
                                                /* Inactive: smaller, muted text */
                                                <>
                                                    <h3 className="text-[#031021]/60 text-lg font-medium group-hover:text-[#031021] transition-colors">
                                                        {item.title}
                                                    </h3>
                                                    <p className="text-[#030E1F]/50 text-sm leading-relaxed max-w-xs mx-auto group-hover:text-[#030E1F]/80 transition-colors">
                                                        {item.desc}
                                                    </p>
                                                </>
                                            )}
                                        </div>
                                    </div>

                                    {/* Screenshot */}
                                    <div className={`w-full relative z-20 mt-auto rounded-xl transition-all duration-500 ${imgBlur}`}>
                                        <img
                                            src={item.img}
                                            alt={item.title}
                                            className="w-full h-auto object-contain drop-shadow-2xl rounded-xl border border-gray-100"
                                        />
                                        {/* Click-to-focus overlay */}
                                        {!isFocused && (
                                            <div className="absolute inset-0 flex items-center justify-center bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl">
                                                <span className="bg-[#47A0FF] text-white px-6 py-2 rounded-full font-semibold shadow-lg backdrop-blur-md translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                                    Click to Focus
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>

            </div>
        </section>
    );
}
