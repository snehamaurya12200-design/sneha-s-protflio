import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, RefreshCw, X, Zap, Flame, Check } from 'lucide-react';
import { BackgroundTheme } from './BackgroundAura.tsx';

interface AuraModalProps {
  isOpen: boolean;
  onClose: () => void;
  auraMode: 'vibrant' | 'soft';
  onToggleAuraMode: () => void;
  bgMode?: BackgroundTheme;
  onSelectBgMode?: (mode: BackgroundTheme) => void;
}

interface AuraResult {
  score: string;
  badge: string;
  status: string;
  description: string;
  vibe: string;
}

const AURA_PRESETS: AuraResult[] = [
  {
    score: '+1,000 Aura',
    badge: 'UNDERSTOOD THE ASSIGNMENT',
    status: 'Bro understood the assignment.',
    description: 'Auto-layout is spotless. All 16 components resize without clipping. The reviewer is silently crying happy tears.',
    vibe: 'Sigma Designer Mode',
  },
  {
    score: 'Aura Fluctuating',
    badge: 'CSS COMBAT ZONE',
    status: 'The CSS is actively fighting back.',
    description: 'z-index: 999999 did nothing. Somewhere in line 412, a misplaced overflow-hidden is plotting world domination.',
    vibe: 'Coffee-Fueled Defiance',
  },
  {
    score: '+9,999 Aura',
    badge: 'FIRST-TRY COMPILATION',
    status: 'Zero TypeScript errors on the first build.',
    description: 'No `any` types harmed. Clean discriminated unions everywhere. The terminal displayed green and you stared in disbelief.',
    vibe: 'Architect Ascendant',
  },
  {
    score: 'Aura: Locked In',
    badge: 'DELULU UNDER CONTROL',
    status: 'Delulu levels temporarily under control.',
    description: 'Convinced you can build a full SaaS prototype before 3 AM. Honestly? You probably will.',
    vibe: 'Hyperfocus Velocity',
  },
  {
    score: '-500 Aura',
    badge: 'MISSING SEMICOLON INCIDENT',
    status: 'Lost 500 aura points debugging a closing bracket.',
    description: 'Looked at the file for 45 minutes before realizing the curly brace was commented out in an ancient merge.',
    vibe: 'Character Development Arc',
  },
  {
    score: '+2,500 Aura',
    badge: 'MAIN CHARACTER ENERGY',
    status: 'Main character energy. Side quest pending.',
    description: 'Refactored an entire design system token set just because the wine-berry hex was 1 shade off your moodboard.',
    vibe: 'Unapologetic Tactile Maximalism',
  },
  {
    score: '-250 Aura',
    badge: 'CANVAS ACCIDENT',
    status: 'Accidentally nudged the frame 1px off-pixel.',
    description: 'Noticed it at 200% zoom. Spent 20 minutes calculating sub-pixel rendering mechanics on Chromium.',
    vibe: 'Perfectionist Crisis',
  },
  {
    score: '+5,000 Aura',
    badge: 'HACKATHON CLUTCH',
    status: 'Deployed live demo 90 seconds before the deadline buzzer.',
    description: 'The DNS propagated in seconds, Vercel build turned green, and the judges loaded the page right as you walked on stage.',
    vibe: 'Pure Adrenaline',
  },
];

export const AuraModal: React.FC<AuraModalProps> = ({
  isOpen,
  onClose,
  auraMode,
  onToggleAuraMode,
  bgMode = 'soft-aura',
  onSelectBgMode,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRolling, setIsRolling] = useState(false);

  if (!isOpen) return null;

  const current = AURA_PRESETS[currentIndex];

  const handleReroll = () => {
    setIsRolling(true);
    let nextIndex = Math.floor(Math.random() * AURA_PRESETS.length);
    if (nextIndex === currentIndex) {
      nextIndex = (currentIndex + 1) % AURA_PRESETS.length;
    }
    setTimeout(() => {
      setCurrentIndex(nextIndex);
      setIsRolling(false);
    }, 280);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 animate-[fadeIn_0.2s_ease-out]">
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 12 }}
        transition={{ type: 'spring', damping: 24, stiffness: 280 }}
        className="relative w-full max-w-md bg-[#800021] rounded-[32px] border-2 border-[#EE69B4]/40 shadow-2xl p-6 sm:p-7 text-[#FFF7F8] subtle-print-texture"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#881144]/60 border border-[#EE69B4]/30 flex items-center justify-center text-[#FFF7F8] hover:bg-[#C24366] hover:border-[#EE69B4] transition-colors cursor-pointer"
          aria-label="Close Aura window"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header Pill */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-bold tracking-wider bg-[#C24366]/30 text-[#FFDBE4] border border-[#EE69B4]/40 mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#EE69B4]" />
          <span>PORTFOLIO AURA CHECKER</span>
        </div>

        {/* Dynamic Result Card */}
        <div className="p-5 rounded-2xl bg-[#68001a] border-2 border-[#EE69B4]/30 mb-5 shadow-inner">
          <div className="flex items-center justify-between mb-2">
            <span className="font-mono text-xs font-bold text-[#FFDBE4] tracking-wider uppercase">
              {current.badge}
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] font-mono font-semibold text-[#EE69B4]">
              <Flame className="w-3.5 h-3.5" />
              <span>{current.vibe}</span>
            </span>
          </div>

          <h3 className="font-lobster text-3xl sm:text-4xl font-bold text-[#FFF7F8] mb-2 leading-tight">
            {current.score}
          </h3>

          <p className="font-sans font-bold text-sm text-[#FFDBE4] mb-2">
            &ldquo;{current.status}&rdquo;
          </p>

          <p className="font-sans text-xs sm:text-sm text-[#E6CBD3] leading-relaxed font-normal">
            {current.description}
          </p>
        </div>

        {/* Controls Row: Reroll + Atmospheric Toggle */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <button
              onClick={handleReroll}
              disabled={isRolling}
              className="flex-1 py-3 px-4 rounded-xl bg-[#C24366] hover:bg-[#a83252] text-[#FFF7F8] font-mono text-xs font-bold tracking-wider flex items-center justify-center gap-2 border border-[#EE69B4]/40 shadow-[0_4px_16px_rgba(194,67,102,0.4)] transition-all cursor-pointer active:scale-95"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isRolling ? 'animate-spin' : ''}`} />
              <span>REROLL AURA</span>
            </button>

            <button
              onClick={onToggleAuraMode}
              title="Toggle website atmosphere intensity"
              className="py-3 px-3.5 rounded-xl bg-[#881144]/50 hover:bg-[#881144]/80 text-[#FFF7F8] font-mono text-xs font-bold border border-[#EE69B4]/30 transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <Zap className="w-3.5 h-3.5 text-[#EE69B4]" />
              <span>{auraMode === 'vibrant' ? 'Aura: High' : 'Aura: Soft'}</span>
            </button>
          </div>

          {/* Background Selection Card */}
          {onSelectBgMode && (
            <div className="p-3.5 rounded-2xl bg-[#4A0013] border border-[#EE69B4]/25 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] font-bold text-[#FFDBE4] tracking-wider uppercase">
                  BACKGROUND ATMOSPHERE
                </span>
                <span className="text-[10px] font-mono text-[#EE69B4]">
                  Active: {bgMode === 'soft-aura' ? 'Soft Aura 🌸' : bgMode === 'sparkle-rose' ? 'Sparkles ✨' : 'Wine Glass 🍷'}
                </span>
              </div>
              
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => onSelectBgMode('soft-aura')}
                  className={`p-2 rounded-xl text-center font-sans text-xs font-bold transition-all cursor-pointer border flex flex-col items-center gap-1 ${
                    bgMode === 'soft-aura'
                      ? 'bg-[#C24366] text-[#FFF7F8] border-[#FFDBE4] shadow-[0_0_12px_rgba(238,105,180,0.4)]'
                      : 'bg-[#800021]/60 text-[#E6CBD3] hover:text-[#FFF7F8] border-[#EE69B4]/20 hover:border-[#EE69B4]/50'
                  }`}
                >
                  <span className="text-base">🌸</span>
                  <span className="text-[11px] leading-tight">Soft Aura</span>
                  {bgMode === 'soft-aura' && <Check className="w-3 h-3 text-[#FFDBE4]" />}
                </button>

                <button
                  type="button"
                  onClick={() => onSelectBgMode('sparkle-rose')}
                  className={`p-2 rounded-xl text-center font-sans text-xs font-bold transition-all cursor-pointer border flex flex-col items-center gap-1 ${
                    bgMode === 'sparkle-rose'
                      ? 'bg-[#C24366] text-[#FFF7F8] border-[#FFDBE4] shadow-[0_0_12px_rgba(238,105,180,0.4)]'
                      : 'bg-[#800021]/60 text-[#E6CBD3] hover:text-[#FFF7F8] border-[#EE69B4]/20 hover:border-[#EE69B4]/50'
                  }`}
                >
                  <span className="text-base">✨</span>
                  <span className="text-[11px] leading-tight">Sparkles</span>
                  {bgMode === 'sparkle-rose' && <Check className="w-3 h-3 text-[#FFDBE4]" />}
                </button>

                <button
                  type="button"
                  onClick={() => onSelectBgMode('burgundy-studio')}
                  className={`p-2 rounded-xl text-center font-sans text-xs font-bold transition-all cursor-pointer border flex flex-col items-center gap-1 ${
                    bgMode === 'burgundy-studio'
                      ? 'bg-[#C24366] text-[#FFF7F8] border-[#FFDBE4] shadow-[0_0_12px_rgba(238,105,180,0.4)]'
                      : 'bg-[#800021]/60 text-[#E6CBD3] hover:text-[#FFF7F8] border-[#EE69B4]/20 hover:border-[#EE69B4]/50'
                  }`}
                >
                  <span className="text-base">🍷</span>
                  <span className="text-[11px] leading-tight">Wine Glass</span>
                  {bgMode === 'burgundy-studio' && <Check className="w-3 h-3 text-[#FFDBE4]" />}
                </button>
              </div>
            </div>
          )}

          <p className="font-mono text-[10px] text-center text-[#E6CBD3]/60">
            Aura calculation: 60% git commits + 30% auto-layout + 10% delulu energy
          </p>
        </div>
      </motion.div>
    </div>
  );
};
