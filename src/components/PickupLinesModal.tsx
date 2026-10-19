import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Heart, RefreshCw, Copy, Check, X, Sparkles } from 'lucide-react';

interface PickupLinesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface PickupLine {
  line: string;
  context: string;
  category: 'Figma' | 'CSS' | 'Code' | 'Design Systems' | 'Deployments';
}

const PICKUP_LINES: PickupLine[] = [
  {
    line: "Are you a Figma component? Because I can see us working together in every variant.",
    context: "Master component with infinite reusable synergy.",
    category: "Figma",
  },
  {
    line: "Are you a design system? Because everything just makes sense with you.",
    context: "Zero design debt, 100% tokenized harmony.",
    category: "Design Systems",
  },
  {
    line: "You must be a CSS transition, because you have me coming back for another frame.",
    context: "transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1).",
    category: "CSS",
  },
  {
    line: "Are you my final deployment? Because I've been waiting for you all night.",
    context: "Vercel build succeeded at 4:12 AM.",
    category: "Deployments",
  },
  {
    line: "You have better alignment than my entire life.",
    context: "Strict 8px grid heuristics satisfied.",
    category: "CSS",
  },
  {
    line: "Are you an auto-layout frame? Because you hold everything together without breaking under pressure.",
    context: "hug-contents horizontally, fill-container vertically.",
    category: "Figma",
  },
  {
    line: "Are you flexbox? Because you make everything around you fall gracefully into place.",
    context: "justify-content: space-between; align-items: center.",
    category: "CSS",
  },
  {
    line: "Are you a 0ms latency WebSocket? Because our connection feels completely instantaneous.",
    context: "Real-time state synchronization achieved.",
    category: "Code",
  },
  {
    line: "Are you dark mode? Because you're so easy on my tired eyes.",
    context: "WCAG AAA contrast verified.",
    category: "Design Systems",
  },
  {
    line: "Are you a bezier curve? Because your proportions are mathematically flawless.",
    context: "Spring trajectory calibrated.",
    category: "Design Systems",
  },
];

export const PickupLinesModal: React.FC<PickupLinesModalProps> = ({ isOpen, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const [isRolling, setIsRolling] = useState(false);

  if (!isOpen) return null;

  const current = PICKUP_LINES[currentIndex];

  const handleNextLine = () => {
    setIsRolling(true);
    let nextIndex = Math.floor(Math.random() * PICKUP_LINES.length);
    if (nextIndex === currentIndex) {
      nextIndex = (currentIndex + 1) % PICKUP_LINES.length;
    }
    setTimeout(() => {
      setCurrentIndex(nextIndex);
      setIsRolling(false);
      setCopied(false);
    }, 180);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(current.line);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs animate-[fadeIn_0.2s_ease-out]">
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 12 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="relative w-full max-w-lg bg-[#FFFDF9] rounded-3xl border-2 border-[#E8DCC9] paper-note-shadow p-6 sm:p-8 text-[#252321] paper-sketchbook"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Washi Tape Decor */}
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#F6E7A8] washi-torn-h text-[10px] font-mono font-bold text-[#702632] shadow-xs select-none">
          CHERRY BUTTER PLAYGROUND
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#FFF9EF] border border-[#E8DCC9] flex items-center justify-center text-[#625A53] hover:text-[#B52D3A] hover:border-[#B52D3A] transition-colors cursor-pointer"
          aria-label="Close pickup lines modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Pill Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider bg-[#F6E7A8] text-[#702632] border border-[#E4C868] mb-3">
          <Heart className="w-3.5 h-3.5 text-[#B52D3A]" />
          <span>DESIGN FLIRT &amp; WIT</span>
        </div>

        <h3 className="font-lobster text-3xl sm:text-4xl font-bold text-[#B52D3A] mb-1">
          RIZZ THE DESIGNER 💋
        </h3>
        <p className="font-sans text-xs sm:text-sm text-[#625A53] mb-5 font-normal">
          good design is attractive. good interactions? dangerously attractive.
        </p>

        {/* Line Card */}
        <div className="p-6 rounded-2xl bg-[#FFF9EF] border-2 border-[#E8DCC9] mb-6 shadow-xs relative overflow-hidden">
          <div className="flex items-center justify-between mb-3">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#F6E7A8] text-[#702632] border border-[#E4C868]">
              {current.category}
            </span>
            <span className="font-mono text-xs text-[#625A53]">
              #{currentIndex + 1} of {PICKUP_LINES.length}
            </span>
          </div>

          <p className="font-lobster text-2xl sm:text-3xl text-[#252321] leading-snug mb-3">
            &ldquo;{current.line}&rdquo;
          </p>

          <p className="font-mono text-xs text-[#702632] flex items-center gap-1.5 font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#B52D3A]" />
            <span>{current.context}</span>
          </p>
        </div>

        {/* Actions Row */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleNextLine}
            disabled={isRolling}
            className="flex-1 py-3.5 px-4 rounded-xl cherry-btn font-mono text-xs font-bold tracking-wider flex items-center justify-center gap-2 cursor-pointer active:scale-95 transition-transform"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isRolling ? 'animate-spin' : ''}`} />
            <span>RIZZ ME UP ↻</span>
          </button>

          <button
            onClick={handleCopy}
            className="py-3.5 px-4 rounded-xl butter-btn font-mono text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-700" />
                <span className="text-emerald-800">COPIED!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-[#B52D3A]" />
                <span>COPY LINE</span>
              </>
            )}
          </button>
        </div>
      </motion.div>
    </div>
  );
};
