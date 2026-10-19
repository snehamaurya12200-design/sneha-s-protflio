import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowUpRight, Sparkles, Compass, Eye, Heart } from 'lucide-react';
import { Sticker } from './Sticker.tsx';
import { GlossyCherries, HolographicStar } from './CollageElements.tsx';

interface SketchbookIntroProps {
  onStepInside: () => void;
  onJumpToWork?: () => void;
}

export const SketchbookIntro: React.FC<SketchbookIntroProps> = ({
  onStepInside,
  onJumpToWork,
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative min-h-screen w-full bg-[#FFF9EF] text-[#252321] paper-sketchbook flex flex-col justify-between overflow-hidden selection:bg-[#F6E7A8] selection:text-[#B52D3A]">
      
      {/* =====================================================================
          1. SKETCHBOOK DESK DECORATIONS & TACTILE DOODLE FRAME
         ===================================================================== */}
      
      {/* Top Left: Washi Tape + Studio Brand Tag */}
      <div className="absolute top-6 left-6 sm:top-10 sm:left-12 z-20 flex items-center gap-3">
        <div className="px-3.5 py-1 text-[11px] font-mono font-bold tracking-widest text-[#702632] bg-[#F6E7A8] washi-torn-h border-y border-[#E4C868] shadow-sm select-none">
          CHERRY BUTTER STUDIO · VOL 01
        </div>
      </div>

      {/* Top Right: Hand-Drawn Cherries & Date Stamp */}
      <div className="absolute top-6 right-6 sm:top-10 sm:right-12 z-20 flex items-center gap-3">
        <div className="hidden sm:flex flex-col items-end text-right font-mono text-xs text-[#625A53]">
          <span className="font-bold text-[#B52D3A]">Nashik, India · 2027</span>
          <span className="text-[11px] text-[#625A53]/80">sketchbook_entry_v2.log</span>
        </div>
        <div className="transform rotate-12 hover:rotate-0 transition-transform">
          <GlossyCherries size={56} />
        </div>
      </div>

      {/* Floating Scrapbook Element 1: Top-Left Pin + Vintage Camera */}
      <div className="absolute top-28 left-4 sm:left-14 lg:left-24 z-10 hidden md:block pointer-events-none select-none">
        <motion.div
          initial={shouldReduceMotion ? {} : { rotate: -8, scale: 0.9 }}
          animate={shouldReduceMotion ? {} : { rotate: [-8, -4, -8] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="relative"
        >
          <div className="absolute -top-3 -left-2 z-20">
            <Sticker name="pin" size={32} rotate={-10} alt="Red pin" />
          </div>
          <div className="p-3 bg-white rounded-xl paper-note-shadow border border-[#E8DCC9] max-w-[130px] text-center">
            <Sticker name="camera" size={68} rotate={-2} alt="Vintage camera sticker" />
            <span className="block mt-1 font-handwriting text-xs text-[#B52D3A] font-bold">
              capture the vibe
            </span>
          </div>
        </motion.div>
      </div>

      {/* Floating Scrapbook Element 2: Top-Right Chrome Star */}
      <div className="absolute top-28 right-8 sm:right-20 lg:right-32 z-10 hidden md:block pointer-events-none select-none">
        <motion.div
          animate={shouldReduceMotion ? {} : { y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center"
        >
          <Sticker name="star" size={54} rotate={15} alt="Chrome star sticker" />
          <span className="mt-1 font-handwriting text-sm text-[#702632] font-bold rotate-6">
            dopamine driven ✦
          </span>
        </motion.div>
      </div>

      {/* Floating Scrapbook Element 3: Bottom-Left Iconic Element */}
      <div className="absolute bottom-16 left-6 sm:left-16 z-10 hidden lg:block pointer-events-none select-none">
        <div className="relative p-2.5 bg-[#F6E7A8]/60 rounded-xl border border-[#E4C868] rotate-[-5deg] paper-note-shadow">
          <Sticker name="iconic" width={110} height={40} alt="Iconic sticker" />
          <div className="text-[10px] font-mono text-[#702632] mt-1 text-center font-bold">
            DESIGN TOKENS // OK
          </div>
        </div>
      </div>

      {/* Floating Scrapbook Element 4: Bottom-Right Disco Ball */}
      <div className="absolute bottom-20 right-8 sm:right-20 z-10 hidden lg:block pointer-events-none select-none">
        <div className="flex flex-col items-center rotate-6">
          <Sticker name="discoball" size={64} alt="Disco ball sticker" />
          <span className="font-handwriting text-sm text-[#B52D3A] font-bold mt-1">
            less yapping, more shipping ~
          </span>
        </div>
      </div>

      {/* Subtle hand-drawn doodle vector arrows pointing inwards */}
      <div className="absolute top-1/2 left-8 -translate-y-1/2 hidden xl:block pointer-events-none select-none">
        <svg width="60" height="90" viewBox="0 0 60 90" fill="none" className="text-[#B52D3A]/60">
          <path
            d="M10,15 C25,25 35,50 45,75 M32,70 L46,76 L48,60"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="absolute top-1/2 right-12 -translate-y-1/2 hidden xl:block pointer-events-none select-none">
        <svg width="60" height="90" viewBox="0 0 60 90" fill="none" className="text-[#B52D3A]/60">
          <path
            d="M50,15 C35,25 25,50 15,75 M28,70 L14,76 L12,60"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* =====================================================================
          2. MAIN SKETCHBOOK HERO CONTENT (Strictly matches brief)
         ===================================================================== */}
      <main className="relative z-20 max-w-3xl mx-auto px-6 py-24 sm:py-32 flex-1 flex flex-col justify-center items-center text-center">
        
        {/* Small introductory text */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: -12 }}
          animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F6E7A8] border border-[#E4C868] shadow-sm mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-[#B52D3A]" />
          <span className="font-mono text-xs sm:text-sm font-bold tracking-widest text-[#702632] uppercase">
            HELLO, INTERNET!
          </span>
          <span className="font-handwriting text-sm text-[#B52D3A] font-bold select-none">
            ✿
          </span>
        </motion.div>

        {/* Main headline: Most visually prominent element */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.95 }}
          animate={shouldReduceMotion ? {} : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="relative inline-block mb-4"
        >
          <h1 className="font-lobster font-bold text-6xl sm:text-7xl md:text-8xl lg:text-[6.5rem] tracking-normal text-[#252321] leading-[1.05]">
            hi, i&apos;m <span className="text-[#B52D3A] underline decoration-[#F6E7A8] decoration-wavy decoration-4">Sneha</span>.
          </h1>
          {/* Hand-drawn scribble highlight under name */}
          <div className="absolute -bottom-3 left-1/4 right-1/4 h-2 bg-[#F6E7A8] rounded-full -z-10 transform -rotate-1" />
        </motion.div>

        {/* Supporting statement */}
        <motion.p
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 12 }}
          animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.15 }}
          className="font-sans text-xl sm:text-2xl md:text-3xl text-[#252321] font-semibold max-w-xl leading-relaxed mb-4"
        >
          I turn curious ideas into thoughtful digital experiences.
        </motion.p>

        {/* Professional focus */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 12 }}
          animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="mb-10 text-sm sm:text-base font-mono font-medium text-[#625A53] tracking-wide"
        >
          <span>AI Product Design</span>
          <span className="mx-2.5 text-[#B52D3A] font-bold">·</span>
          <span>UI/UX</span>
          <span className="mx-2.5 text-[#B52D3A] font-bold">·</span>
          <span>Product Thinking</span>
        </motion.div>

        {/* Primary CTA: "STEP INSIDE ↗" */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.9 }}
          animate={shouldReduceMotion ? {} : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <button
            onClick={onStepInside}
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl cherry-btn text-base sm:text-lg font-bold cursor-pointer"
            aria-label="Step inside to main portfolio"
          >
            <span>STEP INSIDE</span>
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>

          {onJumpToWork && (
            <button
              onClick={onJumpToWork}
              className="text-xs sm:text-sm font-sans font-semibold text-[#625A53] hover:text-[#B52D3A] underline underline-offset-4 decoration-[#F6E7A8] transition-colors cursor-pointer py-2 px-3"
            >
              or jump straight to Selected Work →
            </button>
          )}
        </motion.div>

        {/* Little handwritten annotation below CTA */}
        <div className="mt-8 flex items-center gap-2 font-handwriting text-base sm:text-lg text-[#B52D3A] font-bold select-none">
          <span>~ receipts included · no corporate fluff ~</span>
        </div>

      </main>

      {/* =====================================================================
          3. SKETCHBOOK FOOTER TAPE STRIP
         ===================================================================== */}
      <footer className="relative z-20 w-full px-6 py-5 border-t border-[#E8DCC9] bg-[#FFF9EF]/90 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-[#625A53]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#B52D3A]" />
          <span>CHERRY BUTTER STUDIO · SNEHA MAURYA</span>
        </div>
        <div className="flex items-center gap-4 text-[11px]">
          <span>MCA STUDENT · PRODUCT DESIGNER</span>
          <span className="hidden sm:inline">·</span>
          <button
            onClick={onStepInside}
            className="text-[#B52D3A] font-bold hover:underline cursor-pointer"
          >
            EXPLORE WORK ↗
          </button>
        </div>
      </footer>

    </div>
  );
};
