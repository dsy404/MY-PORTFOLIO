import React from 'react';
import { ArrowDown, ArrowUpRight, Github, MapPin, GraduationCap, FileText } from 'lucide-react';
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
      {/* Soft Multi-Tone Pastel Pink & Pastel Purple Ambient Glows */}
      <div 
        className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-pink-200/50 rounded-full blur-[140px] pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-purple-200/50 rounded-full blur-[130px] pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-10 right-10 w-[420px] h-[420px] bg-fuchsia-100/50 rounded-full blur-[120px] pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-16 left-12 w-[380px] h-[380px] bg-rose-100/50 rounded-full blur-[110px] pointer-events-none" 
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
            
            {/* Status & Identity Indicator with Pastel Pink & Purple Accents */}
            <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-slate-600 mb-6 font-mono">
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-purple-50 to-pink-50 border border-pink-200/90 text-purple-900 font-semibold shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-pink-500 animate-ping inline-block" />
                <span className="w-2 h-2 rounded-full bg-pink-500 inline-block -ml-3.5" />
                Available for internships & projects
              </span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-purple-50 border border-purple-200/80 text-purple-800 font-medium">
                <GraduationCap className="w-3.5 h-3.5 text-purple-600" />
                SRMCEM '29
              </span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="flex items-center gap-1 text-slate-600">
                <MapPin className="w-3 h-3 text-pink-500" />
                Lucknow, India
              </span>
            </div>

            {/* Main Primary Heading in Deep Navy with Pastel Purple to Pink Gradient */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display tracking-tight text-[#0a1128] leading-[1.08] mb-4 text-balance">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0a1128] via-purple-900 to-pink-600">Deepshikha Yadav.</span>
            </h1>

            {/* Secondary Role Kicker with Soft Pastel Purple & Pink Separations */}
            <p className="text-base sm:text-lg md:text-xl font-semibold text-purple-900 mb-5 tracking-tight flex flex-wrap items-center gap-x-2 gap-y-1">
              <span>B.Tech CSE Student</span>
              <span className="text-pink-400 font-bold">·</span>
              <span>Full-Stack Developer</span>
              <span className="text-purple-400 font-bold">·</span>
              <span>AI Enthusiast</span>
              <span className="text-fuchsia-400 font-bold">·</span>
              <span>Open Source Contributor</span>
            </p>

            {/* Introduction paragraph */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mb-8">
              {personalInfo.bio}
            </p>

            {/* Primary Action Buttons with Pastel Purple & Pink Accents */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <button
                onClick={() => scrollTo('projects')}
                className="px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-[#0a1128] via-purple-950 to-pink-950 hover:from-purple-900 hover:to-pink-900 active:from-black active:to-black rounded-xl transition-all shadow-md shadow-purple-500/10 flex items-center gap-2 group cursor-pointer"
              >
                <span>View My Work</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </button>

              <button
                onClick={() => scrollTo('resume')}
                className="px-5 py-3.5 text-sm font-semibold text-purple-950 bg-purple-50 hover:bg-purple-100 border border-purple-200/90 rounded-xl transition-all flex items-center gap-2 shadow-xs cursor-pointer"
              >
                <FileText className="w-4 h-4 text-purple-600" />
                <span>View Resume</span>
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className="px-6 py-3.5 text-sm font-semibold text-pink-950 bg-white hover:bg-pink-50/70 border border-pink-200 hover:border-pink-300 rounded-xl transition-all flex items-center gap-2 shadow-xs cursor-pointer"
              >
                <span>Let's Connect</span>
                <ArrowUpRight className="w-4 h-4 text-pink-600" />
              </button>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-3.5 text-sm font-medium text-slate-700 hover:text-purple-900 bg-white hover:bg-purple-50/70 border border-purple-100 hover:border-purple-300 rounded-xl transition-all flex items-center gap-2 shadow-2xs"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4 text-purple-600" />
                <span className="font-mono text-xs">github.com/{personalInfo.githubUsername}</span>
              </a>
            </div>

            {/* Quick Tech Highlights Bar with Pastel Purple & Pink Accents */}
            <div className="pt-6 border-t border-pink-100/90 w-full">
              <div className="text-xs font-mono text-purple-900 font-semibold mb-2.5 flex items-center gap-2">
                <span>CORE STACK & TOOLING</span>
                <span className="w-1.5 h-1.5 rounded-full bg-pink-500 inline-block" />
              </div>
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                <span className="px-2.5 py-1 rounded-lg bg-purple-50 text-purple-800 border border-purple-200/80 font-medium">Python</span>
                <span className="px-2.5 py-1 rounded-lg bg-pink-50 text-pink-800 border border-pink-200/80 font-medium">Pandas</span>
                <span className="px-2.5 py-1 rounded-lg bg-purple-50 text-purple-800 border border-purple-200/80 font-medium">C++</span>
                <span className="px-2.5 py-1 rounded-lg bg-fuchsia-50 text-fuchsia-800 border border-fuchsia-200/80 font-medium">NumPy</span>
                <span className="px-2.5 py-1 rounded-lg bg-purple-50 text-purple-800 border border-purple-200/80 font-medium">Scikit-Learn</span>
                <span className="px-2.5 py-1 rounded-lg bg-pink-50 text-pink-800 border border-pink-200/80 font-medium">SQL</span>
                <span className="px-2.5 py-1 rounded-lg bg-rose-50 text-rose-800 border border-rose-200/80 font-medium">Docker</span>
                <span className="px-2.5 py-1 rounded-lg bg-purple-50 text-purple-800 border border-purple-200/80 font-medium">n8n</span>
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
            <div className="w-full relative rounded-3xl bg-white border border-pink-200/80 hover:border-purple-300 shadow-xl shadow-purple-500/5 overflow-hidden transition-all duration-300">
              
              {/* Card Window Header Bar with Pastel Mac-Style Controls */}
              <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-purple-50/70 to-pink-50/70 border-b border-pink-100 text-xs font-mono text-slate-600">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-pink-300 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-purple-300 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-fuchsia-300 inline-block" />
                  <span className="ml-2 text-purple-900 font-semibold text-[11px]">deepshikha_profile.tsx</span>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-gradient-to-r from-purple-50 to-pink-50 text-purple-900 border border-pink-200/80 text-[11px] font-semibold shadow-2xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-pulse" />
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
                  <p className="text-xs sm:text-sm text-purple-800 font-semibold mt-0.5">
                    2nd-Year B.Tech Computer Science & Engineering
                  </p>
                  <p className="text-xs text-slate-600 mt-1 font-mono">
                    SRMCEM, Lucknow · Class of 2029
                  </p>
                </div>

                {/* 4 Pastel Highlights Micro-Grid featuring Pastel Purple & Pink */}
                <div className="grid grid-cols-2 gap-2.5 w-full text-left">
                  
                  {/* Focus */}
                  <div className="p-3 rounded-2xl bg-purple-50/90 border border-purple-200/90 shadow-2xs">
                    <div className="text-[10px] font-mono uppercase text-purple-800 font-bold tracking-wider mb-0.5">
                      FOCUS DOMAIN
                    </div>
                    <div className="text-xs font-bold text-[#0a1128]">
                      Full-Stack & AI/ML
                    </div>
                  </div>

                  {/* Open Source */}
                  <div className="p-3 rounded-2xl bg-pink-50/90 border border-pink-200/90 shadow-2xs">
                    <div className="text-[10px] font-mono uppercase text-pink-800 font-bold tracking-wider mb-0.5">
                      OPEN SOURCE
                    </div>
                    <div className="text-xs font-bold text-[#0a1128]">
                      GSSoC '26 Contributor
                    </div>
                  </div>

                  {/* Projects */}
                  <div className="p-3 rounded-2xl bg-fuchsia-50/90 border border-fuchsia-200/90 shadow-2xs">
                    <div className="text-[10px] font-mono uppercase text-fuchsia-800 font-bold tracking-wider mb-0.5">
                      PORTFOLIO WORK
                    </div>
                    <div className="text-xs font-bold text-[#0a1128]">
                      Phoenix AI & ML Models
                    </div>
                  </div>

                  {/* Competitions */}
                  <div className="p-3 rounded-2xl bg-rose-50/90 border border-rose-200/90 shadow-2xs">
                    <div className="text-[10px] font-mono uppercase text-rose-800 font-bold tracking-wider mb-0.5">
                      COMPETITIONS
                    </div>
                    <div className="text-xs font-bold text-[#0a1128]">
                      ET AI Hackathon
                    </div>
                  </div>

                </div>

                {/* Current Active Focus Snippet */}
                <div className="w-full p-3.5 rounded-2xl bg-gradient-to-r from-purple-50/60 via-pink-50/40 to-white border border-pink-100 text-left">
                  <div className="flex items-center justify-between text-[11px] font-mono text-purple-900 mb-1">
                    <span className="font-semibold text-purple-900">// CURRENT DEV FOCUS</span>
                    <span className="text-pink-600 font-bold">Python · scikit-learn · SQL</span>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Building accessible AI learning companions and machine learning classification workflows.
                  </p>
                </div>

                {/* Quick Profile Action Buttons */}
                <div className="flex items-center justify-center gap-3 w-full pt-1">
                  <button
                    onClick={() => scrollTo('projects')}
                    className="flex-1 py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-purple-900 to-pink-900 hover:from-purple-800 hover:to-pink-800 transition-colors cursor-pointer shadow-sm"
                  >
                    View Projects
                  </button>
                  <button
                    onClick={() => scrollTo('contact')}
                    className="flex-1 py-2.5 px-4 rounded-xl text-xs font-semibold text-purple-950 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 border border-pink-200 transition-colors cursor-pointer"
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
