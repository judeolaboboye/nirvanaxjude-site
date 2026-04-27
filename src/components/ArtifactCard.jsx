import React, { useState, useEffect } from 'react';

const ArtifactCard = ({ 
    artifact, 
    onRunRequest, 
    isExpanded, 
    onCloseExpansion,
    isInternalProcessing,
    internalLogs,
    internalResult,
    internalNextStep
}) => {
    const [progress, setProgress] = useState(0);

    const isProcessing = isInternalProcessing;
    const isComplete = !isInternalProcessing && internalResult !== null;
    const logs = internalLogs;

    useEffect(() => {
        if (isProcessing) {
            const stepCount = 6; 
            const interval = setInterval(() => {
                setProgress(prev => Math.min(95, prev + (100 / (stepCount * 5))));
            }, 300);
            return () => clearInterval(interval);
        } else if (isComplete) {
            setProgress(100);
        } else {
            setProgress(0);
        }
    }, [isProcessing, isComplete]);

    const handleRunClick = () => {
        if (isProcessing || isComplete) return;
        if (onRunRequest) onRunRequest(artifact);
    };

    if (isExpanded) {
        return (
            <div className="lab-card" style={{ padding: '40px', gridColumn: '1 / -1' }}>
                <div className="flex justify-between items-start mb-8">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <svg className="w-8 h-8 text-[var(--color-accent)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                                <line x1="3" y1="9" x2="21" y2="9"/>
                                <line x1="9" y1="21" x2="9" y2="9"/>
                            </svg>
                            <span className="inline-block px-3 py-1 bg-[var(--color-bg-dark-section)] border border-[var(--color-border-dark)] rounded-full text-[10px] font-[600] tracking-widest uppercase text-[var(--color-text-on-dark-muted)]">
                                Execution: {artifact.execution} Protocol
                            </span>
                        </div>
                        <h4 className="text-[32px] font-[800] text-white leading-tight mb-2">{artifact.title}</h4>
                        <div className="lab-card__arch border-none pb-0 mb-0">Architecture: {artifact.type}</div>
                    </div>
                    
                    {!isProcessing && (
                        <button 
                            onClick={onCloseExpansion} 
                            className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold tracking-widest text-[var(--color-text-on-dark-muted)] hover:text-white hover:bg-white/10 transition-all"
                        >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"/>
                                <line x1="6" y1="6" x2="18" y2="18"/>
                            </svg>
                            BACK TO GRID
                        </button>
                    )}
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Left: Input/Output details */}
                    <div>
                        {!isProcessing && !isComplete ? (
                            <div className="flex flex-col h-full">
                                <div className="mb-12">
                                    <div className="lab-card__field-label mt-0">Technical Hook</div>
                                    <div className="lab-card__field-value text-white">{artifact.hook}</div>
                                    
                                    <div className="lab-card__field-label">Input Parameter</div>
                                    <div className="lab-card__field-value text-[var(--color-text-on-dark-muted)] font-normal">{artifact.input}</div>
                                    
                                    <div className="lab-card__field-label">Expected Result</div>
                                    <div className="lab-card__field-value text-[var(--color-text-on-dark-muted)] font-normal">{artifact.result}</div>
                                </div>
                                <button onClick={handleRunClick} className="lab-card__btn mt-auto w-full">
                                    RUN LIVE DEPLOYMENT
                                </button>
                            </div>
                        ) : (
                            <div className="bg-[#08080C] border border-[var(--color-border-dark)] rounded-xl p-6 h-full flex flex-col relative overflow-hidden font-mono text-[13px]">
                                <div className="flex gap-2 mb-4 border-b border-[var(--color-border-dark)] pb-4">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/30"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/30"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/30"></div>
                                    <span className="ml-2 text-[10px] text-[var(--color-text-on-dark-muted)] tracking-widest uppercase">protocol_instance.sh</span>
                                </div>
                                
                                <div className="flex-grow overflow-y-auto space-y-3 text-[var(--color-text-on-dark-muted)] pb-8">
                                    {logs.map((log, i) => (
                                        <div key={i} className="flex gap-3">
                                            <span className="text-[var(--color-accent)] opacity-60">[$]</span>
                                            <span>{log}</span>
                                        </div>
                                    ))}
                                    {isProcessing && (
                                        <div className="flex items-center gap-3 text-[var(--color-accent)] animate-pulse mt-4 p-3 rounded-lg border border-[var(--color-accent)]/10 bg-[var(--color-accent)]/5">
                                            <span className="tracking-widest text-[10px] uppercase font-bold">SYNTHESIZING SYSTEM ARCHITECTURE...</span>
                                        </div>
                                    )}
                                    {isComplete && (
                                        <div className="mt-8 space-y-6">
                                            <div className="text-green-400 border border-green-400/20 bg-green-400/5 p-4 rounded-xl">
                                                <div className="font-bold italic">ARTIFACT DEPLOYED SUCCESSFULLY</div>
                                                <div className="text-[10px] opacity-60 uppercase tracking-widest mt-1">Exit Code 0</div>
                                            </div>
                                            {internalResult && (
                                                <div className="bg-[var(--color-bg-dark-section)] border border-[var(--color-border-dark)] p-6 rounded-xl">
                                                    <div className="text-[10px] uppercase tracking-widest text-[var(--color-text-on-dark-muted)] mb-4 font-bold border-b border-[var(--color-border-dark)] pb-2">Instance Output Architecture</div>
                                                    <div className="text-white font-sans text-base leading-relaxed">
                                                        {typeof internalResult === 'string' && internalResult.includes('https://image.pollinations.ai') ? (
                                                            <div className="flex flex-col gap-4">
                                                                <div>{internalResult.split('https://image.pollinations.ai')[0]}</div>
                                                                <img 
                                                                    src={`https://image.pollinations.ai${internalResult.split('https://image.pollinations.ai')[1].split(' ')[0].split('\n')[0]}`} 
                                                                    alt="AI Generated Asset" 
                                                                    className="w-full rounded-xl border border-[var(--color-border-dark)] object-cover aspect-square"
                                                                />
                                                            </div>
                                                        ) : (
                                                            internalResult
                                                        )}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                                {isProcessing && (
                                    <div className="absolute bottom-0 left-0 w-full h-1 bg-[var(--color-bg-dark-section)]">
                                        <div className="h-full bg-[var(--color-accent)] transition-all duration-300" style={{ width: `${progress}%` }}></div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    {/* Right: Scalability info */}
                    <div className="bg-[var(--color-bg-dark-section)] border border-[var(--color-border-dark)] rounded-2xl p-8 flex flex-col">
                        <h5 className="font-[700] text-white text-[20px] mb-6 flex items-center gap-3">
                            Deployment Scalability
                        </h5>
                        <div className="space-y-4 mb-8">
                            <div className="p-4 rounded-xl bg-[var(--color-bg-dark-card)] border border-[var(--color-border-dark)]">
                                <p className="text-[14px] text-[var(--color-text-on-dark-muted)] leading-relaxed">
                                    <strong className="text-[var(--color-accent)] block mb-1 uppercase text-[10px] tracking-widest">Protocol Scenario A</strong> 
                                    Hyper-optimized lead routing with real-time enrichment via Tavily.
                                </p>
                            </div>
                            <div className="p-4 rounded-xl bg-[var(--color-bg-dark-card)] border border-[var(--color-border-dark)]">
                                <p className="text-[14px] text-[var(--color-text-on-dark-muted)] leading-relaxed">
                                    <strong className="text-[var(--color-accent)] block mb-1 uppercase text-[10px] tracking-widest">Protocol Scenario B</strong> 
                                    Automated CRM architecture supporting 10k+ dynamic entities in Notion.
                                </p>
                            </div>
                            <div className="p-4 rounded-xl bg-[var(--color-bg-dark-card)] border border-[var(--color-border-dark)]">
                                <p className="text-[14px] text-[var(--color-text-on-dark-muted)] leading-relaxed">
                                    <strong className="text-[var(--color-accent)] block mb-1 uppercase text-[10px] tracking-widest">Protocol Scenario C</strong> 
                                    Zero-hallucination agentic memory with vector-based factual retrieval.
                                </p>
                            </div>
                        </div>

                        <div className="mt-auto bg-[var(--color-accent)] text-[var(--color-accent-text)] p-6 rounded-xl">
                            <p className="font-serif text-[24px] mb-2 italic">Architecture on Demand.</p>
                            <p className="text-[13px] mb-6 opacity-80 leading-relaxed font-[500]">This is a single deterministic module. I architect the entire neuro-symbolic engine for high-ticket service industries.</p>
                            <a href="https://cal.com/nirvanaxjude/startups-founder-inquiries" target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-[var(--color-accent-text)] text-[var(--color-accent)] font-bold py-4 px-6 rounded-lg text-[13px] tracking-wide">
                                ARCHITECT CUSTOM SYSTEM
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // Default condensed view
    return (
        <div className="lab-card">
            <svg className="lab-card__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <line x1="3" y1="9" x2="21" y2="9"/>
                <line x1="9" y1="21" x2="9" y2="9"/>
            </svg>
            <h4 className="lab-card__title">{artifact.title}</h4>
            <div className="lab-card__arch">Architecture: {artifact.type}</div>
            
            <div className="flex-grow mb-6">
                <div className="lab-card__field-label mt-0">Technical Hook</div>
                <div className="lab-card__field-value text-white">{artifact.hook}</div>
                
                <div className="lab-card__field-label">Input Parameter</div>
                <div className="lab-card__field-value text-[var(--color-text-on-dark-muted)] font-normal">{artifact.input}</div>
            </div>
            
            <button onClick={handleRunClick} className="lab-card__btn mt-auto">
                RUN LIVE DEPLOYMENT
            </button>
        </div>
    );
};

export default ArtifactCard;
