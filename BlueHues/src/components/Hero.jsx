import React, { useEffect, useState } from 'react';

// Hero section - First impression with elegant typography and premium background
function Hero() {
    // State to trigger fade-in animation
    const [isVisible, setIsVisible] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);

    // Show hero content when component mounts
    useEffect(() => {
        setIsVisible(true);
        
        // Preload background image
        const img = new Image();
        img.src = '/images/BlueHuesBanner.webp';
        img.onload = () => setImageLoaded(true);
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background image with overlay */}
            <div 
                className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                style={{
                    backgroundImage: `url('/images/BlueHuesBanner.webp')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-900/70 to-slate-950/85" />
                
                {/* Subtle animated gradient overlay for premium feel */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-slate-900/20 to-slate-950/40 animate-pulse" style={{ animationDuration: '8s' }} />
            </div>

            {/* Decorative elements for depth */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-20 -left-20 w-96 h-96 border border-white/10 rounded-full animate-pulse" style={{ animationDuration: '6s' }} />
                <div className="absolute -bottom-32 right-0 w-[600px] h-[600px] border border-white/8 rounded-full animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />
            </div>

            {/* Main hero content */}
            <div className={`relative z-10 px-6 max-w-6xl w-full transition-all duration-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                {/* Main heading & copy with staggered animations */}
                <div className="text-center">
                    <h1 className={`text-5xl md:text-7xl lg:text-8xl font-light text-white mb-6 tracking-wide transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <span className="font-serif italic drop-shadow-2xl">Blue Hues</span>
                    </h1>

                    <p className={`text-sm md:text-base tracking-[0.28em] uppercase text-slate-200 mb-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        Ceylon Gemstones · Sri Lanka
                    </p>

                    <p className={`text-lg md:text-xl text-white max-w-3xl mx-auto leading-relaxed font-light mb-4 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        Sustainable gemstone mining and selling from the heart of Sri Lanka.
                    </p>
                    <p className={`text-sm md:text-base text-slate-200 max-w-3xl mx-auto transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        Preserving heritage, protecting nature, and honouring artisanal craftsmanship.
                    </p>
                </div>

                {/* Call to action buttons with smooth animations */}
                <div className={`mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <a
                        href="#gemstones"
                        className="inline-flex px-10 py-3.5 bg-white text-slate-900 rounded-full text-sm tracking-[0.18em] uppercase font-medium hover:bg-slate-100 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                        Explore Gemstones
                    </a>
                    <a
                        href="#sustainability"
                        className="inline-flex px-10 py-3.5 border-2 border-white/80 text-white rounded-full text-sm tracking-[0.18em] uppercase font-light hover:bg-white/10 hover:scale-105 transition-all duration-300 backdrop-blur-sm"
                    >
                        Our Responsibility
                    </a>
                </div>
            </div>

            {/* Scroll indicator with smooth animation */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
                <svg className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </section>
    );
}

export default Hero;