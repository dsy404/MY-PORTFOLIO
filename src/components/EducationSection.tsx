import React from 'react';
import { GraduationCap, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { educationData } from '../data/portfolioData';
import { AnimatedSection } from './AnimatedSection';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-slate-50/70 border-t border-slate-200">
      
      {/* Background radial */}
      <div 
        className="absolute bottom-1/4 right-10 w-96 h-96 bg-blue-100/40 rounded-full blur-[120px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Fade & Slide-up */}
        <AnimatedSection className="mb-16">
          <div className="text-xs font-mono uppercase tracking-widest text-blue-700 font-semibold mb-2">
            ACADEMIC FOUNDATION
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-[#0a1128] tracking-tight">
            Education
          </h2>
          <div className="w-16 h-1 bg-blue-600 rounded-full mt-4" />
        </AnimatedSection>

        {/* Modern Academic Showcase Card */}
        <AnimatedSection direction="up" delay={0.15}>
          <div className="p-8 md:p-10 rounded-3xl bg-white border border-slate-200 shadow-xl relative overflow-hidden">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Degree & Institution (5 cols) */}
              <div className="lg:col-span-5 flex flex-col items-start">
                
                <div className="p-3.5 rounded-2xl bg-blue-50 text-blue-700 border border-blue-200 mb-6 shadow-xs">
                  <GraduationCap className="w-8 h-8" />
                </div>

                <div className="text-xs font-mono text-blue-700 font-bold uppercase tracking-wider mb-1">
                  {educationData.currentStanding}
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold font-display text-[#0a1128] mb-2">
                  {educationData.degree}
                </h3>

                <div className="text-base font-semibold text-blue-800 mb-4">
                  {educationData.major}
                </div>

                <div className="text-sm text-slate-800 leading-snug mb-2 font-medium">
                  {educationData.institution}
                </div>

                <div className="text-xs text-slate-500 mb-6 font-mono">
                  {educationData.affiliation}
                </div>

                {/* Metadata details (clean unboxed text with typographic separators) */}
                <div className="flex flex-col gap-2 text-xs font-mono text-slate-600 w-full pt-4 border-t border-slate-200">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-blue-600" />
                      Expected Graduation
                    </span>
                    <span className="text-[#0a1128] font-bold">{educationData.graduationYear}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
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
                      <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                          {point}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 p-4 rounded-xl bg-blue-50 border border-blue-200 text-xs text-blue-900 font-mono font-medium">
                  Synthesizing academic CS principles with daily hands-on web and AI experimentation.
                </div>
              </div>

            </div>

          </div>
        </AnimatedSection>

      </div>
    </section>
  );
};
