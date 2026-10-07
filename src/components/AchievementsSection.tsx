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
      
      {/* Background multi-tone pastel pink & purple glows */}
      <div 
        className="absolute top-1/3 left-1/4 w-96 h-96 bg-pink-200/40 rounded-full blur-[140px] pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-200/40 rounded-full blur-[140px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Fade & Slide-up */}
        <AnimatedSection className="mb-16">
          <div className="text-xs font-mono uppercase tracking-widest text-purple-800 font-semibold mb-2 flex items-center gap-2">
            <span>HACKATHONS & TECHNICAL EVENTS</span>
            <span className="w-1.5 h-1.5 rounded-full bg-pink-500 inline-block" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-[#0a1128] tracking-tight">
            Hackathons & Achievements
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 via-pink-500 to-amber-400 rounded-full mt-4" />
          <p className="text-sm text-slate-600 mt-4 max-w-2xl">
            Practical competitive engineering, rapid prototyping sprints, and collaborative problem solving under time constraints.
          </p>
        </AnimatedSection>

        {/* Hackathons Cards Grid with Pastel Themes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {hackathonsData.map((hackathon, index) => {
            const isET = hackathon.id === 'et-ai-hackathon';
            const theme = isET
              ? {
                  cardBorder: 'hover:border-amber-300',
                  bg: 'bg-gradient-to-b from-amber-50/50 via-white to-white',
                  iconBadge: 'bg-amber-100 text-amber-800 border-amber-200',
                  subColor: 'text-amber-800',
                  dateBadge: 'bg-amber-50 border-amber-200 text-amber-800'
                }
              : {
                  cardBorder: 'hover:border-purple-300',
                  bg: 'bg-gradient-to-b from-purple-50/50 via-white to-white',
                  iconBadge: 'bg-purple-100 text-purple-800 border-purple-200',
                  subColor: 'text-purple-800',
                  dateBadge: 'bg-purple-50 border-purple-200 text-purple-800'
                };

            return (
              <AnimatedSection 
                key={hackathon.id} 
                direction="up" 
                delay={0.15 * index}
                className="h-full"
              >
                <div className={`p-8 rounded-3xl ${theme.bg} border border-slate-200 ${theme.cardBorder} transition-all duration-300 shadow-md hover:shadow-xl flex flex-col justify-between h-full group`}>
                  <div>
                    {/* Header row */}
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`p-3 rounded-2xl border ${theme.iconBadge} group-hover:scale-105 transition-transform shadow-2xs`}>
                          <Trophy className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-xl sm:text-2xl font-bold font-display text-[#0a1128] group-hover:text-blue-700 transition-colors">
                            {hackathon.title}
                          </h3>
                          <div className={`text-xs font-bold ${theme.subColor} mt-0.5`}>
                            {hackathon.organizer}
                          </div>
                        </div>
                      </div>

                      {/* Clean date with subtle pastel container */}
                      <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-xs font-mono font-medium shrink-0 ${theme.dateBadge}`}>
                        <Calendar className="w-3.5 h-3.5" />
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
                          <span className="text-[#0a1128] font-medium hover:text-blue-700 transition-colors">{skill}</span>
                          {sIdx < hackathon.skillsApplied.length - 1 && <span className="text-slate-300">/</span>}
                        </React.Fragment>
                      ))}
                    </div>
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
