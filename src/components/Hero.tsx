import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { personalInfo } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Parallax effects
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  
  // Fade out hero content slightly on scroll
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section 
      ref={containerRef}
      id="home" 
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-pastel-mesh-hero pt-20"
    >
      {/* Decorative blurred orb in background - representing the "3D glass orb" conceptually until WebGL is added */}
      <motion.div 
        style={{ y: shouldReduceMotion ? 0 : y1 }}
        className="absolute top-[10%] left-[15%] w-[45vw] h-[45vw] max-w-[600px] max-h-[600px] bg-[var(--color-blush)] rounded-full blur-[140px] mix-blend-multiply opacity-50 pointer-events-none animate-[pulse_8s_ease-in-out_infinite]"
      />
      <motion.div 
        style={{ y: shouldReduceMotion ? 0 : y2 }}
        className="absolute bottom-[10%] right-[15%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-[var(--color-lavender)] rounded-full blur-[120px] mix-blend-multiply opacity-60 pointer-events-none animate-[pulse_10s_ease-in-out_infinite]"
      />

      <motion.div style={{ opacity }} className="relative z-10 w-full max-w-7xl px-6 flex flex-col items-center justify-center">
        
        {/* Main Immersive Typography */}
        <div className="relative text-center w-full mt-10 md:mt-16">
          <motion.h1 
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[14vw] sm:text-[12vw] md:text-[10vw] lg:text-[9vw] font-display font-black leading-[0.85] text-[var(--color-plum)] tracking-tighter mix-blend-color-burn"
          >
            DEEPSHIKHA<br/>YADAV
          </motion.h1>

          {/* Floating Tags (Animated & Parallax) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
            className="absolute top-[0%] left-[5%] md:left-[10%] flex items-center gap-2 px-4 py-2 bg-white/50 backdrop-blur-md rounded-full border border-white/60 shadow-xl text-xs font-mono font-bold text-[var(--color-plum)] cursor-default hover:scale-105 transition-transform"
          >
            <span className="w-2 h-2 rounded-full bg-[var(--color-rose)] animate-pulse" />
            FULL STACK DEVELOPER
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
            className="absolute bottom-[5%] right-[5%] md:right-[10%] flex items-center gap-2 px-4 py-2 bg-white/50 backdrop-blur-md rounded-full border border-white/60 shadow-xl text-xs font-mono font-bold text-[var(--color-plum)] cursor-default hover:scale-105 transition-transform"
          >
            AI EXPLORER
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: -5 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="absolute top-[45%] left-[2%] hidden lg:flex items-center gap-2 px-4 py-2 bg-[var(--color-cream)]/70 backdrop-blur-md rounded-full border border-[var(--color-lavender)] shadow-xl text-xs font-mono font-bold text-[var(--color-plum)] cursor-default hover:rotate-0 transition-transform"
          >
            HACKATHON BUILDER
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 5 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute top-[35%] right-[2%] hidden lg:flex items-center gap-2 px-4 py-2 bg-[var(--color-peach)]/70 backdrop-blur-md rounded-full border border-[var(--color-blush)] shadow-xl text-xs font-mono font-bold text-[var(--color-plum)] cursor-default hover:rotate-0 transition-transform"
          >
            B.TECH CSE '29
          </motion.div>
        </div>

        {/* Artistic Profile Image Composition */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ y: y3 }}
          className="relative mt-16 md:mt-20 mb-8 z-20 group cursor-none interactive"
        >
          {/* Subtle 3D Glass Aura effect behind image */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-blush)] via-[var(--color-rose)] to-[var(--color-lavender)] rounded-[40px] rotate-3 group-hover:rotate-6 group-hover:scale-105 transition-all duration-700 ease-out opacity-80 blur-xl" />
          
          <div className="relative w-56 h-72 sm:w-72 sm:h-96 rounded-[32px] overflow-hidden border-4 border-white/60 bg-white/20 backdrop-blur-sm shadow-2xl shadow-[var(--color-plum)]/20 transition-transform duration-700 ease-out group-hover:scale-[1.03] group-hover:-translate-y-3 flex items-center justify-center">
            {/* Grain texture overlay */}
            <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay z-20 pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />
            
            <img 
              src="/photo.jpg" 
              alt="Deepshikha Yadav" 
              className="w-full h-full object-cover object-top grayscale-[30%] contrast-[1.1] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-out"
            />
          </div>
          
          {/* Orbiting text / badge */}
          <div className="absolute -bottom-8 -right-8 w-28 h-28 bg-white/90 backdrop-blur-xl rounded-full border border-white/60 shadow-2xl flex items-center justify-center animate-[spin_12s_linear_infinite] z-30 pointer-events-none">
            <div className="text-[10px] font-mono text-[var(--color-plum)] font-bold text-center leading-[1.2] tracking-widest animate-[spin_12s_linear_infinite_reverse]">
              OPEN<br/>SOURCE<br/>CONTRIBUTOR
            </div>
          </div>
        </motion.div>

        {/* Small introduction text below image */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="text-center text-sm md:text-base font-sans max-w-lg text-[var(--color-plum)]/80 mt-6 leading-relaxed font-medium"
        >
          {personalInfo.bio}
        </motion.p>
        
        {/* Scroll down indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--color-plum)]/60 text-[10px] font-mono font-bold tracking-widest uppercase"
        >
          <span>Scroll to explore</span>
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-px h-10 bg-gradient-to-b from-[var(--color-plum)]/40 to-transparent"
          />
        </motion.div>

      </motion.div>
    </section>
  );
};
