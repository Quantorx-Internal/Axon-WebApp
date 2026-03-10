import React, { useState, useEffect } from "react";
import Button from "../../components/Button";

export default function Hero() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section className="relative w-full bg-[#031125]">
            {/* Background Image Container */}
            <div 
                className="w-full flex flex-col items-center bg-cover bg-center bg-no-repeat pt-6 md:pt-12 px-4 md:px-8 pb-48 md:pb-72 lg:pb-80 xl:pb-96"
                style={{ backgroundImage: 'url(/HomeBackground.png)' }}
            >
                {/* Fixed Floating Header Wrapper */}
                <div className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 flex justify-center ${isScrolled ? 'pt-4 px-4' : 'pt-6 md:pt-12 px-4 md:px-8'}`}>
                    <header className={`w-full flex justify-between items-center transition-all duration-500
                        ${isScrolled 
                            ? 'max-w-6xl bg-[#E2E8F0]/85 backdrop-blur-xl rounded-full px-5 py-2 md:px-6 md:py-3 shadow-lg border border-white/60' 
                            : 'max-w-7xl bg-transparent'}`}
                    >
                        {/* Logos */}
                        <div className="flex items-center gap-4 md:gap-8">
                            <img
                                src="/HeaderLogo.png"
                                alt="Logo"
                                className={`h-auto object-contain transition-all duration-300 ${isScrolled ? 'w-20 md:w-28 lg:w-32 [filter:invert(1)_hue-rotate(180deg)_brightness(1.5)]' : 'w-24 md:w-32 lg:w-40'}`}
                            />
                            <img
                                src="/QuantLogo.png"
                                alt="Quant"
                                className={`h-auto object-contain transition-all duration-300 ${isScrolled ? 'w-14 md:w-20 lg:w-24 [filter:invert(1)_hue-rotate(180deg)_brightness(1.5)]' : 'w-16 md:w-24 lg:w-28'}`}
                            />
                        </div>

                        {/* Desktop Navigation Links */}
                        <nav className="hidden lg:flex items-center gap-8 xl:gap-14">
                            {["Platform", "Solution", "Customers", "Resources"].map((item) => (
                                <button key={item} 
                                    className={`text-base xl:text-lg font-semibold transition-colors bg-transparent border-none cursor-pointer
                                        ${isScrolled ? 'text-[#031125] hover:text-[#026FE3]' : 'text-white hover:text-[#47A0FF]'}`}
                                >
                                    {item}
                                </button>
                            ))}
                        </nav>

                        {/* Actions (Request Demo Btn & Hamburger Menu) */}
                        <div className="flex items-center gap-4">
                            <Button 
                                text="Request Demo"
                                variant={isScrolled ? "primary" : "white"}
                                className={`hidden md:flex py-3 transition-all duration-300 ${isScrolled ? 'px-5 xl:px-7 text-sm' : 'px-6 xl:px-8 text-sm xl:text-base'}`}
                                onClick={() => alert("Request Demo clicked")}
                            />

                            {/* Mobile Menu Icon */}
                            <button
                                className="lg:hidden flex flex-col justify-center items-center w-10 h-10 z-[110] relative focus:outline-none"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                aria-label="Toggle menu"
                            >
                                <span className={`w-6 h-0.5 rounded transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1'} ${isScrolled && !isMenuOpen ? 'bg-[#031125]' : 'bg-white'}`} />
                                <span className={`w-6 h-0.5 rounded transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'} ${isScrolled && !isMenuOpen ? 'bg-[#031125]' : 'bg-white'}`} />
                                <span className={`w-6 h-0.5 rounded transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1'} ${isScrolled && !isMenuOpen ? 'bg-[#031125]' : 'bg-white'}`} />
                            </button>
                        </div>
                    </header>
                </div>

                {/* Mobile Menu Dropdown */}
                <div className={`fixed top-24 right-4 bg-[#031125]/95 backdrop-blur-md border border-white/20 rounded-2xl p-6 flex flex-col gap-5 z-[105] lg:hidden shadow-2xl min-w-[240px] transition-all duration-300 origin-top-right ${isMenuOpen ? 'scale-100 opacity-100 visible' : 'scale-95 opacity-0 invisible'}`}>
                    {["Platform", "Solution", "Customers", "Resources"].map((item) => (
                        <button key={item} className="text-white text-left text-lg font-medium hover:text-[#47A0FF] transition-colors border-none bg-transparent" onClick={() => setIsMenuOpen(false)}>
                            {item}
                        </button>
                    ))}
                    <Button 
                        text="Request Demo"
                        variant="whiteFlat"
                        className="md:hidden w-full py-3 px-6 mt-4 text-base"
                        onClick={() => { alert("Request Demo clicked"); setIsMenuOpen(false); }}
                    />
                </div>

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
    );
}
