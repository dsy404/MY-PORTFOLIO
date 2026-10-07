import React from 'react';
import { GraduationCap, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { educationData } from '../data/portfolioData';
import { AnimatedSection } from './AnimatedSection';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-slate-50/70 border-t border-slate-200">
      
      {/* Background radial pastel pink & purple */}
      <div 
        className="absolute bottom-1/4 right-10 w-96 h-96 bg-pink-200/40 rounded-full blur-[130px] pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute top-1/4 left-10 w-96 h-96 bg-purple-200/40 rounded-full blur-[130px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Fade & Slide-up */}
        <AnimatedSection className="mb-16">
          <div className="text-xs font-mono uppercase tracking-widest text-purple-800 font-semibold mb-2 flex items-center gap-2">
            <span>ACADEMIC FOUNDATION</span>
            <span className="w-1.5 h-1.5 rounded-full bg-pink-500 inline-block" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-[#0a1128] tracking-tight">
            Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-400 rounded-full mt-4" />
        </AnimatedSection>

        {/* Modern Academic Showcase Card with Pastel Accents */}
        <AnimatedSection direction="up" delay={0.15}>
          <div className="p-8 md:p-10 rounded-3xl bg-white border border-sky-100 shadow-xl relative overflow-hidden">
            
            {/* Pastel decorative background blur */}
            <div 
              className="absolute -top-16 -right-16 w-64 h-64 bg-purple-100/50 rounded-full blur-2xl pointer-events-none" 
              aria-hidden="true" 
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
              
              {/* Left Column: Degree & Institution (5 cols) */}
              <div className="lg:col-span-5 flex flex-col items-start">
                
                <div className="p-3.5 rounded-2xl bg-sky-100 text-sky-800 border border-sky-200 mb-6 shadow-2xs">
                  <GraduationCap className="w-8 h-8" />
                </div>

                <div className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-mono font-bold uppercase tracking-wider mb-2">
                  {educationData.currentStanding}
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold font-display text-[#0a1128] mb-2">
                  {educationData.degree}
                </h3>

                <div className="text-base font-semibold text-indigo-700 mb-4">
                  {educationData.major}
                </div>

                <div className="text-sm text-slate-800 leading-snug mb-2 font-medium">
                  {educationData.institution}
                </div>

                <div className="text-xs text-slate-500 mb-6 font-mono">
                  {educationData.affiliation}
                </div>

                {/* Metadata details (clean unboxed text with typographic separators) */}
                <div className="flex flex-col gap-2.5 text-xs font-mono text-slate-600 w-full pt-4 border-t border-slate-200">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-indigo-600" />
                      Expected Graduation
                    </span>
                    <span className="text-[#0a1128] font-bold">{educationData.graduationYear}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-rose-500" />
                      Location
                    </span>
                    <span className="text-slate-800 font-medium">{educationData.location}</span>
                  </div>
                </div>

              </div>

              {/* Right Column: Academic Highlights & Curricular Focus (7 cols) */}
              <div className="lg:col-span-7 flex flex-col justify-between h-full">
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold mb-4">
                    CURRICULUM HIGHLIGHTS & TECHNICAL ENGAGEMENT
                  </div>

                  <div className="space-y-4">
                    {educationData.highlights.map((point, idx) => (
                      <div key={idx} className="p-4 rounded-2xl bg-gradient-to-r from-sky-50/60 to-purple-50/30 border border-sky-100 flex items-start gap-3 shadow-2xs">
                        <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                          {point}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 p-4 rounded-2xl bg-gradient-to-r from-purple-50 via-sky-50 to-emerald-50/40 border border-purple-200/80 text-xs text-indigo-950 font-mono font-medium shadow-2xs">
                  Synthesizing foundational CS algorithms with daily hands-on full-stack engineering and machine learning workflows.
                </div>
              </div>

            </div>

          </div>
        </AnimatedSection>

      </div>
    </section>
  );
};
