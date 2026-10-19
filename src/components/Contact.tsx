import React, { useState } from 'react';
import {
  Mail,
  Phone,
  FileText,
  Calendar,
  Copy,
  Check,
  ArrowUpRight,
  MapPin,
  Linkedin,
  Github,
  Sparkles,
  Heart,
  Send,
  Coffee,
} from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { WarpedCheckerboard } from './WarpedCheckerboard.tsx';
import { ContactFrameDecorations } from './SectionFrameBorders.tsx';

interface ContactProps {
  onOpenYap: () => void;
  onOpenResume?: () => void;
}

// ---------------------------------------------------------------------------
// Tactile Decorative Elements (Doodles, Cherries, Stamps)
// ---------------------------------------------------------------------------

const HandDrawnCherry: React.FC<{ size?: number; className?: string }> = ({
  size = 32,
  className = '',
}) => (
  <div
    className={`inline-block select-none pointer-events-none filter drop-shadow-[0_2px_4px_rgba(112,38,50,0.18)] ${className}`}
    style={{ width: size, height: size }}
  >
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path
        d="M13 22C14 13 20 6 27 5M27 22C26 15 23 8 27 5"
        stroke="#702632"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M27 5C32 4 36 7 35 11C33 13 28 10 27 5Z"
        fill="#5B8A62"
        stroke="#3D6442"
        strokeWidth="1.5"
      />
      {/* Left Cherry */}
      <circle cx="12" cy="26" r="9" fill="#B52D3A" />
      <path d="M7 23C7 21 11 19 14 20" stroke="#FFF7F8" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
      <circle cx="15" cy="28" r="7" fill="#702632" opacity="0.3" />
      {/* Right Cherry */}
      <circle cx="28" cy="27" r="9.5" fill="#C93240" />
      <path d="M23 24C23 21 27 20 30 21" stroke="#FFF7F8" strokeWidth="2" strokeLinecap="round" opacity="0.85" />
      <circle cx="31" cy="30" r="7.5" fill="#702632" opacity="0.3" />
    </svg>
  </div>
);

const PixelCherryIcon: React.FC<{ size?: number; className?: string }> = ({
  size = 24,
  className = '',
}) => (
  <svg
    viewBox="0 0 16 16"
    fill="currentColor"
    style={{ width: size, height: size }}
    className={`inline-block ${className}`}
  >
    <rect x="7" y="1" width="2" height="2" fill="#5B8A62" />
    <rect x="9" y="2" width="3" height="2" fill="#5B8A62" />
    <rect x="5" y="3" width="2" height="2" fill="#702632" />
    <rect x="9" y="3" width="2" height="2" fill="#702632" />
    <rect x="4" y="5" width="2" height="3" fill="#702632" />
    <rect x="10" y="5" width="2" height="3" fill="#702632" />
    {/* Left Cherry Body */}
    <rect x="2" y="8" width="5" height="5" fill="#B52D3A" />
    <rect x="3" y="7" width="3" height="1" fill="#B52D3A" />
    <rect x="3" y="13" width="3" height="1" fill="#B52D3A" />
    <rect x="3" y="9" width="1" height="2" fill="#FFF7F8" />
    {/* Right Cherry Body */}
    <rect x="9" y="9" width="5" height="5" fill="#C93240" />
    <rect x="10" y="8" width="3" height="1" fill="#C93240" />
    <rect x="10" y="14" width="3" height="1" fill="#C93240" />
    <rect x="10" y="10" width="1" height="2" fill="#FFF7F8" />
  </svg>
);

const WashiTapeStrip: React.FC<{
  color?: 'butter' | 'cherry' | 'blush';
  className?: string;
  angle?: number;
}> = ({ color = 'butter', className = '', angle = -2 }) => {
  const bgStyles = {
    butter:
      'bg-[#F6E7A8] border-y border-[#E0D08A]/80 shadow-[0_2px_4px_rgba(0,0,0,0.06)]',
    cherry:
      'bg-[#FCE3E7] border-y border-[#F5A6B8]/70 shadow-[0_2px_4px_rgba(112,38,50,0.08)]',
    blush:
      'bg-[#FFDBE4] border-y border-[#EE69B4]/40 shadow-[0_2px_4px_rgba(112,38,50,0.08)]',
  };

  return (
    <div
      style={{ transform: `rotate(${angle}deg)` }}
      className={`h-6 px-4 py-0.5 inline-flex items-center justify-center washi-torn-h opacity-90 select-none pointer-events-none ${bgStyles[color]} ${className}`}
    >
      <div className="w-full h-full border-t border-dashed border-black/10" />
    </div>
  );
};

export const Contact: React.FC<ContactProps> = ({ onOpenYap, onOpenResume }) => {
  const shouldReduceMotion = useReducedMotion();
  const [copied, setCopied] = useState(false);
  const [stampedCount, setStampedCount] = useState(14);
  const [hasStamped, setHasStamped] = useState(false);

  const email = 'snehamaurya12200@gmail.com';
  const phone = '+91 7020644538';

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const handleStamp = () => {
    if (!hasStamped) {
      setStampedCount((c) => c + 1);
      setHasStamped(true);
    }
  };

  return (
    <section
      id="contact"
      className="py-10 sm:py-16 px-4 sm:px-8 relative overflow-visible bg-transparent text-[#252321]"
    >

      {/* Decorative Washi Tapes at the boundary */}
      <div className="max-w-6xl mx-auto relative">
        {/* Full 4-Sided Scrapbook Frame Sticker Decorations */}
        <ContactFrameDecorations />

        <div className="absolute -top-10 left-8 hidden sm:block">
          <WashiTapeStrip color="butter" angle={-4} className="w-32" />
        </div>
        <div className="absolute -top-10 right-12 hidden sm:block">
          <WashiTapeStrip color="blush" angle={3} className="w-28" />
        </div>

        {/* -------------------------------------------------------------
            MAIN SKETCHBOOK FINALE SHEET
           ------------------------------------------------------------- */}
        <div className="relative rounded-3xl sm:rounded-[36px] bg-[#FFFDF9] border-2 border-[#252321] paper-note-shadow p-6 sm:p-12 lg:p-16 overflow-hidden">
          {/* Top Perforated Spiral / Notebook Edge Graphic */}
          <div className="absolute top-0 left-0 right-0 h-4 bg-[#F6E7A8]/50 border-b border-[#252321]/15 flex items-center justify-around px-4">
            {Array.from({ length: 24 }).map((_, i) => (
              <span
                key={i}
                className="w-2 h-2 rounded-full bg-[#EAE0D0] border border-[#252321]/20 inline-block shadow-inner"
              />
            ))}
          </div>

          {/* Selective Pale-Pink & Cherry-Red Warped Checkerboard Airmail Stamp Accent */}
          <div className="absolute top-8 right-6 sm:right-12 pointer-events-none select-none hidden md:block">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-dashed border-[#D92843]/40 shadow-sm opacity-50 transform rotate-6">
              <WarpedCheckerboard
                className="w-full h-full scale-125"
                colorA="#D92843"
                colorB="#F9DCE5"
                accentColor="#F5A6B8"
              />
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-2 transform rotate-12">
              <span className="font-mono text-[9px] font-bold text-[#D92843] tracking-widest uppercase bg-[#FFFDF9]/90 px-1.5 py-0.5 rounded shadow-xs">
                AIRMAIL POSTMARK
              </span>
              <span className="font-lobster text-lg text-[#D92843] my-0.5">Nashik, MH</span>
              <span className="font-mono text-[8px] text-[#702632] font-semibold bg-[#FFFDF9]/90 px-1 rounded shadow-xs">
                OCT 2026 // DISPATCHED
              </span>
            </div>
          </div>

          {/* -----------------------------------------------------------
              HEADER ROW: Status badge & Page Index
             ----------------------------------------------------------- */}
          <div className="pt-2 sm:pt-4 flex flex-wrap items-center justify-between gap-3 mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F6E7A8] border-2 border-[#252321] text-[#252321] font-mono text-xs font-bold shadow-[2px_2px_0px_#252321]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#B52D3A] animate-pulse" />
              <span>STATUS: AVAILABLE FOR 2026 PRODUCT DESIGN ROLES</span>
            </div>

            <div className="inline-flex items-center gap-2 font-mono text-xs font-bold text-[#702632] bg-[#FFDBE4] px-3 py-1 rounded-md border border-[#252321]/20">
              <Sparkles className="w-3.5 h-3.5 text-[#B52D3A]" />
              <span>FINAL SPREAD // PAGE 48</span>
            </div>
          </div>

          {/* -----------------------------------------------------------
              MAIN EDITORIAL HEADLINE & ANNOTATION
             ----------------------------------------------------------- */}
          <div className="relative mb-10 sm:mb-12">
            <div className="flex items-center gap-3 mb-2">
              <HandDrawnCherry size={40} className="hidden sm:inline-block" />
              <span className="font-handwriting text-xl sm:text-2xl text-[#702632] -rotate-1 inline-block">
                ~ you made it to the end of the sketchbook! ~
              </span>
            </div>

            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-lobster font-bold text-[#B52D3A] leading-[1.08] tracking-normal mb-3">
              Okay, your turn.
            </h2>
            <p className="text-xl sm:text-3xl lg:text-4xl font-sans font-bold text-[#252321] tracking-tight leading-snug">
              Let&apos;s build something tactile, thoughtful, and actually fun to use.
            </p>

            <p className="font-sans text-[#625A53] text-base sm:text-lg max-w-2xl leading-relaxed mt-4">
              I love turning ambiguous problems into crisp interfaces, craft-heavy systems, and
              interactive web prototypes. Whether it&apos;s a design internship, a fresh product
              collab, or just a mutual curiosity for micro-interactions — let&apos;s connect.
            </p>

            {/* Hand-drawn scribble arrow pointing to the cards */}
            <div className="mt-4 flex items-center gap-2 text-[#702632] font-handwriting text-lg sm:text-xl">
              <span>pick your favorite way to reach me</span>
              <span className="font-sans text-xl animate-bounce">↓</span>
            </div>
          </div>

          {/* -----------------------------------------------------------
              TACTILE INTERACTION TILES / ENVELOPES
             ----------------------------------------------------------- */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mb-10">
            {/* 1. AIRMAIL ENVELOPE (Direct Email + Copy) */}
            <div className="relative rounded-2xl bg-[#FFFDF9] border-2 border-[#252321] p-5 sm:p-6 shadow-[4px_4px_0px_#252321] hover:shadow-[6px_6px_0px_#252321] hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between overflow-hidden group">
              {/* Airmail Striped Top Border Accent */}
              <div
                className="absolute top-0 left-0 right-0 h-2 opacity-85"
                style={{
                  backgroundImage:
                    'repeating-linear-gradient(45deg, #B52D3A 0, #B52D3A 12px, #FFF9EF 12px, #FFF9EF 18px, #702632 18px, #702632 30px, #FFDBE4 30px, #FFDBE4 36px)',
                }}
              />

              <div>
                <div className="flex items-center justify-between mb-3 pt-1">
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#F6E7A8] border border-[#252321]/30 font-mono text-[11px] font-bold text-[#252321]">
                    <Mail className="w-3.5 h-3.5 text-[#B52D3A]" />
                    <span>AIRMAIL DISPATCH</span>
                  </div>
                  <span className="font-handwriting text-sm text-[#702632]">fastest response ⚡</span>
                </div>

                <div className="text-xs font-mono text-[#625A53] mb-1">TO: SNEHA MAURYA</div>
                <div className="text-base sm:text-lg font-mono font-bold text-[#252321] break-all mb-2">
                  {email}
                </div>
                <p className="text-xs sm:text-sm text-[#625A53] leading-relaxed mb-4">
                  For internship inquiries, freelance product design, case study questions, or design review notes.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2.5 pt-2 border-t border-[#252321]/10">
                <a
                  href={`mailto:${email}?subject=Hello%20Sneha!%20Saw%20your%20portfolio`}
                  className="flex-1 min-w-[130px] inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#B52D3A] text-[#FFF9EF] font-sans font-bold text-sm shadow-[2px_2px_0px_#252321] hover:bg-[#9E2430] active:translate-y-0.5 transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Email</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={handleCopyEmail}
                  title="Copy email to clipboard"
                  className="px-3.5 py-2.5 rounded-xl bg-[#F6E7A8] hover:bg-[#ECD98D] text-[#252321] font-mono text-xs font-bold border border-[#252321] shadow-[2px_2px_0px_#252321] active:translate-y-0.5 transition-all inline-flex items-center gap-1.5 cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-700" />
                      <span className="text-emerald-800">COPIED!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#702632]" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* 2. THE DIRECT HOTLINE MEMO (Phone & WhatsApp) */}
            <div className="relative rounded-2xl bg-[#FFFDF9] border-2 border-[#252321] p-5 sm:p-6 shadow-[4px_4px_0px_#252321] hover:shadow-[6px_6px_0px_#252321] hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between overflow-hidden group">
              {/* Paperclip Doodle in Corner */}
              <div className="absolute top-2 right-4 w-5 h-8 border-2 border-[#702632] rounded-full opacity-60 pointer-events-none transform rotate-12" />

              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#FFDBE4] border border-[#252321]/30 font-mono text-[11px] font-bold text-[#702632]">
                    <Phone className="w-3.5 h-3.5 text-[#B52D3A]" />
                    <span>DESK HOTLINE</span>
                  </div>
                  <span className="font-handwriting text-sm text-[#702632]">IST Timezone 🇮🇳</span>
                </div>

                <div className="text-xs font-mono text-[#625A53] mb-1">CALL OR WHATSAPP</div>
                <div className="text-base sm:text-xl font-mono font-bold text-[#252321] mb-2">
                  {phone}
                </div>
                <p className="text-xs sm:text-sm text-[#625A53] leading-relaxed mb-4">
                  Direct mobile line for urgent briefs, design interviews, or a quick WhatsApp chat.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2.5 pt-2 border-t border-[#252321]/10">
                <a
                  href={`tel:${phone.replace(/\s+/g, '')}`}
                  className="flex-1 min-w-[130px] inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#252321] text-[#FFF9EF] font-sans font-bold text-sm shadow-[2px_2px_0px_#702632] hover:bg-[#3D3A38] active:translate-y-0.5 transition-all cursor-pointer"
                >
                  <Phone className="w-4 h-4 text-[#F6E7A8]" />
                  <span>Call Direct</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href={`https://wa.me/917020644538?text=Hi%20Sneha!%20Saw%20your%20design%20portfolio`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3.5 py-2.5 rounded-xl bg-[#FFF9EF] hover:bg-[#F6E7A8]/40 text-[#252321] font-mono text-xs font-bold border border-[#252321] shadow-[2px_2px_0px_#252321] active:translate-y-0.5 transition-all inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <span>WhatsApp</span>
                  <ArrowUpRight className="w-3 h-3 text-[#702632]" />
                </a>
              </div>
            </div>

            {/* 3. INTERACTIVE DOSSIER (Resume Modal) */}
            <div className="relative rounded-2xl bg-[#FFF9EF] border-2 border-[#252321] p-5 sm:p-6 shadow-[4px_4px_0px_#252321] hover:shadow-[6px_6px_0px_#252321] hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#F6E7A8] border border-[#252321]/30 font-mono text-[11px] font-bold text-[#252321]">
                    <FileText className="w-3.5 h-3.5 text-[#B52D3A]" />
                    <span>CURRICULUM VITAE</span>
                  </div>
                  <span className="font-mono text-xs font-semibold text-[#702632]">UPDATED OCT &apos;26</span>
                </div>

                <div className="text-base sm:text-lg font-sans font-bold text-[#252321] mb-1">
                  Interactive Resume &amp; Dossier
                </div>
                <p className="text-xs sm:text-sm text-[#625A53] leading-relaxed mb-4">
                  Inspect comprehensive education (MCA &apos;27 SIEM), verified hackathon wins, design tooling, and project lore.
                </p>
              </div>

              <div className="pt-2 border-t border-[#252321]/10">
                {onOpenResume && (
                  <button
                    onClick={onOpenResume}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#702632] hover:bg-[#581D26] text-[#FFF9EF] font-sans font-bold text-sm border-2 border-[#252321] shadow-[2px_2px_0px_#252321] active:translate-y-0.5 transition-all cursor-pointer"
                  >
                    <FileText className="w-4 h-4 text-[#FFDBE4]" />
                    <span>Open Interactive Resume Dossier</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>

            {/* 4. DESIGN YAP PASS (Quick Call Booking) */}
            <div className="relative rounded-2xl bg-[#FFF9EF] border-2 border-[#252321] p-5 sm:p-6 shadow-[4px_4px_0px_#252321] hover:shadow-[6px_6px_0px_#252321] hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#FFDBE4] border border-[#252321]/30 font-mono text-[11px] font-bold text-[#702632]">
                    <Calendar className="w-3.5 h-3.5 text-[#B52D3A]" />
                    <span>TICKET // ADMIT ONE</span>
                  </div>
                  <span className="font-handwriting text-sm text-[#702632]">15 min casual chat ☕</span>
                </div>

                <div className="text-base sm:text-lg font-sans font-bold text-[#252321] mb-1">
                  Book a Quick Design Yap
                </div>
                <p className="text-xs sm:text-sm text-[#625A53] leading-relaxed mb-4">
                  No awkward corporate pitch. Just a human-to-human conversation about design, systems, or building together.
                </p>
              </div>

              <div className="pt-2 border-t border-[#252321]/10">
                <button
                  onClick={onOpenYap}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#F6E7A8] hover:bg-[#ECD98D] text-[#252321] font-sans font-bold text-sm border-2 border-[#252321] shadow-[2px_2px_0px_#252321] active:translate-y-0.5 transition-all cursor-pointer"
                >
                  <Coffee className="w-4 h-4 text-[#B52D3A]" />
                  <span>Book Quick 15-Min Yap</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* -----------------------------------------------------------
              BOTTOM SCRAPBOOK FOOTER STRIP: Socials, Location, & Cherry Stamp
             ----------------------------------------------------------- */}
          <div className="pt-6 border-t-2 border-dashed border-[#252321]/20 flex flex-col lg:flex-row items-center justify-between gap-5">
            {/* Social & Location Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-3">
              <a
                href="https://www.linkedin.com/in/sneha-maurya-b842743b0/"
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-2 rounded-xl text-xs font-mono font-bold tracking-wider text-[#252321] bg-[#FFFDF9] hover:bg-[#F6E7A8] border-2 border-[#252321] shadow-[2px_2px_0px_#252321] inline-flex items-center gap-1.5 transition-all hover:-translate-y-0.5 cursor-pointer"
              >
                <Linkedin className="w-3.5 h-3.5 text-[#B52D3A]" />
                <span>LINKEDIN</span>
                <ArrowUpRight className="w-3 h-3 opacity-70" />
              </a>

              <a
                href="https://github.com/snehamaurya12200-design"
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-2 rounded-xl text-xs font-mono font-bold tracking-wider text-[#252321] bg-[#FFFDF9] hover:bg-[#F6E7A8] border-2 border-[#252321] shadow-[2px_2px_0px_#252321] inline-flex items-center gap-1.5 transition-all hover:-translate-y-0.5 cursor-pointer"
              >
                <Github className="w-3.5 h-3.5 text-[#252321]" />
                <span>GITHUB</span>
                <ArrowUpRight className="w-3 h-3 opacity-70" />
              </a>

              <div className="px-3.5 py-2 rounded-xl text-xs font-mono font-semibold text-[#252321] bg-[#F6E7A8]/60 border-2 border-[#252321] shadow-[2px_2px_0px_#252321] inline-flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#B52D3A]" />
                <span>NASHIK, MAHARASHTRA, INDIA</span>
              </div>
            </div>

            {/* Interactive "Leave a Cherry on Sneha's Desk" easter egg */}
            <div className="flex items-center gap-3 bg-[#FFFDF9] border border-[#252321]/30 rounded-2xl px-4 py-2 shadow-sm">
              <button
                onClick={handleStamp}
                className="inline-flex items-center gap-2 group cursor-pointer focus:outline-none"
                title="Click to stamp a cherry on Sneha's sketchbook!"
              >
                <motion.div
                  whileTap={shouldReduceMotion ? undefined : { scale: 0.85, rotate: 15 }}
                  className="p-1 rounded-lg bg-[#FFDBE4] group-hover:bg-[#F6E7A8] transition-colors"
                >
                  <PixelCherryIcon size={20} className="text-[#B52D3A]" />
                </motion.div>
                <div className="text-left">
                  <div className="text-[11px] font-mono font-bold text-[#252321] flex items-center gap-1">
                    <span>STAMP A CHERRY</span>
                    {hasStamped && <Heart className="w-3 h-3 text-[#B52D3A] fill-current animate-ping" />}
                  </div>
                  <div className="text-[10px] font-mono text-[#702632]">
                    {stampedCount} stamped on desk today
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
