import React from 'react';
import { motion } from 'motion/react';
import { skillsData } from '../data/portfolioData';
import { 
  Code2, Binary, FileCode, Cpu, Table, BarChart3, 
  Sparkles, Workflow, Database, Box, GitBranch, 
  PieChart, Lightbulb, Clock, ChevronRight
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 size={20} />,
  Binary: <Binary size={20} />,
  FileCode: <FileCode size={20} />,
  Cpu: <Cpu size={20} />,
  Table: <Table size={20} />,
  BarChart3: <BarChart3 size={20} />,
  Sparkles: <Sparkles size={20} />,
  Workflow: <Workflow size={20} />,
  Database: <Database size={20} />,
  Box: <Box size={20} />,
  GitBranch: <GitBranch size={20} />,
  PieChart: <PieChart size={20} />,
  Lightbulb: <Lightbulb size={20} />,
  Clock: <Clock size={20} />
};

const getCategoryColor = (category: string) => {
  switch(category) {
    case 'Languages': return 'bg-purple-500';
    case 'AI / ML': return 'bg-pink-500';
    case 'Database': return 'bg-rose-500';
    case 'DevOps & Tools': return 'bg-red-500';
    case 'Soft Skills': return 'bg-pink-400';
    default: return 'bg-[var(--color-plum)]';
  }
};

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="relative min-h-screen py-32 bg-[var(--color-cream)] overflow-hidden">
      
      <div className="absolute inset-0 bg-pastel-mesh-subtle opacity-70 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center">
        
        <div className="text-center mb-20">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true }}
            className="h-1 bg-[var(--color-rose)] mb-6 mx-auto"
          />
          <h2 className="text-4xl md:text-5xl font-display font-black text-[var(--color-plum)] uppercase tracking-tighter">
            Skills & Tools
          </h2>
          <p className="text-[var(--color-plum)]/60 font-mono text-sm mt-4 uppercase tracking-widest">
            My technical arsenal
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group relative bg-white/60 backdrop-blur-md rounded-[32px] p-8 border border-white/80 hover:bg-white transition-colors duration-500 cursor-none shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(74,53,64,0.1)]"
              data-cursor="hover"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-[var(--color-peach)]/40 text-[var(--color-plum)] flex items-center justify-center group-hover:scale-110 group-hover:-rotate-6 group-hover:bg-[var(--color-blush)] transition-all duration-500">
                    {iconMap[skill.iconName] || <Code2 size={24} />}
                  </div>
                  <div>
                    <h3 className="font-display font-black text-2xl text-[var(--color-plum)] tracking-tight">{skill.name}</h3>
                    <div className="flex items-center gap-2 mt-1.5">
                      <div className={`w-2 h-2 rounded-full ${getCategoryColor(skill.category)}`} />
                      <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-[var(--color-plum)]/60">
                        {skill.category}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-[var(--color-plum)]/20 group-hover:text-[var(--color-rose)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                  <Sparkles size={20} />
                </div>
              </div>
              <p className="text-base font-sans text-[var(--color-plum)]/70 leading-relaxed">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
