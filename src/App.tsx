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
import { EducationSection } from './components/EducationSection';
import { ResumeSection } from './components/ResumeSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const handleScrollToContact = () => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Sticky Navigation Bar */}
      <Navbar onContactClick={handleScrollToContact} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section with Interactive 3D Visual */}
        <Hero />

        {/* 2. About Me Section */}
        <AboutSection />

        {/* 3. Skills Section */}
        <SkillsSection />

        {/* 4. Experience & Open Source Section */}
        <ExperienceSection />

        {/* 5. Projects Section with Live Interactive Demos & Modals */}
        <ProjectsSection />

        {/* 6. What I Do / Services Section */}
        <ServicesSection />

        {/* 7. Hackathons & Achievements Section */}
        <AchievementsSection />

        {/* 8. Education Section */}
        <EducationSection />

        {/* 9. Formal Resume Section */}
        <ResumeSection />

        {/* 10. Contact Section */}
        <ContactSection />
      </main>

      {/* 10. Footer */}
      <Footer />
    </div>
  );
}
