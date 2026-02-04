import React, { useEffect, useState } from 'react';

// Hero section - First impression with elegant typography
function Hero() {
    // State to trigger fade-in animation
    const [isVisible, setIsVisible] = useState(false);

    // Show hero content when component mounts
    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
            {/* Background decorative elements */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-10 -left-10 w-80 h-80 border border-slate-700/40 rounded-full" />
                <div className="absolute -bottom-24 right-0 w-[520px] h-[520px] border border-slate-700/30 rounded-full" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.18),_transparent_60%)]" />
            </div>

            {/* Main hero content */}
            <div className={`relative z-10 px-6 max-w-6xl transition-all duration-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                {/* Logo placeholder */}
                {false && (
                    <div className="mb-12">
                        <img
                            src={null}
                            alt="BlueHues Ceylon sustainable gemstone mining logo"
                            className="h-24 mx-auto"
                        />
                    </div>
                )}

                {/* Main heading & copy */}
                <div className="text-center">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white mb-6 tracking-wide">
                        <span className="font-serif italic">Blue Hues</span>
                    </h1>

                    <p className="text-sm md:text-base tracking-[0.28em] uppercase text-slate-300 mb-8">
                        Ceylon Gemstones · Sri Lanka
                    </p>

                    <p className="text-lg md:text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed font-light">
                        Sustainable gemstone mining and selling from the heart of Sri Lanka.
                        <br />
                        <span className="text-sm md:text-base text-slate-300">
                            Preserving heritage, protecting nature, and honouring artisanal craftsmanship.
                        </span>
                    </p>
                </div>

                {/* Call to action buttons */}
                <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                        href="#gemstones"
                        className="inline-flex px-10 py-3.5 bg-white text-slate-900 rounded-full text-sm tracking-[0.18em] uppercase font-medium hover:bg-slate-100 transition-colors duration-300"
                    >
                        Explore Gemstones
                    </a>
                    <a
                        href="#sustainability"
                        className="inline-flex px-10 py-3.5 border border-slate-500/70 text-slate-100 rounded-full text-sm tracking-[0.18em] uppercase font-light hover:bg-slate-900/40 transition-colors duration-300"
                    >
                        Our Responsibility
                    </a>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </section>
    );
}

export default Hero;