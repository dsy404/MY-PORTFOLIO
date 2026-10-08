import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'motion/react';
import { Terminal, Rocket, Trophy, GitPullRequest } from 'lucide-react';

interface TiltCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

const TiltCard: React.FC<TiltCardProps> = ({ title, description, icon, delay }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      style={{ perspective: 1000 }}
      className="w-full h-full"
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="group relative w-full h-full bg-white/60 backdrop-blur-md rounded-[32px] p-8 border border-[var(--color-lavender)] hover:border-[var(--color-rose)] shadow-lg hover:shadow-[var(--color-plum)]/5 transition-colors cursor-none flex flex-col justify-between overflow-hidden"
        data-cursor="explore"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-blush)]/30 rounded-full blur-[40px] -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
        
        <div style={{ transform: "translateZ(30px)" }} className="relative z-10">
          <div className="w-14 h-14 rounded-2xl bg-[var(--color-lavender)]/50 flex items-center justify-center text-[var(--color-plum)] mb-8 group-hover:scale-110 group-hover:bg-[var(--color-blush)]/50 transition-all duration-300">
            {icon}
          </div>
          
          <h3 className="text-xl font-display font-bold text-[var(--color-plum)] mb-3 uppercase tracking-wider">
            {title}
          </h3>
          <p className="text-sm text-[var(--color-plum)]/70 font-sans leading-relaxed font-medium">
            {description}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export const AboutSection: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <section 
      id="about" 
      ref={containerRef}
      className="relative min-h-screen py-32 flex flex-col items-center justify-center overflow-hidden bg-[var(--color-cream)]"
    >
      {/* Decorative Parallax Background */}
      <motion.div 
        style={{ y: yBg }}
        className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-50 pointer-events-none"
      />
      
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        
        {/* Editorial Statement */}
        <div className="max-w-4xl mb-24 relative">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="h-1 bg-[var(--color-rose)] mb-8"
          />
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl font-display font-medium text-[var(--color-plum)] leading-[1.1] tracking-tight"
          >
            I don't just want to learn technology. <br className="hidden md:block"/>
            <span className="font-bold italic text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-plum)] to-[var(--color-rose)]">I want to build with it.</span>
          </motion.h2>
        </div>

        {/* 4 Interactive Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <TiltCard 
            title="Build"
            description="Engineering robust full-stack applications and experimenting with applied AI workflows."
            icon={<Terminal size={28} strokeWidth={2} />}
            delay={0.1}
          />
          <TiltCard 
            title="Explore"
            description="Constantly diving into new frameworks, LLMs, and emerging architectural patterns."
            icon={<Rocket size={28} strokeWidth={2} />}
            delay={0.2}
          />
          <TiltCard 
            title="Compete"
            description="Thriving under pressure in fast-paced hackathons to prototype and ship real ideas."
            icon={<Trophy size={28} strokeWidth={2} />}
            delay={0.3}
          />
          <TiltCard 
            title="Contribute"
            description="Giving back to the community through open-source projects like GSSoC '26."
            icon={<GitPullRequest size={28} strokeWidth={2} />}
            delay={0.4}
          />
        </div>

      </div>
    </section>
  );
};
