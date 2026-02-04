import React from 'react';

// Simple, elegant footer used across the site
function Footer() {
    return (
        <footer className="bg-slate-950 text-slate-200">
            <div className="max-w-7xl mx-auto px-6 py-12 md:py-14">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 border-b border-slate-800 pb-8">
                    {/* Brand block */}
                    <div>
                        <div className="text-2xl tracking-[0.18em] uppercase text-white font-light">
                            Blue<span className="font-serif italic">Hues</span>
                        </div>
                        <div className="text-[11px] tracking-[0.26em] uppercase text-slate-400 mt-1">
                            Ceylon Gemstones
                        </div>
                        <p className="mt-5 max-w-md text-sm leading-relaxed text-slate-400">
                            Sustainable gemstone mining and selling from the heart of Sri Lanka, preserving
                            heritage while protecting nature.
                        </p>
                    </div>

                    {/* Quick links */}
                    <div className="flex flex-col md:flex-row gap-8 text-sm">
                        <div>
                            <h4 className="text-xs tracking-[0.18em] uppercase text-slate-400 mb-3">
                                Navigate
                            </h4>
                            <ul className="space-y-2">
                                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                                <li><a href="#sustainability" className="hover:text-white transition-colors">Sustainability</a></li>
                                <li><a href="#gemstones" className="hover:text-white transition-colors">Gemstones</a></li>
                                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-xs tracking-[0.18em] uppercase text-slate-400 mb-3">
                                Contact
                            </h4>
                            <p className="text-slate-400 text-sm">
                                Sri Lanka
                                <br />
                                info@bluehuесeylon.com
                                <br />
                                +94 XX XXX XXXX
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-slate-500">
                    <p>© 2026 Blue Hues Ceylon. All rights reserved.</p>
                    <p className="tracking-[0.16em] uppercase">
                        Ethical • Transparent • Sustainable
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

