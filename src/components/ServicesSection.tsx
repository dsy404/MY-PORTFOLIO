import React from 'react';
import { motion } from 'motion/react';
import { Terminal, Database, Server, GitPullRequest, Search, CheckCircle2, Code2, Zap, Trophy, Flame } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="relative min-h-screen py-32 bg-[var(--color-plum)] overflow-hidden selection:bg-[var(--color-rose)] selection:text-[var(--color-cream)]">
      
      {/* Background terminal grid / noise */}
      <div className="absolute inset-0 opacity-[0.02] mix-blend-screen pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--color-rose)]/50 to-transparent opacity-50" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--color-rose)]/50 to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-24 text-center flex flex-col items-center">
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: 60 }}
            viewport={{ once: true }}
            className="w-1 bg-[var(--color-rose)] mb-6"
          />
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-display font-black text-[var(--color-cream)] uppercase tracking-tighter"
          >
            What I Do
          </motion.h2>
          <p className="text-[var(--color-rose)] font-mono text-sm mt-4 uppercase tracking-widest flex items-center justify-center gap-2">
            <Zap size={16} className="animate-pulse" />
            CORE COMPETENCIES
          </p>
        </div>

        <div className="flex flex-col gap-20">
          
          {/* SERVICE 1: FULL-STACK DEVELOPMENT */}
          <div className="w-full">
            <h3 className="text-sm font-mono text-[var(--color-cream)]/60 font-bold uppercase tracking-widest mb-6 ml-4 flex items-center gap-2">
              <span className="text-[var(--color-rose)]">01 //</span> Full-Stack Architecture
            </h3>
            
            <div className="w-full bg-[#1c1423] rounded-[32px] border border-[var(--color-rose)]/20 hover:border-[var(--color-rose)]/60 transition-colors shadow-2xl overflow-hidden group cursor-none" data-cursor="hover">
              
              {/* Browser Window Header */}
              <div className="bg-[#2d1b36] border-b border-[var(--color-rose)]/20 px-6 py-4 flex items-center gap-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/50 group-hover:bg-rose-500 transition-colors" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/50 group-hover:bg-amber-500 transition-colors" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/50 group-hover:bg-emerald-500 transition-colors" />
                </div>
                <div className="flex-1 bg-[#1c1423] rounded-full h-8 flex items-center px-4 text-xs font-mono text-[var(--color-cream)]/50 border border-[var(--color-rose)]/10">
                  <Search size={14} className="mr-2 text-[var(--color-rose)]" /> localhost:3000/architecture
                </div>
              </div>

              {/* Browser Content - Data Flow Visual */}
              <div className="p-8 md:p-12">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-4 relative">
                  
                  {/* Animated Data Line (Desktop) */}
                  <div className="hidden lg:block absolute top-1/2 left-[10%] right-[10%] h-0.5 bg-[var(--color-rose)]/10 -translate-y-1/2 z-0 overflow-hidden">
                    <motion.div 
                      className="w-24 h-full bg-[var(--color-rose)]"
                      animate={{ x: ["-100%", "500%"] }}
                      transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                    />
                  </div>

                  {/* Frontend */}
                  <div className="relative z-10 flex flex-col items-center bg-[#2d1b36] p-6 rounded-2xl border border-[var(--color-rose)]/20 shadow-xl hover:-translate-y-2 transition-transform duration-300">
                    <div className="w-16 h-16 rounded-full bg-[var(--color-rose)]/10 flex items-center justify-center text-[var(--color-rose)] mb-4">
                      <Terminal size={24} />
                    </div>
                    <span className="font-mono text-sm font-bold text-[var(--color-cream)]">Frontend</span>
                    <span className="text-[10px] text-[var(--color-cream)]/50 font-mono mt-2">React • Tailwind</span>
                  </div>

                  {/* API / Server */}
                  <div className="relative z-10 flex flex-col items-center bg-[#2d1b36] p-6 rounded-2xl border border-[var(--color-rose)]/20 shadow-xl hover:-translate-y-2 transition-transform duration-300 delay-75">
                    <div className="w-16 h-16 rounded-full bg-[var(--color-rose)]/10 flex items-center justify-center text-[var(--color-rose)] mb-4">
                      <Server size={24} />
                    </div>
                    <span className="font-mono text-sm font-bold text-[var(--color-cream)]">API Engine</span>
                    <span className="text-[10px] text-[var(--color-cream)]/50 font-mono mt-2">Node.js • Express</span>
                  </div>

                  {/* Database */}
                  <div className="relative z-10 flex flex-col items-center bg-[#2d1b36] p-6 rounded-2xl border border-[var(--color-rose)]/20 shadow-xl hover:-translate-y-2 transition-transform duration-300 delay-150">
                    <div className="w-16 h-16 rounded-full bg-[var(--color-rose)]/10 flex items-center justify-center text-[var(--color-rose)] mb-4">
                      <Database size={24} />
                    </div>
                    <span className="font-mono text-sm font-bold text-[var(--color-cream)]">Database</span>
                    <span className="text-[10px] text-[var(--color-cream)]/50 font-mono mt-2">SQL • MongoDB</span>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* SERVICE 2: OPEN SOURCE */}
          <div className="w-full">
            <h3 className="text-sm font-mono text-[var(--color-cream)]/60 font-bold uppercase tracking-widest mb-6 ml-4 flex items-center gap-2">
              <span className="text-[var(--color-rose)]">02 //</span> Open Source Contribution
            </h3>
            
            <div className="w-full bg-[#1c1423] rounded-[32px] border border-[var(--color-rose)]/20 hover:border-[var(--color-rose)]/60 transition-colors shadow-2xl overflow-hidden group cursor-none" data-cursor="hover">
              
              <div className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative">
                  
                  {/* Connection Line */}
                  <div className="hidden md:block absolute top-1/2 left-10 right-10 h-0.5 bg-[var(--color-rose)]/20 -translate-y-1/2 z-0" />

                  <div className="relative z-10 flex flex-col items-center gap-3 bg-[#2d1b36] px-6 py-4 rounded-xl border border-[var(--color-rose)]/20 text-[var(--color-cream)] group-hover:-translate-y-2 transition-transform">
                    <Code2 className="text-[var(--color-cream)]/70" />
                    <span className="font-mono text-xs font-bold">Write Code</span>
                  </div>

                  <motion.div 
                    animate={{ rotate: 360 }} 
                    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                    className="relative z-10 bg-[#1c1423] p-3 rounded-full border border-[var(--color-rose)]/30 text-[var(--color-rose)] hidden md:block"
                  >
                    <GitPullRequest size={20} />
                  </motion.div>

                  <div className="relative z-10 flex flex-col items-center gap-3 bg-[#2d1b36] px-6 py-4 rounded-xl border border-[var(--color-rose)]/20 text-[var(--color-cream)] group-hover:-translate-y-2 transition-transform delay-75">
                    <GitPullRequest className="text-emerald-400" />
                    <span className="font-mono text-xs font-bold">Submit PR</span>
                  </div>

                  <motion.div 
                    animate={{ scale: [1, 1.2, 1] }} 
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="relative z-10 bg-[#1c1423] p-3 rounded-full border border-[var(--color-rose)]/30 text-[var(--color-rose)] hidden md:block"
                  >
                    <CheckCircle2 size={20} className="text-[#a371f7]" />
                  </motion.div>

                  <div className="relative z-10 flex flex-col items-center gap-3 bg-[#2d1b36] px-6 py-4 rounded-xl border border-[var(--color-rose)]/20 text-[var(--color-cream)] group-hover:-translate-y-2 transition-transform delay-150">
                    <CheckCircle2 className="text-[#a371f7]" />
                    <span className="font-mono text-xs font-bold">Merged!</span>
                  </div>

                </div>

                <div className="mt-12 text-center text-[var(--color-cream)]/60 font-mono text-sm max-w-2xl mx-auto leading-relaxed">
                  Active participant in global open-source programs like GSSoC '26, collaborating with maintainers to fix bugs, build features, and improve documentation for the broader community.
                </div>
              </div>

            </div>
          </div>

          {/* SERVICE 3: HACKATHONS */}
          <div className="w-full">
            <h3 className="text-sm font-mono text-[var(--color-cream)]/60 font-bold uppercase tracking-widest mb-6 ml-4 flex items-center gap-2">
              <span className="text-[var(--color-rose)]">03 //</span> Hackathon Participations
            </h3>
            
            <div className="w-full bg-[#1c1423] rounded-[32px] border border-[var(--color-rose)]/20 hover:border-[var(--color-rose)]/60 transition-colors shadow-2xl overflow-hidden group cursor-none relative" data-cursor="hover">
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-rose)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              
              <div className="p-8 md:p-12 flex flex-col gap-6">
                
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-[var(--color-rose)]/10 text-[var(--color-rose)] flex items-center justify-center border border-[var(--color-rose)]/30 group-hover:scale-110 transition-transform">
                    <Trophy size={28} />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-3xl text-[var(--color-cream)]">Built Under Pressure</h4>
                    <p className="font-mono text-xs text-[var(--color-rose)] mt-1 uppercase tracking-widest">Rapid Prototyping Sprints</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* SIH */}
                  <div className="bg-[#2d1b36] p-6 rounded-2xl border border-[var(--color-rose)]/10 hover:border-[var(--color-rose)]/40 transition-colors shadow-lg group/card hover:-translate-y-1">
                    <Flame className="text-amber-500 mb-4 group-hover/card:scale-110 transition-transform" size={24} />
                    <h5 className="font-display font-bold text-xl text-[var(--color-cream)] mb-2">SIH</h5>
                    <p className="text-sm text-[var(--color-cream)]/60 font-mono leading-relaxed">Smart India Hackathon</p>
                  </div>
                  
                  {/* Intercollege Hackathon */}
                  <div className="bg-[#2d1b36] p-6 rounded-2xl border border-[var(--color-rose)]/10 hover:border-[var(--color-rose)]/40 transition-colors shadow-lg group/card hover:-translate-y-1">
                    <Flame className="text-amber-500 mb-4 group-hover/card:scale-110 transition-transform" size={24} />
                    <h5 className="font-display font-bold text-xl text-[var(--color-cream)] mb-2">Intercollege Hackathon</h5>
                    <p className="text-sm text-[var(--color-cream)]/60 font-mono leading-relaxed">Competitive campus engineering</p>
                  </div>

                  {/* ET Hackathon */}
                  <div className="bg-[#2d1b36] p-6 rounded-2xl border border-[var(--color-rose)]/10 hover:border-[var(--color-rose)]/40 transition-colors shadow-lg group/card hover:-translate-y-1">
                    <Flame className="text-amber-500 mb-4 group-hover/card:scale-110 transition-transform" size={24} />
                    <h5 className="font-display font-bold text-xl text-[var(--color-cream)] mb-2">ET Hackathon</h5>
                    <p className="text-sm text-[var(--color-cream)]/60 font-mono leading-relaxed">Economic Times Tech Challenge</p>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
