import React, { useEffect, useRef, useState } from 'react';
import { gemstonesList } from '../components/Gemstone ';

// Gemstone Modal Component - Displays gemstone details in a pop-up
function GemstoneModal({ gemstone, isOpen, onClose }) {
    useEffect(() => {
        // Prevent body scroll when modal is open
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen || !gemstone) return null;

    return (
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
            onClick={onClose}
        >
            {/* Modal content */}
            <div 
                className="relative bg-white rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden animate-scaleIn"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-white/90 hover:bg-white rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                    aria-label="Close modal"
                >
                    <svg className="w-6 h-6 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div className="grid md:grid-cols-2 gap-0">
                    {/* Image side */}
                    <div className="relative bg-gradient-to-br from-slate-100 to-slate-200 aspect-square md:aspect-auto md:h-full min-h-[300px]">
                        <img
                            src={`/images/BlueHuesGemsCollection/${gemstone.image}`}
                            alt={`${gemstone.name} natural Sri Lankan gemstone sustainable mining ${gemstone.color}`}
                            className="w-full h-full object-cover"
                        />
                        {/* Gradient overlay for premium look */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent" />
                    </div>

                    {/* Content side */}
                    <div className="p-8 md:p-10 overflow-y-auto max-h-[90vh] md:max-h-full">
                        <div className="space-y-6">
                            {/* Title */}
                            <h2 className="text-4xl md:text-5xl font-light text-slate-900 tracking-wide">
                                <span className="font-serif italic">{gemstone.name}</span>
                            </h2>

                            {/* Divider */}
                            <div className="w-16 h-px bg-slate-300" />

                            {/* Description */}
                            <p className="text-lg text-slate-700 leading-relaxed font-light">
                                {gemstone.description}
                            </p>

                            {/* Properties */}
                            <div className="space-y-4 pt-4 border-t border-slate-200">
                                <div className="flex items-start gap-4">
                                    <span className="font-medium text-slate-900 min-w-[100px]">Color:</span>
                                    <span className="text-slate-700">{gemstone.color}</span>
                                </div>
                                <div className="flex items-start gap-4">
                                    <span className="font-medium text-slate-900 min-w-[100px]">Origin:</span>
                                    <span className="text-slate-700">{gemstone.origin}</span>
                                </div>
                                <div className="flex items-start gap-4">
                                    <span className="font-medium text-slate-900 min-w-[100px]">Treatment:</span>
                                    <span className="text-slate-700">{gemstone.treatment}</span>
                                </div>
                            </div>

                            {/* CTA Button */}
                            <div className="pt-6">
                                <a
                                    href="#contact"
                                    onClick={onClose}
                                    className="inline-flex px-8 py-3 bg-slate-900 text-white rounded-full text-sm tracking-[0.18em] uppercase font-light hover:bg-slate-800 transition-colors duration-300"
                                >
                                    Inquire About This Gemstone
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Single gemstone card component
// Displays one gemstone with image and information
function GemstoneCard({ gemstone, index, onCardClick }) {
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

    return (
        <div
            ref={cardRef}
            onClick={() => onCardClick(gemstone)}
            className={`bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200 hover:shadow-2xl transition-all duration-500 group cursor-pointer ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
            style={{ transitionDelay: `${index * 50}ms` }}
        >
            {/* Gemstone image */}
            <div className="relative overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 aspect-square">
                <img
                    src={`/images/BlueHuesGemsCollection/${gemstone.image}`}
                    alt={`${gemstone.name} natural Sri Lankan gemstone sustainable mining ${gemstone.color}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/15 transition-all duration-500"></div>
                {/* Click indicator */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full text-sm tracking-[0.18em] uppercase text-slate-900 font-light">
                        View Details
                    </div>
                </div>
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
    const [selectedGemstone, setSelectedGemstone] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
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

    // Handle card click
    const handleCardClick = (gemstone) => {
        setSelectedGemstone(gemstone);
        setIsModalOpen(true);
    };

    // Handle modal close
    const handleCloseModal = () => {
        setIsModalOpen(false);
        setTimeout(() => setSelectedGemstone(null), 300); // Delay to allow animation
    };

    // Handle ESC key to close modal
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape' && isModalOpen) {
                handleCloseModal();
            }
        };
        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, [isModalOpen]);

    return (
        <>
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
                            <GemstoneCard 
                                key={gemstone.id} 
                                gemstone={gemstone} 
                                index={index}
                                onCardClick={handleCardClick}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Gemstone Modal */}
            <GemstoneModal 
                gemstone={selectedGemstone} 
                isOpen={isModalOpen} 
                onClose={handleCloseModal}
            />
        </>
    );
}

export default OurGemstones;