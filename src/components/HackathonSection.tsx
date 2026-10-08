import React from 'react';
import { motion } from 'motion/react';
import { Timer, Code2, Users, Rocket } from 'lucide-react';

export const HackathonSection: React.FC = () => {
  return (
    <section id="hackathons" className="relative min-h-screen py-32 bg-[var(--color-plum)] overflow-hidden">
      {/* Dark background for contrast */}
      <div className="absolute inset-0 bg-dot-pattern opacity-10" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="mb-20 text-center flex flex-col items-center">
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
            className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-[var(--color-cream)] uppercase tracking-tighter"
          >
            Built Under Pressure
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[var(--color-peach)] font-mono text-sm mt-4 tracking-widest uppercase"
          >
            Ideas → Teams → Code → Demo
          </motion.p>
        </div>

        {/* Hackathon Featured Card - ET AI Hackathon */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="group relative w-full bg-white/5 rounded-[40px] border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden cursor-none p-1"
          data-cursor="explore"
        >
          {/* Spotlight Effect (CSS representation) */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-rose)]/0 via-[var(--color-rose)]/10 to-[var(--color-plum)]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          <div className="relative bg-[var(--color-plum)] rounded-[36px] overflow-hidden">
            {/* Top Bar - "Terminal" Style */}
            <div className="w-full bg-black/40 px-6 py-4 flex items-center justify-between border-b border-white/5">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="text-[10px] font-mono text-[var(--color-cream)]/50 tracking-widest">
                48 HOURS / BUILD / SHIP / PRESENT
              </div>
            </div>

            {/* Content Body */}
            <div className="p-8 md:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
              
              {/* Left Column: Details */}
              <div className="lg:col-span-7 space-y-8">
                <div>
                  <h4 className="text-[var(--color-rose)] font-mono text-sm font-bold mb-3 uppercase tracking-widest">
                    Economic Times × Hack2Skill
                  </h4>
                  <h3 className="text-4xl md:text-5xl font-display font-black text-[var(--color-cream)] leading-tight group-hover:-translate-y-1 transition-transform duration-300">
                    ET AI Hackathon
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm font-mono text-[var(--color-lavender)]">
                  <div className="flex items-center gap-3">
                    <Timer size={18} className="text-[var(--color-rose)]" />
                    <span>Time Constrained</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Code2 size={18} className="text-[var(--color-rose)]" />
                    <span>Rapid Prototyping</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users size={18} className="text-[var(--color-rose)]" />
                    <span>Team Collaboration</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Rocket size={18} className="text-[var(--color-rose)]" />
                    <span>Live Pitch & Demo</span>
                  </div>
                </div>

                {/* Animated progress line simulating the hackathon sprint */}
                <div className="w-full h-2 bg-black/40 rounded-full overflow-hidden mt-6">
                  <motion.div 
                    className="h-full bg-[var(--color-rose)]"
                    initial={{ width: "0%" }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
                  />
                </div>

                <button className="opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 px-6 py-3 bg-[var(--color-cream)] text-[var(--color-plum)] font-mono text-xs font-bold uppercase tracking-widest rounded-full hover:scale-105">
                  View Experience
                </button>
              </div>

              {/* Right Column: Visual Code Snippet */}
              <div className="lg:col-span-5 translate-x-4 opacity-80 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                <div className="bg-[#0a0a0a] rounded-2xl p-6 border border-white/10 shadow-2xl font-mono text-[10px] md:text-xs text-[var(--color-cream)]/70 overflow-hidden relative">
                  <div className="absolute top-0 right-0 p-4">
                    <span className="text-[var(--color-rose)] animate-pulse">● REC</span>
                  </div>
                  <pre className="text-left">
                    <code>
                      <span className="text-pink-400">import</span> {"{ "}LLMChain{" }"} <span className="text-pink-400">from</span> "langchain";<br/>
                      <span className="text-pink-400">const</span> sprint = <span className="text-purple-400">new</span> Hackathon();<br/><br/>
                      <span className="text-gray-500">// 48 hours remaining</span><br/>
                      <span className="text-blue-400">await</span> sprint.initializeTeam();<br/>
                      <span className="text-blue-400">await</span> sprint.brainstormArchitecture();<br/><br/>
                      <span className="text-pink-400">try</span> {"{"}<br/>
                      {"  "}<span className="text-blue-400">await</span> sprint.buildPrototype();<br/>
                      {"  "}<span className="text-blue-400">await</span> sprint.integrateAI();<br/>
                      {"}"} <span className="text-pink-400">catch</span> (bugs) {"{"}<br/>
                      {"  "}coffee.consume(999);<br/>
                      {"  "}<span className="text-blue-400">await</span> sprint.debugAndShip();<br/>
                      {"}"}<br/><br/>
                      <span className="text-gray-500">// Pitch time</span><br/>
                      sprint.presentToJury();
                    </code>
                  </pre>
                </div>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
