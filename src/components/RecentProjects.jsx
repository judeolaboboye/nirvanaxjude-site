import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const PROJECTS = [
    {
        id: 'mystarup',
        title: "MyStarUp.com",
        category: "Investor Sourcing Alpha",
        description: "Built a deterministic lead sniper capturing high-net-worth signals during liquidity events via Clay and Instantly. 40% response rate.",
        tags: ["Clay", "Instantly", "n8n"],
        color: "from-blue-500/20 to-cyan-500/20"
    },
    {
        id: 'salesleadit',
        title: "SalesLeadIT",
        category: "CRM Intelligence",
        description: "Engineered a centralized company brain handling automated lead response and AI Voice Agents that book appointments 24/7.",
        tags: ["Notion", "Vapi.ai", "Automation"],
        color: "from-purple-500/20 to-pink-500/20"
    },
    {
        id: 'growlocol',
        title: "GrowLocol",
        category: "Local Scale Engine",
        description: "Technical fulfillment for a local marketing agency, automating lead generation and reporting for over 50 clients simultaneously.",
        tags: ["Full Stack", "AI Integration", "Scale"],
        color: "from-orange-500/20 to-red-500/20"
    }
];

const RecentProjects = () => {
    const containerRef = useRef(null);
    const projectsRef = useRef([]);

    useEffect(() => {
        let ctx = gsap.context(() => {
            projectsRef.current.forEach((project, i) => {
                gsap.from(project, {
                    scrollTrigger: {
                        trigger: project,
                        start: 'top 85%',
                        toggleActions: 'play none none reverse'
                    },
                    y: 100,
                    opacity: 0,
                    duration: 1.2,
                    ease: 'power4.out',
                    delay: i * 0.1
                });
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-40 px-6 md:px-16 bg-obsidian relative overflow-hidden">
            {/* Background elements for premium feel */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-champagne/5 rounded-full blur-[120px] pointer-events-none"></div>
            
            <div className="max-w-7xl mx-auto">
                <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div className="max-w-2xl">
                        <h2 className="font-mono text-champagne mb-6 tracking-widest uppercase text-sm">Case Studies</h2>
                        <h3 className="font-drama italic text-5xl md:text-7xl lg:text-8xl text-ivory leading-none">
                            Recent <span className="text-champagne/40">Architectures</span>
                        </h3>
                    </div>
                    <p className="font-ui text-lg text-ivory/50 max-w-sm border-l border-white/10 pl-6 mb-4">
                        A selection of deterministic systems built to solve complex operational friction.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PROJECTS.map((project, i) => (
                        <div
                            key={project.id}
                            ref={el => projectsRef.current[i] = el}
                            className="group relative h-[500px] rounded-[2.5rem] border border-white/5 bg-[#121218] overflow-hidden flex flex-col p-10 hover:border-champagne/30 transition-all duration-700 shadow-2xl"
                        >
                            {/* Gradient Background */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
                            
                            <div className="relative z-10">
                                <span className="font-mono text-[10px] text-champagne tracking-[0.3em] uppercase mb-4 block">
                                    {project.category}
                                </span>
                                <h4 className="font-ui font-bold text-4xl mb-6 text-ivory">
                                    {project.title}
                                </h4>
                                <p className="text-ivory/60 font-ui text-lg leading-relaxed mb-8 group-hover:text-ivory/80 transition-colors">
                                    {project.description}
                                </p>
                            </div>

                            <div className="mt-auto relative z-10 flex flex-wrap gap-2">
                                {project.tags.map(tag => (
                                    <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-ivory/60 uppercase tracking-wider">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="absolute top-10 right-10 scale-0 group-hover:scale-100 transition-transform duration-500">
                                <div className="w-12 h-12 rounded-full bg-champagne flex items-center justify-center text-obsidian">
                                    <ArrowUpRight size={24} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RecentProjects;
