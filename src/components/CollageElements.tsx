import React from 'react';

// 1. Holographic Chrome Starburst
export const HolographicStar: React.FC<{ className?: string; size?: number }> = ({
  className = '',
  size = 54,
}) => {
  return (
    <div
      className={`relative inline-block select-none filter drop-shadow-[0_4px_12px_rgba(37,37,43,0.18)] ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full animate-[spin_24s_linear_infinite]"
      >
        <defs>
          <linearGradient id="holoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="20%" stopColor="#C5DFF1" />
            <stop offset="40%" stopColor="#F5DDE0" />
            <stop offset="60%" stopColor="#F5A6B8" />
            <stop offset="80%" stopColor="#E0F2FE" />
            <stop offset="100%" stopColor="#FFFFFF" />
          </linearGradient>
          <radialGradient id="holoGlint" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
            <stop offset="40%" stopColor="#FFFFFF" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* 4-point star path with concave bezier cuts */}
        <path
          d="M50 0 C50 35 65 50 100 50 C65 50 50 65 50 100 C50 65 35 50 0 50 C35 50 50 35 50 0 Z"
          fill="url(#holoGradient)"
          stroke="#FFFFFF"
          strokeWidth="1.5"
        />
        {/* Center glint */}
        <circle cx="50" cy="50" r="14" fill="url(#holoGlint)" />
        <circle cx="50" cy="50" r="3" fill="#FFFFFF" />
      </svg>
    </div>
  );
};

// 2. Silver Mirror Disco Ball
export const DiscoBall: React.FC<{ className?: string; size?: number }> = ({
  className = '',
  size = 72,
}) => {
  return (
    <div
      className={`relative inline-block select-none filter drop-shadow-[0_8px_20px_rgba(37,37,43,0.22)] ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          <radialGradient id="sphereGrad" cx="35%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="25%" stopColor="#E2E8F0" />
            <stop offset="65%" stopColor="#94A3B8" />
            <stop offset="100%" stopColor="#334155" />
          </radialGradient>
          <clipPath id="ballClip">
            <circle cx="50" cy="50" r="46" />
          </clipPath>
        </defs>
        
        {/* Sphere base */}
        <circle cx="50" cy="50" r="46" fill="url(#sphereGrad)" stroke="#475569" strokeWidth="1" />
        
        {/* Faceted mirrored grid */}
        <g clipPath="url(#ballClip)" opacity="0.65" stroke="#FFFFFF" strokeWidth="0.75">
          {/* Latitude lines */}
          <ellipse cx="50" cy="50" rx="46" ry="12" fill="none" />
          <ellipse cx="50" cy="50" rx="46" ry="24" fill="none" />
          <ellipse cx="50" cy="50" rx="46" ry="36" fill="none" />
          <ellipse cx="50" cy="50" rx="46" ry="44" fill="none" />

          {/* Longitude lines */}
          <line x1="20" y1="4" x2="20" y2="96" />
          <line x1="35" y1="4" x2="35" y2="96" />
          <line x1="50" y1="4" x2="50" y2="96" />
          <line x1="65" y1="4" x2="65" y2="96" />
          <line x1="80" y1="4" x2="80" y2="96" />

          {/* Specular facet glints */}
          <rect x="36" y="24" width="12" height="10" fill="#FFFFFF" opacity="0.9" rx="1" />
          <rect x="22" y="36" width="10" height="9" fill="#FFFFFF" opacity="0.7" rx="1" />
          <rect x="48" y="16" width="10" height="8" fill="#FFFFFF" opacity="0.8" rx="1" />
        </g>

        {/* Outer border highlight */}
        <circle cx="50" cy="50" r="46" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" />
        
        {/* Glint star top left */}
        <path d="M30 18 Q30 24 36 24 Q30 24 30 30 Q30 24 24 24 Q30 24 30 18 Z" fill="#FFFFFF" />
      </svg>
    </div>
  );
};

// 3. Glossy Juicy Cherries
export const GlossyCherries: React.FC<{ className?: string; size?: number }> = ({
  className = '',
  size = 56,
}) => {
  return (
    <div
      className={`relative inline-block select-none filter drop-shadow-[0_6px_16px_rgba(185,15,46,0.25)] ${className}`}
      style={{ width: size, height: size }}
    >
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
          <radialGradient id="cherryLeft" cx="35%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#FF6B8B" />
            <stop offset="35%" stopColor="#F52B3E" />
            <stop offset="80%" stopColor="#B90F2E" />
            <stop offset="100%" stopColor="#680518" />
          </radialGradient>
          <radialGradient id="cherryRight" cx="35%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#FF6B8B" />
            <stop offset="35%" stopColor="#F52B3E" />
            <stop offset="80%" stopColor="#B90F2E" />
            <stop offset="100%" stopColor="#680518" />
          </radialGradient>
        </defs>

        {/* Stems */}
        <path
          d="M58 12 C52 24 40 40 34 62"
          stroke="#2E6B34"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <path
          d="M58 12 C64 26 70 42 68 64"
          stroke="#2E6B34"
          strokeWidth="3.5"
          strokeLinecap="round"
        />

        {/* Little green leaf */}
        <path
          d="M58 12 C68 8 78 12 80 18 C78 26 66 22 58 12 Z"
          fill="#3B8A44"
          stroke="#1F5726"
          strokeWidth="1"
        />
        {/* Stem joint */}
        <circle cx="58" cy="12" r="3" fill="#1F5726" />

        {/* Left cherry */}
        <circle cx="34" cy="66" r="22" fill="url(#cherryLeft)" />
        {/* Left specular reflection */}
        <ellipse cx="28" cy="58" rx="6" ry="3.5" transform="rotate(-30 28 58)" fill="#FFFFFF" opacity="0.85" />
        <circle cx="36" cy="54" r="1.5" fill="#FFFFFF" opacity="0.9" />

        {/* Right cherry */}
        <circle cx="70" cy="68" r="20" fill="url(#cherryRight)" />
        {/* Right specular reflection */}
        <ellipse cx="64" cy="61" rx="5" ry="3" transform="rotate(-25 64 61)" fill="#FFFFFF" opacity="0.85" />
      </svg>
    </div>
  );
};

// 4. Retro Vintage 35mm Camera Cutout
export const RetroCamera: React.FC<{ className?: string; size?: number }> = ({
  className = '',
  size = 80,
}) => {
  return (
    <div
      className={`relative inline-block select-none filter drop-shadow-[0_8px_18px_rgba(37,37,43,0.22)] ${className}`}
      style={{ width: size, height: size * 0.75 }}
    >
      <svg viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
          <linearGradient id="metalTop" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="60%" stopColor="#D8DDE3" />
            <stop offset="100%" stopColor="#9DA7B3" />
          </linearGradient>
          <linearGradient id="lensGrad" cx="40%" cy="35%" r="60%" type="radial">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.7" />
            <stop offset="35%" stopColor="#1E293B" />
            <stop offset="85%" stopColor="#020617" />
            <stop offset="100%" stopColor="#475569" />
          </linearGradient>
        </defs>

        {/* Main camera body */}
        <rect x="6" y="24" width="108" height="60" rx="6" fill="#1E1E24" stroke="#0F172A" strokeWidth="1.5" />
        
        {/* Leatherette texture panel */}
        <rect x="10" y="32" width="100" height="48" rx="3" fill="#2B2B33" stroke="#18181B" strokeWidth="1" />
        
        {/* Metal top plate */}
        <path d="M6 24 C6 20 10 18 14 18 L106 18 C110 18 114 20 114 24 L114 30 L6 30 Z" fill="url(#metalTop)" />
        
        {/* Shutter button */}
        <rect x="20" y="12" width="14" height="6" rx="2" fill="#E2E8F0" stroke="#64748B" strokeWidth="1" />
        
        {/* Mode dial */}
        <rect x="86" y="13" width="16" height="5" rx="1.5" fill="#94A3B8" stroke="#475569" strokeWidth="1" />
        
        {/* Flash window */}
        <rect x="88" y="22" width="16" height="9" rx="2" fill="#FEF08A" stroke="#CA8A04" strokeWidth="1" />
        <rect x="91" y="24" width="10" height="5" fill="#FFFFFF" opacity="0.8" />
        
        {/* Viewfinder window */}
        <rect x="22" y="22" width="12" height="7" rx="1.5" fill="#0284C7" stroke="#0369A1" strokeWidth="1" />
        
        {/* Large lens ring */}
        <circle cx="58" cy="54" r="24" fill="#64748B" stroke="#CBD5E1" strokeWidth="2" />
        <circle cx="58" cy="54" r="20" fill="url(#lensGrad)" />
        <circle cx="58" cy="54" r="14" fill="#0F172A" />
        
        {/* Lens reflection highlights */}
        <ellipse cx="52" cy="46" rx="6" ry="3.5" transform="rotate(-30 52 46)" fill="#FFFFFF" opacity="0.75" />
        <ellipse cx="64" cy="62" rx="4" ry="2" transform="rotate(-30 64 62)" fill="#38BDF8" opacity="0.6" />
        
        {/* Red dot brand accent */}
        <circle cx="28" cy="42" r="3.5" fill="#F52B3E" />
      </svg>
    </div>
  );
};

// 5. "MAIN CHARACTER" Sticker
export const MainCharacterBadge: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#FAF8F3] border-2 border-[#25252B] rounded-lg shadow-[3px_3px_0px_#25252B] select-none rotate-[-6deg] hover:rotate-0 transition-transform duration-200 ${className}`}
    >
      <span className="text-xs font-bold font-mono tracking-wider text-[#25252B] uppercase">
        ★ MAIN CHARACTER
      </span>
    </div>
  );
};

// 6. "HANDLE WITH LOVE" Washi Tape
export const HandleWithLoveTape: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div
      className={`inline-block px-3.5 py-1 bg-[#F5DDE0] border-y border-[#F5A6B8]/70 text-[#B90F2E] font-mono text-[10px] font-bold tracking-widest uppercase select-none shadow-sm rotate-[4deg] ${className}`}
      style={{
        clipPath: 'polygon(3% 0%, 100% 0%, 97% 100%, 0% 100%)',
      }}
    >
      HANDLE WITH LOVE ✿
    </div>
  );
};

// 7. Interactive Vibe Check Card
export const VibeCheckCard: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div
      className={`rounded-2xl p-4 w-64 shadow-[0_12px_32px_rgba(0,0,0,0.5)] border border-[#EE69B4]/40 bg-[#800021] text-[#FFF7F8] select-none ${className}`}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#F52B3E] animate-pulse"></span>
          <span className="font-mono text-[11px] font-bold tracking-wider text-[#FFDBE4] uppercase">
            VIBE CHECK
          </span>
        </div>
        <span className="font-mono text-[9px] text-[#E6CBD3]/70 uppercase">SYS // OK</span>
      </div>
      <p className="text-xs text-[#FFF7F8] font-medium leading-relaxed italic bg-[#4A0013] p-2.5 rounded-lg border border-[#EE69B4]/30 mb-2.5">
        &ldquo;84% intuitive UI, 16% existential dread over spacing units.&rdquo;
      </p>
      <div className="flex items-center justify-between text-[10px] font-mono font-bold text-[#E6CBD3] pt-1 border-t border-[#EE69B4]/20">
        <span>STATUS // HYPERFOCUS</span>
        <span className="text-[#F52B3E]">● 100%</span>
      </div>
    </div>
  );
};

// 8. Storybook Ladybug Accent (Hand-painted nostalgic 2D accent)
export const StorybookLadybug: React.FC<{ className?: string; size?: number }> = ({
  className = '',
  size = 32,
}) => {
  return (
    <div
      className={`inline-block select-none filter drop-shadow-[0_2px_6px_rgba(37,37,43,0.22)] ${className}`}
      style={{ width: size, height: size }}
    >
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Antennae */}
        <path d="M16 10 C14 6 10 5 8 6" stroke="#25252B" strokeWidth="1.75" strokeLinecap="round" />
        <path d="M24 10 C26 6 30 5 32 6" stroke="#25252B" strokeWidth="1.75" strokeLinecap="round" />
        <circle cx="8" cy="6" r="1.25" fill="#25252B" />
        <circle cx="32" cy="6" r="1.25" fill="#25252B" />
        {/* Head */}
        <ellipse cx="20" cy="12" rx="6" ry="4.5" fill="#25252B" />
        {/* Elytra (Red Shell Wings) */}
        <circle cx="20" cy="23" r="13" fill="#F52B3E" stroke="#25252B" strokeWidth="1.5" />
        {/* Wing Dividing Line */}
        <line x1="20" y1="11" x2="20" y2="36" stroke="#25252B" strokeWidth="1.75" strokeLinecap="round" />
        {/* Black Spots */}
        <circle cx="14" cy="18" r="2.25" fill="#25252B" />
        <circle cx="26" cy="18" r="2.25" fill="#25252B" />
        <circle cx="13" cy="26" r="2.5" fill="#25252B" />
        <circle cx="27" cy="26" r="2.5" fill="#25252B" />
        <circle cx="16" cy="31" r="1.75" fill="#25252B" />
        <circle cx="24" cy="31" r="1.75" fill="#25252B" />
        {/* Shell Specular Highlight */}
        <ellipse cx="16" cy="16" rx="2" ry="1" fill="#FFFFFF" opacity="0.65" transform="rotate(-30 16 16)" />
      </svg>
    </div>
  );
};
