import React, { useEffect, useState } from 'react';

function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
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
        <header className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur shadow-sm' : 'bg-white/60 backdrop-blur'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Brand */}
                    <a href="#top" className="flex items-center gap-3">
                        <img src="/images/BlueHuesLogo.png" alt="BlueHues" className="h-9 md:h-11 object-contain" />
                    </a>

                    {/* Desktop nav */}
                    <nav className="hidden md:flex items-center gap-8 text-sm tracking-[0.18em] uppercase">
                        {navItems.map((item) => (
                            <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-slate-600 hover:text-slate-900 transition-colors duration-200">
                                {item.label}
                            </a>
                        ))}
                    </nav>

                    {/* Actions & Mobile menu button */}
                    <div className="flex items-center gap-3">
                        <a href="#contact" className="hidden md:inline-flex items-center justify-center px-4 py-2 border border-slate-300 rounded-full text-xs tracking-[0.18em] uppercase text-slate-800 hover:bg-slate-900 hover:text-white transition-colors duration-200">Enquire</a>

                        <button
                            aria-label="Toggle menu"
                            onClick={() => setOpen((s) => !s)}
                            className="md:hidden p-2 rounded-md text-slate-700 hover:bg-slate-100"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {open ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu overlay */}
            <div className={`md:hidden fixed inset-0 z-30 transition-opacity ${open ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <div className={`absolute inset-0 bg-black/40`} onClick={() => setOpen(false)} />
                <div className={`absolute top-16 left-0 right-0 bg-white p-6 rounded-b-2xl shadow-xl transform transition-all ${open ? 'translate-y-0' : '-translate-y-6'} `}>
                    <nav className="flex flex-col gap-4">
                        {navItems.map((item) => (
                            <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-lg text-slate-800 font-medium">
                                {item.label}
                            </a>
                        ))}
                    </nav>

                    <div className="mt-6">
                        <a href="#contact" onClick={() => setOpen(false)} className="inline-flex w-full justify-center px-4 py-3 bg-[#9c8158] text-white uppercase tracking-widest text-sm rounded-md hover:bg-[#8b724c] transition">Enquire</a>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;

