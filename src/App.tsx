import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { FeatureCards } from './components/FeatureCards';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { TechCreatorSection } from './components/TechCreatorSection';
import { AboutSection } from './components/AboutSection';
import { ResumeSection } from './components/ResumeSection';
import { ResumeModal } from './components/ResumeModal';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleCardClick = (cardId: string) => {
    if (cardId === 'full-stack' || cardId === 'ai-data' || cardId === 'problem-solving') {
      scrollToSection('projects');
    }
  };

  const handleTechClick = (tech: string) => {
    scrollToSection('skills');
  };

  // Observe active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'resume', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        if (section === 'hero') {
          if (window.scrollY < 350) {
            setActiveSection('hero');
            return;
          }
          continue;
        }
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            return;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 selection:bg-blue-600 selection:text-white font-sans antialiased relative">
      {/* Top Navbar */}
      <Navbar
        activeSection={activeSection}
        onNavigate={scrollToSection}
        onOpenResumeModal={() => setIsResumeModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        {/* HERO SECTION */}
        <HeroSection
          onViewProjects={() => scrollToSection('projects')}
          onContactMe={() => scrollToSection('contact')}
          onViewResume={() => scrollToSection('resume')}
        />

        {/* FEATURE CARDS: Exactly 3 horizontal cards + TECHNOLOGIES Bar */}
        <FeatureCards
          onCardClick={handleCardClick}
          onTechClick={handleTechClick}
        />

        {/* DETAILED TECHNICAL SKILLS MATRIX */}
        <SkillsSection />

        {/* PROJECTS SHOWCASE */}
        <ProjectsSection />

        {/* TECH INFLUENCER / COMMUNITY KNOWLEDGE SHARING */}
        <TechCreatorSection />

        {/* ABOUT ME & ACADEMICS */}
        <AboutSection />

        {/* OFFICIAL RESUME & QUALIFICATIONS SECTION */}
        <ResumeSection onOpenModal={() => setIsResumeModalOpen(true)} />

        {/* CONTACT SECTION */}
        <ContactSection onViewResume={() => scrollToSection('resume')} />
      </main>

      {/* FOOTER */}
      <Footer onScrollToTop={() => scrollToSection('hero')} />

      {/* Fullscreen Interactive & Printable ATS Resume Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}

