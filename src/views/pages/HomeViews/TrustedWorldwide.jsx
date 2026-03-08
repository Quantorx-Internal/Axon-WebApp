import React from "react";

export default function TrustedWorldwide() {
    return (
        <section
            className="w-full bg-[#031125] flex flex-col items-center justify-center text-center bg-cover bg-center bg-no-repeat relative px-4 aspect-[1920/758] min-h-[400px] max-h-[700px]"
            style={{ backgroundImage: 'url(/WorldwideIBackground.png)' }}
        >
            <div className="absolute inset-0 bg-[#031125]/80 pointer-events-none"></div>
            <div className="relative z-10 flex flex-col items-center">
                <h2 className="text-white text-4xl md:text-5xl lg:text-[70px] font-bold mb-4 md:mb-6 leading-tight">
                    Trusted Worldwide
                </h2>
                <p className="text-white/90 text-lg md:text-xl lg:text-2xl max-w-4xl font-light">
                    Leading organizations across every industry rely on AXON
                </p>
            </div>
        </section>
    );
}
