import React from 'react';
import { 
  Trophy, 
  Calendar, 
  CheckCircle2, 
} from 'lucide-react';
import { hackathonsData } from '../data/portfolioData';
import { AnimatedSection } from './AnimatedSection';

export const AchievementsSection: React.FC = () => {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-white border-t border-slate-200">
      
      {/* Background glow */}
      <div 
        className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-[140px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Fade & Slide-up */}
        <AnimatedSection className="mb-16">
          <div className="text-xs font-mono uppercase tracking-widest text-blue-700 font-semibold mb-2">
            HACKATHONS & TECHNICAL EVENTS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-[#0a1128] tracking-tight">
            Hackathons & Achievements
          </h2>
          <div className="w-16 h-1 bg-blue-600 rounded-full mt-4" />
          <p className="text-sm text-slate-600 mt-4 max-w-2xl">
            Practical competitive engineering, rapid prototyping sprints, and collaborative problem solving under time constraints.
          </p>
        </AnimatedSection>

        {/* Hackathons Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {hackathonsData.map((hackathon, index) => (
            <AnimatedSection 
              key={hackathon.id} 
              direction="up" 
              delay={0.15 * index}
              className="h-full"
            >
              <div className="p-8 rounded-3xl bg-white border border-slate-200 hover:border-blue-400 transition-all duration-300 shadow-md hover:shadow-xl flex flex-col justify-between h-full group">
                <div>
                  {/* Header row */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-2xl bg-blue-50 text-blue-700 border border-blue-200 group-hover:scale-105 transition-transform shadow-xs">
                        <Trophy className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold font-display text-[#0a1128] group-hover:text-blue-700 transition-colors">
                          {hackathon.title}
                        </h3>
                        <div className="text-xs font-bold text-blue-700 mt-0.5">
                          {hackathon.organizer}
                        </div>
                      </div>
                    </div>

                    {/* Clean unboxed date */}
                    <div className="flex items-center gap-1.5 text-xs font-mono text-slate-600 font-medium shrink-0">
                      <Calendar className="w-3.5 h-3.5 text-blue-600" />
                      <span>{hackathon.date}</span>
                    </div>
                  </div>

                  {/* Category tag */}
                  <div className="text-xs font-mono text-slate-500 mb-4">
                    <span className="font-semibold text-slate-700">Category:</span> {hackathon.category}
                  </div>

                  {/* Summary */}
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {hackathon.summary}
                  </p>

                  {/* Learnings and takeaways */}
                  <div className="space-y-2.5 mb-6">
                    <div className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold mb-2">
                      CORE TAKEAWAYS & COMPETITIVE EXPERIENCE
                    </div>
                    {hackathon.learnings.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skills Applied Strip */}
                <div className="pt-5 border-t border-slate-200">
                  <div className="text-[11px] font-mono text-slate-500 font-semibold uppercase tracking-wider mb-2">
                    SKILLS APPLIED UNDER DEADLINE
                  </div>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-mono text-slate-700">
                    {hackathon.skillsApplied.map((skill, sIdx) => (
                      <React.Fragment key={skill}>
                        <span className="text-[#0a1128] font-medium">{skill}</span>
                        {sIdx < hackathon.skillsApplied.length - 1 && <span className="text-slate-300">/</span>}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

              </div>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
};
