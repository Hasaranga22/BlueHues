import React, { useEffect, useState } from 'react';

// Simple, premium header with navbar
function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { label: 'About', href: '#about' },
        { label: 'Sustainability', href: '#sustainability' },
        { label: 'Gemstones', href: '#gemstones' },
        { label: 'Contact', href: '#contact' },
    ];

    return (
        <header
            className={`fixed top-0 inset-x-0 z-30 transition-all duration-300 ${scrolled
                ? 'bg-white/95 backdrop-blur shadow-sm'
                : 'bg-white/70 backdrop-blur'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center justify-between py-4">
                    {/* Logo / Brand */}
                    <a href="#top" className="flex flex-col leading-none">
                        <span className="text-2xl tracking-[0.18em] uppercase text-slate-900 font-light">
                            Blue<span className="font-serif italic">Hues</span>
                        </span>
                        <span className="text-[11px] tracking-[0.26em] uppercase text-slate-500 mt-1">
                            Ceylon Gemstones
                        </span>
                    </a>

                    {/* Simple nav */}
                    <nav className="hidden md:flex items-center gap-8 text-sm tracking-[0.18em] uppercase">
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="text-slate-600 hover:text-slate-900 relative transition-colors duration-200"
                            >
                                <span>{item.label}</span>
                                <span className="absolute left-0 -bottom-1 h-px w-0 bg-slate-900 transition-all duration-200 group-hover:w-full" />
                            </a>
                        ))}
                    </nav>

                    {/* Simple outline button for primary action */}
                    <a
                        href="#contact"
                        className="hidden md:inline-flex items-center justify-center px-5 py-2 border border-slate-300 rounded-full text-xs tracking-[0.18em] uppercase text-slate-800 hover:bg-slate-900 hover:text-white transition-colors duration-200"
                    >
                        Enquire
                    </a>
                </div>
            </div>
        </header>
    );
}

export default Header;

