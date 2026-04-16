import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const GlobalNav = () => {
    const location = useLocation();
    const isAgency = location.pathname.includes('/agencies');
    
    const logoLink = isAgency ? '/agencies' : '/';
    const switchLink = isAgency ? '/' : '/agencies';
    const switchText = isAgency ? 'For Startups & Founders' : 'For Agencies';
    
    const ctaLink = isAgency 
        ? 'https://cal.com/nirvanaxjude/45mins' 
        : 'https://cal.com/nirvanaxjude/startups-founder-inquiries';
    const ctaText = isAgency ? 'Partner with Me' : 'Secure Funding';

    return (
        <nav className="fixed w-full z-50 top-0 left-0 border-b border-[#C9A84C]/10 bg-[#0D0D12]/80 backdrop-blur-xl">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                
                {/* Logo — N/X/J wordmark */}
                <Link to={logoLink} className="flex items-center gap-2 group">
                    <span className="text-white font-black text-xl tracking-widest">
                        <span className="text-[#C9A84C]">N</span>
                        <span className="text-white/40">/</span>
                        <span className="text-white">X</span>
                        <span className="text-white/40">/</span>
                        <span className="text-[#C9A84C]">J</span>
                    </span>
                    <span className="hidden md:block text-xs font-mono text-white/30 uppercase tracking-[0.25em] ml-1 group-hover:text-white/50 transition-colors">NirvanaXJude</span>
                </Link>

                {/* Switcher & CTA */}
                <div className="flex items-center gap-8">
                    <Link 
                        to={switchLink} 
                        className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
                    >
                        {switchText}
                    </Link>
                    
                    <a 
                        href={ctaLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-2 px-6 py-2.5 bg-white text-[#0D0D12] font-semibold text-sm rounded-full hover:bg-[#C9A84C] transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(201,168,76,0.3)]"
                    >
                        {ctaText}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>

            </div>
        </nav>
    );
};

export default GlobalNav;
