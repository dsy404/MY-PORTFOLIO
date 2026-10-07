import React, { useState } from 'react';
import { 
  Github, 
  BookOpen,
  CheckCircle2
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { Project } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';
import { AnimatedSection } from './AnimatedSection';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const getProjectPastelTheme = (id: string) => {
    if (id === 'phoenix-ai') {
      return {
        topGradient: 'from-purple-600 via-pink-500 to-purple-400',
        badge: 'bg-purple-50 border-purple-200/90 text-purple-900',
        cardBorder: 'hover:border-purple-300',
        quoteBg: 'bg-purple-50/80 border-purple-400 text-purple-900',
        techHover: 'hover:text-purple-700',
        numberColor: 'group-hover:text-purple-400'
      };
    }
    if (id === 'heart-disease-prediction') {
      return {
        topGradient: 'from-pink-500 via-rose-400 to-purple-400',
        badge: 'bg-pink-50 border-pink-200/90 text-pink-900',
        cardBorder: 'hover:border-pink-300',
        quoteBg: 'bg-pink-50/80 border-pink-400 text-pink-900',
        techHover: 'hover:text-pink-700',
        numberColor: 'group-hover:text-pink-400'
      };
    }
    return {
      topGradient: 'from-purple-400 via-pink-400 to-fuchsia-400',
      badge: 'bg-fuchsia-50 border-fuchsia-200/90 text-fuchsia-900',
      cardBorder: 'hover:border-fuchsia-300',
      quoteBg: 'bg-fuchsia-50/80 border-fuchsia-400 text-fuchsia-900',
      techHover: 'hover:text-purple-700',
      numberColor: 'group-hover:text-fuchsia-400'
    };
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-white border-t border-slate-200">
      
      {/* Background ambient multi-tone pastel pink & purple lighting */}
      <div 
        className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-purple-200/35 rounded-full blur-[140px] pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-1/3 right-10 w-[450px] h-[450px] bg-pink-200/40 rounded-full blur-[130px] pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-fuchsia-100/35 rounded-full blur-[120px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Fade & Slide-up */}
        <AnimatedSection className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-purple-800 font-semibold mb-2 flex items-center gap-2">
              <span>FEATURED ENGINEERING WORK</span>
              <span className="w-1.5 h-1.5 rounded-full bg-pink-500 inline-block" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-[#0a1128] tracking-tight">
              Highlighted Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 via-pink-500 to-rose-400 rounded-full mt-4" />
          </div>

          <p className="text-sm text-slate-600 max-w-md">
            Built with focused intentionality — combining machine learning models, workflow automation, and creative web engineering.
          </p>
        </AnimatedSection>

        {/* Project Cards */}
        <div className="space-y-12">
          {projectsData.map((project, idx) => {
            const theme = getProjectPastelTheme(project.id);

            return (
              <AnimatedSection 
                key={project.id} 
                direction="up" 
                delay={0.15 * idx}
                className="w-full"
              >
                <div className={`group relative rounded-3xl bg-white border border-slate-200 ${theme.cardBorder} transition-all duration-300 shadow-xl hover:shadow-2xl overflow-hidden`}>
                  
                  {/* Subtle top accent gradient */}
                  <div 
                    className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${theme.topGradient}`} 
                    aria-hidden="true" 
                  />

                  <div className="p-6 sm:p-8 lg:p-10 flex flex-col items-start text-left">
                    
                    {/* Top Row: Focus area badge & index counter */}
                    <div className="flex items-center justify-between w-full mb-3">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className={`text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full border ${theme.badge}`}>
                          {project.focusArea}
                        </span>
                        <span aria-hidden="true" className="text-slate-300">·</span>
                        <span className="text-xs font-mono text-slate-500 font-medium">{project.category}</span>
                      </div>
                      <span className={`text-2xl sm:text-3xl font-mono font-bold text-slate-200 ${theme.numberColor} transition-colors select-none`}>
                        0{idx + 1}
                      </span>
                    </div>

                    {/* Title & Tagline */}
                    <div className="mb-2">
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-[#0a1128] tracking-tight mb-1 group-hover:text-purple-800 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm sm:text-base font-semibold text-purple-700">
                        {project.tagline}
                      </p>
                    </div>

                    {/* Core Quote */}
                    {project.coreQuote && (
                      <div className={`my-3 text-xs sm:text-sm font-semibold ${theme.quoteBg} border-l-2 px-3.5 py-2 rounded-r-xl italic max-w-3xl`}>
                        "{project.coreQuote}"
                      </div>
                    )}

                    {/* Summary */}
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-4xl mb-6">
                      {project.summary}
                    </p>

                    {/* Key Capabilities Preview */}
                    {project.features && project.features.length > 0 && (
                      <div className="mb-6 w-full">
                        <div className="text-[11px] font-mono text-slate-500 font-semibold uppercase tracking-wider mb-2.5">
                          CORE HIGHLIGHTS
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 max-w-4xl">
                          {project.features.slice(0, 3).map((feat, fIdx) => (
                            <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-700 bg-slate-50 border border-slate-200/80 rounded-xl px-3 py-2.5">
                              <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 shrink-0 mt-0.5" />
                              <span className="line-clamp-2">{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Tech Stack */}
                    <div className="mb-8 w-full">
                      <div className="text-[11px] font-mono text-slate-500 font-semibold uppercase tracking-wider mb-2">
                        TECHNOLOGIES APPLIED
                      </div>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs font-mono text-slate-700">
                        {project.techStack.map((tech, tIdx) => (
                          <React.Fragment key={tech}>
                            <span className={`${theme.techHover} transition-colors font-medium`}>{tech}</span>
                            {tIdx < project.techStack.length - 1 && <span className="text-slate-300">/</span>}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>

                    {/* Action CTAs */}
                    <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-slate-100 w-full">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#0a1128] hover:bg-[#162a5c] rounded-xl transition-all shadow-md shadow-navy-950/20 flex items-center gap-2 cursor-pointer"
                      >
                        <BookOpen className="w-4 h-4" />
                        <span>Case Study & Breakdown</span>
                      </button>

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-4 py-2.5 text-xs sm:text-sm font-medium text-slate-700 hover:text-black bg-white hover:bg-slate-50 border border-slate-300 rounded-xl transition-colors flex items-center gap-2 shadow-2xs"
                      >
                        <Github className="w-4 h-4 text-purple-700" />
                        <span>GitHub Code</span>
                      </a>
                    </div>

                  </div>

                </div>
              </AnimatedSection>
            );
          })}
        </div>

      </div>

      {/* Project Breakdown Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />

    </section>
  );
};
