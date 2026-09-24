import React, { useState } from 'react';
import {
  Terminal,
  Binary,
  Database,
  Layout,
  Cloud,
  GitBranch,
  Network,
  Sparkles,
  BarChart3,
  Brain,
  Users,
  Search,
  CheckCircle2,
} from 'lucide-react';
import { TECHNICAL_SKILLS } from '../data/portfolioData';

interface SkillsSectionProps {
  onSkillSelect?: (skill: string) => void;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ onSkillSelect }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGroup, setSelectedGroup] = useState<string | null>(null);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'terminal':
        return <Terminal className="w-5 h-5 text-blue-400" />;
      case 'binary':
        return <Binary className="w-5 h-5 text-blue-400" />;
      case 'database':
        return <Database className="w-5 h-5 text-blue-400" />;
      case 'layout':
        return <Layout className="w-5 h-5 text-blue-400" />;
      case 'cloud':
        return <Cloud className="w-5 h-5 text-blue-400" />;
      case 'git-branch':
        return <GitBranch className="w-5 h-5 text-blue-400" />;
      case 'network':
        return <Network className="w-5 h-5 text-blue-400" />;
      case 'sparkles':
        return <Sparkles className="w-5 h-5 text-blue-400" />;
      case 'bar-chart-3':
        return <BarChart3 className="w-5 h-5 text-blue-400" />;
      case 'brain':
        return <Brain className="w-5 h-5 text-blue-400" />;
      case 'users':
        return <Users className="w-5 h-5 text-blue-400" />;
      default:
        return <Terminal className="w-5 h-5 text-blue-400" />;
    }
  };

  const filteredGroups = TECHNICAL_SKILLS.filter((group) => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    const matchesTitle = group.title.toLowerCase().includes(query);
    const matchesSkill = group.skills.some((s) => s.toLowerCase().includes(query));
    const matchesDesc = group.description.toLowerCase().includes(query);
    return matchesTitle || matchesSkill || matchesDesc;
  });

  return (
    <section id="skills" className="relative py-16 md:py-24 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              <span className="text-xs font-bold tracking-widest text-blue-400 uppercase font-mono">
                ENGINEERING COMPETENCIES
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white uppercase font-display">
              TECHNICAL SKILLS MATRIX
            </h2>
            <p className="text-sm sm:text-base text-slate-400 max-w-xl">
              Comprehensive proficiency across programming languages, algorithms, scalable web development, data analysis, and cloud environments.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Filter by skill or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs text-slate-200 bg-slate-900/80 border border-slate-800 rounded-xl focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-500"
            />
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGroups.map((group) => {
            const isSelected = selectedGroup === group.id;
            return (
              <div
                key={group.id}
                onClick={() => setSelectedGroup(isSelected ? null : group.id)}
                className={`p-6 rounded-2xl bg-slate-900/40 border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'border-blue-500/80 bg-slate-900/80 shadow-[0_0_25px_rgba(37,99,235,0.15)]'
                    : 'border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/60'
                }`}
              >
                <div className="space-y-4">
                  {/* Category Header with Icon */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-blue-950/60 border border-blue-800/50 flex items-center justify-center">
                        {getCategoryIcon(group.iconName)}
                      </div>
                      <h3 className="text-sm font-bold tracking-wider text-slate-200 uppercase font-mono">
                        {group.title}
                      </h3>
                    </div>
                  </div>

                  {/* Skills List: Clean, Unboxed Typography as per Constitution */}
                  <div className="pt-1 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        onClick={(e) => {
                          e.stopPropagation();
                          onSkillSelect?.(skill);
                        }}
                        className="px-2.5 py-1 text-xs font-medium text-slate-300 bg-slate-800/60 hover:text-white hover:bg-blue-600/20 border border-slate-700/60 hover:border-blue-500/40 rounded-md transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-400 leading-relaxed pt-2">
                    {group.description}
                  </p>
                </div>

                <div className="pt-4 mt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500">
                  <span className="flex items-center gap-1 text-blue-400">
                    <CheckCircle2 className="w-3 h-3" />
                    Verified in Projects & Placement Prep
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlight Note */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-blue-950/20 via-slate-900/40 to-slate-900/20 border border-blue-900/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Ready for Software Engineering & Full-Stack Opportunities
            </h4>
            <p className="text-xs text-slate-400">
              Actively preparing for campus placements, system design interviews, and full-stack software development roles.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-blue-400">Class of 2026</span>
          </div>
        </div>

      </div>
    </section>
  );
};
