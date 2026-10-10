import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, Linkedin, Mail, Send, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // In a real app, send data here
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="relative min-h-screen py-32 bg-[var(--color-plum)] overflow-hidden flex flex-col items-center justify-center">
      
      {/* Immersive Background */}
      <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[80vw] h-[80vw] bg-[var(--color-rose)] rounded-full blur-[150px] opacity-20 -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[60vw] h-[60vw] bg-[var(--color-peach)] rounded-full blur-[150px] opacity-10 translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        {/* Left Column - Big Statement */}
        <div className="flex flex-col">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-display font-black text-[var(--color-cream)] leading-[0.9] tracking-tighter mb-8"
          >
            LET'S<br/>
            BUILD<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-rose)] to-[var(--color-peach)]">
              SOMETHING<br/>COOL.
            </span>
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1 }}
            className="flex gap-4 mt-8"
          >
            <a 
              href={personalInfo.github} 
              target="_blank" 
              rel="noreferrer"
              className="w-14 h-14 rounded-full bg-white/10 hover:bg-[var(--color-rose)] flex items-center justify-center text-[var(--color-cream)] transition-all duration-300 hover:scale-110 cursor-none"
              data-cursor="hover"
            >
              <Github size={24} />
            </a>
            <a 
              href={personalInfo.linkedin} 
              target="_blank" 
              rel="noreferrer"
              className="w-14 h-14 rounded-full bg-white/10 hover:bg-[var(--color-rose)] flex items-center justify-center text-[var(--color-cream)] transition-all duration-300 hover:scale-110 cursor-none"
              data-cursor="hover"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href={`mailto:${personalInfo.email}`}
              className="w-14 h-14 rounded-full bg-white/10 hover:bg-[var(--color-rose)] flex items-center justify-center text-[var(--color-cream)] transition-all duration-300 hover:scale-110 cursor-none"
              data-cursor="hover"
            >
              <Mail size={24} />
            </a>
          </motion.div>
        </div>

        {/* Right Column - Contact Form */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[var(--color-cream)] rounded-[40px] p-8 md:p-12 shadow-2xl relative overflow-hidden"
        >
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form 
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, x: -50 }}
                className="flex flex-col gap-6"
              >
                <div>
                  <label className="block font-mono text-xs font-bold text-[var(--color-plum)]/70 uppercase tracking-widest mb-2 ml-4">
                    Your Name
                  </label>
                  <input 
                    type="text" 
                    required
                    className="w-full bg-white border border-[var(--color-lavender)] px-6 py-4 rounded-2xl text-[var(--color-plum)] focus:outline-none focus:border-[var(--color-rose)] focus:ring-4 focus:ring-[var(--color-rose)]/10 transition-all font-sans font-medium"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label className="block font-mono text-xs font-bold text-[var(--color-plum)]/70 uppercase tracking-widest mb-2 ml-4">
                    Your Email
                  </label>
                  <input 
                    type="email" 
                    required
                    className="w-full bg-white border border-[var(--color-lavender)] px-6 py-4 rounded-2xl text-[var(--color-plum)] focus:outline-none focus:border-[var(--color-rose)] focus:ring-4 focus:ring-[var(--color-rose)]/10 transition-all font-sans font-medium"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label className="block font-mono text-xs font-bold text-[var(--color-plum)]/70 uppercase tracking-widest mb-2 ml-4">
                    Message
                  </label>
                  <textarea 
                    required
                    rows={4}
                    className="w-full bg-white border border-[var(--color-lavender)] px-6 py-4 rounded-2xl text-[var(--color-plum)] focus:outline-none focus:border-[var(--color-rose)] focus:ring-4 focus:ring-[var(--color-rose)]/10 transition-all font-sans font-medium resize-none"
                    placeholder="Let's build something together..."
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full mt-4 bg-[var(--color-plum)] hover:bg-[#34242d] text-[var(--color-cream)] px-8 py-5 rounded-full font-mono text-sm font-bold uppercase tracking-widest flex items-center justify-center gap-3 transition-colors cursor-none group"
                  data-cursor="hover"
                >
                  <span>Send Message</span>
                  <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </motion.form>
            ) : (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-20 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="w-24 h-24 bg-[var(--color-rose)]/20 rounded-full flex items-center justify-center mb-6 text-[var(--color-rose)]"
                >
                  <CheckCircle2 size={48} />
                </motion.div>
                <h3 className="text-3xl font-display font-bold text-[var(--color-plum)] mb-2">Message Sent!</h3>
                <p className="text-[var(--color-plum)]/70 font-sans font-medium">I'll get back to you as soon as possible.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};
