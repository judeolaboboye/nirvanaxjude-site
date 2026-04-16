import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, Activity, ShieldCheck, Database, Rocket, LineChart, ChevronRight, ArrowRight, ArrowLeft, Users, Zap, Globe, ExternalLink, CheckCircle2 } from 'lucide-react';
import TargetingRadar from '../components/startup/TargetingRadar';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// ─── Browser Frame Wrapper ──────────────────────────────────────────────────
const BrowserFrame = ({ src, alt, url = 'app.clay.com/workspace', children }) => (
    <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
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
    { name: 'Notion', img: '/made-for-notion-black.svg', dark: true },
    { name: 'HubSpot', img: 'https://legal.hubspot.com/hubfs/guidelines_the-sprocket.svg', dark: false },
    { name: 'Make', img: 'https://www.make.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fun655fb9wln6%2F2hZUy7ZGjBeOg7ImkCamBE%2Fc826fbbe5f6b05086c7de48da203f10b%2FMake_gif_01_Loop-2.gif&w=128&q=75', dark: false },
    { name: 'n8n', img: 'https://n8n.io/brandguidelines/logo-white.svg', dark: false },
    { name: 'Clay', img: '/images/clay-logo.png', dark: false },
    { name: 'Apify', img: 'https://apify.com/img/apify-logo/wordmark.svg', dark: false },
    { name: 'Crunchbase', img: 'https://images.crunchbase.com/image/upload/v1613675726/clientapp/logo_crunchbase_primary.svg', dark: false },
];

// ─── Case Studies Data ────────────────────────────────────────────────────────
const caseStudies = [
    {
        company: 'Reflect Orbital',
        logo: 'https://cdn.prod.website-files.com/68d43f0d2d1a2fc53bee4fa1/695d7c4dd912a6787247c588_reflect_logo_white.svg',
        logoText: 'REFLECT',
        logoColor: '#4B96FF',
        badge: 'Series A',
        badgeColor: '#4B96FF',
        raised: 'USD 20,000,000',
        date: 'May 2025',
        lead: 'Lux Capital (Lead)',
        motivation: 'To fund the development and launch of their first orbital mirror satellite, Eärendil-1, to sell sunlight to solar farms after dark.',
        verifyUrl: 'https://www.reflectorbital.com/press/reflect-orbital-secures-20-million-in-series-a-funding-led-by-lux-capital',
        verifySource: 'Reflect Orbital Press',
        poweredBy: 'Clay + n8n Outreach Stack',
        bgColor: 'from-[#0A1628] to-[#0D0D12]',
        accentColor: '#4B96FF',
    },
    {
        company: 'MyStarUp',
        logo: 'https://mystarup.com/assets/startup-logo-d9092c5b4813220396c4979ac8c8b32c9fb07d5714302a14bca00194f53ed47a.jpg',
        logoText: 'MY\nSTARTUP',
        logoColor: '#C9A84C',
        badge: 'Service Launch',
        badgeColor: '#C9A84C',
        raised: 'N/A — Service Revenue',
        date: 'January 2026',
        lead: 'Bootstrapped (Internal)',
        motivation: 'To launch "MyStarUp Premium," a physical proxy service that represents founders at major tech fairs (Slush, Web Summit) to secure high-level investor meetings.',
        verifyUrl: null,
        verifySource: null,
        poweredBy: 'Clay + Apollo + n8n',
        bgColor: 'from-[#1A1200] to-[#0D0D12]',
        accentColor: '#C9A84C',
    },
    {
        company: 'Swift Solar',
        logo: 'https://cdn.prod.website-files.com/61702af2e3966e09c4101538/6810001ef3dfebe9237c267a_.avif',
        logoText: 'SWIFT SOLAR',
        logoColor: '#F97316',
        badge: 'Series A',
        badgeColor: '#F97316',
        raised: 'USD 27,000,000',
        date: 'June 2024',
        lead: 'Eni Next, Fontinalis Partners',
        motivation: 'To advance their perovskite tandem photovoltaic technology for next-generation solar panels.',
        verifyUrl: 'https://www.clay.com/dossier/swift-solar-funding',
        verifySource: 'Verified by Clay',
        poweredBy: 'Clay GTM Stack',
        bgColor: 'from-[#1A0A00] to-[#0D0D12]',
        accentColor: '#F97316',
    },
    {
        company: 'Vesta',
        logo: 'https://cdn.prod.website-files.com/61702af2e3966e09c4101538/6806c3c9bc6f3984ca7a4823_.avif',
        logoText: 'VESTA',
        logoColor: '#8B5CF6',
        badge: 'Series Unknown',
        badgeColor: '#8B5CF6',
        raised: 'Undisclosed',
        date: 'April 2025',
        lead: 'Schwarzwald Capital Fund',
        motivation: 'To support ongoing innovation and market expansion in the financial services sector.',
        verifyUrl: 'https://www.clay.com/dossier/vesta-funding',
        verifySource: 'Verified by Clay',
        poweredBy: 'Clay GTM Stack',
        bgColor: 'from-[#0D0A1A] to-[#0D0D12]',
        accentColor: '#8B5CF6',
    },
];

// ─── Problems/Solutions Data ──────────────────────────────────────────────────
const confrontations = [
    { problem: 'Time, 6 months gone. Nothing to show for it.', solution: 'Speed, 90 days to 47 meetings, not 6 months to zero.', probDetail: 'The average founder spends half a year on outreach before getting a term sheet. That is six months not building, not selling, not hiring.', solDetail: 'When outreach is built as a system, the timeline compresses dramatically. 90 days is enough to move from no conversations to active term sheet discussions.' },
    { problem: 'Targeting, You are pitching investors who already spent their fund.', solution: 'Targeting, We only target investors with active, deployable capital.', probDetail: 'Most investor lists online are 18 months stale. You spend weeks getting to a "no" that was always going to be a no because the fund had no capital left to deploy.', solDetail: 'We map recent fund closes, deployment pace, and thesis alignment before a single email goes out. You never pitch a fund that is out of bullets.' },
    { problem: 'Outreach, Spray-and-pray LinkedIn DMs that embarrass you.', solution: 'Personalisation, Outreach built around each investor\'s actual thesis.', probDetail: '"Hi First Name, I have an exciting opportunity..." Investors see 40 of these a day. You are not standing out. You are confirming you do not know how the game works.', solDetail: 'We do not send the same email 500 times. Each message is shaped around what that specific investor has publicly said they care about, making it land as relevant, not random.' },
    { problem: 'Thesis mismatch, You are pitching the wrong investors entirely.', solution: 'Objection handling, Every reply gets read and responded to intelligently.', probDetail: 'A investor whose thesis is consumer fintech is not going to fund your B2B SaaS no matter how good your deck is. Most founders do not research this before reaching out.', solDetail: 'AI agents analyse every response in real time. Pricing concern? Traction question? The follow-up sequence adapts automatically, addressing what the investor actually said.' },
    { problem: 'Bandwidth, Fundraising is a full time job. But so is running your company.', solution: 'Bandwidth, You step in only when an investor is ready to talk terms.', probDetail: 'You cannot do both well at the same time. While you are chasing investors, your product stalls, your team drifts, and your runway shrinks.', solDetail: 'Every stage before that, prospecting, outreach, follow-up, objection handling, runs without you. You stay in the business. We run the raise.' },
    { problem: 'Feedback, You get ghosted with no idea why.', solution: 'Feedback loop, You know exactly why something is not working.', probDetail: 'No reply. No feedback. No signal. You do not know if it is your deck, your market, your valuation, or your email subject line. You cannot fix what you cannot diagnose.', solDetail: 'Reply data, open rates, objection patterns, everything is tracked and fed back. You are never guessing. You know what is landing and what needs to change.' },
];

// ─── 6-Step Investor Protocol ─────────────────────────────────────────────────
const investorProtocol = [
    {
        phase: '01', title: 'Target List',
        desc: 'We do not pull generic investor directories. We research recent fund raises, thesis fits, and open capital to hand-build a list of 500 investors who are actually in a position to write a check.',
        screenshot: 'https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,quality=80,format=auto,onerror=redirect/uploads/asset/file/5529e0bd-84dc-409d-8db0-d7bd0c0116e5/10bf645c-4b0c-4cfe-a8a0-2526b70da9d6_2378x610.jpg',
        screenshotUrl: 'app.clay.com/workspace/investors',
    },
    {
        phase: '02', title: 'Warm-Up',
        desc: 'Before we send a single cold email, we build your presence on LinkedIn and in content so investors already recognise your name when the outreach lands.',
        screenshot: null,
        linkedinOverlay: true,
    },
    {
        phase: '03', title: 'Sniper Execution',
        desc: 'Multi-channel rollout. We manage 10+ sending domains so emails actually land in the inbox, not spam. You reach 10x more investors without looking like a blast.',
        screenshot: 'https://storage.ghost.io/c/33/68/33684c00-f023-423d-a7f0-5786c0043411/content/images/2026/01/ANALYTICS-23.png',
        screenshotUrl: 'analytics.instantly.ai/campaigns',
    },
    {
        phase: '04', title: 'Objection Handling',
        desc: 'Every reply gets read. Pushback on traction? Valuation concerns? The follow-up sequence adjusts automatically to address what the investor actually said.',
        screenshot: 'https://storage.ghost.io/c/33/68/33684c00-f023-423d-a7f0-5786c0043411/content/images/2026/03/UNIBOX-61.png',
        screenshotUrl: 'app.instantly.ai/unibox',
    },
    {
        phase: '05', title: 'The Handshake',
        desc: 'Meetings booked directly onto your calendar. No back-and-forth. You step in only when an investor is ready to have a real conversation about terms.',
        screenshot: '/images/cal-dashboard-v2.png',
        screenshotUrl: 'cal.com/nirvanaxjude/investor-strategy-call',
    },
    {
        phase: '06', title: 'Iteration',
        desc: 'What worked gets amplified. We track which angles, subject lines, and sequences drove the most interest and double down on those.',
        screenshot: 'https://lh7-us.googleusercontent.com/docsz/AD_4nXfBZ9LUFPmZh1bNLxrFlVh3UYFpQZr8D69D6KByor0O6N1ad-DRdwVa0MoAKD7DknOCDioQf4urbGB-I71PkjTXzswWevUSv1o2cFrzWh698og0rscRI67eS5_gRGsETrYXuiP5Z94P8LoBQ-5dLzTz6qsE?key=SxIHSqW6bQDOPMJSVI5-8A',
        screenshotUrl: 'analytics.nirvanaxjude.com/iterations',
    },
];


// ─── MAIN PAGE ───────────────────────────────────────────────────────────────
const StartupsPage = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [activeCase, setActiveCase] = useState(0);
    const [judeHovered, setJudeHovered] = useState(false);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.utils.toArray('.scroll-reveal').forEach(element => {
                gsap.fromTo(element,
                    { opacity: 0, y: 50 },
                    { scrollTrigger: { trigger: element, start: 'top 85%' }, opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
                );
            });
        });
        return () => ctx.revert();
    }, []);

    return (
        <div className="bg-[#0D0D12] min-h-screen text-white font-sans selection:bg-[#C9A84C]/30 selection:text-white pt-20 overflow-hidden">

            {/* ======== HERO SECTION ======== */}
            <section className="min-h-[90vh] flex flex-col items-center justify-center text-center px-4 relative">
                <TargetingRadar />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D12]/60 via-transparent to-[#0D0D12] z-[1]" />
                <div className="relative z-10 max-w-5xl mx-auto space-y-8 mt-12">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <div className="inline-block font-mono text-[#C9A84C] text-sm tracking-[0.3em] uppercase py-2 px-6 border border-[#C9A84C]/20 rounded-full bg-[#C9A84C]/5 backdrop-blur-md mb-8">
                            Capital Infrastructure for Founders
                        </div>
                        <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tighter text-white mb-6 leading-[1.1]">
                            Get in front of the right investors,<br />
                            <span className="text-[#C9A84C] italic font-serif">before they close.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-4">
                            We map the right investors, land in their inbox, and book the meeting so you show up to calls, not cold outreach.
                        </p>
                        <p className="text-base text-gray-500 font-mono mb-12">
                            Targeted research. Precision outreach. Meetings on your calendar.
                        </p>
                        <div className="flex flex-wrap justify-center gap-6">
                            <a href="https://cal.com/nirvanaxjude/startups-founder-inquiries" target="_blank" rel="noopener noreferrer"
                                className="group relative px-8 py-4 bg-white text-[#0D0D12] font-bold text-lg rounded-full hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(201,168,76,0.3)] flex items-center gap-3">
                                Secure Funding Infrastructure
                                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Hero Stats */}
                <div className="relative z-10 mt-20 grid grid-cols-3 gap-12 md:gap-24 max-w-3xl mx-auto">
                    {[['70+', 'Businesses Influenced'], ['12+', 'Startups Raised'], ['4 Yrs', 'Supporting Startups']].map(([num, label]) => (
                        <div key={label} className="text-center">
                            <div className="text-3xl md:text-4xl font-black text-[#C9A84C] mb-1">{num}</div>
                            <div className="text-xs text-gray-500 font-mono uppercase tracking-widest">{label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ======== TOOL TRUST STRIP ======== */}
            <div className="border-y border-white/5 py-8 bg-[#0A0A0F]">
                <div className="max-w-5xl mx-auto px-6">
                    <p className="text-center text-xs font-mono text-gray-600 uppercase tracking-widest mb-6">Built on the tools that actually work</p>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                        {toolLogos.map(t => (
                            <div key={t.name} className={`flex items-center opacity-50 hover:opacity-90 transition-opacity ${t.dark ? 'bg-[#1a1a1a] rounded px-2 py-1' : ''}`}>
                                <img
                                    src={t.img}
                                    alt={t.name}
                                    className="h-10 md:h-12 object-contain max-w-[140px]"
                                    onError={(e) => {
                                        e.currentTarget.style.display = 'none';
                                        e.currentTarget.nextSibling.style.display = 'block';
                                    }}
                                />
                                <span className="hidden text-sm font-bold text-white tracking-wide">{t.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ======== REALITY CHECK ======== */}
            <section className="py-32 px-6 border-b border-[#C9A84C]/10 bg-[#0A0A0F] relative scroll-reveal">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-[#C9A84C] font-mono tracking-widest uppercase text-sm mb-3">The Reality Check</h2>
                        <h3 className="text-4xl md:text-5xl font-bold">Why most fundraises feel like<br /><span className="italic font-serif text-gray-500">screaming into the void.</span></h3>
                    </div>

                    {/* Big stat card */}
                    <div className="mb-16 p-8 bg-white/[0.02] border border-[#C9A84C]/10 rounded-3xl max-w-lg mx-auto text-center">
                        <div className="text-6xl font-black text-[#C9A84C] mb-2">6 months</div>
                        <div className="text-gray-400">Average time wasted on the manual looking for Investors & Pitching on VC Sites</div>
                    </div>

                    {/* 8-row comparison */}
                    <div className="space-y-6">
                        {confrontations.map((row, idx) => (
                            <div key={idx} className="grid md:grid-cols-2 gap-4">
                                <div className="flex items-start gap-4 p-6 bg-red-950/10 border border-red-900/20 rounded-2xl">
                                    <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center shrink-0 mt-0.5">
                                        <span className="text-red-400 text-xs font-bold">✗</span>
                                    </div>
                                    <div>
                                        <div className="font-bold text-red-300 mb-1 text-sm">{row.problem}</div>
                                        <p className="text-gray-500 text-xs leading-relaxed">{row.probDetail}</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 p-6 bg-[#C9A84C]/5 border border-[#C9A84C]/20 rounded-2xl">
                                    <CheckCircle2 className="w-5 h-5 text-[#C9A84C] shrink-0 mt-0.5" />
                                    <div>
                                        <div className="font-bold text-white mb-1 text-sm">{row.solution}</div>
                                        <p className="text-gray-400 text-xs leading-relaxed">{row.solDetail}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ======== 6-STEP PROTOCOL ======== */}
            <section id="protocol" className="py-32 relative scroll-reveal overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 mb-24 text-center">
                    <h2 className="text-[#C9A84C] font-mono tracking-widest uppercase text-sm mb-4">How It Works</h2>
                    <h3 className="text-4xl md:text-6xl font-bold">The 6-Step<br /><span className="italic font-serif text-gray-500">Investor Process</span></h3>
                </div>

                <div className="max-w-7xl mx-auto px-6 space-y-24 md:space-y-40">
                    {investorProtocol.map((step, idx) => (
                        <div key={idx} className={`grid md:grid-cols-2 gap-12 md:gap-24 items-center ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                            <div className="flex flex-col justify-center">
                                <span className="font-mono text-[#C9A84C]/30 text-6xl md:text-7xl font-black mb-4 md:mb-6">{step.phase}</span>
                                <h4 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">{step.title}</h4>
                                <p className="text-gray-400 leading-relaxed text-base md:text-lg text-pretty">{step.desc}</p>
                            </div>
                            <div className="relative bg-[#080808] p-4 md:p-8 rounded-3xl border border-white/5 shadow-2xl">
                                {step.linkedinOverlay ? (
                                    <div className="relative w-full">
                                        <BrowserFrame url="linkedin.com/in/yourprofile">
                                            <div className="relative">
                                                <img
                                                    src="/images/linkedin-laptop-guy"
                                                    alt="LinkedIn presence building"
                                                    className="w-full object-cover"
                                                    onError={(e) => {
                                                        e.currentTarget.src = 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=900&h=500&dpr=1';
                                                    }}
                                                />
                                                <div className="absolute top-4 right-4 bg-[#0077B5] rounded-lg p-2 shadow-xl">
                                                    <img
                                                        src="https://content.linkedin.com/content/dam/me/business/en-us/amp/xbu/linkedin-revised-brand-guidelines/downloads/fg/brandg-business-linkedin-logo-dsk-v03.png/jcr:content/renditions/brandg-business-linkedin-logo-dsk-v03-2x.png"
                                                        alt="LinkedIn"
                                                        className="h-6 object-contain"
                                                        onError={(e) => { e.currentTarget.style.display = 'none'; }}
                                                    />
                                                </div>
                                            </div>
                                        </BrowserFrame>
                                    </div>
                                ) : step.screenshot ? (
                                    <BrowserFrame src={step.screenshot} alt={step.title} url={step.screenshotUrl} />
                                ) : (
                                    <div className="w-full aspect-video bg-white/[0.02] border border-white/5 rounded-2xl flex items-center justify-center">
                                        <div className="text-center">
                                            <div className="text-6xl font-black text-[#C9A84C] mb-2">{step.phase}</div>
                                            <div className="text-xs font-mono text-gray-600 uppercase tracking-widest">{step.title}</div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ======== CASE STUDIES — TRENDHIJACKING STYLE ======== */}
            <section id="projects" className="py-32 px-6 bg-[#0A0A0F] border-y border-white/5 scroll-reveal">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-6">
                        <h2 className="text-[#C9A84C] font-mono tracking-widest uppercase text-sm mb-3">Powered Results</h2>
                        <h3 className="text-4xl md:text-5xl font-bold mb-6">Startups that worked on their raise.<br /><span className="italic font-serif text-gray-500">And closed it.</span></h3>
                    </div>

                    {/* Clay quote strip */}
                    <div className="mb-16 p-6 bg-white/[0.02] border border-white/5 rounded-2xl max-w-4xl mx-auto text-center">
                        <p className="text-gray-400 text-sm leading-relaxed mb-3">
                            "OpenAI, Canva, Anthropic, Ramp, and Rippling use Clay's GTM development environment to power everything from CRM enrichment to highly targeted outreach campaigns."
                        </p>
                        <div className="flex items-center justify-center gap-3">
                            <img src="https://logo.clearbit.com/clay.com" alt="Clay" className="h-5 object-contain opacity-70" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                            <span className="text-xs font-mono text-gray-600">~ Clay.com</span>
                        </div>
                        <p className="text-xs text-gray-600 mt-3">Every GTM team knows this painful truth: good growth ideas die without the right data and the ability to quickly act on it.<br />Here are startups that worked on theirs, using Clay, proven by Clay themselves.</p>
                    </div>

                    {/* Case Study Slider */}
                    <div className="relative">
                        {/* Navigation */}
                        <div className="flex items-center justify-between mb-8">
                            <div className="flex gap-2">
                                {caseStudies.map((_, idx) => (
                                    <button key={idx}
                                        onClick={() => setActiveCase(idx)}
                                        className={`h-1 rounded-full transition-all duration-300 ${idx === activeCase ? 'w-10 bg-[#C9A84C]' : 'w-4 bg-white/20'}`}
                                    />
                                ))}
                            </div>
                            <div className="flex gap-3">
                                <button onClick={() => setActiveCase(prev => Math.max(0, prev - 1))}
                                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-[#C9A84C]/40 hover:text-[#C9A84C] transition-colors disabled:opacity-20"
                                    disabled={activeCase === 0}><ArrowLeft className="w-4 h-4" /></button>
                                <button onClick={() => setActiveCase(prev => Math.min(caseStudies.length - 1, prev + 1))}
                                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-[#C9A84C]/40 hover:text-[#C9A84C] transition-colors disabled:opacity-20"
                                    disabled={activeCase === caseStudies.length - 1}><ArrowRight className="w-4 h-4" /></button>
                            </div>
                        </div>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeCase}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                                className="grid md:grid-cols-2 gap-6 items-stretch"
                            >
                                {/* LEFT SIDE — Logo + Company */}
                                <div className={`relative rounded-3xl overflow-hidden bg-gradient-to-br ${caseStudies[activeCase].bgColor} border border-white/5 p-10 flex flex-col justify-between min-h-[420px]`}>
                                    <div>
                                        <span className="inline-block px-3 py-1 text-xs font-mono uppercase tracking-widest rounded-full border mb-8"
                                            style={{ color: caseStudies[activeCase].accentColor, borderColor: `${caseStudies[activeCase].accentColor}40`, backgroundColor: `${caseStudies[activeCase].accentColor}10` }}>
                                            {caseStudies[activeCase].badge}
                                        </span>
                                        {caseStudies[activeCase].logo ? (
                                            <img src={caseStudies[activeCase].logo} alt={caseStudies[activeCase].company} className="h-16 object-contain mb-4" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                                        ) : (
                                            <div className="text-4xl font-black mb-4 whitespace-pre-line leading-none" style={{ color: caseStudies[activeCase].accentColor }}>
                                                {caseStudies[activeCase].logoText}
                                            </div>
                                        )}
                                        <h4 className="text-2xl font-bold text-white mb-2">{caseStudies[activeCase].company}</h4>
                                        <p className="text-sm text-gray-400 leading-relaxed">{caseStudies[activeCase].motivation}</p>
                                    </div>
                                    <div className="flex items-center gap-2 mt-6">
                                        <img src="https://logo.clearbit.com/clay.com" alt="Clay" className="h-4 opacity-50" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                                        <span className="text-xs text-gray-600 font-mono">Source: {caseStudies[activeCase].poweredBy}</span>
                                    </div>
                                </div>

                                {/* RIGHT SIDE — Quick Stats */}
                                <div className="bg-[#111116] border border-white/5 rounded-3xl p-10 flex flex-col justify-between">
                                    <div>
                                        <h5 className="text-xs font-mono uppercase tracking-widest text-[#C9A84C] mb-6">The Quick Stats</h5>
                                        <div className="space-y-4">
                                            {[
                                                ['Round', caseStudies[activeCase].badge],
                                                ['Amount Raised', caseStudies[activeCase].raised],
                                                ['Date', caseStudies[activeCase].date],
                                                ['Lead Investors', caseStudies[activeCase].lead],
                                            ].map(([label, value]) => (
                                                <div key={label} className="flex items-start justify-between pb-4 border-b border-white/5">
                                                    <span className="text-sm text-gray-500">{label}</span>
                                                    <span className="text-sm font-bold text-white text-right max-w-[55%]">{value}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="mt-6 space-y-3">
                                        {caseStudies[activeCase].verifyUrl && (
                                            <a href={caseStudies[activeCase].verifyUrl} target="_blank" rel="noopener noreferrer"
                                                className="w-full flex items-center justify-between px-6 py-4 rounded-2xl font-bold text-sm transition-all"
                                                style={{ backgroundColor: caseStudies[activeCase].accentColor, color: '#0D0D12' }}>
                                                Verify Report
                                                <ExternalLink className="w-4 h-4" />
                                            </a>
                                        )}
                                        <div className="flex items-center gap-2 justify-center">
                                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                                            <span className="text-xs text-gray-600 font-mono">
                                                {caseStudies[activeCase].verifySource || 'Powered by Clay + Multiple Workflow Stack'}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </section>

            {/* ======== BEYOND THE RAISE ======== */}
            <section id="beyond-raise" className="py-32 px-6 max-w-7xl mx-auto relative scroll-reveal">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-[#C9A84C] font-mono tracking-widest uppercase text-sm mb-4">Post-Funding Ops</h2>
                        <h3 className="text-4xl md:text-5xl font-bold mb-8">Beyond The Raise:<br /><span className="italic text-gray-500">Scaling AI Operations</span></h3>
                        <p className="text-lg text-gray-400 leading-relaxed mb-12 border-l-2 border-[#C9A84C]/30 pl-6">
                            Raising capital is step one. Deploying it efficiently is step two. We serve as your fractional AI infrastructure team, deploying Autonomous Support Agents, Client Onboarding Workflows, and Internal System Automations so your new capital goes into growth, not salaries.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                ['Automated SDRs', 'Scale B2B sales 24/7', <Users key="u" className="w-5 h-5" />],
                                ['AI Voice Support', 'Zero wait-time calls', <Zap key="z" className="w-5 h-5" />],
                                ['Dynamic CRMs', 'Data that works for you', <Database key="d" className="w-5 h-5" />],
                                ['Content Pipelines', 'SEO and Social at scale', <Globe key="g" className="w-5 h-5" />]
                            ].map(([title, desc, icon]) => (
                                <div key={title} className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:border-[#C9A84C]/20 transition-colors">
                                    <div className="text-[#C9A84C] mb-3">{icon}</div>
                                    <h5 className="font-bold mb-1 text-sm">{title}</h5>
                                    <p className="text-xs text-gray-500">{desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative">
                        <div className="aspect-[3/4] rounded-3xl overflow-hidden">
                            <img src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=900&h=1200&dpr=1" alt="AI Operations team at work" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D12]/80 to-transparent" />
                        </div>
                        <div className="absolute -bottom-6 -left-6 bg-[#0D0D12] border border-[#C9A84C]/20 rounded-2xl p-6 shadow-2xl">
                            <div className="text-3xl font-black text-[#C9A84C] mb-1">10x</div>
                            <div className="text-sm text-gray-400">Bandwidth for your founding team</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ======== ABOUT THE ARCHITECT ======== */}
            <section id="about" className="py-32 px-6 border-y border-white/5 bg-[#0A0A0F] scroll-reveal">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            {/* Hover photo effect */}
                            <div className="aspect-square max-w-md mx-auto rounded-3xl overflow-hidden cursor-pointer relative"
                                onMouseEnter={() => setJudeHovered(true)}
                                onMouseLeave={() => setJudeHovered(false)}>
                                <img
                                    src="/jude.png"
                                    alt="Jude Olaboboye"
                                    className={`w-full h-full object-cover object-top absolute inset-0 transition-opacity duration-500 hidden md:block ${judeHovered ? 'opacity-0' : 'opacity-100'}`}
                                />
                                <img
                                    src="/jude-hover.jpg"
                                    alt="Jude Olaboboye"
                                    className={`w-full h-full object-cover object-top absolute inset-0 transition-opacity duration-500 opacity-100 md:${judeHovered ? 'opacity-100' : 'opacity-0'}`}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F]/40 to-transparent pointer-events-none" />
                            </div>
                            <div className="absolute bottom-6 right-0 lg:-right-8 bg-[#121218] border border-[#C9A84C]/20 rounded-2xl p-6 shadow-2xl max-w-[220px]">
                                <div className="text-xs font-mono text-[#C9A84C] uppercase tracking-widest mb-3">Track Record</div>
                                <div className="space-y-2">
                                    <div className="flex justify-between text-sm"><span className="text-gray-400">Businesses</span><span className="font-bold text-white">70+</span></div>
                                    <div className="flex justify-between text-sm"><span className="text-gray-400">Industries</span><span className="font-bold text-white">12+</span></div>
                                    <div className="flex justify-between text-sm"><span className="text-gray-400">Experience</span><span className="font-bold text-white">4 Years</span></div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="inline-block font-mono text-[#C9A84C] text-xs tracking-[0.3em] uppercase py-2 px-4 border border-[#C9A84C]/20 rounded-full bg-[#C9A84C]/5 mb-6">
                                The Architect
                            </div>
                            <h3 className="text-4xl md:text-5xl font-bold mb-6">
                                70+ Systems.<br />4 Years.<br />
                                <span className="text-gray-500 italic font-serif">1 Goal.</span>
                            </h3>
                            <p className="text-lg text-gray-400 leading-relaxed mb-6">
                                I'm Jude. I combine behavioural research with hard automation. The result: outreach that gets read, replied to, and booked, not ignored.
                            </p>
                            <p className="text-gray-500 leading-relaxed mb-10 text-sm">
                                I built the backend systems that took agencies from $30k to $300k/mo, running lead gen, onboarding, and ops on autopilot. Now I work directly with Founders and Agencies to architect the intelligence that makes growth predictable.
                            </p>
                            <a href="https://cal.com/nirvanaxjude/startups-founder-inquiries" target="_blank" rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 px-8 py-4 bg-[#C9A84C] text-[#0D0D12] font-bold rounded-full hover:scale-105 transition-transform">
                                Schedule Strategy Session
                                <ArrowRight className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default StartupsPage;
