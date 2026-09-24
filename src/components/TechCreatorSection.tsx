import React, { useState } from 'react';
import { BookOpen, Share2, Youtube, Linkedin, Twitter, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { CONTENT_POSTS, PERSONAL_INFO } from '../data/portfolioData';

export const TechCreatorSection: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<string | null>(null);

  return (
    <section className="relative py-16 md:py-20 border-t border-slate-900 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              <span className="text-xs font-bold tracking-widest text-blue-400 uppercase font-mono">
                KNOWLEDGE SHARING & COMMUNITY
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white uppercase font-display">
              TECHNICAL CONTENT & WRITING
            </h2>
            <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
              Distilling complex Computer Science concepts, algorithmic thinking, and modern web architectures into actionable, easy-to-understand guides for developers.
            </p>
          </div>

          {/* Quiet Social Links */}
          <div className="flex items-center gap-2.5">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-white bg-slate-900 border border-slate-800 rounded-lg hover:border-slate-700 transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-white bg-slate-900 border border-slate-800 rounded-lg hover:border-slate-700 transition-colors"
              title="YouTube Tech Content"
            >
              <Youtube className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-white bg-slate-900 border border-slate-800 rounded-lg hover:border-slate-700 transition-colors"
              title="Tech Threads on X"
            >
              <Twitter className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Content Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CONTENT_POSTS.map((post) => {
            const isSelected = selectedPost === post.id;
            return (
              <div
                key={post.id}
                onClick={() => setSelectedPost(isSelected ? null : post.id)}
                className={`p-6 rounded-2xl bg-slate-900/40 border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'border-blue-500/80 bg-slate-900/70 shadow-lg'
                    : 'border-slate-800/80 hover:border-slate-700'
                }`}
              >
                <div className="space-y-4">
                  {/* Clean unboxed metadata with dot separators */}
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                    <span className="text-blue-400 font-semibold">{post.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{post.readsOrViews}</span>
                    <span aria-hidden="true">·</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {post.summary}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-800/60">
                  <div className="text-[11px] text-slate-400 bg-slate-950/60 p-2.5 rounded-lg border border-slate-800/50">
                    <span className="text-blue-400 font-semibold">Core Insight: </span>
                    {post.keyTakeaway}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Community Impact Banner */}
        <div className="mt-8 p-6 rounded-2xl bg-slate-900/30 border border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-3">
            <BookOpen className="w-4 h-4 text-blue-400 shrink-0" />
            <span>
              Passionate about mentoring junior peers, speaking at campus tech clubs, and demystifying system architecture.
            </span>
          </div>
          <div className="flex items-center gap-2 shrink-0 font-mono text-slate-300">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Regular Technical Contributor</span>
          </div>
        </div>

      </div>
    </section>
  );
};
