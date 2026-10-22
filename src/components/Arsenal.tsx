import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import {
  Sparkles,
  ArrowUpRight,
  ExternalLink,
  X,
  CheckCircle2,
  Megaphone,
  Laptop,
  Lightbulb,
  Compass,
  Cpu,
  Layers,
  ArrowRight,
  BookOpen,
  Code,
  ShieldCheck,
  TrendingUp,
  Check,
} from 'lucide-react';
import { MarketingCertificatesModal } from './MarketingCertificatesModal.tsx';
import { WarpedCheckerboard } from './WarpedCheckerboard.tsx';
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
} from './ScrapbookDoodles.tsx';
import { SkillsFrameDecorations } from './SectionFrameBorders.tsx';

// ---------------------------------------------------------------------------
// TYPES FOR THE 5 SKILL WORLDS
// ---------------------------------------------------------------------------
export interface SkillWorld {
  id: 'designer' | 'ai-explorer' | 'marketing-mind' | 'builder' | 'problem-solver';
  number: string;
  badge: string;
  title: string;
  tagline: string;
  philosophy: string;
  skills: string[];
  paperTheme: 'butter' | 'cream' | 'blush' | 'mint' | 'kraft';
  tiltDeg: number;
  featuredEvidence: string;
  relatedProjects: {
    name: string;
    context: string;
    link?: string;
  }[];
  relatedHonors?: string[];
}

export const Arsenal: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [selectedWorld, setSelectedWorld] = useState<SkillWorld | null>(null);
  const [isMarketingModalOpen, setIsMarketingModalOpen] = useState(false);

  const skillWorlds: SkillWorld[] = [
    // -------------------------------------------------------------------------
    // WORLD 01 — THE DESIGNER (PRIMARY PROFESSIONAL IDENTITY)
    // -------------------------------------------------------------------------
    {
      id: 'designer',
      number: '01',
      badge: 'PRIMARY CRAFT',
      title: 'THE DESIGNER',
      tagline: 'I turn messy ideas into thoughtful digital experiences.',
      philosophy:
        'Design is not surface decoration. It is about understanding human friction, creating rhythm, and ensuring interfaces feel tactile, intuitive, and welcoming.',
      skills: [
        'UI/UX Design',
        'Product Design',
        'Product Thinking',
        'Web Design',
        'User Flows',
        'Wireframing',
        'Prototyping',
        'Figma Design Systems',
      ],
      paperTheme: 'butter',
      tiltDeg: -1,
      featuredEvidence:
        'Designed component tokens and user flows for StuMate, the interactive cassette layout for Your Life in Receipts, and behavioral financial interfaces.',
      relatedProjects: [
        {
          name: 'Your Life, In Receipts',
          context: 'Thermal receipt UX & interactive print physics',
          link: '#work',
        },
        {
          name: 'StuMate MVP',
          context: 'Full design system library & student matching flows',
        },
        {
          name: 'The First Week',
          context: 'Empathy-driven campus orientation wireframes',
          link: '#work',
        },
      ],
      relatedHonors: [
        'Prompt Run 2026 Top 10 Finalist (6th Place, Score: 96/100)',
        'WebRush Hackathon Rank #28 (Solo UI & Code Sprint)',
      ],
    },

    // -------------------------------------------------------------------------
    // WORLD 02 — THE AI EXPLORER
    // -------------------------------------------------------------------------
    {
      id: 'ai-explorer',
      number: '02',
      badge: 'EXPERIMENTAL LAB',
      title: 'THE AI EXPLORER',
      tagline: 'Exploring how AI can turn ideas into experiments, prototypes, and possibilities.',
      philosophy:
        'Treating AI as a cognitive amplifier and tactile design medium — turning ambiguous generative capabilities into low-latency, friendly controls rather than sterile text boxes.',
      skills: [
        'Generative AI',
        'Prompt Engineering',
        'AI Tools & Workflows',
        'AI-Assisted Development',
        'Rapid Prototyping',
        'AI Applications & APIs',
      ],
      paperTheme: 'blush',
      tiltDeg: 1.2,
      featuredEvidence:
        'Awarded 1st Runner-Up at NexaForge Creative Prompt Challenge for multimodal prompt structuring; earned Google Cloud Generative AI credential.',
      relatedProjects: [
        {
          name: 'NexaForge AI Challenge',
          context: 'Award-winning multimodal prompt engineering heuristics',
          link: '#certificates',
        },
        {
          name: 'Udyog Mitra Concept',
          context: 'Hindi-first conversational voice interaction model',
        },
      ],
      relatedHonors: [
        '1st Runner-Up: NexaForge × Unstop AI Prompt Challenge 2026',
        'Google Cloud Generative AI Verified Credential',
      ],
    },

    // -------------------------------------------------------------------------
    // WORLD 03 — THE MARKETING MIND (NEW & IMPORTANT)
    // -------------------------------------------------------------------------
    {
      id: 'marketing-mind',
      number: '03',
      badge: 'NEW SIDE QUEST! ✨',
      title: 'THE MARKETING MIND',
      tagline: 'Understanding audiences, communicating value, and exploring what makes people connect with ideas.',
      philosophy:
        'A thoughtfully designed product only creates value when people can find it, understand its promise, and feel an emotional connection to the message.',
      skills: [
        'Digital Marketing',
        'Audience Understanding',
        'Content Strategy',
        'Product Positioning',
        'Brand Communication',
        'Funnel Heuristics',
        'Marketing Analytics',
      ],
      paperTheme: 'cream',
      tiltDeg: -1.5,
      featuredEvidence:
        'Earned the verified Simplilearn SkillUp Digital Marketing credential focusing on acquisition funnels, positioning strategy, and audience engagement loops.',
      relatedProjects: [
        {
          name: 'Digital Marketing & Growth',
          context: 'Customer acquisition loops and value proposition framing',
          link: '#certificates',
        },
      ],
      relatedHonors: ['Simplilearn SkillUp Verified Digital Marketing Certificate (2024)'],
    },

    // -------------------------------------------------------------------------
    // WORLD 04 — THE BUILDER
    // -------------------------------------------------------------------------
    {
      id: 'builder',
      number: '04',
      badge: 'CODE & SYSTEMS',
      title: 'THE BUILDER',
      tagline: 'Making ideas real, one experiment and one line of code at a time.',
      philosophy:
        'Ideas should not remain trapped in Figma files forever. Writing clean semantic code ensures design decisions translate faithfully into shipped experiences.',
      skills: [
        'React',
        'JavaScript (ES6+)',
        'HTML5 & CSS3',
        'TypeScript',
        'Python',
        'SQL',
        'C',
        'C++',
        'Java — Basic',
        'Data Structures & Algorithms',
      ],
      paperTheme: 'kraft',
      tiltDeg: 1,
      featuredEvidence:
        'Built and deployed live web apps on Vercel including the solo-built WebRush receipt app; verified in Responsive Web Design curriculum.',
      relatedProjects: [
        {
          name: 'Your Life, In Receipts (Live)',
          context: 'Solo React + TS build passing Vercel deployment under 6 hours',
          link: 'https://yourlifeinrec.vercel.app/',
        },
        {
          name: 'The First Week (Live)',
          context: 'Interactive component architecture in React & Tailwind',
          link: 'https://first-week-of-clg.vercel.app/',
        },
      ],
      relatedHonors: ['Responsive Web Design Technical Certification'],
    },

    // -------------------------------------------------------------------------
    // WORLD 05 — THE PROBLEM SOLVER
    // -------------------------------------------------------------------------
    {
      id: 'problem-solver',
      number: '05',
      badge: 'RESEARCH & HEURISTICS',
      title: 'THE PROBLEM SOLVER',
      tagline: 'Looking beyond the interface to understand the problem worth solving.',
      philosophy:
        'Great solutions start by asking uncomfortable questions: Where is the real friction? What assumptions are untested? How can we reduce cognitive load?',
      skills: [
        'Problem Identification',
        'User Research',
        'Product Thinking',
        'Creative Problem-Solving',
        'Rapid Experimentation',
        'Iterative Design',
      ],
      paperTheme: 'mint',
      tiltDeg: -0.8,
      featuredEvidence:
        'Executed 28 user interviews for student platforms and architected the 5-stage civic barrier tracking pipeline for AccessGap.',
      relatedProjects: [
        {
          name: 'StuMate User Research',
          context: '28 university student interviews synthesized into affinity maps',
        },
        {
          name: 'AccessGap Specification',
          context: 'Audit → Score → Prioritize → Fix → Re-audit → Prove pipeline',
        },
      ],
      relatedHonors: ['Foundations of User Experience (UX) Professional Credential'],
    },
  ];

  const getThemeClasses = (theme: SkillWorld['paperTheme']) => {
    switch (theme) {
      case 'butter':
        return 'bg-[#FFFDF0] border-[#E8D9A5] shadow-[0_8px_24px_-4px_rgba(246,231,168,0.4)]';
      case 'blush':
        return 'bg-[#FFF9FA] border-[#F2D2D7] shadow-[0_8px_24px_-4px_rgba(181,45,58,0.1)]';
      case 'mint':
        return 'bg-[#F9FCFA] border-[#D0E5D8] shadow-[0_8px_24px_-4px_rgba(74,107,53,0.1)]';
      case 'kraft':
        return 'bg-[#FAF6EE] border-[#E2D5BE] shadow-[0_8px_24px_-4px_rgba(112,38,50,0.08)]';
      case 'cream':
      default:
        return 'bg-[#FFFDF9] border-[#E8DCC9] shadow-[0_8px_24px_-4px_rgba(37,35,33,0.08)]';
    }
  };

  return (
    <section
      id="skills"
      className="py-10 sm:py-14 px-4 sm:px-6 lg:px-8 bg-transparent text-[#252321] relative overflow-visible"
    >
      <div className="max-w-7xl mx-auto relative z-10 bg-[#FFFDF9]/95 border-2 border-[#252321] rounded-3xl sm:rounded-[36px] p-6 sm:p-10 lg:p-12 paper-note-shadow">
        {/* Full 4-Sided Scrapbook Frame Sticker Decorations */}
        <SkillsFrameDecorations />
        
        {/* =====================================================================
            1. SECTION INTRODUCTION (Clear Recruiter-Focused Value Proposition)
           ===================================================================== */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 pb-6 border-b-2 border-[#E8DCC9]">
          <div>
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-2.5">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F6E7A8] border border-[#E4C868] shadow-xs text-xs font-mono font-bold text-[#702632]">
                <span className="w-2 h-2 rounded-full bg-[#B52D3A]" />
                <span>MULTIDISCIPLINARY SKILL MATRIX</span>
              </span>
              <span className="text-xs font-mono text-[#625A53] hidden sm:inline">
                ✦ UI/UX · Research · Code · AI Prototyping
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-lobster font-bold tracking-normal text-[#252321] leading-tight">
              THE SNEHA SKILL <span className="text-[#B52D3A]">UNIVERSE</span> 🍒
            </h2>

            {/* Supporting Text in Clean Sans */}
            <p className="font-sans text-sm sm:text-base text-[#4A4440] max-w-2xl font-normal leading-relaxed mt-2.5">
              A balanced matrix pairing core Product Design &amp; User Research with rapid AI-assisted prototyping, production frontend code, and strategic storytelling.
            </p>
          </div>

          {/* Quick recce / explore hint */}
          <div className="flex flex-col items-start lg:items-end gap-1 text-xs font-mono text-[#702632]">
            <span className="px-3 py-1 rounded-lg bg-white border border-[#E8DCC9] font-bold shadow-xs">
              ✦ CLICK ANY WORLD TO UNPACK ARTIFACTS
            </span>
            <span className="text-[#625A53]">5 interactive domains · verified receipts</span>
          </div>
        </div>

        {/* =====================================================================
            2. THE FIVE SKILL WORLDS (Grouped: Primary Core Design vs Cross-Functional)
           ===================================================================== */}
        <div className="space-y-8">
          
          {/* TIER 1: PRIMARY PRODUCT DESIGN & USER RESEARCH FOUNDATION */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="px-2.5 py-0.5 rounded-md bg-[#B52D3A] text-white font-mono text-[11px] font-bold tracking-wider uppercase">
                PRIMARY FOCUS · CORE PRODUCT DESIGN &amp; RESEARCH
              </span>
              <span className="text-xs font-mono text-[#625A53] hidden sm:inline">
                (Design Systems, Heuristics, Interviews &amp; Prototyping)
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
              
              {/* WORLD 01: THE DESIGNER */}
              <motion.div
                whileHover={shouldReduceMotion ? {} : { y: -4 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                onClick={() => setSelectedWorld(skillWorlds[0])}
                className={`md:col-span-12 lg:col-span-7 relative p-6 sm:p-8 rounded-2xl border-2 flex flex-col justify-between cursor-pointer group transition-all duration-200 ${getThemeClasses(
                  skillWorlds[0].paperTheme
                )}`}
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-md bg-[#B52D3A] text-[#FFF9EF] font-mono text-xs font-bold tracking-wider uppercase">
                        {skillWorlds[0].badge}
                      </span>
                      <span className="font-mono text-xs font-bold text-[#702632]">
                        WORLD {skillWorlds[0].number}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-[#B52D3A] font-bold">
                      CORE DISCIPLINE
                    </span>
                  </div>

                  <h3 className="font-lobster text-2xl sm:text-4xl text-[#252321] group-hover:text-[#B52D3A] transition-colors mb-2">
                    {skillWorlds[0].title}
                  </h3>

                  <p className="font-sans text-sm sm:text-base text-[#252321] font-semibold leading-relaxed mb-2.5">
                    &ldquo;{skillWorlds[0].tagline}&rdquo;
                  </p>

                  <p className="font-sans text-xs sm:text-sm text-[#4A4440] leading-relaxed mb-5 max-w-xl">
                    {skillWorlds[0].philosophy}
                  </p>

                  {/* Skills Tags Grid */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {skillWorlds[0].skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-3 py-1.5 rounded-lg bg-white text-[#252321] font-mono text-xs font-medium border border-[#E8DCC9] shadow-2xs group-hover:border-[#B52D3A]/40 transition-colors"
                      >
                        ✦ {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3.5 border-t border-[#E8DCC9] flex items-center justify-between text-xs font-mono">
                  <span className="text-[#625A53]">Figma Systems · UI/UX Craft</span>
                  <span className="inline-flex items-center gap-1 font-bold text-[#B52D3A] group-hover:translate-x-1 transition-transform">
                    <span>Inspect Design Evidence</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </motion.div>

              {/* WORLD 05: THE PROBLEM SOLVER */}
              <motion.div
                whileHover={shouldReduceMotion ? {} : { y: -4 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                onClick={() => setSelectedWorld(skillWorlds[4])}
                className={`md:col-span-12 lg:col-span-5 relative p-6 sm:p-8 rounded-2xl border-2 flex flex-col justify-between cursor-pointer group transition-all duration-200 ${getThemeClasses(
                  skillWorlds[4].paperTheme
                )}`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-md bg-[#252321] text-white font-mono text-xs font-bold">
                        {skillWorlds[4].badge}
                      </span>
                      <span className="font-mono text-xs font-bold text-[#702632]">
                        WORLD {skillWorlds[4].number}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-[#702632] font-bold">
                      USER RESEARCH
                    </span>
                  </div>

                  <h3 className="font-lobster text-2xl sm:text-4xl text-[#252321] group-hover:text-[#B52D3A] transition-colors mb-2">
                    {skillWorlds[4].title}
                  </h3>

                  <p className="font-sans text-sm sm:text-base text-[#252321] font-semibold leading-relaxed mb-2.5">
                    &ldquo;{skillWorlds[4].tagline}&rdquo;
                  </p>

                  <p className="font-sans text-xs sm:text-sm text-[#4A4440] leading-relaxed mb-5">
                    {skillWorlds[4].philosophy}
                  </p>

                  {/* Skills Tags Grid */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {skillWorlds[4].skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-3 py-1.5 rounded-lg bg-white text-[#252321] font-mono text-xs font-medium border border-[#E8DCC9] shadow-2xs group-hover:border-[#B52D3A]/40 transition-colors"
                      >
                        ✦ {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3.5 border-t border-[#E8DCC9] flex items-center justify-between text-xs font-mono">
                  <span className="text-[#625A53]">User Interviews &amp; Heuristics</span>
                  <span className="inline-flex items-center gap-1 font-bold text-[#B52D3A] group-hover:translate-x-1 transition-transform">
                    <span>Unpack Research</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </motion.div>

            </div>
          </div>

          {/* TIER 2: CROSS-FUNCTIONAL MULTIDISCIPLINARY SUPERPOWERS */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="px-2.5 py-0.5 rounded-md bg-[#FFF0A8] text-[#702632] border border-[#E4C868] font-mono text-[11px] font-bold tracking-wider uppercase">
                COMPLEMENTARY SUPERPOWERS · AI, CODE &amp; PRODUCT STRATEGY
              </span>
              <span className="text-xs font-mono text-[#625A53] hidden sm:inline">
                (End-to-End Execution Capabilities)
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
              
              {/* WORLD 02: THE AI EXPLORER */}
              <motion.div
                whileHover={shouldReduceMotion ? {} : { y: -4 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                onClick={() => setSelectedWorld(skillWorlds[1])}
                className={`relative p-6 rounded-2xl border-2 flex flex-col justify-between cursor-pointer group transition-all duration-200 ${getThemeClasses(
                  skillWorlds[1].paperTheme
                )}`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <span className="px-2 py-0.5 rounded bg-white text-[#702632] font-mono text-[11px] font-bold border border-[#E8DCC9]">
                      {skillWorlds[1].badge}
                    </span>
                    <span className="font-mono text-xs font-bold text-[#702632]">
                      WORLD {skillWorlds[1].number}
                    </span>
                  </div>

                  <h3 className="font-lobster text-2xl text-[#252321] group-hover:text-[#B52D3A] transition-colors mb-1.5">
                    {skillWorlds[1].title}
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-[#252321] font-semibold leading-relaxed mb-2">
                    &ldquo;{skillWorlds[1].tagline}&rdquo;
                  </p>

                  <p className="font-sans text-xs text-[#4A4440] leading-relaxed mb-4">
                    {skillWorlds[1].philosophy}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {skillWorlds[1].skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 rounded-md bg-white text-[#252321] font-mono text-xs font-medium border border-[#E8DCC9]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-[#E8DCC9] flex items-center justify-between text-xs font-mono">
                  <span className="text-[#625A53]">AI Prototyping</span>
                  <span className="inline-flex items-center gap-1 font-bold text-[#B52D3A]">
                    <span>Explore Lab</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </motion.div>

              {/* WORLD 04: THE BUILDER */}
              <motion.div
                whileHover={shouldReduceMotion ? {} : { y: -4 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                onClick={() => setSelectedWorld(skillWorlds[3])}
                className={`relative p-6 rounded-2xl border-2 flex flex-col justify-between cursor-pointer group transition-all duration-200 ${getThemeClasses(
                  skillWorlds[3].paperTheme
                )}`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <span className="px-2 py-0.5 rounded bg-white text-[#702632] font-mono text-[11px] font-bold border border-[#E8DCC9]">
                      {skillWorlds[3].badge}
                    </span>
                    <span className="font-mono text-xs font-bold text-[#702632]">
                      WORLD {skillWorlds[3].number}
                    </span>
                  </div>

                  <h3 className="font-lobster text-2xl text-[#252321] group-hover:text-[#B52D3A] transition-colors mb-1.5">
                    {skillWorlds[3].title}
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-[#252321] font-semibold leading-relaxed mb-2">
                    &ldquo;{skillWorlds[3].tagline}&rdquo;
                  </p>

                  <p className="font-sans text-xs text-[#4A4440] leading-relaxed mb-4">
                    {skillWorlds[3].philosophy}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {skillWorlds[3].skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 rounded-md bg-white text-[#252321] font-mono text-xs font-medium border border-[#E8DCC9]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-[#E8DCC9] flex items-center justify-between text-xs font-mono">
                  <span className="text-[#625A53]">React · TypeScript · CSS</span>
                  <span className="inline-flex items-center gap-1 font-bold text-[#B52D3A]">
                    <span>View Code</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </motion.div>

              {/* WORLD 03: THE MARKETING MIND */}
              <motion.div
                whileHover={shouldReduceMotion ? {} : { y: -4 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                onClick={() => setSelectedWorld(skillWorlds[2])}
                className={`relative p-6 rounded-2xl border-2 flex flex-col justify-between cursor-pointer group transition-all duration-200 ${getThemeClasses(
                  skillWorlds[2].paperTheme
                )}`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <span className="px-2 py-0.5 rounded bg-white text-[#702632] font-mono text-[11px] font-bold border border-[#E8DCC9]">
                      {skillWorlds[2].badge}
                    </span>
                    <span className="font-mono text-xs font-bold text-[#702632]">
                      WORLD {skillWorlds[2].number}
                    </span>
                  </div>

                  <h3 className="font-lobster text-2xl text-[#252321] group-hover:text-[#B52D3A] transition-colors mb-1.5">
                    {skillWorlds[2].title}
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-[#252321] font-semibold leading-relaxed mb-2">
                    &ldquo;{skillWorlds[2].tagline}&rdquo;
                  </p>

                  <p className="font-sans text-xs text-[#4A4440] leading-relaxed mb-4">
                    {skillWorlds[2].philosophy}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {skillWorlds[2].skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 rounded-md bg-white text-[#252321] font-mono text-xs font-medium border border-[#E8DCC9]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-[#E8DCC9] space-y-1.5">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsMarketingModalOpen(true);
                    }}
                    className="w-full py-2 px-3 rounded-xl cherry-btn font-sans text-xs font-bold text-white shadow-xs cursor-pointer flex items-center justify-center gap-1.5 text-center transition-all hover:scale-[1.01]"
                  >
                    <span>View Marketing Evidence</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>

            </div>
          </div>

        </div>

      </div>

      {/* =====================================================================
          3. SKILL WORLD DEEP-DIVE MODAL (On Click of Any of the 5 Worlds)
         ===================================================================== */}
      <AnimatePresence>
        {selectedWorld && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#252321]/65 backdrop-blur-xs overflow-y-auto"
            onClick={() => setSelectedWorld(null)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="world-modal-title"
          >
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95, y: 16 }}
              animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl bg-[#FFFDF9] rounded-[28px] sm:rounded-3xl border-3 border-[#E8DCC9] shadow-2xl flex flex-col max-h-[90vh] overflow-hidden text-[#252321] paper-sketchbook my-auto"
            >
              {/* Header */}
              <div className="bg-[#FFF9EF] border-b-2 border-[#E8DCC9] px-6 py-4 flex items-center justify-between gap-4 sticky top-0 z-20">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#B52D3A] text-white font-mono text-xs font-bold uppercase">
                    WORLD {selectedWorld.number}
                  </span>
                  <span className="font-mono text-xs font-bold text-[#702632]">
                    {selectedWorld.badge}
                  </span>
                </div>

                <button
                  onClick={() => setSelectedWorld(null)}
                  className="w-9 h-9 rounded-xl bg-white hover:bg-[#F6E7A8] text-[#252321] hover:text-[#B52D3A] border border-[#E8DCC9] flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Body */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1">
                <div>
                  <h2 id="world-modal-title" className="font-lobster text-3xl sm:text-4xl text-[#252321] mb-2">
                    {selectedWorld.title}
                  </h2>
                  <p className="font-sans text-base text-[#252321] font-semibold leading-relaxed mb-3">
                    &ldquo;{selectedWorld.tagline}&rdquo;
                  </p>
                  <p className="font-sans text-xs sm:text-sm text-[#625A53] leading-relaxed">
                    {selectedWorld.philosophy}
                  </p>
                </div>

                {/* Skills Chips */}
                <div>
                  <h4 className="font-mono text-xs font-bold text-[#702632] uppercase mb-2">
                    Demonstrated Competencies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedWorld.skills.map((s, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-xl bg-[#FFF9EF] text-[#252321] font-mono text-xs font-bold border border-[#E8DCC9]"
                      >
                        ✓ {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Real-World Evidence */}
                <div className="p-4 rounded-2xl bg-[#FFF9EF] border border-[#E8DCC9]">
                  <h4 className="font-mono text-[11px] font-bold text-[#B52D3A] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Real-World Proof &amp; Practical Application</span>
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-[#625A53] leading-relaxed">
                    {selectedWorld.featuredEvidence}
                  </p>
                </div>

                {/* Related Projects */}
                {selectedWorld.relatedProjects && selectedWorld.relatedProjects.length > 0 && (
                  <div>
                    <h4 className="font-mono text-xs font-bold text-[#702632] uppercase mb-2">
                      Related Case Studies &amp; Projects
                    </h4>
                    <div className="space-y-2">
                      {selectedWorld.relatedProjects.map((p, idx) => (
                        <div
                          key={idx}
                          className="p-3 rounded-xl bg-white border border-[#E8DCC9] flex items-center justify-between gap-3 text-xs"
                        >
                          <div>
                            <span className="font-bold text-[#252321] block">{p.name}</span>
                            <span className="text-[#625A53]">{p.context}</span>
                          </div>
                          {p.link && (
                            <a
                              href={p.link}
                              onClick={() => setSelectedWorld(null)}
                              className="text-[#B52D3A] font-mono font-bold hover:underline shrink-0 flex items-center gap-1"
                            >
                              <span>View</span>
                              <ArrowUpRight className="w-3.5 h-3.5" />
                            </a>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Special Action if Marketing Mind */}
                {selectedWorld.id === 'marketing-mind' && (
                  <div className="pt-2">
                    <button
                      onClick={() => {
                        setSelectedWorld(null);
                        setIsMarketingModalOpen(true);
                      }}
                      className="w-full py-2.5 px-4 rounded-xl cherry-btn font-mono text-xs font-bold text-white shadow-xs cursor-pointer flex items-center justify-center gap-2"
                    >
                      <Megaphone className="w-4 h-4 text-[#F6E7A8]" />
                      <span>OPEN DIGITAL MARKETING CERTIFICATES DOSSIER</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="bg-[#FFF9EF] border-t-2 border-[#E8DCC9] px-6 py-4 flex justify-end">
                <button
                  onClick={() => setSelectedWorld(null)}
                  className="px-5 py-2 rounded-xl bg-white hover:bg-[#F6E7A8] text-[#252321] font-mono text-xs font-bold border border-[#E8DCC9] transition-colors cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* =====================================================================
          4. DEDICATED DIGITAL MARKETING CERTIFICATES MODAL
         ===================================================================== */}
      <MarketingCertificatesModal
        isOpen={isMarketingModalOpen}
        onClose={() => setIsMarketingModalOpen(false)}
      />
    </section>
  );
};
