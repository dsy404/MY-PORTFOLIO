import React, { useState } from 'react';
import { 
  Code2, 
  Binary, 
  FileCode, 
  Cpu, 
  Table, 
  BarChart3, 
  Sparkles, 
  Workflow, 
  Database, 
  Box, 
  GitBranch, 
  PieChart, 
  Lightbulb, 
  Clock, 
  Terminal,
  ChevronRight,
  Layers
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';
import { SkillItem } from '../types/portfolio';
import { AnimatedSection } from './AnimatedSection';

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedSkill, setSelectedSkill] = useState<SkillItem>(skillsData[2]); // Python by default

  const categories = ['All', 'Languages', 'AI / ML', 'Database', 'DevOps & Tools', 'Soft Skills'];

  const filteredSkills = activeCategory === 'All' 
    ? skillsData 
    : skillsData.filter(s => s.category === activeCategory);

  const getIcon = (iconName: string) => {
    const props = { className: "w-5 h-5" };
    switch (iconName) {
      case 'Code2': return <Code2 {...props} />;
      case 'Binary': return <Binary {...props} />;
      case 'FileCode': return <FileCode {...props} />;
      case 'Cpu': return <Cpu {...props} />;
      case 'Table': return <Table {...props} />;
      case 'BarChart3': return <BarChart3 {...props} />;
      case 'Sparkles': return <Sparkles {...props} />;
      case 'Workflow': return <Workflow {...props} />;
      case 'Database': return <Database {...props} />;
      case 'Box': return <Box {...props} />;
      case 'GitBranch': return <GitBranch {...props} />;
      case 'PieChart': return <PieChart {...props} />;
      case 'Lightbulb': return <Lightbulb {...props} />;
      case 'Clock': return <Clock {...props} />;
      default: return <Code2 {...props} />;
    }
  };

  const getCategoryPastel = (cat: string) => {
    switch (cat) {
      case 'Languages':
        return { badge: 'bg-sky-100 text-sky-800 border-sky-200', selectedBg: 'bg-sky-50/80 border-sky-400', dot: 'bg-sky-400' };
      case 'AI / ML':
        return { badge: 'bg-purple-100 text-purple-800 border-purple-200', selectedBg: 'bg-purple-50/80 border-purple-400', dot: 'bg-purple-400' };
      case 'Database':
        return { badge: 'bg-emerald-100 text-emerald-800 border-emerald-200', selectedBg: 'bg-emerald-50/80 border-emerald-400', dot: 'bg-emerald-400' };
      case 'DevOps & Tools':
        return { badge: 'bg-amber-100 text-amber-800 border-amber-200', selectedBg: 'bg-amber-50/80 border-amber-400', dot: 'bg-amber-400' };
      case 'Soft Skills':
        return { badge: 'bg-rose-100 text-rose-800 border-rose-200', selectedBg: 'bg-rose-50/80 border-rose-400', dot: 'bg-rose-400' };
      default:
        return { badge: 'bg-indigo-100 text-indigo-800 border-indigo-200', selectedBg: 'bg-indigo-50/80 border-indigo-400', dot: 'bg-indigo-400' };
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-white border-t border-slate-200">
      
      {/* Background multi-tone pastel glows */}
      <div 
        className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-purple-100/40 rounded-full blur-[130px] pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-1/4 left-0 w-[450px] h-[450px] bg-sky-100/40 rounded-full blur-[120px] pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[350px] h-[350px] bg-rose-100/35 rounded-full blur-[100px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Fade & Slide-up */}
        <AnimatedSection className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-indigo-700 font-semibold mb-2 flex items-center gap-2">
              <span>TECHNICAL REPERTOIRE</span>
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400 inline-block" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-[#0a1128] tracking-tight">
              Skills & Technologies
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-600 via-sky-400 to-purple-500 rounded-full mt-4" />
          </div>

          <p className="text-sm text-slate-600 max-w-md">
            Organized across core languages, machine learning libraries, workflow automation, and dev tools without arbitrary percentage bars.
          </p>
        </AnimatedSection>

        {/* Category Segmented Tabs (Functional filter controls with pastel hover) */}
        <AnimatedSection delay={0.1} className="mb-10">
          <div className="flex items-center gap-1.5 p-1.5 bg-slate-100/90 border border-slate-200/90 rounded-2xl overflow-x-auto max-w-full shadow-2xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs md:text-sm font-medium rounded-xl transition-all whitespace-nowrap cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#0a1128] text-white shadow-sm font-semibold'
                    : 'text-slate-600 hover:text-[#0a1128] hover:bg-white/80'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Main Grid: Interactive Skill Cards & Live Practical Context Pane */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Skill Cards Grid (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filteredSkills.map((skill, index) => {
              const isSelected = selectedSkill.name === skill.name;
              const pastel = getCategoryPastel(skill.category);

              return (
                <AnimatedSection 
                  key={skill.name}
                  direction="up" 
                  delay={0.04 * (index % 6)}
                >
                  <div
                    onClick={() => setSelectedSkill(skill)}
                    className={`p-4 rounded-2xl transition-all duration-200 cursor-pointer text-left border ${
                      isSelected
                        ? `${pastel.selectedBg} shadow-md scale-[1.01]`
                        : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-sm hover:bg-slate-50/50'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2.5">
                        <div className={`p-2.5 rounded-xl border ${isSelected ? 'bg-[#0a1128] text-white border-[#0a1128]' : `${pastel.badge}`}`}>
                          {getIcon(skill.iconName)}
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-[#0a1128] font-display">
                            {skill.name}
                          </h4>
                          <div className="text-[11px] font-mono text-slate-500 flex items-center gap-1.5">
                            <span className={`w-1.5 h-1.5 rounded-full ${pastel.dot} inline-block`} />
                            <span>{skill.category}</span>
                          </div>
                        </div>
                      </div>

                      <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? 'text-indigo-600 translate-x-0.5' : 'text-slate-400'}`} />
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                      {skill.description}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>

          {/* Right Column: Practical Application Inspector Pane (5 cols) */}
          <div className="lg:col-span-5 sticky top-24">
            <AnimatedSection direction="up" delay={0.2}>
              <div className="p-6 rounded-3xl bg-slate-50/90 border border-slate-200 shadow-xl relative overflow-hidden backdrop-blur-sm">
                
                {/* Pastel accent glow inside pane */}
                <div 
                  className="absolute -top-10 -right-10 w-48 h-48 bg-purple-100/50 rounded-full blur-2xl pointer-events-none" 
                  aria-hidden="true" 
                />

                {/* Window header with pastel Mac-style controls */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200 text-xs font-mono text-slate-500 relative z-10">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-300 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-300 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-300 inline-block" />
                    </div>
                    <span className="text-[#0a1128] font-semibold ml-1">{selectedSkill.name.toLowerCase()}_context.sh</span>
                  </div>
                  <span className={`text-[11px] px-2.5 py-0.5 rounded-full font-bold font-mono border ${getCategoryPastel(selectedSkill.category).badge}`}>
                    {selectedSkill.category}
                  </span>
                </div>

                {/* Selected Skill Overview */}
                <div className="flex items-center gap-3.5 mb-4 relative z-10">
                  <div className={`p-3 rounded-2xl border shadow-xs ${getCategoryPastel(selectedSkill.category).badge}`}>
                    {getIcon(selectedSkill.iconName)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-display text-[#0a1128]">
                      {selectedSkill.name}
                    </h3>
                    <p className="text-xs text-indigo-700 font-semibold font-mono">
                      Deepshikha's Practical Application
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed relative z-10">
                  {selectedSkill.description}
                </p>

                {/* Practical Takeaway Footnote */}
                <div className="pt-4 border-t border-slate-200 flex items-center gap-2 text-xs text-slate-600 relative z-10">
                  <Layers className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                  <span>Applied in Phoenix AI, GenZify, Heart Disease Prediction, and open source contributions.</span>
                </div>

              </div>
            </AnimatedSection>
          </div>

        </div>

      </div>
    </section>
  );
};
