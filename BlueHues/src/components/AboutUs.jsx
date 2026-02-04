import React, { useEffect, useRef, useState } from 'react';

// About Us section - Our Heritage and Mission
// Redesigned to match Sustainability section typography and layout
function AboutUs() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Detect when section is visible for fade-in animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section title */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-6xl font-light text-slate-900 mb-4 tracking-wide">
            <span className="font-serif italic">About Us</span>
          </h2>
          <div className="w-24 h-px bg-slate-300 mx-auto"></div>
        </div>

        {/* Main content grid - Image left, Text right (reversed from sustainability) */}
        <div
          className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 delay-300 ${isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-10'
            }`}
        >
          {/* Image side - Left with refined neutral area */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden w-0.5xl h-[700px] shadow-2xl bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
              <div className="relative">
                {/* Optional image placeholder - replace when real asset is ready */}
                <img
                  src={'/images/BlueHuesAboutUs.png'}
                  alt="Traditional artisanal gemstone mining heritage in Sri Lanka"
                  className="w-4xl h-[700px] object-[65%_center] opacity-90"
                />
                {/* Subtle overlay for premium look */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-slate-900/10" />
              </div>
            </div>

            {/* Soft circular accent echoing gemstone shape */}
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-slate-100 rounded-full -z-10" />
          </div>

          {/* Text content side - Right */}
          <div className="space-y-10">
            {/* Our Heritage - Main statement with mixed typography (matching Sustainability style) */}
            <div>
              <h3 className="text-2xl md:text-3xl font-light text-slate-900 mb-6">
                <span className="font-serif italic">Our Heritage</span>
              </h3>

              {/* Thin divider to echo reference design */}
              <div className="w-16 h-px bg-slate-300 mb-8" />

              {/* Heritage content with mixed typography */}
              <div className="text-2xl md:text-3xl leading-relaxed text-slate-800 font-light mb-10">
                <p>
                  Sri Lanka has MAINTAINED its{' '}
                  <span className="font-serif italic text-slate-500">two-thousand-year-old</span> tradition of{' '}
                  <span className="font-serif italic text-slate-500">gemstone</span> mining by{' '}
                  <span className="font-normal">PROHIBITING</span> large-scale{' '}
                  <span className="font-serif italic text-slate-400">mechanized</span> operations, instead{' '}
                  <span className="font-serif italic text-slate-500">prioritizing</span> the{' '}
                  <span className="font-normal">preservation</span> of small-scale mining{' '}
                  <span className="font-serif italic text-slate-500">techniques</span>.
                </p>
              </div>

              {/* Supporting heritage text */}
              <div className="space-y-6 text-slate-700 text-lg leading-relaxed font-light">
                <p>
                  This strategy not only creates more job opportunities for local communities but also guarantees the sustainability of gemstone resources for future extraction.
                </p>

                <p>
                  Furthermore, Sri Lanka has led the way in improving the visual quality of rubies and sapphires through heat treatment, a method that has been recorded since the 13th century.
                </p>
              </div>
            </div>

            {/* Thin divider between sections */}
            <div className="w-16 h-px bg-slate-300" />

            {/* Preserving Heritage subsection with mixed typography */}
            <div>
              <div className="text-2xl md:text-3xl leading-relaxed text-slate-800 font-light mb-8">
                <p>
                  <span className="font-serif italic text-slate-500">Preserving</span> the{' '}
                  <span className="font-normal">HERITAGE</span> of{' '}
                  <span className="font-serif italic">gemstones</span>...
                </p>
              </div>

              {/* Supporting text */}
              <div className="space-y-6 text-slate-700 text-lg leading-relaxed font-light">
                <p>
                  Gemstones have been culturally significant throughout various civilizations since ancient times, fulfilling roles in trade, personal adornment, and symbolic meaning. In modern society, the cultural and symbolic value of gemstones is frequently overlooked, as the market primarily focuses on their financial or investment potential, especially for emeralds, rubies, sapphires, and other valuable stones.
                </p>

                <p>
                  At the same time, many areas that mine gemstones are encountering unsustainable social, economic, and environmental issues.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;