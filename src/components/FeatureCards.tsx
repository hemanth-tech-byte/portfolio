import React, { useState } from 'react';
import { Code2, Sparkles, Cpu, ChevronRight, Layers } from 'lucide-react';
import { FEATURE_CARDS, TECHNOLOGIES_BAR } from '../data/portfolioData';

interface FeatureCardsProps {
  onCardClick?: (cardId: string) => void;
  onTechClick?: (tech: string) => void;
}

export const FeatureCards: React.FC<FeatureCardsProps> = ({
  onCardClick,
  onTechClick,
}) => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'code':
        return <Code2 className="w-6 h-6 text-blue-400" />;
      case 'sparkles':
        return <Sparkles className="w-6 h-6 text-blue-400" />;
      case 'cpu':
        return <Cpu className="w-6 h-6 text-blue-400" />;
      default:
        return <Layers className="w-6 h-6 text-blue-400" />;
    }
  };

  return (
    <section className="relative py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Three Horizontal Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {FEATURE_CARDS.map((card) => {
            const isHovered = hoveredCard === card.id;
            return (
              <div
                key={card.id}
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => onCardClick?.(card.id)}
                className={`group relative p-7 sm:p-8 rounded-2xl bg-slate-900/50 hover:bg-slate-900/80 border transition-all duration-300 backdrop-blur-md cursor-pointer flex flex-col justify-between overflow-hidden shadow-xl ${
                  isHovered
                    ? 'border-blue-500/50 shadow-[0_10px_30px_rgba(37,99,235,0.2)] -translate-y-1'
                    : 'border-slate-800/80 hover:border-slate-700 shadow-black/40'
                }`}
              >
                {/* Subtle Ambient Card Gradient Light */}
                <div
                  className={`absolute -right-12 -top-12 w-36 h-36 rounded-full blur-2xl transition-opacity duration-300 pointer-events-none ${
                    isHovered ? 'bg-blue-600/20 opacity-100' : 'bg-blue-600/5 opacity-40'
                  }`}
                />

                <div className="space-y-5">
                  {/* Icon Container with subtle blue rim */}
                  <div className="w-12 h-12 rounded-xl bg-blue-950/60 border border-blue-800/50 flex items-center justify-center group-hover:border-blue-500/60 group-hover:bg-blue-900/40 transition-colors shadow-inner">
                    {getIcon(card.icon)}
                  </div>

                  {/* Card Title */}
                  <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white uppercase font-display">
                    {card.title}
                  </h3>

                  {/* Card Description */}
                  <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
                    "{card.description}"
                  </p>
                </div>

                {/* Subtle Footer Action / Indicator */}
                <div className="pt-6 mt-4 border-t border-slate-800/60 flex items-center justify-between text-xs font-semibold tracking-wider uppercase text-blue-400">
                  <span>{card.primarySkill}</span>
                  <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Explore</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* TECHNOLOGIES BAR SECTION */}
        <div className="mt-8 sm:mt-10 p-5 sm:p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-md shadow-lg">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            
            {/* Left Label */}
            <div className="flex items-center gap-2.5 shrink-0">
              <span className="w-2 h-2 rounded-sm bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.9)]" />
              <span className="text-xs sm:text-sm font-bold tracking-widest text-slate-200 uppercase font-mono">
                TECHNOLOGIES:
              </span>
            </div>

            {/* Inline Technologies List separated by clean bullet dots */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-3 sm:gap-x-4 text-xs sm:text-sm text-slate-300 font-medium">
              {TECHNOLOGIES_BAR.map((tech, idx) => (
                <React.Fragment key={tech}>
                  <button
                    onClick={() => onTechClick?.(tech)}
                    className="hover:text-blue-400 transition-colors cursor-pointer whitespace-nowrap focus:outline-none"
                  >
                    {tech}
                  </button>
                  {idx < TECHNOLOGIES_BAR.length - 1 && (
                    <span className="text-blue-500/60 font-bold" aria-hidden="true">
                      •
                    </span>
                  )}
                </React.Fragment>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
