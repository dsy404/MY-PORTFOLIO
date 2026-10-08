import React from 'react';
import { motion, useReducedMotion } from 'motion/react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  amount?: number | 'some' | 'all';
  variant?: 'popup' | 'slide' | 'fade';
  scale?: boolean;
}

/**
 * Inner component animated element (for cards, headers, badges, etc.)
 */
export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  amount = 0.12,
  variant = 'popup',
  scale = true,
}) => {
  const shouldReduceMotion = useReducedMotion();

  const getInitialOffset = () => {
    if (shouldReduceMotion || direction === 'none') return { x: 0, y: 0 };
    switch (direction) {
      case 'up': return { x: 0, y: 44 };
      case 'down': return { x: 0, y: -44 };
      case 'left': return { x: 44, y: 0 };
      case 'right': return { x: -44, y: 0 };
    }
  };

  const offset = getInitialOffset();
  const initialScale = !shouldReduceMotion && scale && variant === 'popup' ? 0.93 : 1;

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        x: offset.x, 
        y: offset.y,
        scale: initialScale,
        filter: shouldReduceMotion ? 'none' : 'blur(4px)'
      }}
      whileInView={{ 
        opacity: 1, 
        x: 0, 
        y: 0,
        scale: 1,
        filter: 'blur(0px)'
      }}
      viewport={{ 
        once: false,
        amount: amount as any,
        margin: "0px 0px -40px 0px"
      }}
      transition={{
        duration: shouldReduceMotion ? 0.2 : 0.75,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.16, 1, 0.3, 1], // The exact smooth cubic-bezier curve from Webflow/Weglot showcase
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface SectionPopupProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  amount?: number;
  chapter?: string;
  name?: string;
}

/**
 * Top-level section pop-up wrapper for the entire section container.
 * Smoothly scales, elevates, and de-blurs the section into view on scroll.
 */
export const SectionPopup: React.FC<SectionPopupProps> = ({
  children,
  id,
  className = '',
  amount = 0.08,
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      id={id}
      initial={{ 
        opacity: 0, 
        y: shouldReduceMotion ? 0 : 56,
        scale: shouldReduceMotion ? 1 : 0.94,
        filter: shouldReduceMotion ? 'none' : 'blur(6px)'
      }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        scale: 1,
        filter: 'blur(0px)'
      }}
      viewport={{ 
        once: false,
        amount: amount as any,
        margin: "-40px 0px -40px 0px"
      }}
      transition={{
        duration: shouldReduceMotion ? 0.25 : 0.85,
        ease: [0.16, 1, 0.3, 1], // Cinematic presentation showcase curve
      }}
      style={{
        transformOrigin: "center top"
      }}
      className={`w-full relative transition-all ${className}`}
    >
      {children}
    </motion.div>
  );
};
