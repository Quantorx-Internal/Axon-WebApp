import React, { useState } from "react";
import Button from "../../components/Button";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            {/* Standard Fixed Header Container */}
            <div className="absolute top-0 left-0 right-0 z-[100] py-6 px-4 md:px-8 flex justify-center bg-transparent">
                <header className="w-full max-w-7xl flex justify-between items-center">
                    {/* Logos */}
                    <div className="flex items-center gap-4 md:gap-8">
                        <img
                            src="/HeaderLogo.png"
                            alt="Logo"
                            className="h-auto object-contain w-24 md:w-32 lg:w-40"
                        />
                        <img
                            src="/QuantLogo.png"
                            alt="Quant"
                            className="h-auto object-contain w-16 md:w-24 lg:w-28"
                        />
                    </div>

                    {/* Desktop Navigation Links */}
                    <nav className="hidden lg:flex items-center gap-8 xl:gap-14">
                        {["Platform", "Solution", "Customers", "Resources"].map((item) => (
                            <button key={item}
                                className="text-base xl:text-lg font-semibold text-white hover:text-[#47A0FF] transition-colors bg-transparent border-none cursor-pointer"
                            >
                                {item}
                            </button>
                        ))}
                    </nav>

                    {/* Actions (Request Demo Btn & Hamburger Menu) */}
                    <div className="flex items-center gap-4">
                        <Button
                            text="Request Demo"
                            variant="white"
                            className="hidden md:flex py-3 px-6 xl:px-8 text-sm xl:text-base"
                            onClick={() => alert("Request Demo clicked")}
                        />

                        {/* Mobile Menu Icon */}
                        <button
                            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 z-[110] relative focus:outline-none"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            <span className={`w-6 h-0.5 rounded transition-all duration-300 bg-white ${isMenuOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1'}`} />
                            <span className={`w-6 h-0.5 rounded transition-all duration-300 bg-white ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
                            <span className={`w-6 h-0.5 rounded transition-all duration-300 bg-white ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1'}`} />
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
