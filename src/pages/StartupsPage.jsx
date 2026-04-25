import React, { useEffect, useState } from 'react';

// ─── FAQ Data ────────────────────────────────────────────────────────────────
const faqItems = [
    {
        q: 'How is this different from hiring a full-time fundraising consultant?',
        a: 'A consultant gives you advice. We build and run the actual outreach system. The targeting, the emails, the follow-ups, the objection handling. We hand you meetings. You stay focused on your company. We run the raise.'
    },
    {
        q: 'How long before I start seeing investor meetings on my calendar?',
        a: "Most clients see their first replies within 7 to 14 days of launch. Qualified meetings typically start booking in weeks 3 to 6 depending on your round size and sector. We don't do slow burns. The system is built for speed."
    },
    {
        q: 'Do I need to have a deck or product ready before starting?',
        a: "You need a clear thesis and a deck. We handle everything from that point. We don't build your pitch, but we put it in front of the right people, at the right time, in the right way."
    },
    {
        q: 'What kinds of startups do you work with?',
        a: 'We work with pre-seed through Series B founders raising between $500K and $20M+. Industry-agnostic. If there are investors who fund your space, we can reach them. We\'ve worked across SaaS, cleantech, fintech, AI infrastructure, and more.'
    },
    {
        q: 'What does the agency partnership actually look like?',
        a: 'You scope the project with your client. We build the AI system using n8n, Make, using Claude or custom stacks, under your brand. Your client never knows we exist. We deliver the build with full SOPs so their team can actually run it. You keep the client relationship and the margin.'
    },
    {
        q: 'How do I know the outreach won\'t damage my brand with investors?',
        a: "Every message is personalised to the specific investor's thesis and recent activity. We don't spray. We research, we personalise, and we only reach out to investors who are actually in a position to write a check at your stage. The quality of the outreach protects your reputation. It doesn't risk it."
    }
];

// ─── FAQ Section Component ────────────────────────────────────────────────────
const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

    return (
        <section className="bg-[#F4F1EB] px-6 py-[var(--section-pad-light)] border-t border-[var(--color-border-light)]">
            <div className="max-w-[1200px] mx-auto">
                <div className="flex flex-col items-center text-center mb-14" data-reveal>
                    <div className="eyebrow">
                        <span className="eyebrow__dot"></span>
                        <span className="eyebrow__text">FAQ'S</span>
                    </div>
                    <h2 className="text-[clamp(32px,4.5vw,48px)] font-[700] text-[var(--color-text-on-light)] mb-4">Frequently asked questions</h2>
                    <p className="text-[15px] text-[var(--color-text-on-light-muted)] max-w-[520px] leading-[1.6]">
                        Clear answers for founders and agencies. Working with us is a significant decision. Here's what people usually ask first.
                    </p>
                </div>

                <div className="flex flex-col gap-[10px] max-w-[860px] mx-auto" data-reveal data-delay="1">
                    {faqItems.map((item, i) => (
                        <div
                            key={i}
                            className="faq-item"
                            style={{ background: openIndex === i ? '#FFFFFF' : '#EFEFEB' }}
                            onClick={() => toggle(i)}
                        >
                            <div className="faq-item__header">
                                <span className="faq-item__question">{item.q}</span>
                                <span className="faq-item__icon" style={{ transform: openIndex === i ? 'rotate(45deg)' : 'rotate(0deg)' }}>+</span>
                            </div>
                            <div className="faq-item__body" style={{ maxHeight: openIndex === i ? '400px' : '0px' }}>
                                <p className="faq-item__answer">{item.a}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// ─── Browser Frame Wrapper ──────────────────────────────────────────────────
const BrowserFrame = ({ src, alt, url = 'app.clay.com/workspace', children }) => (
    <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl w-full">
        <div className="bg-[#1E1E24] px-4 py-3 flex items-center gap-3 border-b border-white/5">
            <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/40" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/40" />
                <div className="w-3 h-3 rounded-full bg-green-500/40" />
            </div>
            <div className="flex-grow bg-[#0D0D12] rounded-md px-3 py-1 text-xs text-white/20 font-mono truncate">{url}</div>
        </div>
        {src ? <img src={src} alt={alt} className="w-full object-cover" /> : children}
    </div>
);

// ─── Tool Logos ─────────────────────────────────────────────────────────────
const toolLogos = [
    { name: 'Notion', img: '/made-for-notion-black.svg' },
    { name: 'HubSpot', img: 'https://legal.hubspot.com/hubfs/guidelines_the-sprocket.svg' },
    { name: 'Make', img: 'https://www.make.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fun655fb9wln6%2F2hZUy7ZGjBeOg7ImkCamBE%2Fc826fbbe5f6b05086c7de48da203f10b%2FMake_gif_01_Loop-2.gif&w=128&q=75' },
    { name: 'n8n', img: 'https://n8n.io/brandguidelines/logo-white.svg' },
    { name: 'Clay', img: '/images/clay-logo.png' },
    { name: 'Apify', img: 'https://apify.com/img/apify-logo/wordmark.svg' },
    { name: 'Crunchbase', img: 'https://images.crunchbase.com/image/upload/v1613675726/clientapp/logo_crunchbase_primary.svg' },
    { name: 'Instantly', img: 'https://global.discourse-cdn.com/standard17/uploads/instantly1/original/1X/a21fce8f4ce31278ba02aabefc69ea470f1469e3.png' },
    { name: 'Cal.com', img: 'https://cal.com/logo.svg' },
    { name: 'Vapi AI', img: 'https://vapi.ai/logo.png' },
    { name: 'Twilio', img: 'https://www.twilio.com/content/dam/twilio-com/global/en/brand/logos/Twilio-logo-red.svg' },
    { name: 'Replicate', img: 'https://replicate.com/static/logo.svg' },
    { name: 'Tavily', img: 'https://tavily.com/logo.png' },
    { name: 'Claude/Anthropic', img: 'https://upload.wikimedia.org/wikipedia/commons/4/47/Anthropic_logo.svg' }
];

// ─── Problems/Solutions Data ──────────────────────────────────────────────────
const confrontations = [
    { problem: 'Time: 6 months gone', solution: 'Speed: 90 days to 47 meetings', probDetail: 'Average time wasted on manual investor searching and pitching on VC sites.', solDetail: 'When outreach is built as a system, the timeline compresses dramatically.' },
    { problem: 'Targeting: Pitching investors who spent their fund', solution: 'Targeting: Only active capital', probDetail: 'Most investor lists online are 18 months stale.', solDetail: 'We map recent fund closes, deployment pace, and thesis alignment before a single email goes out.' },
    { problem: 'Outreach: Spray-and-pray DMs', solution: 'Personalisation: Thesis-matched outreach', probDetail: '"Hi First Name, I have an exciting opportunity..." Investors see 40 of these a day.', solDetail: 'Each message is shaped around what that specific investor has publicly said they care about.' },
    { problem: 'Thesis mismatch: Wrong investors entirely', solution: 'Objection handling: AI-adapted replies', probDetail: 'A consumer fintech investor is not going to fund your B2B SaaS.', solDetail: 'AI agents analyse every response in real time to adjust follow-ups.' },
    { problem: 'Bandwidth: Fundraising = full-time job', solution: 'Bandwidth: You step in only for term sheets', probDetail: 'While you are chasing investors, your product stalls.', solDetail: 'Every stage before that runs without you. We run the raise.' },
    { problem: 'Feedback: Ghosted, no signal', solution: 'Feedback loop: Full data on what\'s landing', probDetail: 'You do not know if it is your deck, market, or valuation.', solDetail: 'Reply data, open rates, objection patterns—everything is tracked.' }
];

const investorProtocol = [
    {
        phase: 'STEP 01', title: 'Target List',
        desc: 'We do not pull generic investor directories. We research recent fund raises, thesis fits, and open capital to hand build a list of 500 investors who are actually in a position to write a check.',
        link: 'app.clay.com/workspace/investors',
        screenshot: 'https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,quality=80,format=auto,onerror=redirect/uploads/asset/file/5529e0bd-84dc-409d-8db0-d7bd0c0116e5/10bf645c-4b0c-4cfe-a8a0-2526b70da9d6_2378x610.jpg'
    },
    {
        phase: 'STEP 02', title: 'Warm Up',
        desc: 'Before we send a single cold email, we build your presence on LinkedIn and in content so investors already recognise your name when the outreach lands.',
        link: 'linkedin.com/in/yourprofile',
        screenshot: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=900&h=500&dpr=1'
    },
    {
        phase: 'STEP 03', title: 'Sniper Execution',
        desc: 'Multi channel rollout. We manage 10+ sending domains so emails actually land in the inbox, not spam. You reach 10x more investors without looking like a blast.',
        link: 'analytics.instantly.ai/campaigns',
        screenshot: 'https://storage.ghost.io/c/33/68/33684c00-f023-423d-a7f0-5786c0043411/content/images/2026/01/ANALYTICS-23.png'
    },
    {
        phase: 'STEP 04', title: 'Objection Handling',
        desc: 'Every reply gets read. Pushback on traction? Valuation concerns? The follow up sequence adjusts automatically to address what the investor actually said.',
        link: 'app.instantly.ai/unibox',
        screenshot: 'https://storage.ghost.io/c/33/68/33684c00-f023-423d-a7f0-5786c0043411/content/images/2026/03/UNIBOX-61.png'
    },
    {
        phase: 'STEP 05', title: 'The Handshake',
        desc: 'Meetings booked directly onto your calendar. No back and forth. You step in only when an investor is ready to have a real conversation about terms.',
        link: 'cal.com/nirvanaxjude/investor-strategy-call',
        screenshot: 'https://nirvanaxjude.com/images/cal-dashboard-v2.png'
    },
    {
        phase: 'STEP 06', title: 'Iteration',
        desc: 'What worked gets amplified. We track which angles, subject lines, and sequences drove the most interest and double down on those.',
        link: 'analytics.nirvanaxjude.com/iterations',
        screenshot: 'https://lh7-us.googleusercontent.com/docsz/AD_4nXfBZ9LUFPmZh1bNLxrFlVh3UYFpQZr8D69D6KByor0O6N1ad-DRdwVa0MoAKD7DknOCDioQf4urbGB-I71PkjTXzswWevUSv1o2cFrzWh698og0rscRI67eS5_gRGsETrYXuiP5Z94P8LoBQ-5dLzTz6qsE?key=SxIHSqW6bQDOPMJSVI5-8A'
    }
];

const StartupsPage = () => {
    const [activeStepIndex, setActiveStepIndex] = useState(0);

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

        const steps = document.querySelectorAll('.process-step');
        const stepObs = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    setActiveStepIndex(Number(entry.target.dataset.index));
                } else {
                    entry.target.classList.remove('active');
                }
            });
        }, { threshold: 0.6, rootMargin: '-10% 0px -40% 0px' });
        steps.forEach(s => stepObs.observe(s));

        // Case Studies scroll stacking interaction
        const handleScroll = () => {
            const cards = document.querySelectorAll('.case-study-card');
            if (window.innerWidth < 768) return; // Only on desktop
            
            cards.forEach((card, index) => {
                if (index === cards.length - 1) {
                    card.style.transform = `scale(1)`;
                    card.style.opacity = 1;
                    return;
                }
                const nextCard = cards[index + 1];
                if (!nextCard) return;
                
                const nextCardTop = nextCard.getBoundingClientRect().top;
                const cardStickyTop = 80 + (index * 20); // matching CSS tops
                
                const overlap = cardStickyTop - nextCardTop;
                const maxOverlap = card.offsetHeight * 0.3;
                const progress = Math.min(Math.max(overlap / maxOverlap, 0), 1);
                
                const scale = 1 - (progress * 0.03);
                const opacity = 1 - (progress * 0.08);
                
                card.style.transform = `scale(${scale})`;
                card.style.opacity = opacity;
            });
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // initial state

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <main className="bg-dark text-white pt-[72px]">
            {/* HERO SECTION (Dark) */}
            <section className="relative min-h-[90vh] flex items-end pb-24 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1800" alt="Founders" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0" style={{ background: 'var(--hero-overlay)' }}></div>
                
                <div className="max-w-[1200px] mx-auto px-6 w-full relative z-10 grid grid-cols-1 md:grid-cols-2">
                    <div className="max-w-[520px]" data-reveal>
                        <div className="eyebrow">
                            <span className="eyebrow__dot"></span>
                            <span className="eyebrow__text text-white">CAPITAL INFRASTRUCTURE FOR FOUNDERS</span>
                        </div>
                        <h1 className="text-[clamp(52px,6.5vw,80px)] font-[800] leading-[1.05] tracking-tight mb-8">
                            Get in front of the right investors,<br/>
                            <span className="text-[var(--color-accent)] font-serif italic font-normal text-[clamp(40px,5vw,64px)]">before they close.</span>
                        </h1>
                        <p className="text-[17px] leading-[1.65] text-[var(--color-text-on-dark-muted)] mb-4">
                            We map the right investors, land in their inbox, and book the meeting so you show up to calls, not cold outreach.
                        </p>
                        <p className="text-[14px] text-[var(--color-text-on-dark-muted)] opacity-80 mb-10">
                            Targeted research. Precision outreach. Meetings on your calendar.
                        </p>
                        <a href="https://cal.com/nirvanaxjude/startups-founder-inquiries" target="_blank" rel="noopener noreferrer" className="btn-primary mb-16 md:mb-0">
                            <div className="btn-primary__arrow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
                            SECURE FUNDING INFRASTRUCTURE
                        </a>
                        

                    </div>

                    <div className="hidden md:flex flex-col justify-end items-end pb-8" data-reveal data-delay="2">
                        <div className="flex gap-4 opacity-40 mix-blend-screen flex-wrap justify-end max-w-[300px]">
                            {toolLogos.slice(0,7).map(t => (
                                <img key={t.name} src={t.img} alt={t.name} className="h-4 object-contain grayscale" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* STATS SECTION (Light) */}
            <section className="bg-[var(--color-bg-light)] text-[var(--color-text-on-light)] px-6 py-[var(--section-pad-light)]">
                <div className="max-w-[1200px] mx-auto">
                    <div className="eyebrow" data-reveal>
                        <span className="eyebrow__dot"></span>
                        <span className="eyebrow__text">ABOUT N/X/J</span>
                    </div>
                    <h2 className="text-[clamp(36px,4.5vw,40px)] font-[700] leading-[1.1] max-w-[620px]" data-reveal data-delay="1">
                        We work with founders, agencies, and startups who are building the future of their industry and need the infrastructure to get there.
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

            {/* TOOL MARQUEE (Dark) */}
            <section className="marquee-section">
                <div className="marquee-eyebrow eyebrow">
                    <span className="eyebrow__dot"></span>
                    <span className="eyebrow__text text-white">BUILT ON THE TOOLS THAT ACTUALLY WORK</span>
                </div>
                <div className="marquee-track">
                    <div className="marquee-inner">
                        {toolLogos.concat(toolLogos).map((t, i) => (
                            <img key={i} src={t.img} alt={t.name} className="marquee-logo" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                        ))}
                    </div>
                </div>
            </section>

            {/* REALITY CHECK (Light) */}
            <section className="bg-[var(--color-bg-light)] text-[var(--color-text-on-light)] px-6 py-[var(--section-pad-light)]">
                <div className="max-w-[1000px] mx-auto flex flex-col items-center text-center">
                    <div className="eyebrow" data-reveal>
                        <span className="eyebrow__dot"></span>
                        <span className="eyebrow__text">THE REALITY CHECK</span>
                    </div>
                    <h2 className="text-[clamp(36px,5vw,52px)] font-[700] mb-16" data-reveal data-delay="1">
                        Why most fundraises feel like screaming into the void.
                    </h2>

                    <div className="mb-24" data-reveal data-delay="2">
                        <div className="text-[96px] font-serif text-[var(--color-accent)] leading-none mb-2">6 months</div>
                        <div className="text-[14px] text-[var(--color-text-on-light-muted)]">Average time wasted on manual investor searching and pitching on VC sites</div>
                    </div>

                    <div className="w-full text-left" data-reveal data-delay="3">
                        {confrontations.map((c, i) => (
                            <div key={i} className="group grid grid-cols-1 md:grid-cols-2 border-t border-[var(--color-border-light)] transition-colors hover:bg-[rgba(201,168,76,0.04)]">
                                <div className="p-6 md:p-8 flex items-start gap-4 md:border-r border-[var(--color-border-light)]">
                                    <div className="text-[#D32F2F] font-bold mt-1">✗</div>
                                    <div>
                                        <div className="font-[600] text-[#D32F2F] text-[15px] mb-1">{c.problem}</div>
                                        <div className="text-[14px] text-[var(--color-text-on-light-muted)]">{c.probDetail}</div>
                                    </div>
                                </div>
                                <div className="p-6 md:p-8 flex items-start gap-4">
                                    <div className="text-[var(--color-accent)] font-bold mt-1">✓</div>
                                    <div>
                                        <div className="font-[700] text-[var(--color-text-on-light)] text-[15px] mb-1">{c.solution}</div>
                                        <div className="text-[14px] text-[var(--color-text-on-light-muted)]">{c.solDetail}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className="border-t border-[var(--color-border-light)] w-full"></div>
                    </div>
                </div>
            </section>

            {/* HOW IT WORKS (Light) */}
            <section className="process-section" id="protocol">
                <div className="max-w-[1200px] mx-auto">
                    <div className="flex flex-col items-center text-center mb-20" data-reveal>
                        <div className="eyebrow">
                            <span className="eyebrow__dot"></span>
                            <span className="eyebrow__text">HOW IT WORKS</span>
                        </div>
                        <h2 className="text-[clamp(36px,4.5vw,48px)] font-[700]">The 6-Step Investor Process</h2>
                    </div>

                    <div className="process-layout">
                        <div className="hidden lg:block h-full relative" data-reveal data-delay="1">
                            <div className="sticky top-[100px] w-full max-w-[500px]">
                                <BrowserFrame src={investorProtocol[activeStepIndex].screenshot} alt={investorProtocol[activeStepIndex].title} url={investorProtocol[activeStepIndex].link} />
                            </div>
                        </div>
                        <div className="process-steps">
                            {investorProtocol.map((step, i) => (
                                <div key={i} className="process-step" data-index={i} data-reveal data-delay={i%3}>
                                    <div className="flex flex-col gap-4 max-w-[400px]">
                                        <div className="process-step__number-label">
                                            <div className="process-step__label">{step.phase}</div>
                                        </div>
                                        <h3 className="process-step__title">{step.title}</h3>
                                        <p className="process-step__desc">{step.desc}</p>
                                    </div>
                                    <div className="w-full flex items-center justify-center lg:hidden">
                                        <BrowserFrame src={step.screenshot} alt={step.title} url={step.link} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CASE STUDIES (Light) */}
            <section className="bg-[var(--color-bg-light)] px-6 pt-[var(--section-pad-light)] pb-[80px] md:pb-[320px] border-t border-[var(--color-border-light)]">
                <div className="max-w-[1200px] mx-auto text-[var(--color-text-on-light)]">
                    <div className="flex flex-col items-center text-center mb-16" data-reveal>
                        <div className="eyebrow">
                            <span className="eyebrow__dot"></span>
                            <span className="eyebrow__text">POWERED RESULTS</span>
                        </div>
                        <h2 className="text-[clamp(36px,4.5vw,48px)] font-[700] mb-8">Startups that worked on their raise. And closed it.</h2>
                        
                        <p className="font-serif italic text-[var(--color-text-on-light-muted)] max-w-[640px] text-[18px] text-center mb-2">
                            "OpenAI, Canva, Anthropic, Ramp, and Rippling use Clay's GTM development environment..." 
                        </p>
                        <div className="text-[12px] font-[600] text-[var(--color-text-on-light-muted)] uppercase tracking-widest">— Clay.com</div>
                    </div>

                    {/* Card 1: Reflect Orbital */}
                    <div className="case-study-card" data-reveal data-delay="1">
                        <div>
                            <div className="inline-block px-3 py-1 bg-[var(--color-accent)]/10 text-[var(--color-accent)] rounded-full text-[11px] font-[700] tracking-[0.1em] uppercase mb-6 border border-[var(--color-accent)]/20">Series A</div>
                            <h3 className="case-study__company-name">Reflect Orbital</h3>
                            <p className="case-study__description">To fund the development and launch of their first orbital mirror satellite, Eärendil-1, to sell sunlight to solar farms after dark.</p>
                            <div className="font-mono text-[10px] text-[var(--color-text-on-light-muted)] uppercase tracking-widest">Source: Clay + n8n Outreach Stack</div>
                            
                            <hr className="case-study__divider" />
                            
                            <div className="case-study__meta-grid">
                                <div>
                                    <div className="case-study__meta-label">ROUND</div>
                                    <div className="case-study__meta-value">Series A</div>
                                </div>
                                <div>
                                    <div className="case-study__meta-label">AMOUNT RAISED</div>
                                    <div className="case-study__meta-value text-[var(--color-accent)]">USD 20,000,000</div>
                                </div>
                                <div>
                                    <div className="case-study__meta-label">DATE</div>
                                    <div className="case-study__meta-value">May 2025</div>
                                </div>
                                <div>
                                    <div className="case-study__meta-label">LEAD INVESTORS</div>
                                    <div className="case-study__meta-value">Lux Capital</div>
                                </div>
                            </div>
                            
                            <hr className="case-study__divider" />

                            <div className="flex flex-wrap items-center gap-6 mt-6">
                                <a href="#" className="flex items-center gap-2 text-[12px] font-[600] text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors uppercase tracking-widest">
                                    Verify Report <span className="text-[14px]">→</span>
                                </a>
                                <a href="https://www.reflectorbital.com/press" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[12px] font-[600] text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors uppercase tracking-widest">
                                    Reflect Orbital Press <span className="text-[14px]">→</span>
                                </a>
                                <a href="#" className="flex items-center gap-2 text-[12px] font-[600] text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors uppercase tracking-widest">
                                    Post-Funding Ops <span className="text-[14px]">→</span>
                                </a>
                            </div>
                        </div>
                        <div>
                            <img src="https://cdn.prod.website-files.com/68f145fb8c727e1f6df74df0/68f7d40a9232cb4702d6a6b4_press_1.png" alt="Reflect Orbital Press" className="case-study__image" />
                        </div>
                    </div>

                    {/* Card 2: Swift Solar */}
                    <div className="case-study-card" data-reveal>
                        <div>
                            <div className="inline-block px-3 py-1 bg-[var(--color-accent)]/10 text-[var(--color-accent)] rounded-full text-[11px] font-[700] tracking-[0.1em] uppercase mb-6 border border-[var(--color-accent)]/20">Series A</div>
                            <h3 className="case-study__company-name">Swift Solar</h3>
                            <p className="case-study__description">Scaling the manufacturing of high-efficiency perovskite solar cells.</p>
                            <div className="font-mono text-[10px] text-[var(--color-text-on-light-muted)] uppercase tracking-widest">Source: Investor Relationship AI</div>
                            
                            <hr className="case-study__divider" />
                            
                            <div className="case-study__meta-grid">
                                <div>
                                    <div className="case-study__meta-label">ROUND</div>
                                    <div className="case-study__meta-value">Series A</div>
                                </div>
                                <div>
                                    <div className="case-study__meta-label">AMOUNT RAISED</div>
                                    <div className="case-study__meta-value text-[var(--color-accent)]">USD 27,000,000</div>
                                </div>
                                <div>
                                    <div className="case-study__meta-label">LEAD INVESTORS</div>
                                    <div className="case-study__meta-value">Eni Next, Fontinalis</div>
                                </div>
                            </div>
                            
                            <hr className="case-study__divider" />

                            <div className="flex flex-wrap items-center gap-6 mt-6">
                                <a href="#" className="flex items-center gap-2 text-[12px] font-[600] text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors uppercase tracking-widest">
                                    Verify Report <span className="text-[14px]">→</span>
                                </a>
                            </div>
                        </div>
                        <div>
                            <img src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600" alt="Swift Solar" className="case-study__image" />
                        </div>
                    </div>

                    {/* Card 3: MyStartUp */}
                    <div className="case-study-card" data-reveal>
                        <div>
                            <div className="inline-block px-3 py-1 bg-[var(--color-accent)]/10 text-[var(--color-accent)] rounded-full text-[11px] font-[700] tracking-[0.1em] uppercase mb-6 border border-[var(--color-accent)]/20">Pre-Seed</div>
                            <h3 className="case-study__company-name">MyStartUp</h3>
                            <p className="case-study__description">Building the operational systems for rapid scaling and market capture.</p>
                            <div className="font-mono text-[10px] text-[var(--color-text-on-light-muted)] uppercase tracking-widest">Source: B2B Scaling Architecture</div>
                            
                            <hr className="case-study__divider" />
                            
                            <div className="flex flex-wrap items-center gap-6 mt-6">
                                <a href="#" className="flex items-center gap-2 text-[12px] font-[600] text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors uppercase tracking-widest">
                                    Verify Report <span className="text-[14px]">→</span>
                                </a>
                            </div>
                        </div>
                        <div>
                            <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600" alt="MyStartUp" className="case-study__image" />
                        </div>
                    </div>

                    {/* Card 4: Vesta */}
                    <div className="case-study-card" data-reveal>
                        <div>
                            <div className="inline-block px-3 py-1 bg-[var(--color-accent)]/10 text-[var(--color-accent)] rounded-full text-[11px] font-[700] tracking-[0.1em] uppercase mb-6 border border-[var(--color-accent)]/20">Series A</div>
                            <h3 className="case-study__company-name">Vesta</h3>
                            <p className="case-study__description">Mortgage infrastructure SaaS enabling seamless originations.</p>
                            <div className="font-mono text-[10px] text-[var(--color-text-on-light-muted)] uppercase tracking-widest">Source: Cold Outreach Engine</div>
                            
                            <hr className="case-study__divider" />
                            
                            <div className="case-study__meta-grid">
                                <div>
                                    <div className="case-study__meta-label">ROUND</div>
                                    <div className="case-study__meta-value">Series A</div>
                                </div>
                                <div>
                                    <div className="case-study__meta-label">AMOUNT RAISED</div>
                                    <div className="case-study__meta-value text-[var(--color-accent)]">USD 30,000,000</div>
                                </div>
                                <div>
                                    <div className="case-study__meta-label">LEAD INVESTORS</div>
                                    <div className="case-study__meta-value">Andreessen Horowitz</div>
                                </div>
                            </div>
                            
                            <hr className="case-study__divider" />

                            <div className="flex flex-wrap items-center gap-6 mt-6">
                                <a href="#" className="flex items-center gap-2 text-[12px] font-[600] text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors uppercase tracking-widest">
                                    Verify Report <span className="text-[14px]">→</span>
                                </a>
                            </div>
                        </div>
                        <div>
                            <img src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=600" alt="Vesta" className="case-study__image" />
                        </div>
                    </div>
                </div>
            </section>

            {/* BEYOND THE RAISE (Light) */}
            <section className="bg-[var(--color-bg-light)] px-6 py-[var(--section-pad-light)] pt-0 text-[var(--color-text-on-light)]">
                <div className="max-w-[1200px] mx-auto">
                    <div className="flex flex-col items-center text-center mb-16" data-reveal>
                        <div className="eyebrow">
                            <span className="eyebrow__dot"></span>
                            <span className="eyebrow__text">POST-FUNDING OPS</span>
                        </div>
                        <h2 className="text-[clamp(36px,4.5vw,52px)] font-[700] mb-6">Beyond The Raise: Scaling AI Operations</h2>
                        <p className="text-[16px] text-[var(--color-text-on-light-muted)] max-w-[600px] text-center leading-[1.6]">
                            Raising capital is step one. Deploying it efficiently is step two. We serve as your fractional AI infrastructure team, deploying Autonomous Support Agents, Client Onboarding Workflows, and Internal System Automations so your new capital goes into growth, not salaries.
                        </p>
                    </div>

                    {/* Industries Triple Marquee */}
                    <div className="industries-marquee-wrapper mb-16" data-reveal data-delay="1">
                        {/* Row 1. Left */}
                        <div className="industries-row">
                            <div className="industries-track">
                                {['SaaS & Technology','Venture-Backed Startups','Cleantech & Climate','AI Infrastructure','HealthTech','Logistics & Supply Chain','Fintech & Payments','Deep Tech','SaaS & Technology','Venture-Backed Startups','Cleantech & Climate','AI Infrastructure','HealthTech','Logistics & Supply Chain','Fintech & Payments','Deep Tech'].map((name, i) => (
                                    <div key={i} className="industry-pill">
                                        <div className="industry-pill__icon">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                                        </div>
                                        <span>{name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Row 2. Right */}
                        <div className="industries-row">
                            <div className="industries-track" style={{ animationDirection: 'reverse' }}>
                                {['B2B Software','Renewable Energy','Creator Economy','PropTech','EdTech','Cybersecurity','AgriTech','Web3 & Blockchain','B2B Software','Renewable Energy','Creator Economy','PropTech','EdTech','Cybersecurity','AgriTech','Web3 & Blockchain'].map((name, i) => (
                                    <div key={i} className="industry-pill">
                                        <div className="industry-pill__icon">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                                        </div>
                                        <span>{name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Row 3. Left */}
                        <div className="industries-row">
                            <div className="industries-track">
                                {['Consumer Apps','Defence & GovTech','BioTech & Life Sciences','E-Commerce','Mobility & Transport','Media & Entertainment','Hardware & IoT','Future of Work','Consumer Apps','Defence & GovTech','BioTech & Life Sciences','E-Commerce','Mobility & Transport','Media & Entertainment','Hardware & IoT','Future of Work'].map((name, i) => (
                                    <div key={i} className="industry-pill">
                                        <div className="industry-pill__icon">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
                                        </div>
                                        <span>{name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-16 items-center" data-reveal data-delay="2">
                        <div>
                            <div className="text-[64px] font-[800] text-[var(--color-accent)] leading-none mb-4">10x</div>
                            <h3 className="text-[24px] font-[700]">Bandwidth for your founding team</h3>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                            <div>
                                <svg className="w-5 h-5 text-[var(--color-accent)] mb-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                                <div className="font-[700] text-[15px] mb-1">Automated SDRs</div>
                                <div className="text-[14px] text-[var(--color-text-on-light-muted)]">Scale B2B sales 24/7</div>
                            </div>
                            <div>
                                <svg className="w-5 h-5 text-[var(--color-accent)] mb-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                                <div className="font-[700] text-[15px] mb-1">AI Voice Support</div>
                                <div className="text-[14px] text-[var(--color-text-on-light-muted)]">Zero wait-time calls</div>
                            </div>
                            <div>
                                <svg className="w-5 h-5 text-[var(--color-accent)] mb-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>
                                <div className="font-[700] text-[15px] mb-1">Dynamic CRMs</div>
                                <div className="text-[14px] text-[var(--color-text-on-light-muted)]">Data that works for you</div>
                            </div>
                            <div>
                                <svg className="w-5 h-5 text-[var(--color-accent)] mb-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                                <div className="font-[700] text-[15px] mb-1">Content Pipelines</div>
                                <div className="text-[14px] text-[var(--color-text-on-light-muted)]">SEO and Social at scale</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ SECTION (Light) */}
            <FAQSection />

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
                            <a href="https://cal.com/nirvanaxjude/investor-strategy-call" target="_blank" rel="noopener noreferrer" className="btn-primary">
                                <div className="btn-primary__arrow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
                                SCHEDULE STRATEGY SESSION
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

export default StartupsPage;
