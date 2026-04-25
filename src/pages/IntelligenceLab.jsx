import React, { useEffect, useState } from 'react';
import ArtifactCard from '../components/ArtifactCard';
import LeadCaptureModal from '../components/LeadCaptureModal';
import { useArtifactProcessor } from '../hooks/useArtifactProcessor';

const ARTIFACTS_DATA = [
    {
        id: "voice-receptionist",
        title: "The Voice Receptionist",
        type: "Vapi AI + Twilio",
        input: "(Required) Phone Number with Country Code (+)",
        output: "Instant Inbound/Outbound Booking Call",
        isSystemRunning: false,
        requiresInput: "phone",
        demoInputAvailable: false,
        execution: "external",
        hook: "Inbound call routing protocol",
        result: "Live call connection established"
    },
    {
        id: "insta-strategy",
        title: "The 'Insta-Strategy' Roadmap Generator",
        type: "Claude 3.5 Sonnet + Make",
        input: "(Required) Niche (e.g. SaaS, Local SEO)",
        output: "Custom 18-Month AI Implementation PDF",
        isSystemRunning: false,
        requiresInput: "text",
        demoInputAvailable: true,
        demoText: "Local Real Estate",
        execution: "external",
        hook: "Claude-3-Sonnet roadmap synthesis",
        result: "18-month strategic blueprint generated"
    },
    {
        id: "notion-crm",
        title: "Notion CRM Architect",
        type: "Notion API + Automation",
        input: "(Required) Business Operations Problem",
        output: "Customized CRM Database Blueprint",
        isSystemRunning: false,
        requiresInput: "text",
        demoInputAvailable: true,
        demoText: "We lose track of leads after the initial discovery call.",
        execution: "local",
        hook: "Notion API structural mapping",
        result: "Entity-relationship diagram deployed"
    },
    {
        id: "ai-product-gen",
        title: "AI Product Generator",
        type: "Replicate / DALL-E",
        input: "(Required) Raw Product Image Upload",
        output: "Background Swapped 'Luxury Studio' Render",
        isSystemRunning: false,
        requiresInput: "file",
        demoInputAvailable: true,
        demoText: "demo_coffee_bag_image.png",
        execution: "external",
        hook: "Stable Diffusion XL studio environment",
        result: "Pro-grade studio render sent to email"
    },
    {
        id: "content-creator",
        title: "Content Creator's Friend",
        type: "Scripting Engine Component",
        input: "(Required) Raw Content Idea / Topic",
        output: "Full Script + Hook + Lead Magnet PDF",
        isSystemRunning: false,
        requiresInput: "text",
        demoInputAvailable: true,
        demoText: "How AI is changing the plumbing industry.",
        execution: "external",
        hook: "Viral scripting matrix",
        result: "Multi-platform content package ready"
    },
    {
        id: "maps-scraper",
        title: "Google Maps Scraper",
        type: "Tavily + n8n",
        input: "(Required) Niche + City (e.g. HVAC Dallas)",
        output: "5 Leads + Deep Internet Research File",
        isSystemRunning: false,
        requiresInput: "text",
        demoInputAvailable: false,
        execution: "local",
        hook: "Tavily AI search & enrichment",
        result: "Decision-maker bio & contact data retrieved"
    },
    {
        id: "roi-calculator",
        title: "ROI Leak Calculator",
        type: "Financial Analysis Matrix",
        input: "(Required) Employees, Avg Salary, Manual Hrs",
        output: "Live 'Annual Revenue Leak' Projection",
        isSystemRunning: false,
        requiresInput: "text",
        demoInputAvailable: true,
        demoText: "10 Employees, $60k Salary, 15 Hrs/wk",
        execution: "local",
        hook: "Leaky-hours economic model",
        result: "Financial exposure report compiled"
    },
    {
        id: "zero-hallucination",
        title: "Zero-Hallucination RAG",
        type: "Vector DB + Claude",
        input: "(Required) Technical AI/Systems Question",
        output: "Factual Retrieval from NirvanaXJude DB",
        isSystemRunning: false,
        requiresInput: "text",
        demoInputAvailable: true,
        demoText: "Are Voice Agents Actually Better Than SDRS?",
        execution: "local",
        hook: "Semantic vector retrieval",
        result: "Verified system documentation match"
    }
];

const IntelligenceLab = () => {
    const [artifacts, setArtifacts] = useState(ARTIFACTS_DATA);
    const [selectedArtifact, setSelectedArtifact] = useState(null);
    const [expandedArtifactId, setExpandedArtifactId] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    // Track processing state and results per artifact
    const { isProcessing, result, nextStep, logs, processArtifact } = useArtifactProcessor();
    const [processingArtifactId, setProcessingArtifactId] = useState(null);
    const [userData, setUserData] = useState(null);

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
    }, []);

    const handleRunRequest = (artifact) => {
        // Expand the card
        setExpandedArtifactId(artifact.id);
        
        // Open modal to capture
        setSelectedArtifact(artifact);
        setIsModalOpen(true);
    };

    const handleCloseExpansion = () => {
        setExpandedArtifactId(null);
    };

    const handleModalSuccess = (formData) => {
        setIsModalOpen(false);
        setUserData(formData);
        if (selectedArtifact) {
            setProcessingArtifactId(selectedArtifact.id);
            processArtifact(selectedArtifact.id, formData.customInput, formData);
        }
    };

    return (
        <main className="bg-dark text-white min-h-screen pt-[72px]">
            
            {/* HERO SECTION (Dark) */}
            <section className="relative px-6 py-24 flex flex-col items-center justify-center min-h-[50vh] overflow-hidden text-center">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-accent)] opacity-[0.05] rounded-full blur-[100px] pointer-events-none"></div>
                
                <div className="relative z-10 max-w-[800px]" data-reveal>
                    <div className="eyebrow mx-auto justify-center">
                        <span className="eyebrow__dot"></span>
                        <span className="eyebrow__text text-white">INTELLIGENCE LAB</span>
                    </div>
                    <h1 className="text-[clamp(52px,7vw,80px)] font-[800] leading-[1.05] tracking-tight mb-6">
                        Live Artifacts.
                    </h1>
                    <p className="text-[18px] leading-[1.65] text-[var(--color-text-on-dark-muted)] max-w-[600px] mx-auto">
                        Test the deterministic engines powering our partner agencies. Live deployments, zero hallucinations.
                    </p>
                </div>
            </section>

            {/* THE GRID */}
            <section className="px-6 pb-24">
                <div className="max-w-[1200px] mx-auto">
                    <div data-reveal data-delay="1">
                        <div className={`lab-grid transition-all duration-700 ${expandedArtifactId ? 'grid-cols-1' : ''}`}>
                            {artifacts.map((artifact) => (
                                <div 
                                    key={artifact.id} 
                                    className={`transition-all duration-700 ${
                                        expandedArtifactId === artifact.id 
                                            ? 'col-span-full h-auto order-first' 
                                            : expandedArtifactId 
                                                ? 'opacity-20 scale-[0.98]' 
                                                : 'h-full'
                                    }`}
                                >
                                    <ArtifactCard 
                                        artifact={artifact} 
                                        onRunRequest={handleRunRequest}
                                        isExpanded={expandedArtifactId === artifact.id}
                                        onCloseExpansion={handleCloseExpansion}
                                        isInternalProcessing={processingArtifactId === artifact.id && isProcessing}
                                        internalLogs={processingArtifactId === artifact.id ? logs : []}
                                        internalResult={processingArtifactId === artifact.id ? result : null}
                                        internalNextStep={processingArtifactId === artifact.id ? nextStep : null}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="px-6 py-24 border-t border-[var(--color-border-dark)]">
                <div className="max-w-[1000px] mx-auto bg-[var(--color-bg-dark-card)] border border-[var(--color-border-dark)] rounded-[2rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl" data-reveal>
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-accent)]/5 to-transparent pointer-events-none"></div>
                    
                    <h2 className="text-[clamp(36px,5vw,52px)] font-[800] mb-8 relative z-10 leading-[1.1]">
                        Bypass the demos.<br/>Build the engine.
                    </h2>
                    <div className="relative z-10 flex justify-center">
                        <a href="https://cal.com/nirvanaxjude" target="_blank" rel="noopener noreferrer" className="btn-primary">
                            <div className="btn-primary__arrow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
                            REQUEST YOUR OWN SYSTEM
                        </a>
                    </div>
                </div>
            </section>

            {/* Gatekeeper Modal */}
            <LeadCaptureModal 
                isOpen={isModalOpen} 
                onClose={() => {
                    setIsModalOpen(false);
                    // Only collapse if we aren't currently processing this artifact
                    if (!isProcessing || processingArtifactId !== selectedArtifact?.id) {
                        setExpandedArtifactId(null);
                    }
                }} 
                onSuccess={handleModalSuccess}
                artifact={selectedArtifact}
            />
        </main>
    );
};

export default IntelligenceLab;
