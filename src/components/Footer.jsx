import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Instagram, Linkedin, ArrowUpRight, Mail } from 'lucide-react';

const Footer = () => {
    const year = new Date().getFullYear();

    const links = {
        Services: [
            { label: 'Investor Outreach Protocol', href: '/#protocol' },
            { label: 'AI Operations Build', href: '/#beyond-raise' },
            { label: 'Agency Partnership', href: '/agencies' },
        ],
        Labs: [
            { label: 'Intelligence Lab', href: '/lab' },
            { label: 'Voice Receptionist', href: '/lab' },
            { label: 'ROI Calculator', href: '/lab' },
            { label: 'Maps Lead Scraper', href: '/lab' },
        ],
        Company: [
            { label: 'About', href: '/#about' },
            { label: 'Recent Projects', href: '/#projects' },
            { label: 'Client Inquiries', href: 'https://cal.com/nirvanaxjude/startups-founder-inquiries', external: true },
        ]
    };

    return (
        <footer className="bg-[#08080E] border-t border-white/[0.06] pt-24 pb-10 px-6"
            style={{
                backgroundImage: 'radial-gradient(circle, #1a1a1a 1px, transparent 1px)',
                backgroundSize: '20px 20px',
            }}
        >
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 mb-20">
                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-2 mb-6">
                            <span className="font-black text-2xl tracking-widest">
                                <span className="text-[#C9A84C]">N</span>
                                <span className="text-white/30">/</span>
                                <span className="text-white">X</span>
                                <span className="text-white/30">/</span>
                                <span className="text-[#C9A84C]">J</span>
                            </span>
                        </div>
                        <p className="text-gray-500 leading-relaxed text-sm mb-8 max-w-xs">
                            Building the AI systems that turn founder decks into funded companies — and agencies into ones that can actually deliver.
                        </p>
                        <div className="space-y-3">
                            <a href="mailto:judeolaboboye@gmail.com" className="flex items-center gap-3 text-sm text-gray-500 hover:text-[#C9A84C] transition-colors">
                                <Mail className="w-4 h-4" />
                                judeolaboboye@gmail.com
                            </a>
                        </div>
                        <div className="flex gap-4 mt-8">
                            <a href="https://x.com/judeolaboboye" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-500 hover:text-[#C9A84C] hover:border-[#C9A84C]/40 transition-colors">
                                <Twitter className="w-4 h-4" />
                            </a>
                            <a href="https://instagram.com/nirvanaxjude" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-500 hover:text-[#C9A84C] hover:border-[#C9A84C]/40 transition-colors">
                                <Instagram className="w-4 h-4" />
                            </a>
                            <a href="https://linkedin.com/in/nirvanaxjude" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-500 hover:text-[#C9A84C] hover:border-[#C9A84C]/40 transition-colors">
                                <Linkedin className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Nav Links */}
                    {Object.entries(links).map(([category, items]) => (
                        <div key={category}>
                            <h5 className="text-xs font-mono uppercase tracking-widest text-[#C9A84C] mb-6">{category}</h5>
                            <ul className="space-y-4">
                                {items.map(link => (
                                    <li key={link.label}>
                                        {link.external ? (
                                            <a 
                                                href={link.href} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="text-sm text-gray-500 hover:text-white transition-colors flex items-center gap-1 group"
                                            >
                                                {link.label}
                                                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            </a>
                                        ) : (
                                            <Link 
                                                to={link.href}
                                                className="text-sm text-gray-500 hover:text-white transition-colors"
                                            >
                                                {link.label}
                                            </Link>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/[0.06] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-gray-600 font-mono">
                        © {year} NirvanaXJude. All rights reserved.
                    </p>
                    <p className="text-xs text-gray-600 font-mono">
                        AI systems for founders raising capital and agencies that need to deliver it.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
