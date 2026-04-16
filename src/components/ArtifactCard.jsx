import React, { useState, useEffect } from 'react';
import { Play, CheckCircle2, Loader2, Workflow } from 'lucide-react';

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
    const [notifications, setNotifications] = useState([]);

    // We can still use a local isComplete state or derive it
    const isProcessing = isInternalProcessing;
    const isComplete = !isInternalProcessing && internalResult !== null;
    const logs = internalLogs;
    const localResult = internalResult;

    // Unified progress tracking
    useEffect(() => {
        if (isProcessing) {
            const stepCount = 6; // Matching processSteps in hook
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

    // Dummy notifications logic
    useEffect(() => {
        if (isProcessing) {
            const interval = setInterval(() => {
                const msgs = [
                    "Connection stabilized...",
                    "Enriching with external APIs...",
                    "Protocol engaged.",
                    "Artifact instance warm."
                ];
                const msg = msgs[Math.floor(Math.random() * msgs.length)];
                setNotifications(prev => [...prev, { id: Date.now(), msg }]);
                // Remove notification after 3s
                setTimeout(() => {
                    setNotifications(current => current.slice(1));
                }, 3000);
            }, 2500);
            return () => clearInterval(interval);
        }
    }, [isProcessing]);

    const handleRunClick = () => {
        if (isProcessing || isComplete) return;
        if (onRunRequest) onRunRequest(artifact);
    };

    return (
        <div className={`relative bg-[#121218] border rounded-3xl flex flex-col overflow-hidden transition-all duration-700 ${isExpanded ? 'p-12 border-champagne/40 bg-[#0A0A0F]' : 'p-8 border-ivory/5 hover:border-champagne/20 hover:-translate-y-2 h-full'}`}>
            
            {/* Close Expansion Button */}
            {isExpanded && !isProcessing && (
                <button 
                    onClick={onCloseExpansion}
                    className="absolute top-8 right-8 text-ivory/30 hover:text-champagne transition-colors z-20 flex items-center gap-2 group"
                >
                    <span className="font-mono text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Close Artifact</span>
                    <Play size={20} className="rotate-180" />
                </button>
            )}

            {/* Dummy Notifications */}
            <div className="absolute top-4 right-4 z-50 flex flex-col gap-2 pointer-events-none">
                {notifications.map(n => (
                    <div key={n.id} className="bg-champagne/10 border border-champagne/30 text-champagne text-[10px] px-3 py-1 rounded-full animate-in slide-in-from-top-4 fade-in duration-300 backdrop-blur-md">
                        {n.msg}
                    </div>
                ))}
            </div>

            {/* Glow effects */}
            {isProcessing && (
                <div className="absolute inset-0 bg-champagne/5 pointer-events-none z-0 animate-pulse"></div>
            )}
            <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-[60px] pointer-events-none transition-colors duration-1000 ${isProcessing ? 'bg-champagne/20' : 'bg-champagne/5'}`}></div>
            
            <div className="relative z-10 flex flex-col h-full">
                <div className={`flex items-center gap-3 mb-6 transition-all duration-700 ${isExpanded ? 'scale-125 origin-left' : ''}`}>
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isProcessing ? 'bg-champagne text-obsidian shadow-[0_0_15px_rgba(201,168,76,0.5)]' : 'bg-obsidian border border-ivory/10 text-champagne'}`}>
                        {isComplete ? <CheckCircle2 size={20} /> : <Workflow size={20} />}
                    </div>
                    {isExpanded && (
                        <div className="font-mono text-[10px] text-champagne uppercase tracking-widest bg-champagne/10 px-3 py-1 rounded-full border border-champagne/20 animate-in fade-in duration-1000">
                            Execution: {artifact.execution} Protocol
                        </div>
                    )}
                </div>
                
                <h4 className={`font-ui font-bold text-ivory mb-2 tracking-tight transition-all duration-700 ${isExpanded ? 'text-5xl mb-4' : 'text-2xl'}`}>{artifact.title}</h4>
                <p className={`font-mono text-[10px] text-champagne uppercase tracking-widest mb-6 border-b border-ivory/10 pb-4 transition-all duration-700 ${isExpanded ? 'text-xs pb-6' : ''}`}>
                    Architecture: {artifact.type}
                </p>
                
                <div className={`flex flex-col flex-grow gap-8 transition-all duration-700 ${isExpanded ? 'flex-row items-start' : ''}`}>
                    <div className={`${isExpanded ? 'w-full lg:w-1/2' : 'w-full'} flex flex-col h-full`}>
                        {!isProcessing && !isComplete ? (
                            <div className="flex-grow flex flex-col justify-between">
                                <div className="space-y-6 mb-8">
                                    <div>
                                        <span className="block font-mono text-[10px] text-ivory/40 uppercase mb-2 tracking-widest">Technical Hook</span>
                                        <span className="font-ui text-base text-champagne font-semibold">{artifact.hook}</span>
                                    </div>
                                    <div>
                                        <span className="block font-mono text-[10px] text-ivory/40 uppercase mb-2 tracking-widest">Input Parameter</span>
                                        <span className="font-ui text-sm text-ivory/80 leading-relaxed">{artifact.input}</span>
                                    </div>
                                    <div>
                                        <span className="block font-mono text-[10px] text-ivory/40 uppercase mb-2 tracking-widest">Expected Result</span>
                                        <span className="font-ui text-sm text-ivory/80 leading-relaxed">{artifact.result}</span>
                                    </div>
                                </div>
                                
                                <button 
                                    onClick={handleRunClick}
                                    className="w-full bg-white/5 hover:bg-champagne hover:text-obsidian border border-ivory/10 hover:border-transparent text-ivory font-ui font-semibold py-4 px-6 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 group text-lg"
                                >
                                    <Play size={20} className="group-hover:fill-obsidian transition-colors" />
                                    Run Live Deployment
                                </button>
                            </div>
                        ) : (
                            <div className="flex-grow flex flex-col bg-obsidian rounded-2xl border border-ivory/5 p-6 relative overflow-hidden font-mono mt-2 min-h-[300px]">
                                {/* Terminal Header */}
                                <div className="flex items-center gap-2 mb-6 border-b border-white/5 pb-3">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/30"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/30"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/30"></div>
                                    <span className="ml-2 text-[10px] text-ivory/20 tracking-widest font-mono">protocol_instance_{artifact.id}.sh</span>
                                    <div className="ml-auto flex items-center gap-2">
                                        <div className="w-1 h-3 bg-champagne/40 animate-pulse"></div>
                                        <span className="text-[10px] text-champagne/40 uppercase tracking-tighter">Monitoring</span>
                                    </div>
                                </div>
                                
                                <div className="flex-grow overflow-y-auto space-y-3 text-sm text-ivory/70 h-full scrollbar-hide pb-8">
                                    {logs.map((log, i) => (
                                        <div key={i} className="animate-in fade-in slide-in-from-left-4 duration-500 flex items-start gap-3">
                                            <span className="text-champagne/60 font-bold shrink-0">[$]</span>
                                            <span className="leading-tight">{log}</span>
                                        </div>
                                    ))}
                                    {isProcessing && (
                                        <div className="flex items-center gap-3 text-champagne animate-pulse mt-4 font-bold bg-champagne/5 p-3 rounded-lg border border-champagne/10">
                                            <Loader2 size={16} className="animate-spin" />
                                            <span className="tracking-widest text-xs">SYNTHESIZING SYSTEM ARCHITECTURE...</span>
                                        </div>
                                    )}
                                    {isComplete && (
                                        <div className="mt-8 space-y-6 animate-in fade-in duration-1000">
                                            <div className="text-green-400 font-bold border border-green-400/20 bg-green-400/5 p-5 rounded-xl flex items-center gap-4">
                                                <div className="w-12 h-12 rounded-full bg-green-400/20 flex items-center justify-center shrink-0">
                                                    <CheckCircle2 size={24} />
                                                </div>
                                                <div>
                                                    <div className="text-base tracking-tight italic">ARTIFACT DEPLOYED SUCCESSFULLY</div>
                                                    <div className="text-[10px] font-normal opacity-50 uppercase tracking-widest mt-1">Exit Code 0: Protocol Finished</div>
                                                </div>
                                            </div>
                                            {localResult && (
                                                <div className="bg-white/5 border border-white/5 p-6 rounded-2xl animate-in slide-in-from-bottom-4 duration-1000 shadow-2xl">
                                                    <div className="text-[10px] uppercase tracking-widest text-champagne/40 mb-4 border-b border-white/5 pb-2 font-bold">Instance Output Architecture</div>
                                                    <div className="text-ivory font-ui text-xl leading-relaxed italic">{localResult}</div>
                                                </div>
                                            )}
                                            {internalNextStep && (
                                                <div className="bg-champagne/10 border border-champagne/30 p-6 rounded-2xl animate-in fade-in duration-1000 delay-500">
                                                    <div className="text-[10px] uppercase tracking-widest text-champagne mb-3 font-bold">What's Next?</div>
                                                    <div className="text-ivory font-ui text-sm leading-relaxed">{internalNextStep}</div>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                                
                                {isProcessing && (
                                    <div className="absolute bottom-0 left-0 w-full h-1 bg-white/5">
                                        <div 
                                            className="h-full bg-champagne transition-all duration-100 ease-out shadow-[0_0_20px_rgba(201,168,76,0.6)]" 
                                            style={{ width: `${progress}%` }}
                                        ></div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                    
                    {isExpanded && (
                        <div className="hidden lg:flex w-1/2 h-full flex-col gap-6 animate-in slide-in-from-right-12 fade-in duration-1000 delay-300">
                            <div className="bg-[#12121A] border border-white/5 rounded-3xl p-10 flex-grow shadow-2xl flex flex-col">
                                <h5 className="font-ui font-bold text-ivory text-2xl mb-8 flex items-center gap-3">
                                    <Workflow size={24} className="text-champagne" />
                                    Deployment Scalability
                                </h5>
                                <div className="grid grid-cols-1 gap-6 mb-12">
                                    <div className="p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-champagne/30 transition-all duration-500 group cursor-default">
                                        <p className="text-base text-ivory/70 leading-relaxed">
                                            <strong className="text-champagne block mb-1 group-hover:text-white transition-colors uppercase text-[10px] tracking-widest">Protocol Scenario A</strong> 
                                            Hyper-optimized lead routing with real-time enrichment via Tavily.
                                        </p>
                                    </div>
                                    <div className="p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-champagne/30 transition-all duration-500 group cursor-default">
                                        <p className="text-base text-ivory/70 leading-relaxed">
                                            <strong className="text-champagne block mb-1 group-hover:text-white transition-colors uppercase text-[10px] tracking-widest">Protocol Scenario B</strong> 
                                            Automated CRM architecture supporting 10k+ dynamic entities in Notion.
                                        </p>
                                    </div>
                                    <div className="p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-champagne/30 transition-all duration-500 group cursor-default">
                                        <p className="text-base text-ivory/70 leading-relaxed">
                                            <strong className="text-champagne block mb-1 group-hover:text-white transition-colors uppercase text-[10px] tracking-widest">Protocol Scenario C</strong> 
                                            Zero-hallucination agentic memory with vector-based factual retrieval.
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-auto bg-champagne text-obsidian p-8 rounded-3xl shadow-[0_0_50px_rgba(201,168,76,0.15)] transform hover:scale-[1.02] transition-transform duration-500">
                                    <p className="font-drama text-2xl mb-2 italic">Architecture on Demand.</p>
                                    <p className="font-ui text-sm mb-8 opacity-80 leading-relaxed">This is a single deterministic module. I architect the entire neuro-symbolic engine for high-ticket service industries.</p>
                                    <a 
                                        href="https://cal.com/nirvanaxjude" 
                                        target="_blank" 
                                        className="w-full bg-obsidian text-champagne font-bold py-5 px-6 rounded-2xl flex items-center justify-center gap-3 hover:translate-x-2 transition-transform shadow-2xl"
                                    >
                                        Architect Custom System
                                        <Play size={16} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ArtifactCard;
