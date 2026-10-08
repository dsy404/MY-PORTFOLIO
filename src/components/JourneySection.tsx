import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { GitBranch, Trophy, Code2, GraduationCap, Zap } from 'lucide-react';

const journeyData = [
  {
    year: "2026",
    title: "Open Source Journey",
    description: "Started contributing heavily to open source, including GirlScript Summer of Code 2026, building community and collaborative skills.",
    icon: <GitBranch size={24} />,
    color: "var(--color-plum)",
    bgColor: "var(--color-peach)"
  },
  {
    year: "2026",
    title: "Hackathon Journey",
    description: "Participated in multiple hackathons and technology events across the globe to sharpen rapid prototyping abilities.",
    icon: <Zap size={24} />,
    color: "var(--color-plum)",
    bgColor: "var(--color-blush)"
  },
  {
    year: "2026",
    title: "ET AI Hackathon",
    description: "Competed in one of the biggest AI hackathons, applying LLMs and modern AI workflows to solve real-world problems under pressure.",
    icon: <Trophy size={24} />,
    color: "var(--color-plum)",
    bgColor: "var(--color-lavender)"
  },
  {
    year: "2026",
    title: "Projects & Experiments",
    description: "Built and scaled Phoenix AI, GenZify, and other applied technology projects, exploring full-stack architecture.",
    icon: <Code2 size={24} />,
    color: "var(--color-plum)",
    bgColor: "var(--color-rose)"
  },
  {
    year: "2029",
    title: "B.Tech CSE",
    description: "Expected graduation from SRMCEM. Continuing to blend academic theory with hardcore practical engineering.",
    icon: <GraduationCap size={24} />,
    color: "var(--color-plum)",
    bgColor: "var(--color-cream)"
  }
];

export const JourneySection: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  // Transform vertical scroll progress into horizontal translation
  // The negative percentage moves the inner container left
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section ref={targetRef} id="journey" className="relative h-[400vh] bg-[var(--color-cream)]">
      <div className="sticky top-0 h-screen flex flex-col items-start justify-center overflow-hidden pt-20">
        
        <div className="px-6 md:px-12 w-full mb-12">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="h-1 bg-[var(--color-plum)] mb-6"
          />
          <h2 className="text-5xl md:text-7xl font-display font-black text-[var(--color-plum)] uppercase tracking-tighter">
            My Journey
          </h2>
        </div>

        <div className="w-full relative flex items-center h-[50vh]">
          {/* Background horizontal timeline line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-[var(--color-lavender)] -translate-y-1/2 z-0" />
          
          {/* Animated progress line */}
          <motion.div 
            className="absolute top-1/2 left-0 h-1 bg-[var(--color-plum)] origin-left -translate-y-1/2 z-0" 
            style={{ scaleX: scrollYProgress, width: "100%" }}
          />

          {/* Horizontal scrolling container */}
          <motion.div style={{ x }} className="flex gap-8 md:gap-16 px-6 md:px-24 relative z-10">
            {journeyData.map((item, index) => (
              <div 
                key={index} 
                className="w-[85vw] sm:w-[60vw] md:w-[400px] flex-shrink-0 group cursor-none"
                data-cursor="explore"
              >
                {/* Timeline node */}
                <div className="w-12 h-12 rounded-full border-4 border-[var(--color-cream)] bg-[var(--color-plum)] mb-8 flex items-center justify-center text-[var(--color-cream)] shadow-xl relative z-20 group-hover:scale-110 transition-transform duration-300">
                  <div className="w-2 h-2 rounded-full bg-[var(--color-rose)] animate-pulse" />
                </div>
                
                {/* Journey Card */}
                <div 
                  className="bg-white/80 backdrop-blur-xl p-8 rounded-[32px] border border-[var(--color-lavender)] shadow-2xl shadow-[var(--color-plum)]/5 relative overflow-hidden transition-all duration-500 hover:-translate-y-4"
                  style={{ borderTopColor: item.bgColor }}
                >
                  <div 
                    className="absolute top-0 right-0 w-32 h-32 rounded-full blur-[40px] opacity-40 -translate-y-1/2 translate-x-1/2"
                    style={{ backgroundColor: item.bgColor }}
                  />
                  
                  <div className="relative z-10">
                    <div 
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm"
                      style={{ backgroundColor: item.bgColor, color: item.color }}
                    >
                      {item.icon}
                    </div>
                    
                    <h4 className="text-sm font-mono font-bold text-[var(--color-plum)]/60 mb-2">
                      {item.year}
                    </h4>
                    <h3 className="text-2xl font-display font-bold text-[var(--color-plum)] mb-4">
                      {item.title}
                    </h3>
                    <p className="text-sm md:text-base font-sans text-[var(--color-plum)]/80 leading-relaxed font-medium">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Empty space at the end to allow the last card to reach the center */}
            <div className="w-[10vw] flex-shrink-0" />
          </motion.div>
        </div>

        {/* Scroll Instruction */}
        <div className="absolute bottom-10 right-10 flex items-center gap-3 text-[var(--color-plum)]/50 font-mono text-xs uppercase tracking-widest font-bold">
          <span>Scroll to travel</span>
          <div className="w-10 h-px bg-[var(--color-plum)]/30" />
        </div>
      </div>
    </section>
  );
};
