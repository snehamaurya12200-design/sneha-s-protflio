import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowUpRight, FileText, Sparkles, Heart, MessageCircle } from 'lucide-react';
import { Sticker } from './Sticker.tsx';
import { GlossyCherries, HolographicStar } from './CollageElements.tsx';
import {
  DoodleStar,
  DoodleSparkle,
  DoodleHeart,
  DoodlePixelHeart,
  DoodleFlower,
  DoodleSmiley,
  DoodleArrow,
  DoodleSquiggle,
  DoodleLightning,
  DoodleNote,
  DoodleBow,
  DoodleCherries,
  DoodlePencil,
  DoodleCursor,
  DoodleCloud,
} from './ScrapbookDoodles.tsx';
import { HeroFrameDecorations } from './SectionFrameBorders.tsx';

interface HeroProps {
  onExploreWork: () => void;
  onOpenResume?: () => void;
  onReturnToIntro?: () => void;
  onOpenYap?: () => void;
  onOpenPickupLines?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreWork,
  onOpenResume,
  onReturnToIntro,
  onOpenYap,
  onOpenPickupLines,
}) => {
  const shouldReduceMotion = useReducedMotion();

  const handleStepInside = () => {
    onExploreWork();
  };

  return (
    <section
      id="hero"
      className="relative pt-20 sm:pt-24 pb-8 sm:pb-10 px-4 sm:px-6 lg:px-8 overflow-visible flex flex-col justify-center bg-transparent text-[#252321] selection:bg-[#FFF0A8] selection:text-[#E84A65]"
    >
      {/* Playful Floating Doodles around Hero Section Margins */}
      <div className="absolute top-6 left-6 pointer-events-none hidden md:block">
        <DoodleCloud size={42} rotate={-3} />
      </div>
      <div className="absolute top-8 right-12 pointer-events-none hidden sm:block">
        <DoodleStar size={30} hasFace={true} color="#FFF0A8" rotate={12} />
      </div>
      <div className="absolute top-28 right-28 pointer-events-none hidden lg:block">
        <DoodleSparkle size={24} color="#E84A65" />
      </div>
      <div className="absolute bottom-4 left-10 pointer-events-none hidden lg:block">
        <DoodleSquiggle size={46} color="#E84A65" variant="wave" rotate={-8} />
      </div>

      {/* =====================================================================
          1. RESTRAINED SKETCHBOOK BACKGROUND ATMOSPHERE
         ===================================================================== */}
      
      {/* Top-Right Partially Cropped Butter-Yellow Paper Corner */}
      <div
        aria-hidden="true"
        className="absolute -top-6 -right-6 w-36 h-36 bg-[#FFF0A8]/60 rounded-bl-[40px] border-b-2 border-l-2 border-[#E4C868]/60 rotate-2 pointer-events-none select-none z-0 overflow-hidden"
      >
        <span className="absolute bottom-3 left-4 font-mono text-[10px] text-[#702632]/70 font-bold tracking-widest uppercase">
          CHERRY BUTTER · VOL 01
        </span>
      </div>

      {/* =====================================================================
          2. MAIN HERO COMPOSITION (Left: Balanced Typography / Right: Illustrated Desk)
         ===================================================================== */}
      <div className="max-w-7xl mx-auto w-full relative z-10 bg-[#FFFDF9]/95 border-2 border-[#252321] rounded-3xl sm:rounded-[36px] p-6 sm:p-10 lg:p-12 paper-note-shadow">
        {/* Full 4-Sided Scrapbook Frame Sticker Decorations */}
        <HeroFrameDecorations />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* =================================================================
              LEFT COLUMN: REFINED TYPOGRAPHY & DELIBERATE COMPOSITION
             ================================================================= */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Top Washi Tape Pill Badge with Doodles */}
            <div className="flex flex-wrap items-center gap-2.5 mb-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF0A8] border border-[#E4C868] shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#E84A65]" />
                <span className="font-mono text-xs font-bold text-[#702632] tracking-wider uppercase">
                  A LITTLE WORLD · VOL 01
                </span>
              </div>

              <span className="font-handwriting text-base sm:text-lg text-[#E84A65] font-bold select-none rotate-[-2deg]">
                ~ serious craft · playful execution ~
              </span>

              <DoodlePixelHeart size={18} rotate={-6} />
              <DoodleSparkle size={18} color="#E84A65" />
            </div>

            {/* Introductory Greeting & Expressive Name Headline */}
            <div className="relative mb-4 w-full">
              {/* "hi, i'm" greeting with tiny flower doodle */}
              <div className="flex items-center gap-2 mb-1">
                <span className="block font-sans text-2xl sm:text-3xl text-[#625A53] font-semibold tracking-tight">
                  hi, i&apos;m
                </span>
                <DoodleFlower size={20} petalColor="#FFFFFF" centerColor="#FFF0A8" rotate={15} />
              </div>

              {/* Signature Name "Sneha." with Butter Highlighter Base + Cherry Pen Underline */}
              <div className="relative inline-block">
                <h1 className="font-lobster font-bold text-6xl sm:text-7xl lg:text-[5.5rem] text-[#B52D3A] leading-none tracking-normal select-text">
                  Sneha.
                </h1>

                {/* Tiny 8-Bit Pixel Star Motif */}
                <div className="inline-flex items-center ml-2.5 sm:ml-3 align-baseline translate-y-[-0.65rem] select-none">
                  <svg width="22" height="22" viewBox="0 0 10 10" fill="#B52D3A" className="inline-block">
                    <rect x="4" y="0" width="2" height="2" />
                    <rect x="4" y="8" width="2" height="2" />
                    <rect x="0" y="4" width="2" height="2" />
                    <rect x="8" y="4" width="2" height="2" />
                    <rect x="2" y="2" width="2" height="2" />
                    <rect x="6" y="2" width="2" height="2" />
                    <rect x="2" y="6" width="2" height="2" />
                    <rect x="6" y="6" width="2" height="2" />
                    <rect x="3" y="3" width="4" height="4" fill="#F6E7A8" />
                  </svg>
                </div>

                {/* Hand-Drawn Expressive Underline: Butter Base + Cherry Pen Flourish */}
                <svg
                  className="absolute -bottom-3 left-0 w-full h-5 overflow-visible pointer-events-none"
                  viewBox="0 0 240 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Butter yellow wide highlighter background stroke */}
                  <path
                    d="M 2 12 C 60 5, 140 4, 238 9"
                    stroke="#F6E7A8"
                    strokeWidth="11"
                    strokeLinecap="round"
                    opacity="0.95"
                  />
                  {/* Cherry red ink stroke with delicate curve */}
                  <path
                    d="M 4 13 C 50 8, 120 7, 236 10 M 215 7 C 228 10, 235 14, 239 12"
                    stroke="#B52D3A"
                    strokeWidth="2.8"
                    strokeLinecap="round"
                  />
                </svg>

                {/* Playful mini label pinned near signature */}
                <div className="hidden sm:inline-flex items-center gap-1 absolute -top-4 -right-28 px-2.5 py-0.5 rounded bg-white border border-[#E8DCC9] shadow-xs rotate-6 pointer-events-none select-none">
                  <span className="font-handwriting text-xs text-[#702632] font-bold">
                    yes, like the fruit 🍒
                  </span>
                </div>
              </div>
            </div>

            {/* Supporting Core Line — Refined Line Length & Spacing */}
            <p className="font-sans text-xl sm:text-2xl lg:text-[1.65rem] text-[#252321] font-semibold leading-[1.38] mb-5 max-w-xl">
              I turn curious ideas into thoughtful digital experiences.
            </p>

            {/* Professional Focus: Tactile Bracket Tag */}
            <div className="flex items-center gap-3 flex-wrap mb-8">
              <div className="inline-flex items-center px-4 py-2 rounded-xl bg-white/95 border border-[#E8DCC9] shadow-xs text-xs sm:text-sm font-mono font-medium text-[#625A53] tracking-wide">
                <span className="text-[#B52D3A] font-bold mr-2">[</span>
                <span className="text-[#252321] font-semibold">AI Product Design</span>
                <span className="mx-2 text-[#B52D3A]">✦</span>
                <span className="text-[#252321] font-semibold">UI/UX</span>
                <span className="mx-2 text-[#B52D3A]">✦</span>
                <span className="text-[#252321] font-semibold">Product Thinking</span>
                <span className="text-[#B52D3A] font-bold ml-2">]</span>
              </div>

              <span className="font-handwriting text-sm text-[#702632] font-bold hidden sm:inline-block rotate-[-2deg]">
                ~ craft &amp; code in nashik ~
              </span>
            </div>

            {/* =================================================================
                PRIMARY ACTION: Distinctive STEP INSIDE CTA with Hand-Drawn Arrow
               ================================================================= */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-5 w-full">
              {/* Primary Cherry Red Action Button */}
              <motion.button
                whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                onClick={handleStepInside}
                className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl cherry-btn text-base sm:text-lg font-bold shadow-md cursor-pointer transition-colors"
                aria-label="Step inside to explore selected work"
              >
                <span>STEP INSIDE</span>
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </motion.button>

              {/* Hand-Drawn Doodle Arrow & Handwritten Annotation */}
              <div className="flex items-center gap-2 select-none text-[#B52D3A]">
                <svg width="44" height="34" viewBox="0 0 44 34" fill="none" className="transform -rotate-6">
                  <path
                    d="M 6 6 C 14 20, 24 28, 38 26 M 28 20 L 40 26 L 34 32"
                    stroke="#B52D3A"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="font-handwriting text-base sm:text-lg text-[#B52D3A] font-bold tracking-wide -rotate-3">
                  curious? start here!
                </span>
              </div>

              {/* Quiet Secondary Action: Resume link */}
              {onOpenResume && (
                <button
                  onClick={onOpenResume}
                  className="hidden sm:inline-flex items-center gap-1.5 text-xs sm:text-sm font-sans font-semibold text-[#625A53] hover:text-[#B52D3A] underline underline-offset-4 decoration-[#F6E7A8] transition-colors cursor-pointer py-1.5 px-2"
                >
                  <FileText className="w-3.5 h-3.5 text-[#B52D3A]" />
                  <span>Resume / CV</span>
                </button>
              )}
            </div>

            {/* Verified Studio Credential Tags (Understated, Accurate, Secondary) */}
            <div className="mt-9 pt-5 border-t border-[#E8DCC9]/80 w-full flex flex-wrap items-center gap-y-2 gap-x-6 text-xs font-mono text-[#625A53]">
              <span className="flex items-center gap-1.5">
                <span className="text-[#B52D3A] font-bold">★</span>
                <span>WebRush Hackathon Top 5 Finalist</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-[#B52D3A] font-bold">★</span>
                <span>PixelPrompt Creative Craft Award</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-[#B52D3A] font-bold">★</span>
                <span>MCA Student @ SIEM</span>
              </span>
            </div>

          </div>

          {/* =================================================================
              RIGHT COLUMN: "SNEHA'S DESK PAD" AS AN ART-DIRECTED DESK OBJECT
             ================================================================= */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Outer Wrapper with Asymmetric Layering */}
            <div className="relative w-full max-w-[400px]">
              
              {/* Layer 1: Underneath Angled Butter-Yellow Mat (Desk Pad Base) */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[#F6E7A8] rounded-3xl border border-[#E4C868] shadow-sm transform -rotate-3 translate-x-1.5 translate-y-2 pointer-events-none select-none"
              >
                {/* Subtle ruler markings on the right edge */}
                <div className="absolute right-1 top-6 bottom-6 flex flex-col justify-between items-end pr-1 text-[8px] font-mono text-[#702632]/35 select-none">
                  <span>10cm</span>
                  <span>—</span>
                  <span>20cm</span>
                  <span>—</span>
                  <span>30cm</span>
                </div>
              </div>

              {/* Layer 2: Main Warm White Sketchbook Sheet */}
              <div className="relative bg-[#FFFDF9] p-5 sm:p-6 pb-7 rounded-3xl polaroid-paper-shadow border border-[#E8DCC9] z-10 transform rotate-1">
                {/* Hardware Touch: Top Washi Tape & Push Pin */}
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
                  <div className="px-4 py-1 bg-[#F6E7A8] washi-torn-h text-[11px] font-mono font-bold text-[#702632] shadow-xs select-none">
                    SNEHA&apos;S DESK PAD · STUDIO LOG
                  </div>
                  <div className="absolute -top-2.5 -right-3.5 z-30 pointer-events-auto">
                    <Sticker name="pin" size={32} rotate={-15} alt="Push pin" />
                  </div>
                </div>

                {/* 1. Main Illustration: Recessed Art Frame with Cherries & Stickers */}
                <div className="relative w-full aspect-[4/3] bg-gradient-to-tr from-[#FFF9EF] via-[#F6E7A8]/30 to-[#EAE0D0] rounded-2xl border border-[#E8DCC9] overflow-hidden flex items-center justify-center p-5 shadow-inner">
                  {/* Faint pencil grid lines inside artwork */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-[radial-gradient(#D8CBB6_1px,transparent_1px)] bg-[size:16px_16px] opacity-35 pointer-events-none"
                  />

                  {/* Cherries Illustration with gentle tactile hover interaction */}
                  <motion.div
                    whileHover={shouldReduceMotion ? {} : { scale: 1.15, rotate: 3 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                    className="relative z-10 cursor-pointer select-none"
                    title="Juicy cherries · tactile craft"
                  >
                    <GlossyCherries size={82} />
                  </motion.div>

                  {/* Camera Sticker tucked in bottom-left */}
                  <div className="absolute bottom-2.5 left-2.5 z-20 pointer-events-auto">
                    <Sticker name="camera" size={54} rotate={-6} alt="Vintage camera sticker" />
                  </div>

                  {/* Holographic Star top-right */}
                  <div className="absolute top-2.5 right-2.5 z-20 pointer-events-auto">
                    <HolographicStar size={38} />
                  </div>

                  {/* Handwritten tiny label in frame */}
                  <span className="absolute bottom-2 right-3 font-handwriting text-xs text-[#702632] font-bold z-10 select-none">
                    analog soul ✦ digital mind
                  </span>
                </div>

                {/* 2. Short Manifesto */}
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono font-bold text-[#252321]">
                    <span>studio_manifesto.txt</span>
                    <span className="text-[#B52D3A] text-[11px]">VERIFIED CRAFT ✓</span>
                  </div>

                  <p className="font-handwriting text-lg text-[#702632] leading-snug font-bold">
                    &ldquo;Digital interfaces should feel like physical objects you can touch, turn over, and remember.&rdquo;
                  </p>

                  {/* 3. Small Number of Meaningful Details */}
                  <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-[#625A53] border-t border-[#E8DCC9]">
                    <span>ROLE: AI PRODUCT DESIGNER</span>
                    <span className="text-[#B52D3A] font-bold">NASHIK // 2027</span>
                  </div>
                </div>

                {/* Little decorative star badge on corner */}
                <div className="absolute -bottom-3 -right-2 z-20 pointer-events-auto">
                  <Sticker name="star" size={34} rotate={10} alt="Star badge" />
                </div>
              </div>

              {/* 4. One Restrained Decorative Note: Yellow Sticky Note with Yap Prompt */}
              {onOpenYap && (
                <motion.div
                  initial={shouldReduceMotion ? {} : { rotate: 3, scale: 0.96 }}
                  whileHover={shouldReduceMotion ? {} : { rotate: 0, scale: 1.04 }}
                  className="absolute -bottom-5 -left-3 sm:-left-6 z-30 max-w-[190px] p-3 rounded-xl bg-[#FEF08A] border border-[#FDE047] paper-note-shadow cursor-pointer select-none"
                  onClick={onOpenYap}
                  title="Click to open interactive Yap session"
                >
                  <div className="absolute -top-2 left-3 w-3.5 h-3.5 rounded-full bg-[#B52D3A]/80 border border-white shadow-xs" />
                  <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#702632] mb-0.5">
                    <MessageCircle className="w-3.5 h-3.5 text-[#B52D3A]" />
                    <span>STICKY NOTE</span>
                  </div>
                  <p className="font-handwriting text-sm text-[#702632] font-bold leading-tight">
                    &ldquo;Curious about my process? Let&apos;s yap!&rdquo; 💬
                  </p>
                </motion.div>
              )}

              {/* Secondary Playful Flirt shortcut on the desk edge */}
              {onOpenPickupLines && (
                <button
                  onClick={onOpenPickupLines}
                  className="absolute -top-4 -left-2 z-30 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white border border-[#E8DCC9] shadow-xs text-[10px] font-mono font-bold text-[#702632] hover:bg-[#F6E7A8] transition-colors cursor-pointer select-none rotate-[-6deg]"
                  title="Open Flirt Mode (Rizz the Designer)"
                >
                  <Heart className="w-3 h-3 text-[#B52D3A]" />
                  <span>Rizz 💋</span>
                </button>
              )}

              {/* Creative Design Doodles around the Illustrated Desk */}
              <div className="absolute -bottom-4 right-2 pointer-events-none z-30 hidden sm:block">
                <DoodlePencil size={28} rotate={38} />
              </div>
              <div className="absolute top-2 -right-4 pointer-events-none z-30 hidden lg:block">
                <DoodleCursor size={22} rotate={-12} />
              </div>
              <div className="absolute -bottom-6 left-1/3 pointer-events-none z-30 hidden md:block">
                <DoodleSmiley size={24} color="#FFF0A8" rotate={-8} />
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
