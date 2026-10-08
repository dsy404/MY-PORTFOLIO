/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
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

export default function App() {
  const handleScrollToContact = () => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-pink-500 selection:text-white overflow-x-hidden cursor-none">
      <CustomCursor />
      
      {/* Sticky Navigation Bar */}
      <Navbar onContactClick={handleScrollToContact} />

      {/* Main Content Sections with Scroll Pop-Up Reveal */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. About Me Section - Pops up on scroll */}
        <SectionPopup id="about-popup" amount={0.06}>
          <AboutSection />
        </SectionPopup>

        {/* 3. Skills Section - Pops up on scroll */}
        <SectionPopup id="skills-popup" amount={0.06}>
          <SkillsSection />
        </SectionPopup>

        {/* 4. Experience & Open Source Section - Pops up on scroll */}
        <SectionPopup id="experience-popup" amount={0.06}>
          <ExperienceSection />
        </SectionPopup>

        {/* 5. Projects Section with Live Demos & Modals - Pops up on scroll */}
        <SectionPopup id="projects-popup" amount={0.06}>
          <ProjectsSection />
        </SectionPopup>

        {/* 6. What I Do / Services Section - Pops up on scroll */}
        <SectionPopup id="services-popup" amount={0.06}>
          <ServicesSection />
        </SectionPopup>

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

        {/* 11. Contact Section - Pops up on scroll */}
        <SectionPopup id="contact-popup" amount={0.06}>
          <ContactSection />
        </SectionPopup>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
