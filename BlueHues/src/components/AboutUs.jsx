import React, { useEffect, useRef, useState } from 'react';

// About Us section - Company heritage and history
// Redesigned to follow Sustainability layout: image left, content right
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
    <section ref={sectionRef} id="about" className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* Section title */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-6xl font-light text-slate-900 mb-4 tracking-wide">
            About <span className="font-serif italic">Us</span>
          </h2>
          <div className="w-24 h-px bg-slate-300 mx-auto"></div>
        </div>

        {/* Main content grid - Image left, Text right */}
        <div
          className={`grid md:grid-cols-2 gap-12 items-start transition-all duration-1000 delay-200 ${isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-10'
            }`}
        >
          {/* Image / visual side - Left */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
              <div className="relative aspect-[4/5]">
                {/* Optional image placeholder - replace when real asset is ready */}
                {false ? (
                  <img
                    src={null}
                    alt="Sri Lankan gemstone heritage and mining tradition"
                    className="w-full h-full object-cover opacity-90"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 flex items-center justify-center">
                    <span className="font-serif italic text-slate-200 tracking-[0.28em] text-xs md:text-sm uppercase">
                      Sri Lankan Heritage
                    </span>
                  </div>
                )}
                {/* Subtle overlay for editorial feel */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-slate-900/10" />
              </div>
            </div>
            {/* Soft accent circle */}
            <div className="absolute -top-6 -right-6 w-28 h-28 bg-slate-100 rounded-full -z-10" />
          </div>

          {/* Text content side - Right */}
          <div className="space-y-10">
            {/* Our Heritage Card */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-slate-200">
              <h3 className="text-3xl md:text-4xl font-light text-slate-900 mb-6 tracking-wide">
                Our <span className="font-serif italic">Heritage</span>
              </h3>

              <div className="space-y-5 text-slate-700 text-lg leading-relaxed font-light">
                <p>
                  Sri Lanka has maintained its two-thousand-year-old tradition of gemstone mining by prohibiting large-scale mechanized operations, instead prioritizing the preservation of small-scale mining techniques. This strategy not only creates more job opportunities for local communities but also guarantees the sustainability of gemstone resources for future extraction.
                </p>

                <p>
                  Furthermore, Sri Lanka has led the way in improving the visual quality of rubies and sapphires through heat treatment, a method that has been recorded since the 13th century.
                </p>
              </div>
            </div>

            {/* Preserving Heritage + Company Card stack */}
            <div className="space-y-6">
              {/* Preserving Heritage Card */}
              <div className="bg-slate-900 rounded-2xl shadow-xl p-8 md:p-10 text-slate-50">
                <h3 className="text-3xl md:text-4xl font-light mb-6 tracking-wide">
                  Preserving the heritage of <span className="font-serif italic">gemstones</span>...
                </h3>

                <div className="space-y-5 text-slate-100 text-lg leading-relaxed font-light">
                  <p>
                    Gemstones have been culturally significant throughout various civilizations since ancient times, fulfilling roles in trade, personal adornment, and symbolic meaning. In modern society, the cultural and symbolic value of gemstones is frequently overlooked, as the market primarily focuses on their financial or investment potential, especially for emeralds, rubies, sapphires, and other valuable stones.
                  </p>

                  <p>
                    At the same time, many areas that mine gemstones are encountering unsustainable social, economic, and environmental issues.
                  </p>
                </div>
              </div>

              {/* Our Company Card */}
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-slate-200">
                <h3 className="text-3xl md:text-4xl font-light text-slate-900 mb-6 tracking-wide">
                  Our <span className="font-serif italic">Company</span>
                </h3>

                <div className="text-slate-700 text-lg leading-relaxed font-light">
                  <p>
                    Blue Hues Ceylon is a company based in Sri Lanka, representing sapphire miners from diverse backgrounds. We have been involved in the gemstone industry for many years. Our specialization lies in natural and heat-treated sapphires, as well as semi-precious stones.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;