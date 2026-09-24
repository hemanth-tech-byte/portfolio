import React, { useEffect, useState } from 'react';
import {
  X,
  Printer,
  Download,
  Copy,
  Check,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  FileText,
  Briefcase,
  GraduationCap,
  Award,
  Code,
} from 'lucide-react';
import { RESUME_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [themeMode, setThemeMode] = useState<'paper' | 'dark'>('paper');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const generateMarkdownResume = () => {
    return `# ${RESUME_DATA.personal.name}
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
- Web & Backend: ${RESUME_DATA.skills.webDevelopment.join(', ')}
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
  };

  const handleDownload = () => {
    const text = generateMarkdownResume();
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

  const handleCopyText = async () => {
    try {
      const text = generateMarkdownResume();
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-[#0b0e14] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#0d121c] no-print">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-white uppercase tracking-wider font-display">
                Hemanth Mamidi — Resume
              </h3>
              <p className="text-xs text-slate-400">
                Official Curriculum Vitae • CSE Final Year Student
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* View Mode Toggle */}
            <div className="hidden sm:flex items-center bg-slate-900 border border-slate-800 rounded-lg p-0.5 text-xs">
              <button
                onClick={() => setThemeMode('paper')}
                className={`px-2.5 py-1 rounded font-medium transition-all ${
                  themeMode === 'paper'
                    ? 'bg-slate-800 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Paper Mode
              </button>
              <button
                onClick={() => setThemeMode('dark')}
                className={`px-2.5 py-1 rounded font-medium transition-all ${
                  themeMode === 'dark'
                    ? 'bg-slate-800 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Dark Mode
              </button>
            </div>

            {/* Print Button */}
            <button
              onClick={handlePrint}
              title="Print or Save as PDF (Ctrl/Cmd + P)"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-200 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5 text-blue-400" />
              <span className="hidden md:inline">Print / PDF</span>
            </button>

            {/* Download Markdown */}
            <button
              onClick={handleDownload}
              title="Download ATS formatted resume"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Download</span>
            </button>

            {/* Copy Button */}
            <button
              onClick={handleCopyText}
              title="Copy formatted resume text"
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Resume Content */}
        <div className="overflow-y-auto p-4 sm:p-8 bg-[#07090e]">
          {/* Printable Document Container */}
          <div
            id="resume-printable-area"
            className={`printable-resume-container mx-auto max-w-3xl rounded-xl p-6 sm:p-10 transition-colors shadow-xl ${
              themeMode === 'paper'
                ? 'bg-white text-slate-900 border border-slate-200'
                : 'bg-slate-900/90 text-slate-100 border border-slate-800'
            }`}
          >
            {/* Resume Header */}
            <div className="text-center pb-6 border-b border-slate-300 dark:border-slate-800">
              <h1
                className={`text-2xl sm:text-3xl font-extrabold tracking-tight uppercase ${
                  themeMode === 'paper' ? 'text-slate-950' : 'text-white'
                }`}
              >
                {RESUME_DATA.personal.name}
              </h1>
              <p
                className={`text-xs sm:text-sm font-semibold tracking-wider uppercase mt-1 ${
                  themeMode === 'paper' ? 'text-blue-700' : 'text-blue-400'
                }`}
              >
                {RESUME_DATA.personal.title}
              </p>

              {/* Contact Pill Bar */}
              <div
                className={`flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 mt-3 text-xs ${
                  themeMode === 'paper' ? 'text-slate-600' : 'text-slate-300'
                }`}
              >
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-blue-600 dark:text-blue-400 shrink-0" />
                  {RESUME_DATA.personal.location}
                </span>
                <span>•</span>
                <a
                  href={`tel:${RESUME_DATA.personal.mobileRaw}`}
                  className="flex items-center gap-1 hover:underline"
                >
                  <Phone className="w-3 h-3 text-blue-600 dark:text-blue-400 shrink-0" />
                  {RESUME_DATA.personal.mobile}
                </a>
                <span>•</span>
                <a
                  href={`mailto:${RESUME_DATA.personal.email}`}
                  className="flex items-center gap-1 hover:underline font-medium"
                >
                  <Mail className="w-3 h-3 text-blue-600 dark:text-blue-400 shrink-0" />
                  {RESUME_DATA.personal.email}
                </a>
                <span>•</span>
                <a
                  href={RESUME_DATA.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:underline text-blue-600 dark:text-blue-400 font-mono"
                >
                  <span>GitHub</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
                <span>•</span>
                <a
                  href={RESUME_DATA.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:underline text-blue-600 dark:text-blue-400 font-mono"
                >
                  <span>LinkedIn</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="pt-5 pb-4 border-b border-slate-300 dark:border-slate-800">
              <h2
                className={`text-xs font-bold tracking-widest uppercase mb-2 ${
                  themeMode === 'paper' ? 'text-blue-800' : 'text-blue-400'
                }`}
              >
                PROFESSIONAL SUMMARY
              </h2>
              <p
                className={`text-xs sm:text-sm leading-relaxed ${
                  themeMode === 'paper' ? 'text-slate-700' : 'text-slate-300'
                }`}
              >
                {RESUME_DATA.summary}
              </p>
            </div>

            {/* Education */}
            <div className="pt-5 pb-4 border-b border-slate-300 dark:border-slate-800">
              <h2
                className={`text-xs font-bold tracking-widest uppercase mb-3 ${
                  themeMode === 'paper' ? 'text-blue-800' : 'text-blue-400'
                }`}
              >
                EDUCATION
              </h2>
              {RESUME_DATA.education.map((edu, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs sm:text-sm">
                    <span
                      className={`font-bold ${
                        themeMode === 'paper' ? 'text-slate-900' : 'text-white'
                      }`}
                    >
                      {edu.degree}
                    </span>
                    <span
                      className={`font-mono text-xs font-semibold ${
                        themeMode === 'paper' ? 'text-slate-600' : 'text-slate-400'
                      }`}
                    >
                      {edu.period}
                    </span>
                  </div>
                  <div
                    className={`text-xs flex items-center gap-2 ${
                      themeMode === 'paper' ? 'text-slate-600' : 'text-slate-400'
                    }`}
                  >
                    <span>{edu.institution}</span>
                    <span>•</span>
                    <span>{edu.location}</span>
                    <span>•</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-medium">
                      {edu.status}
                    </span>
                  </div>
                  <p
                    className={`text-xs pt-1 leading-relaxed ${
                      themeMode === 'paper' ? 'text-slate-600' : 'text-slate-400'
                    }`}
                  >
                    <span className="font-semibold">Relevant Coursework:</span>{' '}
                    {edu.coursework.join(', ')}
                  </p>
                </div>
              ))}
            </div>

            {/* Technical Skills */}
            <div className="pt-5 pb-4 border-b border-slate-300 dark:border-slate-800">
              <h2
                className={`text-xs font-bold tracking-widest uppercase mb-3 ${
                  themeMode === 'paper' ? 'text-blue-800' : 'text-blue-400'
                }`}
              >
                TECHNICAL SKILLS
              </h2>
              <div
                className={`space-y-1.5 text-xs ${
                  themeMode === 'paper' ? 'text-slate-700' : 'text-slate-300'
                }`}
              >
                <div>
                  <span className="font-bold">Programming Languages:</span>{' '}
                  {RESUME_DATA.skills.programmingLanguages.join(', ')}
                </div>
                <div>
                  <span className="font-bold">Web Development & Backend:</span>{' '}
                  {RESUME_DATA.skills.webDevelopment.join(', ')}
                </div>
                <div>
                  <span className="font-bold">AI & Data Science:</span>{' '}
                  {RESUME_DATA.skills.aiAndData.join(', ')}
                </div>
                <div>
                  <span className="font-bold">Databases & Cloud:</span>{' '}
                  {RESUME_DATA.skills.databasesAndCloud.join(', ')}
                </div>
                <div>
                  <span className="font-bold">Tools & Practices:</span>{' '}
                  {RESUME_DATA.skills.toolsAndPractices.join(', ')}
                </div>
                <div>
                  <span className="font-bold">Core Competencies:</span>{' '}
                  {RESUME_DATA.skills.coreCompetencies.join(', ')}
                </div>
              </div>
            </div>

            {/* Featured Projects */}
            <div className="pt-5 pb-4 border-b border-slate-300 dark:border-slate-800">
              <h2
                className={`text-xs font-bold tracking-widest uppercase mb-3 ${
                  themeMode === 'paper' ? 'text-blue-800' : 'text-blue-400'
                }`}
              >
                FEATURED PROJECTS
              </h2>
              <div className="space-y-4">
                {RESUME_DATA.projects.map((proj, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                      <h3
                        className={`text-xs sm:text-sm font-bold ${
                          themeMode === 'paper' ? 'text-slate-900' : 'text-white'
                        }`}
                      >
                        {proj.name}
                        <span
                          className={`text-xs font-normal ml-2 ${
                            themeMode === 'paper' ? 'text-slate-500' : 'text-slate-400'
                          }`}
                        >
                          | {proj.category}
                        </span>
                      </h3>
                    </div>
                    <div
                      className={`text-[11px] font-mono ${
                        themeMode === 'paper' ? 'text-blue-700' : 'text-blue-400'
                      }`}
                    >
                      Stack: {proj.techStack}
                    </div>
                    <ul
                      className={`list-disc list-outside ml-4 space-y-0.5 text-xs leading-relaxed ${
                        themeMode === 'paper' ? 'text-slate-700' : 'text-slate-300'
                      }`}
                    >
                      {proj.points.map((pt, pIdx) => (
                        <li key={pIdx}>{pt}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience & Community */}
            <div className="pt-5 pb-4 border-b border-slate-300 dark:border-slate-800">
              <h2
                className={`text-xs font-bold tracking-widest uppercase mb-3 ${
                  themeMode === 'paper' ? 'text-blue-800' : 'text-blue-400'
                }`}
              >
                EXPERIENCE & COMMUNITY LEADERSHIP
              </h2>
              <div className="space-y-3">
                {RESUME_DATA.experience.map((exp, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs sm:text-sm">
                      <span
                        className={`font-bold ${
                          themeMode === 'paper' ? 'text-slate-900' : 'text-white'
                        }`}
                      >
                        {exp.role}
                      </span>
                      <span
                        className={`font-mono text-xs font-semibold ${
                          themeMode === 'paper' ? 'text-slate-600' : 'text-slate-400'
                        }`}
                      >
                        {exp.period}
                      </span>
                    </div>
                    <div
                      className={`text-xs ${
                        themeMode === 'paper' ? 'text-slate-600' : 'text-slate-400'
                      }`}
                    >
                      {exp.organization} • {exp.location}
                    </div>
                    <ul
                      className={`list-disc list-outside ml-4 space-y-0.5 text-xs leading-relaxed ${
                        themeMode === 'paper' ? 'text-slate-700' : 'text-slate-300'
                      }`}
                    >
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
              <h2
                className={`text-xs font-bold tracking-widest uppercase mb-2 ${
                  themeMode === 'paper' ? 'text-blue-800' : 'text-blue-400'
                }`}
              >
                KEY ACHIEVEMENTS & CERTIFICATIONS
              </h2>
              <ul
                className={`list-disc list-outside ml-4 space-y-1 text-xs leading-relaxed ${
                  themeMode === 'paper' ? 'text-slate-700' : 'text-slate-300'
                }`}
              >
                {RESUME_DATA.achievements.map((ach, idx) => (
                  <li key={idx}>{ach}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Modal Bottom Actions */}
        <div className="px-6 py-3 border-t border-slate-800 bg-[#0d121c] flex flex-wrap items-center justify-between gap-3 text-xs no-print">
          <div className="text-slate-400">
            Official Resume for{' '}
            <span className="text-white font-semibold">{RESUME_DATA.personal.name}</span> (CSE 2026)
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 font-semibold text-slate-200 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
            >
              Print / Save PDF
            </button>
            <button
              onClick={onClose}
              className="px-4 py-1.5 font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
