import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="max-w-[1200px] mx-auto">
                {/* TOP HALF */}
                <div className="footer-top">
                    {/* Left: Brand & Contact */}
                    <div>
                        <div className="footer-brand__logo flex items-center gap-2 mb-4">
                            <span className="font-black text-[24px] tracking-widest flex items-center leading-none">
                                <span className="text-[#C9A84C]">N</span>
                                <span className="text-white/30 px-[2px]">/</span>
                                <span className="text-white">X</span>
                                <span className="text-white/30 px-[2px]">/</span>
                                <span className="text-[#C9A84C]">J</span>
                            </span>
                        </div>
                        <p className="footer-brand__tagline">
                            Building the AI systems that turn founder decks into funded companies and agencies into ones that can actually deliver.
                        </p>
                        <div>
                            <div className="footer-brand__contact-label">Let's Talk</div>
                            <a href="mailto:judeolaboboye@gmail.com" className="footer-brand__email">
                                judeolaboboye@gmail.com
                            </a>
                        </div>
                    </div>

                    {/* Right: Subscribe */}
                    <div className="footer-subscribe">
                        <div className="text-[20px] font-bold text-white mb-6 leading-snug max-w-[400px]">
                            The raise doesn't start when you find investors.<br/>
                            <span className="text-[var(--color-accent)] italic font-serif text-[22px]">It starts when you are already in their inbox.</span>
                        </div>
                        <a href="https://cal.com/nirvanaxjude/startups-founder-inquiries" target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex">
                            <span className="btn-primary__circle">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                            </span>
                            <span className="btn-primary__text">START THE PROCESS</span>
                        </a>
                    </div>
                </div>

                {/* BOTTOM NAV */}
                <div className="footer-nav">
                    <div>
                        <div className="footer-nav__group-title">Services</div>
                        <Link to="/" className="footer-nav__link">Investor Outreach</Link>
                        <Link to="/" className="footer-nav__link">AI Operations</Link>
                        <Link to="/agencies" className="footer-nav__link">Agency Partnership</Link>
                    </div>
                    <div>
                        <div className="footer-nav__group-title">Labs</div>
                        <Link to="/lab" className="footer-nav__link">Intelligence Lab</Link>
                        <Link to="/lab" className="footer-nav__link">Voice Receptionist</Link>
                        <Link to="/lab" className="footer-nav__link">ROI Calculator</Link>
                        <Link to="/lab" className="footer-nav__link">Maps Lead Scraper</Link>
                    </div>
                    <div>
                        <div className="footer-nav__group-title">Company</div>
                        <Link to="/about" className="footer-nav__link">About Me</Link>
                        <Link to="/" className="footer-nav__link">Recent Projects</Link>
                        <a href="https://cal.com/nirvanaxjude/startups-founder-inquiries" target="_blank" rel="noopener noreferrer" className="footer-nav__link">Client Inquiries</a>
                    </div>
                    <div>
                        <div className="footer-nav__group-title">Connect</div>
                        <a href="https://x.com/judeolaboboye" target="_blank" rel="noopener noreferrer" className="footer-nav__link">Twitter/X</a>
                        <a href="https://instagram.com/nirvanaxjude" target="_blank" rel="noopener noreferrer" className="footer-nav__link">Instagram</a>
                        <a href="https://linkedin.com/in/nirvanaxjude" target="_blank" rel="noopener noreferrer" className="footer-nav__link">LinkedIn</a>
                    </div>
                </div>

                {/* VERY BOTTOM BAR */}
                <div className="footer-bottom">
                    <div className="footer-bottom__copy">
                        © 2026 NirvanaXJude. All rights reserved.<br/>
                        <span className="opacity-60">AI systems for founders raising capital and agencies that need to deliver it.</span>
                    </div>
                    <div className="footer-social">
                        <a href="https://x.com/judeolaboboye" target="_blank" rel="noopener noreferrer" className="footer-social__btn" aria-label="Twitter">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                        </a>
                        <a href="https://www.youtube.com/@nirvanaxjude" target="_blank" rel="noopener noreferrer" className="footer-social__btn" aria-label="YouTube">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
