import React from 'react';
import { Star } from 'lucide-react';

const TESTIMONIALS = [
    {
        text: "Nirvana went far and beyond any expectations I ever had. At the beginning he promised me he would give everything so that I get a great website that I will be really happy about… We’ll, he absolutely kept his word! He kept working at it until the very little details were all perfect. He coded special interfaces for everything that was not working perfectly from scratch. He worked at the graphics until they were all perfect. I don’t know how many nights he worked through, but man, he has power! You know your business, both about webdesign, graphic design, as well as understanding your customer (perfect English) and thinking with him, both on the content and the form. Thank you very much for the great result! I’ll be looking forward to working with you again! I can warmly recommend you",
        author: "Marcus T.",
        role: "Local SEO Agency Owner"
    },
    {
        text: "He did a great job! Communicated consistently and worked through any difficulties to find solutions. I'll definitely hire again.",
        author: "Sarah L.",
        role: "Real Estate Brokerage"
    },
    {
        text: "I’ve never seen an outbound system this clean. Jude used Apify and LinkedIn scraping to build a lead machine that drafts personalized first lines that actually sound human. I was worried the AI would sound robotic, but it references specific company news and posts so well that our reply rate jumped from 2% to nearly 9%. He set up the entire automation in n8n and linked it to our CRM flawlessly. He took away all the manual research debt. This system literally pays for itself every single day.",
        author: "David Chen",
        role: "B2B Marketing Director"
    },
    {
        text: "Honestly, I was skeptical because our operations were a total disaster. We had ClickUp tasks floating in space and Notion docs that never updated. Jude came in and didn't just 'sync' them; he architected a complete 'Company Brain.' He even handled the n8n self-hosting on our VPS so we didn't have to deal with the technical headache. The logic he built for state management is flawless—if a status changes in ClickUp, our entire Notion dashboard reflects it instantly. It’s saved our PM at least 10 hours a week. If you need a systems architect who actually understands business logic, hire him immediately.",
        author: "Elena M.",
        role: "SaaS Operations Manager"
    },
    {
        text: "I’ve worked with 'GHL Experts' before, but most of them just install a basic snapshot and leave. Jude is different. He built us a custom master snapshot that is actually bulletproof. He took over the entire DNS and SMTP setup (which I usually hate doing) and mapped everything to our corporate HubSpot CRM via Make.com. The data integrity is 100%, no more lost leads or broken triggers. He even created SOPs for our team so we know how to manage it. This wasn't a 'gig' for him; he acted like a partner in our agency's growth. Absolute legend",
        author: "James R.",
        role: "AI Marketing Agency Founder"
    }
];

const TestimonialCard = ({ testimonial }) => (
    <div className="bg-[#121218] border border-ivory/5 rounded-3xl p-8 shadow-2xl flex flex-col justify-between w-[350px] md:w-[450px] shrink-0 h-full relative group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-champagne/5 rounded-full blur-[50px] pointer-events-none group-hover:bg-champagne/10 transition-colors"></div>
        <div>
            <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-champagne text-champagne" />
                ))}
            </div>
            <p className="font-ui text-ivory/80 leading-relaxed text-sm md:text-base italic mb-8 relative z-10 line-clamp-[8]">
                "{testimonial.text}"
            </p>
        </div>
        <div className="relative z-10 mt-auto pt-6 border-t border-ivory/10 flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-obsidian border border-champagne/20 flex items-center justify-center">
                <span className="font-ui font-bold text-champagne text-sm">{testimonial.author.charAt(0)}</span>
            </div>
            <div>
                <p className="font-ui font-bold text-ivory text-sm tracking-tight">{testimonial.author}</p>
                <p className="font-mono text-[10px] text-champagne uppercase tracking-widest">{testimonial.role}</p>
            </div>
        </div>
    </div>
);

const TestimonialsSlider = () => {
    return (
        <section className="py-32 bg-obsidian border-t border-ivory/5 overflow-hidden flex flex-col items-center">
            <div className="text-center mb-16 w-full px-6">
                <h2 className="font-mono text-champagne mb-4 tracking-widest uppercase text-sm">System Validations</h2>
                <h3 className="font-drama italic text-5xl md:text-7xl text-ivory mb-6 tracking-tight">The Evidence.</h3>
                <p className="font-ui text-xl md:text-2xl text-ivory/60 text-balance max-w-2xl mx-auto">
                    Transformations, architectures, and real business results.
                </p>
            </div>

            <div className="group relative flex w-full overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-obsidian to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-obsidian to-transparent z-10 pointer-events-none"></div>

                <div className="flex w-max animate-slow-marquee space-x-8 items-stretch py-4 items-center">
                    {TESTIMONIALS.map((t, i) => (
                        <div key={`t1-${i}`} className="h-full py-4">
                            <TestimonialCard testimonial={t} />
                        </div>
                    ))}
                    {TESTIMONIALS.map((t, i) => (
                        <div key={`t2-${i}`} className="h-full py-4">
                            <TestimonialCard testimonial={t} />
                        </div>
                    ))}
                    {TESTIMONIALS.map((t, i) => (
                        <div key={`t3-${i}`} className="h-full py-4">
                            <TestimonialCard testimonial={t} />
                        </div>
                    ))}
                </div>
            </div>
            <style>{`
                @keyframes slow-marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-33.33%); }
                }
                .animate-slow-marquee {
                    animation: slow-marquee 60s linear infinite;
                }
                .animate-slow-marquee:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </section>
    );
};

export default TestimonialsSlider;
