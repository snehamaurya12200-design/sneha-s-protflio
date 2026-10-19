import React, { useState, useEffect } from 'react';
import {
  X,
  Sparkles,
  Award,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  BookOpen,
  ArrowUpRight,
  TrendingUp,
  Megaphone,
  Layers,
  Copy,
  Check,
} from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { MARKETING_DATA, MarketingCertificate } from '../data/marketingData.ts';

interface MarketingCertificatesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MarketingCertificatesModal: React.FC<MarketingCertificatesModalProps> = ({
  isOpen,
  onClose,
}) => {
  const shouldReduceMotion = useReducedMotion();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedCert, setSelectedCert] = useState<MarketingCertificate | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Lock body scroll and handle Escape key
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (selectedCert) {
          setSelectedCert(null);
        } else {
          onClose();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, selectedCert]);

  if (!isOpen) return null;

  const handleCopyCitation = (cert: MarketingCertificate) => {
    const text = `${cert.title} — ${cert.issuer} (${cert.year}) [ID: ${cert.credentialId || 'Verified'}]`;
    navigator.clipboard.writeText(text);
    setCopiedId(cert.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredCerts =
    activeCategory === 'all'
      ? MARKETING_DATA.certificates
      : MARKETING_DATA.certificates.filter((c) => c.category === activeCategory);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#252321]/65 backdrop-blur-xs overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="marketing-modal-title"
    >
      <motion.div
        initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95, y: 16 }}
        animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
        exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95, y: 16 }}
        transition={{ duration: 0.22, ease: 'easeOut' }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl bg-[#FFFDF9] rounded-[28px] sm:rounded-3xl border-3 border-[#E8DCC9] shadow-2xl flex flex-col max-h-[90vh] overflow-hidden text-[#252321] paper-sketchbook my-auto"
      >
        {/* =====================================================================
            1. MODAL HEADER & SCRAPBOOK TAB
           ===================================================================== */}
        <div className="bg-[#FFF9EF] border-b-2 border-[#E8DCC9] px-6 sm:px-8 py-5 flex items-center justify-between gap-4 sticky top-0 z-20 shadow-xs">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-3 py-1 rounded-full bg-[#B52D3A] text-[#FFF9EF] font-mono text-[11px] font-bold tracking-wider uppercase flex items-center gap-1.5 shadow-2xs">
                <Megaphone className="w-3.5 h-3.5 text-[#F6E7A8]" />
                <span>WORLD 03 SIDE QUEST</span>
              </span>
              <span className="font-handwriting text-sm text-[#702632] font-bold hidden sm:inline">
                ~ audience psychology &amp; reach 📣
              </span>
            </div>

            <h2 id="marketing-modal-title" className="font-lobster text-2xl sm:text-4xl text-[#252321] font-bold">
              {MARKETING_DATA.title}
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#625A53] mt-0.5 max-w-xl">
              {MARKETING_DATA.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-2xl bg-white hover:bg-[#F6E7A8] text-[#252321] hover:text-[#B52D3A] border-2 border-[#E8DCC9] flex items-center justify-center transition-colors cursor-pointer shrink-0"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* =====================================================================
            2. SCROLLABLE CONTENT BODY
           ===================================================================== */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1">
          
          {/* Editorial Rationale Banner: Why Marketing Matters to Design */}
          <div className="p-5 sm:p-6 rounded-3xl bg-[#FFF9EF] border-2 border-[#E8DCC9] shadow-xs relative overflow-hidden">
            <div
              className="absolute -top-2.5 left-8 h-5 w-24 washi-torn-h pointer-events-none opacity-80"
              style={{
                backgroundColor: '#F6E7A8',
                borderTop: '1px solid #E4C868',
                borderBottom: '1px solid #E4C868',
              }}
            />
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#FFFDF9] border-2 border-[#B52D3A]/30 flex items-center justify-center text-[#B52D3A] shrink-0">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-sans font-bold text-sm sm:text-base text-[#252321]">
                  Why a Product Designer Explores Marketing &amp; Audience Strategy
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#625A53] mt-1 leading-relaxed">
                  {MARKETING_DATA.whyMarketingMattersForDesign}
                </p>
              </div>
            </div>
          </div>

          {/* Certificate Category Filter Tabs (Ready for future expansion) */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'all', label: `All Credentials (${MARKETING_DATA.certificates.length})` },
                { id: 'digital-marketing', label: 'Growth & Positioning' },
                { id: 'social-media', label: 'Content & Social' },
                { id: 'seo-content', label: 'SEO & Organic' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`px-3 py-1.5 rounded-xl font-mono text-xs font-bold transition-all cursor-pointer border ${
                    activeCategory === tab.id
                      ? 'bg-[#B52D3A] text-white border-[#702632] shadow-xs'
                      : 'bg-[#FFFDF9] text-[#625A53] border-[#E8DCC9] hover:bg-[#F6E7A8]/50 hover:text-[#252321]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <span className="font-mono text-xs text-[#702632] font-semibold">
              Verified Learning Log
            </span>
          </div>

          {/* Certificates Grid */}
          <div className="space-y-4">
            {filteredCerts.length > 0 ? (
              filteredCerts.map((cert) => (
                <div
                  key={cert.id}
                  className="p-6 rounded-3xl bg-[#FFFDF9] border-2 border-[#E8DCC9] hover:border-[#B52D3A] transition-all duration-200 shadow-sm relative group"
                >
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F6E7A8] text-[#702632] font-mono text-xs font-bold border border-[#E4C868]">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#B52D3A]" />
                        <span>{cert.badge}</span>
                      </span>
                      {cert.credentialId && (
                        <span className="px-2.5 py-0.5 rounded-md bg-[#FFF9EF] text-[#625A53] font-mono text-[11px] border border-[#E8DCC9]">
                          ID: {cert.credentialId}
                        </span>
                      )}
                    </div>
                    <span className="font-mono text-xs font-bold text-[#625A53]">
                      Year: {cert.year}
                    </span>
                  </div>

                  <h3 className="font-sans font-bold text-xl text-[#252321] group-hover:text-[#B52D3A] transition-colors mb-1">
                    {cert.title}
                  </h3>
                  <div className="font-mono text-xs font-bold text-[#702632] mb-3">
                    {cert.issuer}
                  </div>

                  <p className="font-sans text-xs sm:text-sm text-[#625A53] leading-relaxed mb-4">
                    {cert.description}
                  </p>

                  {/* Skills Learned Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {cert.skillsLearned.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 rounded-lg bg-[#FFF9EF] text-[#702632] font-mono text-[11px] font-bold border border-[#E8DCC9]"
                      >
                        ✓ {skill}
                      </span>
                    ))}
                  </div>

                  {/* Bottom Action Row */}
                  <div className="pt-4 border-t border-[#E8DCC9] flex flex-wrap items-center justify-between gap-3">
                    <div className="font-sans text-xs text-[#625A53] italic max-w-md">
                      &ldquo;{cert.keyTakeaway}&rdquo;
                    </div>

                    <button
                      onClick={() => handleCopyCitation(cert)}
                      className="px-4 py-2 rounded-xl bg-[#FFF9EF] hover:bg-[#F6E7A8] text-[#702632] font-mono text-xs font-bold border border-[#E8DCC9] transition-colors cursor-pointer inline-flex items-center gap-1.5"
                    >
                      {copiedId === cert.id ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Copied Citation!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-[#B52D3A]" />
                          <span>Copy Citation</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-8 rounded-3xl bg-[#FFF9EF] border-2 border-dashed border-[#E8DCC9] text-center">
                <BookOpen className="w-8 h-8 text-[#B52D3A] mx-auto mb-2 opacity-60" />
                <h4 className="font-sans font-bold text-sm text-[#252321]">
                  Upcoming Marketing Credentials in Progress
                </h4>
                <p className="font-sans text-xs text-[#625A53] max-w-md mx-auto mt-1">
                  Certificates in this subcategory are currently being assembled and documented. Check back soon or view the general Digital Marketing credential!
                </p>
              </div>
            )}
          </div>

          {/* Honest Growth State Banner */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#FFFDF9] border border-[#E8DCC9] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-[#625A53]">
            <div className="flex items-center gap-3">
              <span className="text-xl select-none">🌱</span>
              <div>
                <strong className="text-[#252321] block">Continuous Learning Pipeline</strong>
                <span>New coursework in SEO heuristics and growth loops is in progress. Have marketing book recommendations? Let Sneha know!</span>
              </div>
            </div>
            <a
              href="#contact"
              onClick={onClose}
              className="px-4 py-2 rounded-xl cherry-btn font-mono text-xs font-bold text-white shrink-0 cursor-pointer"
            >
              Share Thoughts ↗
            </a>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="bg-[#FFF9EF] border-t-2 border-[#E8DCC9] px-6 py-4 flex items-center justify-between">
          <span className="font-mono text-xs text-[#625A53]">
            100% Honest Credentials · Verified Learning
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-white hover:bg-[#F6E7A8] text-[#252321] font-mono text-xs font-bold border border-[#E8DCC9] transition-colors cursor-pointer"
          >
            Close Window
          </button>
        </div>
      </motion.div>
    </div>
  );
};
