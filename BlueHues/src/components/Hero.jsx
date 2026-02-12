import React, { useEffect, useState, useRef } from 'react';

function Hero() {
    const [isVisible, setIsVisible] = useState(false);
    const [currentVideo, setCurrentVideo] = useState(0);
    const videoRef = useRef(null);

    const videos = [
        '/videos/Hero Section videos/gem1.mp4',
        '/videos/Hero Section videos/gem2.mp4',
        '/videos/Hero Section videos/gem3.mp4',
        '/videos/Hero Section videos/gem4.mp4'
    ];

    useEffect(() => {
        setIsVisible(true);
        const interval = setInterval(() => {
            setCurrentVideo((prev) => (prev + 1) % videos.length);
        }, 14000);
        return () => clearInterval(interval);
    }, []);

    // Set slow playback rate when video loads
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 1;
        }
    }, [currentVideo]);

    // Handle video selection
    const handleVideoSelect = (index) => {
        setCurrentVideo(index);
    };

    // Handle video load to set playback speed
    const handleVideoLoad = () => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.5;
        }
    };

    return (
        <section className="relative min-h-screen w-full bg-black overflow-hidden flex items-center justify-center py-16 md:py-20 lg:pt-20">
            {/* Background Image Layer */}
            <div className="absolute inset-0">
                <img
                    src="/images/Blue Hues hero Image.jpeg"
                    alt="Blue Hues Background"
                    className="w-full h-full object-cover opacity-40"
                />
                {/* Overlay for better contrast */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40" />
            </div>

            {/* Main Content Container */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-10 lg:gap-16">
                    
                    {/* Left - Stacked Video Cards */}
                    <div className={`relative w-full lg:w-1/2 transition-all duration-[3000ms] ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
                    }`}>
                        <div className="relative aspect-[3/4] max-w-[280px] sm:max-w-[320px] md:max-w-md lg:max-w-lg mx-auto">
                            {/* Background cards for depth - hidden on mobile for cleaner look */}
                            <div className="hidden sm:block absolute inset-0 bg-white/5 rounded-2xl md:rounded-3xl transform rotate-6 translate-x-6 md:translate-x-8 translate-y-3 md:translate-y-4 transition-transform duration-[2000ms]" />
                            <div className="hidden sm:block absolute inset-0 bg-white/10 rounded-2xl md:rounded-3xl transform rotate-3 translate-x-3 md:translate-x-4 translate-y-1.5 md:translate-y-2 transition-transform duration-[2000ms]" />
                            
                            {/* Main video card */}
                            <div className="relative w-full h-full overflow-hidden shadow-2xl rounded-2xl md:rounded-3xl">
                                <video
                                    ref={videoRef}
                                    key={currentVideo}
                                    className="w-full h-full object-cover transition-opacity duration-[500ms]"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    onLoadedData={handleVideoLoad}
                                >
                                    <source src={videos[currentVideo]} type="video/mp4" />
                                </video>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                            </div>
                        </div>
                    </div>

                    {/* Right - Content */}
                    <div className={`w-full lg:w-1/2 text-center lg:text-left transition-all duration-[3000ms] delay-500 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
                    }`}>
                        <p className="text-white/50 text-[0.65rem] sm:text-xs tracking-[0.3em] sm:tracking-[0.5em] uppercase mb-4 sm:mb-6 md:mb-8">
                            Ceylon Gemstones · Sri Lanka
                        </p>
                        
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight text-white mb-4 sm:mb-6 md:mb-8">
                            <span className="font-serif italic">Blue Hues</span>
                        </h1>
                        
                        <p className="text-base sm:text-lg md:text-xl text-white/80 font-light leading-relaxed mb-3 sm:mb-4 max-w-lg mx-auto lg:mx-0">
                            Sustainable gemstone mining and selling from the heart of Sri Lanka.
                        </p>
                        <p className="text-sm sm:text-base text-white/60 font-light leading-relaxed mb-8 sm:mb-10 md:mb-12 max-w-lg mx-auto lg:mx-0">
                            Preserving heritage, protecting nature, and honouring artisanal craftsmanship.
                        </p>

                        <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 mb-8 sm:mb-10 md:mb-12">
                            <a href="#gemstones" className="px-8 sm:px-10 py-3 sm:py-4 bg-white text-black text-xs sm:text-sm tracking-widest uppercase rounded-full hover:bg-white/90 hover:scale-105 transition-all duration-500">
                                Explore
                            </a>
                            <a href="#sustainability" className="px-8 sm:px-10 py-3 sm:py-4 border border-white/40 text-white text-xs sm:text-sm tracking-widest uppercase rounded-full hover:bg-white/10 hover:scale-105 transition-all duration-500">
                                Our Sustainability
                            </a>
                        </div>

                        {/* Video Navigation - Clickable Boxes */}
                        <div className="flex justify-center lg:justify-start gap-3 sm:gap-4">
                            {videos.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleVideoSelect(index)}
                                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl text-xs sm:text-sm cursor-pointer transition-all duration-700 ${
                                        currentVideo === index 
                                            ? 'bg-white/10 border-2 border-white text-white scale-110' 
                                            : 'border border-white/30 text-white/40 hover:border-white/60 hover:text-white/80 hover:bg-white/5 hover:scale-105'
                                    }`}
                                    aria-label={`Select video ${index + 1}`}
                                >
                                    0{index + 1}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;