import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import {
  Sparkles,
  Heart,
  Lightbulb,
  Coffee,
  Code,
  MapPin,
  Compass,
  GraduationCap,
  ExternalLink,
  Laptop,
  Check,
} from 'lucide-react';
import { AboutFrameDecorations } from './SectionFrameBorders.tsx';

// ---------------------------------------------------------------------------
// CLASSROOM CHALKBOARD DECORATIVE SVG ASSETS
// ---------------------------------------------------------------------------

// 1. Handcrafted Pushpin SVG (Red, Yellow, Pink, Cream)
const PushPin: React.FC<{
  color?: 'cherry' | 'butter' | 'pink' | 'cream';
  className?: string;
}> = ({ color = 'cherry', className = '' }) => {
  const getColors = () => {
    switch (color) {
      case 'butter':
        return { head: '#F6E7A8', shadow: '#D4C06A', highlight: '#FFFBEA' };
      case 'pink':
        return { head: '#F5B7C8', shadow: '#D88EA3', highlight: '#FFE4EC' };
      case 'cream':
        return { head: '#FFF3DA', shadow: '#E2D0AE', highlight: '#FFFFFF' };
      case 'cherry':
      default:
        return { head: '#D92843', shadow: '#9E182D', highlight: '#FF7B8E' };
    }
  };

  const { head, shadow, highlight } = getColors();

  return (
    <div
      className={`relative inline-block select-none pointer-events-none drop-shadow-[0_4px_6px_rgba(0,0,0,0.35)] ${className}`}
      style={{ width: 22, height: 26 }}
    >
      <svg viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Pin Needle */}
        <path d="M12 16 L12 26" stroke="#4A4A4A" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M12 24 L13 27" stroke="#888888" strokeWidth="1.2" strokeLinecap="round" />
        {/* Pin Spherical Head */}
        <circle cx="12" cy="11" r="9" fill={head} />
        {/* Head Shadow (Bottom curve) */}
        <path
          d="M4.5 14 C6.5 18 17.5 18 19.5 14 C17 19.5 7 19.5 4.5 14 Z"
          fill={shadow}
          opacity="0.6"
        />
        {/* Specular Highlight */}
        <ellipse cx="9" cy="7.5" rx="3.2" ry="2" fill={highlight} opacity="0.8" transform="rotate(-35 9 7.5)" />
        {/* Center pin depression */}
        <circle cx="12" cy="11" r="1.8" fill={shadow} opacity="0.4" />
      </svg>
    </div>
  );
};

// 2. Bookmark Sticker Ribbon with V-Cut Tail
const BookmarkRibbon: React.FC<{
  label: string;
  theme?: 'cherry' | 'butter' | 'pink' | 'cream';
  pinColor?: 'cherry' | 'butter' | 'pink' | 'cream';
  className?: string;
  tiltDeg?: number;
}> = ({ label, theme = 'cherry', pinColor = 'butter', className = '', tiltDeg = 0 }) => {
  const getThemeStyles = () => {
    switch (theme) {
      case 'butter':
        return 'bg-[#F6E7A8] text-[#252321] border-[#E4C868]';
      case 'pink':
        return 'bg-[#F5B7C8] text-[#702632] border-[#E899AF]';
      case 'cream':
        return 'bg-[#FFF3DA] text-[#252321] border-[#E8D9BA]';
      case 'cherry':
      default:
        return 'bg-[#D92843] text-[#FFF9EF] border-[#B52035]';
    }
  };

  return (
    <div
      className={`relative inline-block select-none filter drop-shadow-[0_6px_12px_rgba(0,0,0,0.28)] ${className}`}
      style={{ transform: `rotate(${tiltDeg}deg)` }}
    >
      {/* Pushpin at top center */}
      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20">
        <PushPin color={pinColor} />
      </div>

      {/* Ribbon Body with V-Cut Bottom */}
      <div
        className={`pt-5 pb-5 px-3.5 text-center font-mono text-[11px] font-black tracking-wider uppercase border-x border-t transition-transform hover:-translate-y-1 ${getThemeStyles()}`}
        style={{
          clipPath:
            'polygon(0% 0%, 100% 0%, 100% 100%, 50% calc(100% - 10px), 0% 100%)',
          minWidth: 84,
        }}
      >
        <span className="block writing-vertical sm:writing-horizontal font-mono leading-tight">
          {label}
        </span>
      </div>
    </div>
  );
};

// 3. Chalk Doodles SVG
const ChalkCherry: React.FC<{ className?: string; size?: number }> = ({
  className = '',
  size = 42,
}) => (
  <div
    className={`inline-block select-none pointer-events-none filter drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)] ${className}`}
    style={{ width: size, height: size }}
  >
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Stems in chalk white */}
      <path
        d="M24 6 C21 14 14 24 16 33"
        stroke="#FFFFFF"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeDasharray="40"
        strokeDashoffset="1"
        opacity="0.85"
      />
      <path
        d="M24 6 C28 14 34 22 32 32"
        stroke="#FFFFFF"
        strokeWidth="2.2"
        strokeLinecap="round"
        opacity="0.85"
      />
      {/* Leaf */}
      <path
        d="M24 8 C30 4 38 7 36 12 C33 13 28 11 24 8 Z"
        stroke="#FFFFFF"
        strokeWidth="1.8"
        fill="#426B53"
        opacity="0.9"
      />
      {/* Cherries filled with chalk cherry red */}
      <circle cx="15" cy="33" r="10" fill="#D92843" stroke="#FFFFFF" strokeWidth="2" opacity="0.95" />
      <ellipse cx="12" cy="29" rx="3.5" ry="1.8" fill="#FFFFFF" opacity="0.8" transform="rotate(-30 12 29)" />
      {/* Smiling chalk mouth on left cherry! */}
      <path
        d="M11 34 Q 15 38 19 34"
        stroke="#FFFFFF"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Eyes */}
      <circle cx="12" cy="32" r="1" fill="#FFFFFF" />
      <circle cx="17" cy="32" r="1" fill="#FFFFFF" />

      {/* Right Cherry */}
      <circle cx="33" cy="32" r="9.5" fill="#D92843" stroke="#FFFFFF" strokeWidth="2" opacity="0.95" />
      <ellipse cx="30" cy="28" rx="3" ry="1.5" fill="#FFFFFF" opacity="0.8" transform="rotate(-30 30 28)" />
    </svg>
  </div>
);

// 4. Chalk Lightbulb Doodle
const ChalkLightbulb: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 36 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`w-9 h-11 select-none pointer-events-none opacity-70 ${className}`}
  >
    {/* Glow rays */}
    <line x1="18" y1="2" x2="18" y2="7" stroke="#FFF3DA" strokeWidth="1.8" strokeLinecap="round" />
    <line x1="6" y1="8" x2="10" y2="12" stroke="#FFF3DA" strokeWidth="1.8" strokeLinecap="round" />
    <line x1="30" y1="8" x2="26" y2="12" stroke="#FFF3DA" strokeWidth="1.8" strokeLinecap="round" />
    <line x1="2" y1="20" x2="7" y2="20" stroke="#FFF3DA" strokeWidth="1.8" strokeLinecap="round" />
    <line x1="34" y1="20" x2="29" y2="20" stroke="#FFF3DA" strokeWidth="1.8" strokeLinecap="round" />
    {/* Bulb outline */}
    <path
      d="M11 28 C9 25 8 20 8 16 C8 10.5 12.5 6 18 6 C23.5 6 28 10.5 28 16 C28 20 27 25 25 28 Z"
      stroke="#FFFFFF"
      strokeWidth="2"
      fill="rgba(255,243,218,0.12)"
    />
    {/* Filament */}
    <path
      d="M15 19 L16 13 L20 13 L21 19"
      stroke="#FFF3DA"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Base */}
    <line x1="13" y1="31" x2="23" y2="31" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
    <line x1="14" y1="35" x2="22" y2="35" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
    <path d="M16 38 C16 40 20 40 20 38" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// ---------------------------------------------------------------------------
// MAIN ABOUT COMPONENT (THE CLASSROOM GREEN BOARD 📌)
// ---------------------------------------------------------------------------

export const About: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [chalkQuoteIndex, setChalkQuoteIndex] = useState(0);
  const [chalkFlicker, setChalkFlicker] = useState(false);

  const classroomQuotes = [
    '“UX = f(human curiosity, zero pretense)”',
    '“rule 1: talk to users before moving pixels”',
    '“chalkboard theorem: ship working prototypes solo”',
    '“48 commits to tweak 1px padding & totally worth it”',
  ];

  const handleChalkClick = () => {
    setChalkFlicker(true);
    setChalkQuoteIndex((prev) => (prev + 1) % classroomQuotes.length);
    setTimeout(() => setChalkFlicker(false), 300);
  };

  return (
    <section
      id="about"
      className="py-10 sm:py-14 px-3 sm:px-6 lg:px-8 bg-transparent text-[#252321] relative overflow-visible"
    >
      <div className="max-w-7xl mx-auto relative z-10 bg-[#FFFDF9]/95 border-2 border-[#252321] rounded-3xl sm:rounded-[36px] p-6 sm:p-10 lg:p-12 paper-note-shadow">
        {/* Full 4-Sided Scrapbook Frame Sticker Decorations */}
        <AboutFrameDecorations />
        
        {/* =====================================================================
            1. SECTION HEADING (Classroom Journal Header)
           ===================================================================== */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b-2 border-[#E8DCC9]">
          <div>
            {/* Classroom Desk File Tag */}
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#315A45] border border-[#426B53] shadow-sm text-xs font-mono font-bold text-[#FFF3DA]">
                <span className="w-2 h-2 rounded-full bg-[#D92843] animate-pulse" />
                <span>PERSONAL FILES · HANDLE WITH CURIOSITY</span>
              </span>
            </div>

            {/* Section Title: Chalk + Pinned Paper Label */}
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="text-4xl sm:text-6xl font-lobster font-bold tracking-normal text-[#252321]">
                SOME LORE
              </h2>

              {/* Angled Cream Paper Label for "ABOUT SNEHA" with Red Pin */}
              <div className="relative inline-block rotate-[-2deg] hover:rotate-0 transition-transform">
                <div className="absolute -top-3 left-4 z-20">
                  <PushPin color="cherry" />
                </div>
                <div className="px-4 py-1.5 sm:py-2 rounded-xl bg-[#FFF3DA] border-2 border-[#D92843] shadow-md">
                  <span className="text-3xl sm:text-5xl font-lobster font-bold text-[#D92843]">
                    ABOUT SNEHA
                  </span>
                </div>
              </div>

              {/* Hand-Drawn Cherry Beside Title */}
              <div className="hidden sm:inline-block ml-1">
                <ChalkCherry size={36} />
              </div>
            </div>

            {/* Hand-Drawn Red Chalk Underline */}
            <div className="w-48 sm:w-64 h-2 mt-2">
              <svg viewBox="0 0 240 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <path
                  d="M2 5 C45 2 120 7 238 3"
                  stroke="#D92843"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>

          {/* Supporting Copy */}
          <div className="max-w-md">
            <p className="font-sans text-[#625A53] text-sm sm:text-base font-normal leading-relaxed">
              &ldquo;Beyond the pixels, prototypes, and occasional overthinking.&rdquo;
            </p>
            <span className="font-handwriting text-base sm:text-lg text-[#702632] block mt-1">
              ~ pinned notes from the designer&apos;s desk &amp; chalkboard 📌
            </span>
          </div>
        </div>

        {/* =====================================================================
            2. THE CLASSROOM GREEN BOARD (Main Visual Centerpiece)
           ===================================================================== */}
        <div className="relative rounded-[28px] sm:rounded-[36px] p-4 sm:p-8 lg:p-10 border-[10px] sm:border-[16px] border-[#9E6738] shadow-[0_24px_60px_-12px_rgba(37,35,33,0.35),inset_0_2px_8px_rgba(0,0,0,0.5)] overflow-hidden transition-all bg-[#315A45]">
          
          {/* Subtle Chalkboard Matte Texture & Dust Overlay */}
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{
              backgroundImage:
                'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.15) 1px, transparent 1px), radial-gradient(circle at 20% 80%, rgba(255,255,255,0.08) 2px, transparent 2px)',
              backgroundSize: '32px 32px, 64px 64px',
            }}
          />

          {/* Chalkboard Corner Brass Brackets */}
          <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-[#D4A373]/60 pointer-events-none" />
          <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-[#D4A373]/60 pointer-events-none" />

          {/* Background Chalk Scribbles & Formulas (Low Opacity) */}
          <div className="absolute top-6 left-1/3 pointer-events-none opacity-25 select-none hidden lg:block">
            <span className="font-handwriting text-lg text-[#FFF3DA] rotate-[-4deg] block">
              UX = f(curiosity, problem framing)
            </span>
          </div>
          <div className="absolute bottom-16 right-10 pointer-events-none opacity-20 select-none hidden md:block">
            <span className="font-mono text-xs text-[#FFF3DA] tracking-widest uppercase">
              ✦ 100% solo code &amp; design craft
            </span>
          </div>
          <div className="absolute top-8 right-16 pointer-events-none hidden sm:block">
            <ChalkLightbulb />
          </div>

          {/* Interactive Chalk Secret Banner */}
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#426B53]/60 relative z-10">
            <div className="flex items-center gap-3">
              <span className="text-lg select-none">✏️</span>
              <button
                onClick={handleChalkClick}
                className="font-handwriting text-base sm:text-xl text-[#FFF3DA] font-bold hover:text-[#F6E7A8] transition-colors cursor-pointer text-left"
                title="Tap to change chalkboard quote!"
              >
                <span className={chalkFlicker ? 'opacity-40' : 'opacity-100'}>
                  {classroomQuotes[chalkQuoteIndex]}
                </span>
                <span className="ml-2 font-mono text-[10px] text-[#F5B7C8] uppercase font-bold tracking-wider">
                  [tap chalk ↗]
                </span>
              </button>
            </div>

            {/* Corner Cherry Doodle on Board */}
            <div className="hidden sm:block">
              <ChalkCherry size={36} />
            </div>
          </div>

          {/* =====================================================================
              3. PINNED BOOKMARKS ROW
             ===================================================================== */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-6 mb-8 relative z-10">
            <BookmarkRibbon
              label="MCA ERA 📚"
              theme="cherry"
              pinColor="butter"
              tiltDeg={-2}
            />
            <BookmarkRibbon
              label="DESIGN THINKING 🧠"
              theme="butter"
              pinColor="cherry"
              tiltDeg={1.5}
            />
            <BookmarkRibbon
              label="BUILDING IN PUBLIC ⚡"
              theme="pink"
              pinColor="cream"
              tiltDeg={-1}
            />
            <BookmarkRibbon
              label="WORK IN PROGRESS 🛠️"
              theme="cream"
              pinColor="cherry"
              tiltDeg={2}
            />
          </div>

          {/* =====================================================================
              4. THE PINNED NOTE COMPOSITION (Asymmetric Editorial Cards)
             ===================================================================== */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 relative z-10 items-start">
            
            {/* CARD 1: FEATURED LARGE CREAM NOTE (THE PLOT) - 7 cols on desktop */}
            <motion.div
              whileHover={shouldReduceMotion ? {} : { y: -5, rotate: 0 }}
              transition={{ duration: 0.2 }}
              className="md:col-span-7 relative p-6 sm:p-8 rounded-3xl bg-[#FFFDF9] border-2 border-[#E8DCC9] shadow-[0_12px_28px_rgba(0,0,0,0.35)] rotate-[-1.5deg]"
            >
              {/* Dual Pushpins at Top Corners */}
              <div className="absolute -top-3.5 left-8 z-20">
                <PushPin color="cherry" />
              </div>
              <div className="absolute -top-3.5 right-8 z-20">
                <PushPin color="cherry" />
              </div>

              {/* Note Header */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#D92843]" />
                  <span className="font-mono text-xs font-bold text-[#702632] uppercase tracking-wider">
                    THE PLOT · DESIGNER &amp; BUILDER
                  </span>
                </div>
                <span className="font-handwriting text-sm text-[#D92843] font-bold">
                  ★ core thesis
                </span>
              </div>

              {/* Core Statement */}
              <p className="font-sans text-[#252321] text-base sm:text-lg leading-relaxed font-medium mb-4">
                &ldquo;MCA student and independent product designer focused on UI/UX, with the frontend and AI-assisted development skills to ship ideas solo. Repeatedly takes ambiguous problem statements from concept to a deployed, working product under tight time constraints — owning problem framing, user experience, and execution end to end.&rdquo;
              </p>

              <div className="pt-4 border-t border-[#E8DCC9] font-sans text-xs sm:text-sm text-[#625A53] leading-relaxed space-y-2">
                <p>
                  Based in <strong className="text-[#252321]">Nashik, Maharashtra, India</strong>, I treat software design not as superficial skinning, but as thoughtful systems engineering: from empathy mapping and Nielsen Norman heuristics to production React &amp; TypeScript components.
                </p>
                <p>
                  When curious ideas leave the group chat, I make sure they don&apos;t end up in Figma purgatory — they get built, tested, and shipped.
                </p>
              </div>

              {/* Tiny bottom sticker accent */}
              <div className="mt-4 flex items-center justify-between text-xs font-mono text-[#702632]">
                <span className="font-bold">STATUS: ACTIVELY BUILDING</span>
                <span className="text-[11px] text-[#625A53]">verified solo craft</span>
              </div>
            </motion.div>

            {/* CARD 2: MEDIUM BUTTER-YELLOW NOTE (ACADEMIC SIDE QUEST) - 5 cols */}
            <motion.div
              whileHover={shouldReduceMotion ? {} : { y: -5, rotate: 0 }}
              transition={{ duration: 0.2 }}
              className="md:col-span-5 relative p-6 sm:p-7 rounded-3xl bg-[#FFF9DA] border-2 border-[#E4C868] shadow-[0_12px_28px_rgba(0,0,0,0.3)] rotate-[1.8deg]"
            >
              {/* Pushpin top center */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20">
                <PushPin color="cherry" />
              </div>

              <div className="flex items-center gap-2 mb-2 pt-1">
                <GraduationCap className="w-4 h-4 text-[#702632]" />
                <span className="font-mono text-xs font-bold text-[#702632] uppercase tracking-wider">
                  ACADEMIC SIDE QUEST
                </span>
              </div>

              <h3 className="font-sans font-bold text-xl text-[#252321] mb-2">
                MCA Candidate (2024 — 2027)
              </h3>

              <p className="font-sans text-xs sm:text-sm text-[#625A53] leading-relaxed mb-4">
                Currently pursuing Master of Computer Applications at <strong className="text-[#252321]">Sandip Institute of Engineering and Management (SIEM)</strong>. Transitioned from a foundational BBA-CA background to bridge technical computation with intuitive human-computer interaction.
              </p>

              <div className="p-3 rounded-2xl bg-[#FFFDF0] border border-[#E8D9A5] text-xs font-mono text-[#702632]">
                <div className="font-bold mb-1">KEY TRACKS:</div>
                <div className="flex flex-wrap gap-1">
                  {['Product Design', 'UI/UX Heuristics', 'System Architecture', 'Modern Web'].map((t, idx) => (
                    <span key={idx} className="px-2 py-0.5 rounded-md bg-[#FFF3DA] border border-[#E4C868] text-[10px]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* CARD 3: PINK STICKY NOTE (CURRENTLY UNLOCKING) - 4 cols */}
            <motion.div
              whileHover={shouldReduceMotion ? {} : { y: -5, rotate: 0 }}
              transition={{ duration: 0.2 }}
              className="md:col-span-4 relative p-5 sm:p-6 rounded-3xl bg-[#FFF0F4] border-2 border-[#F5B7C8] shadow-[0_10px_24px_rgba(0,0,0,0.28)] rotate-[-1.2deg]"
            >
              <div className="absolute -top-3.5 left-6 z-20">
                <PushPin color="butter" />
              </div>

              <div className="flex items-center gap-2 mb-2 pt-1">
                <Sparkles className="w-4 h-4 text-[#D92843]" />
                <span className="font-mono text-xs font-bold text-[#D92843] uppercase tracking-wider">
                  CURRENTLY UNLOCKING
                </span>
              </div>

              <h4 className="font-sans font-bold text-base text-[#252321] mb-1.5">
                AI Product Design &amp; Multimodal Workflows
              </h4>

              <p className="font-sans text-xs text-[#625A53] leading-relaxed">
                Exploring structured prompt engineering, Gemini API integrations, and turning complex generative responses into tactile, low-latency UI controls rather than generic chat bubbles.
              </p>
            </motion.div>

            {/* CARD 4: CREAM MINI NOTE (THE BRAIN ROT) - 4 cols */}
            <motion.div
              whileHover={shouldReduceMotion ? {} : { y: -5, rotate: 0 }}
              transition={{ duration: 0.2 }}
              className="md:col-span-4 relative p-5 sm:p-6 rounded-3xl bg-[#FFFDF9] border-2 border-[#E8DCC9] shadow-[0_10px_24px_rgba(0,0,0,0.28)] rotate-[1.5deg]"
            >
              <div className="absolute -top-3.5 right-6 z-20">
                <PushPin color="pink" />
              </div>

              <div className="flex items-center gap-2 mb-2 pt-1">
                <Coffee className="w-4 h-4 text-[#702632]" />
                <span className="font-mono text-xs font-bold text-[#702632] uppercase tracking-wider">
                  DESIGNER HABITS ☕
                </span>
              </div>

              <h4 className="font-sans font-bold text-base text-[#252321] mb-1.5">
                Micro-Interactions Obsession
              </h4>

              <p className="font-sans text-xs text-[#625A53] leading-relaxed">
                Pushed 48 commits just to test button padding and tactile spring physics. I believe playful maximalism must always respect WCAG AA contrast and snappy keyboard ergonomics.
              </p>
            </motion.div>

            {/* CARD 5: KRAFT PAPER CARD (STARTUP & REAL EXPERIENCES) - 4 cols */}
            <motion.div
              whileHover={shouldReduceMotion ? {} : { y: -5, rotate: 0 }}
              transition={{ duration: 0.2 }}
              className="md:col-span-4 relative p-5 sm:p-6 rounded-3xl bg-[#FAF5EC] border-2 border-[#E0D2BE] shadow-[0_10px_24px_rgba(0,0,0,0.28)] rotate-[-1deg]"
            >
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20">
                <PushPin color="cherry" />
              </div>

              <div className="flex items-center gap-2 mb-2 pt-1">
                <Laptop className="w-4 h-4 text-[#702632]" />
                <span className="font-mono text-xs font-bold text-[#702632] uppercase tracking-wider">
                  STARTUP EXPERIENCE
                </span>
              </div>

              <h4 className="font-sans font-bold text-base text-[#252321] mb-1.5">
                StuMate · MVP Contribution
              </h4>

              <p className="font-sans text-xs text-[#625A53] leading-relaxed mb-2">
                Conducted end-to-end user research interviews with 28 university students, authored component libraries in Figma, and shipped responsive chat &amp; study room discovery for 500+ beta users.
              </p>

              <span className="font-mono text-[10px] text-[#D92843] font-bold block">
                ★ Real User Research &amp; Figma Tokens
              </span>
            </motion.div>

          </div>

          {/* =====================================================================
              5. THE WOODEN CHALK TRAY AT THE BOTTOM
             ===================================================================== */}
          <div className="mt-8 -mx-4 sm:-mx-8 lg:-mx-10 -mb-4 sm:-mb-8 lg:-mb-10 bg-[#8B5A2B] h-8 sm:h-10 rounded-b-[20px] sm:rounded-b-[24px] border-t-3 border-[#6D441F] shadow-lg flex items-center justify-between px-6 sm:px-10 relative z-20">
            
            {/* Chalk Sticks & Duster resting on tray */}
            <div className="flex items-center gap-3">
              {/* White Chalk */}
              <div
                className="w-8 sm:w-12 h-3.5 rounded-sm bg-[#FFFFFF] shadow-[inset_0_1px_2px_rgba(0,0,0,0.2),0_2px_3px_rgba(0,0,0,0.4)] cursor-pointer hover:-translate-y-0.5 transition-transform"
                title="White chalk stick"
                onClick={handleChalkClick}
              />
              {/* Cherry Red Chalk */}
              <div
                className="w-7 sm:w-10 h-3.5 rounded-sm bg-[#D92843] shadow-[inset_0_1px_2px_rgba(0,0,0,0.2),0_2px_3px_rgba(0,0,0,0.4)] cursor-pointer hover:-translate-y-0.5 transition-transform"
                title="Cherry red chalk stick"
                onClick={handleChalkClick}
              />
              {/* Butter Yellow Chalk */}
              <div
                className="w-6 sm:w-9 h-3.5 rounded-sm bg-[#F6E7A8] shadow-[inset_0_1px_2px_rgba(0,0,0,0.2),0_2px_3px_rgba(0,0,0,0.4)] cursor-pointer hover:-translate-y-0.5 transition-transform"
                title="Butter yellow chalk stick"
                onClick={handleChalkClick}
              />
            </div>

            {/* Blackboard Wooden Felt Eraser / Duster */}
            <div className="flex items-center gap-2">
              <div className="w-14 sm:w-20 h-4 rounded-sm bg-[#5C3A21] border border-[#3D2513] shadow-md flex items-center justify-center">
                <span className="font-mono text-[7px] sm:text-[8px] font-bold text-[#FFF3DA] tracking-wider uppercase opacity-80">
                  DUSTER
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
