import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const GlobalNav = () => {
    const location = useLocation();
    const isAgency = location.pathname.includes('/agencies');
    const isLab = location.pathname.includes('/lab');
    
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [menuOpen]);

    const logoLink = isAgency ? '/agencies' : '/';
    
    let ctaLink = 'https://cal.com/nirvanaxjude/startups-founder-inquiries';
    let ctaText = 'SECURE FUNDING';
    
    if (isAgency) {
        ctaLink = 'https://cal.com/nirvanaxjude/45mins';
        ctaText = 'PARTNER WITH ME';
    } else if (isLab) {
        ctaText = 'REQUEST SYSTEM';
    }

    return (
        <>
            <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
                <div className="max-w-[1200px] mx-auto px-6 h-[72px] flex items-center justify-between">
                    
                    {/* Logo */}
                    <Link to={logoLink} className="flex items-center gap-2 group z-[1000]">
                        <span className="font-black text-[20px] tracking-widest flex items-center leading-none">
                            <span className="text-[#C9A84C]">N</span>
                            <span className="text-white/30 px-[2px]">/</span>
                            <span className="text-white">X</span>
                            <span className="text-white/30 px-[2px]">/</span>
                            <span className="text-[#C9A84C]">J</span>
                        </span>
                        <span className="hidden md:block text-[11px] font-mono text-white/50 uppercase tracking-[0.25em] ml-2 mt-0.5">NirvanaXJude</span>
                    </Link>

                    {/* Desktop Right */}
                    <div className="hidden md:flex items-center gap-6">
                        {isLab && (
                            <div className="flex gap-6 mr-4">
                                <Link to="/agencies" className="text-[13px] font-semibold tracking-wider uppercase text-[var(--color-text-on-dark-muted)] hover:text-white transition-colors">For Agencies</Link>
                                <Link to="/" className="text-[13px] font-semibold tracking-wider uppercase text-[var(--color-text-on-dark-muted)] hover:text-white transition-colors">Secure Funding</Link>
                            </div>
                        )}
                        <a 
                            href={ctaLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary"
                        >
                            <div className="btn-primary__arrow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
                            {ctaText}
                        </a>
                        <button 
                            className="text-white hover:text-[var(--color-accent)] transition-colors z-[1000]"
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label="Toggle menu"
                        >
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                {menuOpen ? (
                                    <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"/>
                                ) : (
                                    <path d="M4 8h16M4 16h16" strokeLinecap="round" strokeLinejoin="round"/>
                                )}
                            </svg>
                        </button>
                    </div>

                    {/* Mobile Right */}
                    <div className="md:hidden flex items-center z-[1000]">
                        <button 
                            className="text-white hover:text-[var(--color-accent)] transition-colors"
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label="Toggle menu"
                        >
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                {menuOpen ? (
                                    <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"/>
                                ) : (
                                    <path d="M4 8h16M4 16h16" strokeLinecap="round" strokeLinejoin="round"/>
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Full-screen Mobile/Overlay Menu */}
            <div className={`mobile-nav ${menuOpen ? 'open' : ''}`}>
                <div className="max-w-[1200px] mx-auto w-full">
                    <nav className="flex flex-col gap-2">
                        <Link to="/" className="mobile-nav__link" onClick={() => setMenuOpen(false)}>Startups & Founders</Link>
                        <Link to="/agencies" className="mobile-nav__link" onClick={() => setMenuOpen(false)}>Agency Partnership</Link>
                        <Link to="/lab" className="mobile-nav__link" onClick={() => setMenuOpen(false)}>Intelligence Lab</Link>
                        
                        <div className="mt-12 opacity-0 transform -translate-x-8 transition-all duration-300 delay-[440ms]" style={{ opacity: menuOpen ? 1 : 0, transform: menuOpen ? 'translateX(0)' : 'translateX(-30px)' }}>
                            <a 
                                href={ctaLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary"
                            >
                                <div className="btn-primary__arrow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
                                {ctaText}
                            </a>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default GlobalNav;
