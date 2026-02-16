import React, { useEffect, useRef, useState } from 'react';
import { gemstonesList } from '../components/Gemstone ';
import InquirySliderModal from './InquirySliderModal';

// Gemstone Modal Component - Displays gemstone details in a pop-up
function GemstoneModal({ gemstone, isOpen, onClose }) {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);

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

    // Function to get video based on gemstone
    const getGemstoneVideo = (gemstone) => {
        return `/videos/${gemstone.video}`;
    };

    // Function to format measurement with superscript
    const formatMeasurement = (measurement) => {
        const parts = measurement.match(/([0-9.]+)(.+)/);
        if (parts) {
            return (
                <span>
                    {parts[1]}<sup>{parts[2]}</sup>
                </span>
            );
        }
        return measurement;
    };

    const handleContactClick = () => {
        setIsContactModalOpen(true);
    };

    const handleContactModalClose = () => {
        setIsContactModalOpen(false);
    };

    return (
        <>
            <div
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
                onClick={onClose}
            >
                {/* Modal content */}
                <div
                    className="relative bg-white rounded-2xl shadow-2xl max-w-5xl w-full max-h-[95vh] overflow-hidden animate-scaleIn"
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

                    {/* Video Section - Premium Luxury Layout */}
                    <div className="relative h-96 md:h-[28rem] flex items-center justify-center overflow-hidden 
    bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">

                        {/* Soft Animated Glow Background */}
                        <div
                            className="absolute w-[500px] h-[500px] rounded-full blur-3xl opacity-60 animate-pulse"
                            style={{
                                background: `radial-gradient(circle, ${gemstone.name.toLowerCase() === "ruby"
                                        ? "rgba(239,68,68,0.35), rgba(190,18,60,0.25), transparent"
                                        : gemstone.name.toLowerCase() === "sapphire"
                                            ? "rgba(59,130,246,0.35), rgba(37,99,235,0.25), transparent"
                                            : gemstone.name.toLowerCase() === "emerald"
                                                ? "rgba(34,197,94,0.35), rgba(16,185,129,0.25), transparent"
                                                : "rgba(168,85,247,0.35), rgba(99,102,241,0.25), transparent"
                                    })`
                            }}
                        />

                        {/* Video */}
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="h-full w-auto object-contain relative z-10"
                            style={{ maxHeight: '100%' }}
                        >
                            <source src={getGemstoneVideo(gemstone)} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>

                        {/* Premium Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t 
        from-black/40 via-transparent to-transparent pointer-events-none z-20" />

                        {/* Gemstone Name Overlay */}
                        <div className="absolute bottom-6 left-6 text-white z-30 pointer-events-none">
                            <h2 className="text-3xl md:text-4xl font-light tracking-wide">
                                <span className="font-serif italic drop-shadow-lg">
                                    {gemstone.name}
                                </span>
                            </h2>
                        </div>
                    </div>


                    {/* Content Section - 2 Columns */}
                    <div className="p-8 md:p-10">
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Left Column - Measurement */}
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-sm font-medium text-slate-600 mb-3 tracking-[0.18em] uppercase">
                                        Measurement
                                    </h3>
                                    <div className="text-3xl md:text-4xl font-light text-slate-900">
                                        {formatMeasurement(gemstone.measurement)}
                                    </div>
                                </div>

                                <div className="pt-6 border-t border-slate-200 w-70">
                                    <div className="text-sm text-slate-600 space-y-2">
                                        <p>{gemstone.description}</p>
                                        
                                        {/* Contact Information */}
                                        <div className="mt-4 p-4 bg-slate-50 rounded-lg">
                                            <h4 className="text-sm font-medium text-slate-900 mb-2">Contact for Inquiries</h4>
                                            <div className="space-y-2">
                                                <div className="flex items-center gap-2">
                                                    <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2zm0 14a1 1 0 102 2H7a1 1 0 102-1v10a1 1 0 001 1h8a1 1 0 001-1z" />
                                                    </svg>
                                                    <span className="text-slate-700">+94 72 855 3880</span>
                                                </div>
                                                
                                                {/* Mobile Click-to-Call Button */}
                                                <a 
                                                    href="tel:+94728553880" 
                                                    className="md:hidden inline-flex items-center justify-center w-full px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors duration-300"
                                                >
                                                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2zm0 14a1 1 0 102 2H7a1 1 0 102-1v10a1 1 0 001 1h8a1 1 0 001-1z" />
                                                    </svg>
                                                    Call Now
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Column - Properties */}
                                <div className="space-y-6">
                                    <div className="space-y-4">
                                        <div className="flex items-start gap-4">
                                            <span className="font-medium text-slate-900 min-w-[100px]">Origin:</span>
                                            <span className="text-slate-700">{gemstone.origin}</span>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <span className="font-medium text-slate-900 min-w-[100px]">Color:</span>
                                            <span className="text-slate-700">{gemstone.color}</span>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <span className="font-medium text-slate-900 min-w-[100px]">Treatment:</span>
                                            <span className="text-slate-700">{gemstone.treatment}</span>
                                        </div>
                                    <div className="flex items-start gap-4">
                                        <span className="font-medium text-slate-900 min-w-[100px]">Origin:</span>
                                        <span className="text-slate-700">{gemstone.origin}</span>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <span className="font-medium text-slate-900 min-w-[100px]">Color:</span>
                                        <span className="text-slate-700">{gemstone.color}</span>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <span className="font-medium text-slate-900 min-w-[100px]">Treatment:</span>
                                        <span className="text-slate-700">{gemstone.treatment}</span>
                                    </div>
                                </div>

                                {/* CTA Button */}
                                <div className="pt-6">
                                    <button
                                        onClick={handleContactClick}
                                        className="inline-flex px-8 py-3 bg-slate-900 text-white rounded-full text-sm tracking-[0.18em] uppercase font-light hover:bg-slate-800 transition-colors duration-300"
                                    >
                                        Inquire About This Gemstone
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Inquiry Modal */}
            <InquirySliderModal
                isOpen={isContactModalOpen}
                onClose={handleContactModalClose}
                gemstoneName={gemstone.name}
            />
        </>
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