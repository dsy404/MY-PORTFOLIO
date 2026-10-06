import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  Github, 
  BookOpen
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { Project } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';
import { GenZifyPlayground } from './GenZifyPlayground';
import { PhoenixAISandbox } from './PhoenixAISandbox';
import { HeartDiseaseSandbox } from './HeartDiseaseSandbox';
import { AnimatedSection } from './AnimatedSection';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-white border-t border-slate-200">
      
      {/* Background ambient lighting */}
      <div 
        className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-blue-50/70 rounded-full blur-[140px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Fade & Slide-up */}
        <AnimatedSection className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-blue-700 font-semibold mb-2">
              FEATURED ENGINEERING WORK
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-[#0a1128] tracking-tight">
              Highlighted Projects
            </h2>
            <div className="w-16 h-1 bg-blue-600 rounded-full mt-4" />
          </div>

          <p className="text-sm text-slate-600 max-w-md">
            Built with focused intentionality — combining machine learning models, workflow automation, and creative web engineering.
          </p>
        </AnimatedSection>

        {/* Project Cards */}
        <div className="space-y-16">
          {projectsData.map((project, idx) => {
            const isPhoenix = project.id === 'phoenix-ai';

            return (
              <AnimatedSection 
                key={project.id} 
                direction="up" 
                delay={0.15 * idx}
                className="w-full"
              >
                <div className="group relative rounded-3xl bg-white border border-slate-200 hover:border-blue-400 transition-all duration-300 shadow-xl hover:shadow-2xl overflow-hidden">
                  
                  {/* Subtle top accent gradient */}
                  <div 
                    className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-sky-400 to-[#0a1128]" 
                    aria-hidden="true" 
                  />

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8 lg:p-10 items-center">
                    
                    {/* Left Column: Project Info & Narrative (6 cols) */}
                    <div className="lg:col-span-6 flex flex-col items-start text-left">
                      
                      {/* Metadata line (clean unboxed text) */}
                      <div className="flex items-center gap-2 text-xs font-mono text-blue-700 font-semibold mb-3">
                        <span className="uppercase tracking-wider">{project.focusArea}</span>
                        <span aria-hidden="true" className="text-slate-300">·</span>
                        <span className="text-slate-500">{project.category}</span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-[#0a1128] tracking-tight mb-2 group-hover:text-blue-700 transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-sm sm:text-base font-semibold text-blue-800 mb-2">
                        {project.tagline}
                      </p>

                      {project.coreQuote && (
                        <div className="mb-4 text-xs font-semibold text-blue-900 bg-blue-50/80 border-l-2 border-blue-600 px-3 py-1.5 rounded-r-lg italic">
                          "{project.coreQuote}"
                        </div>
                      )}

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                        {project.summary}
                      </p>

                      {/* Tech Stack (Unboxed metadata with slashes) */}
                      <div className="mb-8 w-full">
                        <div className="text-[11px] font-mono text-slate-500 font-semibold uppercase tracking-wider mb-2">
                          TECHNOLOGIES APPLIED
                        </div>
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-mono text-slate-700">
                          {project.techStack.map((tech, tIdx) => (
                            <React.Fragment key={tech}>
                              <span className="hover:text-blue-700 transition-colors font-medium">{tech}</span>
                              {tIdx < project.techStack.length - 1 && <span className="text-slate-300">/</span>}
                            </React.Fragment>
                          ))}
                        </div>
                      </div>

                      {/* Action CTAs */}
                      <div className="flex flex-wrap items-center gap-3">
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
                          <Github className="w-4 h-4 text-blue-700" />
                          <span>GitHub Code</span>
                        </a>
                      </div>

                    </div>

                    {/* Right Column: Visual Mockup / Interactive Snapshot (6 cols) */}
                    <div className="lg:col-span-6 w-full">
                      
                      {/* Visual Card Frame */}
                      <div className="relative rounded-2xl bg-white border border-slate-200 p-4 shadow-lg overflow-hidden group-hover:border-blue-300 transition-colors">
                        
                        {/* Terminal-like Window Bar */}
                        <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200 text-xs font-mono text-slate-600">
                          <div className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-slate-300 inline-block" />
                            <span className="w-2.5 h-2.5 rounded-full bg-slate-300 inline-block" />
                            <span className="w-2.5 h-2.5 rounded-full bg-slate-300 inline-block" />
                            <span className="ml-2 text-slate-700 text-[11px] font-semibold">{project.title.toLowerCase()}_preview.tsx</span>
                          </div>
                          <button
                            onClick={() => setSelectedProject(project)}
                            className="text-blue-700 hover:text-blue-900 font-semibold text-[11px] flex items-center gap-1 cursor-pointer"
                          >
                            <span>Full Modal</span>
                            <ArrowUpRight className="w-3 h-3" />
                          </button>
                        </div>

                        {/* Live Interactive Snapshot Inside The Card */}
                        {isPhoenix ? (
                          <div className="relative">
                            <PhoenixAISandbox />
                          </div>
                        ) : project.id === 'heart-disease-prediction' ? (
                          <div className="relative">
                            <HeartDiseaseSandbox />
                          </div>
                        ) : (
                          <div className="relative">
                            <GenZifyPlayground />
                          </div>
                        )}

                      </div>

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
