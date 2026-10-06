import React from 'react';
import { ArrowDown, ArrowUpRight, Github, MapPin, GraduationCap } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { personalInfo } from '../data/portfolioData';
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
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-pastel-mesh-hero bg-grid-pattern"
    >
      {/* Soft Multi-Tone Pastel Ambient Glows */}
      <div 
        className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-sky-200/45 rounded-full blur-[140px] pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-purple-200/40 rounded-full blur-[130px] pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-10 right-10 w-[420px] h-[420px] bg-rose-100/50 rounded-full blur-[120px] pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-16 left-12 w-[380px] h-[380px] bg-emerald-100/50 rounded-full blur-[110px] pointer-events-none" 
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
            
            {/* Status & Identity Indicator with Pastel Mint & Sky Accents */}
            <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-slate-600 mb-6 font-mono">
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/90 text-emerald-800 font-semibold shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block" />
                <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block -ml-3.5" />
                Available for internships & projects
              </span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-sky-50 border border-sky-200/80 text-sky-800 font-medium">
                <GraduationCap className="w-3.5 h-3.5 text-sky-600" />
                SRMCEM '29
              </span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="flex items-center gap-1 text-slate-600">
                <MapPin className="w-3 h-3 text-slate-500" />
                Lucknow, India
              </span>
            </div>

            {/* Main Primary Heading in Deep Navy */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display tracking-tight text-[#0a1128] leading-[1.08] mb-4 text-balance">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0a1128] via-blue-800 to-indigo-600">Deepshikha Yadav.</span>
            </h1>

            {/* Secondary Role Kicker with Soft Pastel Tinted Separation */}
            <p className="text-base sm:text-lg md:text-xl font-semibold text-blue-800 mb-5 tracking-tight flex flex-wrap items-center gap-x-2 gap-y-1">
              <span>B.Tech CSE Student</span>
              <span className="text-purple-400 font-bold">·</span>
              <span>Full-Stack Developer</span>
              <span className="text-sky-400 font-bold">·</span>
              <span>AI Enthusiast</span>
              <span className="text-emerald-400 font-bold">·</span>
              <span>Open Source Contributor</span>
            </p>

            {/* Introduction paragraph */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mb-8">
              {personalInfo.bio}
            </p>

            {/* Primary Action Buttons with subtle pastel highlights */}
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
                className="px-6 py-3.5 text-sm font-semibold text-[#0a1128] bg-white hover:bg-purple-50/60 border border-slate-300 hover:border-purple-300 rounded-xl transition-all flex items-center gap-2 shadow-xs cursor-pointer"
              >
                <span>Let's Connect</span>
                <ArrowUpRight className="w-4 h-4 text-purple-600" />
              </button>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-3.5 text-sm font-medium text-slate-700 hover:text-[#0a1128] bg-white hover:bg-sky-50/70 border border-slate-200 hover:border-sky-300 rounded-xl transition-all flex items-center gap-2 shadow-2xs"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4 text-sky-600" />
                <span className="font-mono text-xs">github.com/{personalInfo.githubUsername}</span>
              </a>
            </div>

            {/* Quick Tech Highlights Bar with Pastel Accents */}
            <div className="pt-6 border-t border-slate-200 w-full">
              <div className="text-xs font-mono text-slate-500 font-semibold mb-2.5 flex items-center gap-2">
                <span>CORE STACK & TOOLING</span>
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 inline-block" />
              </div>
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                <span className="px-2.5 py-1 rounded-lg bg-sky-50 text-sky-800 border border-sky-200/80 font-medium">Python</span>
                <span className="px-2.5 py-1 rounded-lg bg-blue-50 text-blue-800 border border-blue-200/80 font-medium">C++</span>
                <span className="px-2.5 py-1 rounded-lg bg-purple-50 text-purple-800 border border-purple-200/80 font-medium">Pandas</span>
                <span className="px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200/80 font-medium">NumPy</span>
                <span className="px-2.5 py-1 rounded-lg bg-indigo-50 text-indigo-800 border border-indigo-200/80 font-medium">Scikit-Learn</span>
                <span className="px-2.5 py-1 rounded-lg bg-amber-50 text-amber-800 border border-amber-200/80 font-medium">SQL</span>
                <span className="px-2.5 py-1 rounded-lg bg-rose-50 text-rose-800 border border-rose-200/80 font-medium">Docker</span>
                <span className="px-2.5 py-1 rounded-lg bg-teal-50 text-teal-800 border border-teal-200/80 font-medium">n8n</span>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Developer Profile Showcase Card with Motion Entrance */}
          <motion.div 
            initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: shouldReduceMotion ? 0 : 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex flex-col items-center justify-center w-full"
          >
            
            {/* Developer Profile Card Frame with crisp light aesthetic and pastel borders */}
            <div className="w-full relative rounded-3xl bg-white border border-slate-200 hover:border-purple-200 shadow-xl overflow-hidden transition-all duration-300">
              
              {/* Card Window Header Bar with Pastel Mac-Style Controls */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-50/90 border-b border-slate-200 text-xs font-mono text-slate-600">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-300 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-300 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-300 inline-block" />
                  <span className="ml-2 text-slate-700 font-semibold text-[11px]">deepshikha_profile.tsx</span>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/80 text-[11px] font-semibold shadow-2xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Student & Developer</span>
                </div>
              </div>

              {/* Card Main Body */}
              <div className="p-6 sm:p-7 flex flex-col items-center text-center space-y-5">
                
                {/* Profile Avatar with Pastel Ring */}
                <div className="pt-1">
                  <ProfileAvatar size="md" showBadge={true} />
                </div>

                {/* Identity & Academic Info */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-[#0a1128]">
                    Deepshikha Yadav
                  </h3>
                  <p className="text-xs sm:text-sm text-indigo-700 font-semibold mt-0.5">
                    2nd-Year B.Tech Computer Science & Engineering
                  </p>
                  <p className="text-xs text-slate-600 mt-1 font-mono">
                    SRMCEM, Lucknow · Class of 2029
                  </p>
                </div>

                {/* 4 Pastel Highlights Micro-Grid */}
                <div className="grid grid-cols-2 gap-2.5 w-full text-left">
                  
                  {/* Focus */}
                  <div className="p-3 rounded-2xl bg-sky-50/80 border border-sky-200/80 shadow-2xs">
                    <div className="text-[10px] font-mono uppercase text-sky-800 font-bold tracking-wider mb-0.5">
                      FOCUS DOMAIN
                    </div>
                    <div className="text-xs font-bold text-[#0a1128]">
                      Full-Stack & AI/ML
                    </div>
                  </div>

                  {/* Open Source */}
                  <div className="p-3 rounded-2xl bg-purple-50/80 border border-purple-200/80 shadow-2xs">
                    <div className="text-[10px] font-mono uppercase text-purple-800 font-bold tracking-wider mb-0.5">
                      OPEN SOURCE
                    </div>
                    <div className="text-xs font-bold text-[#0a1128]">
                      GSSoC '26 Contributor
                    </div>
                  </div>

                  {/* Projects */}
                  <div className="p-3 rounded-2xl bg-emerald-50/80 border border-emerald-200/80 shadow-2xs">
                    <div className="text-[10px] font-mono uppercase text-emerald-800 font-bold tracking-wider mb-0.5">
                      PORTFOLIO WORK
                    </div>
                    <div className="text-xs font-bold text-[#0a1128]">
                      Phoenix AI & ML Models
                    </div>
                  </div>

                  {/* Hackathons */}
                  <div className="p-3 rounded-2xl bg-amber-50/80 border border-amber-200/80 shadow-2xs">
                    <div className="text-[10px] font-mono uppercase text-amber-800 font-bold tracking-wider mb-0.5">
                      COMPETITIONS
                    </div>
                    <div className="text-xs font-bold text-[#0a1128]">
                      ET AI Hackathon
                    </div>
                  </div>

                </div>

                {/* Current Active Focus Snippet */}
                <div className="w-full p-3.5 rounded-2xl bg-slate-50/90 border border-slate-200 text-left">
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 mb-1">
                    <span className="font-semibold text-slate-700">// CURRENT DEV FOCUS</span>
                    <span className="text-indigo-600 font-bold">Python · scikit-learn · SQL</span>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Building accessible AI learning companions and machine learning classification workflows.
                  </p>
                </div>

                {/* Quick Profile Action Buttons */}
                <div className="flex items-center justify-center gap-3 w-full pt-1">
                  <button
                    onClick={() => scrollTo('projects')}
                    className="flex-1 py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-[#0a1128] hover:bg-[#162a5c] transition-colors cursor-pointer shadow-sm"
                  >
                    View Projects
                  </button>
                  <button
                    onClick={() => scrollTo('contact')}
                    className="flex-1 py-2.5 px-4 rounded-xl text-xs font-semibold text-[#0a1128] bg-purple-50/70 hover:bg-purple-100 text-purple-900 border border-purple-200 transition-colors cursor-pointer"
                  >
                    Get in Touch
                  </button>
                </div>

              </div>

            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
