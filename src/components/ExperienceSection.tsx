import React from 'react';
import { 
  GitPullRequest, 
  ExternalLink, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  FolderGit2 
} from 'lucide-react';
import { experienceData } from '../data/portfolioData';
import { AnimatedSection } from './AnimatedSection';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-slate-50/70 border-t border-slate-200">
      
      {/* Background glow */}
      <div 
        className="absolute bottom-10 left-10 w-96 h-96 bg-indigo-100/40 rounded-full blur-[100px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Fade & Slide-up */}
        <AnimatedSection className="mb-16">
          <div className="text-xs font-mono uppercase tracking-widest text-blue-700 font-semibold mb-2">
            PRACTICAL CONTRIBUTION & IMPACT
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-[#0a1128] tracking-tight">
            Experience & Open Source
          </h2>
          <div className="w-16 h-1 bg-blue-600 rounded-full mt-4" />
          <p className="text-sm text-slate-600 mt-4 max-w-2xl">
            Real-world software engineering through open-source communities, peer code reviews, and structured developer initiatives.
          </p>
        </AnimatedSection>

        {/* Timeline Layout */}
        <div className="relative pl-6 md:pl-8 border-l-2 border-blue-200 ml-2 md:ml-4 space-y-12">
          {experienceData.map((item, index) => (
            <AnimatedSection 
              key={item.id} 
              direction="up" 
              delay={0.15 * index}
              className="relative group"
            >
              {/* Timeline Node Bullet */}
              <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-xs group-hover:scale-125 transition-transform" />

              {/* Experience Card */}
              <div className="p-6 md:p-8 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 transition-all duration-300 shadow-md hover:shadow-lg">
                
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-xl font-bold font-display text-[#0a1128] flex items-center gap-2">
                      <span>{item.role}</span>
                      {item.link && (
                        <a 
                          href={item.link} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="text-blue-600 hover:text-blue-800 transition-colors"
                          aria-label={`Visit ${item.organization}`}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </h3>
                    <div className="text-sm font-bold text-blue-700 mt-0.5">
                      {item.organization}
                    </div>
                  </div>

                  {/* Metadata (clean unboxed text with typographic separators) */}
                  <div className="flex items-center gap-3 text-xs font-mono text-slate-600">
                    <span className="flex items-center gap-1 font-medium">
                      <Calendar className="w-3.5 h-3.5 text-blue-600" />
                      {item.period}
                    </span>
                    <span aria-hidden="true" className="text-slate-300">·</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {item.location}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Key Contributions Checklist */}
                <div className="mb-6 space-y-2.5">
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold mb-2">
                    KEY RESPONSIBILITIES & CONTRIBUTIONS
                  </div>
                  {item.keyContributions.map((contrib, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{contrib}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies (Clean unboxed tags separated by slashes) */}
                <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-mono text-slate-600">
                  <span className="text-blue-700 font-semibold">Technologies:</span>
                  {item.technologies.map((tech, idx) => (
                    <React.Fragment key={tech}>
                      <span className="text-slate-800 font-medium">{tech}</span>
                      {idx < item.technologies.length - 1 && <span className="text-slate-300">/</span>}
                    </React.Fragment>
                  ))}
                </div>

              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Open Source Callout Banner */}
        <AnimatedSection direction="up" delay={0.2} className="mt-16">
          <div className="p-6 rounded-2xl bg-blue-50 border border-blue-200 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-blue-600 text-white shadow-xs">
                <FolderGit2 className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold font-display text-[#0a1128]">
                  Interested in Collaborating on Open Source?
                </h4>
                <p className="text-xs text-slate-600">
                  Explore my repositories on GitHub or reach out to build impactful developer tools together.
                </p>
              </div>
            </div>

            <a
              href="https://github.com/dsy404"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 text-xs font-semibold text-white bg-[#0a1128] hover:bg-[#162a5c] rounded-lg transition-colors flex items-center gap-2 whitespace-nowrap shadow-xs"
            >
              <GitPullRequest className="w-3.5 h-3.5 text-blue-300" />
              <span>View GitHub @dsy404</span>
            </a>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
};
