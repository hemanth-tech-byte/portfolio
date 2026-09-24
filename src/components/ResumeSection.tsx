import React, { useState } from 'react';
import {
  FileText,
  Download,
  Printer,
  Maximize2,
  Copy,
  Check,
  Briefcase,
  GraduationCap,
  Code,
  Award,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  ArrowUpRight,
} from 'lucide-react';
import { RESUME_DATA, PERSONAL_INFO } from '../data/portfolioData';

interface ResumeSectionProps {
  onOpenModal: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ onOpenModal }) => {
  const [activeTab, setActiveTab] = useState<'ats' | 'interactive'>('ats');
  const [copied, setCopied] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    const text = `# ${RESUME_DATA.personal.name}
${RESUME_DATA.personal.title}
Location: ${RESUME_DATA.personal.location} | Phone: ${RESUME_DATA.personal.mobile} | Email: ${RESUME_DATA.personal.email}
GitHub: ${RESUME_DATA.personal.github} | LinkedIn: ${RESUME_DATA.personal.linkedin}

---

## PROFESSIONAL SUMMARY
${RESUME_DATA.summary}

---

## EDUCATION
**${RESUME_DATA.education[0].degree}**
${RESUME_DATA.education[0].institution} | ${RESUME_DATA.education[0].location}
Period: ${RESUME_DATA.education[0].period} (${RESUME_DATA.education[0].status})
Relevant Coursework: ${RESUME_DATA.education[0].coursework.join(', ')}

---

## TECHNICAL SKILLS
- Programming Languages: ${RESUME_DATA.skills.programmingLanguages.join(', ')}
- Web Development: ${RESUME_DATA.skills.webDevelopment.join(', ')}
- AI & Data Science: ${RESUME_DATA.skills.aiAndData.join(', ')}
- Databases & Cloud: ${RESUME_DATA.skills.databasesAndCloud.join(', ')}
- Developer Tools: ${RESUME_DATA.skills.toolsAndPractices.join(', ')}
- Core Competencies: ${RESUME_DATA.skills.coreCompetencies.join(', ')}

---

## KEY PROJECTS
${RESUME_DATA.projects
  .map(
    (p) => `### ${p.name} (${p.category})
Technologies: ${p.techStack}
${p.points.map((pt) => `- ${pt}`).join('\n')}`
  )
  .join('\n\n')}

---

## EXPERIENCE & COMMUNITY
${RESUME_DATA.experience
  .map(
    (e) => `### ${e.role} | ${e.organization}
${e.location} | ${e.period}
${e.highlights.map((h) => `- ${h}`).join('\n')}`
  )
  .join('\n\n')}

---

## ACHIEVEMENTS & CERTIFICATIONS
${RESUME_DATA.achievements.map((a) => `- ${a}`).join('\n')}
`;
    const blob = new Blob([text], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Hemanth_Mamidi_Resume.md';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleCopyContact = async () => {
    try {
      await navigator.clipboard.writeText(
        `Name: ${RESUME_DATA.personal.name}\nPhone: ${RESUME_DATA.personal.mobile}\nEmail: ${RESUME_DATA.personal.email}\nGitHub: ${RESUME_DATA.personal.github}\nLinkedIn: ${RESUME_DATA.personal.linkedin}`
      );
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <section id="resume" className="relative py-16 md:py-24 border-t border-slate-900 overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-blue-900/[0.04] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              <span className="text-xs font-bold tracking-widest text-blue-400 uppercase font-mono">
                ACADEMICS & CREDENTIALS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white uppercase font-display">
              RESUME & QUALIFICATIONS
            </h2>
            <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
              Complete ATS-optimized resume for engineering recruiters, tech leads, and campus placement evaluations.
            </p>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenModal}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 active:scale-[0.99] rounded-xl transition-all shadow-md shadow-blue-600/20 cursor-pointer"
            >
              <Maximize2 className="w-4 h-4" />
              <span>Fullscreen ATS Resume</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-200 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700/80 rounded-xl transition-colors cursor-pointer"
            >
              <Printer className="w-4 h-4 text-blue-400" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-200 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700/80 rounded-xl transition-colors cursor-pointer"
            >
              <Download className="w-4 h-4 text-blue-400" />
              <span>Download (.md)</span>
            </button>
          </div>
        </div>

        {/* Recruiter Quick Snapshot Banner */}
        <div className="mb-8 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-blue-950/30 via-slate-900/60 to-slate-900/40 border border-blue-900/40 shadow-lg">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                <span className="text-xs font-bold font-mono tracking-wider text-emerald-400 uppercase">
                  Available for Immediate Hire & Campus Placements
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white uppercase">
                {RESUME_DATA.personal.name} — B.Tech Computer Science (2022–2026)
              </h3>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-slate-300">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-blue-400" />
                  {RESUME_DATA.personal.location}
                </span>
                <span className="text-slate-600">•</span>
                <a
                  href={`tel:${RESUME_DATA.personal.mobileRaw}`}
                  className="flex items-center gap-1.5 hover:text-white hover:underline"
                >
                  <Phone className="w-3.5 h-3.5 text-blue-400" />
                  {RESUME_DATA.personal.mobile}
                </a>
                <span className="text-slate-600">•</span>
                <a
                  href={`mailto:${RESUME_DATA.personal.email}`}
                  className="flex items-center gap-1.5 hover:text-white hover:underline"
                >
                  <Mail className="w-3.5 h-3.5 text-blue-400" />
                  {RESUME_DATA.personal.email}
                </a>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                onClick={handleCopyContact}
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 rounded-lg transition-colors cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Copied Details!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-400" />
                    <span>Copy Contact</span>
                  </>
                )}
              </button>

              <a
                href={RESUME_DATA.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-200 hover:text-white bg-blue-900/30 hover:bg-blue-800/40 border border-blue-700/50 rounded-lg transition-colors"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href={RESUME_DATA.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-200 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 rounded-lg transition-colors"
              >
                <span>GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* View Switcher Tabs */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-6">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('ats')}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all cursor-pointer ${
                activeTab === 'ats'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
            >
              ATS Paper Layout
            </button>
            <button
              onClick={() => setActiveTab('interactive')}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all cursor-pointer ${
                activeTab === 'interactive'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
            >
              Interactive Cards
            </button>
          </div>

          <span className="text-xs text-slate-500 font-mono hidden sm:inline">
            Updated for 2026 Graduating Class
          </span>
        </div>

        {/* TAB 1: ATS PAPER VIEW */}
        {activeTab === 'ats' && (
          <div className="rounded-2xl bg-white text-slate-900 p-6 sm:p-12 shadow-2xl border border-slate-200 printable-resume-container">
            {/* Header */}
            <div className="text-center pb-6 border-b border-slate-300">
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight uppercase text-slate-950 font-display">
                {RESUME_DATA.personal.name}
              </h1>
              <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-blue-700 mt-1">
                {RESUME_DATA.personal.title}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 mt-3 text-xs text-slate-600">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-blue-600 shrink-0" />
                  {RESUME_DATA.personal.location}
                </span>
                <span>•</span>
                <a
                  href={`tel:${RESUME_DATA.personal.mobileRaw}`}
                  className="flex items-center gap-1 hover:underline text-slate-800"
                >
                  <Phone className="w-3 h-3 text-blue-600 shrink-0" />
                  {RESUME_DATA.personal.mobile}
                </a>
                <span>•</span>
                <a
                  href={`mailto:${RESUME_DATA.personal.email}`}
                  className="flex items-center gap-1 hover:underline font-medium text-slate-800"
                >
                  <Mail className="w-3 h-3 text-blue-600 shrink-0" />
                  {RESUME_DATA.personal.email}
                </a>
                <span>•</span>
                <a
                  href={RESUME_DATA.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:underline text-blue-600 font-mono"
                >
                  <span>{RESUME_DATA.personal.githubDisplay}</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
                <span>•</span>
                <a
                  href={RESUME_DATA.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:underline text-blue-600 font-mono"
                >
                  <span>{RESUME_DATA.personal.linkedinDisplay}</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </div>
            </div>

            {/* Summary */}
            <div className="pt-5 pb-4 border-b border-slate-300">
              <h2 className="text-xs font-bold tracking-widest uppercase text-blue-800 mb-2">
                PROFESSIONAL SUMMARY
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {RESUME_DATA.summary}
              </p>
            </div>

            {/* Education */}
            <div className="pt-5 pb-4 border-b border-slate-300">
              <h2 className="text-xs font-bold tracking-widest uppercase text-blue-800 mb-3">
                EDUCATION
              </h2>
              {RESUME_DATA.education.map((edu, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs sm:text-sm">
                    <span className="font-bold text-slate-950">{edu.degree}</span>
                    <span className="font-mono text-xs font-semibold text-slate-600">
                      {edu.period} ({edu.status})
                    </span>
                  </div>
                  <div className="text-xs text-slate-600">
                    {edu.institution} • {edu.location}
                  </div>
                  <p className="text-xs text-slate-600 pt-1 leading-relaxed">
                    <span className="font-semibold text-slate-800">Relevant Coursework:</span>{' '}
                    {edu.coursework.join(', ')}
                  </p>
                </div>
              ))}
            </div>

            {/* Technical Skills */}
            <div className="pt-5 pb-4 border-b border-slate-300">
              <h2 className="text-xs font-bold tracking-widest uppercase text-blue-800 mb-3">
                TECHNICAL SKILLS
              </h2>
              <div className="space-y-1.5 text-xs text-slate-700 leading-relaxed">
                <div>
                  <span className="font-bold text-slate-900">Programming Languages:</span>{' '}
                  {RESUME_DATA.skills.programmingLanguages.join(', ')}
                </div>
                <div>
                  <span className="font-bold text-slate-900">Web Development & Backend:</span>{' '}
                  {RESUME_DATA.skills.webDevelopment.join(', ')}
                </div>
                <div>
                  <span className="font-bold text-slate-900">AI & Data Science:</span>{' '}
                  {RESUME_DATA.skills.aiAndData.join(', ')}
                </div>
                <div>
                  <span className="font-bold text-slate-900">Databases & Cloud:</span>{' '}
                  {RESUME_DATA.skills.databasesAndCloud.join(', ')}
                </div>
                <div>
                  <span className="font-bold text-slate-900">Developer Tools:</span>{' '}
                  {RESUME_DATA.skills.toolsAndPractices.join(', ')}
                </div>
                <div>
                  <span className="font-bold text-slate-900">Core Competencies:</span>{' '}
                  {RESUME_DATA.skills.coreCompetencies.join(', ')}
                </div>
              </div>
            </div>

            {/* Featured Projects */}
            <div className="pt-5 pb-4 border-b border-slate-300">
              <h2 className="text-xs font-bold tracking-widest uppercase text-blue-800 mb-3">
                FEATURED PROJECTS
              </h2>
              <div className="space-y-4">
                {RESUME_DATA.projects.map((proj, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                        {proj.name}
                        <span className="text-xs font-normal text-slate-500 ml-2">
                          | {proj.category}
                        </span>
                      </h3>
                    </div>
                    <div className="text-[11px] font-mono text-blue-700">
                      Technologies: {proj.techStack}
                    </div>
                    <ul className="list-disc list-outside ml-4 space-y-0.5 text-xs text-slate-700 leading-relaxed">
                      {proj.points.map((pt, pIdx) => (
                        <li key={pIdx}>{pt}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience & Community */}
            <div className="pt-5 pb-4 border-b border-slate-300">
              <h2 className="text-xs font-bold tracking-widest uppercase text-blue-800 mb-3">
                EXPERIENCE & COMMUNITY
              </h2>
              <div className="space-y-3">
                {RESUME_DATA.experience.map((exp, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs sm:text-sm">
                      <span className="font-bold text-slate-950">{exp.role}</span>
                      <span className="font-mono text-xs font-semibold text-slate-600">
                        {exp.period}
                      </span>
                    </div>
                    <div className="text-xs text-slate-600">
                      {exp.organization} • {exp.location}
                    </div>
                    <ul className="list-disc list-outside ml-4 space-y-0.5 text-xs text-slate-700 leading-relaxed">
                      {exp.highlights.map((hl, hIdx) => (
                        <li key={hIdx}>{hl}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="pt-5">
              <h2 className="text-xs font-bold tracking-widest uppercase text-blue-800 mb-2">
                HONORS & ACHIEVEMENTS
              </h2>
              <ul className="list-disc list-outside ml-4 space-y-1 text-xs text-slate-700 leading-relaxed">
                {RESUME_DATA.achievements.map((ach, idx) => (
                  <li key={idx}>{ach}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* TAB 2: INTERACTIVE CARDS VIEW */}
        {activeTab === 'interactive' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left: Summary & Education */}
            <div className="lg:col-span-6 space-y-6">
              {/* Summary Card */}
              <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
                <div className="flex items-center gap-2 text-blue-400">
                  <FileText className="w-5 h-5" />
                  <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                    Executive Summary
                  </h3>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {RESUME_DATA.summary}
                </p>
              </div>

              {/* Education Card */}
              <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
                <div className="flex items-center gap-2 text-blue-400">
                  <GraduationCap className="w-5 h-5" />
                  <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                    Academic Background
                  </h3>
                </div>
                {RESUME_DATA.education.map((edu, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="text-base font-bold text-white">{edu.degree}</h4>
                      <span className="text-xs font-mono text-blue-400 font-semibold">
                        {edu.period}
                      </span>
                    </div>
                    <div className="text-xs text-slate-400">
                      {edu.institution} • {edu.location}
                    </div>
                    <div className="pt-2">
                      <div className="text-xs font-semibold text-slate-300 mb-2">Core Subjects:</div>
                      <div className="flex flex-wrap gap-1.5">
                        {edu.coursework.map((course, cIdx) => (
                          <span
                            key={cIdx}
                            className="px-2 py-0.5 text-[11px] rounded bg-slate-800 text-slate-300 border border-slate-700/60"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Achievements Card */}
              <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
                <div className="flex items-center gap-2 text-blue-400">
                  <Award className="w-5 h-5" />
                  <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                    Key Highlights & Strengths
                  </h3>
                </div>
                <ul className="space-y-2">
                  {RESUME_DATA.achievements.map((ach, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: Technical Skills & Projects */}
            <div className="lg:col-span-6 space-y-6">
              {/* Skills Breakdown */}
              <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
                <div className="flex items-center gap-2 text-blue-400">
                  <Code className="w-5 h-5" />
                  <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                    Technical Stack Matrix
                  </h3>
                </div>
                <div className="space-y-3 text-xs">
                  <div>
                    <div className="text-slate-400 font-mono uppercase mb-1.5">Languages</div>
                    <div className="flex flex-wrap gap-1.5">
                      {RESUME_DATA.skills.programmingLanguages.map((s, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-md bg-blue-950/40 border border-blue-800/60 text-blue-300 font-medium"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="text-slate-400 font-mono uppercase mb-1.5">Web & Backend</div>
                    <div className="flex flex-wrap gap-1.5">
                      {RESUME_DATA.skills.webDevelopment.map((s, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700 text-slate-200"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="text-slate-400 font-mono uppercase mb-1.5">AI & Machine Learning</div>
                    <div className="flex flex-wrap gap-1.5">
                      {RESUME_DATA.skills.aiAndData.map((s, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-md bg-emerald-950/40 border border-emerald-800/60 text-emerald-300 font-medium"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="text-slate-400 font-mono uppercase mb-1.5">Databases & Cloud</div>
                    <div className="flex flex-wrap gap-1.5">
                      {RESUME_DATA.skills.databasesAndCloud.map((s, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700 text-slate-200"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Projects Summary */}
              <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
                <div className="flex items-center gap-2 text-blue-400">
                  <Briefcase className="w-5 h-5" />
                  <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                    Core Project Deliverables
                  </h3>
                </div>
                <div className="space-y-4">
                  {RESUME_DATA.projects.map((p, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-white text-sm">{p.name}</span>
                        <span className="text-[10px] font-mono text-blue-400 px-2 py-0.5 rounded bg-blue-950/60 border border-blue-900/50">
                          {p.category}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 font-mono">{p.techStack}</p>
                      <p className="text-xs text-slate-300 leading-relaxed">{p.points[0]}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
