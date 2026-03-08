import React from "react";

export default function TestCases() {
    const videos = [
        {
            title: "Video Name Here",
            bgImage: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/292NacUvQT/250v9pdf_expires_30_days.png",
            duration: "20:00"
        },
        {
            title: "Video Name Here",
            bgImage: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/292NacUvQT/vdmri7wb_expires_30_days.png",
            duration: "20:00"
        },
        {
            title: "Video Name Here",
            bgImage: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/292NacUvQT/6sg7ezd6_expires_30_days.png",
            duration: "20:00"
        }
    ];

    return (
        <section className="w-full bg-[#031125] pt-32 sm:pt-48 md:pt-64 lg:pt-80 pb-16 md:pb-24 px-4 relative flex flex-col items-center z-10">
            <div className="container mx-auto max-w-7xl flex flex-col items-center">

                {/* Section Header */}
                <div className="flex flex-col items-center text-center gap-4 mb-12 md:mb-16">
                    <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                        Explore common test cases
                    </h2>
                    <p className="text-white/80 text-lg md:text-xl lg:text-2xl font-light">
                        See how our platform handles the most frequent workflows
                    </p>
                </div>

                {/* Video Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
                    {videos.map((vid, idx) => (
                        <div key={idx} className="flex flex-col items-center w-full group cursor-pointer">
                            {/* Video Card */}
                            <div className="w-full aspect-video bg-[#026FE3]/60 p-2 md:p-3 rounded-2xl md:rounded-3xl border-2 border-white/40 shadow-xl transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-blue-500/20">
                                <div
                                    className="w-full h-full rounded-xl md:rounded-2xl bg-cover bg-center flex items-center justify-center relative overflow-hidden"
                                    style={{ backgroundImage: `url(${vid.bgImage})` }}
                                >
                                    {/* Dark overlay for hover effect */}
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />

                                    {/* Top Bar inside Video */}
                                    <div className="absolute top-0 left-0 right-0 p-3 md:p-4 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent z-10">
                                        <span className="text-white text-xs md:text-sm font-bold truncate pr-2">
                                            {vid.title}
                                        </span>
                                        <div className="flex items-center gap-2 shrink-0 bg-black/40 px-2 py-1 rounded-full backdrop-blur-sm">
                                            <span className="text-white/80 text-[10px] md:text-xs uppercase tracking-wider">
                                                Duration
                                            </span>
                                            <span className="text-white text-[10px] md:text-xs font-mono font-bold">
                                                {vid.duration}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Play Button Icon Inside */}
                                    <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center relative z-10 group-hover:bg-[#026FE3]/80 transition-colors duration-300">
                                        <div className="w-0 h-0 border-t-[6px] md:border-t-8 border-t-transparent border-l-[12px] md:border-l-[16px] border-l-white border-b-[6px] md:border-b-8 border-b-transparent ml-1" />
                                    </div>
                                </div>
                            </div>

                            {/* Title below Video */}
                            <h3 className="text-white text-lg md:text-xl lg:text-2xl font-medium mt-4 md:mt-6 text-center group-hover:text-[#47A0FF] transition-colors">
                                {vid.title}
                            </h3>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
