import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, ChevronRight, CheckCircle2, Play, MousePointer2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const SITE_CONTENT = {
    brand: {
        name: "NirvanaXJude",
        tagline: "Deterministic AI Architecture",
        logo: "N/X/J",
    },
    hero: {
        headline: "Stop Buying AI Solutions.",
        drama: "Build an AI-Centered Business.",
        cta: "Book a Protocol Call",
        subtext: "The AI Automation Partner you need. I engineer deterministic systems for Lead Gen, Content Automation, and Operational Scaling.",
        roi: "Earning potential should be a guaranteed 100x."
    },
    manifesto: {
        left: "Most 'AI Experts' focus on following the latest hype and fragile bots that break at scale.",
        right: "I focus on: Engineering what actually works for realistic business growth. No noise. Just systems.",
    },
    features: [
        {
            id: "sdr",
            title: "Lead & Outreach Infrastructure",
            desc: "Autonomous B2B Outreach using Clay + Instantly + n8n. Sourcing the right people, not spamming.",
            type: "DiagnosticShuffler"
        },
        {
            id: "crm",
            title: "Autonomous Agent CRMs",
            desc: "Centralized company brains handling automated lead response and AI Voice Agents that book calls.",
            type: "TelemetryTypewriter"
        },
        {
            id: "authority",
            title: "Agency-Partner Fulfillment",
            desc: "Technical backbone for Web & Marketing Agencies. Fulfilling the 'hard tech' while you scale strategy.",
            type: "CursorScheduler"
        }
    ],
    agenticLab: [
        {
            title: "Outreach & Sourcing",
            client: "MyStarUp.com",
            desc: "Investor-Sniper Engine capturing high-net-worth signals during liquidity events via Clay & Instantly.",
        },
        {
            title: "Functioning CRM Engine",
            client: "Pest Control & Mortgage",
            desc: "Reduced lead response from hours to <30 seconds. 40% increase in conversion with AI Voice booking.",
        },
        {
            title: "Infinite Content Machine",
            client: "Personal Brands",
            desc: "Automating raw drive folder uploads into optimized, multi-platform faceless Reels and YouTube content.",
        },
        {
            title: "Agency Fulfillment",
            client: "Webflow & Ad Agencies",
            desc: "Acting as the technical co-founder, building the n8n workflows that fulfill their client promises at scale.",
        }
    ],
    protocolSteps: [
        { title: "Audit & Friction Mapping", desc: "Identifying the manual 'grunt work' leaking revenue and plotting the automated path." },
        { title: "Agentic Build-out", desc: "Deploying high-fidelity n8n workflows, CRM linkages, and AI Voice Agents." },
        { title: "The 100x Feedback Loop", desc: "Continuous optimization based on real ROI data. I scale what works deterministically." }
    ],
    heroNodes: [
        { tools: ["make", "n8n"], names: "VEO 3 + N8N", result: "100% HANDS-FREE VIRAL VIDEOS" },
        { tools: ["notion", "n8n"], names: "FAN AI + Notion + N8N", result: "1 VIDEO = 30 DAYS CONTENT" },
        { tools: ["salesforce", "n8n"], names: "Clay + Instantly AI + n8n", result: "BOOK 15 MEETINGS ON AUTOPILOT" },
        { tools: ["notion", "make"], names: "Notion + make.com", result: "12 APPS. ONE BRAIN." },
        { tools: ["airtable", "make"], names: "Gohighlevel + make.com", result: "ONBOARD 50 CLIENTS IN 10 MIN" },
        { tools: ["n8n", "hubspot"], names: "n8n + Hubspot", result: "DELETE 80% OF SUPPORT TICKETS" },
        { tools: ["zillow", "n8n"], names: "Zillow/Airbnb + n8n", result: "AI FINDS $2.4M IN DEALS" },
        { tools: ["n8n", "instagram", "facebook"], names: "N8N + IG/FB", result: "CLONE WINNING ADS IN 60 SEC" },
        { tools: ["make", "slack"], names: "MAKE.COM + Slack", result: "AI GRADES EVERY SALES CALL" },
        { tools: ["linkedin", "maildotru"], names: "Linkedin + Instantly AI", result: "INBOUND LEADS ON AUTOPILOT" },
        { tools: ["claude", "anthropic", "n8n"], names: "Agentic AI + Skool", result: "10,000 MEMBERS. 0 MODERATORS." },
        { tools: ["googlesheets", "make"], names: "Google Sheet + make.com", result: "HIRE TOP 1% WITH 0 SCREENING" },
        { tools: ["googlemaps", "n8n"], names: "Googlemaps + n8n", result: "#1 ON GOOGLE MAPS" },
        { tools: ["notion", "claude", "anthropic"], names: "Notion + Agentic AI", result: "YOUR AGENCY ON FULL AUTO" },
        { tools: ["youtube", "tiktok", "instagram"], names: "YT + Tiktok + IG", result: "YOUR 4K CASH-COW CHANNEL" },
        { tools: ["elevenlabs", "calendly"], names: "ElevenLabs + Calendly", result: "24/7 AI VOICE APPOINTMENTS" },
        { tools: ["httpie", "make"], names: "HTTP + MAKE.COM", result: "CONNECT APPS THAT WON'T TALK" },
        { tools: ["shopify", "gmail", "n8n"], names: "Shopify + Email + n8n", result: "RECOVER $14K IN ABANDONED CARTS" },
        { tools: ["spotify", "youtube", "n8n"], names: "Spotify + Youtube + n8n", result: "ONE PODCAST = MEDIA EMPIRE" },
        { tools: ["slack", "gmail", "n8n"], names: "Slack + Email + n8n", result: "ZERO STATUS MEETINGS. JUST RESULTS." }
    ],
    companies: [
        { name: "Reflect Orbital", url: "https://reflectorbital.com", logo: "https://cdn.prod.website-files.com/68d43f0d2d1a2fc53bee4fa1/695d7c4dd912a6787247c588_reflect_logo_white.svg" },
        { name: "MyStarUp", url: "https://mystarup.com", logo: "" },
        { name: "Trend Hijacking", url: "https://trendhijacking.com", logo: "https://framerusercontent.com/images/tyQerv9kcEmoJ5a8BbJyx55D0jQ.png?scale-down-to=512&lossless=1&width=1888&height=181", invert: true },
        { name: "Growlocol", url: "mailto:judeolaboboye@gmail.com", logo: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/a5302831-0865-4245-b358-31b321d42a47/Logo_Ideas_For_Grow_Locol/w=1920,quality=90,fit=scale-down" },
        { name: "SalesLeadIT", url: "https://salesleadit.com", logo: "https://www.salesleadit.com/wp-content/uploads/2023/12/logo-e1709706643167.png" },
        { name: "Poseidon Aerospace", url: "https://poseidonaero.com", logo: "https://framerusercontent.com/images/cHn55SGUaRvPZQ6i7mLqD5oNGM0.png?scale-down-to=2048&lossless=1&width=6667&height=1028", invert: true },
        { name: "Sunburnt Space", url: "https://sunburntspace.com.au", logo: "https://sunburntspace.com.au/wp-content/uploads/2023/12/Sunburnt-Space-Co_logo_col_wht@4x.png" },
        { name: "Zipline", url: "https://zipline.com", logo: "https://firebasestorage.googleapis.com/v0/b/standards-site-beta.appspot.com/o/documents%2F8ftfgpz8uuw%2F2jdhsym7pmr%2Fhorizontal_black_1680025855220_2500x2500.png?alt=media&token=rb8o0zcdlb0", invert: true },
        { name: "5th Weapon", url: "https://fifthweapon.com", logo: "https://assets.cdn.filesafe.space/F131TVOipQPj1kkmIzWT/media/3405d89e-0c22-4604-bb2e-3198b06c81c3.png" }
    ],
    processSteps: [
        { step: "01", title: "Discovery", desc: "I schedule a call and talk about what your idea of Solution is." },
        { step: "02", title: "Strategy", desc: "After Bringing together the problems, I address it and list action steps to build solutions." },
        { step: "03", title: "Action", desc: "I kickstart the project together with a guarantee of Daily updates on the work progress." },
        { step: "04", title: "Delivery", desc: "Once Built, A dedicated Loom video demonstrating how the Automation works and SOPs to follow." },
        { step: "05", title: "Ongoing Support", desc: "Training Sales & Team on a Zoom call, OR Ongoing Maintenance for 1 month free." },
        { step: "06", title: "Compulsory Perk", desc: "A personalized email once monthly on how to step up operations with AI." }
    ],
    aboutMe: {
        title: "Creator, engineer, and architect.",
        desc: "Merging marketing, psychology, and creativity thinking to grow and improve business through the use of AI. My favorite quote is that any problem can be solved if we work together. My job is to bring the technical clarity; yours is to bring the vision. Let's make it happen."
    },
    links: {
        calendar: "https://cal.com/nirvanaxjude",
        agency_cal: "https://cal.com/nirvanaxjude/45mins",
        business_cal: "https://cal.com/nirvanaxjude/30-min-meeting",
        upwork: "https://upwork.com/freelancers/olaboboyejude",
        portfolio: "https://judeolaboboye.super.site",
    }
};

const MagneticButton = ({ children, className = '', onClick, href }) => {
    const Element = href ? 'a' : 'button';
    return (
        <Element
            href={href}
            onClick={onClick}
            className={`relative overflow-hidden magnetic-btn btn-container px-8 py-4 rounded-full font-ui font-medium flex items-center gap-2 group ${className}`}
        >
            <span className="btn-hover-layer bg-white/10"></span>
            <span className="relative z-10 flex items-center gap-2">{children}</span>
        </Element>
    );
};

const Navbar = () => {
    const navRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            ScrollTrigger.create({
                start: 'top -100',
                end: 99999,
                onToggle: (self) => {
                    if (self.isActive) {
                        gsap.to(navRef.current, {
                            backgroundColor: 'rgba(13, 13, 18, 0.6)',
                            backdropFilter: 'blur(16px)',
                            borderColor: 'rgba(250, 248, 245, 0.1)',
                            duration: 0.3
                        });
                    } else {
                        gsap.to(navRef.current, {
                            backgroundColor: 'transparent',
                            backdropFilter: 'blur(0px)',
                            borderColor: 'transparent',
                            duration: 0.3
                        });
                    }
                }
            });
        });
        return () => ctx.revert();
    }, []);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 py-8 lg:py-10 px-6 flex justify-center pointer-events-none">
            <div
                ref={navRef}
                className="pointer-events-auto rounded-full border border-transparent px-8 py-4 lg:px-10 flex items-center gap-12 lg:gap-16 transition-colors shadow-2xl"
            >
                <div className="font-ui font-bold text-xl md:text-2xl tracking-tight">{SITE_CONTENT.brand.logo}</div>
                <div className="hidden md:flex items-center gap-8 text-base font-medium text-ivory/80">
                    <a href="#manifesto" className="hover:text-champagne transition-colors transform hover:-translate-y-[1px]">The Reality</a>
                    <a href="#features" className="hover:text-champagne transition-colors transform hover:-translate-y-[1px]">The Engine</a>
                    <a href="#lab" className="hover:text-champagne transition-colors transform hover:-translate-y-[1px]">The Lab</a>
                    <a href="#protocol" className="hover:text-champagne transition-colors transform hover:-translate-y-[1px]">Protocol</a>
                </div>
                <a
                    href={SITE_CONTENT.links.calendar}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-bold text-obsidian bg-champagne px-8 py-3 rounded-full hover:scale-105 transition-transform magnetic-btn"
                >
                    Consult
                </a>
            </div>
        </nav>
    );
};

const HeroNodeCanvas = () => {
    const canvasRef = useRef(null);

    // Define central "Anchor" applications (the heavy lifters)
    const ANCHORS = [
        { slug: 'n8n', color: 'rgba(250, 100, 100, 0.9)' },
        { slug: 'make', color: 'rgba(150, 100, 250, 0.9)' },
        { slug: 'claude', color: 'rgba(200, 150, 100, 0.9)' },
        { slug: 'anthropic', color: 'rgba(200, 150, 100, 0.9)' },
        { slug: 'notion', color: 'rgba(200, 200, 200, 0.9)' },
        { slug: 'hubspot', color: 'rgba(250, 150, 50, 0.9)' }
    ];

    // Define smaller "Satellite" applications that connect to anchors
    const SATELLITES = [
        'youtube', 'tiktok', 'instagram', 'facebook', 'slack', 'gmail',
        'calendly', 'elevenlabs', 'salesforce', 'zendesk', 'stripe', 'discord', 'shopify'
    ];

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d', { alpha: true });
        let animationFrameId;

        const setSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        setSize();
        window.addEventListener('resize', setSize);

        const loadedIcons = {};
        const allIcons = [...ANCHORS.map(a => a.slug), ...SATELLITES];

        allIcons.forEach(slug => {
            if (!loadedIcons[slug]) {
                const img = new Image();
                img.src = `https://cdn.simpleicons.org/${slug}/cccccc`;
                loadedIcons[slug] = img;
            }
        });

        // Initialize Central Anchors
        const anchors = ANCHORS.map((anchor, i) => ({
            ...anchor,
            x: (canvas.width / ANCHORS.length) * i + (canvas.width / ANCHORS.length) / 2,
            y: canvas.height / 2 + (Math.random() - 0.5) * 200,
            vx: (Math.random() - 0.5) * 0.4,
            vy: (Math.random() - 0.5) * 0.4,
            radius: 4,
            isAnchor: true
        }));

        // Initialize Satellite Nodes orbiting around
        const satellites = Array.from({ length: 30 }, () => ({
            slug: SATELLITES[Math.floor(Math.random() * SATELLITES.length)],
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 1.5,
            vy: (Math.random() - 0.5) * 1.5,
            radius: 2,
            isAnchor: false,
            targetAnchor: anchors[Math.floor(Math.random() * anchors.length)] // Assign to a random anchor
        }));

        const nodes = [...anchors, ...satellites];

        let mouse = { x: -1000, y: -1000 };
        const onMouseMove = (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };
        window.addEventListener('mousemove', onMouseMove);

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            nodes.forEach(node => {
                // Move nodes
                node.x += node.vx;
                node.y += node.vy;

                // Bounce off edges
                if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
                if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

                // Draw base dot
                ctx.fillStyle = node.isAnchor ? node.color : 'rgba(250, 248, 245, 0.3)';
                ctx.beginPath();
                ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
                ctx.fill();

                // Draw connections between Satellites and their Anchor
                if (!node.isAnchor) {
                    const dx = node.targetAnchor.x - node.x;
                    const dy = node.targetAnchor.y - node.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 300) {
                        ctx.beginPath();
                        ctx.moveTo(node.x, node.y);
                        ctx.lineTo(node.targetAnchor.x, node.targetAnchor.y);
                        ctx.strokeStyle = `rgba(250, 248, 245, ${0.1 - dist / 3000})`;
                        ctx.stroke();
                    }
                }

                // Mouse Interaction Logic
                if (mouse.x > -500) {
                    const dx = mouse.x - node.x;
                    const dy = mouse.y - node.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 200) {
                        // Draw connection to mouse
                        ctx.beginPath();
                        ctx.moveTo(node.x, node.y);
                        ctx.lineTo(mouse.x, mouse.y);
                        ctx.strokeStyle = `rgba(201, 168, 76, ${0.3 - dist / 500})`;
                        ctx.lineWidth = 1;
                        ctx.stroke();

                        // IF close enough to mouse, reveal the app icon
                        if (dist < 100) {
                            const img = loadedIcons[node.slug];
                            if (img && img.complete) {
                                const imgSize = node.isAnchor ? 32 : 20;
                                ctx.globalAlpha = node.isAnchor ? 1.0 : 0.7;
                                ctx.drawImage(img, node.x - (imgSize / 2), node.y - (imgSize + 10), imgSize, imgSize);
                                ctx.globalAlpha = 1.0;
                            }
                        }
                    }
                }
            });

            animationFrameId = requestAnimationFrame(draw);
        };
        draw();

        return () => {
            window.removeEventListener('resize', setSize);
            window.removeEventListener('mousemove', onMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-10" />;
};

const Hero = () => {
    const heroRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.fromTo(textRef.current.children,
                { y: 60, opacity: 0 },
                { y: 0, opacity: 1, duration: 1.2, stagger: 0.2, ease: 'power3.out', delay: 0.3 }
            );
        }, heroRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={heroRef} className="relative min-h-[100dvh] w-full flex items-center justify-center pt-48 pb-24 px-6 md:px-16 overflow-hidden bg-obsidian">
            <div className="absolute inset-0 bg-hero-gradient z-0"></div>

            <HeroNodeCanvas />

            <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center" ref={textRef}>
                <p className="font-mono text-champagne mb-8 text-sm md:text-base tracking-widest uppercase bg-champagne/10 px-4 py-2 rounded-full border border-champagne/20 relative z-20">
                    NirvanaXJude | AI Marketing Automation
                </p>

                <h1 className="font-ui font-bold text-6xl md:text-8xl lg:text-9xl tracking-tighter leading-[0.9] mb-6 text-balance text-ivory drop-shadow-lg">
                    {SITE_CONTENT.hero.headline}
                </h1>

                <h2 className="font-drama italic text-4xl md:text-6xl lg:text-7xl text-champagne/90 mb-10 max-w-4xl leading-tight">
                    {SITE_CONTENT.hero.drama}
                </h2>

                <p className="font-ui text-xl md:text-2xl text-ivory/60 max-w-2xl mx-auto mb-16 leading-relaxed text-balance">
                    {SITE_CONTENT.hero.subtext}
                </p>

                <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
                    <MagneticButton
                        href={SITE_CONTENT.links.calendar}
                        className="bg-champagne text-obsidian text-xl px-12 py-6 rounded-full shadow-[0_0_40px_rgba(201,168,76,0.3)]"
                    >
                        {SITE_CONTENT.hero.cta}
                        <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
                    </MagneticButton>
                </div>
            </div>
        </section>
    );
}

const CompaniesMarquee = () => {
    return (
        <section className="py-12 border-y border-ivory/5 bg-[#0A0A0F] overflow-hidden flex flex-col items-center">
            <div className="text-center mb-8">
                <p className="font-mono text-champagne text-xs md:text-sm tracking-widest uppercase">Companies & Agencies in Contact</p>
            </div>

            {/* The infinite scrolling container */}
            <div className="group relative flex w-[200vw] sm:w-[150vw] md:w-[120vw] overflow-hidden">
                <div className="flex w-max animate-marquee space-x-16 md:space-x-24 items-center opacity-80 transition-all duration-700 font-ui text-sm font-semibold pl-16">
                    {/* First Loop inner items */}
                    {SITE_CONTENT.companies.map((company, i) => (
                        <a key={i} href={company.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 hover:scale-105 transition-transform shrink-0">
                            {company.logo ? (
                                <img src={company.logo} alt={company.name} className={`object-contain ${company.invert ? 'brightness-0 invert h-10 md:h-14' : ''} ${company.name === 'Growlocol' || company.name === 'SalesLeadIT' ? 'opacity-100 drop-shadow-md h-16 md:h-24 scale-[1.3] mx-4' : ''} ${!company.invert && company.name !== 'Growlocol' && company.name !== 'SalesLeadIT' ? 'h-8 md:h-12' : ''}`} />
                            ) : (
                                <span className="text-xl md:text-2xl text-ivory tracking-tight whitespace-nowrap">{company.name}</span>
                            )}
                        </a>
                    ))}
                    {/* Second Loop inner items to create seamless infinite scroll without glitch */}
                    {SITE_CONTENT.companies.map((company, i) => (
                        <a key={i + 100} href={company.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 hover:scale-105 transition-transform shrink-0">
                            {company.logo ? (
                                <img src={company.logo} alt={company.name} className={`object-contain ${company.invert ? 'brightness-0 invert h-10 md:h-14' : ''} ${company.name === 'Growlocol' || company.name === 'SalesLeadIT' ? 'opacity-100 drop-shadow-md h-16 md:h-24 scale-[1.3] mx-4' : ''} ${!company.invert && company.name !== 'Growlocol' && company.name !== 'SalesLeadIT' ? 'h-8 md:h-12' : ''}`} />
                            ) : (
                                <span className="text-xl md:text-2xl text-ivory tracking-tight whitespace-nowrap">{company.name}</span>
                            )}
                        </a>
                    ))}
                    {/* Third Loop for ultra-wide screens */}
                    {SITE_CONTENT.companies.map((company, i) => (
                        <a key={i + 200} href={company.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 hover:scale-105 transition-transform shrink-0">
                            {company.logo ? (
                                <img src={company.logo} alt={company.name} className={`object-contain ${company.invert ? 'brightness-0 invert h-10 md:h-14' : ''} ${company.name === 'Growlocol' || company.name === 'SalesLeadIT' ? 'opacity-100 drop-shadow-md h-16 md:h-24 scale-[1.3] mx-4' : ''} ${!company.invert && company.name !== 'Growlocol' && company.name !== 'SalesLeadIT' ? 'h-8 md:h-12' : ''}`} />
                            ) : (
                                <span className="text-xl md:text-2xl text-ivory tracking-tight whitespace-nowrap">{company.name}</span>
                            )}
                        </a>
                    ))}
                </div>
            </div>
            <style>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-33.33%); }
                }
                .animate-marquee {
                    animation: marquee 20s linear infinite;
                }
            `}</style>
        </section>
    );
};

const DiagnosticShuffler = () => {
    const [cards, setCards] = React.useState([
        { id: 1, label: "Lead Sourcing" },
        { id: 2, label: "Email Warmup" },
        { id: 3, label: "Dynamic Personalization" }
    ]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCards(prev => {
                const newCards = [...prev];
                const last = newCards.pop();
                newCards.unshift(last);
                return newCards;
            });
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-48 bg-obsidian/50 rounded-[1.5rem] border border-ivory/5 flex flex-col items-center justify-center overflow-hidden">
            {cards.map((card, i) => {
                const isTop = i === 0;
                const isMiddle = i === 1;
                const isBottom = i === 2;

                let yStyle = 0;
                let scaleStyle = 1;
                let opacityStyle = 1;
                let zIndex = 30;

                if (isTop) {
                    yStyle = -10;
                    scaleStyle = 1;
                    zIndex = 30;
                } else if (isMiddle) {
                    yStyle = 10;
                    scaleStyle = 0.9;
                    opacityStyle = 0.6;
                    zIndex = 20;
                } else if (isBottom) {
                    yStyle = 30;
                    scaleStyle = 0.8;
                    opacityStyle = 0.3;
                    zIndex = 10;
                }

                return (
                    <div
                        key={card.id}
                        className="absolute bg-slate/80 border border-ivory/10 px-6 py-4 rounded-xl shadow-lg font-ui font-medium text-sm text-ivory/90 w-5/6 flex justify-between items-center"
                        style={{
                            transform: `translateY(${yStyle}px) scale(${scaleStyle})`,
                            opacity: opacityStyle,
                            zIndex: zIndex,
                            transition: 'all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)'
                        }}
                    >
                        <div className="flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-champagne"></span>
                            {card.label}
                        </div>
                        <CheckCircle2 size={16} className="text-champagne/70" />
                    </div>
                );
            })}
        </div>
    );
};

const TelemetryTypewriter = () => {
    const [text, setText] = React.useState('');
    const [cursorPhase, setCursorPhase] = React.useState(true);

    const messages = [
        "Receiving transmission...",
        "Incoming Call...",
        "AI Agent Active...",
        "Objection Handled...",
        "Appointment Booked."
    ];

    useEffect(() => {
        let currentMsgIdx = 0;
        let currentCharIdx = 0;
        let isDeleting = false;
        let typingSpeed = 50;
        let typingTimeout;

        const type = () => {
            const currentMsg = messages[currentMsgIdx];

            if (isDeleting) {
                setText(currentMsg.substring(0, currentCharIdx - 1));
                currentCharIdx--;
                typingSpeed = 30;
            } else {
                setText(currentMsg.substring(0, currentCharIdx + 1));
                currentCharIdx++;
                typingSpeed = 50 + Math.random() * 50;
            }

            if (!isDeleting && currentCharIdx === currentMsg.length) {
                typingSpeed = 2000;
                isDeleting = true;
            } else if (isDeleting && currentCharIdx === 0) {
                isDeleting = false;
                currentMsgIdx = (currentMsgIdx + 1) % messages.length;
                typingSpeed = 500;
            }

            typingTimeout = setTimeout(type, typingSpeed);
        };

        typingTimeout = setTimeout(type, 1000);

        const cursorInterval = setInterval(() => {
            setCursorPhase(p => !p);
        }, 500);

        return () => {
            clearTimeout(typingTimeout);
            clearInterval(cursorInterval);
        };
    }, []);

    return (
        <div className="relative w-full h-48 bg-obsidian/50 rounded-[1.5rem] border border-ivory/5 flex flex-col items-start justify-center p-6 overflow-hidden">
            <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-champagne opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-champagne"></span>
                </span>
                <span className="font-mono text-[10px] text-champagne tracking-widest uppercase">Live Feed</span>
            </div>
            <div className="font-mono text-sm mt-4 text-ivory/80">
                <span className="text-ivory/40 mr-2">sys&gt;</span>
                {text}
                <span className={`inline-block w-2.5 h-4 ml-1 align-middle bg-champagne transition-opacity duration-100 ${cursorPhase ? 'opacity-100' : 'opacity-0'}`}></span>
            </div>
        </div>
    );
};

const CursorScheduler = () => {
    const containerRef = useRef(null);
    const cursorRef = useRef(null);
    const [activeDay, setActiveDay] = React.useState(null);

    const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

    useEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline({ repeat: -1, delay: 1 });

            const dayCells = gsap.utils.toArray('.day-cell');
            if (dayCells.length === 0) return;

            const targetDayIdx = Math.floor(Math.random() * 5) + 1;
            const targetCell = dayCells[targetDayIdx];

            tl.set(cursorRef.current, { x: 50, y: 150, opacity: 0 })
                .to(cursorRef.current, { opacity: 1, duration: 0.3 })
                .to(cursorRef.current, {
                    x: () => targetCell.offsetLeft + 10,
                    y: () => targetCell.offsetTop + 10,
                    duration: 1.5,
                    ease: 'power2.inOut'
                })
                .to(cursorRef.current, {
                    scale: 0.8, duration: 0.1, yoyo: true, repeat: 1,
                    onStart: () => setActiveDay(targetDayIdx)
                })
                .to(cursorRef.current, { x: 180, y: 120, duration: 1, delay: 0.5, ease: 'power2.inOut' })
                .to(cursorRef.current, { scale: 0.8, duration: 0.1, yoyo: true, repeat: 1 })
                .to(cursorRef.current, { opacity: 0, duration: 0.3, delay: 0.5, onComplete: () => setActiveDay(null) });

        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="relative w-full h-48 bg-obsidian/50 rounded-[1.5rem] border border-ivory/5 p-6 flex flex-col justify-center overflow-hidden">
            <div className="flex justify-between items-center w-full max-w-[200px] mb-6">
                {days.map((day, i) => (
                    <div
                        key={i}
                        className={`day-cell w-6 h-6 rounded flex items-center justify-center font-mono text-[10px] transition-colors duration-300 ${activeDay === i ? 'bg-champagne text-obsidian font-bold' : 'bg-white/5 text-ivory/40'
                            }`}
                    >
                        {day}
                    </div>
                ))}
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 w-max ml-auto relative z-10">
                <span className="font-ui text-xs text-ivory/80 flex items-center gap-2">
                    <CheckCircle2 size={12} className={activeDay !== null ? 'text-champagne' : 'text-ivory/40'} />
                    Pipeline Updated
                </span>
            </div>

            <div
                ref={cursorRef}
                className="absolute z-50 pointer-events-none"
                style={{ opacity: 0, top: 0, left: 0 }}
            >
                <MousePointer2 size={24} fill="white" className="text-white drop-shadow-md -rotate-12" />
            </div>
        </div>
    );
};

const Features = () => {
    return (
        <section id="features" className="py-40 px-6 md:px-16 bg-obsidian relative">
            <div className="max-w-7xl mx-auto">
                <div className="mb-24">
                    <h2 className="font-mono text-champagne mb-6 tracking-widest uppercase text-sm">Functional Artifacts</h2>
                    <h3 className="font-drama italic text-5xl md:text-7xl lg:text-8xl text-ivory mb-8">The Trinity</h3>
                    <p className="font-ui text-xl md:text-2xl text-ivory/70 max-w-3xl text-balance border-l-2 border-champagne/30 pl-6">
                        Three deterministic systems built to capture leads, retain clients, and establish unshakeable authority.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    {/* Shuffler */}
                    <div className="bg-[#121218] border border-ivory/5 rounded-[3rem] p-10 xl:p-12 min-h-[450px] hover:-translate-y-4 hover:border-champagne/20 transition-all duration-500 flex flex-col shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-40 h-40 bg-champagne/5 rounded-full blur-[60px]"></div>
                        <h4 className="font-ui font-bold text-3xl mb-6 relative z-10">{SITE_CONTENT.features[0].title}</h4>
                        <p className="text-ivory/60 font-ui text-lg leading-relaxed mb-10 flex-grow relative z-10">{SITE_CONTENT.features[0].desc}</p>
                        <div className="mt-auto pointer-events-none relative z-10"><DiagnosticShuffler /></div>
                    </div>

                    {/* Typewriter */}
                    <div className="bg-[#121218] border border-ivory/5 rounded-[3rem] p-10 xl:p-12 min-h-[450px] hover:-translate-y-4 hover:border-champagne/20 transition-all duration-500 flex flex-col shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-40 h-40 bg-champagne/5 rounded-full blur-[60px]"></div>
                        <h4 className="font-ui font-bold text-3xl mb-6 relative z-10">{SITE_CONTENT.features[1].title}</h4>
                        <p className="text-ivory/60 font-ui text-lg leading-relaxed mb-10 flex-grow relative z-10">{SITE_CONTENT.features[1].desc}</p>
                        <div className="mt-auto pointer-events-none relative z-10"><TelemetryTypewriter /></div>
                    </div>

                    {/* Scheduler */}
                    <div className="bg-[#121218] border border-ivory/5 rounded-[3rem] p-10 xl:p-12 min-h-[450px] hover:-translate-y-4 hover:border-champagne/20 transition-all duration-500 flex flex-col shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-40 h-40 bg-champagne/5 rounded-full blur-[60px]"></div>
                        <h4 className="font-ui font-bold text-3xl mb-6 relative z-10">{SITE_CONTENT.features[2].title}</h4>
                        <p className="text-ivory/60 font-ui text-lg leading-relaxed mb-10 flex-grow relative z-10">{SITE_CONTENT.features[2].desc}</p>
                        <div className="mt-auto pointer-events-none relative z-10"><CursorScheduler /></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Manifesto = () => {
    const sectionRef = useRef(null);
    const leftRef = useRef(null);
    const rightRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from(leftRef.current, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                },
                y: 30, opacity: 0, duration: 1, ease: 'power3.out'
            });
            gsap.from(rightRef.current, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 70%',
                },
                y: 40, opacity: 0, duration: 1.2, ease: 'power3.out'
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="manifesto" ref={sectionRef} className="py-40 px-6 md:px-16 bg-[#0A0A0F] border-y border-ivory/5">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div ref={leftRef}>
                    <p className="font-ui text-2xl md:text-3xl text-ivory/50 leading-relaxed font-light">
                        {SITE_CONTENT.manifesto.left}
                    </p>
                </div>
                <div ref={rightRef}>
                    <p className="font-drama italic text-4xl md:text-5xl lg:text-6xl text-ivory leading-tight">
                        I focus on: Agentic Sales SDRs, automated CRM hygiene, and 24/7 Voice Agents. <span className="text-champagne">No noise. Just systems.</span>
                    </p>
                </div>
            </div>
        </section>
    );
};

const Protocol = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            const cards = gsap.utils.toArray('.protocol-card');

            cards.forEach((card, i) => {
                const isLast = i === cards.length - 1;

                // Animate card when next card comes in (scale, blur, fade)
                if (!isLast) {
                    gsap.to(card, {
                        scale: 0.92,
                        opacity: 0.3,
                        filter: "blur(10px)",
                        ease: "none",
                        scrollTrigger: {
                            trigger: cards[i + 1],
                            start: () => `top top+=${120 + ((i + 1) * 20)}`,
                            end: () => `top top-=${window.innerHeight * 0.5}`,
                            scrub: true,
                            invalidateOnRefresh: true
                        }
                    });
                }
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="protocol" ref={sectionRef} className="bg-obsidian py-32 relative px-6 md:px-12">
            <div className="text-center mb-16 w-full max-w-3xl mx-auto relative z-10">
                <h2 className="font-mono text-champagne mb-4 tracking-widest uppercase text-sm">Execution Engine</h2>
                <h3 className="font-drama italic text-5xl md:text-7xl text-ivory tracking-tight">Sticky Stacking Archive</h3>
            </div>

            <div className="relative w-full max-w-5xl mx-auto flex flex-col items-center justify-start gap-12 pb-[30vh]">
                {SITE_CONTENT.protocolSteps.map((step, i) => (
                    <div
                        key={i}
                        className="protocol-card sticky w-full bg-[#16161C] border border-ivory/10 rounded-[4rem] p-12 md:p-16 flex flex-col md:flex-row gap-12 items-center justify-between shadow-2xl will-change-transform"
                        style={{
                            top: `${120 + i * 20}px`,
                            zIndex: i + 1
                        }}
                    >
                        <div className="flex-1">
                            <span className="font-mono text-5xl md:text-7xl text-ivory/10 font-bold mb-6 block">0{i + 1}</span>
                            <h4 className="font-ui font-bold text-3xl md:text-5xl text-ivory mb-6 tracking-tight">{step.title}</h4>
                            <p className="font-ui text-xl text-ivory/70 leading-relaxed max-w-lg">{step.desc}</p>
                        </div>
                        <div className="w-full md:w-1/2 h-64 bg-obsidian/40 rounded-[3rem] border border-ivory/5 flex items-center justify-center overflow-hidden relative">
                            {/* Unique canvas/SVG placeholders */}
                            {i === 0 && (
                                <div className="text-champagne animate-spin-slow scale-150">
                                    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="50" cy="50" r="40" strokeDasharray="10 5" />
                                        <circle cx="50" cy="50" r="30" strokeDasharray="5 10" />
                                        <circle cx="50" cy="50" r="20" />
                                    </svg>
                                </div>
                            )}
                            {i === 1 && (
                                <div className="w-full h-full relative p-6 flex flex-col justify-center gap-6">
                                    {Array.from({ length: 4 }).map((_, j) => (
                                        <div key={j} className="w-full h-2 bg-white/5 rounded-full overflow-hidden relative">
                                            <div className="absolute top-0 left-0 h-full w-1/3 bg-champagne animate-[slide_3s_ease-in-out_infinite]" style={{ animationDelay: `${j * 0.2}s` }}></div>
                                        </div>
                                    ))}
                                </div>
                            )}
                            {i === 2 && (
                                <div className="w-full flex items-center justify-center scale-125">
                                    <svg className="w-full h-32" viewBox="0 0 400 100" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                                        <path className="text-champagne animate-[dash_2s_linear_infinite]" d="M 0 50 L 100 50 L 130 10 L 170 90 L 210 50 L 400 50" strokeDasharray="400" strokeDashoffset="400" />
                                    </svg>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            <style>{`
                .animate-spin-slow {
                    animation: spin 10s linear infinite;
                }
                @keyframes slide {
                    0% { transform: translateX(-100%); }
                    50% { transform: translateX(300%); }
                    100% { transform: translateX(-100%); }
                }
                @keyframes dash {
                    to { stroke-dashoffset: 0; }
                }
            `}</style>
        </section>
    );
};

const AgenticLab = () => {
    return (
        <section id="lab" className="bg-obsidian py-40 px-6">
            <div className="text-center mb-24 max-w-4xl mx-auto">
                <h2 className="font-mono text-champagne mb-4 tracking-widest uppercase text-sm">The Agentic Lab</h2>
                <h3 className="font-drama italic text-5xl md:text-7xl text-ivory mb-8">Proven Architectures.</h3>
                <p className="font-ui text-xl md:text-2xl text-ivory/60 text-balance">Trusted by frontier tech and high-ticket service industries.</p>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                {SITE_CONTENT.agenticLab.map((project, i) => (
                    <div key={i} className="group relative bg-[#121218] rounded-[4rem] p-12 lg:p-16 border border-ivory/5 hover:border-champagne/30 transition-all duration-500 overflow-hidden cursor-pointer">
                        <div className="absolute top-0 right-0 w-80 h-80 bg-champagne/5 rounded-full blur-[100px] group-hover:bg-champagne/15 transition-colors pointer-events-none transform translate-x-20 -translate-y-20"></div>
                        <h4 className="font-mono text-champagne text-xs md:text-sm tracking-widest uppercase mb-6 flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-champagne animate-pulse"></span>
                            {project.client}
                        </h4>
                        <h5 className="font-ui font-bold text-3xl md:text-5xl text-ivory mb-6 tracking-tight">{project.title}</h5>
                        <p className="font-ui text-lg md:text-xl text-ivory/70 leading-relaxed">{project.desc}</p>

                        <div className="mt-14 flex items-center gap-4 text-champagne font-mono text-sm opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-500 relative z-10">
                            <span>Inspect Instance</span>
                            <ArrowRight size={18} />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

const ProcessSteps = () => {
    const [activeStep, setActiveStep] = React.useState(2);

    const images = [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800",
        "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800",
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800",
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800",
        "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800",
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800"
    ];

    return (
        <section className="py-32 px-6 md:px-16 bg-[#0E0E14] border-t border-ivory/5 relative font-ui">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20">
                    <h2 className="font-mono text-champagne mb-4 tracking-widest uppercase text-sm">Step-by-Step</h2>
                    <h3 className="font-drama italic text-5xl md:text-6xl text-ivory mb-6 max-w-2xl leading-[1.1]">How I deliver the best of my services.</h3>
                </div>

                <div className="flex flex-col gap-4">
                    {SITE_CONTENT.processSteps.map((item, i) => {
                        const isActive = activeStep === i;
                        return (
                            <div
                                key={i}
                                onMouseEnter={() => setActiveStep(i)}
                                className={`group flex flex-col md:flex-row items-start md:items-center justify-between rounded-3xl transition-all duration-500 cursor-pointer overflow-hidden relative ${isActive ? 'bg-[#FF5B00] py-8 md:py-10 px-8 md:px-12 shadow-2xl z-20' : 'bg-[#121218] hover:bg-[#1A1A22] py-6 px-8 z-10'
                                    }`}
                            >
                                <div className="flex items-center gap-8 md:gap-16 relative z-10 w-full md:w-1/2">
                                    <span className={`font-mono text-4xl md:text-5xl font-bold flex shrink-0 items-center justify-center w-16 ${isActive ? 'text-white' : 'text-white/60'}`}>
                                        <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-12 rounded-full ${isActive ? 'bg-white/30' : 'bg-[#FF5B00]'}`}></div>
                                        {item.step}
                                    </span>
                                    <div className="flex flex-col gap-2">
                                        <h4 className={`font-bold text-2xl md:text-3xl ${isActive ? 'text-white' : 'text-white/80'}`}>
                                            {item.title}
                                        </h4>
                                        <p className={`text-base md:text-lg hidden md:block leading-relaxed max-w-sm ${isActive ? 'text-white/95' : 'text-white/50'}`}>
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                                <p className={`text-base md:text-lg md:hidden leading-relaxed mt-4 w-full z-10 transition-colors duration-500 ${isActive ? 'text-white/95' : 'text-white/50'}`}>
                                    {item.desc}
                                </p>

                                {item.title === 'Compulsory Perk' && !isActive && (
                                    <span className="font-mono text-[#FF5B00] text-sm md:text-base uppercase tracking-widest ml-auto md:mr-10 items-center hidden lg:flex font-bold">Bonus Value</span>
                                )}
                                {item.title === 'Compulsory Perk' && isActive && (
                                    <span className="font-mono text-white text-sm md:text-base uppercase tracking-widest ml-auto md:mr-10 items-center hidden lg:flex relative z-10 bg-black/20 px-4 py-2 rounded-full font-bold">Bonus Value</span>
                                )}

                                <div className={`w-full md:w-[450px] h-48 md:h-full absolute right-0 top-0 transition-opacity duration-700 pointer-events-none rounded-r-3xl overflow-hidden ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#FF5B00] via-[#FF5B00]/80 to-transparent z-10"></div>
                                    <img src={images[i]} alt={item.title} className="w-full h-full object-cover mix-blend-multiply opacity-80" />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

const FAQSection = () => {
    const [openIndex, setOpenIndex] = React.useState(null);
    const faqs = [
        { q: "How long does a system building project take?", a: "I work with actual timelines. Workflows and automations can take between 1 day to 9 days, and even as far as 21 days for full enterprise level Agents, depending on CRM complexity." },
        { q: "Do you offer payment plans?", a: "Yes. Projects are typically split 50% on kickoff and 50% upon successful delivery and Loom documentation handover." },
        { q: "Can you also manage the operations ongoing?", a: "Yes, I offer ongoing maintenance and 'Agency Partner' retainer models where I act as your technical co-founder handling the systems while you focus on sales." },
        { q: "Do you work with international clients?", a: "Absolutely. I build architectures for frontier tech startups and agencies globally, ensuring compliance and latency thresholds are met regardless of geography." },
        { q: "What do I need to get started?", a: "Just book a protocol call. Bring your current bottleneck—whether it's lead flow, support tickets, or manual fulfillment—and I'll map the automated solution within 30 minutes." }
    ];

    return (
        <section className="py-32 px-6 md:px-16 bg-[#0E0E14] border-t border-ivory/5">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
                <div className="lg:w-2/5 flex flex-col justify-start">
                    <h2 className="font-mono text-[#FF5B00] mb-6 tracking-widest uppercase text-sm md:text-base">Frequently Asked Questions</h2>
                    <h3 className="font-ui font-bold tracking-tight text-5xl md:text-6xl text-white mb-12 leading-[1.1]">Answers to Common Questions.</h3>
                    <div className="flex">
                        <MagneticButton href={SITE_CONTENT.links.calendar} className="bg-white hover:bg-ivory text-black rounded-full text-base font-semibold px-8 py-4 w-max flex items-center justify-between gap-6 shadow-xl transition-colors">
                            <span className="bg-[#FF5B00] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold absolute left-2"><ArrowRight size={16} /></span>
                            <span className="ml-10">Contact me</span>
                        </MagneticButton>
                    </div>
                </div>

                <div className="lg:w-3/5 flex flex-col gap-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-[#121218] border border-white/5 rounded-3xl overflow-hidden cursor-pointer hover:bg-[#1A1A22] transition-colors"
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        >
                            <div className="p-8 flex justify-start items-center gap-6">
                                <span className={`text-white/60 transition-transform duration-300 font-mono text-2xl w-6 flex items-center justify-center ${openIndex === index ? 'rotate-45' : ''}`}>+</span>
                                <h4 className="font-ui font-semibold text-lg md:text-xl text-white">{faq.q}</h4>
                            </div>
                            <div className={`px-8 pl-20 overflow-hidden transition-all duration-300 ${openIndex === index ? 'pb-8 max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                                <p className="font-ui text-white/60 leading-relaxed text-balance text-base">{faq.a}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Callout = () => {
    return (
        <section className="py-40 px-6 md:px-16 bg-[#0A0A0F] border-t border-ivory/5 flex justify-center relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-px bg-gradient-to-r from-transparent via-champagne/30 to-transparent"></div>

            <div className="max-w-5xl w-full bg-[#16161C] border border-ivory/10 rounded-[4rem] p-16 md:p-24 text-center relative overflow-hidden group shadow-2xl">
                {/* Glow Effects */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-champagne/5 via-transparent to-transparent opacity-50 pointer-events-none"></div>
                <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-champagne/10 blur-[100px] rounded-full group-hover:bg-champagne/20 transition-all duration-700 pointer-events-none"></div>

                <h4 className="font-mono text-champagne mb-6 tracking-widest uppercase text-sm relative z-10 flex items-center justify-center gap-3">
                    <span className="w-8 h-px bg-champagne/50"></span>
                    The 100x Guarantee
                    <span className="w-8 h-px bg-champagne/50"></span>
                </h4>

                <h3 className="font-drama italic text-5xl md:text-7xl lg:text-8xl text-ivory mb-8 relative z-10 leading-[1.1] text-balance">
                    Building an AI Centered Business in the realistic part.
                </h3>

                <p className="font-ui text-xl md:text-3xl text-ivory/80 max-w-3xl mx-auto mb-16 relative z-10 leading-relaxed text-balance">
                    {SITE_CONTENT.hero.roi} <br className="hidden md:block" />
                    Anything is possible with AI and we just have to think creative together.
                </p>

                <div className="relative z-10 flex justify-center">
                    <MagneticButton
                        href={SITE_CONTENT.links.calendar}
                        className="bg-champagne text-obsidian text-xl md:text-2xl px-14 py-8 rounded-full shadow-[0_0_50px_rgba(201,168,76,0.25)]"
                    >
                        Secure an Architectural Consult
                        <ArrowRight size={28} className="group-hover:translate-x-2 transition-transform" />
                    </MagneticButton>
                </div>
            </div>
        </section>
    );
};

const Footer = () => {
    return (
        <footer className="bg-black pt-24 pb-12 px-6 md:px-16 rounded-t-[4rem] border-t border-ivory/5">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
                <div className="lg:col-span-2">
                    <div className="font-ui font-bold text-3xl mb-4">{SITE_CONTENT.brand.logo}</div>
                    <p className="font-ui text-ivory/60 max-w-sm leading-relaxed mb-8">
                        Engineering autonomous marketing infrastructure for Agencies and SMBs. Reality over Hype.
                    </p>
                    <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-4 py-2 w-max">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                        </span>
                        <span className="font-mono text-xs text-ivory/80 uppercase tracking-widest">System Operational</span>
                    </div>
                </div>

                <div>
                    <h4 className="font-ui font-semibold text-ivory mb-6 tracking-wide">Protocol</h4>
                    <ul className="space-y-4 font-ui text-ivory/60">
                        <li><a href="#features" className="hover:text-champagne transition-colors">The Engine</a></li>
                        <li><a href="#protocol" className="hover:text-champagne transition-colors">Architecture</a></li>
                        <li><a href="#manifesto" className="hover:text-champagne transition-colors">Philosophy</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-ui font-semibold text-ivory mb-6 tracking-wide">Connect</h4>
                    <ul className="space-y-4 font-ui text-ivory/60">
                        <li><a href={SITE_CONTENT.links.calendar} className="hover:text-champagne transition-colors">Book Consult</a></li>
                        <li><a href="#" className="hover:text-champagne transition-colors">Agency Partners</a></li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto pt-8 border-t border-ivory/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-ivory/40">
                <p>&copy; {new Date().getFullYear()} NirvanaXJude. All rights reserved.</p>
                <p>Hand-coded by Jude. No AI-generated fluff here.</p>
            </div>
        </footer>
    );
};

const AboutMe = () => {
    return (
        <section className="py-32 px-6 md:px-16 bg-obsidian border-t border-ivory/5">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16">
                <div className="w-full md:w-1/3 flex justify-center">
                    <div className="group w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-champagne/30 shadow-[0_0_40px_rgba(201,168,76,0.15)] relative">
                        <img src="/jude.png" alt="Jude Olaboboye" className="absolute inset-0 w-full h-full object-cover filter contrast-125 transition-opacity duration-500 group-hover:opacity-0" />
                        <img src="/jude-hover.jpg" alt="Jude Olaboboye Hover" className="absolute inset-0 w-full h-full object-cover filter contrast-125 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    </div>
                </div>
                <div className="w-full md:w-2/3 text-center md:text-left">
                    <h2 className="font-mono text-champagne mb-4 tracking-widest uppercase text-sm">The Architect</h2>
                    <h3 className="font-drama italic text-4xl md:text-5xl text-ivory mb-6">{SITE_CONTENT.aboutMe.title}</h3>
                    <p className="font-ui text-xl text-ivory/70 leading-relaxed text-balance mb-8">
                        {SITE_CONTENT.aboutMe.desc}
                    </p>
                </div>
            </div>
        </section>
    );
};

const StickyWidget = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end gap-4">
            {isOpen && (
                <div className="bg-[#16161C]/90 backdrop-blur-xl border border-champagne/20 rounded-3xl p-6 flex flex-col gap-4 shadow-2xl origin-bottom-right transition-all animate-in fade-in zoom-in-95 duration-200">
                    <h4 className="font-mono text-xs text-champagne uppercase tracking-widest border-b border-ivory/10 pb-2 mb-2">Direct Hire / Inquiry</h4>
                    <a href={SITE_CONTENT.links.upwork} target="_blank" rel="noopener noreferrer" className="font-ui text-sm text-ivory hover:text-champagne transition-colors flex items-center justify-between gap-8">
                        Skip Call & Hire on Upwork <ArrowRight size={14} />
                    </a>
                    <a href={SITE_CONTENT.links.agency_cal} target="_blank" rel="noopener noreferrer" className="font-ui text-sm text-ivory hover:text-champagne transition-colors flex items-center justify-between gap-8">
                        Agency Inquiry (45m) <ArrowRight size={14} />
                    </a>
                    <a href={SITE_CONTENT.links.business_cal} target="_blank" rel="noopener noreferrer" className="font-ui text-sm text-ivory hover:text-champagne transition-colors flex items-center justify-between gap-8">
                        Business Owner Inquiry (30m) <ArrowRight size={14} />
                    </a>
                </div>
            )}

            <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-[#2A2A35] hover:bg-[#343442] border border-ivory/10 shadow-xl rounded-full pr-5 pl-2 py-2 flex items-center gap-4 transition-all relative"
            >
                <div className="absolute -top-1 -right-1 flex h-4 w-4 z-20">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500 animate-pulse border-2 border-[#2A2A35]"></span>
                </div>
                <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 bg-obsidian">
                    <img src="/jude.png" alt="Hire Jude" className="w-full h-full object-cover transition-opacity duration-300 opacity-100 hover:opacity-0 absolute inset-0" />
                    <img src="/jude-hover.jpg" alt="Hire Jude Hover" className="w-full h-full object-cover transition-opacity duration-300 opacity-0 hover:opacity-100 absolute inset-0" onError={(e) => { e.target.style.display = 'none'; }} />
                </div>
                <div className="flex flex-col text-left">
                    <span className="font-ui font-bold text-ivory text-[15px] leading-tight flex items-center gap-2">
                        NirvanaXJude
                    </span>
                    <span className="font-ui text-ivory/50 text-xs leading-tight">AI Automation Partner</span>
                </div>
            </button>
        </div>
    );
};

function App() {
    return (
        <>
            <div className="fixed inset-0 z-[9999] pointer-events-none opacity-[0.05]" style={{ filter: 'url(#noiseFilter)', mixBlendMode: 'overlay' }}></div>
            <Navbar />
            <main>
                <Hero />
                <CompaniesMarquee />
                <Manifesto />
                <Features />
                <AgenticLab />
                <ProcessSteps />
                <Protocol />
                <Callout />
                <FAQSection />
                <AboutMe />
            </main>
            <Footer />
            <StickyWidget />
        </>
    );
}

export default App;
