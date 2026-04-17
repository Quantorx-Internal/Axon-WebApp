import React from "react";

export default function CloudEcosystem() {
    const icons = [
        "/cloudIcon.png",
        "/awsIcon.png",
        "/freezeIcon.png",
        "/aShapeIcon.png",
        "/layerIcon.png",
        "/capsuleShapeIcon.png"
    ];

    return (
        <section className="w-full bg-[#031125] py-16 md:py-24">
            <div className="container mx-auto px-6 max-w-7xl flex flex-col items-center">

                {/* Header Text */}
                <div className="flex flex-col items-center text-center gap-4 md:gap-6 mb-12 md:mb-16">
                    <h2 className="text-white text-3xl lg:text-4xl font-bold tracking-tight max-w-4xl">
                        Bring geospatial into your cloud ecosystem
                    </h2>
                    <p className="text-white/80 text-base leading-relaxed max-w-3xl">
                        Deploy in the cloud or run it on-premises / self-hosted in your own environment
                    </p>
                </div>

                {/* Cloud Provider Icons */}
                <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 lg:gap-14 w-full px-4">
                    {icons.map((src, index) => (
                        <img
                            key={index}
                            src={src}
                            alt={`Cloud ecosystem partner ${index + 1}`}
                            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain hover:scale-110 transition-transform duration-300 opacity-90 hover:opacity-100"
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}
