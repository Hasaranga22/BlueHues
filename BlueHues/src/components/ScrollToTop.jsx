import React, { useEffect, useState } from 'react';

function ScrollToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 300);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button
            aria-label="Scroll to top"
            onClick={handleClick}
            className={`fixed z-50 right-5 bottom-6 md:right-8 md:bottom-8 w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-transform ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6 pointer-events-none'}`}
            style={{ background: '#1f2937' }}
        >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
        </button>
    );
}

export default ScrollToTop;
