import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import {
  X,
  ExternalLink,
  Github,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Copy,
  Check,
  Target,
  Layers,
  Award,
  Clock,
  Compass,
} from 'lucide-react';
import { ProjectDetail, PROJECTS_DATA } from '../data/projectsData.ts';
import { ProjectLivePreview } from './ProjectLivePreview.tsx';
import { Sticker } from './Sticker.tsx';
import { GlossyCherries, HolographicStar } from './CollageElements.tsx';
import {
  DoodleStar,
  DoodleSparkle,
  DoodleCherries,
} from './ScrapbookDoodles.tsx';

interface ProjectDetailModalProps {
  project: ProjectDetail | null;
  onClose: () => void;
  onSelectProject: (project: ProjectDetail) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onSelectProject,
}) => {
  const shouldReduceMotion = useReducedMotion();
  const [copiedLink, setCopiedLink] = useState(false);
  const modalContentRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousActiveElementRef = useRef<HTMLElement | null>(null);

  // Focus management & body scroll lock
  useEffect(() => {
    if (project) {
      previousActiveElementRef.current = document.activeElement as HTMLElement;
      // Prevent background scrolling
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      // Focus close button or modal container
      setTimeout(() => {
        if (closeButtonRef.current) {
          closeButtonRef.current.focus();
        } else if (modalContentRef.current) {
          modalContentRef.current.focus();
        }
      }, 50);

      return () => {
        document.body.style.overflow = originalOverflow;
        if (previousActiveElementRef.current && typeof previousActiveElementRef.current.focus === 'function') {
          previousActiveElementRef.current.focus();
        }
      };
    }
  }, [project]);

  // Escape key listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [project, onClose]);

  // Reset scroll position when switching between projects
  useEffect(() => {
    if (modalContentRef.current) {
      modalContentRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [project?.id]);

  if (!project) return null;

  // Previous and next projects for quick carousel switching
  const currentIndex = PROJECTS_DATA.findIndex((p) => p.id === project.id);
  const prevProject =
    currentIndex > 0 ? PROJECTS_DATA[currentIndex - 1] : PROJECTS_DATA[PROJECTS_DATA.length - 1];
  const nextProject =
    currentIndex < PROJECTS_DATA.length - 1 ? PROJECTS_DATA[currentIndex + 1] : PROJECTS_DATA[0];

  const handleCopyShareLink = (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      const url = new URL(window.location.href);
      url.searchParams.set('project', project.id);
      navigator.clipboard.writeText(url.toString());
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    } catch {
      // fallback
    }
  };

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8 bg-[#252321]/65 backdrop-blur-xs overflow-y-auto"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        aria-describedby="project-modal-description"
      >
        <motion.div
          ref={modalContentRef}
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95, y: 16 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
          tabIndex={-1}
          className="relative w-full max-w-5xl max-h-[92vh] flex flex-col bg-[#FFFDF9] rounded-3xl sm:rounded-[36px] border-2 sm:border-3 border-[#252321] paper-note-shadow text-[#252321] overflow-hidden my-auto outline-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* ===================================================================
              SCRAPBOOK TOP WASHI STRIP & HEADER BAR
             =================================================================== */}
          <div
            className="h-3.5 shrink-0"
            style={{
              background:
                'repeating-linear-gradient(45deg, #B52D3A, #B52D3A 8px, #FCE7EB 8px, #FCE7EB 16px)',
              borderBottom: '1px solid rgba(112, 38, 50, 0.2)',
            }}
          />

          <div className="flex items-center justify-between px-5 sm:px-8 py-3.5 border-b-2 border-[#E8DCC9] bg-[#FFFDF9] shrink-0 gap-3">
            {/* Left: Eyebrow + Project Index Indicator */}
            <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider bg-[#F6E7A8] text-[#702632] border border-[#E4C868]">
                <Sparkles className="w-3.5 h-3.5 text-[#B52D3A]" />
                <span>{project.badge}</span>
              </span>

              <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-mono text-[#625A53] bg-white px-2.5 py-0.5 rounded-full border border-[#E8DCC9] font-bold">
                PROJECT {currentIndex + 1} OF {PROJECTS_DATA.length}
              </span>
            </div>

            {/* Right: Actions (Share URL + Close) */}
            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={handleCopyShareLink}
                title="Copy shareable project link"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white hover:bg-[#F6E7A8]/50 text-[#702632] border border-[#E8DCC9] text-xs font-mono font-bold transition-colors cursor-pointer shadow-2xs"
              >
                {copiedLink ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-700" />
                    <span className="text-emerald-800">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#B52D3A]" />
                    <span className="hidden xs:inline">Share</span>
                  </>
                )}
              </button>

              <button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                aria-label="Close project modal"
                className="w-9 h-9 rounded-full bg-white hover:bg-[#F6E7A8] border border-[#252321] flex items-center justify-center text-[#252321] hover:text-[#B52D3A] transition-colors cursor-pointer shadow-xs focus:ring-2 focus:ring-[#B52D3A]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* ===================================================================
              SCROLLABLE MODAL BODY
             =================================================================== */}
          <div className="overflow-y-auto px-5 sm:px-8 lg:px-10 py-6 sm:py-8 space-y-8 sm:space-y-10 custom-scrollbar">
            
            {/* =================================================================
                SECTION 1: HERO OVERVIEW & INTERFACE PREVIEW (NEAR THE TOP)
                Spacious 2-column layout on desktop, stacked on mobile
               ================================================================= */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column (Desktop 7 cols): Title, Category, Role, Overview, Buttons */}
              <div className="lg:col-span-7 flex flex-col items-start justify-start">
                
                {/* 1. Category & Track */}
                <div className="flex flex-wrap items-center gap-2 mb-2.5">
                  <span className="px-3 py-0.5 rounded-md text-xs font-mono font-bold bg-[#FFF0A8] text-[#702632] border border-[#E4C868]">
                    {project.category}
                  </span>
                  <span className="text-xs font-mono text-[#625A53] bg-white px-2.5 py-0.5 rounded-full border border-[#E8DCC9]">
                    {project.timeline}
                  </span>
                  {project.isLive && (
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full border border-emerald-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                      LIVE WEB APP
                    </span>
                  )}
                </div>

                {/* 2. Main Title in Lobster Display Font */}
                <h1
                  id="project-modal-title"
                  className="text-3xl sm:text-5xl font-lobster font-bold text-[#252321] tracking-normal leading-[1.12] mb-3"
                >
                  {project.title}
                </h1>

                {/* Gen Z Punchline */}
                {project.genZPunchline && (
                  <div className="font-handwriting text-xl sm:text-2xl text-[#B52D3A] font-bold mb-3.5 rotate-[-1deg] select-none">
                    &ldquo;{project.genZPunchline}&rdquo;
                  </div>
                )}

                {/* 3. Short Project Overview */}
                <p
                  id="project-modal-description"
                  className="font-sans text-sm sm:text-base text-[#4A4440] leading-relaxed mb-5 font-normal"
                >
                  {project.description}
                </p>

                {/* 4. My Actual Role and Contribution Memo */}
                <div className="w-full p-4 rounded-2xl bg-[#FFFDF0] border-2 border-dashed border-[#E8D9A5] mb-5 text-xs shadow-2xs">
                  <div className="flex items-center gap-1.5 font-mono text-[11px] font-bold text-[#702632] uppercase tracking-wider mb-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#B52D3A] shrink-0" />
                    <span>MY ROLE &amp; CONTRIBUTION ({project.role.toUpperCase()})</span>
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-[#252321] leading-relaxed font-semibold">
                    {project.contribution}
                  </p>
                </div>

                {/* 5. Action Buttons: LIVE DEMO & GITHUB REPO (Work independently) */}
                <div className="flex flex-wrap items-center gap-3 w-full mb-5">
                  {project.isLive && project.liveDemoUrl && (
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl cherry-btn text-xs sm:text-sm font-bold shadow-xs hover:scale-102 active:scale-98 transition-all cursor-pointer"
                    >
                      <span>OPEN LIVE DEMO</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white hover:bg-[#F6E7A8]/40 text-[#252321] border border-[#252321] text-xs sm:text-sm font-semibold shadow-xs hover:scale-102 active:scale-98 transition-all cursor-pointer"
                    >
                      <Github className="w-4 h-4" />
                      <span>GITHUB REPOSITORY</span>
                    </a>
                  )}
                </div>

                {/* 6. Technologies and Tools Actually Used */}
                <div>
                  <div className="text-[11px] font-mono text-[#702632] font-bold uppercase tracking-wider mb-2">
                    TECHNOLOGIES &amp; TOOLS ACTUALLY USED
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tools.map((tool, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md bg-[#FFFDF9] border border-[#E8DCC9] text-[#702632] font-mono text-xs font-semibold shadow-2xs"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Right Column (Desktop 5 cols): Primary Interface Preview */}
              <div className="lg:col-span-5 w-full flex flex-col">
                <div className="flex items-center justify-between pb-2 mb-3 border-b border-[#E8DCC9]">
                  <div className="text-xs font-mono font-bold text-[#702632] uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#B52D3A]" />
                    <span>PRIMARY INTERFACE PREVIEW</span>
                  </div>
                  <span className="text-[11px] font-mono text-[#625A53]">
                    Tactile Simulation
                  </span>
                </div>

                {/* Primary interface simulation container */}
                <div className="rounded-2xl sm:rounded-3xl bg-white border-2 border-[#E8DCC9] p-4 sm:p-5 paper-note-shadow overflow-hidden">
                  <ProjectLivePreview projectId={project.id} isDetailed={true} />
                </div>

                {/* Quick Delivery Context Spec */}
                {(project.hackathonNote || project.statusNote) && (
                  <div className="mt-3 p-3 rounded-xl bg-white border border-[#E8DCC9] flex items-center gap-2 text-xs font-mono text-[#625A53]">
                    <Clock className="w-3.5 h-3.5 text-[#B52D3A] shrink-0" />
                    <span>{project.hackathonNote || project.statusNote}</span>
                  </div>
                )}
              </div>

            </div>

            {/* =================================================================
                SECTION 2: THE PROBLEM & OPPORTUNITY
               ================================================================= */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border-2 border-[#E8DCC9] paper-note-shadow space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#702632] uppercase tracking-wider">
                <Target className="w-4 h-4 text-[#B52D3A]" />
                <span>THE REAL PROBLEM &amp; OPPORTUNITY</span>
              </div>

              <h3 className="font-lobster text-2xl sm:text-3xl text-[#252321]">
                &ldquo;{project.problemAndIdea.hook}&rdquo;
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-1">
                <div className="p-4 rounded-2xl bg-[#FFF9EF] border border-[#E8DCC9]">
                  <div className="text-xs font-mono font-bold text-[#B52D3A] uppercase tracking-wider mb-1.5">
                    THE FRICTION / OPPORTUNITY
                  </div>
                  <p className="text-xs sm:text-sm font-sans text-[#625A53] leading-relaxed">
                    {project.problemAndIdea.problem}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#F6E7A8]/50 border border-[#E4C868]">
                  <div className="text-xs font-mono font-bold text-[#702632] uppercase tracking-wider mb-1.5">
                    THE SOLUTION IDEA
                  </div>
                  <p className="text-xs sm:text-sm font-sans text-[#252321] leading-relaxed font-medium">
                    {project.problemAndIdea.idea}
                  </p>
                </div>
              </div>

              {project.quote && (
                <div className="pt-2 border-t border-[#E8DCC9] font-handwriting text-lg sm:text-xl text-[#702632] font-bold">
                  {project.quote}
                </div>
              )}
            </div>

            {/* =================================================================
                SECTION 3: IMPORTANT PRODUCT / DESIGN DECISIONS & TRADE-OFFS
               ================================================================= */}
            <div>
              <div className="flex items-center justify-between pb-3 mb-5 border-b-2 border-[#E8DCC9]">
                <div>
                  <div className="text-xs font-mono font-bold text-[#702632] uppercase tracking-wider mb-0.5">
                    EXECUTION BREAKDOWN
                  </div>
                  <h3 className="text-xl sm:text-2xl font-lobster font-bold text-[#252321]">
                    Important Product/Design Decisions &amp; <span className="text-[#B52D3A]">Trade-offs</span>
                  </h3>
                </div>
              </div>

              {/* Approach Paragraph */}
              <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#E8DCC9] paper-note-shadow mb-5">
                <p className="font-sans text-xs sm:text-sm text-[#4A4440] leading-relaxed">
                  {project.processAndImplementation.approach}
                </p>
              </div>

              {/* Step-by-Step Decisions */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
                {project.processAndImplementation.steps.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-4 sm:p-5 rounded-2xl bg-white border border-[#E8DCC9] paper-note-shadow flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-mono text-xs font-bold text-[#B52D3A] px-2 py-0.5 rounded bg-[#F6E7A8]">
                          STEP {step.number}
                        </span>
                        <Sparkles className="w-3.5 h-3.5 text-[#B52D3A]" />
                      </div>
                      <h4 className="font-sans font-bold text-sm text-[#252321] mb-1.5">
                        {step.title}
                      </h4>
                      <p className="font-sans text-xs text-[#625A53] leading-relaxed mb-3">
                        {step.summary}
                      </p>
                    </div>

                    <div className="pt-2.5 border-t border-[#E8DCC9] flex flex-wrap gap-1">
                      {step.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#FFF9EF] border border-[#E8DCC9] text-[#625A53]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* =================================================================
                SECTION 4: GENUINE OUTCOMES, LIMITATIONS & NEXT STEPS
               ================================================================= */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Challenge / Limitation */}
              <div className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white border border-[#E8DCC9] paper-note-shadow">
                <div className="text-xs font-mono font-bold text-[#B52D3A] uppercase tracking-wider mb-2">
                  KEY CHALLENGE &amp; LIMITATIONS
                </div>
                <p className="font-sans text-xs sm:text-sm text-[#625A53] leading-relaxed">
                  {project.processAndImplementation.challenges}
                </p>
              </div>

              {/* Takeaway / Next Steps */}
              <div className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#F6E7A8]/60 border border-[#E4C868] paper-note-shadow">
                <div className="text-xs font-mono font-bold text-[#702632] uppercase tracking-wider mb-2">
                  CORE OUTCOME &amp; PRODUCT TAKEAWAY
                </div>
                <p className="font-sans text-xs sm:text-sm text-[#252321] leading-relaxed font-semibold">
                  {project.processAndImplementation.takeaway}
                </p>
              </div>
            </div>

          </div>

          {/* ===================================================================
              MODAL FOOTER (PREV/NEXT SWITCHING & CLOSE BUTTON)
             =================================================================== */}
          <div className="px-5 sm:px-8 py-4 border-t-2 border-[#E8DCC9] bg-[#FFFDF9] flex flex-wrap items-center justify-between gap-3 shrink-0">
            {/* Prev project */}
            <button
              type="button"
              onClick={() => onSelectProject(prevProject)}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white hover:bg-[#F6E7A8]/50 border border-[#E8DCC9] text-xs font-mono font-bold text-[#625A53] cursor-pointer shadow-2xs"
              title={`Previous: ${prevProject.title}`}
            >
              <ChevronLeft className="w-4 h-4 text-[#B52D3A]" />
              <span>Prev: <span className="hidden sm:inline">{prevProject.title}</span></span>
            </button>

            {/* Next project */}
            <button
              type="button"
              onClick={() => onSelectProject(nextProject)}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl cherry-btn text-xs font-mono font-bold cursor-pointer shadow-2xs"
              title={`Next: ${nextProject.title}`}
            >
              <span>Next: <span className="hidden sm:inline">{nextProject.title}</span></span>
              <ChevronRight className="w-4 h-4" />
            </button>

            {/* Close button */}
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 rounded-xl border border-[#252321] bg-white hover:bg-[#F6E7A8] text-[#252321] font-mono text-xs font-bold transition-colors cursor-pointer shadow-2xs ml-auto"
            >
              Close Modal
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
