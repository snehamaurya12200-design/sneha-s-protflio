import React, { useState, useEffect, useRef } from 'react';
import {
  X,
  Download,
  Copy,
  Check,
  ExternalLink,
  MapPin,
  Mail,
  Linkedin,
  Github,
  GraduationCap,
  Sparkles,
  Trophy,
  ArrowUpRight,
  FolderOpen,
  FileText,
  Layers,
  Code,
  Printer,
  FileDown,
  Laptop,
  AlertCircle,
} from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { RESUME_DATA } from '../data/resumeData.ts';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const shouldReduceMotion = useReducedMotion();
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'dossier' | 'plain'>('dossier');
  const [showPdfNotice, setShowPdfNotice] = useState(false);
  const [isSavingPdf, setIsSavingPdf] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  // Lock body scroll when modal is open and handle Escape key
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopyPlainText = () => {
    const text = `SNEHA MAURYA
${RESUME_DATA.headline}
Location: ${RESUME_DATA.location}
Email: ${RESUME_DATA.email}
LinkedIn: ${RESUME_DATA.linkedinUrl}
GitHub: ${RESUME_DATA.githubUrl}

================================================================================
PROFESSIONAL SUMMARY
${RESUME_DATA.summary}

================================================================================
EDUCATION
${RESUME_DATA.education
  .map(
    (e) => `• ${e.degree}
  ${e.institution} | ${e.period}
  Location: ${e.location}
  ${e.highlights.map((h) => `  - ${h}`).join('\n')}`
  )
  .join('\n\n')}

================================================================================
SKILLS & COMPETENCIES
${RESUME_DATA.skills
  .map((cat) => `${cat.title.toUpperCase()} (${cat.subtitle}):\n  ${cat.skills.join(', ')}`)
  .join('\n\n')}

================================================================================
SELECTED PROJECTS
${RESUME_DATA.projects
  .map(
    (p) => `• ${p.title} [${p.statusBadge}]
  ${p.roleOrContext}
  ${p.liveUrl ? `Live: ${p.liveUrl}` : ''}
  Description: ${p.description}
  Key Contributions:
  ${p.keyContributions.map((c) => `  - ${c}`).join('\n')}
  Technologies: ${p.technologies.join(', ')}`
  )
  .join('\n\n')}

================================================================================
ACHIEVEMENTS & COMPETITIONS
${RESUME_DATA.achievements
  .map(
    (a) => `• ${a.title} (${a.year}) — ${a.organization}
  ${a.description}`
  )
  .join('\n\n')}

================================================================================
STARTUP EXPERIENCE
${RESUME_DATA.startupExperience?.role} — ${RESUME_DATA.startupExperience?.company} (${RESUME_DATA.startupExperience?.period})
${RESUME_DATA.startupExperience?.description}
${RESUME_DATA.startupExperience?.outcomes.map((o) => `- ${o}`).join('\n')}`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleDownloadCv = (e: React.MouseEvent) => {
    if (!RESUME_DATA.cvConfig.hasUploadedPdf) {
      e.preventDefault();
      setShowPdfNotice(true);
      setTimeout(() => setShowPdfNotice(false), 5500);
    }
  };

  const downloadPdfFile = async () => {
    const pdfPath = RESUME_DATA.cvConfig.pdfPath || '/Sneha-Maurya-CV.pdf';
    const fileName = RESUME_DATA.cvConfig.fileName || 'Sneha-Maurya-CV.pdf';

    try {
      // Fetch as blob to guarantee file download in modern browsers
      const response = await fetch(pdfPath);
      if (!response.ok) throw new Error('Fetch failed');
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setTimeout(() => window.URL.revokeObjectURL(blobUrl), 2000);
      return true;
    } catch {
      // Fallback: direct anchor trigger
      const link = document.createElement('a');
      link.href = pdfPath;
      link.download = fileName;
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      return true;
    }
  };

  const handleSaveAsPdf = async () => {
    setIsSavingPdf(true);
    await downloadPdfFile();
    setSaveSuccess(true);

    // Also attempt window.print() after download initiation for users wanting the print/PDF dialog
    setTimeout(() => {
      try {
        window.print();
      } catch (printErr) {
        console.warn('Print preview not supported in this frame:', printErr);
      }
      setIsSavingPdf(false);
    }, 400);

    setTimeout(() => {
      setSaveSuccess(false);
    }, 3500);
  };

  const handlePrintOnly = () => {
    try {
      window.print();
    } catch (err) {
      console.warn('Direct print failed, saving PDF instead:', err);
      handleSaveAsPdf();
    }
  };

  return (
    <div
      className="resume-modal-overlay fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#252321]/65 backdrop-blur-xs overflow-y-auto print:static print:inset-auto print:p-0 print:m-0 print:bg-white print:overflow-visible print:block print:w-full print:h-auto print:z-auto print:backdrop-filter-none"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="dossier-modal-title"
    >
      <motion.div
        ref={modalRef}
        initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95, y: 16 }}
        animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
        exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95, y: 16 }}
        transition={{ duration: 0.22, ease: 'easeOut' }}
        onClick={(e) => e.stopPropagation()}
        className="resume-modal-card relative w-full max-w-5xl bg-[#FFFDF9] rounded-[28px] sm:rounded-3xl border-3 border-[#E8DCC9] shadow-2xl flex flex-col max-h-[92vh] overflow-hidden text-[#252321] paper-sketchbook my-auto print:static print:max-h-none print:w-full print:max-w-none print:border-none print:shadow-none print:rounded-none print:overflow-visible print:bg-white print:m-0 print:p-0 print:block"
      >
        {/* =====================================================================
            1. HEADER / FOLDER TAB (Dossier Jacket)
           ===================================================================== */}
        <div className="bg-[#FFF9EF] border-b-2 border-[#E8DCC9] px-5 sm:px-8 py-4 flex flex-wrap items-center justify-between gap-4 sticky top-0 z-30 shadow-xs print:hidden">
          
          {/* Left Folder Tab Branding */}
          <div className="flex items-center gap-3">
            {/* Red Folder Tab with 8-bit Cherry */}
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#B52D3A] text-[#FFF9EF] border border-[#702632] shadow-xs">
              <FolderOpen className="w-4 h-4 text-[#F6E7A8]" />
              <span className="font-mono text-xs font-black tracking-wider uppercase">
                THE SNEHA DOSSIER
              </span>
            </div>

            <div className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#F6E7A8] text-[#702632] border border-[#E4C868] text-[11px] font-mono font-bold">
              <span>MCA · 2027 CANDIDATE</span>
            </div>

            <span className="hidden md:inline-block font-handwriting text-sm text-[#702632]">
              ~ personal designer resume file 📂
            </span>
          </div>

          {/* Right Action Utilities & Close */}
          <div className="flex items-center gap-2">
            {/* Tab Switcher: Visual Dossier vs Plain Text */}
            <div className="inline-flex p-1 bg-white rounded-xl border border-[#E8DCC9] shadow-2xs">
              <button
                onClick={() => setActiveTab('dossier')}
                className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                  activeTab === 'dossier'
                    ? 'bg-[#B52D3A] text-white shadow-xs'
                    : 'text-[#625A53] hover:text-[#252321]'
                }`}
              >
                Dossier
              </button>
              <button
                onClick={() => setActiveTab('plain')}
                className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                  activeTab === 'plain'
                    ? 'bg-[#B52D3A] text-white shadow-xs'
                    : 'text-[#625A53] hover:text-[#252321]'
                }`}
              >
                ATS Text
              </button>
            </div>

            {/* Save as PDF button */}
            <button
              onClick={handleSaveAsPdf}
              title="Save official CV as PDF file"
              disabled={isSavingPdf}
              className={`hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-mono text-xs font-bold border transition-all cursor-pointer shadow-2xs ${
                saveSuccess
                  ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                  : 'bg-white hover:bg-[#F6E7A8]/50 text-[#702632] border-[#E8DCC9]'
              }`}
            >
              {isSavingPdf ? (
                <>
                  <Download className="w-3.5 h-3.5 text-[#B52D3A] animate-bounce" />
                  <span>Saving...</span>
                </>
              ) : saveSuccess ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>PDF Saved!</span>
                </>
              ) : (
                <>
                  <Download className="w-3.5 h-3.5 text-[#B52D3A]" />
                  <span>Save as PDF</span>
                </>
              )}
            </button>

            {/* Print button */}
            <button
              onClick={handlePrintOnly}
              title="Print this resume document"
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white hover:bg-[#F6E7A8]/50 text-[#702632] font-mono text-xs font-bold border border-[#E8DCC9] transition-colors cursor-pointer shadow-2xs"
            >
              <Printer className="w-3.5 h-3.5 text-[#B52D3A]" />
              <span>Print</span>
            </button>

            {/* Quick Copy Plain Text */}
            <button
              onClick={handleCopyPlainText}
              title="Copy plain-text resume for job applications"
              className="p-2 rounded-xl bg-white hover:bg-[#F6E7A8]/50 text-[#702632] border border-[#E8DCC9] transition-colors cursor-pointer"
              aria-label="Copy resume plain text"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
            </button>

            {/* Close Modal Button */}
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-xl bg-white hover:bg-[#F6E7A8] text-[#252321] hover:text-[#B52D3A] border border-[#E8DCC9] flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close resume dossier"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

        </div>

        {/* Notice Banner when PDF is pending */}
        <AnimatePresence>
          {showPdfNotice && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="bg-[#FFF9DA] border-b border-[#E4C868] px-6 py-2.5 flex items-center justify-between gap-3 text-xs font-sans text-[#702632] overflow-hidden print:hidden"
            >
              <div className="flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-[#B52D3A] shrink-0" />
                <span className="font-medium">{RESUME_DATA.cvConfig.pendingMessage}</span>
              </div>
              <button
                onClick={() => setShowPdfNotice(false)}
                className="font-mono text-xs font-bold text-[#B52D3A] underline cursor-pointer shrink-0"
              >
                Dismiss
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* =====================================================================
            2. SCROLLABLE MAIN CONTENT
           ===================================================================== */}
        <div
          id="resume-printable-area"
          className="p-5 sm:p-8 lg:p-10 overflow-y-auto space-y-8 flex-1 print:p-0 print:m-0 print:overflow-visible print:bg-white print:text-black print:max-h-none print:block print:static"
        >
          {activeTab === 'dossier' ? (
            <>
              {/* Profile Dossier Header Card */}
              <div className="relative p-6 sm:p-8 rounded-3xl bg-[#FFF9EF] border-2 border-[#E8DCC9] shadow-xs">
                
                {/* Washi Tape Corner Accent */}
                <div
                  className="absolute -top-3 left-8 h-5 w-24 washi-torn-h pointer-events-none opacity-80"
                  style={{
                    backgroundColor: '#F6E7A8',
                    borderTop: '1px solid #E4C868',
                    borderBottom: '1px solid #E4C868',
                  }}
                />

                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFFDF9] border border-[#E8DCC9] text-xs font-mono font-bold text-[#702632] mb-2.5">
                      <span className="w-2 h-2 rounded-full bg-[#B52D3A]" />
                      <span>{RESUME_DATA.headline}</span>
                    </div>

                    <h2 id="dossier-modal-title" className="font-lobster text-3xl sm:text-5xl text-[#252321] font-bold">
                      {RESUME_DATA.name}
                    </h2>

                    <p className="font-sans text-xs sm:text-sm text-[#625A53] mt-2 max-w-2xl leading-relaxed">
                      {RESUME_DATA.summary}
                    </p>
                  </div>

                  {/* Compact Verified Contact Strip */}
                  <div className="flex flex-col gap-2 font-mono text-xs text-[#625A53] w-full lg:w-auto shrink-0 border-t lg:border-t-0 lg:border-l border-[#E8DCC9] pt-4 lg:pt-0 lg:pl-6">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#B52D3A] shrink-0" />
                      <span className="font-semibold text-[#252321]">{RESUME_DATA.location}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-[#B52D3A] shrink-0" />
                      <a
                        href={`mailto:${RESUME_DATA.email}`}
                        className="text-[#702632] font-semibold hover:text-[#B52D3A] hover:underline"
                      >
                        {RESUME_DATA.email}
                      </a>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 pt-2 mt-1 border-t border-[#E8DCC9]/80 font-bold">
                      <a
                        href={RESUME_DATA.linkedinUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-1 text-[#702632] hover:text-[#B52D3A] hover:underline"
                      >
                        <Linkedin className="w-3.5 h-3.5 text-[#B52D3A]" />
                        <span>LinkedIn ↗</span>
                      </a>
                      <span>·</span>
                      <a
                        href={RESUME_DATA.githubUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-1 text-[#702632] hover:text-[#B52D3A] hover:underline"
                      >
                        <Github className="w-3.5 h-3.5 text-[#B52D3A]" />
                        <span>GitHub ↗</span>
                      </a>
                    </div>
                  </div>
                </div>

              </div>

              {/* 2-Column Responsive Dossier Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* =============================================================
                    LEFT COLUMN: Education & Categorized Skills (5 cols)
                   ============================================================= */}
                <div className="lg:col-span-5 space-y-6">
                  
                  {/* EDUCATION SECTION */}
                  <div className="p-6 rounded-3xl bg-[#FFFDF9] border-2 border-[#E8DCC9] shadow-xs">
                    <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#702632] uppercase mb-4 tracking-wider pb-2 border-b border-[#E8DCC9]">
                      <GraduationCap className="w-4 h-4 text-[#B52D3A]" />
                      <span>EDUCATION</span>
                    </div>

                    <div className="space-y-5">
                      {RESUME_DATA.education.map((edu, idx) => (
                        <div key={idx} className="border-l-3 border-[#B52D3A] pl-3.5">
                          <h3 className="font-sans text-sm font-bold text-[#252321] leading-snug">
                            {edu.degree}
                          </h3>
                          <div className="font-mono text-xs font-semibold text-[#702632] mt-0.5">
                            {edu.institution}
                          </div>
                          <div className="font-mono text-[11px] text-[#625A53] mt-0.5">
                            {edu.period} · {edu.location}
                          </div>
                          <ul className="mt-2 space-y-1">
                            {edu.highlights.map((h, hIdx) => (
                              <li
                                key={hIdx}
                                className="font-sans text-xs text-[#625A53] flex items-start gap-1.5 leading-relaxed"
                              >
                                <span className="text-[#B52D3A] shrink-0 mt-0.5">›</span>
                                <span>{h}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* SKILLS SECTION (Categorized) */}
                  <div className="p-6 rounded-3xl bg-[#FFFDF9] border-2 border-[#E8DCC9] shadow-xs">
                    <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#702632] uppercase mb-4 tracking-wider pb-2 border-b border-[#E8DCC9]">
                      <Layers className="w-4 h-4 text-[#B52D3A]" />
                      <span>CATEGORIZED SKILLS</span>
                    </div>

                    <div className="space-y-4">
                      {RESUME_DATA.skills.map((cat, idx) => (
                        <div key={idx} className="p-3.5 rounded-2xl bg-[#FFF9EF] border border-[#E8DCC9]">
                          <div className="flex items-center justify-between gap-2 mb-1.5">
                            <h4 className="font-mono text-xs font-bold text-[#702632] uppercase">
                              {cat.title}
                            </h4>
                          </div>
                          <div className="flex flex-wrap gap-1.5 mt-2">
                            {cat.skills.map((skill, sIdx) => (
                              <span
                                key={sIdx}
                                className="px-2 py-0.5 rounded-md bg-[#FFFDF9] text-[#252321] font-mono text-[11px] font-medium border border-[#E8DCC9]"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

                {/* =============================================================
                    RIGHT COLUMN: Selected Projects & Achievements (7 cols)
                   ============================================================= */}
                <div className="lg:col-span-7 space-y-6">
                  
                  {/* SELECTED PROJECTS SECTION */}
                  <div className="p-6 sm:p-7 rounded-3xl bg-[#FFFDF9] border-2 border-[#E8DCC9] shadow-xs">
                    <div className="flex items-center justify-between gap-2 font-mono text-xs font-bold text-[#702632] uppercase mb-5 tracking-wider pb-2 border-b border-[#E8DCC9]">
                      <div className="flex items-center gap-2">
                        <Laptop className="w-4 h-4 text-[#B52D3A]" />
                        <span>SELECTED PROJECTS &amp; CODE</span>
                      </div>
                      <span className="text-[11px] text-[#625A53]">verified work</span>
                    </div>

                    <div className="space-y-5">
                      {RESUME_DATA.projects.map((proj) => (
                        <div
                          key={proj.id}
                          className="p-4 sm:p-5 rounded-2xl bg-[#FFF9EF] border border-[#E8DCC9] hover:border-[#B52D3A] transition-colors"
                        >
                          <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                            <h3 className="font-sans text-base font-bold text-[#252321]">
                              {proj.title}
                            </h3>
                            <span className="px-2.5 py-0.5 rounded-full bg-[#F6E7A8] text-[#702632] font-mono text-[10px] font-bold border border-[#E4C868]">
                              {proj.statusBadge}
                            </span>
                          </div>

                          <div className="font-mono text-xs text-[#702632] font-semibold mb-2">
                            {proj.roleOrContext}
                          </div>

                          <p className="font-sans text-xs sm:text-sm text-[#625A53] leading-relaxed mb-3">
                            {proj.description}
                          </p>

                          {/* Tech Pills */}
                          <div className="flex flex-wrap gap-1 mb-3">
                            {proj.technologies.map((t, tIdx) => (
                              <span
                                key={tIdx}
                                className="px-2 py-0.5 rounded-md bg-[#FFFDF9] text-[#702632] font-mono text-[10px] font-semibold border border-[#E8DCC9]"
                              >
                                {t}
                              </span>
                            ))}
                          </div>

                          {/* Live Project Link */}
                          {proj.liveUrl && (
                            <div className="pt-2 border-t border-[#E8DCC9]/70 flex items-center justify-end">
                              <a
                                href={proj.liveUrl}
                                target="_blank"
                                rel="noreferrer noopener"
                                className="inline-flex items-center gap-1 font-mono text-xs font-bold text-[#B52D3A] hover:underline"
                              >
                                <span>Launch Live Project</span>
                                <ArrowUpRight className="w-3.5 h-3.5" />
                              </a>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* STARTUP EXPERIENCE (StuMate MVP) */}
                  {RESUME_DATA.startupExperience && (
                    <div className="p-6 rounded-3xl bg-[#FFFDF9] border-2 border-[#E8DCC9] shadow-xs">
                      <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#702632] uppercase mb-4 tracking-wider pb-2 border-b border-[#E8DCC9]">
                        <Sparkles className="w-4 h-4 text-[#B52D3A]" />
                        <span>STARTUP TEAM EXPERIENCE</span>
                      </div>

                      <div className="p-4 rounded-2xl bg-[#FFF9EF] border border-[#E8DCC9]">
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                          <h3 className="font-sans text-sm font-bold text-[#252321]">
                            {RESUME_DATA.startupExperience.role}
                          </h3>
                          <span className="font-mono text-xs font-semibold text-[#702632]">
                            {RESUME_DATA.startupExperience.period}
                          </span>
                        </div>
                        <div className="font-mono text-xs font-bold text-[#B52D3A] mb-2">
                          {RESUME_DATA.startupExperience.company} · MVP Launch
                        </div>
                        <p className="font-sans text-xs text-[#625A53] leading-relaxed mb-3">
                          {RESUME_DATA.startupExperience.description}
                        </p>
                        <ul className="space-y-1">
                          {RESUME_DATA.startupExperience.outcomes.map((out, oIdx) => (
                            <li
                              key={oIdx}
                              className="font-sans text-xs text-[#625A53] flex items-start gap-1.5 leading-relaxed"
                            >
                              <span className="text-[#B52D3A] shrink-0 mt-0.5">✓</span>
                              <span>{out}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {/* ACHIEVEMENTS & COMPETITIONS */}
                  <div className="p-6 rounded-3xl bg-[#FFFDF9] border-2 border-[#E8DCC9] shadow-xs">
                    <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#702632] uppercase mb-4 tracking-wider pb-2 border-b border-[#E8DCC9]">
                      <Trophy className="w-4 h-4 text-[#B52D3A]" />
                      <span>HONORS &amp; COMPETITIONS</span>
                    </div>

                    <div className="space-y-3">
                      {RESUME_DATA.achievements.map((ach, idx) => (
                        <div
                          key={idx}
                          className="p-3.5 rounded-2xl bg-[#FFF9EF] border border-[#E8DCC9] flex items-start gap-3"
                        >
                          <span className="text-[#B52D3A] font-bold text-sm mt-0.5">★</span>
                          <div>
                            <div className="flex flex-wrap items-center gap-2">
                              <h4 className="font-sans text-xs sm:text-sm font-bold text-[#252321]">
                                {ach.title}
                              </h4>
                              <span className="px-2 py-0.5 rounded-md bg-[#F6E7A8] text-[#702632] font-mono text-[10px] font-bold">
                                {ach.badge}
                              </span>
                            </div>
                            <div className="font-mono text-[11px] text-[#702632] mt-0.5">
                              {ach.organization} · {ach.year}
                            </div>
                            <p className="font-sans text-xs text-[#625A53] mt-1 leading-relaxed">
                              {ach.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

              </div>
            </>
          ) : (
            /* ATS Plain Text Scannable View */
            <div className="p-6 sm:p-8 rounded-3xl bg-white border-2 border-[#E8DCC9] font-mono text-xs leading-relaxed text-[#252321] select-all whitespace-pre-wrap shadow-inner">
              {`SNEHA MAURYA
${RESUME_DATA.headline}
Location: ${RESUME_DATA.location}
Email: ${RESUME_DATA.email}
LinkedIn: ${RESUME_DATA.linkedinUrl}
GitHub: ${RESUME_DATA.githubUrl}

--------------------------------------------------------------------------------
PROFESSIONAL SUMMARY
${RESUME_DATA.summary}

--------------------------------------------------------------------------------
EDUCATION
${RESUME_DATA.education
  .map(
    (e) => `• ${e.degree}
  ${e.institution} | ${e.period}
  Location: ${e.location}
  ${e.highlights.map((h) => `  - ${h}`).join('\n')}`
  )
  .join('\n\n')}

--------------------------------------------------------------------------------
SKILLS & COMPETENCIES
${RESUME_DATA.skills
  .map((cat) => `${cat.title.toUpperCase()}:\n  ${cat.skills.join(', ')}`)
  .join('\n\n')}

--------------------------------------------------------------------------------
SELECTED PROJECTS
${RESUME_DATA.projects
  .map(
    (p) => `1. ${p.title} (${p.statusBadge})
   Context: ${p.roleOrContext}
   ${p.liveUrl ? `Live URL: ${p.liveUrl}` : ''}
   Description: ${p.description}
   Contributions:
   ${p.keyContributions.map((c) => `   - ${c}`).join('\n')}
   Tech Stack: ${p.technologies.join(', ')}`
  )
  .join('\n\n')}

--------------------------------------------------------------------------------
HONORS & ACHIEVEMENTS
${RESUME_DATA.achievements
  .map((a) => `• ${a.title} (${a.year})\n  ${a.organization} — ${a.description}`)
  .join('\n\n')}

--------------------------------------------------------------------------------
STARTUP EXPERIENCE
• ${RESUME_DATA.startupExperience?.role} | ${RESUME_DATA.startupExperience?.company} (${RESUME_DATA.startupExperience?.period})
  ${RESUME_DATA.startupExperience?.description}
  ${RESUME_DATA.startupExperience?.outcomes.map((o) => `  - ${o}`).join('\n')}`}
            </div>
          )}
        </div>

        {/* =====================================================================
            3. FOOTER ACTION BAR
           ===================================================================== */}
        <div className="px-5 sm:px-8 py-4 border-t-2 border-[#E8DCC9] bg-[#FFF9EF] flex flex-wrap items-center justify-between gap-4 sticky bottom-0 z-30 print:hidden">
          
          {/* Status Note on Left */}
          <div className="flex items-center gap-2 font-mono text-xs text-[#625A53]">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-bold text-[#252321]">OPEN FOR INTERNSHIPS</span>
            <span className="hidden sm:inline">· Product Design &amp; UI/UX</span>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-2.5">
            {/* View LinkedIn */}
            <a
              href={RESUME_DATA.linkedinUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="px-3.5 py-2 rounded-xl bg-white hover:bg-[#F6E7A8]/50 text-[#702632] font-mono text-xs font-bold border border-[#E8DCC9] transition-colors cursor-pointer inline-flex items-center gap-1.5"
            >
              <Linkedin className="w-3.5 h-3.5 text-[#B52D3A]" />
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
            </a>

            {/* View GitHub */}
            <a
              href={RESUME_DATA.githubUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="px-3.5 py-2 rounded-xl bg-white hover:bg-[#F6E7A8]/50 text-[#702632] font-mono text-xs font-bold border border-[#E8DCC9] transition-colors cursor-pointer inline-flex items-center gap-1.5"
            >
              <Github className="w-3.5 h-3.5 text-[#B52D3A]" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
            </a>

            {/* Download CV Action */}
            {RESUME_DATA.cvConfig.hasUploadedPdf ? (
              <a
                href={RESUME_DATA.cvConfig.pdfPath}
                download={RESUME_DATA.cvConfig.fileName}
                className="px-4 py-2 rounded-xl cherry-btn font-mono text-xs font-bold transition-all cursor-pointer shadow-sm inline-flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download CV</span>
              </a>
            ) : (
              <button
                onClick={handleDownloadCv}
                title={RESUME_DATA.cvConfig.pendingMessage}
                className="px-4 py-2 rounded-xl bg-[#FFFDF9] hover:bg-[#F6E7A8] text-[#702632] hover:text-[#B52D3A] font-mono text-xs font-bold border border-[#E8DCC9] hover:border-[#B52D3A] transition-all cursor-pointer shadow-2xs inline-flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5 text-[#B52D3A]" />
                <span>Download CV (PDF Pending)</span>
              </button>
            )}

            {/* Save as PDF / Print Action */}
            <button
              onClick={handleSaveAsPdf}
              title="Save this resume directly as a clean PDF or print"
              disabled={isSavingPdf}
              className={`px-4 py-2 rounded-xl font-mono text-xs font-bold border transition-all cursor-pointer shadow-2xs inline-flex items-center gap-1.5 ${
                saveSuccess
                  ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                  : 'bg-white hover:bg-[#F6E7A8] text-[#702632] hover:text-[#B52D3A] border-[#E8DCC9] hover:border-[#B52D3A]'
              }`}
            >
              {isSavingPdf ? (
                <>
                  <Download className="w-3.5 h-3.5 text-[#B52D3A] animate-bounce" />
                  <span>Saving PDF...</span>
                </>
              ) : saveSuccess ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>PDF Saved!</span>
                </>
              ) : (
                <>
                  <Printer className="w-3.5 h-3.5 text-[#B52D3A]" />
                  <span>Save as PDF / Print</span>
                </>
              )}
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-[#FFF9EF] hover:bg-[#EAE0D0] text-[#252321] font-mono text-xs font-bold border border-[#E8DCC9] transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>

        </div>

      </motion.div>
    </div>
  );
};
