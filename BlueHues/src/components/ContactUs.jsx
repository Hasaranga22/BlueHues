import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

// Contact Us section - Get in touch form and information
function ContactUs() {
    const [isVisible, setIsVisible] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'
    const sectionRef = useRef(null);
    const formRef = useRef(null);

    // Form state
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    // EmailJS Configuration
    // To set up EmailJS:
    // 1. Go to https://www.emailjs.com/ and create a free account
    // 2. Create an email service (Gmail, Outlook, etc.)
    // 3. Create an email template with variables: {{from_name}}, {{from_email}}, {{subject}}, {{message}}
    // 4. Get your Service ID, Template ID, and Public Key from the dashboard
    // 5. Replace the values below with your actual IDs

    const EMAILJS_CONFIG = {
        serviceId: 'service_15tn1l2',      // Replace with your EmailJS Service ID
        templateId: 'service_15tn1l2',    // Replace with your EmailJS Template ID
        publicKey: 'cyUpel7fXrPzmjgf-'       // Replace with your EmailJS Public Key
    };

    // Initialize EmailJS
    useEffect(() => {
        if (EMAILJS_CONFIG.publicKey && EMAILJS_CONFIG.publicKey !== 'YOUR_PUBLIC_KEY') {
            emailjs.init(EMAILJS_CONFIG.publicKey);
        }
    }, []);

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
            // These variable names must match your EmailJS template variables
            const templateParams = {
                from_name: formData.name,
                from_email: formData.email,
                subject: formData.subject,
                message: formData.message,
                to_email: 'newhasaranga2002@gmail.com', // Recipient email (set in EmailJS template)
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

            // Clear success message after 5 seconds
            setTimeout(() => {
                setSubmitStatus(null);
            }, 5000);

        } catch (error) {
            console.error('Email sending failed:', error);
            setSubmitStatus('error');

            // Clear error message after 5 seconds
            setTimeout(() => {
                setSubmitStatus(null);
            }, 5000);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section
            ref={sectionRef}
            id="contact"
            className="py-24 px-6 bg-white"
        >
            <div className="max-w-5xl mx-auto">
                {/* Section title */}
                <div
                    className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}
                >
                    <h2 className="text-5xl font-light text-slate-900 tracking-wide">
                        Inquiry <span className="italic font-serif">Form</span>
                    </h2>
                    <div className="w-20 h-px bg-slate-400 mx-auto my-6"></div>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        If you have any questions or would like to arrange an appointment,
                        please complete the form below and we will respond within two business days.
                    </p>
                </div>

                {/* Contact Form */}
                <div
                    className={`transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                        }`}
                >
                    <div className="bg-white border border-slate-200 rounded-2xl shadow-xl p-10">
                        <h3 className="text-2xl font-light text-slate-800 mb-8">
                            Contact Form
                        </h3>

                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                            {/* Status Messages */}
                            {submitStatus === 'success' && (
                                <div className="border border-green-300 bg-green-50 rounded-lg p-4 text-green-700 text-sm">
                                    Message sent successfully. We’ll get back to you shortly.
                                </div>
                            )}

                            {submitStatus === 'error' && (
                                <div className="border border-red-300 bg-red-50 rounded-lg p-4 text-red-700 text-sm">
                                    Something went wrong. Please try again.
                                </div>
                            )}

                            {/* Name */}
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="Full Name *"
                                required
                                disabled={isSubmitting}
                                className="w-full px-4 py-4 border border-slate-300 rounded-md text-slate-800 focus:outline-none focus:border-slate-600 transition"
                            />

                            {/* Email */}
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="Email Address *"
                                required
                                disabled={isSubmitting}
                                className="w-full px-4 py-4 border border-slate-300 rounded-md text-slate-800 focus:outline-none focus:border-slate-600 transition"
                            />

                            {/* Subject */}
                            <input
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleInputChange}
                                placeholder="Subject *"
                                required
                                disabled={isSubmitting}
                                className="w-full px-4 py-4 border border-slate-300 rounded-md text-slate-800 focus:outline-none focus:border-slate-600 transition"
                            />

                            {/* Message */}
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                placeholder="Comment"
                                rows={5}
                                required
                                disabled={isSubmitting}
                                className="w-full px-4 py-4 border border-slate-300 rounded-md text-slate-800 focus:outline-none focus:border-slate-600 transition resize-none"
                            />

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="px-10 py-4 bg-[#9c8158] text-white uppercase tracking-widest text-sm rounded-md hover:bg-[#8b724c] transition disabled:opacity-50"
                            >
                                {isSubmitting ? 'Sending...' : 'Send'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );

}

export default ContactUs;