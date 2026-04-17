import React from "react";

export default function TrustedWorldwide() {
    return (
        <section
            className="w-full bg-[#031125] flex flex-col items-center justify-center text-center bg-cover bg-center bg-no-repeat relative px-4 aspect-[1920/758] min-h-[400px] max-h-[700px]"
            style={{ backgroundImage: 'url(/WorldwideIBackground.png)' }}
        >
            <div className="absolute inset-0 bg-[#031125]/80 pointer-events-none"></div>
            <div className="relative z-10 flex flex-col items-center">
                <h2 className="text-white text-3xl lg:text-4xl font-bold tracking-tight mb-4 md:mb-6">
                    Trusted Worldwide
                </h2>
                <p className="text-white/90 text-base leading-relaxed max-w-4xl">
                    Leading organizations across every industry rely on AXON
                </p>
            </div>
        </section>
    );
}
