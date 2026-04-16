import React, { useState, useEffect } from 'react';
import { X, ShieldCheck, Sparkles, Phone, Calendar } from 'lucide-react';

const LeadCaptureModal = ({ isOpen, onClose, onSuccess, artifact }) => {
    const [formData, setFormData] = useState({ firstName: '', phone: '', email: '', customInput: '' });
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [voiceOption, setVoiceOption] = useState('inbound'); // 'inbound' or 'outbound'

    // Reset form when modal opens with a new artifact
    useEffect(() => {
        if (isOpen) {
            setFormData({ firstName: '', phone: '', email: '', customInput: '' });
            setError('');
            setVoiceOption('inbound');
        }
    }, [isOpen, artifact]);

    if (!isOpen || !artifact) return null;

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const validatePhone = (phone) => {
        return phone.startsWith('+') && phone.length > 5;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (artifact.id === 'voice-receptionist' && voiceOption === 'outbound') {
            window.open('https://calendly.com/nirvanaxjude', '_blank');
            onClose();
            return;
        }

        if (!validateEmail(formData.email)) {
            setError('Please use a valid email address.');
            return;
        }

        if (artifact.requiresInput === 'phone' && !validatePhone(formData.customInput)) {
            setError('Country code (+ and digits) is required for the target phone.');
            return;
        }

        if (!validatePhone(formData.phone)) {
             setError('A valid phone number with country code (+) is required.');
             return;
        }

        setIsSubmitting(true);

        try {
            // CRM Logging via Vercel Function or similar (Mocked here for now as requested)
            // In a real prod environment, this would hit a secure endpoint.
            console.log("Logging lead to CRM:", {
                ...formData,
                artifactId: artifact.id,
                executionType: artifact.execution
            });

            await new Promise(resolve => setTimeout(resolve, 1000));
            onSuccess(formData);
        } catch (err) {
            setError('System Limit: Connectivity Error.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-obsidian/40 backdrop-blur-[40px] animate-in fade-in duration-700">
            <div className="bg-[#0D0D15] border border-champagne/30 rounded-[3rem] w-full max-w-lg p-12 relative shadow-[0_0_80px_rgba(201,168,76,0.2)] flex flex-col transform animate-in zoom-in-95 duration-500 max-h-[95vh] overflow-y-auto scrollbar-hide">
                <button onClick={onClose} className="absolute top-10 right-10 text-ivory/50 hover:text-champagne transition-colors">
                    <X size={28} />
                </button>

                <div className="mb-10 text-center">
                    <div className="w-16 h-16 bg-champagne/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-champagne/30">
                        <ShieldCheck size={32} className="text-champagne" />
                    </div>
                    <h3 className="font-drama italic text-5xl text-ivory mb-4">Protocol Access</h3>
                    <p className="font-ui text-lg text-ivory/60 leading-relaxed max-w-sm mx-auto">
                        Validating credentials for <br/><span className="text-champagne font-bold">{artifact.title}</span>.
                    </p>
                </div>

                {artifact.id === 'voice-receptionist' && (
                    <div className="flex bg-white/5 p-1 rounded-2xl mb-8 border border-white/10">
                        <button 
                            type="button"
                            onClick={() => setVoiceOption('inbound')}
                            className={`flex-1 py-3 rounded-xl font-mono text-xs tracking-widest transition-all ${voiceOption === 'inbound' ? 'bg-champagne text-obsidian font-bold shadow-lg' : 'text-ivory/40 hover:text-ivory'}`}
                        >
                            INBOUND
                        </button>
                        <button 
                            type="button"
                            onClick={() => setVoiceOption('outbound')}
                            className={`flex-1 py-3 rounded-xl font-mono text-xs tracking-widest transition-all ${voiceOption === 'outbound' ? 'bg-champagne text-obsidian font-bold shadow-lg' : 'text-ivory/40 hover:text-ivory'}`}
                        >
                            OUTBOUND
                        </button>
                    </div>
                )}

                {artifact.id === 'voice-receptionist' && voiceOption === 'inbound' ? (
                    <div className="flex flex-col items-center gap-8 py-4">
                        <div className="text-center w-full bg-white/5 border border-white/10 p-8 rounded-3xl">
                            <p className="font-mono text-[10px] text-champagne uppercase tracking-[0.3em] mb-4">Nirvana Protocol Line</p>
                            <h4 className="text-3xl md:text-4xl text-ivory font-ui font-bold mb-2">+1 917 942 8605</h4>
                            <p className="text-ivory/40 text-xs font-ui">Live Autonomous Receptionist</p>
                        </div>
                        <p className="text-ivory/40 text-xs font-ui text-center leading-relaxed">
                            Call this number to interact with the system in real-time. It will answer, qualify, and route your request.
                        </p>
                        <button 
                            onClick={onClose}
                            className="w-full bg-champagne text-obsidian py-5 rounded-2xl transition-all font-ui font-bold hover:shadow-[0_0_30px_rgba(201,168,76,0.3)]"
                        >
                            I'm Ready to Call
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                        {artifact.id === 'voice-receptionist' && voiceOption === 'outbound' ? (
                            <div className="space-y-6 text-center">
                                <div className="p-6 bg-red-400/5 border border-red-400/20 rounded-2xl">
                                    <p className="text-xs font-ui text-red-400 leading-relaxed mb-4 italic">
                                        Outbound calls legally require prior receiver permission. To prevent misuse, this demo is restricted to authorized protocol builds.
                                    </p>
                                    <p className="text-ivory/60 text-sm font-ui">
                                        Book a 1-on-1 session with Jude to see a live outbound deployment for your business.
                                    </p>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-ivory text-obsidian font-bold font-ui text-xl px-4 py-6 rounded-2xl hover:bg-champagne transition-all flex items-center justify-center gap-3"
                                >
                                    Book Protocol Session <Calendar size={24} />
                                </button>
                            </div>
                        ) : (
                            <>
                                {artifact.requiresInput && (
                                    <div className="bg-white/5 rounded-3xl p-6 border border-champagne/20">
                                        <label className="font-mono text-[10px] text-champagne uppercase tracking-widest block font-bold mb-4">
                                            {artifact.requiresInput === 'phone' ? 'Target Line (Format: +1...)' : 'Deployment Parameters'}
                                        </label>
                                        <input
                                            type={artifact.requiresInput === 'phone' ? 'tel' : 'text'}
                                            required
                                            placeholder={artifact.requiresInput === 'phone' ? '+1 555 000 0000' : 'Enter details...'}
                                            className="w-full bg-[#050508] border border-white/10 rounded-2xl px-6 py-4 text-ivory focus:outline-none focus:border-champagne transition-all font-ui text-lg placeholder:text-ivory/20"
                                            value={formData.customInput}
                                            onChange={(e) => setFormData({ ...formData, customInput: e.target.value })}
                                        />
                                    </div>
                                )}

                                <div className="space-y-4">
                                    <label className="font-mono text-[10px] text-ivory/40 uppercase tracking-widest ml-1 block">Your Identity</label>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <input
                                            type="text"
                                            required
                                            placeholder="First Name"
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-ivory focus:outline-none focus:border-champagne/50 transition-colors font-ui"
                                            value={formData.firstName}
                                            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                        />
                                        <input
                                            type="tel"
                                            required
                                            placeholder="Phone (+ Required)"
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-ivory focus:outline-none focus:border-champagne/50 transition-colors font-ui"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        />
                                    </div>
                                    <input
                                        type="email"
                                        required
                                        placeholder="Personal Email"
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-ivory focus:outline-none focus:border-champagne/50 transition-colors font-ui"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                                
                                {error && (
                                    <div className="bg-red-500/10 border border-red-500/30 p-4 rounded-xl">
                                        <p className="text-red-400 text-xs font-ui text-center">{error}</p>
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-champagne text-obsidian font-bold font-ui text-xl px-4 py-6 rounded-2xl mt-4 hover:shadow-[0_0_40px_rgba(201,168,76,0.4)] transition-all disabled:opacity-50 flex items-center justify-center gap-3"
                                >
                                    {isSubmitting ? 'Authenticating...' : 'Commence Execution'}
                                    {!isSubmitting && <ShieldCheck size={24} />}
                                </button>
                            </>
                        )}
                    </form>
                )}

                <div className="mt-10 flex items-center gap-4 justify-center">
                    <div className="h-px bg-white/5 flex-grow"></div>
                    <span className="font-mono text-[9px] text-ivory/20 uppercase tracking-[0.3em] whitespace-nowrap">Nirvana Private Protocol</span>
                    <div className="h-px bg-white/5 flex-grow"></div>
                </div>
            </div>
        </div>
    );
};

export default LeadCaptureModal;
