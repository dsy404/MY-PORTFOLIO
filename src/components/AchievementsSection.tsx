import React from 'react';
import { motion } from 'motion/react';
import { Terminal, Code2, Zap, CheckCircle2 } from 'lucide-react';
import { hackathonsData } from '../data/portfolioData';

export const AchievementsSection: React.FC = () => {
  return (
    <section id="achievements" className="relative py-32 bg-[var(--color-plum)] overflow-hidden selection:bg-[var(--color-rose)] selection:text-[var(--color-cream)]">
      
      {/* Background terminal grid / noise */}
      <div className="absolute inset-0 opacity-[0.02] mix-blend-screen pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--color-rose)]/50 to-transparent opacity-50" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--color-rose)]/50 to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-20 text-center lg:text-left flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 60 }}
              viewport={{ once: true }}
              className="h-1 bg-[var(--color-rose)] mb-6 mx-auto lg:mx-0"
            />
            <h2 className="text-4xl md:text-6xl font-display font-black text-[var(--color-cream)] uppercase tracking-tighter">
              Hackathons
            </h2>
            <p className="text-[var(--color-rose)] font-mono text-sm mt-4 uppercase tracking-widest flex items-center justify-center lg:justify-start gap-2">
              <Zap size={16} className="animate-pulse" />
              Built Under Pressure
            </p>
          </div>
          
          <div className="hidden lg:flex items-center gap-4 bg-[var(--color-cream)]/5 px-6 py-3 rounded-full border border-[var(--color-rose)]/20 text-[var(--color-cream)] font-mono text-xs">
            <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[var(--color-rose)] animate-pulse" /> SYSTEM: ONLINE</span>
            <span className="text-[var(--color-rose)]">|</span>
            <span>ENV: HACKATHON</span>
          </div>
        </div>

        {/* Hackathons Terminal Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {hackathonsData.map((hackathon, index) => (
            <motion.div
              key={hackathon.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group relative bg-[#1c1423] rounded-2xl border border-[var(--color-rose)]/20 hover:border-[var(--color-rose)]/60 transition-colors overflow-hidden flex flex-col cursor-none"
              data-cursor="hover"
            >
              {/* Fake Terminal Header */}
              <div className="h-10 bg-[#2d1b36] border-b border-[var(--color-rose)]/20 flex items-center px-4 justify-between">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/50 group-hover:bg-rose-500 transition-colors" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/50 group-hover:bg-amber-500 transition-colors" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/50 group-hover:bg-emerald-500 transition-colors" />
                </div>
                <div className="font-mono text-[10px] text-[var(--color-rose)]/50 tracking-widest uppercase">
                  {hackathon.date}
                </div>
              </div>

              {/* Terminal Body */}
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-rose)]/10 text-[var(--color-rose)] flex items-center justify-center border border-[var(--color-rose)]/30 group-hover:scale-110 transition-transform">
                    <Terminal size={24} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-2xl text-[var(--color-cream)]">{hackathon.title}</h3>
                    <p className="font-mono text-xs text-[var(--color-rose)] mt-2">
                      &gt; {hackathon.organizer}
                    </p>
                  </div>
                </div>

                <p className="font-sans text-[var(--color-cream)]/70 leading-relaxed font-medium mb-8">
                  {hackathon.summary}
                </p>

                <div className="mt-auto space-y-3 mb-8">
                  {hackathon.learnings.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-[var(--color-rose)] mt-0.5 shrink-0" />
                      <p className="font-sans text-sm text-[var(--color-cream)]/80">{item}</p>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Array */}
                <div className="pt-6 border-t border-[var(--color-rose)]/20">
                  <div className="flex items-center gap-2 mb-3">
                    <Code2 size={14} className="text-[var(--color-rose)]/70" />
                    <span className="font-mono text-[10px] text-[var(--color-cream)]/50 uppercase tracking-widest">Dependencies Executed</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {hackathon.skillsApplied.map(skill => (
                      <span key={skill} className="px-3 py-1 bg-[var(--color-rose)]/10 text-[var(--color-rose)] rounded-md font-mono text-xs border border-[var(--color-rose)]/20 group-hover:bg-[var(--color-rose)] group-hover:text-[var(--color-cream)] transition-colors">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-rose)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
};
