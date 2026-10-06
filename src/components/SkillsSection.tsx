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

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-white border-t border-slate-200">
      
      {/* Background radial accent */}
      <div 
        className="absolute top-1/3 right-0 w-96 h-96 bg-blue-100/40 rounded-full blur-[120px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Fade & Slide-up */}
        <AnimatedSection className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-blue-700 font-semibold mb-2">
              TECHNICAL REPERTOIRE
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-[#0a1128] tracking-tight">
              Skills & Technologies
            </h2>
            <div className="w-16 h-1 bg-blue-600 rounded-full mt-4" />
          </div>

          <p className="text-sm text-slate-600 max-w-md">
            Organized across core languages, machine learning libraries, workflow automation, and dev tools without arbitrary percentage bars.
          </p>
        </AnimatedSection>

        {/* Category Segmented Tabs (Functional filter controls) */}
        <AnimatedSection delay={0.1} className="mb-10">
          <div className="flex items-center gap-1.5 p-1.5 bg-slate-100 border border-slate-200 rounded-xl overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs md:text-sm font-medium rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#0a1128] text-white shadow-sm font-semibold'
                    : 'text-slate-600 hover:text-[#0a1128] hover:bg-slate-200/60'
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
              return (
                <AnimatedSection 
                  key={skill.name}
                  direction="up" 
                  delay={0.04 * (index % 6)}
                >
                  <div
                    onClick={() => setSelectedSkill(skill)}
                    className={`p-4 rounded-xl transition-all duration-200 cursor-pointer text-left border ${
                      isSelected
                        ? 'bg-blue-50/80 border-blue-600 shadow-md scale-[1.01]'
                        : 'bg-white border-slate-200 hover:border-blue-400 hover:shadow-sm hover:bg-slate-50/50'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2.5">
                        <div className={`p-2 rounded-lg ${isSelected ? 'bg-blue-600 text-white' : 'bg-slate-100 text-blue-700'}`}>
                          {getIcon(skill.iconName)}
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-[#0a1128] font-display">
                            {skill.name}
                          </h4>
                          <div className="text-[11px] font-mono text-slate-500">
                            {skill.category}
                          </div>
                        </div>
                      </div>

                      <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? 'text-blue-600 translate-x-0.5' : 'text-slate-400'}`} />
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
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-lg">
                
                {/* Terminal header */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200 text-xs font-mono text-slate-500">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-blue-700" />
                    <span className="text-[#0a1128] font-semibold">{selectedSkill.name.toLowerCase()}_context.sh</span>
                  </div>
                  <span className="text-[11px] text-blue-700 font-bold font-mono">
                    {selectedSkill.category}
                  </span>
                </div>

                {/* Selected Skill Overview */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-blue-100 text-blue-700 border border-blue-200">
                    {getIcon(selectedSkill.iconName)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-display text-[#0a1128]">
                      {selectedSkill.name}
                    </h3>
                    <p className="text-xs text-blue-700 font-semibold font-mono">
                      Deepshikha's Practical Application
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                  {selectedSkill.description}
                </p>

                {/* Practical Takeaway Footnote */}
                <div className="pt-4 border-t border-slate-200 flex items-center gap-2 text-xs text-slate-600">
                  <Layers className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>Applied in Phoenix AI, GenZify, and open-source contributions.</span>
                </div>

              </div>
            </AnimatedSection>
          </div>

        </div>

      </div>
    </section>
  );
};
