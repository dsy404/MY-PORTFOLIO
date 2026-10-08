import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export const LoadingScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [step, setStep] = useState(0);
  const textSteps = ["building...", "exploring...", "creating..."];

  useEffect(() => {
    // Cycle through text steps
    const textInterval = setInterval(() => {
      setStep(prev => prev + 1);
    }, 400); // Fast enough to keep loading under 1.5s total

    // Finish loading
    const completeTimeout = setTimeout(() => {
      onComplete();
    }, 1500);

    return () => {
      clearInterval(textInterval);
      clearTimeout(completeTimeout);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{ y: "-100vh" }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[99999] bg-[var(--color-plum)] flex flex-col items-center justify-center cursor-none"
    >
      <div className="relative text-center flex flex-col items-center">
        {/* Name */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl sm:text-5xl md:text-6xl font-display font-black text-[var(--color-cream)] uppercase tracking-widest mb-6"
        >
          Deepshikha Yadav
        </motion.h1>

        {/* Action Words */}
        <div className="h-10 relative flex items-center justify-center overflow-hidden w-full">
          <AnimatePresence mode="popLayout">
            {step < textSteps.length && (
              <motion.span
                key={step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="absolute font-mono text-[var(--color-rose)] font-bold tracking-widest lowercase"
              >
                {textSteps[step]}
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        {/* Minimal Progress Bar */}
        <div className="w-48 h-[2px] bg-white/10 mt-8 rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
            className="h-full bg-[var(--color-rose)]"
          />
        </div>
      </div>
    </motion.div>
  );
};
