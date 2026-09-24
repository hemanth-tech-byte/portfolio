import React from 'react';
import { ArrowRight, Mail, ChevronRight, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { PortraitDisplay } from './PortraitDisplay';

interface HeroSectionProps {
  onViewProjects: () => void;
  onContactMe: () => void;
  onViewResume?: () => void;
  onLearnMore?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onViewProjects,
  onContactMe,
  onViewResume,
}) => {
  return (
    <section id="hero" className="relative pt-6 pb-16 md:pt-12 md:pb-24 overflow-hidden">
      {/* Background Subtle Gradient */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-900/[0.05] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT SIDE: Exact Hero Typography & Two Buttons */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left space-y-6 md:space-y-8 z-10">
            
            <div className="space-y-3">
              {/* Large, Bold, Clean White Typography Heading */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white uppercase font-display leading-[1.08]">
                {PERSONAL_INFO.name}
              </h1>

              {/* Subtitle Under Name: Blue Accent Typography */}
              <div className="flex items-center gap-2.5 pt-1">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.9)] animate-pulse" />
                <p className="text-xs sm:text-sm md:text-base font-bold tracking-widest text-blue-400 uppercase font-mono">
                  {PERSONAL_INFO.title}
                </p>
              </div>
            </div>

            {/* Hero Description Paragraph */}
            <p className="text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl text-balance">
              "{PERSONAL_INFO.bio}"
            </p>

            {/* Action Buttons Arrangement */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5 sm:gap-4">
              {/* Primary Button: VIEW MY PROJECTS */}
              <button
                onClick={onViewProjects}
                className="group inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 sm:py-4 text-xs sm:text-sm font-bold tracking-wider uppercase text-white bg-blue-600 hover:bg-blue-500 active:scale-[0.99] rounded-xl transition-all duration-200 shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50 cursor-pointer whitespace-nowrap"
              >
                <span>VIEW MY PROJECTS</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* View Resume Button */}
              {onViewResume && (
                <button
                  onClick={onViewResume}
                  className="group inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 sm:py-4 text-xs sm:text-sm font-bold tracking-wider uppercase text-blue-300 hover:text-white bg-blue-950/40 hover:bg-blue-900/60 active:scale-[0.99] border border-blue-800/60 hover:border-blue-500 rounded-xl transition-all duration-200 backdrop-blur-sm shadow-md cursor-pointer whitespace-nowrap"
                >
                  <FileText className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" />
                  <span>VIEW RESUME</span>
                </button>
              )}

              {/* Secondary Button: CONTACT ME */}
              <button
                onClick={onContactMe}
                className="group inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 sm:py-4 text-xs sm:text-sm font-bold tracking-wider uppercase text-slate-200 hover:text-white bg-slate-900/60 hover:bg-slate-800/80 active:scale-[0.99] border border-slate-700/80 hover:border-slate-500 rounded-xl transition-all duration-200 backdrop-blur-sm shadow-md cursor-pointer whitespace-nowrap"
              >
                <Mail className="w-4 h-4 text-slate-400 group-hover:text-blue-400 transition-colors" />
                <span>CONTACT ME</span>
              </button>
            </div>

            {/* Quick Trust / Context Indicators (Subtle, Clean) */}
            <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400 border-t border-slate-800/60 max-w-xl">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.8)]" />
                <span>Class of 2026</span>
              </span>
              <span className="text-slate-700" aria-hidden="true">•</span>
              <span>Placement Ready</span>
              <span className="text-slate-700" aria-hidden="true">•</span>
              <span>500+ DSA Problems Solved</span>
              <span className="text-slate-700" aria-hidden="true">•</span>
              <span>Tech Content Creator</span>
            </div>

          </div>

          {/* RIGHT SIDE: Isolated Portrait with Cinematic Lighting */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end z-10">
            <PortraitDisplay />
          </div>

        </div>
      </div>
    </section>
  );
};

