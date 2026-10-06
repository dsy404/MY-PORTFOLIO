import React from 'react';
import { ArrowDown, ArrowUpRight, Github, MapPin, GraduationCap, Terminal } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { personalInfo } from '../data/portfolioData';
import { Hero3DCanvas } from './Hero3DCanvas';
import { ProfileAvatar } from './ProfileAvatar';

export const Hero: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-white bg-grid-pattern"
    >
      {/* Soft Light Navy & Blue Ambient Background Gradients */}
      <div 
        className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-blue-100/60 rounded-full blur-[140px] pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-indigo-50/70 rounded-full blur-[120px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Typography & CTAs (7 cols) with Motion Entrance */}
          <motion.div 
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            
            {/* Status & Identity Indicator (clean unboxed text with typographic separators) */}
            <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-slate-600 mb-6 font-mono">
              <span className="flex items-center gap-1.5 text-blue-700 font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block" />
                <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block -ml-3.5" />
                Available for internships & projects
              </span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="flex items-center gap-1 text-slate-700">
                <GraduationCap className="w-3.5 h-3.5 text-blue-600" />
                SRMCEM Class of 2029
              </span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="flex items-center gap-1 text-slate-600">
                <MapPin className="w-3 h-3 text-slate-500" />
                Lucknow, India
              </span>
            </div>

            {/* Main Primary Heading in Deep Navy */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display tracking-tight text-[#0a1128] leading-[1.08] mb-4 text-balance">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0a1128] via-blue-800 to-blue-600">Deepshikha Yadav.</span>
            </h1>

            {/* Secondary Role Kicker */}
            <p className="text-base sm:text-lg md:text-xl font-semibold text-blue-700 mb-5 tracking-tight flex flex-wrap items-center gap-x-2 gap-y-1">
              <span>B.Tech CSE Student</span>
              <span className="text-blue-400 font-bold">·</span>
              <span>Full-Stack Developer</span>
              <span className="text-blue-400 font-bold">·</span>
              <span>AI Enthusiast</span>
              <span className="text-blue-400 font-bold">·</span>
              <span>Open Source Contributor</span>
            </p>

            {/* Introduction paragraph */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mb-8">
              {personalInfo.bio}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <button
                onClick={() => scrollTo('projects')}
                className="px-6 py-3.5 text-sm font-semibold text-white bg-[#0a1128] hover:bg-[#162a5c] active:bg-[#060c1d] rounded-xl transition-all shadow-md shadow-navy-950/20 flex items-center gap-2 group cursor-pointer"
              >
                <span>View My Work</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className="px-6 py-3.5 text-sm font-semibold text-[#0a1128] bg-white hover:bg-slate-50 border border-slate-300 hover:border-blue-600 rounded-xl transition-all flex items-center gap-2 shadow-xs cursor-pointer"
              >
                <span>Let's Connect</span>
                <ArrowUpRight className="w-4 h-4 text-blue-600" />
              </button>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-3.5 text-sm font-medium text-slate-700 hover:text-[#0a1128] bg-slate-50 hover:bg-blue-50/60 border border-slate-200 hover:border-slate-300 rounded-xl transition-all flex items-center gap-2"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4 text-blue-600" />
                <span className="font-mono text-xs">github.com/{personalInfo.githubUsername}</span>
              </a>
            </div>

            {/* Quick Tech Highlights Bar */}
            <div className="pt-6 border-t border-slate-200 w-full">
              <div className="text-xs font-mono text-slate-500 font-semibold mb-2">
                CORE STACK & TOOLING
              </div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-700">
                <span className="hover:text-blue-700 transition-colors font-medium">Python</span>
                <span className="text-slate-300">/</span>
                <span className="hover:text-blue-700 transition-colors font-medium">C++</span>
                <span className="text-slate-300">/</span>
                <span className="hover:text-blue-700 transition-colors font-medium">React</span>
                <span className="text-slate-300">/</span>
                <span className="hover:text-blue-700 transition-colors font-medium">Node.js</span>
                <span className="text-slate-300">/</span>
                <span className="hover:text-blue-700 transition-colors font-medium">Scikit-Learn</span>
                <span className="text-slate-300">/</span>
                <span className="hover:text-blue-700 transition-colors font-medium">SQL</span>
                <span className="text-slate-300">/</span>
                <span className="hover:text-blue-700 transition-colors font-medium">Docker</span>
                <span className="text-slate-300">/</span>
                <span className="hover:text-blue-700 transition-colors font-medium">n8n</span>
              </div>
            </div>

          </motion.div>

          {/* Right Column: 3D Developer & AI Interactive Canvas + Profile Card with Motion Entrance */}
          <motion.div 
            initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: shouldReduceMotion ? 0 : 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex flex-col items-center justify-center"
          >
            
            {/* 3D Canvas Box with crisp light frame aesthetic */}
            <div className="w-full relative rounded-2xl bg-white border border-slate-200 shadow-xl overflow-hidden">
              
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-slate-50 border-b border-slate-200 text-xs font-mono text-slate-600">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-400 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block" />
                  <span className="ml-2 text-slate-700 font-medium text-[11px]">neural_orbit_3d.sim</span>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-blue-700 font-semibold">
                  <Terminal className="w-3 h-3" />
                  <span>Interactive 3D</span>
                </div>
              </div>

              {/* The 3D Three.js Canvas */}
              <Hero3DCanvas />

              {/* Inset Profile Card Floating Overlay */}
              <div className="p-4 bg-white/95 border-t border-slate-200">
                <div className="flex items-center gap-3.5">
                  <ProfileAvatar size="sm" showBadge={false} />
                  <div>
                    <h3 className="text-sm font-bold text-[#0a1128] font-display">
                      Deepshikha Yadav
                    </h3>
                    <p className="text-xs text-blue-700 font-semibold">
                      2nd-Year B.Tech CSE @ SRMCEM
                    </p>
                    <p className="text-[11px] text-slate-500 mt-0.5 font-mono">
                      Expected Graduation: 2029
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
