import React from 'react';
import { 
  Code2, 
  Sparkles, 
  GitPullRequest, 
  Lightbulb, 
  MapPin, 
  GraduationCap, 
  Target,
  Compass,
} from 'lucide-react';
import { personalInfo, aboutPillars } from '../data/portfolioData';
import { ProfileAvatar } from './ProfileAvatar';
import { AnimatedSection } from './AnimatedSection';

export const AboutSection: React.FC = () => {
  const getPillarIcon = (number: string) => {
    switch (number) {
      case '01': return <Code2 className="w-5 h-5 text-blue-600" />;
      case '02': return <Sparkles className="w-5 h-5 text-sky-600" />;
      case '03': return <GitPullRequest className="w-5 h-5 text-indigo-600" />;
      case '04': return <Lightbulb className="w-5 h-5 text-amber-500" />;
      default: return <Compass className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-50/70 border-t border-slate-200">
      
      {/* Background glow */}
      <div 
        className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-blue-100/50 rounded-full blur-[100px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Fade & Slide-up */}
        <AnimatedSection className="mb-16">
          <div className="text-xs font-mono uppercase tracking-widest text-blue-700 font-semibold mb-2">
            BIOGRAPHY & PHILOSOPHY
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-[#0a1128] tracking-tight">
            About Me
          </h2>
          <div className="w-16 h-1 bg-blue-600 rounded-full mt-4" />
        </AnimatedSection>

        {/* Narrative & Visual Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Column: Interactive Framed Profile Visual & Key Stats (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <AnimatedSection direction="up" delay={0.1} className="w-full max-w-md">
              <div className="relative p-8 rounded-3xl bg-white border border-slate-200 shadow-xl w-full flex flex-col items-center text-center group">
                
                {/* Profile Avatar with subtle glow */}
                <div className="mb-6">
                  <ProfileAvatar size="lg" showBadge={true} />
                </div>

                <h3 className="text-xl font-bold font-display text-[#0a1128] mb-1">
                  Deepshikha Yadav
                </h3>
                <p className="text-sm font-semibold text-blue-700 mb-2">
                  Computer Science & Engineering Student
                </p>
                
                {/* Institution & Location details */}
                <div className="flex flex-col gap-1.5 text-xs text-slate-700 font-mono mb-6 w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 flex items-center gap-1.5">
                      <GraduationCap className="w-3.5 h-3.5 text-blue-600" />
                      College
                    </span>
                    <span className="text-[#0a1128] font-semibold text-right">SRMCEM, Lucknow</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 flex items-center gap-1.5">
                      <Target className="w-3.5 h-3.5 text-sky-600" />
                      Cohort
                    </span>
                    <span className="text-[#0a1128] font-semibold">Class of 2029 (2nd Year)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-indigo-600" />
                      Location
                    </span>
                    <span className="text-[#0a1128] font-semibold">Lucknow, Uttar Pradesh</span>
                  </div>
                </div>

                {/* Verified Interest Tags */}
                <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 text-xs text-slate-600 font-mono font-medium">
                  <span>AI / ML</span>
                  <span className="text-slate-300">·</span>
                  <span>Full-Stack</span>
                  <span className="text-slate-300">·</span>
                  <span>Open Source</span>
                  <span className="text-slate-300">·</span>
                  <span>Hackathons</span>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Right Column: Narrative Story & Goals (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <AnimatedSection direction="up" delay={0.2} className="space-y-6">
              <div className="text-base sm:text-lg text-slate-800 leading-relaxed font-normal">
                I am a 2nd-year B.Tech Computer Science student at <strong className="text-[#0a1128] font-semibold">{personalInfo.college}</strong>, dedicated to building software that bridges computational theory with practical real-world impact.
              </div>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                My engineering journey is driven by hands-on experimentation. From developing responsive full-stack web applications to training predictive machine learning models with Python, scikit-learn, and NumPy, I enjoy understanding how systems work under the hood and crafting solutions that make tasks easier for people.
              </p>

              {/* What I enjoy doing checklist */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <h4 className="text-xs font-mono uppercase tracking-wider text-blue-700 font-semibold mb-4">
                  WHAT DRIVES MY DAILY WORK
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700">
                  <div className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                    <span>Building web-based applications</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                    <span>Building AI-based projects & automations</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                    <span>Learning new engineering technologies</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                    <span>Participating in intensive hackathons</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                    <span>Contributing to open source software</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                    <span>Solving real-world technological challenges</span>
                  </div>
                </div>
              </div>

              {/* Long-term goal statement */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50/50 border-l-4 border-blue-600 border-y border-r border-blue-200/60 shadow-xs">
                <div className="text-xs font-mono text-blue-800 font-bold uppercase tracking-wider mb-1">
                  LONG-TERM ASPIRATION
                </div>
                <p className="text-sm sm:text-base text-slate-800 italic leading-relaxed">
                  "{personalInfo.objective}"
                </p>
              </div>
            </AnimatedSection>
          </div>

        </div>

        {/* 4 Supporting Highlight Pillars: 01 Build, 02 Learn, 03 Contribute, 04 Solve */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {aboutPillars.map((pillar, index) => (
            <AnimatedSection 
              key={pillar.number}
              direction="up" 
              delay={0.1 * index}
              className="h-full"
            >
              <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold font-mono text-blue-600 group-hover:text-blue-700 transition-colors">
                      {pillar.number}
                    </span>
                    <div className="p-2 rounded-xl bg-slate-50 border border-slate-200">
                      {getPillarIcon(pillar.number)}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold font-display text-[#0a1128] mb-1 group-hover:text-blue-700 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs font-semibold text-blue-600 mb-3">
                    {pillar.subtitle}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
};
