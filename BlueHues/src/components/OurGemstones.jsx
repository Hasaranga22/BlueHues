import React, { useEffect, useRef, useState } from 'react';
import { gemstonesList } from '../components/Gemstone ';

// Single gemstone card component
// Displays one gemstone with image and information
function GemstoneCard({ gemstone, index }) {
    const [isVisible, setIsVisible] = useState(false);
    const cardRef = useRef(null);

    // Animate card when it comes into view
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => {
            if (cardRef.current) {
                observer.unobserve(cardRef.current);
            }
        };
    }, []);

    // Stagger animation delay for each card
    const delayClass = `delay-${Math.min(index * 100, 1000)}`;

    return (
        <div
            ref={cardRef}
            className={`bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200 hover:shadow-2xl transition-all duration-500 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
            style={{ transitionDelay: `${index * 50}ms` }}
        >
            {/* Gemstone image */}
            <div className="relative overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 aspect-square">
                {/* Optional image placeholder - replace when real asset is ready */}
                {gemstone.image ? (
                    <img
                        src={gemstone.image}
                        alt={`${gemstone.name} natural Sri Lankan gemstone sustainable mining ${gemstone.color}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-center px-4">
                        <span className="font-serif italic text-slate-500 text-xs tracking-[0.18em] uppercase">
                            {gemstone.name}
                        </span>
                    </div>
                )}
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/15 transition-all duration-500"></div>
            </div>

            {/* Gemstone details */}
            <div className="p-6">
                <h3 className="text-xl font-light text-slate-900 mb-2 tracking-wide">
                    {gemstone.name}
                </h3>

                <p className="text-sm text-slate-700 mb-4 leading-relaxed font-light">
                    {gemstone.description}
                </p>

                {/* Gemstone properties */}
                <div className="space-y-2 text-xs text-slate-600">
                    <div className="flex items-center gap-2">
                        <span className="font-medium text-slate-800">Color:</span>
                        <span>{gemstone.color}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="font-medium text-slate-800">Origin:</span>
                        <span>{gemstone.origin}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="font-medium text-slate-800">Treatment:</span>
                        <span>{gemstone.treatment}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Main gemstones gallery component
function OurGemstones() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    // Detect when section is visible
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
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
        <section ref={sectionRef} id="gemstones" className="py-24 px-6 bg-slate-50">
            <div className="max-w-7xl mx-auto">
                {/* Section title */}
                <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h2 className="text-5xl md:text-6xl font-light text-slate-900 mb-4 tracking-wide">
                        Our <span className="font-serif italic">Gemstones</span>
                    </h2>
                    <div className="w-24 h-px bg-slate-300 mx-auto mb-6"></div>
                    <p className="text-lg text-slate-600 font-light max-w-2xl mx-auto">
                        Discover our collection of natural and ethically sourced gemstones from Sri Lanka
                    </p>
                </div>

                {/* Gemstones grid - 4 columns on desktop, responsive */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {gemstonesList.map((gemstone, index) => (
                        <GemstoneCard key={gemstone.id} gemstone={gemstone} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default OurGemstones;