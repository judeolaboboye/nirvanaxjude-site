import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import TestimonialsSlider from '../components/TestimonialsSlider';

const agencyFeatures = [
    { 
        title: "No new hires",
        desc: "I slot in behind your agency brand. You scope the project, I build it in n8n or Make. Your client never knows I exist.", 
        img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500",
    },
    { 
        title: "Proven systems only",
        desc: "Every build I deploy has a measurable outcome: lower cost per acquisition, faster lead response, or fewer churned clients.", 
        img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500",
    },
    { 
        title: "Built to actually get used",
        desc: "I write the SOPs alongside the build, so your client's team knows how to run the system from day one.", 
        img: "https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?w=500",
    }
];

const AgenciesPage = () => {

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
    }, []);

    return (
        <main className="bg-dark text-white pt-[72px]">
            
            {/* HERO SECTION (Dark) */}
            <section className="relative min-h-[90vh] flex items-end pb-24 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1800" alt="Agency Team" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0" style={{ background: 'var(--hero-overlay)' }}></div>
                
                <div className="max-w-[1200px] mx-auto px-6 w-full relative z-10 grid grid-cols-1 md:grid-cols-2">
                    <div className="max-w-[520px]" data-reveal>
                        <div className="eyebrow">
                            <span className="eyebrow__dot"></span>
                            <span className="eyebrow__text text-white">PARTNER WITH THE ARCHITECT</span>
                        </div>
                        <h1 className="text-[clamp(52px,6.5vw,68px)] font-[800] leading-[1.05] tracking-tight mb-8">
                            The technical partner your agency can sell,<br/>
                            <span className="text-[var(--color-accent)]">without hiring a technical team.</span>
                        </h1>
                        <p className="text-[17px] leading-[1.65] text-[var(--color-text-on-dark-muted)] mb-4">
                            Your clients are asking for AI. Most agencies can't deliver it. I'm the build layer that changes that.
                        </p>
                        <p className="text-[17px] leading-[1.65] text-[var(--color-text-on-dark-muted)] mb-10">
                            You handle the client relationship. I build what you promised.
                        </p>
                        
                        <div className="flex flex-wrap items-center gap-6 mb-16 md:mb-0">
                            <a href="https://cal.com/nirvanaxjude/45mins" target="_blank" rel="noopener noreferrer" className="btn-primary">
                                <div className="btn-primary__arrow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
                                DISCUSS PARTNERSHIP
                            </a>
                        </div>
                    </div>

                    <div className="hidden md:flex flex-col justify-end items-end pb-8" data-reveal data-delay="2">
                        <div className="bg-[var(--color-bg-dark-card)] border border-[var(--color-border-dark)] rounded-2xl p-6 shadow-2xl">
                            <div className="text-[11px] font-[600] text-[var(--color-accent)] uppercase tracking-widest mb-2">White-Label Partners</div>
                            <div className="text-[32px] font-[800] text-white leading-none mb-1">12+</div>
                            <div className="text-[13px] text-[var(--color-text-on-dark-muted)]">active agency deployments</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHAT YOU ACTUALLY GET (Light) */}
            <section className="bg-[var(--color-bg-light)] text-[var(--color-text-on-light)] px-6 py-[var(--section-pad-light)]">
                <div className="max-w-[1200px] mx-auto">
                    <div className="flex flex-col items-center text-center mb-16" data-reveal>
                        <div className="eyebrow">
                            <span className="eyebrow__dot"></span>
                            <span className="eyebrow__text">HOW THE PARTNERSHIP WORKS</span>
                        </div>
                        <h2 className="text-[clamp(36px,4.5vw,52px)] font-[700]">What you actually get.</h2>
                    </div>

                    <div className="services-layout">
                        <div className="services-left" data-reveal data-delay="1">
                            <h2>Strategic services for your clients.</h2>
                            <p>We help agency owners deliver what their clients are asking for without hiring anyone new.</p>
                            <a href="#testimonials" className="btn-primary">
                                <div className="btn-primary__arrow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
                                VIEW PROOF
                            </a>
                        </div>

                        <div className="services-cards" data-reveal data-delay="2">
                            {agencyFeatures.map((feat, i) => (
                                <div key={i} className="service-card" style={{ background: 'var(--color-bg-light-card)', borderColor: 'var(--color-border-light)' }}>
                                    <img src={feat.img} alt={feat.title} className="service-card__image" />
                                    <div className="service-card__body">
                                        <h3 className="service-card__title" style={{ color: 'var(--color-text-on-light)' }}>{feat.title}</h3>
                                        <p className="service-card__desc" style={{ color: 'var(--color-text-on-light-muted)' }}>{feat.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* TESTIMONIALS (Dark) */}
            <div id="testimonials">
                <TestimonialsSlider />
            </div>

            {/* LAB CTA (Dark) */}
            <section className="px-6 py-[var(--section-pad-dark)] flex flex-col items-center text-center relative overflow-hidden">
                <div className="absolute inset-0" style={{ background: 'var(--gradient-accent-glow)' }}></div>
                <div className="relative z-10 max-w-[600px] w-full" data-reveal>
                    <div className="flex justify-center mb-6">
                        <svg className="w-12 h-12 text-[var(--color-accent)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                            <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                        </svg>
                    </div>
                    <h2 className="text-[clamp(36px,4.5vw,48px)] font-[800] text-white mb-6">Talk is cheap.</h2>
                    <p className="text-[18px] text-[var(--color-text-on-dark-muted)] leading-[1.65] mb-10">
                        I've built 8 live demos you can test right now from an AI voice booking agent to a CRM triage engine. See how the systems actually behave before you commit to anything.
                    </p>
                    <div className="flex justify-center">
                        <Link to="/lab" className="btn-primary">
                            <div className="btn-primary__arrow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
                            ENTER THE INTELLIGENCE LAB
                        </Link>
                    </div>
                </div>
            </section>

        </main>
    );
};

export default AgenciesPage;
