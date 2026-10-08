import React from 'react';
import { motion } from 'motion/react';
import { Terminal, Database, Server, GitPullRequest, Search, CheckCircle2 } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="relative min-h-screen py-32 bg-[var(--color-cream)] overflow-hidden">
      
      {/* Decorative background shapes */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-b from-[var(--color-lavender)]/40 to-transparent rounded-bl-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-[var(--color-peach)]/40 to-transparent rounded-tr-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
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
            className="text-5xl md:text-7xl font-display font-black text-[var(--color-plum)] uppercase tracking-tighter"
          >
            What I Do
          </motion.h2>
        </div>

        <div className="flex flex-col gap-24">
          
          {/* SERVICE 1: FULL-STACK DEVELOPMENT */}
          <div className="w-full">
            <h3 className="text-sm font-mono text-[var(--color-plum)]/60 font-bold uppercase tracking-widest mb-6 ml-4">
              01 — Full-Stack Architecture
            </h3>
            
            <div className="w-full bg-white/70 backdrop-blur-xl rounded-[32px] border-2 border-[var(--color-lavender)] shadow-2xl shadow-[var(--color-plum)]/5 overflow-hidden group cursor-none" data-cursor="hover">
              
              {/* Browser Window Header */}
              <div className="bg-[var(--color-lavender)]/30 border-b border-[var(--color-lavender)] px-6 py-4 flex items-center gap-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                </div>
                <div className="flex-1 bg-white/50 rounded-full h-8 flex items-center px-4 text-xs font-mono text-[var(--color-plum)]/50">
                  <Search size={14} className="mr-2" /> localhost:3000/architecture
                </div>
              </div>

              {/* Browser Content - Data Flow Visual */}
              <div className="p-8 md:p-12">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-4 relative">
                  
                  {/* Animated Data Line (Desktop) */}
                  <div className="hidden lg:block absolute top-1/2 left-[10%] right-[10%] h-0.5 bg-[var(--color-plum)]/10 -translate-y-1/2 z-0 overflow-hidden">
                    <motion.div 
                      className="w-24 h-full bg-[var(--color-rose)]"
                      animate={{ x: ["-100%", "500%"] }}
                      transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                    />
                  </div>

                  {/* Frontend */}
                  <div className="relative z-10 flex flex-col items-center bg-white p-6 rounded-2xl border border-[var(--color-lavender)] shadow-xl hover:scale-105 transition-transform duration-300">
                    <div className="w-16 h-16 rounded-full bg-[var(--color-peach)] flex items-center justify-center text-[var(--color-plum)] mb-4">
                      <Terminal size={24} />
                    </div>
                    <span className="font-mono text-sm font-bold text-[var(--color-plum)]">Frontend</span>
                    <span className="text-[10px] text-[var(--color-plum)]/60 font-mono mt-2">React • Tailwind</span>
                  </div>

                  {/* API / Server */}
                  <div className="relative z-10 flex flex-col items-center bg-white p-6 rounded-2xl border border-[var(--color-lavender)] shadow-xl hover:scale-105 transition-transform duration-300">
                    <div className="w-16 h-16 rounded-full bg-[var(--color-blush)] flex items-center justify-center text-[var(--color-plum)] mb-4">
                      <Server size={24} />
                    </div>
                    <span className="font-mono text-sm font-bold text-[var(--color-plum)]">API Engine</span>
                    <span className="text-[10px] text-[var(--color-plum)]/60 font-mono mt-2">Node.js • Express</span>
                  </div>

                  {/* Database */}
                  <div className="relative z-10 flex flex-col items-center bg-white p-6 rounded-2xl border border-[var(--color-lavender)] shadow-xl hover:scale-105 transition-transform duration-300">
                    <div className="w-16 h-16 rounded-full bg-[var(--color-rose)] flex items-center justify-center text-[var(--color-plum)] mb-4">
                      <Database size={24} />
                    </div>
                    <span className="font-mono text-sm font-bold text-[var(--color-plum)]">Database</span>
                    <span className="text-[10px] text-[var(--color-plum)]/60 font-mono mt-2">SQL • MongoDB</span>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* SERVICE 2: OPEN SOURCE */}
          <div className="w-full">
            <h3 className="text-sm font-mono text-[var(--color-plum)]/60 font-bold uppercase tracking-widest mb-6 ml-4">
              02 — Open Source Contribution
            </h3>
            
            <div className="w-full bg-[#0d1117] rounded-[32px] border border-[#30363d] shadow-2xl overflow-hidden group cursor-none" data-cursor="hover">
              
              <div className="p-8 md:p-12">
                {/* GitHub style visual */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative">
                  
                  {/* Connection Line */}
                  <div className="hidden md:block absolute top-1/2 left-10 right-10 h-0.5 bg-[#30363d] -translate-y-1/2 z-0" />

                  <div className="relative z-10 flex flex-col items-center gap-3 bg-[#161b22] px-6 py-4 rounded-xl border border-[#30363d] text-[#c9d1d9] group-hover:-translate-y-2 transition-transform">
                    <Code2 className="text-[#8b949e]" />
                    <span className="font-mono text-xs font-bold">Write Code</span>
                  </div>

                  <motion.div 
                    animate={{ rotate: 360 }} 
                    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                    className="relative z-10 bg-[#21262d] p-3 rounded-full border border-[#30363d] text-[#8b949e] hidden md:block"
                  >
                    <GitPullRequest size={20} />
                  </motion.div>

                  <div className="relative z-10 flex flex-col items-center gap-3 bg-[#161b22] px-6 py-4 rounded-xl border border-[#30363d] text-[#c9d1d9] group-hover:-translate-y-2 transition-transform delay-75">
                    <GitPullRequest className="text-[#3fb950]" />
                    <span className="font-mono text-xs font-bold">Submit PR</span>
                  </div>

                  <motion.div 
                    animate={{ scale: [1, 1.2, 1] }} 
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="relative z-10 bg-[#21262d] p-3 rounded-full border border-[#30363d] text-[#8b949e] hidden md:block"
                  >
                    <CheckCircle2 size={20} className="text-[#a371f7]" />
                  </motion.div>

                  <div className="relative z-10 flex flex-col items-center gap-3 bg-[#161b22] px-6 py-4 rounded-xl border border-[#30363d] text-[#c9d1d9] group-hover:-translate-y-2 transition-transform delay-150">
                    <CheckCircle2 className="text-[#a371f7]" />
                    <span className="font-mono text-xs font-bold">Merged!</span>
                  </div>

                </div>

                <div className="mt-12 text-center text-[#8b949e] font-mono text-sm max-w-2xl mx-auto leading-relaxed">
                  Active participant in global open-source programs like GSSoC '26, collaborating with maintainers to fix bugs, build features, and improve documentation for the broader community.
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
