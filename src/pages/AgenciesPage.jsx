import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Target, Box, Database, GitBranch, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AgenciesPage = () => {

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.utils.toArray('.scroll-reveal').forEach(element => {
                gsap.fromTo(element, 
                    { opacity: 0, y: 50 },
                    { 
                        scrollTrigger: { trigger: element, start: 'top 85%' },
                        opacity: 1, y: 0, duration: 0.8, ease: 'power3.out'
                    }
                );
            });
        });
        return () => ctx.revert();
    }, []);

    const agencyFeatures = [
        { 
            title: "No new hires",
            desc: "I slot in behind your agency brand. You scope the project, I build it in n8n or Make. Your client never knows I exist.", 
            icon: <GitBranch className="text-[#C9A84C]" />,
            img: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=900&h=500&dpr=1",
        },
        { 
            title: "Proven systems only",
            desc: "Every build I deploy has a measurable outcome: lower cost per acquisition, faster lead response, or fewer churned clients. No guesswork, no pilots.", 
            icon: <Target className="text-[#C9A84C]" />,
            img: null,
        },
        { 
            title: "Built to actually get used",
            desc: "I write the SOPs alongside the build, so your client's team knows how to run the system from day one. No handoff confusion.", 
            icon: <Box className="text-[#C9A84C]" />,
            img: null,
        }
    ];

    const testimonials = [
        { 
            author: "E.J", 
            role: "Solar & Roofing Agency", 
            img: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1",
            quote: "He stripped down our messy Zapier web and built a monolithic n8n engine. Our lead response time went from 3 hours to 15 seconds." 
        },
        { 
            author: "R.S", 
            role: "Financial Operations",
            img: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1",
            quote: "Jude built it so cleanly that the client's team just... uses it. They treat the AI like a colleague, not a tool they have to babysit." 
        },
        { 
            author: "T.M", 
            role: "Coaching Consultant",
            img: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1",
            quote: "He doesn't just build the system, he understands how the marketing has to work around it. That's rare." 
        }
    ];

    return (
        <div className="bg-[#0D0D12] min-h-screen text-white font-sans selection:bg-[#C9A84C]/30 selection:text-white pt-20 overflow-hidden">
            
            {/* ======== HERO SECTION ======== */}
            <section className="min-h-[80vh] grid lg:grid-cols-2 items-center px-6 md:px-16 max-w-7xl mx-auto gap-12 relative py-24">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#C9A84C]/5 via-[#0D0D12] to-[#0D0D12]" />
                
                <div className="relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-block font-mono text-[#C9A84C] text-sm tracking-[0.3em] uppercase py-2 px-6 border border-[#C9A84C]/20 rounded-full bg-[#C9A84C]/5 backdrop-blur-md mb-8">
                            Partner with the Architect
                        </div>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.05]">
                            The technical partner your agency can sell,{' '}
                            <span className="text-[#C9A84C] italic font-serif">without hiring a technical team.</span>
                        </h1>
                        <p className="text-xl text-gray-400 leading-relaxed mb-4 max-w-xl">
                            Your clients are asking for AI. Most agencies can't deliver it. I'm the build layer that changes that.
                        </p>
                        <p className="text-base text-gray-500 mb-12 max-w-lg">
                            You handle the client relationship. I build what you promised.
                        </p>

                        <div className="flex flex-wrap gap-6">
                            <a 
                                href="https://cal.com/nirvanaxjude/45mins" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-3 px-8 py-4 bg-white text-[#0D0D12] font-bold text-lg rounded-full hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(201,168,76,0.3)]"
                            >
                                Discuss Partnership
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Hero right side image */}
                <div className="relative hidden lg:block">
                    <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-[#0A0A0F] border border-white/5">
                        <img src="https://storage.ghost.io/c/33/68/33684c00-f023-423d-a7f0-5786c0043411/content/images/2026/01/ANALYTICS-23.png" alt="Agency collaboration, you handle the client, I build it" className="w-full h-full object-cover object-left" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D12]/60 to-transparent pointer-events-none" />
                    </div>
                    {/* Floating badge */}
                    <div className="absolute -bottom-6 -left-6 bg-[#121218] border border-[#C9A84C]/20 rounded-2xl p-6 shadow-2xl">
                        <div className="text-xs font-mono text-[#C9A84C] uppercase tracking-widest mb-2">White-Label Partners</div>
                        <div className="text-2xl font-black text-white">12+</div>
                        <div className="text-xs text-gray-500">active agency deployments</div>
                    </div>
                </div>
            </section>

            {/* ======== THREE VALUE PROPS ======== */}
            <section className="py-24 px-6 border-y border-white/5 bg-[#0A0A0F] scroll-reveal">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-[#C9A84C] font-mono tracking-widest uppercase text-sm mb-3">How the partnership works</h2>
                        <h3 className="text-4xl font-bold">What you actually get.</h3>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {agencyFeatures.map((feat, idx) => (
                            <div key={idx} className="bg-white/[0.02] border border-white/5 rounded-3xl overflow-hidden hover:border-[#C9A84C]/20 transition-all duration-300 group">
                                {feat.img && (
                                    <div className="aspect-video overflow-hidden">
                                        <img src={feat.img} alt={feat.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                                    </div>
                                )}
                                <div className="p-8">
                                    <div className="mb-6 p-4 bg-[#C9A84C]/10 w-max rounded-xl border border-[#C9A84C]/20">
                                        {feat.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-4">{feat.title}</h3>
                                    <p className="text-gray-400 leading-relaxed font-light">{feat.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ======== TESTIMONIALS ======== */}
            <section className="py-32 px-6 scroll-reveal">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-[#C9A84C] font-mono tracking-widest uppercase text-sm mb-4">Verifiable Proof</h2>
                        <h3 className="text-4xl font-bold">What partners say.</h3>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((test, idx) => (
                            <div key={idx} className="bg-[#121218] border border-[#C9A84C]/10 p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300">
                                <p className="text-gray-300 leading-relaxed mb-8 text-base">"{test.quote}"</p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10 shrink-0">
                                        <img src={test.img} alt={test.author} className="w-full h-full object-cover object-top grayscale" />
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-white">{test.author}</h5>
                                        <p className="text-sm font-mono text-[#C9A84C]/70">{test.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ======== INTELLIGENCE LAB CTA ======== */}
            <section className="py-32 px-6 bg-gradient-to-b from-[#0A0A0F] to-[#0D0D12] text-center border-t border-white/5 scroll-reveal">
                <div className="max-w-4xl mx-auto border border-[#C9A84C]/20 rounded-[3rem] p-12 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#C9A84C]/10 rounded-full blur-[80px]" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#C9A84C]/10 rounded-full blur-[80px]" />
                    
                    <div className="relative z-10">
                        <Database className="w-12 h-12 text-[#C9A84C] mx-auto mb-6" />
                        <h3 className="text-4xl md:text-5xl font-bold mb-6">Talk is cheap.</h3>
                        <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto mb-10">
                            I've built 8 live demos you can test right now — from an AI voice booking agent to a CRM triage engine. See how the systems actually behave before you commit to anything.
                        </p>
                        
                        <Link 
                            to="/lab"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border border-[#C9A84C] text-[#C9A84C] font-bold rounded-full hover:bg-[#C9A84C] hover:text-[#0D0D12] transition-colors group"
                        >
                            Enter The Intelligence Lab
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1" />
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default AgenciesPage;
