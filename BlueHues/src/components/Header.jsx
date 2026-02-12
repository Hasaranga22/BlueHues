import React, { useEffect, useState, useCallback } from 'react';

function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    // ── Track scroll position ──────────────────────────────
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // ── Lock body scroll when mobile menu is open ──────────
    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [open]);

    // ── Close menu when viewport crosses the md breakpoint ─
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768 && open) {
                setOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [open]);

    // ── Close menu on Escape key ───────────────────────────
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape' && open) setOpen(false);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [open]);

    const handleNavClick = useCallback(() => setOpen(false), []);

    const navItems = [
        { label: 'About', href: '#about' },
        { label: 'Sustainability', href: '#sustainability' },
        { label: 'Gemstones', href: '#gemstones' },
        { label: 'Contact', href: '#contact' },
    ];

    return (
        <>
            {/* ═══════════ HEADER BAR ═══════════ */}
            <header
                className={`
                    fixed top-0 inset-x-0 z-50
                    transition-all duration-300
                    ${scrolled
                        ? 'bg-white/95 backdrop-blur-md shadow-sm'
                        : 'bg-white/60 backdrop-blur-md'
                    }
                `}
            >
                <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">

                        {/* ── Brand / Logo ── */}
                        <a
                            href="#top"
                            className="flex-shrink-0 flex items-center gap-2"
                        >
                            <img
                                src="/images/BlueHuesLogo.png"
                                alt="BlueHues"
                                className="h-7 xs:h-8 sm:h-9 md:h-10 lg:h-11 w-auto object-contain"
                            />
                        </a>

                        {/* ── Desktop Navigation ── */}
                        <nav className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8">
                            {navItems.map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    className="
                                        text-xs lg:text-sm
                                        tracking-[0.15em] lg:tracking-[0.18em]
                                        uppercase whitespace-nowrap
                                        text-slate-600 hover:text-slate-900
                                        transition-colors duration-200
                                        relative
                                        after:absolute after:bottom-0 after:left-0
                                        after:w-0 after:h-[1.5px] after:bg-slate-900
                                        after:transition-all after:duration-300
                                        hover:after:w-full
                                    "
                                >
                                    {item.label}
                                </a>
                            ))}
                        </nav>

                        {/* ── Right‑side actions ── */}
                        <div className="flex items-center gap-2 sm:gap-3">
                            {/* Desktop CTA */}
                            <a
                                href="#contact"
                                className="
                                    hidden md:inline-flex items-center justify-center
                                    px-3 lg:px-5 py-2
                                    border border-slate-300 rounded-full
                                    text-[11px] lg:text-xs
                                    tracking-[0.15em] lg:tracking-[0.18em]
                                    uppercase whitespace-nowrap
                                    text-slate-800
                                    hover:bg-slate-900 hover:text-white hover:border-slate-900
                                    transition-all duration-200
                                "
                            >
                                Inquire
                            </a>

                            {/* Mobile hamburger / close */}
                            <button
                                aria-label={open ? 'Close menu' : 'Open menu'}
                                aria-expanded={open}
                                onClick={() => setOpen((prev) => !prev)}
                                className="
                                    md:hidden p-2 -mr-1
                                    rounded-lg
                                    text-slate-700 hover:bg-slate-100
                                    active:bg-slate-200
                                    transition-colors duration-150
                                "
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    viewBox="0 0 24 24"
                                >
                                    {open ? (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    ) : (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* ═══════════ MOBILE MENU OVERLAY (backdrop) ═══════════ */}
            <div
                className={`
                    md:hidden fixed inset-0 z-40
                    bg-black/40 backdrop-blur-sm
                    transition-opacity duration-300
                    ${open
                        ? 'opacity-100'
                        : 'opacity-0 pointer-events-none'
                    }
                `}
                onClick={handleNavClick}
                aria-hidden="true"
            />

            {/* ═══════════ MOBILE MENU PANEL ═══════════ */}
            <div
                className={`
                    md:hidden fixed z-50
                    top-14 sm:top-16 left-0 right-0
                    max-h-[calc(100dvh-3.5rem)] sm:max-h-[calc(100dvh-4rem)]
                    overflow-y-auto overscroll-contain
                    bg-white rounded-b-2xl shadow-2xl
                    transform transition-all duration-300 ease-out
                    ${open
                        ? 'translate-y-0 opacity-100'
                        : '-translate-y-4 opacity-0 pointer-events-none'
                    }
                `}
            >
                <div className="px-5 py-6 sm:px-6 sm:py-8">
                    <nav className="flex flex-col gap-1">
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                onClick={handleNavClick}
                                className="
                                    block py-3 px-3
                                    text-base sm:text-lg
                                    text-slate-800 font-medium
                                    rounded-lg
                                    hover:bg-slate-50 active:bg-slate-100
                                    transition-colors duration-150
                                "
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>

                    <hr className="my-4 border-slate-200" />

                    <a
                        href="#contact"
                        onClick={handleNavClick}
                        className="
                            flex w-full justify-center items-center
                            px-4 py-3.5
                            bg-[#9c8158] text-white
                            uppercase tracking-widest
                            text-sm font-medium
                            rounded-xl
                            hover:bg-[#8b724c] active:bg-[#7a6342]
                            transition-colors duration-200
                        "
                    >
                        Enquire
                    </a>
                </div>
            </div>

            {/* ═══════════ SPACER (prevents content hiding behind fixed header) ═══════════ */}
            <div className="h-14 sm:h-16 md:h-20" aria-hidden="true" />
        </>
    );
}

export default Header;
