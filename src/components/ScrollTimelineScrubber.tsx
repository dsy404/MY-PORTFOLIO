import React, { useState, useEffect } from 'react';
import { 
  Home, 
  User, 
  Code2, 
  Briefcase, 
  Layers, 
  Cpu, 
  Trophy,
  GraduationCap, 
  FileText, 
  Mail,
  ChevronUp,
  ChevronDown
} from 'lucide-react';

interface SectionNode {
  id: string;
  name: string;
  shortName: string;
  icon: React.ComponentType<{ className?: string }>;
}

const sections: SectionNode[] = [
  { id: 'home', name: 'Home', shortName: 'Intro', icon: Home },
  { id: 'about', name: 'About', shortName: 'About', icon: User },
  { id: 'skills', name: 'Skills', shortName: 'Skills', icon: Code2 },
  { id: 'experience', name: 'Experience', shortName: 'Exp', icon: Briefcase },
  { id: 'projects', name: 'Projects', shortName: 'Projects', icon: Layers },
  { id: 'services', name: 'Services', shortName: 'Services', icon: Cpu },
  { id: 'achievements', name: 'Achievements', shortName: 'Awards', icon: Trophy },
  { id: 'education', name: 'Education', shortName: 'Edu', icon: GraduationCap },
  { id: 'resume', name: 'Resume', shortName: 'Resume', icon: FileText },
  { id: 'contact', name: 'Contact', shortName: 'Contact', icon: Mail },
];

export const ScrollTimelineScrubber: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      
      if (totalScroll > 0) {
        const progress = Math.min(1, Math.max(0, currentScroll / totalScroll));
        setScrollProgress(progress);
      }

      // Detect active section based on scroll position
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const activeIndex = sections.findIndex((s) => s.id === activeSection);
  const currentSectionObj = sections[activeIndex] || sections[0];

  return (
    <div 
      className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/90 py-2 sm:py-2.5 px-3 sm:px-6 shadow-[0_-4px_20px_rgba(0,0,0,0.06)] transition-all select-none"
      role="navigation"
      aria-label="Portfolio scroll timeline scrubber"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-3 sm:gap-6">
        
        {/* Left Indicator: Active Chapter & Title */}
        <div className="flex items-center gap-2 min-w-[110px] sm:min-w-[180px]">
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
          <div className="flex flex-col">
            <span className="text-[9px] font-mono uppercase tracking-wider text-slate-500 font-semibold">
              SECTION 0{activeIndex + 1} / 0{sections.length}
            </span>
            <span className="text-xs font-bold font-display text-[#0a1128] truncate max-w-[100px] sm:max-w-[150px]">
              {currentSectionObj.name}
            </span>
          </div>
        </div>

        {/* Center: Interactive Scrubber Rail with Section Nodes (as in Weglot video) */}
        <div className="flex-1 relative flex items-center justify-between py-2">
          
          {/* Background Rail Line */}
          <div className="absolute left-2 right-2 top-1/2 -translate-y-1/2 h-[3px] bg-slate-200 rounded-full" />

          {/* Filled Active Progress Line */}
          <div 
            className="absolute left-2 top-1/2 -translate-y-1/2 h-[3.5px] bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-full transition-all duration-150"
            style={{ 
              width: `calc(${scrollProgress * 100}% - 4px)` 
            }}
          />

          {/* Section Nodes / Dots */}
          {sections.map((section, idx) => {
            const isActive = activeSection === section.id;
            const isPassed = activeIndex >= idx;
            const Icon = section.icon;

            return (
              <div 
                key={section.id} 
                className="relative z-10 flex flex-col items-center"
                onMouseEnter={() => setHoveredNode(section.id)}
                onMouseLeave={() => setHoveredNode(null)}
              >
                {/* Floating Tooltip Bubble */}
                {hoveredNode === section.id && (
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap px-2.5 py-1 rounded-lg bg-[#0a1128] text-white text-[10px] font-mono font-semibold shadow-md pointer-events-none animate-in fade-in zoom-in-95 duration-150 flex items-center gap-1.5 z-50">
                    <Icon className="w-3 h-3 text-sky-400" />
                    <span>0{idx + 1}. {section.name}</span>
                  </div>
                )}

                {/* Node Button */}
                <button
                  type="button"
                  onClick={() => scrollToSection(section.id)}
                  aria-label={`Jump to ${section.name} section`}
                  className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer ${
                    isActive 
                      ? 'bg-blue-600 text-white scale-125 shadow-[0_0_12px_rgba(37,99,235,0.6)] ring-4 ring-blue-100' 
                      : isPassed
                      ? 'bg-indigo-600 text-white hover:scale-110'
                      : 'bg-white border-2 border-slate-300 text-slate-400 hover:border-blue-400 hover:scale-110'
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${
                    isActive || isPassed ? 'bg-white' : 'bg-slate-300'
                  }`} />
                </button>

                {/* Micro Label on desktop */}
                <span className={`hidden md:block absolute -bottom-4 text-[9px] font-mono tracking-tight transition-colors ${
                  isActive ? 'text-blue-700 font-bold' : 'text-slate-400'
                }`}>
                  {section.shortName}
                </span>
              </div>
            );
          })}

        </div>

        {/* Right Side: Quick Previous/Next Chapter Navigators */}
        <div className="flex items-center gap-1 sm:gap-1.5 pl-2 border-l border-slate-200">
          <button
            type="button"
            onClick={() => {
              if (activeIndex > 0) {
                scrollToSection(sections[activeIndex - 1].id);
              }
            }}
            disabled={activeIndex === 0}
            className="p-1 sm:p-1.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 disabled:opacity-30 disabled:pointer-events-none transition cursor-pointer"
            title="Previous Section"
            aria-label="Previous Section"
          >
            <ChevronUp className="w-3.5 h-3.5" />
          </button>

          <button
            type="button"
            onClick={() => {
              if (activeIndex < sections.length - 1) {
                scrollToSection(sections[activeIndex + 1].id);
              }
            }}
            disabled={activeIndex === sections.length - 1}
            className="p-1 sm:p-1.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 disabled:opacity-30 disabled:pointer-events-none transition cursor-pointer"
            title="Next Section"
            aria-label="Next Section"
          >
            <ChevronDown className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};
