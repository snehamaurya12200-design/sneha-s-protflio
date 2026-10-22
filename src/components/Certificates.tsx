import React, { useState, useEffect } from 'react';
import {
  Award,
  ShieldCheck,
  ExternalLink,
  X,
  Sparkles,
  CheckCircle2,
  Bookmark,
  Calendar,
  Layers,
  Terminal,
  Cpu,
  Palette,
  ArrowUpRight,
  Copy,
  Check,
  Download,
  Eye,
  FileText,
  User,
  ZoomIn,
} from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { WarpedCheckerboard } from './WarpedCheckerboard.tsx';
import { CertificatesFrameDecorations } from './SectionFrameBorders.tsx';
import { CERTIFICATES_DATA, CertificateItem } from '../data/certificatesData.ts';

// ---------------------------------------------------------------------------
// SCRAPBOOK DECORATIVE MINI-COMPONENTS
// ---------------------------------------------------------------------------

// 1. Hand-Drawn Glossy Cherries
const CherryDoodle: React.FC<{ size?: number; className?: string }> = ({
  size = 28,
  className = '',
}) => (
  <div
    className={`inline-block select-none pointer-events-none filter drop-shadow-[0_2px_4px_rgba(112,38,50,0.18)] ${className}`}
    style={{ width: size, height: size }}
  >
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path
        d="M20 4 C18 10 11 18 12 25"
        stroke="#4A6B35"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M20 4 C24 10 27 17 26 24"
        stroke="#4A6B35"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M20 5 C24 2 29 4 29 8 C27 9 23 8 20 5 Z"
        fill="#729A48"
        stroke="#4A6B35"
        strokeWidth="1.2"
      />
      <circle cx="12" cy="26" r="8" fill="#B52D3A" stroke="#702632" strokeWidth="1.5" />
      <ellipse cx="10" cy="23" rx="2.5" ry="1.2" fill="#FFFFFF" opacity="0.65" transform="rotate(-30 10 23)" />
      <circle cx="27" cy="25" r="7.5" fill="#B52D3A" stroke="#702632" strokeWidth="1.5" />
      <ellipse cx="25" cy="22" rx="2.2" ry="1.1" fill="#FFFFFF" opacity="0.65" transform="rotate(-30 25 22)" />
    </svg>
  </div>
);

// 2. Pixel 8-Bit Cherries
const PixelCherry: React.FC<{ size?: number; className?: string }> = ({
  size = 20,
  className = '',
}) => (
  <div
    className={`inline-block select-none pointer-events-none ${className}`}
    style={{ width: size, height: size }}
  >
    <svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect x="7" y="1" width="2" height="2" fill="#4A6B35" />
      <rect x="9" y="3" width="2" height="2" fill="#729A48" />
      <rect x="5" y="3" width="2" height="2" fill="#4A6B35" />
      <rect x="4" y="5" width="2" height="3" fill="#4A6B35" />
      <rect x="10" y="5" width="2" height="3" fill="#4A6B35" />
      <rect x="2" y="8" width="5" height="5" fill="#B52D3A" />
      <rect x="3" y="7" width="3" height="1" fill="#B52D3A" />
      <rect x="3" y="13" width="3" height="1" fill="#702632" />
      <rect x="3" y="9" width="1" height="1" fill="#FFFFFF" />
      <rect x="9" y="8" width="5" height="5" fill="#B52D3A" />
      <rect x="10" y="7" width="3" height="1" fill="#B52D3A" />
      <rect x="10" y="13" width="3" height="1" fill="#702632" />
      <rect x="10" y="9" width="1" height="1" fill="#FFFFFF" />
    </svg>
  </div>
);

// 3. Pixel Sparkle / Glint
const PixelSparkle: React.FC<{ className?: string; color?: string }> = ({
  className = '',
  color = '#B52D3A',
}) => (
  <svg
    viewBox="0 0 12 12"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    className={`w-3 h-3 inline-block select-none ${className}`}
  >
    <rect x="5" y="0" width="2" height="12" />
    <rect x="0" y="5" width="12" height="2" />
    <rect x="4" y="4" width="4" height="4" fill="#FFFFFF" />
  </svg>
);

// 4. Authentic Washi Tape Strip
const WashiTape: React.FC<{
  pattern: 'cherry-stripes' | 'butter-gingham' | 'dots' | 'burgundy-solid';
  position?: 'top-center' | 'top-left' | 'top-right' | 'angled';
  className?: string;
}> = ({ pattern, position = 'top-center', className = '' }) => {
  const getPositionClasses = () => {
    switch (position) {
      case 'top-left':
        return '-top-3 left-6 -rotate-6';
      case 'top-right':
        return '-top-3 right-6 rotate-4';
      case 'angled':
        return '-top-3.5 left-1/3 -rotate-2';
      case 'top-center':
      default:
        return '-top-3.5 left-1/2 -translate-x-1/2 rotate-1';
    }
  };

  const getTapeStyle = () => {
    switch (pattern) {
      case 'cherry-stripes':
        return {
          background:
            'repeating-linear-gradient(45deg, #FAD2D8, #FAD2D8 6px, #FCE7EB 6px, #FCE7EB 12px)',
          borderTop: '1px solid rgba(181, 45, 58, 0.3)',
          borderBottom: '1px solid rgba(181, 45, 58, 0.3)',
        };
      case 'butter-gingham':
        return {
          backgroundColor: '#F6E7A8',
          backgroundImage:
            'linear-gradient(90deg, rgba(228, 200, 104, 0.5) 50%, transparent 50%), linear-gradient(rgba(228, 200, 104, 0.5) 50%, transparent 50%)',
          backgroundSize: '8px 8px',
          borderTop: '1px solid rgba(228, 200, 104, 0.6)',
          borderBottom: '1px solid rgba(228, 200, 104, 0.6)',
        };
      case 'dots':
        return {
          backgroundColor: '#FFF4D6',
          backgroundImage: 'radial-gradient(#B52D3A 1px, transparent 1px)',
          backgroundSize: '6px 6px',
          borderTop: '1px solid rgba(181, 45, 58, 0.25)',
          borderBottom: '1px solid rgba(181, 45, 58, 0.25)',
        };
      case 'burgundy-solid':
      default:
        return {
          backgroundColor: 'rgba(112, 38, 50, 0.85)',
          borderTop: '1px solid #702632',
          borderBottom: '1px solid #702632',
        };
    }
  };

  return (
    <div
      className={`absolute z-20 h-6 w-24 sm:w-28 shadow-xs washi-torn-h pointer-events-none opacity-90 transition-transform duration-200 ${getPositionClasses()} ${className}`}
      style={getTapeStyle()}
    />
  );
};

// 5. Realistic Silver Paperclip
const PaperclipSvg: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 24 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`w-5 h-10 select-none pointer-events-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.18)] ${className}`}
  >
    <path
      d="M8 12 V34 C8 38 16 38 16 34 V8 C16 3 4 3 4 8 V36 C4 43 20 43 20 36 V12"
      stroke="#A8A29E"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 12 V34 C8 38 16 38 16 34 V8 C16 3 4 3 4 8 V36 C4 43 20 43 20 36 V12"
      stroke="#E7E5E4"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// 6. Vintage Red Ink Verification Seal
const VerifiedSeal: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div
    className={`select-none pointer-events-none border-2 border-dashed border-[#B52D3A]/60 rounded-full p-1.5 rotate-[-12deg] ${className}`}
  >
    <div className="w-14 h-14 rounded-full border border-[#B52D3A]/70 flex flex-col items-center justify-center text-center p-1 bg-[#FFF9EF]/80">
      <span className="font-mono text-[8px] font-black tracking-widest text-[#B52D3A] uppercase leading-none">
        VERIFIED
      </span>
      <span className="text-[10px] my-0.5 leading-none">🍒</span>
      <span className="font-mono text-[7px] font-bold text-[#702632] uppercase leading-none">
        PROOF
      </span>
    </div>
  </div>
);

// ---------------------------------------------------------------------------
// MAIN CERTIFICATES COMPONENT
// ---------------------------------------------------------------------------

type CategoryFilter = 'all' | 'awards' | 'hackathons' | 'courses' | 'simulations';

export const Certificates: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [fullImageView, setFullImageView] = useState<boolean>(false);

  // Keyboard accessibility: ESC to close modal or full image view
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (fullImageView) {
          setFullImageView(false);
        } else if (selectedCert) {
          setSelectedCert(null);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedCert, fullImageView]);

  // Lock body scroll when modal is active
  useEffect(() => {
    if (selectedCert) {
      const orig = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = orig;
      };
    }
  }, [selectedCert]);

  // Easter Egg Witty Quotes
  const easterQuotes = [
    '✨ 10,000 hours of Figma & dark roast coffee!',
    '⚡ Built solo under a 6-hour sprint countdown!',
    '🍒 Zero templates were harmed in the making of this.',
    '🧪 Every pixel was rigorously sanity-checked.',
    '🛸 Certified proof that curious ideas leave the group chat.',
    '💌 Real certificates, verified credentials, and shipped code!',
  ];
  const [currentEasterQuote, setCurrentEasterQuote] = useState(easterQuotes[0]);
  const [showQuoteBubble, setShowQuoteBubble] = useState(false);

  const handleCherryClick = () => {
    const nextIdx = (easterQuotes.indexOf(currentEasterQuote) + 1) % easterQuotes.length;
    setCurrentEasterQuote(easterQuotes[nextIdx]);
    setShowQuoteBubble(true);
    setTimeout(() => setShowQuoteBubble(false), 3800);
  };

  const filteredCerts = CERTIFICATES_DATA.filter((cert) => {
    if (activeFilter === 'all') return true;
    return cert.categories.includes(activeFilter);
  });

  const handleCopyCitation = (cert: CertificateItem) => {
    const text = `${cert.title} — ${cert.issuer} (${cert.issueDate || cert.year}) [Recipient: ${cert.recipientName}${
      cert.details.credentialId ? ` | ID: ${cert.details.credentialId}` : ''
    }]`;
    navigator.clipboard.writeText(text);
    setCopiedId(cert.id);
    setTimeout(() => setCopiedId(null), 2200);
  };

  const handleDownloadOriginal = (cert: CertificateItem) => {
    const targetUrl = cert.pdfUrl || cert.imageUrl;
    if (!targetUrl) return;
    const a = document.createElement('a');
    a.href = targetUrl;
    a.download = targetUrl.split('/').pop() || 'certificate';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <section
      id="certificates"
      className="py-10 sm:py-14 px-4 sm:px-6 lg:px-8 bg-transparent text-[#252321] relative overflow-visible"
    >
      {/* Top Banner Accent */}
      <div className="absolute top-0 left-0 right-0 h-3 overflow-hidden pointer-events-none opacity-80">
        <WarpedCheckerboard
          className="w-full h-full scale-125 opacity-90"
          colorA="#D92843"
          colorB="#F9DCE5"
          accentColor="#F5A6B8"
        />
      </div>

      {/* Background Decorative Notebook Details */}
      <div className="absolute top-12 left-4 sm:left-12 pointer-events-none opacity-40 select-none hidden md:block">
        <span className="font-handwriting text-sm text-[#702632] tracking-wide rotate-[-6deg] block">
          ~ field notes &amp; paper loot ~
        </span>
        <svg width="64" height="24" viewBox="0 0 64 24" fill="none" className="text-[#B52D3A]">
          <path
            d="M2 14 C18 4 40 22 62 10"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeDasharray="3 3"
          />
        </svg>
      </div>

      {/* Floating Tiny Pixel Doodles at Section Margins */}
      <div className="absolute top-36 right-8 pointer-events-none opacity-50 select-none hidden lg:block">
        <PixelCherry size={28} />
      </div>
      <div className="absolute bottom-24 left-8 pointer-events-none opacity-45 select-none hidden lg:block">
        <PixelSparkle color="#B52D3A" className="scale-125" />
      </div>
      <div className="absolute top-1/2 right-4 pointer-events-none opacity-30 select-none hidden xl:block">
        <span className="font-mono text-[11px] text-[#702632] -rotate-90 block tracking-widest uppercase">
          ✦ verified artifacts
        </span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 bg-[#FFFDF9]/95 border-2 border-[#252321] rounded-3xl sm:rounded-[36px] p-6 sm:p-10 lg:p-12 paper-note-shadow">
        {/* Full 4-Sided Scrapbook Frame Sticker Decorations */}
        <CertificatesFrameDecorations />

        {/* =====================================================================
            HEADER
           ===================================================================== */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-10 pb-8 border-b-2 border-[#E8DCC9] relative">
          <div>
            {/* Stamp Badge + Washi Tape Header Note */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F6E7A8] border border-[#E4C868] shadow-xs">
                <PixelCherry size={14} />
                <span className="font-mono text-xs font-bold text-[#702632] tracking-wider uppercase">
                  04 · CHERRY SCRAPBOOK ARCHIVE
                </span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#FFFDF9] border border-[#E8DCC9] shadow-2xs text-xs font-mono font-semibold text-[#625A53]">
                <Sparkles className="w-3.5 h-3.5 text-[#B52D3A]" />
                <span>ALL {CERTIFICATES_DATA.length} VERIFIED RECEIPTS</span>
              </div>
            </div>

            {/* Title with Handwritten Annotation & Playful Typography */}
            <div className="relative inline-block">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-handwriting text-lg sm:text-xl text-[#B52D3A] font-bold rotate-[-2deg]">
                  receipts of the grind ✏️
                </span>
                <svg
                  width="48"
                  height="20"
                  viewBox="0 0 48 20"
                  fill="none"
                  className="text-[#B52D3A] transform -scale-x-100"
                >
                  <path
                    d="M4 14 C16 4 32 18 44 8"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                  />
                  <path
                    d="M38 4 L44 8 L39 12"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <h2 className="text-4xl sm:text-6xl font-lobster font-bold tracking-normal text-[#252321] leading-tight">
                Certificates &amp; <span className="text-[#B52D3A]">Honors</span>
              </h2>
            </div>

            <p className="font-sans text-[#625A53] text-base sm:text-lg max-w-2xl font-normal leading-relaxed mt-3">
              Every genuine certificate, national hackathon placement, job simulation, and verified credential in one scrapbook archive. Click any credential to inspect the original high-resolution certificate and verification details.
            </p>
          </div>

          {/* Right Header Side: Easter Egg Clickable Cherry & Filter Tabs */}
          <div className="flex flex-col items-start lg:items-end gap-4">
            {/* Interactive Clickable Cherry Easter Egg */}
            <div className="relative">
              <button
                onClick={handleCherryClick}
                className="group inline-flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-[#FFFDF9] border-2 border-[#E8DCC9] hover:border-[#B52D3A] hover:bg-[#F6E7A8] text-xs font-mono font-bold text-[#702632] shadow-xs transition-all cursor-pointer"
                title="Click me for a designer secret!"
                aria-label="Click cherry for secret designer note"
              >
                <motion.div
                  whileHover={{ rotate: [0, -12, 12, -8, 8, 0], scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                >
                  <CherryDoodle size={24} />
                </motion.div>
                <span>Sneha&apos;s Loot Note ↗</span>
              </button>

              {/* Speech Bubble */}
              <AnimatePresence>
                {showQuoteBubble && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 4, scale: 0.95 }}
                    className="absolute right-0 top-12 z-30 w-64 p-3 rounded-2xl bg-[#FFFDF9] border-2 border-[#B52D3A] shadow-xl text-left pointer-events-none"
                  >
                    <div className="font-handwriting text-base font-bold text-[#702632] leading-tight">
                      {currentEasterQuote}
                    </div>
                    <div className="font-mono text-[9px] text-[#B52D3A] mt-1.5 uppercase font-bold tracking-wider">
                      ~ studio note
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Filter Pills styled like Vintage Label-Maker Strips */}
            <div className="flex flex-wrap gap-2 pt-1">
              {[
                { id: 'all', label: `All Loot (${CERTIFICATES_DATA.length})` },
                {
                  id: 'awards',
                  label: `Awards & Honors (${
                    CERTIFICATES_DATA.filter((c) => c.categories.includes('awards')).length
                  }) 🏆`,
                },
                {
                  id: 'hackathons',
                  label: `Hackathons (${
                    CERTIFICATES_DATA.filter((c) => c.categories.includes('hackathons')).length
                  }) ⚡`,
                },
                {
                  id: 'courses',
                  label: `Courses (${
                    CERTIFICATES_DATA.filter((c) => c.categories.includes('courses')).length
                  }) 🎓`,
                },
                {
                  id: 'simulations',
                  label: `Job Simulations (${
                    CERTIFICATES_DATA.filter((c) => c.categories.includes('simulations')).length
                  }) 💼`,
                },
              ].map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id as CategoryFilter)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold tracking-wide transition-all cursor-pointer border ${
                    activeFilter === filter.id
                      ? 'bg-[#B52D3A] text-[#FFF9EF] border-[#702632] shadow-xs -translate-y-0.5'
                      : 'bg-[#FFFDF9] text-[#625A53] border-[#E8DCC9] hover:border-[#B52D3A] hover:text-[#252321] hover:bg-[#F6E7A8]/50'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* =====================================================================
            CARD GRID WITH GENUINE THUMBNAILS
           ===================================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredCerts.map((cert) => {
              const getPaperCardStyle = () => {
                switch (cert.accentTheme) {
                  case 'butter':
                    return 'bg-[#FFFDF0] border-[#E8D9A5] shadow-[0_8px_24px_-4px_rgba(246,231,168,0.35)]';
                  case 'blush':
                    return 'bg-[#FFF9FA] border-[#F2D2D7] shadow-[0_8px_24px_-4px_rgba(181,45,58,0.12)]';
                  case 'mint':
                    return 'bg-[#F9FCFA] border-[#D0E5D8] shadow-[0_8px_24px_-4px_rgba(74,107,53,0.12)]';
                  case 'kraft':
                    return 'bg-[#FAF6EE] border-[#E2D5BE] shadow-[0_8px_24px_-4px_rgba(112,38,50,0.1)]';
                  case 'cream':
                  default:
                    return 'bg-[#FFFDF9] border-[#E8DCC9] shadow-[0_8px_24px_-4px_rgba(37,35,33,0.08)]';
                }
              };

              return (
                <motion.div
                  key={cert.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    rotate: shouldReduceMotion ? 0 : cert.tiltDeg,
                  }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  whileHover={
                    shouldReduceMotion
                      ? {}
                      : {
                          rotate: 0,
                          y: -6,
                          scale: 1.015,
                          boxShadow: '0 16px 36px -6px rgba(181, 45, 58, 0.16)',
                        }
                  }
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  onClick={() => setSelectedCert(cert)}
                  className={`relative rounded-3xl p-5 sm:p-6 border-2 flex flex-col justify-between cursor-pointer group transition-colors duration-200 ${getPaperCardStyle()}`}
                >
                  {/* Washi Tape Accent */}
                  <WashiTape pattern={cert.tapePattern} position={cert.tapePosition} />

                  {/* Corner Accent: Silver Paperclip on selected cards */}
                  {(cert.accentTheme === 'kraft' || cert.accentTheme === 'cream') && (
                    <div className="absolute -top-3.5 right-6 z-20">
                      <PaperclipSvg />
                    </div>
                  )}

                  {/* Red Vintage Verified Stamp on Winner Cards */}
                  {cert.badgeType === 'winner' && (
                    <div className="absolute top-24 right-5 z-10 opacity-30 group-hover:opacity-60 transition-opacity">
                      <VerifiedSeal />
                    </div>
                  )}

                  <div>
                    {/* Badge & Year Row */}
                    <div className="flex items-center justify-between gap-2 mb-3 pt-2">
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-bold tracking-wider border shadow-2xs ${
                          cert.badgeType === 'winner'
                            ? 'bg-[#F6E7A8] text-[#702632] border-[#E4C868]'
                            : cert.badgeType === 'national'
                            ? 'bg-[#EAE0D0] text-[#702632] border-[#D4C5AD]'
                            : 'bg-[#FFF9EF] text-[#B52D3A] border-[#F2D2D7]'
                        }`}
                      >
                        <ShieldCheck className="w-3.5 h-3.5 text-[#B52D3A]" />
                        <span>{cert.badge}</span>
                      </span>

                      <span className="font-mono text-xs font-bold text-[#625A53] flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-[#B52D3A]" />
                        <span>{cert.year}</span>
                      </span>
                    </div>

                    {/* Genuine Certificate Artwork Preview Thumbnail */}
                    <div className="relative mb-4 rounded-2xl overflow-hidden border-2 border-[#E8DCC9] bg-[#F7F2EB] shadow-xs group-hover:border-[#B52D3A]/50 transition-colors">
                      {cert.imageUrl ? (
                        <div className="relative w-full aspect-16/11 overflow-hidden bg-black/5">
                          <img
                            src={cert.imageUrl}
                            alt={cert.title}
                            loading="lazy"
                            className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-300"
                          />
                          {/* Subtle paper gloss sheen overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
                          <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded-md bg-[#252321]/80 backdrop-blur-xs text-[10px] font-mono font-bold text-[#FFFDF9] flex items-center gap-1">
                            <Eye className="w-3 h-3 text-[#F6E7A8]" />
                            <span>Preview</span>
                          </div>
                        </div>
                      ) : (
                        // Stylized Paper Docket Preview for preserved archive entries
                        <div className="w-full aspect-16/11 p-4 flex flex-col justify-between bg-gradient-to-br from-[#FFFDF9] to-[#F5ECE0] relative">
                          <div className="flex items-center justify-between">
                            <span className="font-mono text-[10px] font-bold text-[#702632] tracking-wider uppercase">
                              Official Docket
                            </span>
                            <Award className="w-4 h-4 text-[#B52D3A]" />
                          </div>
                          <div className="my-auto text-center py-2">
                            <span className="font-lobster text-xl text-[#252321] block leading-snug">
                              {cert.issuer}
                            </span>
                            <span className="font-mono text-xs text-[#702632] font-semibold mt-1 block">
                              Recipient: {cert.recipientName}
                            </span>
                          </div>
                          <div className="flex items-center justify-between text-[10px] font-mono text-[#625A53] border-t border-[#E8DCC9] pt-2">
                            <span>ID: {cert.details.credentialId || 'VERIFIED'}</span>
                            <span className="text-[#B52D3A] font-bold">Open Record ↗</span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="font-sans font-bold text-lg sm:text-xl text-[#252321] group-hover:text-[#B52D3A] transition-colors leading-snug mb-1.5">
                      {cert.title}
                    </h3>

                    {/* Issuer & Date */}
                    <div className="font-mono text-xs font-bold text-[#702632] mb-3 flex items-center justify-between gap-1">
                      <span className="flex items-center gap-1.5 truncate">
                        <Bookmark className="w-3.5 h-3.5 text-[#B52D3A] shrink-0" />
                        <span className="truncate">{cert.issuer}</span>
                      </span>
                      {cert.issueDate && (
                        <span className="text-[11px] font-medium text-[#625A53] shrink-0">
                          {cert.issueDate}
                        </span>
                      )}
                    </div>

                    {/* Description Highlight */}
                    <p className="font-sans text-[#625A53] text-xs sm:text-sm leading-relaxed mb-4 font-normal line-clamp-2">
                      {cert.description}
                    </p>

                    {/* Tags in Retro Label-Maker Pill Style */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {cert.tags.slice(0, 4).map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded-md bg-[#FFFDF9] text-[#702632] font-mono text-[10px] font-bold border border-[#E8DCC9] shadow-2xs"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom Row: Action with tactile border */}
                  <div className="pt-3 border-t border-[#E8DCC9]/80 flex items-center justify-between text-xs font-mono relative z-10">
                    <div className="flex items-center gap-1.5 text-[#625A53]">
                      <Award className="w-4 h-4 text-[#B52D3A]" />
                      <span className="text-[11px] font-bold">
                        {cert.assetType === 'pdf'
                          ? 'PDF Certificate'
                          : cert.assetType === 'image'
                          ? 'Original Artwork'
                          : 'Credential Record'}
                      </span>
                    </div>

                    <span className="inline-flex items-center gap-1 font-bold text-[#B52D3A] group-hover:translate-x-1 transition-transform">
                      <span>Inspect</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* =====================================================================
            FOOTER ANNOTATION STRIP
           ===================================================================== */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-[#FFFDF9] border-2 border-[#E8DCC9] relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#F6E7A8] border border-[#E4C868] flex items-center justify-center shrink-0">
                <CherryDoodle size={28} />
              </div>
              <div>
                <h4 className="font-sans font-bold text-base text-[#252321] flex items-center gap-2">
                  <span>Need high-resolution certificate PDFs or direct verification?</span>
                </h4>
                <p className="font-sans text-xs text-[#625A53] mt-0.5">
                  All {CERTIFICATES_DATA.length} certificates have original high-resolution artwork, official issuing codes, and verifiable repository links.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl cherry-btn text-xs font-mono font-bold cursor-pointer"
              >
                <span>Request Verification Docket</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================================
          EXPANDED HIGH-RESOLUTION CERTIFICATE DOSSIER MODAL
         ===================================================================== */}
      <AnimatePresence>
        {selectedCert && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#252321]/70 backdrop-blur-xs overflow-y-auto"
            onClick={() => {
              if (fullImageView) {
                setFullImageView(false);
              } else {
                setSelectedCert(null);
              }
            }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="cert-modal-title"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-[#FFFDF9] rounded-3xl border-3 border-[#E8DCC9] shadow-2xl text-[#252321] overflow-hidden my-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Scrapbook Top Washi Strip */}
              <div
                className="h-3 shrink-0"
                style={{
                  background:
                    'repeating-linear-gradient(45deg, #B52D3A, #B52D3A 8px, #FCE7EB 8px, #FCE7EB 16px)',
                }}
              />

              {/* Modal Header Bar */}
              <div className="flex items-center justify-between px-6 sm:px-8 py-4 border-b border-[#E8DCC9] bg-[#FFFDF9] shrink-0">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#B52D3A] animate-pulse" />
                  <span className="font-mono text-xs font-bold text-[#702632] tracking-wider uppercase">
                    {selectedCert.badge}
                  </span>
                  <span className="font-mono text-xs text-[#625A53]">
                    · {selectedCert.issueDate || `Year ${selectedCert.year}`}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="w-9 h-9 rounded-full bg-[#FFF9EF] border border-[#E8DCC9] flex items-center justify-center text-[#252321] hover:text-[#B52D3A] hover:bg-[#F6E7A8] transition-colors cursor-pointer"
                    aria-label="Close modal"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Modal Body: Scrollable Content with Full Certificate Artwork */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
                {/* Title & Metadata Top Row */}
                <div>
                  <h3
                    id="cert-modal-title"
                    className="font-lobster text-2xl sm:text-4xl font-bold text-[#252321] mb-2 leading-tight"
                  >
                    {selectedCert.title}
                  </h3>

                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono font-bold text-[#702632]">
                    <span className="px-2.5 py-1 rounded-md bg-[#F6E7A8] border border-[#E4C868] flex items-center gap-1.5">
                      <Bookmark className="w-3.5 h-3.5 text-[#B52D3A]" />
                      <span>{selectedCert.issuer}</span>
                    </span>

                    <span className="px-2.5 py-1 rounded-md bg-[#FFF9EF] border border-[#E8DCC9] text-[#252321] flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-[#B52D3A]" />
                      <span>Awarded to: {selectedCert.recipientName}</span>
                    </span>

                    {selectedCert.details.credentialId && (
                      <span className="px-2 py-1 rounded-md bg-[#FFF9EF] border border-[#E8DCC9] text-[#625A53]">
                        ID: {selectedCert.details.credentialId}
                      </span>
                    )}

                    {selectedCert.details.userVerificationCode && (
                      <span className="px-2 py-1 rounded-md bg-[#FFF9EF] border border-[#E8DCC9] text-[#625A53]">
                        User Code: {selectedCert.details.userVerificationCode}
                      </span>
                    )}
                  </div>
                </div>

                {/* ORIGINAL CERTIFICATE ARTWORK VIEWER */}
                {selectedCert.imageUrl && (
                  <div className="rounded-2xl border-2 border-[#E8DCC9] bg-[#252321]/5 p-2 sm:p-4 overflow-hidden relative shadow-inner">
                    <div className="relative rounded-xl overflow-hidden bg-white shadow-md">
                      <img
                        src={selectedCert.imageUrl}
                        alt={`${selectedCert.title} - Full Certificate Artwork`}
                        className="w-full h-auto object-contain max-h-[55vh] mx-auto select-none"
                      />
                    </div>

                    {/* Preview Tools Bar */}
                    <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                      <div className="flex items-center gap-2 text-[#625A53]">
                        <span className="inline-block w-2 h-2 rounded-full bg-emerald-500" />
                        <span className="font-bold">Original Verified Artwork</span>
                      </div>

                      <div className="flex items-center gap-2">
                        {/* Download Original File Button */}
                        <button
                          onClick={() => handleDownloadOriginal(selectedCert)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#FFFDF9] border border-[#E8DCC9] hover:border-[#B52D3A] text-[#702632] hover:bg-[#F6E7A8] font-bold shadow-2xs transition-colors cursor-pointer"
                        >
                          <Download className="w-3.5 h-3.5 text-[#B52D3A]" />
                          <span>
                            {selectedCert.pdfUrl ? 'Download PDF' : 'Download Image'}
                          </span>
                        </button>

                        {/* Open in New Window */}
                        <a
                          href={selectedCert.pdfUrl || selectedCert.imageUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#B52D3A] text-white hover:bg-[#702632] font-bold shadow-2xs transition-colors cursor-pointer"
                        >
                          <span>Open Fullscreen</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  </div>
                )}

                {/* Core Highlight Box */}
                <div className="p-4 rounded-2xl bg-[#FFF9EF] border border-[#E8DCC9]">
                  <span className="font-mono text-[10px] font-bold text-[#B52D3A] uppercase tracking-wider block mb-1">
                    ✦ Core Achievement &amp; Impact
                  </span>
                  <p className="font-sans text-sm text-[#252321] font-medium leading-relaxed">
                    {selectedCert.keyTakeaway}
                  </p>
                </div>

                {/* Detailed Verified Breakdown */}
                <div className="space-y-4 pt-2 border-t border-[#E8DCC9] text-xs font-sans">
                  {/* Scope */}
                  <div>
                    <span className="font-mono font-bold text-[#702632] block mb-1 uppercase tracking-wider">
                      Scope &amp; Evaluation Format
                    </span>
                    <p className="text-[#625A53] text-sm leading-relaxed">
                      {selectedCert.details.scope}
                    </p>
                  </div>

                  {/* Skills Demonstrated */}
                  <div>
                    <span className="font-mono font-bold text-[#702632] block mb-2 uppercase tracking-wider">
                      Verified Competencies Demonstrated
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedCert.details.skillsDemonstrated.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-lg bg-[#FFFDF9] text-[#702632] font-mono text-xs font-bold border border-[#E8DCC9] shadow-2xs flex items-center gap-1.5"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#B52D3A]" />
                          <span>{skill}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Verification Method & Issuing Authority */}
                  <div>
                    <span className="font-mono font-bold text-[#702632] block mb-1 uppercase tracking-wider">
                      Issuing &amp; Verification Method
                    </span>
                    <p className="text-[#625A53] text-xs leading-relaxed">
                      {selectedCert.details.verificationMethod}
                    </p>
                  </div>
                </div>
              </div>

              {/* Modal Footer Actions Bar */}
              <div className="p-4 sm:p-6 border-t border-[#E8DCC9] bg-[#FFFDF9] flex flex-wrap items-center justify-between gap-3 shrink-0">
                <div className="flex items-center gap-2">
                  {/* Copy Citation */}
                  <button
                    onClick={() => handleCopyCitation(selectedCert)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#FFF9EF] border border-[#E8DCC9] hover:border-[#B52D3A] font-mono text-xs font-bold text-[#702632] cursor-pointer transition-colors"
                  >
                    {copiedId === selectedCert.id ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-600" />
                        <span>Copied Citation!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>Copy Citation</span>
                      </>
                    )}
                  </button>

                  {/* Genuine Verification URL if available */}
                  {selectedCert.details.verificationUrl && (
                    <a
                      href={selectedCert.details.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#FFF9EF] border border-[#E8DCC9] hover:border-[#B52D3A] font-mono text-xs font-bold text-[#702632] cursor-pointer transition-colors"
                    >
                      <span>Verify Online</span>
                      <ExternalLink className="w-3.5 h-3.5 text-[#B52D3A]" />
                    </a>
                  )}
                </div>

                <button
                  onClick={() => setSelectedCert(null)}
                  className="px-5 py-2.5 rounded-xl cherry-btn font-sans text-xs font-bold cursor-pointer"
                >
                  Close Dossier
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
