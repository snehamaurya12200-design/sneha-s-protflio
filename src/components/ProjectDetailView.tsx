import React, { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import {
  ArrowLeft,
  ArrowUpRight,
  ExternalLink,
  Github,
  CheckCircle2,
  Clock,
  Sparkles,
  Layers,
  ChevronLeft,
  ChevronRight,
  Copy,
  Check,
  FileCode,
  Lightbulb,
  Target,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import { ProjectDetail, PROJECTS_DATA } from '../data/projectsData.ts';
import { ProjectLivePreview } from './ProjectLivePreview.tsx';
import { Sticker } from './Sticker.tsx';
import { GlossyCherries, HolographicStar } from './CollageElements.tsx';

interface ProjectDetailViewProps {
  project: ProjectDetail;
  onBack: () => void;
  onSelectProject: (project: ProjectDetail) => void;
}

export const ProjectDetailView: React.FC<ProjectDetailViewProps> = ({
  project,
  onBack,
  onSelectProject,
}) => {
  const shouldReduceMotion = useReducedMotion();
  const [copiedLink, setCopiedLink] = useState(false);

  // Scroll to top when project changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [project.id]);

  // Find index for prev / next navigation
  const currentIndex = PROJECTS_DATA.findIndex((p) => p.id === project.id);
  const prevProject =
    currentIndex > 0 ? PROJECTS_DATA[currentIndex - 1] : PROJECTS_DATA[PROJECTS_DATA.length - 1];
  const nextProject =
    currentIndex < PROJECTS_DATA.length - 1 ? PROJECTS_DATA[currentIndex + 1] : PROJECTS_DATA[0];

  const handleCopyShareLink = () => {
    const url = new URL(window.location.href);
    url.searchParams.set('project', project.id);
    navigator.clipboard.writeText(url.toString());
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <article className="min-h-screen bg-transparent text-[#252321] pt-24 sm:pt-28 pb-24 px-4 sm:px-6 lg:px-8 relative z-30 selection:bg-[#F6E7A8] selection:text-[#E52B45]">
      <div className="max-w-5xl mx-auto bg-[#FFFDF9]/95 border-2 border-[#252321] rounded-3xl sm:rounded-[36px] p-6 sm:p-10 lg:p-12 paper-note-shadow">
        
        {/* ===================================================================
            1. TOP NAVIGATION / BREADCRUMBS
           =================================================================== */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 sm:mb-12 pb-5 border-b-2 border-[#E8DCC9]">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white hover:bg-[#F6E7A8]/40 text-[#252321] border border-[#E8DCC9] shadow-xs font-sans text-xs sm:text-sm font-bold transition-all cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 text-[#B52D3A] group-hover:-translate-x-1 transition-transform" />
            <span>← Back to all projects</span>
          </button>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={handleCopyShareLink}
              title="Copy shareable project link"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white hover:bg-[#F6E7A8]/40 text-[#702632] border border-[#E8DCC9] text-xs font-mono font-bold transition-colors cursor-pointer shadow-xs"
            >
              {copiedLink ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-700" />
                  <span className="text-emerald-800">Link Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#B52D3A]" />
                  <span>Share URL</span>
                </>
              )}
            </button>

            <div className="hidden sm:inline-flex items-center gap-1 text-xs font-mono text-[#625A53] bg-[#F6E7A8] px-3 py-1 rounded-full border border-[#E4C868] font-bold">
              <span>PROJECT {currentIndex + 1} OF {PROJECTS_DATA.length}</span>
            </div>
          </div>
        </div>

        {/* ===================================================================
            2. PROJECT HEADER & CORE METADATA (Section A)
           =================================================================== */}
        <header className="mb-12 sm:mb-16 relative">
          
          {/* Eyebrow & Category Badges */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider bg-[#F6E7A8] text-[#702632] border border-[#E4C868]">
              <Sparkles className="w-3.5 h-3.5 text-[#B52D3A]" />
              <span>{project.badge}</span>
            </span>

            <span className="text-xs font-mono text-[#625A53] bg-white px-3 py-1 rounded-full border border-[#E8DCC9]">
              {project.timeline}
            </span>

            {project.isLive && (
              <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-300">
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                VERIFIED LIVE WEB APP
              </span>
            )}
          </div>

          {/* Main Title in Characterful Display Typography */}
          <div className="relative inline-block mb-3">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-lobster font-bold text-[#252321] tracking-normal leading-[1.1]">
              {project.title}
            </h1>
            {/* Sticker Decor */}
            <div className="absolute -top-6 -right-14 sm:-right-20 pointer-events-auto hidden xs:block">
              <Sticker name="star" size={52} rotate={12} alt="Star sticker" />
            </div>
          </div>

          {/* Gen Z Sub-Punchline */}
          {project.genZPunchline && (
            <div className="font-handwriting text-2xl sm:text-3xl text-[#B52D3A] font-bold mb-4 rotate-[-1deg] select-none">
              &ldquo;{project.genZPunchline}&rdquo;
            </div>
          )}

          {/* Concise Overview */}
          <p className="font-sans text-base sm:text-xl text-[#625A53] leading-relaxed max-w-3xl mb-8 font-normal">
            {project.description}
          </p>

          {/* Core Metadata Spec Box in Warm Cream Paper */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-5 sm:p-6 rounded-2xl bg-white border border-[#E8DCC9] paper-note-shadow mb-8">
            <div>
              <div className="text-[11px] font-mono text-[#702632] font-bold uppercase tracking-wider mb-1">
                PROJECT TYPE
              </div>
              <div className="text-xs sm:text-sm font-sans font-bold text-[#252321]">
                {project.projectType}
              </div>
            </div>

            <div>
              <div className="text-[11px] font-mono text-[#702632] font-bold uppercase tracking-wider mb-1">
                MY ROLE
              </div>
              <div className="text-xs sm:text-sm font-sans font-bold text-[#252321]">
                {project.role}
              </div>
            </div>

            <div>
              <div className="text-[11px] font-mono text-[#702632] font-bold uppercase tracking-wider mb-1">
                DELIVERY CONTEXT
              </div>
              <div className="text-xs sm:text-sm font-sans font-bold text-[#252321]">
                {project.hackathonNote || project.statusNote}
              </div>
            </div>

            <div>
              <div className="text-[11px] font-mono text-[#702632] font-bold uppercase tracking-wider mb-1">
                VERIFIED STACK
              </div>
              <div className="text-xs font-mono text-[#625A53] truncate">
                {project.tools.slice(0, 3).join(', ')}
              </div>
            </div>
          </div>

          {/* Action Row: LIVE DEMO & SOURCE CODE */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1">
            {project.isLive && project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl cherry-btn text-sm sm:text-base font-bold shadow-sm hover:scale-102 active:scale-98 transition-all cursor-pointer"
              >
                <span>LIVE DEMO ↗</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white hover:bg-[#F6E7A8]/40 text-[#252321] border border-[#E8DCC9] text-sm sm:text-base font-semibold shadow-xs hover:scale-102 active:scale-98 transition-all cursor-pointer"
              >
                <Github className="w-4 h-4" />
                <span>SOURCE CODE ↗</span>
              </a>
            )}

            {/* Tools Badges */}
            <div className="flex flex-wrap items-center gap-1.5 sm:ml-auto">
              {project.tools.map((tool, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-md bg-[#F6E7A8] border border-[#E4C868] text-[#702632] font-mono text-xs font-semibold"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </header>

        {/* ===================================================================
            3. SECTION E: THE WORK (Large Interactive Visual Preview)
           =================================================================== */}
        <section className="mb-14 sm:mb-16">
          <div className="flex items-center justify-between pb-3 mb-6 border-b-2 border-[#E8DCC9]">
            <div>
              <div className="text-xs font-mono font-bold text-[#702632] uppercase tracking-wider mb-0.5">
                SHOWCASE // 01
              </div>
              <h2 className="text-2xl sm:text-3xl font-lobster font-bold text-[#252321]">
                Interactive Showcase &amp; <span className="text-[#B52D3A]">Interface Breakdown</span>
              </h2>
            </div>

            <div className="hidden sm:block">
              <GlossyCherries size={40} />
            </div>
          </div>

          {/* Interactive Simulation Frame */}
          <div className="rounded-3xl bg-white border-2 border-[#E8DCC9] p-5 sm:p-8 paper-note-shadow">
            <ProjectLivePreview projectId={project.id} isDetailed={true} />
          </div>
        </section>

        {/* ===================================================================
            4. SECTION B: THE PROBLEM
           =================================================================== */}
        <section className="mb-14 sm:mb-16">
          <div className="p-6 sm:p-8 rounded-3xl bg-white border-2 border-[#E8DCC9] paper-note-shadow space-y-5">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#702632] uppercase tracking-wider">
              <Target className="w-4 h-4 text-[#B52D3A]" />
              <span>THE PROBLEM &amp; CONTEXT</span>
            </div>

            <h3 className="font-lobster text-2xl sm:text-3xl text-[#252321]">
              &ldquo;{project.problemAndIdea.hook}&rdquo;
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="p-4 rounded-2xl bg-[#FFF9EF] border border-[#E8DCC9]">
                <div className="text-xs font-mono font-bold text-[#B52D3A] uppercase mb-1.5">
                  THE FRICTION
                </div>
                <p className="text-sm font-sans text-[#625A53] leading-relaxed">
                  {project.problemAndIdea.problem}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#F6E7A8]/60 border border-[#E4C868]">
                <div className="text-xs font-mono font-bold text-[#702632] uppercase mb-1.5">
                  THE PRODUCT IDEA
                </div>
                <p className="text-sm font-sans text-[#252321] leading-relaxed font-medium">
                  {project.problemAndIdea.idea}
                </p>
              </div>
            </div>

            {project.quote && (
              <div className="pt-2 border-t border-[#E8DCC9] font-handwriting text-xl text-[#702632] font-bold">
                {project.quote}
              </div>
            )}
          </div>
        </section>

        {/* ===================================================================
            5. SECTION C & D: MY APPROACH & KEY DESIGN DECISIONS
           =================================================================== */}
        <section className="mb-14 sm:mb-16">
          <div className="flex items-center justify-between pb-3 mb-6 border-b-2 border-[#E8DCC9]">
            <div>
              <div className="text-xs font-mono font-bold text-[#702632] uppercase tracking-wider mb-0.5">
                EXECUTION BREAKDOWN
              </div>
              <h2 className="text-2xl sm:text-3xl font-lobster font-bold text-[#252321]">
                My Approach &amp; <span className="text-[#B52D3A]">Key Design Decisions</span>
              </h2>
            </div>
          </div>

          {/* Approach Paragraph */}
          <div className="p-6 rounded-2xl bg-white border border-[#E8DCC9] paper-note-shadow mb-6">
            <p className="font-sans text-sm sm:text-base text-[#625A53] leading-relaxed">
              {project.processAndImplementation.approach}
            </p>
          </div>

          {/* Step-by-Step Decisions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.processAndImplementation.steps.map((step, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-[#E8DCC9] paper-note-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs font-bold text-[#B52D3A] px-2 py-0.5 rounded bg-[#F6E7A8]">
                      STEP {step.number}
                    </span>
                    <Sparkles className="w-3.5 h-3.5 text-[#B52D3A]" />
                  </div>
                  <h4 className="font-sans font-bold text-sm sm:text-base text-[#252321] mb-2">
                    {step.title}
                  </h4>
                  <p className="font-sans text-xs text-[#625A53] leading-relaxed mb-4">
                    {step.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E8DCC9] flex flex-wrap gap-1">
                  {step.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#FFF9EF] border border-[#E8DCC9] text-[#625A53]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===================================================================
            6. SECTION F: OUTCOME AND LEARNINGS
           =================================================================== */}
        <section className="mb-14 sm:mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Challenge */}
            <div className="p-6 rounded-3xl bg-white border border-[#E8DCC9] paper-note-shadow">
              <div className="text-xs font-mono font-bold text-[#B52D3A] uppercase tracking-wider mb-2">
                KEY CHALLENGE
              </div>
              <p className="font-sans text-sm text-[#625A53] leading-relaxed">
                {project.processAndImplementation.challenges}
              </p>
            </div>

            {/* Takeaway */}
            <div className="p-6 rounded-3xl bg-[#F6E7A8]/70 border border-[#E4C868] paper-note-shadow">
              <div className="text-xs font-mono font-bold text-[#702632] uppercase tracking-wider mb-2">
                CORE PRODUCT TAKEAWAY
              </div>
              <p className="font-sans text-sm text-[#252321] leading-relaxed font-semibold">
                {project.processAndImplementation.takeaway}
              </p>
            </div>
          </div>
        </section>

        {/* ===================================================================
            7. SECTION G: FINAL ACTIONS & NEXT/PREV NAVIGATION
           =================================================================== */}
        <footer className="pt-8 border-t-2 border-[#E8DCC9] flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-[#F6E7A8]/50 text-[#252321] border border-[#E8DCC9] font-sans text-sm font-bold shadow-xs cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-[#B52D3A]" />
            <span>← Back to all projects</span>
          </button>

          <div className="flex items-center gap-3">
            {/* Prev project */}
            <button
              onClick={() => onSelectProject(prevProject)}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white hover:bg-[#F6E7A8]/40 border border-[#E8DCC9] text-xs font-mono font-bold text-[#625A53] cursor-pointer"
              title={`Previous: ${prevProject.title}`}
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Prev</span>
            </button>

            {/* Next project */}
            <button
              onClick={() => onSelectProject(nextProject)}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl cherry-btn text-xs font-mono font-bold cursor-pointer"
              title={`Next: ${nextProject.title}`}
            >
              <span>Next: {nextProject.title}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </footer>

      </div>
    </article>
  );
};
