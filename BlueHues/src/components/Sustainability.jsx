import React, { useEffect, useRef, useState } from 'react';

// Sustainability section - Environmental commitment
// Follows the image-text layout from reference design
function Sustainability() {
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
        <section ref={sectionRef} id="sustainability" className="py-24 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Section title */}
                <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h2 className="text-5xl md:text-6xl font-light text-slate-900 mb-4 tracking-wide">
                        <span className="font-serif italic">Sustainability</span>
                    </h2>
                    <div className="w-24 h-px bg-slate-300 mx-auto"></div>
                </div>

                {/* Main content grid - Text left, Image right (following reference layout) */}
                <div
                    className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 delay-300 ${isVisible
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-10'
                        }`}
                >
                    {/* Text content side - Left */}
                    <div className="space-y-10">
                        {/* Main objective statement with mixed typography (matching reference style) */}
                        <div className="text-2xl md:text-3xl leading-relaxed text-slate-800 font-light">
                            <p>
                                Our Objective is to <span className="font-normal">ENSURE</span> that artisana mining PRACTICES are{' '}
                                <span className="font-serif italic text-slate-500">Safeguarded</span>, preserved,{' '}
                                <span className="font-serif italic text-slate-500">Promoted</span>,{' '}
                                <span className="font-serif italic text-slate-400">Validated</span>, and{' '}
                                <span className="font-serif italic text-slate-500">Granted</span> access to{' '}
                                <span className="font-serif italic">formalization</span> and INTERNATIONAL{' '}
                                <span className="font-serif italic text-slate-500">markets</span> under{' '}
                                <span className="font-serif italic text-slate-400">equitable CONDITIONS</span>.
                            </p>
                        </div>

                        {/* Thin divider to echo reference design */}
                        <div className="w-16 h-px bg-slate-300" />

                        {/* Supporting text */}
                        <div className="space-y-6 text-slate-700 text-lg leading-relaxed font-light">
                            <p>
                                By adopting sustainable mining practices, initiating land restoration projects, and enhancing regulatory frameworks,
                                Sri Lanka can preserve its gemstone heritage while protecting its environment. It is crucial to shift towards
                                eco-friendly mining methods to safeguard the island&apos;s natural beauty and ensure a sustainable future for both
                                the gemstone industry and the ecosystem.
                            </p>

                            <p>
                                Additionally, enabling local communities to manage mining activities through cooperative models can greatly reduce
                                environmental impacts. Involving local residents in the decision-making process and guaranteeing that they benefit
                                from these resources will boost their commitment to sustainable management.
                            </p>
                        </div>
                    </div>

                    {/* Image side - Right with refined neutral area */}
                    <div className="relative">
                        <div className="rounded-xl overflow-hidden h-[600px] shadow-2xl bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
                            <div className="relative">
                                {/* Optional image placeholder - replace when real asset is ready */}
                                <img
                                    src={'/images/BlueHuesSustainability.jpg'}
                                    alt="Sustainable artisanal gemstone mining practices in Sri Lanka natural landscape"
                                    className="w-full h-[600px] object-cover opacity-90"
                                />
                                {/* Subtle overlay for premium look */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-slate-900/10" />
                            </div>
                        </div>

                        {/* Soft circular accent echoing gemstone shape */}
                        <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-slate-100 rounded-full -z-10" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Sustainability;