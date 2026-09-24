import React from 'react';
import { GraduationCap, Award, Compass, Sparkles, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO, MILESTONES } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative py-16 md:py-24 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Title */}
        <div className="space-y-3 mb-12">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            <span className="text-xs font-bold tracking-widest text-blue-400 uppercase font-mono">
              BACKGROUND & ACADEMICS
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white uppercase font-display">
            ABOUT HEMANTH MAMIDI
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
            Final-year Computer Science Engineering student dedicated to crafting responsive digital solutions, exploring modern AI systems, and sharing technical knowledge.
          </p>
        </div>

        {/* Two-Column Bio & Milestones */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Left Column: Academic Profile & Philosophy */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-7 rounded-2xl bg-slate-900/40 border border-slate-800/80 space-y-4">
              <h3 className="text-lg font-bold text-white uppercase font-display flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-blue-400" />
                Computer Science & Engineering Focus
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Currently completing my B.Tech in Computer Science and Engineering. My academic journey has combined rigorous theoretical foundations—Operating Systems, Relational Databases, and Algorithmic Complexity—with hands-on full-stack product building and machine learning experiments.
              </p>
              <p className="text-sm text-slate-300 leading-relaxed">
                I believe high-impact engineering comes from pairing clean, maintainable code with intuitive user experiences. When I’m not debugging or optimizing database queries, I break down technical paradigms to share with the broader student developer community.
              </p>
            </div>

            {/* Core Values / Working Principles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-slate-900/30 border border-slate-800/80 space-y-2">
                <div className="text-xs font-mono text-blue-400 uppercase font-bold">01. Problem Solving</div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Breaking down non-trivial engineering problems into modular, testable components with optimized Big-O efficiency.
                </p>
              </div>
              <div className="p-5 rounded-xl bg-slate-900/30 border border-slate-800/80 space-y-2">
                <div className="text-xs font-mono text-blue-400 uppercase font-bold">02. Modern Tooling</div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Leveraging modern TypeScript, React, Node.js, and Google Cloud services for clean full-stack execution.
                </p>
              </div>
              <div className="p-5 rounded-xl bg-slate-900/30 border border-slate-800/80 space-y-2">
                <div className="text-xs font-mono text-blue-400 uppercase font-bold">03. AI Integration</div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Integrating real machine learning workflows, predictive models, and modern LLM orchestration into web apps.
                </p>
              </div>
              <div className="p-5 rounded-xl bg-slate-900/30 border border-slate-800/80 space-y-2">
                <div className="text-xs font-mono text-blue-400 uppercase font-bold">04. Clear Communication</div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Documenting architectural trade-offs clearly and mentoring peers through accessible technical content.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Timeline & Key Milestones */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-lg font-bold text-white uppercase font-display flex items-center gap-2">
              <Award className="w-5 h-5 text-blue-400" />
              Academic & Technical Milestones
            </h3>

            <div className="space-y-4 border-l-2 border-slate-800/80 pl-6 ml-2">
              {MILESTONES.map((m, idx) => (
                <div key={idx} className="relative space-y-1.5 pb-2">
                  <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-blue-500 border-2 border-[#07090e] shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                  <span className="text-xs font-mono text-blue-400 font-semibold">{m.year}</span>
                  <h4 className="text-base font-bold text-white">{m.title}</h4>
                  <div className="text-xs text-slate-400 font-medium">{m.institution}</div>
                  <p className="text-xs text-slate-300 leading-relaxed pt-1">{m.description}</p>
                </div>
              ))}
            </div>

            {/* Placement Readiness Banner */}
            <div className="p-5 rounded-xl bg-blue-950/20 border border-blue-900/40 flex items-center justify-between text-xs text-slate-300">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Available for immediate placement interviews & technical evaluations.</span>
              </div>
              <span className="text-blue-400 font-mono font-bold shrink-0">Class of '26</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
