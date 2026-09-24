import React, { useState } from 'react';
import { Mail, Phone, Copy, Check, Send, Github, Linkedin, Youtube, Twitter, MapPin, Briefcase, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactSectionProps {
  onViewResume?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onViewResume }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    opportunityType: 'Campus Placement / Full-Time Role',
    subject: '',
    message: '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.mobile);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill in your name, email, and message.');
      return;
    }

    setErrorMessage('');
    setIsSubmitting(true);

    // Simulate sending message
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        opportunityType: 'Campus Placement / Full-Time Role',
        subject: '',
        message: '',
      });
      setTimeout(() => setSubmitted(false), 6000);
    }, 600);
  };

  return (
    <section id="contact" className="relative py-16 md:py-24 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Info & Quick Copy */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                <span className="text-xs font-bold tracking-widest text-blue-400 uppercase font-mono">
                  GET IN TOUCH
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white uppercase font-display">
                CONNECT WITH HEMANTH
              </h2>
              <p className="text-sm sm:text-base text-slate-400">
                Interested in discussing campus placement opportunities, full-stack software development roles, or technical collaborations? Feel free to reach out directly.
              </p>
            </div>

            {/* Direct Contact Cards with One-Click Copy */}
            <div className="space-y-3">
              <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-2.5">
                <span className="text-xs font-mono text-slate-400 uppercase font-semibold">
                  Direct Email Address
                </span>
                <div className="flex items-center justify-between gap-3 p-3 bg-slate-950/80 rounded-xl border border-slate-800">
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="flex items-center gap-2.5 overflow-hidden hover:text-blue-400 transition-colors"
                  >
                    <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                    <span className="text-xs sm:text-sm text-slate-200 font-mono truncate">
                      {PERSONAL_INFO.email}
                    </span>
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer shrink-0"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Mobile Phone Card */}
              <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-2.5">
                <span className="text-xs font-mono text-slate-400 uppercase font-semibold">
                  Direct Mobile Phone
                </span>
                <div className="flex items-center justify-between gap-3 p-3 bg-slate-950/80 rounded-xl border border-slate-800">
                  <a
                    href={`tel:${PERSONAL_INFO.mobile}`}
                    className="flex items-center gap-2.5 overflow-hidden hover:text-blue-400 transition-colors"
                  >
                    <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                    <span className="text-xs sm:text-sm text-slate-200 font-mono truncate">
                      +91 {PERSONAL_INFO.mobile}
                    </span>
                  </a>
                  <button
                    onClick={handleCopyPhone}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer shrink-0"
                  >
                    {copiedPhone ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Location & Status Badges */}
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span>{PERSONAL_INFO.location} · Open to Relocation</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Briefcase className="w-4 h-4 text-blue-400" />
                <span>{PERSONAL_INFO.availability}</span>
              </div>
            </div>

            {/* Official Resume Quick Access Box */}
            {onViewResume && (
              <div className="p-4 rounded-xl bg-blue-950/20 border border-blue-800/40 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 shrink-0">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase">Official Resume Available</h4>
                    <p className="text-[11px] text-slate-400">Class of 2026 • ATS Format & PDF</p>
                  </div>
                </div>
                <button
                  onClick={onViewResume}
                  className="px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors cursor-pointer shrink-0"
                >
                  View CV
                </button>
              </div>
            )}

            {/* Social Channels */}
            <div className="pt-2 space-y-3">
              <span className="text-xs font-mono uppercase text-slate-400 font-semibold tracking-wider">
                Professional Profiles & Content
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3.5 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-900 border border-slate-800 hover:border-blue-500/50 rounded-xl transition-all"
                >
                  <Linkedin className="w-4 h-4 text-blue-400" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3.5 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-900 border border-slate-800 hover:border-blue-500/50 rounded-xl transition-all"
                >
                  <Github className="w-4 h-4 text-blue-400" />
                  <span>GitHub</span>
                </a>
                <a
                  href={PERSONAL_INFO.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3.5 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-900 border border-slate-800 hover:border-blue-500/50 rounded-xl transition-all"
                >
                  <Youtube className="w-4 h-4 text-red-400" />
                  <span>YouTube</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-2xl bg-slate-900/50 border border-slate-800/80 shadow-2xl backdrop-blur-md">
              <h3 className="text-xl font-bold text-white uppercase font-display mb-6">
                Send a Direct Message
              </h3>

              {submitted ? (
                <div className="p-6 rounded-xl bg-blue-950/40 border border-blue-800/60 text-center space-y-2 animate-in fade-in">
                  <div className="w-10 h-10 rounded-full bg-blue-600/30 text-blue-400 flex items-center justify-center mx-auto mb-2">
                    <Check className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-white">Message Sent Successfully</h4>
                  <p className="text-xs text-slate-300">
                    Thank you for reaching out! Hemanth will review your inquiry and respond shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMessage && (
                    <div className="p-3 rounded-lg bg-red-950/40 border border-red-800 text-xs text-red-300">
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase text-slate-400">
                        Your Name <span className="text-blue-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alex Johnson"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 text-xs text-white bg-slate-950/80 border border-slate-800 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase text-slate-400">
                        Your Email <span className="text-blue-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. alex@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 text-xs text-white bg-slate-950/80 border border-slate-800 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase text-slate-400">
                      Inquiry Category
                    </label>
                    <select
                      value={formData.opportunityType}
                      onChange={(e) => setFormData({ ...formData, opportunityType: e.target.value })}
                      className="w-full px-4 py-2.5 text-xs text-white bg-slate-950/80 border border-slate-800 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
                    >
                      <option value="Campus Placement / Full-Time Role">Campus Placement / Full-Time SDE Role</option>
                      <option value="Internship Opportunity">Software Engineering Internship</option>
                      <option value="Full-Stack / AI Project Collaboration">Full-Stack / AI Project Collaboration</option>
                      <option value="Tech Content / Speaking / Mentorship">Tech Content / Speaking / Mentorship</option>
                      <option value="General Technical Inquiry">General Technical Inquiry</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase text-slate-400">
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. SDE Opportunity at..."
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-2.5 text-xs text-white bg-slate-950/80 border border-slate-800 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase text-slate-400">
                      Message <span className="text-blue-400">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Share details about the role, team, or project..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 text-xs text-white bg-slate-950/80 border border-slate-800 rounded-xl focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 active:scale-[0.99] rounded-xl transition-all shadow-lg shadow-blue-600/30 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message to Hemanth</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
