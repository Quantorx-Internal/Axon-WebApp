import React, { useState, useEffect } from "react";
import Button from "../../components/Button";

export default function Header() {
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
        <>
            {/* Fixed Floating Header Wrapper */}
            <div className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 flex justify-center ${isScrolled ? 'pt-4 px-4' : 'pt-6 md:pt-12 px-4 md:px-8'}`}>
                <header className={`w-full flex justify-between items-center transition-all duration-500 rounded-full border
                    ${isScrolled
                        ? 'max-w-6xl bg-[#E2E8F0]/85 backdrop-blur-xl px-5 py-2 md:px-6 md:py-3 shadow-lg border-white/60'
                        : 'max-w-7xl bg-transparent border-transparent'}`}
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
        </>
    );
}
