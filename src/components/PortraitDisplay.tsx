import React, { useState, useEffect } from 'react';
import defaultPortrait from '../assets/images/hemanth-potrait.jpg';

interface PortraitDisplayProps {
  className?: string;
}

export const PortraitDisplay: React.FC<PortraitDisplayProps> = ({ className = '' }) => {
  const [profileImage, setProfileImage] = useState<string>(defaultPortrait);

  // If a custom image was previously saved in the user's browser, honor it; otherwise show default portrait
  useEffect(() => {
    try {
      const savedPhoto = localStorage.getItem('hemanth_portfolio_photo');
      if (savedPhoto && savedPhoto !== 'empty') {
        setProfileImage(savedPhoto);
      }
    } catch {
      // Ignore localStorage errors
    }
  }, []);

  return (
    <div className={`relative flex flex-col items-center justify-center ${className}`}>
      {/* Profile Photo Card - Clean, polished, and strictly read-only for public portfolio sharing */}
      <div className="relative w-full max-w-[390px] aspect-[3/4] rounded-2xl bg-gradient-to-b from-slate-900 to-[#0c1017] border border-slate-800/90 shadow-2xl shadow-black/80 overflow-hidden">
        <img
          src={profileImage}
          alt="Hemanth Mamidi - CSE Student & Tech Creator"
          className="w-full h-full object-cover object-center select-none"
          loading="eager"
        />

        {/* Natural gradient vignette at bottom for seamless dark-theme blending */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#07090e]/90 via-[#07090e]/40 to-transparent pointer-events-none" />

        {/* Subtle corner badge for personal branding */}
        <div className="absolute bottom-3 left-3 z-10 flex items-center gap-2 px-3 py-1 rounded-full bg-slate-950/85 backdrop-blur-md border border-slate-800 text-[11px] text-slate-300 shadow-md">
          <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.8)]" />
          <span className="font-semibold tracking-wide text-white">Hemanth Mamidi</span>
        </div>
      </div>
    </div>
  );
};
