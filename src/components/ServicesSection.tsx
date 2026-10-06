import React from 'react';
import { 
  Globe2, 
  GitPullRequest, 
  CheckCircle2, 
} from 'lucide-react';
import { servicesData } from '../data/portfolioData';
import { AnimatedSection } from './AnimatedSection';

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden bg-slate-50/70 border-t border-slate-200">
      
      {/* Background multi-tone pastel glows */}
      <div 
        className="absolute top-1/3 left-10 w-96 h-96 bg-sky-100/50 rounded-full blur-[140px] pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-1/4 right-10 w-96 h-96 bg-emerald-100/50 rounded-full blur-[140px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Fade & Slide-up */}
        <AnimatedSection className="mb-16">
          <div className="text-xs font-mono uppercase tracking-widest text-indigo-700 font-semibold mb-2 flex items-center gap-2">
            <span>SPECIALIZATIONS & VALUE OFFERING</span>
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 inline-block" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-[#0a1128] tracking-tight">
            What I Do
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 via-sky-400 to-emerald-400 rounded-full mt-4" />
          <p className="text-sm text-slate-600 mt-4 max-w-2xl">
            Focusing on scalable full-stack web engineering and open-source software collaboration.
          </p>
        </AnimatedSection>

        {/* Two Large Distinct Service Cards with Pastel Themes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {servicesData.map((service, index) => {
            const isFullStack = service.id === 'full-stack';
            const theme = isFullStack 
              ? {
                  cardBorder: 'hover:border-sky-300',
                  iconBadge: 'bg-sky-100 text-sky-800 border-sky-200',
                  blob: 'bg-sky-100/60',
                  checkColor: 'text-sky-600'
                }
              : {
                  cardBorder: 'hover:border-emerald-300',
                  iconBadge: 'bg-emerald-100 text-emerald-800 border-emerald-200',
                  blob: 'bg-emerald-100/60',
                  checkColor: 'text-emerald-600'
                };

            return (
              <AnimatedSection 
                key={service.id} 
                direction="up" 
                delay={0.15 * index}
                className="h-full"
              >
                <div className={`p-8 md:p-10 rounded-3xl bg-white border border-slate-200 ${theme.cardBorder} transition-all duration-300 shadow-xl hover:shadow-2xl relative overflow-hidden group flex flex-col justify-between h-full`}>
                  
                  {/* Decorative background accent */}
                  <div 
                    className={`absolute -bottom-20 -right-20 w-64 h-64 ${theme.blob} rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500 pointer-events-none`} 
                    aria-hidden="true" 
                  />

                  <div>
                    {/* Service Icon & Label */}
                    <div className="flex items-center justify-between mb-6">
                      <div className={`p-3.5 rounded-2xl border ${theme.iconBadge} shadow-2xs`}>
                        {isFullStack ? <Globe2 className="w-7 h-7" /> : <GitPullRequest className="w-7 h-7" />}
                      </div>
                      <span className="text-xs font-mono text-slate-500 font-semibold">
                        0{index + 1}. DOMAIN FOCUS
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold font-display text-[#0a1128] mb-2 group-hover:text-blue-700 transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-sm font-semibold text-blue-700 mb-4">
                      {service.subtitle}
                    </p>

                    <p className="text-sm text-slate-600 leading-relaxed mb-8">
                      {service.description}
                    </p>

                    {/* Capabilities Checklist with Pastel Accents */}
                    <div className="space-y-3 mb-8">
                      <div className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold mb-2">
                        CORE CAPABILITIES
                      </div>
                      {service.capabilities.map((cap, cIdx) => (
                        <div key={cIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                          <CheckCircle2 className={`w-4 h-4 ${theme.checkColor} shrink-0 mt-0.5`} />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack Strip at Bottom */}
                  <div className="pt-6 border-t border-slate-200">
                    <div className="text-[11px] font-mono text-slate-500 font-semibold uppercase tracking-wider mb-2">
                      TECHNOLOGIES IN PLAY
                    </div>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-mono text-slate-700">
                      {service.technologies.map((tech, tIdx) => (
                        <React.Fragment key={tech}>
                          <span className="text-[#0a1128] font-medium hover:text-blue-700 transition-colors">{tech}</span>
                          {tIdx < service.technologies.length - 1 && <span className="text-slate-300">/</span>}
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
