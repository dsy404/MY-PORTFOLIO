import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

type CursorState = 'default' | 'hover' | 'project' | 'explore';

export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorState, setCursorState] = useState<CursorState>('default');

  useEffect(() => {
    // Only enable on desktop/non-touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check for specific interactive elements
      if (target.closest('[data-cursor="project"]')) {
        setCursorState('project');
      } else if (target.closest('[data-cursor="explore"]') || target.tagName === 'IMG') {
        setCursorState('explore');
      } else if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('interactive')
      ) {
        setCursorState('hover');
      } else {
        setCursorState('default');
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  // Return null on touch devices
  if (typeof window !== 'undefined' && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  const isTextCursor = cursorState === 'project' || cursorState === 'explore';

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 flex items-center justify-center rounded-full pointer-events-none z-[9999] bg-[var(--color-plum)] text-[var(--color-cream)] font-mono text-[10px] font-bold overflow-hidden shadow-xl"
        animate={{
          x: mousePosition.x - (isTextCursor ? 40 : (cursorState === 'hover' ? 12 : 8)),
          y: mousePosition.y - (isTextCursor ? 40 : (cursorState === 'hover' ? 12 : 8)),
          width: isTextCursor ? 80 : (cursorState === 'hover' ? 24 : 16),
          height: isTextCursor ? 80 : (cursorState === 'hover' ? 24 : 16),
          opacity: 1
        }}
        transition={{
          type: 'spring',
          stiffness: 150,
          damping: 15,
          mass: 0.5
        }}
      >
        <AnimatePresence mode="wait">
          {cursorState === 'project' && (
            <motion.span
              key="project"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="text-center leading-tight tracking-widest whitespace-nowrap"
            >
              VIEW<br/>PROJECT
            </motion.span>
          )}
          {cursorState === 'explore' && (
            <motion.span
              key="explore"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="tracking-widest"
            >
              EXPLORE
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
      
      {/* Outer ring for default hover state only */}
      <AnimatePresence>
        {!isTextCursor && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: cursorState === 'default' ? 0.5 : 0,
              x: mousePosition.x - 24,
              y: mousePosition.y - 24,
              scale: cursorState === 'hover' ? 1.5 : 1,
            }}
            exit={{ opacity: 0 }}
            transition={{
              type: 'spring',
              stiffness: 100,
              damping: 20,
              mass: 0.8
            }}
            className="fixed top-0 left-0 w-12 h-12 border border-[var(--color-plum)] rounded-full pointer-events-none z-[9998]"
          />
        )}
      </AnimatePresence>
    </>
  );
};
