import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ArtifactCard from '../components/ArtifactCard';
import LeadCaptureModal from '../components/LeadCaptureModal';
import { useArtifactProcessor } from '../hooks/useArtifactProcessor';

gsap.registerPlugin(ScrollTrigger);

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
    const headerRef = useRef(null);
    const gridRef = useRef(null);
    const [artifacts, setArtifacts] = useState(ARTIFACTS_DATA);
    const [selectedArtifact, setSelectedArtifact] = useState(null);
    const [expandedArtifactId, setExpandedArtifactId] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [notifications, setNotifications] = useState([]);
    
    // Track processing state and results per artifact
    const { isProcessing, result, nextStep, logs, processArtifact } = useArtifactProcessor();
    const [processingArtifactId, setProcessingArtifactId] = useState(null);
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        let ctx = gsap.context(() => {
            gsap.fromTo(headerRef.current.children,
                { y: 40, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: 'power3.out', delay: 0.2 }
            );

            gsap.fromTo(".artifact-card-wrapper",
                { y: 40, opacity: 0 },
                { 
                    y: 0, 
                    opacity: 1, 
                    duration: 0.8, 
                    stagger: 0.1, 
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: gridRef.current,
                        start: "top 80%"
                    }
                }
            );
        });
        return () => ctx.revert();
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

    const startArtifactProcess = (artifactId) => {
        // This is now handled by the hook
    };

    return (
        <section className="bg-obsidian min-h-screen pt-40 pb-24 px-6 md:px-16 flex flex-col items-center relative overflow-hidden text-ivory">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-full max-w-3xl h-[800px] bg-champagne/5 rounded-full blur-[150px] pointer-events-none transform translate-x-1/3 -translate-y-1/3"></div>
            
            {/* Header */}
            <div ref={headerRef} className="text-center w-full max-w-4xl mx-auto mb-20 relative z-10 flex flex-col items-center">
                <p className="font-mono text-champagne mb-6 tracking-widest uppercase text-xs md:text-sm bg-champagne/10 px-4 py-2 border border-champagne/20 rounded-full w-max">
                    Intelligence Lab
                </p>
                <h1 className="font-drama italic text-6xl md:text-8xl lg:text-9xl text-ivory leading-[0.9] text-balance mb-6">
                    Live Artifacts.
                </h1>
                <p className="font-ui text-xl md:text-2xl text-ivory/60 max-w-2xl text-balance leading-relaxed">
                    Test the deterministic engines powering our partner agencies. Live deployments, zero hallucinations.
                </p>
            </div>

            {/* The Grid */}
            <div ref={gridRef} className="w-full max-w-7xl mx-auto relative z-10">
                <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-700 ${expandedArtifactId ? 'lg:grid-cols-1' : ''}`}>
                    {artifacts.map((artifact, i) => (
                        <div 
                            key={artifact.id} 
                            className={`artifact-card-wrapper transition-all duration-700 ${
                                expandedArtifactId === artifact.id 
                                    ? 'col-span-full h-auto order-first' 
                                    : expandedArtifactId 
                                        ? 'opacity-20 scale-95' 
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

            {/* Call to Action Wrapper */}
            <div className="w-full max-w-5xl mx-auto mt-40">
                <div className="bg-[#0A0A0F] border border-ivory/5 rounded-[3rem] p-16 md:p-24 text-center relative overflow-hidden group shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-t from-champagne/5 to-transparent pointer-events-none"></div>
                    <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-champagne/10 blur-[100px] rounded-full group-hover:bg-champagne/20 transition-colors duration-700 pointer-events-none"></div>

                    <h2 className="font-drama italic text-4xl md:text-6xl lg:text-7xl text-ivory mb-8 relative z-10 text-balance leading-[1.1]">
                        Bypass the demos. Build the engine.
                    </h2>
                    <div className="relative z-10 flex justify-center">
                        <a 
                            href="https://cal.com/nirvanaxjude" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-block bg-champagne text-obsidian font-ui font-bold text-xl px-12 py-6 rounded-full hover:scale-105 transition-transform shadow-[0_0_40px_rgba(201,168,76,0.3)]"
                        >
                            Request Your Own System
                        </a>
                    </div>
                </div>
            </div>

            {/* Gatekeeper Modal */}
            <LeadCaptureModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
                onSuccess={handleModalSuccess}
                artifact={selectedArtifact}
            />
        </section>
    );
};

export default IntelligenceLab;
