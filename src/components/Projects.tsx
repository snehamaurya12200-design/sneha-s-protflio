import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import {
  ExternalLink,
  Github,
  ArrowUpRight,
  Sparkles,
  ArrowRight,
  Eye,
  CheckCircle2,
  Clock,
  Layers,
  FileCode,
  Compass,
  Check,
  Award,
} from 'lucide-react';
import { ProjectDetail, PROJECTS_DATA } from '../data/projectsData.ts';
import { ProjectLivePreview } from './ProjectLivePreview.tsx';
import { Sticker } from './Sticker.tsx';
import { HolographicStar } from './CollageElements.tsx';
import {
  DoodleStar,
  DoodleSparkle,
  DoodleHeart,
  DoodlePixelHeart,
  DoodleFlower,
  DoodleArrow,
  DoodleSquiggle,
  DoodleNote,
  DoodleCherries,
} from './ScrapbookDoodles.tsx';
import { ProjectsFrameDecorations } from './SectionFrameBorders.tsx';

// Export ProjectDetail for backward compatibility with existing imports
export type { ProjectDetail } from '../data/projectsData.ts';

interface ProjectsProps {
  onSelectProject: (project: ProjectDetail) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const shouldReduceMotion = useReducedMotion();
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Projects (6)' },
    { id: 'hackathon', label: 'Hackathons & Live (3)' },
    { id: 'uiux', label: 'Behavioral & UI/UX (2)' },
    { id: 'concepts', label: 'Product & AI Concepts (2)' },
    { id: 'startup', label: 'Startup Experience (1)' },
  ];

  // Filter projects based on active pill
  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'hackathon') {
      return (
        project.id === 'your-life-in-rec' ||
        project.id === 'first-week' ||
        project.id === 'mood-money'
      );
    }
    if (activeCategory === 'uiux') {
      return project.id === 'mood-money' || project.id === 'first-week' || project.id === 'stumate';
    }
    if (activeCategory === 'concepts') {
      return project.id === 'udyog-mitra' || project.id === 'accessgap';
    }
    if (activeCategory === 'startup') {
      return project.id === 'stumate';
    }
    return true;
  });

  // Separate featured hero project from the rest when in 'all' view
  const featuredProject = PROJECTS_DATA.find((p) => p.id === 'your-life-in-rec');
  const mediumProjects = PROJECTS_DATA.filter(
    (p) => p.id === 'first-week' || p.id === 'mood-money'
  );
  const supportingProjects = PROJECTS_DATA.filter(
    (p) => p.id === 'accessgap' || p.id === 'udyog-mitra' || p.id === 'stumate'
  );

  return (
    <section
      id="work"
      className="py-10 sm:py-14 px-4 sm:px-6 lg:px-8 bg-transparent text-[#252321] relative overflow-visible"
    >
      {/* Playful Floating Doodles around Projects Margins */}
      <div className="absolute top-2 left-6 pointer-events-none hidden md:block">
        <DoodleFlower size={26} petalColor="#FFFFFF" centerColor="#FFF0A8" rotate={12} />
      </div>
      <div className="absolute top-6 right-10 pointer-events-none hidden lg:block">
        <DoodleStar size={28} hasFace={true} color="#FFF0A8" rotate={-10} />
      </div>
      <div className="absolute top-1/2 -left-3 pointer-events-none hidden xl:block">
        <DoodleSquiggle size={44} color="#E84A65" variant="loop" rotate={90} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 bg-[#FFFDF9]/95 border-2 border-[#252321] rounded-3xl sm:rounded-[36px] p-6 sm:p-10 lg:p-12 paper-note-shadow">
        {/* Full 4-Sided Scrapbook Frame Sticker Decorations */}
        <ProjectsFrameDecorations />

        {/* =====================================================================
            1. REFINED EDITORIAL HEADER & METADATA BAR
           ===================================================================== */}
        <div className="mb-8 sm:mb-10 pb-6 border-b-2 border-[#E8DCC9] relative">
          
          {/* Eyebrow Badge & Clear Track Tag */}
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFF0A8] border border-[#E4C868] shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#E84A65]" />
              <span className="font-mono text-xs font-bold text-[#702632] tracking-wider uppercase">
                SELECTED WORK · CASE ARCHIVE
              </span>
            </div>

            <span className="text-xs font-mono text-[#625A53] font-medium hidden sm:inline-block">
              ✦ Verified Hackathon Builds, Prototypes &amp; UX Specs
            </span>

            <DoodleSparkle size={18} color="#E84A65" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
            <div className="lg:col-span-8">
              {/* Distinctive Section Headline */}
              <div className="relative inline-block">
                <h2 className="font-lobster font-bold text-4xl sm:text-5xl lg:text-6xl text-[#252321] leading-tight tracking-normal">
                  Things I&apos;ve been{' '}
                  <span className="text-[#E84A65] relative inline-block">
                    making lately.
                    {/* Butter yellow highlighter base */}
                    <div
                      aria-hidden="true"
                      className="absolute -bottom-1 left-0 w-full h-3 bg-[#FFF0A8] rounded-full -z-10 transform -rotate-1 opacity-90"
                    />
                  </span>
                </h2>
              </div>

              {/* Supporting Subtitle in Clean Sans */}
              <p className="mt-3 text-base sm:text-lg font-sans text-[#625A53] leading-relaxed max-w-2xl font-normal">
                A selection of end-to-end product design, behavioral UI/UX experiments, and timed hackathon applications built with intentional craft.
              </p>
            </div>

            {/* Recruiter-friendly Quick Stat Box */}
            <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-between gap-2.5">
              <div className="p-3.5 rounded-2xl bg-white border border-[#E8DCC9] text-xs font-mono text-[#625A53] w-full max-w-xs shadow-xs">
                <div className="flex items-center justify-between font-bold mb-1 text-[#252321]">
                  <span className="flex items-center gap-1.5 text-[#B52D3A]">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>VERIFIED CREDENTIALS</span>
                  </span>
                  <span className="text-[11px] text-[#702632]">6 PROJECTS</span>
                </div>
                <div className="text-[11px] text-[#625A53] leading-relaxed">
                  3 Live Apps · 2 Design Specs · 1 Startup Case Study
                </div>
              </div>
            </div>
          </div>

          {/* Category Filter Pills Bar */}
          <div className="mt-6 pt-3 flex flex-wrap items-center gap-2">
            <span className="font-mono text-xs font-bold text-[#625A53] mr-2 uppercase tracking-wider">
              Filter by:
            </span>
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-bold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#F6E7A8] text-[#702632] border border-[#B52D3A] shadow-xs scale-102'
                      : 'bg-white text-[#625A53] border border-[#E8DCC9] hover:bg-[#F6E7A8]/40 hover:text-[#252321]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* =====================================================================
            2. RECRUITER-FOCUSED PROJECT CARDS (Distinct Text Hierarchy)
               Hierarchy:
               1. CONTEXT: font-mono text-xs font-bold (pill badges)
               2. TITLE: font-lobster font-bold text-3xl to 5xl text-[#252321]
               3. DESCRIPTION: font-sans text-sm sm:text-[15px] font-normal text-[#4A4440]
               4. CONTRIBUTION: font-mono uppercase bold tag + font-sans font-medium text-[#252321]
           ===================================================================== */}
        
        {/* VIEW A: When 'all' is selected -> Curated Editorial Composition */}
        {activeCategory === 'all' && featuredProject ? (
          <div className="space-y-10 sm:space-y-12">
            
            {/* ---------------------------------------------------------------
                1. FEATURED HERO PROJECT: "YOUR LIFE, IN RECEIPTS"
               --------------------------------------------------------------- */}
            <motion.article
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
              whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.35 }}
              onClick={() => onSelectProject(featuredProject)}
              className="group relative rounded-[28px] studio-card p-6 sm:p-8 lg:p-10 paper-note-shadow border-2 border-[#E8DCC9] bg-[#FFFDF9] cursor-pointer hover:-translate-y-1 transition-all duration-300"
            >
              {/* Corner Tape Banner */}
              <div className="absolute -top-3.5 left-8 px-3.5 py-0.5 text-[11px] font-mono font-bold text-[#702632] bg-[#F6E7A8] border border-[#E4C868] rounded-md shadow-xs select-none z-20 flex items-center gap-1.5">
                <Award className="w-3 h-3 text-[#B52D3A]" />
                <span>FEATURED HACKATHON SPRINTER · TOP 5 FINALIST</span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left Column: 4-Point Clear Typographic Hierarchy */}
                <div className="lg:col-span-7 flex flex-col items-start justify-between">
                  
                  {/* LEVEL 1: TITLE (Expressive Display Font, Largest Size, Bold) */}
                  <h3 className="font-lobster font-bold text-3xl sm:text-4xl lg:text-[2.75rem] text-[#252321] group-hover:text-[#B52D3A] transition-colors leading-[1.14] mb-2.5">
                    {featuredProject.title}
                  </h3>

                  {/* LEVEL 2: CONTEXT & METADATA (Monospace, Bold Badges) */}
                  <div className="flex flex-wrap items-center gap-2 mb-3.5">
                    <span className="px-2.5 py-0.5 rounded-md text-xs font-mono font-bold bg-[#FFF0A8]/85 text-[#702632] border border-[#E8DCC9]">
                      Interactive Frontend · WebRush 2024
                    </span>
                    <span className="text-xs font-mono text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-300 flex items-center gap-1.5 font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                      LIVE WEB APP
                    </span>
                    <span className="text-xs font-mono text-[#625A53] font-semibold">
                      ⏱ 6-Hour Solo Sprint
                    </span>
                  </div>

                  {/* LEVEL 3: DESCRIPTION (Clean Sans, Regular Weight, Charcoal, Relaxed Leading) */}
                  <p className="font-sans text-sm sm:text-[15px] text-[#4A4440] leading-relaxed mb-4 font-normal">
                    Most expense tracking experiences treat receipts as dull financial spreadsheets. This experimental web app reimagines memorable human milestones as itemized thermal cash-register receipts with dynamic subtotal math, tax calculation, and tactile paper crinkle physics.
                  </p>

                  {/* LEVEL 4: CONTRIBUTION (Distinct Field-Note Memo, Bold Mono Tag, Semibold Ink) */}
                  <div className="w-full p-4 rounded-xl bg-[#FFFDF0] border-2 border-dashed border-[#E8D9A5] mb-4 text-xs shadow-2xs">
                    <div className="flex items-center gap-1.5 font-mono text-[11px] font-bold text-[#702632] uppercase tracking-wider mb-1.5">
                      <CheckCircle2 className="w-4 h-4 text-[#B52D3A] shrink-0" />
                      <span>MY CONTRIBUTION (SOLO PRODUCT DESIGNER &amp; DEVELOPER)</span>
                    </div>
                    <p className="font-sans text-xs sm:text-sm text-[#252321] leading-relaxed font-semibold">
                      {featuredProject.contribution}
                    </p>
                  </div>

                  {/* Key Design Decisions & Core Features */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    <span className="px-2.5 py-1 rounded-md bg-white border border-[#E8DCC9] text-xs font-mono font-medium text-[#625A53]">
                      ✦ Monospace Tabular Grid
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-white border border-[#E8DCC9] text-xs font-mono font-medium text-[#625A53]">
                      ✦ SVG Paper Perforation Cuts
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-white border border-[#E8DCC9] text-xs font-mono font-medium text-[#625A53]">
                      ✦ Dynamic Subtotal Calculator
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-white border border-[#E8DCC9] text-xs font-mono font-medium text-[#625A53]">
                      ✦ React + TypeScript + Vercel
                    </span>
                  </div>

                  {/* Live Demo, Code & Case Study Links */}
                  <div className="flex flex-wrap items-center gap-3 w-full pt-3 border-t border-[#E8DCC9]">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectProject(featuredProject);
                      }}
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl cherry-btn font-sans text-xs sm:text-sm font-bold shadow-xs cursor-pointer hover:scale-[1.02] active:scale-[0.98] transition-all"
                    >
                      <Eye className="w-4 h-4" />
                      <span>EXPLORE CASE STUDY</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    {featuredProject.liveDemoUrl && (
                      <a
                        href={featuredProject.liveDemoUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl butter-btn font-sans text-xs sm:text-sm font-bold cursor-pointer hover:scale-[1.02] active:scale-[0.98] transition-all"
                      >
                        <span>View Live Demo</span>
                        <ExternalLink className="w-3.5 h-3.5 text-[#B52D3A]" />
                      </a>
                    )}

                    {featuredProject.githubUrl && (
                      <a
                        href={featuredProject.githubUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-white hover:bg-[#F6E7A8]/40 border border-[#E8DCC9] text-[#252321] font-sans text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Source Code</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#625A53]" />
                      </a>
                    )}
                  </div>

                </div>

                {/* Right Column: Distinctive Interactive Thermal Receipt Preview */}
                <div className="lg:col-span-5 relative flex items-center justify-center">
                  <div className="w-full relative">
                    <ProjectLivePreview
                      projectId="your-life-in-rec"
                      className="transform hover:scale-[1.01] transition-transform duration-300"
                    />

                    <div className="mt-2.5 flex items-center justify-between text-[11px] font-mono text-[#625A53]">
                      <span>FORMAT: THERMAL TAPE (58MM)</span>
                      <span className="text-[#B52D3A] font-bold">CLICK TO INSPECT CASE STUDY →</span>
                    </div>
                  </div>
                </div>

              </div>
            </motion.article>

            {/* ---------------------------------------------------------------
                2. TWO MEDIUM CARDS: "THE FIRST WEEK" & "MOOD MONEY"
               --------------------------------------------------------------- */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {mediumProjects.map((project) => (
                <motion.article
                  key={project.id}
                  initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
                  whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.35 }}
                  onClick={() => onSelectProject(project)}
                  className="group relative rounded-2xl studio-card p-6 sm:p-7 paper-note-shadow border border-[#E8DCC9] bg-[#FFFDF9] cursor-pointer hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* LEVEL 1: TITLE (Expressive Display Font, 2xl to 3xl, Bold) */}
                    <h3 className="font-lobster font-bold text-2xl sm:text-3xl text-[#252321] group-hover:text-[#B52D3A] transition-colors leading-snug mb-1.5">
                      {project.title}
                    </h3>

                    {/* LEVEL 2: CONTEXT & STATUS (Monospace, Bold Badges) */}
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="px-2.5 py-0.5 rounded-md text-xs font-mono font-bold bg-[#FFF0A8]/85 text-[#702632] border border-[#E8DCC9]">
                        {project.id === 'first-week' ? 'Web Design · Campus Guide' : 'Behavioral UI/UX · Finance'}
                      </span>
                      {project.isLive ? (
                        <span className="text-[11px] font-mono text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-300 font-bold flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                          LIVE DEMO
                        </span>
                      ) : (
                        <span className="text-[11px] font-mono text-[#625A53] bg-[#FFF9EF] px-2 py-0.5 rounded-md border border-[#E8DCC9] font-bold">
                          FIGMA PROTOTYPE
                        </span>
                      )}
                    </div>

                    {/* LEVEL 3: DESCRIPTION (Clean Sans, Regular Weight, Charcoal) */}
                    <p className="font-sans text-xs sm:text-sm text-[#4A4440] leading-relaxed mb-3.5 font-normal">
                      {project.description}
                    </p>

                    {/* LEVEL 4: CONTRIBUTION (Field-Note Memo Card, Bold Tag, Semibold Body) */}
                    <div className="p-3.5 rounded-xl bg-[#FFFDF0] border-2 border-dashed border-[#E8D9A5] mb-3 text-xs shadow-2xs">
                      <div className="flex items-center gap-1.5 font-mono text-[10px] font-bold text-[#702632] uppercase tracking-wider mb-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#B52D3A] shrink-0" />
                        <span>MY CONTRIBUTION</span>
                      </div>
                      <p className="font-sans text-xs sm:text-[13px] leading-relaxed text-[#252321] font-semibold">
                        {project.contribution}
                      </p>
                    </div>

                    {/* LEVEL 5: Key Features & Tools */}
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.tools.slice(0, 4).map((tool, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded-md bg-white border border-[#E8DCC9] text-[11px] font-mono font-medium text-[#625A53]"
                        >
                          ✦ {tool}
                        </span>
                      ))}
                    </div>

                    {/* Distinctive Live Preview */}
                    <div className="my-3">
                      <ProjectLivePreview projectId={project.id} />
                    </div>
                  </div>

                  {/* Action Links Row */}
                  <div className="pt-3.5 border-t border-[#E8DCC9] flex flex-wrap items-center gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectProject(project);
                      }}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl cherry-btn font-sans text-xs font-bold cursor-pointer hover:scale-102 transition-transform"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    {project.liveDemoUrl && (
                      <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1 px-3 py-2 rounded-xl butter-btn font-sans text-xs font-bold cursor-pointer hover:scale-102 transition-transform"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-3 h-3 text-[#B52D3A]" />
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1 px-2.5 py-2 rounded-xl bg-white hover:bg-[#F6E7A8]/40 border border-[#E8DCC9] text-[#252321] font-sans text-xs font-semibold transition-colors cursor-pointer"
                      >
                        <Github className="w-3 h-3" />
                        <span>Code</span>
                      </a>
                    )}
                  </div>
                </motion.article>
              ))}
            </div>

            {/* ---------------------------------------------------------------
                3. THREE SUPPORTING & CONCEPT CARDS (AccessGap, Udyog Mitra, StuMate)
               --------------------------------------------------------------- */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {supportingProjects.map((project) => (
                <motion.article
                  key={project.id}
                  initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
                  whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.35 }}
                  onClick={() => onSelectProject(project)}
                  className="group relative rounded-2xl studio-card p-5 sm:p-6 paper-note-shadow border border-[#E8DCC9] bg-[#FFFDF9] cursor-pointer hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* LEVEL 1: TITLE (Expressive Display Font, Bold) */}
                    <h3 className="font-lobster font-bold text-xl sm:text-2xl text-[#252321] group-hover:text-[#B52D3A] transition-colors leading-snug mb-1.5">
                      {project.title}
                    </h3>

                    {/* LEVEL 2: CONTEXT & SCOPE (Monospace, Bold Badges) */}
                    <div className="flex flex-wrap items-center gap-1.5 mb-2.5">
                      <span className="text-[11px] font-mono font-bold text-[#702632] bg-[#FFF0A8]/80 px-2 py-0.5 rounded border border-[#E8DCC9]">
                        {project.category}
                      </span>
                      <span className="text-[10px] font-mono text-[#625A53] px-2 py-0.5 rounded bg-[#FFF9EF] border border-[#E8DCC9] font-bold">
                        {project.isConcept ? 'Design Concept' : 'Startup Team'}
                      </span>
                    </div>

                    {/* LEVEL 3: DESCRIPTION (Clean Sans, Regular Weight, Charcoal) */}
                    <p className="font-sans text-xs text-[#4A4440] leading-relaxed mb-3 font-normal">
                      {project.description}
                    </p>

                    {/* LEVEL 4: CONTRIBUTION (Field-Note Memo Card, Bold Tag, Semibold Body) */}
                    <div className="p-3 rounded-xl bg-[#FFFDF0] border-2 border-dashed border-[#E8D9A5] mb-2.5 text-[11px] leading-relaxed text-[#252321] shadow-2xs">
                      <div className="flex items-center gap-1 font-mono text-[9px] font-bold text-[#702632] uppercase tracking-wider mb-1">
                        <CheckCircle2 className="w-3 h-3 text-[#B52D3A] shrink-0" />
                        <span>MY ROLE &amp; FOCUS</span>
                      </div>
                      <p className="font-sans text-xs leading-relaxed text-[#252321] font-semibold">
                        {project.contribution}
                      </p>
                    </div>

                    {/* LEVEL 5: Key Tools */}
                    <div className="flex flex-wrap gap-1 mb-2.5">
                      {project.tools.slice(0, 3).map((tool, idx) => (
                        <span
                          key={idx}
                          className="px-1.5 py-0.5 rounded bg-white border border-[#E8DCC9] text-[10px] font-mono font-medium text-[#625A53]"
                        >
                          ✦ {tool}
                        </span>
                      ))}
                    </div>

                    {/* Live Preview / Architecture Spec */}
                    <div className="my-2.5">
                      <ProjectLivePreview projectId={project.id} />
                    </div>
                  </div>

                  {/* Case Study Action Link */}
                  <div className="pt-3 border-t border-[#E8DCC9] flex items-center justify-between">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectProject(project);
                      }}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl cherry-btn font-sans text-xs font-bold cursor-pointer hover:scale-102 transition-transform"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Explore Case Study</span>
                    </button>

                    <span className="text-[10px] font-mono text-[#625A53] font-semibold">
                      Verified Spec
                    </span>
                  </div>
                </motion.article>
              ))}
            </div>

          </div>
        ) : (
          /* VIEW B: Filtered Projects View (Filtered based on user category pill) */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <motion.article
                key={project.id}
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 14 }}
                animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                onClick={() => onSelectProject(project)}
                className="group relative rounded-2xl studio-card p-6 paper-note-shadow border border-[#E8DCC9] bg-[#FFFDF9] cursor-pointer hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* LEVEL 1: TITLE (Expressive Display Font, Bold) */}
                  <h3 className="font-lobster font-bold text-2xl text-[#252321] group-hover:text-[#B52D3A] transition-colors leading-snug mb-1.5">
                    {project.title}
                  </h3>

                  {/* LEVEL 2: CONTEXT & STATUS (Monospace, Bold Badges) */}
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="text-xs font-mono font-bold text-[#702632] bg-[#FFF0A8]/85 px-2 py-0.5 rounded border border-[#E8DCC9]">
                      {project.category}
                    </span>
                    {project.isLive ? (
                      <span className="text-[10px] font-mono text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-300 font-bold flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                        LIVE
                      </span>
                    ) : (
                      <span className="text-[10px] font-mono text-[#625A53] bg-[#FFF9EF] px-2 py-0.5 rounded-md border border-[#E8DCC9] font-bold">
                        {project.isConcept ? 'DESIGN SPEC' : 'PROTOTYPE'}
                      </span>
                    )}
                  </div>

                  {/* LEVEL 3: DESCRIPTION (Clean Sans, Regular Weight, Charcoal) */}
                  <p className="font-sans text-xs sm:text-sm text-[#4A4440] leading-relaxed mb-3.5 font-normal">
                    {project.description}
                  </p>

                  {/* LEVEL 4: CONTRIBUTION (Field-Note Memo Card, Bold Tag, Semibold Body) */}
                  <div className="p-3 sm:p-3.5 rounded-xl bg-[#FFFDF0] border-2 border-dashed border-[#E8D9A5] mb-3 text-xs text-[#252321] shadow-2xs">
                    <div className="flex items-center gap-1 font-mono text-[10px] font-bold text-[#702632] uppercase tracking-wider mb-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#B52D3A] shrink-0" />
                      <span>MY CONTRIBUTION</span>
                    </div>
                    <p className="font-sans text-xs sm:text-[13px] leading-relaxed text-[#252321] font-semibold">
                      {project.contribution}
                    </p>
                  </div>

                  {/* LEVEL 5: Key Tools */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tools.slice(0, 4).map((tool, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-md bg-white border border-[#E8DCC9] text-[11px] font-mono font-medium text-[#625A53]"
                      >
                        ✦ {tool}
                      </span>
                    ))}
                  </div>

                  {/* Live Preview */}
                  <div className="my-3">
                    <ProjectLivePreview projectId={project.id} />
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-3.5 border-t border-[#E8DCC9] flex flex-wrap items-center gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectProject(project);
                    }}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl cherry-btn font-sans text-xs font-bold cursor-pointer hover:scale-102 transition-transform"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  {project.liveDemoUrl && (
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1 px-3 py-2 rounded-xl butter-btn font-sans text-xs font-bold cursor-pointer"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3 h-3 text-[#B52D3A]" />
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1 px-2.5 py-2 rounded-xl bg-white hover:bg-[#F6E7A8]/40 border border-[#E8DCC9] text-[#252321] font-sans text-xs font-semibold"
                    >
                      <Github className="w-3 h-3" />
                      <span>Code</span>
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
