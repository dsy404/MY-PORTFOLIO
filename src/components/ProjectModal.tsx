import React, { useEffect } from 'react';
import { X, Github, CheckCircle2, Cpu, Code2, ArrowRight, Heart, Users, Sparkles } from 'lucide-react';
import { Project } from '../types/portfolio';
import { PhoenixAISandbox } from './PhoenixAISandbox';
import { GenZifyPlayground } from './GenZifyPlayground';
import { HeartDiseaseSandbox } from './HeartDiseaseSandbox';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-slate-900/60 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl my-auto rounded-3xl bg-white border border-slate-200 shadow-2xl overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-200 bg-slate-50">
          <div>
            <div className="text-xs font-mono text-blue-700 font-bold uppercase tracking-wider mb-1">
              ARCHITECTURAL BREAKDOWN · {project.category}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-display text-[#0a1128]">
              {project.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-500 hover:text-black hover:bg-slate-200 transition-colors cursor-pointer"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto space-y-8">
          
          {/* Subtitle & Focus Area */}
          <div>
            <p className="text-base text-blue-800 font-semibold mb-2">
              {project.tagline}
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Core Philosophy Banner if available */}
          {project.coreQuote && (
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-50 via-sky-50 to-indigo-50 border-l-4 border-blue-600 border-y border-r border-blue-200/80 shadow-xs flex items-center gap-3">
              <Heart className="w-5 h-5 text-blue-600 shrink-0" />
              <div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-blue-700 font-bold">
                  THE CORE MISSION
                </div>
                <div className="text-sm sm:text-base font-semibold text-[#0a1128] italic">
                  "{project.coreQuote}"
                </div>
              </div>
            </div>
          )}

          {/* Who is it for? Audience section */}
          {project.targetAudience && (
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="text-xs font-mono uppercase tracking-wider text-blue-700 font-bold mb-3 flex items-center gap-2">
                <Users className="w-4 h-4 text-blue-600" />
                <span>WHO IS {project.title.toUpperCase()} FOR?</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                {project.targetAudience.map((aud, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                    <span>{aud}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Interactive Live Sandbox Embedded */}
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-slate-600 font-bold mb-3 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-blue-600" />
              <span>LIVE INTERACTIVE SIMULATION</span>
            </div>
            {project.id === 'phoenix-ai' ? (
              <PhoenixAISandbox />
            ) : project.id === 'heart-disease-prediction' ? (
              <HeartDiseaseSandbox />
            ) : (
              <GenZifyPlayground />
            )}
          </div>

          {/* 1. Problem & 2. Idea (2 Column Grid) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-rose-50/50 border border-rose-200">
              <div className="text-xs font-mono uppercase tracking-wider text-rose-700 font-bold mb-2 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-rose-600" />
                <span>01. The Educational Challenge</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-emerald-50/50 border border-emerald-200">
              <div className="text-xs font-mono uppercase tracking-wider text-emerald-800 font-bold mb-2 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-600" />
                <span>02. The Multi-Agent Solution</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {project.idea}
              </p>
            </div>
          </div>

          {/* 3. Key Features */}
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="text-xs font-mono uppercase tracking-wider text-blue-700 font-bold mb-3">
              03. Core Functional Capabilities
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 4. Technology Stack */}
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-slate-600 font-bold mb-2">
              04. Technologies & Tools
            </div>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-mono text-slate-700">
              {project.techStack.map((tech, idx) => (
                <React.Fragment key={tech}>
                  <span className="text-[#0a1128] font-semibold">{tech}</span>
                  {idx < project.techStack.length - 1 && <span className="text-slate-300">/</span>}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* 5. Development Highlights */}
          <div className="p-5 rounded-2xl bg-blue-50/50 border border-blue-200">
            <div className="text-xs font-mono uppercase tracking-wider text-blue-800 font-bold mb-3 flex items-center gap-1.5">
              <Code2 className="w-3.5 h-3.5 text-blue-600" />
              <span>05. Engineering & System Design</span>
            </div>
            <div className="space-y-2">
              {project.developmentHighlights.map((hl, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                  <ArrowRight className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                  <span>{hl}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 6. Outcome */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-600 border-y border-r border-blue-200 shadow-xs">
            <div className="text-xs font-mono uppercase tracking-wider text-blue-800 font-bold mb-1">
              06. Result & Impact
            </div>
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
              {project.outcome}
            </p>
          </div>

        </div>

        {/* Modal Footer with Actions */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between px-6 py-4 bg-slate-50 border-t border-slate-200 gap-3">
          <div className="text-xs text-slate-600 font-mono">
            Authored by Deepshikha Yadav
          </div>

          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 rounded-xl transition-colors flex items-center gap-2"
            >
              <Github className="w-4 h-4 text-blue-700" />
              <span>Source Repository</span>
            </a>

            <button
              onClick={onClose}
              className="px-5 py-2 text-xs font-semibold text-white bg-[#0a1128] hover:bg-[#162a5c] rounded-xl transition-colors cursor-pointer shadow-xs"
            >
              Done Reading
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
