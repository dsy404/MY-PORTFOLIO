import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { projectsData } from '../data/portfolioData';

export const ProjectsSection: React.FC = () => {
  const phoenixProject = projectsData.find(p => p.id === 'phoenix-ai') || projectsData[0];
  const genzifyProject = projectsData.find(p => p.id === 'genzify') || projectsData[1];
  const heartProject = projectsData.find(p => p.id === 'heart-disease-prediction') || projectsData[2];
  
  return (
    <section id="projects" className="relative bg-[var(--color-cream)] overflow-hidden">
      
      {/* Section Header */}
      <div className="py-32 px-6 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 60 }}
          viewport={{ once: true }}
          className="h-1 bg-[var(--color-rose)] mb-6"
        />
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-display font-black text-[var(--color-plum)] uppercase tracking-tighter"
        >
          Highlighted Projects
        </motion.h2>
        <p className="text-[var(--color-plum)]/60 font-mono text-sm mt-4 uppercase tracking-widest">
          Scroll to explore case studies
        </p>
      </div>

      {/* PROJECT 01 - PHOENIX AI (Editorial / Technical Case Study) */}
      <div className="min-h-screen relative flex items-center py-20 px-6 md:px-12 lg:px-24">
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Text Column */}
          <div className="order-2 lg:order-1 relative z-10">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h4 className="text-[var(--color-rose)] font-mono text-sm font-bold mb-4 uppercase tracking-widest">
                01 — Featured Case Study
              </h4>
              <h3 className="text-5xl md:text-7xl font-display font-black text-[var(--color-plum)] mb-8 leading-tight">
                {phoenixProject.title}
              </h3>
              
              <div className="space-y-6 mb-10">
                <div>
                  <h5 className="font-mono text-xs text-[var(--color-plum)]/60 font-bold uppercase tracking-wider mb-2">The Problem</h5>
                  <p className="font-sans text-[var(--color-plum)]/80 leading-relaxed font-medium">
                    Traditional AI assistants lack accessible local integration for non-technical users and require constant cloud dependency.
                  </p>
                </div>
                <div>
                  <h5 className="font-mono text-xs text-[var(--color-plum)]/60 font-bold uppercase tracking-wider mb-2">The Solution</h5>
                  <p className="font-sans text-[var(--color-plum)]/80 leading-relaxed font-medium">
                    {phoenixProject.summary}
                  </p>
                </div>
              </div>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 mb-10">
                {phoenixProject.techStack.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-[var(--color-lavender)]/50 text-[var(--color-plum)] rounded-full font-mono text-xs font-bold border border-[var(--color-lavender)]">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-4 cursor-none" data-cursor="hover">
                <a 
                  href={phoenixProject.demoUrl || phoenixProject.githubUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-[var(--color-plum)] text-[var(--color-cream)] rounded-full font-mono text-xs font-bold uppercase tracking-widest hover:scale-105 transition-transform"
                >
                  <ExternalLink size={16} /> Live Demo
                </a>
                <a 
                  href={phoenixProject.githubUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-transparent border border-[var(--color-plum)] text-[var(--color-plum)] rounded-full font-mono text-xs font-bold uppercase tracking-widest hover:bg-[var(--color-plum)]/5 transition-colors"
                >
                  <Github size={16} /> Source Code
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Image Column (Parallax & Scale) */}
          <div className="order-1 lg:order-2 relative w-full h-[50vh] lg:h-[80vh] rounded-[40px] overflow-hidden group cursor-none" data-cursor="project">
            <motion.div
              initial={{ scale: 1.1, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="absolute inset-0 w-full h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-lavender)] to-[var(--color-rose)] w-full h-full flex items-center justify-center font-display text-4xl text-[var(--color-plum)]/20 font-black group-hover:scale-105 transition-transform duration-1000 ease-out">
                {phoenixProject.title}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-cream)] via-transparent to-transparent opacity-60 lg:hidden" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* PROJECT 02 - GENZIFY (Playful Experimental Design) */}
      <div className="min-h-screen relative flex items-center py-20 px-6 md:px-12 lg:px-24 bg-[var(--color-lavender)]/30 overflow-hidden">
        {/* Playful Floating Slang Elements */}
        <motion.div animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 4 }} className="absolute top-[10%] right-[15%] px-4 py-2 bg-yellow-300 text-black font-display font-black text-2xl -rotate-12 border-2 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          FR FR 🧢
        </motion.div>
        <motion.div animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 5 }} className="absolute bottom-[20%] left-[10%] px-4 py-2 bg-pink-400 text-white font-display font-black text-2xl rotate-6 border-2 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-20">
          NO CAP
        </motion.div>

        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Image Column */}
          <div className="relative w-full h-[50vh] lg:h-[70vh] rounded-[40px] overflow-hidden group cursor-none border-4 border-[var(--color-plum)] shadow-2xl z-10" data-cursor="project">
            <motion.div
              initial={{ rotate: -5, scale: 0.9, opacity: 0 }}
              whileInView={{ rotate: 0, scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="absolute inset-0 w-full h-full bg-[var(--color-peach)] flex items-center justify-center font-display text-6xl text-[var(--color-plum)]/20 font-black group-hover:scale-110 transition-transform duration-700 ease-out"
            >
              {genzifyProject.title}
            </motion.div>
          </div>

          {/* Right Text Column */}
          <div className="relative z-10 text-right flex flex-col items-end">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h4 className="text-[var(--color-plum)] font-mono text-sm font-bold mb-4 uppercase tracking-widest">
                02 — Experimental Extension
              </h4>
              <h3 className="text-6xl md:text-8xl font-display font-black text-[var(--color-plum)] mb-6 leading-[0.8] tracking-tighter">
                {genzifyProject.title.split(' ')[0].toUpperCase()}
              </h3>
              
              <div className="bg-white/60 backdrop-blur-md p-8 rounded-3xl border border-[var(--color-plum)]/20 shadow-xl mb-8 text-left max-w-md ml-auto">
                <p className="font-sans text-[var(--color-plum)] leading-relaxed font-medium text-lg">
                  {genzifyProject.summary}
                </p>
                <div className="mt-4 pt-4 border-t border-[var(--color-plum)]/10">
                  <p className="font-mono text-xs text-[var(--color-plum)]/60 font-bold uppercase tracking-wider mb-2">Stack</p>
                  <p className="font-mono text-sm text-[var(--color-plum)] font-bold">{genzifyProject.techStack.join(' • ')}</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-end gap-4 cursor-none" data-cursor="hover">
                <a 
                  href={genzifyProject.githubUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-[var(--color-plum)] text-[var(--color-cream)] rounded-full font-mono text-xs font-bold uppercase tracking-widest hover:scale-105 transition-transform"
                >
                  <Github size={16} /> Source
                </a>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* PROJECT 03 - HEART DISEASE PREDICTION (Analytical / Clinical Design) */}
      <div className="min-h-screen relative flex items-center py-20 px-6 md:px-12 lg:px-24 bg-[var(--color-cream)]">
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Text Column */}
          <div className="order-2 lg:order-1 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h4 className="text-[var(--color-rose)] font-mono text-sm font-bold mb-4 uppercase tracking-widest">
                03 — Machine Learning Pipeline
              </h4>
              <h3 className="text-4xl md:text-6xl font-display font-black text-[var(--color-plum)] mb-4 leading-tight">
                {heartProject.title}
              </h3>
              <p className="font-mono text-sm text-[var(--color-plum)]/60 font-bold mb-8">
                {heartProject.tagline}
              </p>
              
              <div className="space-y-6 mb-10 border-l-2 border-[var(--color-rose)] pl-6">
                <div>
                  <h5 className="font-mono text-xs text-[var(--color-plum)]/60 font-bold uppercase tracking-wider mb-3">Core Highlights</h5>
                  <ul className="list-disc pl-5 font-sans text-[var(--color-plum)]/80 leading-relaxed font-medium space-y-2">
                    {heartProject.features.slice(0, 3).map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 mb-10">
                {heartProject.techStack.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-white text-[var(--color-plum)] rounded-full font-mono text-xs font-bold border border-[var(--color-lavender)] hover:border-[var(--color-rose)] hover:bg-[var(--color-rose)] hover:text-white transition-colors">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-4 cursor-none" data-cursor="hover">
                <a 
                  href={heartProject.githubUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-[var(--color-plum)] text-[var(--color-cream)] rounded-full font-mono text-xs font-bold uppercase tracking-widest hover:scale-105 transition-transform"
                >
                  <Github size={16} /> Repository
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Analytical Visualization Column */}
          <div className="order-1 lg:order-2 relative w-full h-[50vh] lg:h-[70vh] rounded-[40px] overflow-hidden group cursor-none border border-[var(--color-lavender)] bg-white shadow-xl flex items-center justify-center p-8" data-cursor="project">
            
            {/* Background grid */}
            <div className="absolute inset-0 bg-grid-pattern opacity-50" />
            
            {/* Abstract Data Visualization */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative z-10 w-full h-full flex flex-col justify-between"
            >
              {/* Top stats bar */}
              <div className="flex justify-between items-center border-b border-[var(--color-lavender)] pb-4">
                <div className="font-mono text-xs text-[var(--color-plum)] font-bold">ACCURACY: <span className="text-[var(--color-rose)]">85.2%</span></div>
                <div className="font-mono text-xs text-[var(--color-plum)] font-bold">MODEL: <span className="text-[var(--color-rose)]">LogReg</span></div>
              </div>
              
              {/* Central Chart Simulation */}
              <div className="flex-1 flex items-end justify-center gap-2 md:gap-4 py-8">
                {[40, 70, 45, 90, 65, 85, 30].map((height, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${height}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.1, type: "spring" }}
                    className="w-8 md:w-12 bg-gradient-to-t from-[var(--color-plum)] to-[var(--color-rose)] rounded-t-sm"
                  />
                ))}
              </div>
              
              {/* Bottom label */}
              <div className="text-center font-mono text-[10px] text-[var(--color-plum)]/50 tracking-widest uppercase border-t border-[var(--color-lavender)] pt-4">
                Clinical Risk Classification Distribution
              </div>
            </motion.div>

          </div>
        </div>
      </div>
      
    </section>
  );
};
