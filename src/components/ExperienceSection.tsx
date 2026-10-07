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
      
      {/* Background multi-tone pastel glows */}
      <div 
        className="absolute bottom-10 left-10 w-96 h-96 bg-purple-100/40 rounded-full blur-[120px] pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute top-1/4 right-10 w-96 h-96 bg-pink-200/40 rounded-full blur-[130px] pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-1/4 left-10 w-96 h-96 bg-purple-200/40 rounded-full blur-[130px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Fade & Slide-up */}
        <AnimatedSection className="mb-16">
          <div className="text-xs font-mono uppercase tracking-widest text-purple-800 font-semibold mb-2 flex items-center gap-2">
            <span>PRACTICAL CONTRIBUTION & IMPACT</span>
            <span className="w-1.5 h-1.5 rounded-full bg-pink-500 inline-block" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-[#0a1128] tracking-tight">
            Experience & Open Source
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-400 rounded-full mt-4" />
          <p className="text-sm text-slate-600 mt-4 max-w-2xl">
            Real-world software engineering through open-source communities, peer code reviews, and structured developer initiatives.
          </p>
        </AnimatedSection>

        {/* Timeline Layout */}
        <div className="relative pl-6 md:pl-8 border-l-2 border-purple-200 ml-2 md:ml-4 space-y-12">
          {experienceData.map((item, index) => (
            <AnimatedSection 
              key={item.id} 
              direction="up" 
              delay={0.15 * index}
              className="relative group"
            >
              {/* Timeline Bullet with Pastel Ring */}
              <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white ring-4 ring-purple-100 shadow-xs group-hover:scale-125 transition-transform" />

              {/* Experience Card */}
              <div className="p-6 md:p-8 rounded-3xl bg-white border border-slate-200 hover:border-purple-300 transition-all duration-300 shadow-md hover:shadow-lg">
                
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
                          className="text-indigo-600 hover:text-indigo-800 transition-colors"
                          aria-label={`Visit ${item.organization}`}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </h3>
                    <div className="text-sm font-bold text-indigo-700 mt-0.5">
                      {item.organization}
                    </div>
                  </div>

                  {/* Metadata with pastel date badge */}
                  <div className="flex items-center gap-3 text-xs font-mono text-slate-600">
                    <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-purple-50 text-purple-800 border border-purple-200 font-medium">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.period}
                    </span>
                    <span aria-hidden="true" className="text-slate-300">·</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-rose-400" />
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

                {/* Technologies with pastel tags */}
                <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center gap-2 text-xs font-mono">
                  <span className="text-indigo-700 font-semibold mr-1">Technologies:</span>
                  {item.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-2.5 py-0.5 rounded-lg bg-sky-50 text-sky-800 border border-sky-200/80 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Open Source Callout Banner with Pastel Lavender & Sky Gradient */}
        <AnimatedSection direction="up" delay={0.2} className="mt-16">
          <div className="p-6 md:p-8 rounded-3xl bg-gradient-to-r from-purple-50 via-sky-50 to-indigo-50/50 border border-purple-200 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="p-3.5 rounded-2xl bg-purple-100 text-purple-800 border border-purple-200 shadow-2xs">
                <FolderGit2 className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold font-display text-[#0a1128]">
                  Interested in Collaborating on Open Source?
                </h4>
                <p className="text-xs text-slate-600 mt-0.5">
                  Explore my repositories on GitHub or reach out to build impactful developer tools together.
                </p>
              </div>
            </div>

            <a
              href="https://github.com/dsy404"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 text-xs font-semibold text-white bg-[#0a1128] hover:bg-[#162a5c] rounded-xl transition-all shadow-md shadow-navy-950/20 whitespace-nowrap flex items-center gap-2 cursor-pointer"
            >
              <span>Explore GitHub</span>
              <ExternalLink className="w-3.5 h-3.5 text-purple-300" />
            </a>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
};

