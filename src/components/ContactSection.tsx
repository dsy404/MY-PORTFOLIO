import React, { useState } from 'react';
import { 
  Mail, 
  Github, 
  Linkedin, 
  MapPin, 
  Phone, 
  Eye, 
  EyeOff, 
  Copy, 
  Check, 
  Send, 
  ArrowUpRight,
  MessageSquare
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { AnimatedSection } from './AnimatedSection';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [showPhone, setShowPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
      // Construct mailto link
      const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
        formData.subject || `Message from ${formData.name}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      window.location.href = mailtoUrl;
    }, 400);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-white border-t border-slate-200">
      
      {/* Background multi-tone pastel glows */}
      <div 
        className="absolute bottom-0 left-1/4 w-[500px] h-[400px] bg-purple-100/50 rounded-full blur-[140px] pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-10 right-1/4 w-[450px] h-[380px] bg-sky-100/45 rounded-full blur-[130px] pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[400px] h-[300px] bg-rose-100/35 rounded-full blur-[120px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Fade & Slide-up */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-mono uppercase tracking-widest text-indigo-700 font-semibold mb-2 flex items-center justify-center gap-2">
            <span>START A CONVERSATION</span>
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 inline-block" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-[#0a1128] tracking-tight mb-4 text-balance">
            Let's Build Something Meaningful Together.
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 via-purple-500 to-rose-400 rounded-full mx-auto mb-4" />
          <p className="text-base text-slate-600 leading-relaxed max-w-xl mx-auto">
            I'm always interested in learning, building, collaborating, contributing to open source, and exploring new technology.
          </p>
        </AnimatedSection>

        {/* Contact Layout: Info Cards (5 cols) & Form (7 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Communication Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <AnimatedSection direction="up" delay={0.1} className="space-y-4">
              
              {/* Email Card with Pastel Sky */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-sky-300 shadow-sm group transition-all">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-sky-100 text-sky-800 border border-sky-200 shadow-2xs">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-slate-500 font-semibold">EMAIL DIRECTLY</div>
                      <a 
                        href={`mailto:${personalInfo.email}`}
                        className="text-sm font-bold text-[#0a1128] hover:text-sky-700 transition-colors break-all"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="p-2 text-slate-400 hover:text-black rounded-lg hover:bg-sky-50 transition-colors cursor-pointer"
                    title="Copy email address"
                    aria-label="Copy email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-600 font-bold" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* GitHub Card with Pastel Purple */}
              <a 
                href={personalInfo.github} 
                target="_blank" 
                rel="noreferrer"
                className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-purple-300 hover:shadow-md shadow-sm flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-purple-100 text-purple-800 border border-purple-200 shadow-2xs">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-500 font-semibold">GITHUB PROFILE</div>
                    <div className="text-sm font-bold text-[#0a1128] group-hover:text-purple-700 transition-colors">
                      github.com/{personalInfo.githubUsername}
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-purple-700 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              {/* LinkedIn Card with Pastel Blue */}
              <a 
                href={personalInfo.linkedin} 
                target="_blank" 
                rel="noreferrer"
                className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-md shadow-sm flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-blue-100 text-blue-800 border border-blue-200 shadow-2xs">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-500 font-semibold">LINKEDIN PROFILE</div>
                    <div className="text-sm font-bold text-[#0a1128] group-hover:text-blue-700 transition-colors">
                      {personalInfo.linkedinName}
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-700 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              {/* Location & Optional Phone Card with Pastel Mint & Rose */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-emerald-100 text-emerald-800 border border-emerald-200 shadow-2xs">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-500 font-semibold">LOCATION</div>
                    <div className="text-sm font-bold text-[#0a1128]">
                      {personalInfo.location}
                    </div>
                  </div>
                </div>

                {/* Click-to-reveal phone for professional privacy */}
                <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-700">
                    <Phone className="w-4 h-4 text-blue-600" />
                    <span className="font-semibold">Phone:</span>
                    {showPhone ? (
                      <a href={`tel:${personalInfo.phone}`} className="text-[#0a1128] hover:text-blue-700 font-bold">
                        +91 {personalInfo.phone}
                      </a>
                    ) : (
                      <span className="text-slate-400">•••••••••• (Click to reveal)</span>
                    )}
                  </div>

                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => setShowPhone(!showPhone)}
                      className="p-1.5 text-slate-500 hover:text-black rounded-md hover:bg-slate-200 transition-colors cursor-pointer"
                      aria-label={showPhone ? "Hide phone" : "Reveal phone"}
                    >
                      {showPhone ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                    </button>
                    {showPhone && (
                      <button
                        onClick={handleCopyPhone}
                        className="p-1.5 text-slate-500 hover:text-black rounded-md hover:bg-slate-200 transition-colors cursor-pointer"
                        title="Copy phone"
                      >
                        {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-600 font-bold" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    )}
                  </div>
                </div>
              </div>

            </AnimatedSection>
          </div>

          {/* Right Column: Contact Message Form (7 cols) */}
          <div className="lg:col-span-7">
            <AnimatedSection direction="up" delay={0.2}>
              <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xl">
                
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200">
                  <div className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-blue-700" />
                    <h3 className="text-base font-bold font-display text-[#0a1128]">
                      Send a Direct Message
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-blue-700 font-semibold">
                    Quick Turnaround
                  </span>
                </div>

                {formStatus === 'success' ? (
                  <div className="p-6 rounded-2xl bg-blue-50 border border-blue-200 text-center space-y-3">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                      <Check className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-bold font-display text-[#0a1128]">
                      Message Prepared!
                    </h4>
                    <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                      Opening your default email client to send to <strong className="text-blue-800 font-bold">{personalInfo.email}</strong>.
                    </p>
                    <button
                      onClick={() => {
                        setFormStatus('idle');
                        setFormData({ name: '', email: '', subject: '', message: '' });
                      }}
                      className="mt-4 px-4 py-2 text-xs font-semibold text-white bg-[#0a1128] hover:bg-[#162a5c] rounded-lg cursor-pointer transition-colors shadow-xs"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono text-slate-600 font-semibold mb-1.5">
                          YOUR NAME *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Alex Sharma"
                          className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-hidden focus:border-blue-600 transition-colors shadow-2xs"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono text-slate-600 font-semibold mb-1.5">
                          EMAIL ADDRESS *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="alex@example.com"
                          className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-hidden focus:border-blue-600 transition-colors shadow-2xs"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-600 font-semibold mb-1.5">
                        SUBJECT / TOPIC
                      </label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="e.g. Internship Opportunity / Open Source Collaboration / Project Chat"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-hidden focus:border-blue-600 transition-colors shadow-2xs"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-600 font-semibold mb-1.5">
                        YOUR MESSAGE *
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Hi Deepshikha, I saw your work on Phoenix AI and would love to connect about..."
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-hidden focus:border-blue-600 transition-colors resize-none shadow-2xs"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={formStatus === 'submitting'}
                      className="w-full py-3.5 px-6 rounded-xl bg-[#0a1128] hover:bg-[#162a5c] active:bg-[#060c1d] text-white font-semibold text-xs sm:text-sm transition-all shadow-md shadow-navy-950/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      <Send className="w-4 h-4 text-blue-300" />
                      <span>{formStatus === 'submitting' ? 'Preparing Message...' : 'Send Message'}</span>
                    </button>
                  </form>
                )}

              </div>
            </AnimatedSection>
          </div>

        </div>

      </div>
    </section>
  );
};
