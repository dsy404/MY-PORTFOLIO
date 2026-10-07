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
      case '01': return <Code2 className="w-5 h-5 text-purple-600" />;
      case '02': return <Sparkles className="w-5 h-5 text-pink-600" />;
      case '03': return <GitPullRequest className="w-5 h-5 text-purple-600" />;
      case '04': return <Lightbulb className="w-5 h-5 text-rose-500" />;
      default: return <Compass className="w-5 h-5 text-purple-600" />;
    }
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-50/70 border-t border-slate-200">
      
      {/* Background multi-tone pastel pink & pastel purple glows */}
      <div 
        className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-purple-200/40 rounded-full blur-[120px] pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute top-1/4 right-10 w-96 h-96 bg-pink-200/45 rounded-full blur-[130px] pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-10 left-1/3 w-80 h-80 bg-fuchsia-100/50 rounded-full blur-[110px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Fade & Slide-up */}
        <AnimatedSection className="mb-16">
          <div className="text-xs font-mono uppercase tracking-widest text-purple-800 font-semibold mb-2 flex items-center gap-2">
            <span>BIOGRAPHY & PHILOSOPHY</span>
            <span className="w-1.5 h-1.5 rounded-full bg-pink-500 inline-block" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-[#0a1128] tracking-tight">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 via-pink-500 to-rose-400 rounded-full mt-4" />
        </AnimatedSection>

        {/* Narrative & Visual Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Column: Interactive Framed Profile Visual & Key Stats (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <AnimatedSection direction="up" delay={0.1} className="w-full max-w-md">
              <div className="relative p-8 rounded-3xl bg-gradient-to-b from-white via-pink-50/25 to-purple-50/25 border border-pink-200/80 shadow-xl shadow-purple-500/5 w-full flex flex-col items-center text-center group">
                
                {/* Profile Avatar with Pastel Pink & Purple glow */}
                <div className="mb-6">
                  <ProfileAvatar size="lg" showBadge={true} />
                </div>

                <h3 className="text-xl font-bold font-display text-[#0a1128] mb-1">
                  Deepshikha Yadav
                </h3>
                <p className="text-sm font-semibold text-purple-800 mb-2">
                  Computer Science & Engineering Student
                </p>
                
                {/* Institution & Location details with pastel card backgrounds */}
                <div className="flex flex-col gap-2 text-xs text-slate-700 font-mono mb-6 w-full px-4 py-3.5 rounded-2xl bg-gradient-to-b from-purple-50/50 via-pink-50/40 to-white border border-pink-100">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 flex items-center gap-1.5">
                      <GraduationCap className="w-3.5 h-3.5 text-purple-600" />
                      College
                    </span>
                    <span className="text-[#0a1128] font-semibold text-right">SRMCEM, Lucknow</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 flex items-center gap-1.5">
                      <Target className="w-3.5 h-3.5 text-pink-600" />
                      Cohort
                    </span>
                    <span className="text-[#0a1128] font-semibold">Class of 2029 (2nd Year)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-rose-500" />
                      Location
                    </span>
                    <span className="text-[#0a1128] font-semibold">Lucknow, Uttar Pradesh</span>
                  </div>
                </div>

                {/* Verified Interest Tags with pastel pink & purple borders */}
                <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-mono font-medium">
                  <span className="px-2.5 py-1 rounded-full bg-purple-50 border border-purple-200/80 text-purple-800">AI / ML</span>
                  <span className="px-2.5 py-1 rounded-full bg-pink-50 border border-pink-200/80 text-pink-800">Full-Stack</span>
                  <span className="px-2.5 py-1 rounded-full bg-fuchsia-50 border border-fuchsia-200/80 text-fuchsia-800">Open Source</span>
                  <span className="px-2.5 py-1 rounded-full bg-rose-50 border border-rose-200/80 text-rose-800">Hackathons</span>
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

              {/* What I enjoy doing checklist with pastel bullet dots */}
              <div className="p-6 rounded-2xl bg-white border border-pink-100/90 shadow-sm">
                <h4 className="text-xs font-mono uppercase tracking-wider text-purple-800 font-semibold mb-4 flex items-center gap-2">
                  <span>WHAT DRIVES MY DAILY WORK</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-400 inline-block" />
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700">
                  <div className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-purple-500 mt-2 shrink-0 ring-4 ring-purple-100" />
                    <span>Building web-based applications</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-pink-500 mt-2 shrink-0 ring-4 ring-pink-100" />
                    <span>Building AI-based projects & automations</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-fuchsia-500 mt-2 shrink-0 ring-4 ring-fuchsia-100" />
                    <span>Learning new engineering technologies</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-rose-400 mt-2 shrink-0 ring-4 ring-rose-100" />
                    <span>Participating in intensive hackathons</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-purple-400 mt-2 shrink-0 ring-4 ring-purple-100" />
                    <span>Contributing to open source software</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-pink-400 mt-2 shrink-0 ring-4 ring-pink-100" />
                    <span>Solving real-world technological challenges</span>
                  </div>
                </div>
              </div>

              {/* Long-term goal statement with soft pastel purple-to-pink gradient */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-50 via-pink-50/50 to-purple-50/30 border-l-4 border-purple-600 border-y border-r border-pink-100 shadow-xs">
                <div className="text-xs font-mono text-purple-900 font-bold uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-pink-600" />
                  <span>LONG-TERM ASPIRATION</span>
                </div>
                <p className="text-sm sm:text-base text-slate-800 italic leading-relaxed">
                  "{personalInfo.objective}"
                </p>
              </div>
            </AnimatedSection>
          </div>

        </div>

        {/* 4 Supporting Highlight Pillars with Pastel Purple & Pastel Pink Themes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {aboutPillars.map((pillar, index) => {
            const pillarThemes = [
              {
                bg: 'bg-gradient-to-b from-purple-50/90 to-white',
                border: 'border-purple-200/90 hover:border-purple-400',
                badgeBg: 'bg-purple-100 text-purple-800 border-purple-200',
                numColor: 'text-purple-600'
              },
              {
                bg: 'bg-gradient-to-b from-pink-50/90 to-white',
                border: 'border-pink-200/90 hover:border-pink-400',
                badgeBg: 'bg-pink-100 text-pink-800 border-pink-200',
                numColor: 'text-pink-600'
              },
              {
                bg: 'bg-gradient-to-b from-fuchsia-50/90 to-white',
                border: 'border-fuchsia-200/90 hover:border-fuchsia-400',
                badgeBg: 'bg-fuchsia-100 text-fuchsia-800 border-fuchsia-200',
                numColor: 'text-fuchsia-600'
              },
              {
                bg: 'bg-gradient-to-b from-rose-50/90 to-white',
                border: 'border-rose-200/90 hover:border-rose-400',
                badgeBg: 'bg-rose-100 text-rose-800 border-rose-200',
                numColor: 'text-rose-600'
              }
            ];
            const theme = pillarThemes[index % pillarThemes.length];

            return (
              <AnimatedSection 
                key={pillar.number}
                direction="up" 
                delay={0.1 * index}
                className="h-full"
              >
                <div className={`p-6 rounded-2xl ${theme.bg} border ${theme.border} transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group h-full flex flex-col justify-between`}>
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className={`text-2xl font-bold font-mono ${theme.numColor}`}>
                        {pillar.number}
                      </span>
                      <div className={`p-2.5 rounded-xl ${theme.badgeBg} border shadow-2xs`}>
                        {getPillarIcon(pillar.number)}
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-bold font-display text-[#0a1128] mb-1 group-hover:text-purple-700 transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs font-semibold text-purple-700 mb-3">
                      {pillar.subtitle}
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

      </div>
    </section>
  );
};
