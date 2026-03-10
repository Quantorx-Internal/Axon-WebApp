import React from "react";

export default function Enterprise() {
    return (
        <section 
            className="w-full bg-[#f4f8fc]/80 py-24 md:py-32 lg:py-48 px-4 flex flex-col items-center justify-center text-center bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/EnterpriseBackground.png')" }}
        >
            <h2 className="text-[#031125] text-4xl md:text-6xl lg:text-[80px] font-bold mb-6 leading-tight">
                Built for Enterprise
            </h2>
            <p className="text-[#070B11]/80 text-xl md:text-2xl lg:text-3xl max-w-2xl font-light">
                Enterprise-grade infrastructure with unmatched performance and reliability
            </p>
        </section>
    );
}
