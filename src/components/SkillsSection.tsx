import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

type SkillNode = {
  id: string;
  name: string;
  category: 'language' | 'frontend' | 'backend' | 'tool' | 'ai';
  description: string;
  related: string[];
  angle: number; // For circular positioning
  distance: number; // From center
};

const skills: SkillNode[] = [
  { id: 'python', name: 'Python', category: 'language', description: 'Primary language for ML, scripting, and backend.', related: ['sql', 'huggingface', 'n8n'], angle: 0, distance: 35 },
  { id: 'c', name: 'C', category: 'language', description: 'Low-level memory management and systems.', related: ['cpp'], angle: 25, distance: 45 },
  { id: 'cpp', name: 'C++', category: 'language', description: 'High-performance algorithms and competitive programming.', related: ['c'], angle: 50, distance: 38 },
  { id: 'javascript', name: 'JavaScript', category: 'language', description: 'Core language for interactive web experiences.', related: ['react', 'nodejs', 'html', 'css'], angle: 75, distance: 32 },
  { id: 'react', name: 'React', category: 'frontend', description: 'Building dynamic and complex UI components.', related: ['javascript', 'html', 'css'], angle: 105, distance: 36 },
  { id: 'html', name: 'HTML', category: 'frontend', description: 'Semantic web structure.', related: ['css', 'javascript', 'react'], angle: 135, distance: 42 },
  { id: 'css', name: 'CSS', category: 'frontend', description: 'Modern aesthetic styling and animations.', related: ['html', 'javascript', 'react'], angle: 165, distance: 35 },
  { id: 'nodejs', name: 'Node.js', category: 'backend', description: 'Scalable server-side runtime.', related: ['javascript', 'expressjs', 'sql', 'docker'], angle: 195, distance: 30 },
  { id: 'expressjs', name: 'Express.js', category: 'backend', description: 'Robust RESTful API architecture.', related: ['nodejs', 'sql'], angle: 225, distance: 40 },
  { id: 'sql', name: 'SQL', category: 'backend', description: 'Relational database design and complex queries.', related: ['python', 'nodejs', 'expressjs'], angle: 255, distance: 38 },
  { id: 'docker', name: 'Docker', category: 'tool', description: 'Containerization and deployment pipelines.', related: ['nodejs', 'github'], angle: 285, distance: 45 },
  { id: 'github', name: 'GitHub', category: 'tool', description: 'Version control and CI/CD actions.', related: ['docker'], angle: 315, distance: 35 },
  { id: 'huggingface', name: 'Hugging Face', category: 'ai', description: 'Implementing and fine-tuning open-source LLMs.', related: ['python', 'n8n'], angle: 340, distance: 42 },
  { id: 'n8n', name: 'n8n', category: 'ai', description: 'Workflow automation and AI agent orchestration.', related: ['python', 'huggingface'], angle: 350, distance: 28 },
];

export const SkillsSection: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const activeSkill = skills.find(s => s.id === hoveredSkill);
  
  // Determine if a skill should be highlighted based on the currently hovered skill
  const isHighlighted = (skillId: string) => {
    if (!hoveredSkill) return true; // Show all normally if none hovered
    if (hoveredSkill === skillId) return true;
    if (activeSkill?.related.includes(skillId)) return true;
    return false;
  };

  return (
    <section id="skills" className="relative min-h-screen py-32 bg-[var(--color-cream)] overflow-hidden flex flex-col items-center justify-center">
      
      <div className="absolute inset-0 bg-pastel-mesh-subtle opacity-70 pointer-events-none" />

      <div className="text-center mb-16 relative z-10 px-6">
        <h2 className="text-4xl md:text-5xl font-display font-black text-[var(--color-plum)] uppercase tracking-tighter">
          Technology Constellation
        </h2>
        <p className="text-[var(--color-plum)]/60 font-mono text-sm mt-4 uppercase tracking-widest">
          Hover to explore connections
        </p>
      </div>

      <div className="relative w-full max-w-4xl aspect-square md:aspect-[4/3] flex items-center justify-center z-10">
        
        {/* Central Core Element */}
        <div className="absolute z-20 w-32 h-32 rounded-full bg-[var(--color-plum)] flex items-center justify-center shadow-2xl shadow-[var(--color-rose)]/50 border-4 border-[var(--color-cream)]">
          <div className="text-center">
            <span className="block text-[var(--color-cream)] font-display font-bold text-lg leading-tight">DEEPSHIKHA</span>
            <span className="block text-[var(--color-rose)] font-mono text-[10px] tracking-widest mt-1">STACK</span>
          </div>
        </div>

        {/* Constellation Lines (SVG) - Drawn dynamically based on relations */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible">
          {hoveredSkill && activeSkill && activeSkill.related.map((relatedId) => {
            const targetSkill = skills.find(s => s.id === relatedId);
            if (!targetSkill) return null;
            
            // Calculate coordinates (approximate relative to center 50%,50%)
            // Distance is roughly % of container
            const getCoords = (angle: number, distance: number) => {
              const rad = (angle * Math.PI) / 180;
              const x = 50 + (distance * Math.cos(rad));
              const y = 50 + (distance * Math.sin(rad));
              return { x, y };
            };

            const start = getCoords(activeSkill.angle, activeSkill.distance);
            const end = getCoords(targetSkill.angle, targetSkill.distance);

            return (
              <motion.line
                key={`${activeSkill.id}-${targetSkill.id}`}
                x1={`${start.x}%`} y1={`${start.y}%`}
                x2={`${end.x}%`} y2={`${end.y}%`}
                stroke="var(--color-rose)"
                strokeWidth="2"
                strokeDasharray="4 4"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.6 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              />
            );
          })}
        </svg>

        {/* Orbiting Skill Nodes */}
        {skills.map((skill) => {
          const rad = (skill.angle * Math.PI) / 180;
          const x = `${Math.cos(rad) * skill.distance}%`;
          const y = `${Math.sin(rad) * skill.distance}%`;
          
          const highlighted = isHighlighted(skill.id);
          const isDirectlyHovered = hoveredSkill === skill.id;

          return (
            <motion.div
              key={skill.id}
              className="absolute z-10 flex flex-col items-center justify-center cursor-none"
              style={{ x, y }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: skill.angle / 1000 }}
              onMouseEnter={() => setHoveredSkill(skill.id)}
              onMouseLeave={() => setHoveredSkill(null)}
              data-cursor="explore"
            >
              <motion.div 
                animate={{ 
                  scale: isDirectlyHovered ? 1.2 : (highlighted ? 1 : 0.9),
                  opacity: highlighted ? 1 : 0.3,
                  backgroundColor: isDirectlyHovered ? 'var(--color-plum)' : 'var(--color-cream)',
                  color: isDirectlyHovered ? 'var(--color-cream)' : 'var(--color-plum)',
                  borderColor: isDirectlyHovered ? 'var(--color-plum)' : 'var(--color-lavender)'
                }}
                className="px-4 py-2 rounded-full border shadow-lg font-mono text-sm font-bold transition-colors"
              >
                {skill.name}
              </motion.div>
              
              {/* Tooltip Description */}
              <AnimatePresence>
                {isDirectlyHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 5, scale: 0.9 }}
                    className="absolute top-full mt-3 w-48 bg-white/90 backdrop-blur-md border border-[var(--color-blush)] p-3 rounded-xl shadow-xl text-center pointer-events-none z-30"
                  >
                    <p className="text-[10px] uppercase font-mono font-bold text-[var(--color-rose)] mb-1">
                      {skill.category}
                    </p>
                    <p className="text-xs font-sans text-[var(--color-plum)] leading-snug font-medium">
                      {skill.description}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

    </section>
  );
};
