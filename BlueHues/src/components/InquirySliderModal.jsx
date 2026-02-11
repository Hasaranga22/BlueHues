import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

// Inquiry Slider Modal Component - Slides in from right to left
function InquirySliderModal({ isOpen, onClose, gemstoneName = '' }) {
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
        if (EMAILJS_CONFIG.publicKey) {
            emailjs.init(EMAILJS_CONFIG.publicKey);
        }
    }, []);

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

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const templateParams = {
                from_name: formData.name,
                from_email: formData.email,
                subject: formData.subject,
                message: formData.message,
                to_email: 'newhasaranga2002@gmail.com',
            };

            await emailjs.send(
                EMAILJS_CONFIG.serviceId,
                EMAILJS_CONFIG.templateId,
                templateParams,
                EMAILJS_CONFIG.publicKey
            );

            setSubmitStatus('success');
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });

            setTimeout(() => {
                setSubmitStatus(null);
                onClose();
            }, 3000);

        } catch (error) {
            console.error('Email sending failed:', error);
            setSubmitStatus('error');
            setTimeout(() => setSubmitStatus(null), 5000);
        } finally {
            setIsSubmitting(false);
        }
    };

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

    if (!isOpen) return null;

    return (
        <>
            {/* Backdrop */}
            <div 
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 animate-fadeIn"
                onClick={onClose}
            />
            
            {/* Slider Panel - Slides in from right */}
            <div className={`fixed top-4 right-4 bottom-4 w-full max-w-md bg-white shadow-2xl z-50 transform transition-transform duration-1000 ease-[cubic-bezier(0.4,0.0,0.2,1)] rounded-2xl overflow-hidden ${
                isOpen ? 'translate-x-0' : 'translate-x-full'
            }`}>
                {/* Header */}
                <div className="bg-white border-b border-slate-200 text-slate-900 p-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="text-2xl font-light tracking-wide">
                                Inquiry <span className="italic font-serif">Form</span>
                            </h2>
                            <p className="text-slate-600 mt-1 text-sm">
                                We'll respond within <span className="font-serif italic">two business days</span>
                            </p>
                        </div>
                        <button
                            onClick={onClose}
                            className="w-10 h-10 flex items-center justify-center bg-slate-100 hover:bg-slate-200 rounded-full transition-all duration-300 hover:scale-110"
                            aria-label="Close"
                        >
                            <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Form Content */}
                <div className="p-8 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 200px)' }}>
                    {/* Status Messages */}
                    {submitStatus === 'success' && (
                        <div className="border border-green-300 bg-green-50 rounded-lg p-4 text-green-700 text-sm mb-6 animate-slideDown">
                            Message sent successfully! We'll get back to you shortly.
                        </div>
                    )}

                    {submitStatus === 'error' && (
                        <div className="border border-red-300 bg-red-50 rounded-lg p-4 text-red-700 text-sm mb-6 animate-slideDown">
                            Something went wrong. Please try again.
                        </div>
                    )}

                    <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                        {/* Name */}
                        <div className="animate-slideUp" style={{ animationDelay: '0.1s' }}>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="Full Name *"
                                required
                                disabled={isSubmitting}
                                className="w-full px-4 py-3 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-500 focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-200 transition-all duration-300"
                            />
                        </div>

                        {/* Email */}
                        <div className="animate-slideUp" style={{ animationDelay: '0.2s' }}>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="Email Address *"
                                required
                                disabled={isSubmitting}
                                className="w-full px-4 py-3 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-500 focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-200 transition-all duration-300"
                            />
                        </div>

                        {/* Subject */}
                        <div className="animate-slideUp" style={{ animationDelay: '0.3s' }}>
                            <input
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleInputChange}
                                placeholder="Subject *"
                                required
                                disabled={isSubmitting}
                                className="w-full px-4 py-3 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-500 focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-200 transition-all duration-300"
                            />
                        </div>

                        {/* Message */}
                        <div className="animate-slideUp" style={{ animationDelay: '0.4s' }}>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                placeholder="Comment"
                                rows={4}
                                required
                                disabled={isSubmitting}
                                className="w-full px-4 py-3 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-500 focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-200 transition-all duration-300 resize-none"
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="animate-slideUp" style={{ animationDelay: '0.5s' }}>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full px-10 py-3 bg-[#9c8158] text-white uppercase tracking-widest text-sm rounded-lg hover:bg-[#8b724c] transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg"
                            >
                                {isSubmitting ? 'Sending...' : 'Send'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default InquirySliderModal;
