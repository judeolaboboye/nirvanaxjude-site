import React, { useEffect, useRef, useState } from 'react';
import SEO from '../components/SEO';
import { PRIMARY_SCHEMA, PAGE_META } from '../data/SEOData';


const AboutPage = () => {
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -80px 0px' });
        document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));

        // Mobile: light up the headshot when 100% in viewport
        const imgContainer = document.querySelector('.headshot-container');
        if (imgContainer) {
            const mobileObs = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (window.innerWidth < 1024) {
                        imgContainer.classList.toggle('headshot-in-view', entry.intersectionRatio >= 0.92);
                    }
                });
            }, { threshold: [0, 0.5, 0.75, 0.92, 1.0] });
            mobileObs.observe(imgContainer);
        }
    }, []);

    return (
        <main className="bg-dark text-white min-h-screen pt-[72px]">
            <SEO 
                {...PAGE_META.about} 
                schema={[PRIMARY_SCHEMA]} 
            />
            {/* HERO SPLIT LAYOUT */}

            <section className="pt-[88px] pb-24 px-6 relative">
                <div className="max-w-[1200px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        {/* LEFT — Text content */}
                        <div data-reveal>
                            <div className="eyebrow mb-8">
                                <span className="eyebrow__dot"></span>
                                <span className="eyebrow__text text-white">THE OPERATOR</span>
                            </div>
                            <h1 className="text-[clamp(40px,5.5vw,68px)] font-[800] leading-[1.1] mb-8">
                                I build systems that scale <span className="text-[var(--color-accent)] font-serif italic font-normal">human leverage.</span>
                            </h1>

                            <div className="text-[17px] leading-[1.8] text-[var(--color-text-on-dark-muted)] space-y-6 mb-10">
                                <p>
                                    I spent the last 4 years watching founders and agency owners drown in operations. They had capital, they had clients, but they didn't have leverage. They were building businesses that relied entirely on their own bandwidth.
                                </p>
                                <p>
                                    NirvanaXJude was built to solve that. I deploy AI infrastructure and automation systems that handle the heavy lifting of scaling. Whether that's finding and engaging active investors to secure funding, or deploying internal systems so your agency can double its client load without doubling headcount.
                                </p>
                                <p>
                                    It's not about replacing people. It's about giving them the leverage to focus on the things that actually move the needle.
                                </p>
                            </div>

                            <a href="https://cal.com/nirvanaxjude" target="_blank" rel="noopener noreferrer" className="btn-primary">
                                <div className="btn-primary__arrow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
                                CONNECT WITH JUDE
                            </a>
                        </div>

                        {/* RIGHT — Headshot with hover dark overlay */}
                        <div className="relative" data-reveal data-delay="1">
                            <div
                                className="headshot-container w-full rounded-[20px] overflow-hidden relative cursor-pointer"
                                style={{ aspectRatio: '3/4' }}
                            >
                                <img
                                    src="/jude-hover.jpg"
                                    alt="Jude Olaboboye NirvanaXJude"
                                    className="headshot-img w-full h-full object-cover object-top"
                                />
                                {/* Dark overlay — hidden on hover (desktop), hidden when in-view (mobile) */}
                                <div className="headshot-overlay" />
                            </div>
                            {/* Floating stats card */}
                            <div className="absolute bottom-[-20px] left-[-20px] hidden md:block"
                                style={{
                                    background: '#161410',
                                    border: '1px solid rgba(255,255,255,0.08)',
                                    borderRadius: '12px',
                                    padding: '16px 20px',
                                    minWidth: '200px'
                                }}
                            >
                                <div className="text-[10px] font-[700] tracking-[0.15em] text-[var(--color-accent)] uppercase mb-3">Track Record</div>
                                <div className="flex flex-col gap-2">
                                    <div className="flex justify-between gap-8 text-[14px]">
                                        <span className="text-white/60">Businesses</span>
                                        <span className="text-white font-[600]">70+</span>
                                    </div>
                                    <div className="flex justify-between gap-8 text-[14px]">
                                        <span className="text-white/60">Industries</span>
                                        <span className="text-white font-[600]">12+</span>
                                    </div>
                                    <div className="flex justify-between gap-8 text-[14px]">
                                        <span className="text-white/60">Experience</span>
                                        <span className="text-white font-[600]">4 Years</span>
                                    </div>
                                </div>
                            </div>
                            {/* Mobile stats card */}
                            <div className="mt-4 md:hidden"
                                style={{
                                    background: '#161410',
                                    border: '1px solid rgba(255,255,255,0.08)',
                                    borderRadius: '12px',
                                    padding: '16px 20px',
                                }}
                            >
                                <div className="text-[10px] font-[700] tracking-[0.15em] text-[var(--color-accent)] uppercase mb-3">Track Record</div>
                                <div className="flex gap-8">
                                    <div className="text-center">
                                        <div className="text-white font-[700] text-[18px]">70+</div>
                                        <div className="text-white/60 text-[12px]">Businesses</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-white font-[700] text-[18px]">12+</div>
                                        <div className="text-white/60 text-[12px]">Industries</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-white font-[700] text-[18px]">4 Yrs</div>
                                        <div className="text-white/60 text-[12px]">Experience</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* STATS SECTION (Light) */}
            <section className="bg-[var(--color-bg-light)] text-[var(--color-text-on-light)] px-6 py-[var(--section-pad-light)] mt-24 border-y border-[var(--color-border-light)]">
                <div className="max-w-[1200px] mx-auto">
                    <div className="eyebrow" data-reveal>
                        <span className="eyebrow__dot"></span>
                        <span className="eyebrow__text">THE TRACK RECORD</span>
                    </div>
                    <h2 className="text-[clamp(36px,4.5vw,40px)] font-[700] leading-[1.1] max-w-[620px]" data-reveal data-delay="1">
                        We work with founders, agencies, and startups who are building the future of their industry.
                    </h2>
                    
                    <div className="stats-grid" data-reveal data-delay="2">
                        <div className="stat-card">
                            <svg className="stat-card__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                            <div className="stat-card__number">70+</div>
                            <div className="stat-card__desc">Businesses influenced & Agencies partnered with across industries</div>
                        </div>
                        <div className="stat-card">
                            <svg className="stat-card__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                            <div className="stat-card__number">12+</div>
                            <div className="stat-card__desc">Startups helped raise capital</div>
                        </div>
                        <div className="stat-card">
                            <svg className="stat-card__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                            <div className="stat-card__number">4 Yrs</div>
                            <div className="stat-card__desc">Supporting startups and agencies</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* MAKE BETTER DECISIONS CTA (Dark) */}
            <section className="make-decisions-section">
                <div className="max-w-[1200px] mx-auto">
                    <div className="make-decisions-card" data-reveal>
                        <div>
                            <div className="eyebrow">
                                <span className="eyebrow__dot"></span>
                                <span className="eyebrow__text text-white">WORK WITH N/X/J</span>
                            </div>
                            <h2 className="make-decisions__headline">Make better decisions with clarity and confidence.</h2>
                            <p className="make-decisions__body">
                                Founders and agencies come to NirvanaXJude to turn complexity into systems that work predictably, without burning out their team or their runway.
                            </p>
                            <a href="https://cal.com/nirvanaxjude" target="_blank" rel="noopener noreferrer" className="btn-primary">
                                <div className="btn-primary__arrow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
                                CONNECT WITH JUDE
                            </a>
                        </div>
                        <div>
                            <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800" alt="Meeting" className="make-decisions__image" />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default AboutPage;
