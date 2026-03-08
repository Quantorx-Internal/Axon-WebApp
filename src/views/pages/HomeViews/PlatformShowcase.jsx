import React from "react";

export default function PlatformShowcase() {
    return (
        <section className="w-full bg-[#f4f8fc] py-16 md:py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12 flex flex-col items-center relative z-10 max-w-7xl">
                
                {/* Header Section */}
                <div className="text-center mb-16 md:mb-24 flex flex-col items-center relative">
                    <span className="text-[#47A0FF] font-semibold tracking-wide mb-4 text-sm md:text-base uppercase">
                        Platform Showcase
                    </span>
                    <h2 className="text-[#031021] text-4xl md:text-5xl font-bold mb-4">
                        See AXON in Action
                    </h2>
                    <p className="text-[#031021] text-lg md:text-xl max-w-2xl mx-auto">
                        Discover how our platform transforms complex spatial data into actionable insights
                    </p>
                    {/* Floating icon */}
                    <img
                        src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/292NacUvQT/ria9feqw_expires_30_days.png"
                        alt=""
                        className="hidden md:block absolute -left-12 lg:-left-24 top-1/2 -translate-y-1/2 w-10 h-10 object-contain opacity-70"
                    />
                </div>

                {/* Steps Section */}
                <div className="w-full relative flex flex-col lg:flex-row gap-12 lg:gap-8">
                    
                    {/* Background Line (Desktop only) */}
                    <div className="hidden lg:block absolute left-[25%] right-[25%] top-[45px] z-0">
                        <img 
                            src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/292NacUvQT/0wex3wga_expires_30_days.png" 
                            alt="Connection line" 
                            className="w-full object-cover h-[2px] opacity-70 border border-[#47a0ff]/20"
                        />
                    </div>

                    {/* Left Column - Step 1 */}
                    <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start relative z-10">
                        <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6 lg:gap-8 mb-10 w-full relative z-10">
                            <img
                                src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/292NacUvQT/c23uuyuj_expires_30_days.png"
                                alt="1"
                                className="w-20 md:w-24 h-auto object-contain shrink-0 drop-shadow-md"
                            />
                            <div className="flex flex-col gap-2 mt-2 bg-[#f4f8fc]/80 backdrop-blur-sm rounded-xl pr-4">
                                <h3 className="text-[#031021] text-2xl md:text-3xl font-bold">
                                    Nova Intelligence Engine
                                </h3>
                                <p className="text-[#030E1F]/80 text-base leading-relaxed max-w-md mx-auto sm:mx-0">
                                    Our proprietary AI engine processes billions of data points to deliver real-time spatial insights across your entire organization.
                                </p>
                            </div>
                        </div>
                        
                        {/* Nova Image */}
                        <div className="w-full transform hover:-translate-y-1 transition-transform duration-300">
                            <img
                                src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/292NacUvQT/n1b1unav_expires_30_days.png"
                                alt="Nova Platform"
                                className="w-full h-auto object-contain drop-shadow-xl rounded-xl"
                            />
                        </div>
                    </div>

                    {/* Right Column - Step 2 */}
                    <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start mt-12 lg:mt-32 relative z-10">
                        <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6 lg:gap-8 mb-10 w-full relative z-10">
                            {/* Decorative background curve */}
                            <div className="absolute -z-10 w-[200%] h-[200%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-60 pointer-events-none hidden lg:block"
                                style={{
                                    backgroundImage: 'url(https://storage.googleapis.com/tagjs-prod.appspot.com/v1/292NacUvQT/2ba63xfj_expires_30_days.png)',
                                    backgroundSize: 'contain',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center'
                                }}
                            />
                            <img
                                src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/292NacUvQT/c7u96zzc_expires_30_days.png"
                                alt="2"
                                className="w-20 md:w-24 h-auto object-contain shrink-0 drop-shadow-md"
                            />
                            <div className="flex flex-col gap-2 mt-2 bg-[#f4f8fc]/80 backdrop-blur-sm rounded-xl px-2">
                                <h3 className="text-[#031021] text-2xl md:text-3xl font-bold">
                                    Unified Platform Dashboard
                                </h3>
                                <p className="text-[#030E1F]/80 text-base leading-relaxed max-w-md mx-auto sm:mx-0">
                                    A single pane of glass for all your location intelligence needs — analytics, visualization, and collaboration in one place.
                                </p>
                            </div>
                        </div>

                        {/* Unified Platform Image */}
                        <div className="w-full lg:w-[90%] lg:ml-auto transform hover:-translate-y-1 transition-transform duration-300 relative z-20">
                            <img
                                src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/292NacUvQT/fcqes9jt_expires_30_days.png"
                                alt="Unified Dashboard"
                                className="w-full h-auto object-contain drop-shadow-2xl rounded-xl"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
