import React, { useState, useRef, useEffect } from 'react';

const TESTIMONIALS = [
    {
        quote: "He stripped down our messy Zapier web and built a monolithic n8n engine. Our lead response time went from 3 hours to 15 seconds.",
        name: "E.J",
        role: "Solar & Roofing Agency",
        image: "https://images.pexels.com/photos/9875444/pexels-photo-9875444.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"
    },
    {
        quote: "Jude built it so cleanly that the client's team just... uses it. They treat the AI like a colleague, not a tool they have to babysit.",
        name: "R.S",
        role: "Financial Operations",
        image: "https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop"
    },
    {
        quote: "He doesn't just build the system, he understands how the marketing has to work around it. That's rare.",
        name: "T.M",
        role: "Coaching Consultant",
        image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop"
    },
    {
        quote: "Jude used Apify and LinkedIn scraping to build a lead machine that drafts personalised first lines that actually sound human. Our reply rate jumped from 2% to nearly 9%. He set up the entire automation in n8n and linked it to our CRM flawlessly.",
        name: "D.K",
        role: "Growth & Outbound Agency",
        image: "https://images.pexels.com/photos/19989615/pexels-photo-19989615.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"
    },
    {
        quote: "He built us a custom master snapshot that is actually bulletproof. He took over the entire DNS and SMTP setup and mapped everything to our corporate HubSpot CRM via Make.com. The data integrity is 100%. No more lost leads or broken triggers.",
        name: "M.O",
        role: "Digital Agency Owner",
        image: "https://images.pexels.com/photos/30004359/pexels-photo-30004359.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"
    },
    {
        quote: "Jude came in and didn't just sync our tools. He architected a complete Company Brain. The logic he built for state management is flawless. If a status changes in ClickUp, our entire Notion dashboard reflects it instantly. It's saved our PM at least 10 hours a week.",
        name: "A.R",
        role: "Operations & Systems Lead",
        image: "https://images.pexels.com/photos/31510092/pexels-photo-31510092.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"
    }
];

const CARDS_VISIBLE_DESKTOP = 3;

const TestimonialsSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [cardWidth, setCardWidth] = useState(316);
    const trackRef = useRef(null);
    const containerRef = useRef(null);

    const maxSlide = TESTIMONIALS.length - CARDS_VISIBLE_DESKTOP;

    useEffect(() => {
        const measure = () => {
            if (containerRef.current) {
                const containerW = containerRef.current.offsetWidth;
                const isMobile = window.innerWidth < 768;
                if (isMobile) {
                    setCardWidth(containerW);
                } else {
                    // 3 cards visible with 24px gap between them
                    setCardWidth(Math.floor((containerW - 48) / 3));
                }
            }
        };
        measure();
        window.addEventListener('resize', measure);
        return () => window.removeEventListener('resize', measure);
    }, []);

    const nextSlide = () => {
        const isMobile = window.innerWidth < 768;
        const max = isMobile ? TESTIMONIALS.length - 1 : maxSlide;
        setCurrentSlide(c => Math.min(c + 1, max));
    };

    const prevSlide = () => {
        setCurrentSlide(c => Math.max(c - 1, 0));
    };

    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const max = isMobile ? TESTIMONIALS.length - 1 : maxSlide;

    return (
        <section className="testimonials-section">
            <div className="max-w-[1200px] mx-auto">
                <div className="eyebrow">
                    <span className="eyebrow__dot"></span>
                    <span className="eyebrow__text text-[var(--color-text-on-dark-muted)]">VERIFIABLE PROOF</span>
                </div>
                
                <div className="testimonials-header">
                    <div>
                        <h2 className="text-white text-4xl md:text-5xl font-bold mb-4">What partners say.</h2>
                        <p className="text-[var(--color-text-on-dark-muted)] text-[15px]">Here's what they shared about working with the system.</p>
                    </div>
                    
                    <div className="testimonials-nav hidden md:flex">
                        <button
                            className="testimonials-nav__btn"
                            onClick={prevSlide}
                            disabled={currentSlide === 0}
                            style={{ opacity: currentSlide === 0 ? 0.4 : 1 }}
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M15 18l-6-6 6-6"/>
                            </svg>
                        </button>
                        <button
                            className="testimonials-nav__btn"
                            onClick={nextSlide}
                            disabled={currentSlide >= max}
                            style={{ opacity: currentSlide >= max ? 0.4 : 1 }}
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 18l6-6-6-6"/>
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="overflow-hidden" ref={containerRef}>
                    <div 
                        className="testimonials-track"
                        ref={trackRef}
                        style={{ transform: `translateX(-${currentSlide * (cardWidth + 24)}px)` }}
                    >
                        {TESTIMONIALS.map((t, idx) => (
                            <div
                                key={idx}
                                className="testimonial-card"
                                style={{ minWidth: `${cardWidth}px`, maxWidth: `${cardWidth}px` }}
                            >
                                <img src={t.image} alt={t.name} className="testimonial-card__image" />
                                <div className="testimonial-card__overlay">
                                    <p className="testimonial-card__quote">"{t.quote}"</p>
                                    <div className="testimonial-card__name">{t.name}</div>
                                    <div className="testimonial-card__role">{t.role}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mobile Nav */}
                <div className="testimonials-nav flex md:hidden justify-center mt-8">
                    <button
                        className="testimonials-nav__btn"
                        onClick={prevSlide}
                        disabled={currentSlide === 0}
                        style={{ opacity: currentSlide === 0 ? 0.4 : 1 }}
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M15 18l-6-6 6-6"/>
                        </svg>
                    </button>
                    <button
                        className="testimonials-nav__btn"
                        onClick={nextSlide}
                        disabled={currentSlide >= TESTIMONIALS.length - 1}
                        style={{ opacity: currentSlide >= TESTIMONIALS.length - 1 ? 0.4 : 1 }}
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M9 18l6-6-6-6"/>
                        </svg>
                    </button>
                </div>

                {/* Dot indicators */}
                <div className="flex justify-center gap-2 mt-6">
                    {Array.from({ length: maxSlide + 1 }).map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentSlide(i)}
                            className="hidden md:block w-2 h-2 rounded-full transition-all duration-300"
                            style={{
                                background: currentSlide === i ? 'var(--color-accent)' : 'rgba(255,255,255,0.2)',
                                width: currentSlide === i ? '20px' : '8px'
                            }}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default TestimonialsSlider;
