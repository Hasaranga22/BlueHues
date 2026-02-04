import React, { useEffect, useRef, useState } from 'react';

// Contact Us section - Get in touch form and information
function ContactUs() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    // Form state
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

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
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Form submission logic will be added here
        console.log('Form submitted:', formData);
        alert('Thank you for your message! We will contact you soon.');

        // Reset form
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    };

    return (
        <section ref={sectionRef} id="contact" className="py-24 px-6 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
            <div className="max-w-7xl mx-auto">
                {/* Section title */}
                <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h2 className="text-5xl md:text-6xl font-light text-white mb-4 tracking-wide">
                        Contact <span className="font-serif italic">Us</span>
                    </h2>
                    <div className="w-24 h-px bg-slate-300 mx-auto mb-6"></div>
                    <p className="text-lg text-slate-100 font-light max-w-2xl mx-auto">
                        Get in touch with us for inquiries about our gemstones or sustainable mining practices
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                            <h3 className="text-2xl font-light text-white mb-6 tracking-wide">Send us a message</h3>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Name input */}
                                <div>
                                    <label htmlFor="name" className="block text-sm font-light text-slate-100 mb-2">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-slate-300 focus:outline-none focus:border-slate-200 transition-colors"
                                        placeholder="John Doe"
                                    />
                                </div>

                                {/* Email input */}
                                <div>
                                    <label htmlFor="email" className="block text-sm font-light text-slate-100 mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-slate-300 focus:outline-none focus:border-slate-200 transition-colors"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                {/* Subject input */}
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-light text-slate-100 mb-2">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-slate-300 focus:outline-none focus:border-slate-200 transition-colors"
                                        placeholder="Inquiry about gemstones"
                                    />
                                </div>

                                {/* Message textarea */}
                                <div>
                                    <label htmlFor="message" className="block text-sm font-light text-slate-100 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                        rows={5}
                                        className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-slate-300 focus:outline-none focus:border-slate-200 transition-colors resize-none"
                                        placeholder="Tell us about your inquiry..."
                                    ></textarea>
                                </div>

                                {/* Submit button */}
                                <button
                                    type="submit"
                                    className="w-full py-4 bg-white text-slate-900 rounded-lg font-light tracking-wide hover:bg-slate-100 transition-colors duration-300"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                        <div className="space-y-8">
                            {/* Company info */}
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                                <h3 className="text-2xl font-light text-white mb-6 tracking-wide">Blue Hues Ceylon</h3>
                                <p className="text-slate-100 font-light leading-relaxed mb-6">
                                    We are dedicated to sustainable gemstone mining practices in Sri Lanka, preserving our heritage while protecting the environment.
                                </p>

                                <div className="space-y-4 text-slate-100">
                                    {/* Location */}
                                    <div className="flex items-start gap-3">
                                        <svg className="w-6 h-6 text-slate-200 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <div>
                                            <p className="font-light">Sri Lanka</p>
                                        </div>
                                    </div>

                                    {/* Email placeholder */}
                                    <div className="flex items-start gap-3">
                                        <svg className="w-6 h-6 text-slate-200 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        <div>
                                            <p className="font-light">info@bluehuесeylon.com</p>
                                        </div>
                                    </div>

                                    {/* Phone placeholder */}
                                    <div className="flex items-start gap-3">
                                        <svg className="w-6 h-6 text-slate-200 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        <div>
                                            <p className="font-light">+94 XX XXX XXXX</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Business hours */}
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                                <h3 className="text-xl font-light text-white mb-4 tracking-wide">Business Hours</h3>
                                <div className="space-y-2 text-slate-100 font-light">
                                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                                    <p>Saturday: 10:00 AM - 4:00 PM</p>
                                    <p>Sunday: Closed</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default ContactUs;