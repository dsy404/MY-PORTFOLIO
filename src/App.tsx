/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { JourneySection } from './components/JourneySection';
import { ProjectsSection } from './components/ProjectsSection';
import { ServicesSection } from './components/ServicesSection';
import { AchievementsSection } from './components/AchievementsSection';
import { CertificatesSection } from './components/CertificatesSection';
import { EducationSection } from './components/EducationSection';
import { ResumeSection } from './components/ResumeSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { SectionPopup } from './components/AnimatedSection';
import { CustomCursor } from './components/CustomCursor';
import { LoadingScreen } from './components/LoadingScreen';
import { AnimatePresence } from 'motion/react';

export default function App() {
  const handleScrollToContact = () => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-[var(--color-rose)] selection:text-white cursor-none">
      <CustomCursor />
      
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {/* Sticky Navigation Bar */}
      <Navbar onContactClick={handleScrollToContact} />

      {/* Main Content Sections with Scroll Pop-Up Reveal */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. About Me Section */}
        <AboutSection />

        {/* 3. Skills Section */}
        <SkillsSection />

        {/* 4. My Journey Timeline Section - Horizontal Scroll Experience */}
        <JourneySection />

        {/* 5. Projects Section with Live Demos & Modals */}
        <ProjectsSection />

        {/* 6. What I Do / Services Section */}
        <ServicesSection />

        {/* 7. Hackathons & Achievements Section - Pops up on scroll */}
        <SectionPopup id="achievements-popup" amount={0.06}>
          <AchievementsSection />
        </SectionPopup>

        {/* 8. Education Section - Pops up on scroll */}
        <SectionPopup id="education-popup" amount={0.06}>
          <EducationSection />
        </SectionPopup>

        {/* 9. Certificates Section - Pops up on scroll */}
        <SectionPopup id="certificates-popup" amount={0.06}>
          <CertificatesSection />
        </SectionPopup>

        {/* 10. Formal Resume Section - Pops up on scroll */}
        <SectionPopup id="resume-popup" amount={0.06}>
          <ResumeSection />
        </SectionPopup>

        {/* 11. Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
