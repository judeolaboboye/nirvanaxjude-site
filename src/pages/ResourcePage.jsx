import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import { PRIMARY_SCHEMA } from '../data/SEOData';

const ResourcePage = ({ meta, heroTitle, positionZero, content }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -80px 0px' });
        document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));
    }, [content]);

    return (
        <main className="bg-dark text-white pt-[72px]">
            <SEO 
                {...meta} 
                schema={[PRIMARY_SCHEMA]} 
                ghostAnswers={positionZero ? [positionZero] : []}
            />
            
            {/* HERO / HEADER SECTION */}
            <section className="px-6 pt-24 pb-16 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-[var(--color-accent)] opacity-[0.03] rounded-full blur-[120px] pointer-events-none"></div>
                
                <div className="max-w-[800px] mx-auto relative z-10" data-reveal>
                    <div className="eyebrow mb-8">
                        <span className="eyebrow__dot"></span>
                        <span className="eyebrow__text text-white">RESOURCES / ANSWER KIT</span>
                    </div>
                    
                    <h1 className="text-[clamp(40px,5vw,64px)] font-[800] leading-[1.1] mb-12 tracking-tight">
                        {heroTitle}
                    </h1>
                </div>
            </section>


            {/* CONTENT SECTION (Light) */}
            <section className="bg-[var(--color-bg-light)] text-[var(--color-text-on-light)] px-6 py-24">
                <div className="max-w-[800px] mx-auto content-rich-text" data-reveal data-delay="1">
                    {content}
                </div>
            </section>

            {/* CTA SECTION (Dark) */}
            <section className="px-6 py-24 border-t border-[var(--color-border-dark)]">
                <div className="max-w-[1000px] mx-auto bg-[var(--color-bg-dark-card)] border border-[var(--color-border-dark)] rounded-[2rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl" data-reveal>
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-accent)]/5 to-transparent pointer-events-none"></div>
                    <h2 className="text-[clamp(32px,4vw,48px)] font-[800] mb-8 relative z-10 leading-[1.1]">
                        Ready to build your system?
                    </h2>
                    <div className="relative z-10 flex justify-center">
                        <a href="https://cal.com/nirvanaxjude/startups-founder-inquiries" target="_blank" rel="noopener noreferrer" className="btn-primary">
                            <div className="btn-primary__arrow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
                            SCHEDULE STRATEGY SESSION
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ResourcePage;
