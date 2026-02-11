import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

// Contact Slider Modal Component - Modern slide-in contact form
function ContactSliderModal({ isOpen, onClose, gemstoneName = '' }) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const formRef = useRef(null);

    // Form state
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: gemstoneName ? `Inquiry about ${gemstoneName}` : '',
        message: gemstoneName ? `I am interested in learning more about the ${gemstoneName}.` : ''
    });

    // EmailJS Configuration (same as ContactUs component)
    const EMAILJS_CONFIG = {
        serviceId: 'service_15tn1l2',
        templateId: 'service_15tn1l2',
        publicKey: 'cyUpel7fXrPzmjgf-'
    };

    // Initialize EmailJS
    useEffect(() => {
        if (EMAILJS_CONFIG.publicKey && EMAILJS_CONFIG.publicKey !== 'YOUR_PUBLIC_KEY') {
            emailjs.init(EMAILJS_CONFIG.publicKey);
        }
    }, []);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear status message when user starts typing
        if (submitStatus) {
            setSubmitStatus(null);
        }
    };

    // Handle form submission with EmailJS
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            // Check if EmailJS is configured
            if (EMAILJS_CONFIG.serviceId === 'YOUR_SERVICE_ID' ||
                EMAILJS_CONFIG.templateId === 'YOUR_TEMPLATE_ID' ||
                EMAILJS_CONFIG.publicKey === 'YOUR_PUBLIC_KEY') {
                throw new Error('EmailJS is not configured. Please set up your EmailJS credentials.');
            }

            // Prepare template parameters
            const templateParams = {
                from_name: formData.name,
                from_email: formData.email,
                subject: formData.subject,
                message: formData.message,
                to_email: 'newhasaranga2002@gmail.com',
            };

            // Send email using EmailJS
            await emailjs.send(
                EMAILJS_CONFIG.serviceId,
                EMAILJS_CONFIG.templateId,
                templateParams,
                EMAILJS_CONFIG.publicKey
            );

            // Success - show success message
            setSubmitStatus('success');

            // Reset form
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });

            // Close modal after success
            setTimeout(() => {
                onClose();
                setSubmitStatus(null);
            }, 2000);

        } catch (error) {
            console.error('Email sending failed:', error);
            setSubmitStatus('error');

            // Clear error message after 3 seconds
            setTimeout(() => {
                setSubmitStatus(null);
            }, 3000);
        } finally {
            setIsSubmitting(false);
        }
    };

    // Handle ESC key to close modal
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape' && isOpen) {
                onClose();
            }
        };
        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Backdrop with blur effect */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-md animate-fadeIn"
                onClick={onClose}
            />

            {/* Modal content - slide in from right */}
            <div className="relative w-full max-w-lg mx-4 animate-slideInRight">
                {/* Glassmorphism modal */}
                <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
                    {/* Header */}
                    <div className="relative bg-gradient-to-r from-slate-900 to-slate-800 px-8 py-6">
                        {/* Close button */}
                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center bg-white/20 hover:bg-white/30 rounded-full transition-all duration-300 hover:scale-110"
                            aria-label="Close modal"
                        >
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <div className="text-white">
                            <h3 className="text-2xl font-light tracking-wide mb-2">
                                Contact <span className="font-serif italic">Us</span>
                            </h3>
                            <p className="text-sm text-white/80">
                                Get in touch about our exquisite gemstones
                            </p>
                        </div>
                    </div>

                    {/* Form content */}
                    <div className="p-8">
                        {submitStatus === 'success' && (
                            <div className="mb-6 border border-green-300 bg-green-50 rounded-xl p-4 text-green-700 text-sm animate-slideInDown">
                                <div className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    Message sent successfully! We'll get back to you soon.
                                </div>
                            </div>
                        )}

                        {submitStatus === 'error' && (
                            <div className="mb-6 border border-red-300 bg-red-50 rounded-xl p-4 text-red-700 text-sm animate-slideInDown">
                                <div className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                    Something went wrong. Please try again.
                                </div>
                            </div>
                        )}

                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                            {/* Name */}
                            <div>
                                <label className="block text-xs font-medium text-slate-700 mb-2 tracking-[0.18em] uppercase">
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder="Enter your full name"
                                    required
                                    disabled={isSubmitting}
                                    className="w-full px-4 py-3 border border-slate-300 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/20 focus:border-slate-600 transition-all duration-300 disabled:opacity-50"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-xs font-medium text-slate-700 mb-2 tracking-[0.18em] uppercase">
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="your@email.com"
                                    required
                                    disabled={isSubmitting}
                                    className="w-full px-4 py-3 border border-slate-300 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/20 focus:border-slate-600 transition-all duration-300 disabled:opacity-50"
                                />
                            </div>

                            {/* Subject */}
                            <div>
                                <label className="block text-xs font-medium text-slate-700 mb-2 tracking-[0.18em] uppercase">
                                    Subject *
                                </label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    placeholder="What is this regarding?"
                                    required
                                    disabled={isSubmitting}
                                    className="w-full px-4 py-3 border border-slate-300 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/20 focus:border-slate-600 transition-all duration-300 disabled:opacity-50"
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label className="block text-xs font-medium text-slate-700 mb-2 tracking-[0.18em] uppercase">
                                    Message *
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    placeholder="Tell us more about your inquiry..."
                                    rows={4}
                                    required
                                    disabled={isSubmitting}
                                    className="w-full px-4 py-3 border border-slate-300 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/20 focus:border-slate-600 transition-all duration-300 resize-none disabled:opacity-50"
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full px-6 py-3 bg-gradient-to-r from-slate-900 to-slate-800 text-white uppercase tracking-[0.18em] text-sm font-light rounded-xl hover:from-slate-800 hover:to-slate-700 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                            >
                                {isSubmitting ? (
                                    <span className="flex items-center justify-center gap-2">
                                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                        </svg>
                                        Sending...
                                    </span>
                                ) : (
                                    'Send Message'
                                )}
                            </button>
                        </form>

                        {/* Contact info */}
                        <div className="mt-8 pt-6 border-t border-slate-200">
                            <div className="text-center text-sm text-slate-600">
                                <p className="mb-2">Blue Hues Ceylon</p>
                                <p className="text-xs text-slate-500">
                                    East Tower, World Trade Center, Colombo 00100
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactSliderModal;
