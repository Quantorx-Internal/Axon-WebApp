import React from "react";
import Button from "../../components/Button";
import Header from "./Header";
import { ScrollReveal } from "../../components/ScrollReveal";

export default function Hero() {
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
        <>
            <section className="relative w-full bg-[#031125]">
                {/* Background Image Container */}
                <div
                    className="w-full flex flex-col items-center bg-cover bg-center bg-no-repeat pt-6 md:pt-12 px-4 md:px-8 pb-48 md:pb-72 lg:pb-80 xl:pb-96"
                    style={{ backgroundImage: 'url(/HomeBackground.png)' }}
                >
                    <Header />

                    {/* Spacer to prevent layout leap */}
                    <div className="h-10 md:h-16 w-full mb-12 md:mb-20 pointer-events-none" />

                    {/* Main Hero Content */}
                    <div className="flex flex-col items-center text-center max-w-4xl mx-auto z-10 px-4">
                        <img
                            src="/HomeLogo.png"
                            alt="Hero Logo"
                            className="w-48 md:w-64 lg:w-80 h-auto object-contain mb-8 animate-fade-in-up"
                        />

                        <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6 uppercase">
                            AGENTIC AI GIS INTELLIGENCE PLATFORM
                        </h1>

                        <p className="text-white/90 text-sm md:text-lg lg:text-xl max-w-3xl leading-relaxed mb-10 md:mb-14 font-light">
                            Transform how your teams work with spatial data through intelligent automation. Built for enterprise scale, designed for effortless collaboration.
                        </p>

                        <Button
                            text="Request Demo"
                            variant="primary"
                            className="py-4 md:py-5 px-10 md:px-16 text-lg md:text-2xl"
                            onClick={() => alert("Request Demo clicked")}
                        />
                    </div>
                </div>

                {/* Overlapping Video Section */}
                <div className="absolute bottom-0 left-0 right-0 flex justify-center px-4 w-full translate-y-1/2 z-20 pointer-events-none">
                    <div className="w-full max-w-5xl pointer-events-auto group">
                        <button
                            className="w-full relative flex flex-col justify-end bg-black text-left rounded-2xl md:rounded-3xl border-2 md:border-[3px] border-white/40 shadow-2xl overflow-hidden cursor-pointer aspect-video transition-transform hover:scale-[1.01] duration-300"
                            onClick={() => alert("Play Video")}
                        >
                            {/* Video Thumbnail Background */}
                            <div
                                className="absolute inset-0 bg-cover bg-center brightness-75 group-hover:brightness-90 transition-all duration-500"
                                style={{ backgroundImage: 'url(https://storage.googleapis.com/tagjs-prod.appspot.com/v1/292NacUvQT/snmopx1m_expires_30_days.png)' }}
                            />

                            {/* Play Button Overlay (Optional, for better UX) */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-16 h-16 md:w-20 md:h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-[#026FE3]/80 transition-colors duration-300">
                                    <div className="w-0 h-0 border-t-8 border-t-transparent border-l-[16px] border-l-white border-b-8 border-b-transparent ml-1" />
                                </div>
                            </div>

                            {/* Video Info Bar */}
                            <div className="relative z-10 w-full p-4 md:p-6 lg:p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col xs:flex-row items-start xs:items-center justify-between gap-2 xs:gap-4 mt-auto">
                                <span className="text-white text-lg md:text-2xl font-bold truncate pr-4">
                                    Platform Overview Demo
                                </span>
                                <div className="flex items-center gap-2 md:gap-4 shrink-0 bg-black/40 px-3 py-1 md:px-4 md:py-2 rounded-full backdrop-blur-md">
                                    <span className="text-white/80 text-xs md:text-sm uppercase tracking-wider font-semibold">
                                        Duration
                                    </span>
                                    <span className="text-white text-sm md:text-base font-bold font-mono">
                                        20:00
                                    </span>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            </section>

            {/* TestCases Section appended below */}
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
        </>
    );
}
