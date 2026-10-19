import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import {
  Compass,
  MapPin,
  Flag,
  Sparkles,
  Trophy,
  ArrowRight,
  ChevronRight,
  ExternalLink,
  Laptop,
  GraduationCap,
  Lightbulb,
  CheckCircle2,
  Calendar,
  Layers,
  ArrowUpRight,
  BookOpen,
} from 'lucide-react';
import { MilestonesFrameDecorations } from './SectionFrameBorders.tsx';

// ---------------------------------------------------------------------------
// 2D JOURNEY MAP ILLUSTRATION ASSETS (SVG & Pixel Art)
// ---------------------------------------------------------------------------

// 1. Pixel Cherry
const PixelCherry: React.FC<{ size?: number; className?: string }> = ({
  size = 18,
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

// 2. Pixel Trophy
const PixelTrophy: React.FC<{ size?: number; className?: string }> = ({
  size = 20,
  className = '',
}) => (
  <div
    className={`inline-block select-none pointer-events-none ${className}`}
    style={{ width: size, height: size }}
  >
    <svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect x="3" y="2" width="10" height="2" fill="#E4C868" />
      <rect x="4" y="4" width="8" height="5" fill="#F6E7A8" />
      <rect x="2" y="4" width="2" height="3" fill="#E4C868" />
      <rect x="12" y="4" width="2" height="3" fill="#E4C868" />
      <rect x="6" y="9" width="4" height="2" fill="#E4C868" />
      <rect x="7" y="11" width="2" height="2" fill="#B52D3A" />
      <rect x="5" y="13" width="6" height="2" fill="#702632" />
      <rect x="6" y="5" width="2" height="2" fill="#FFFFFF" />
    </svg>
  </div>
);

// 3. Pixel Footprints along trail
const PixelFootprint: React.FC<{ className?: string; rotate?: number }> = ({
  className = '',
  rotate = 0,
}) => (
  <div
    className={`inline-block select-none pointer-events-none opacity-40 ${className}`}
    style={{ transform: `rotate(${rotate}deg)` }}
  >
    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Heel */}
      <circle cx="3" cy="4" r="1.8" fill="#B52D3A" />
      {/* Ball */}
      <ellipse cx="8" cy="4" rx="2.5" ry="3.2" fill="#B52D3A" />
      {/* Toes */}
      <circle cx="11" cy="2" r="0.8" fill="#B52D3A" />
      <circle cx="11.5" cy="4" r="0.8" fill="#B52D3A" />
      <circle cx="11" cy="6" r="0.8" fill="#B52D3A" />
    </svg>
  </div>
);

// 4. Hand-Drawn Map Landmarks for Each Milestone Node
interface LandmarkProps {
  type: 'foundation' | 'mca' | 'design' | 'building' | 'hackathon' | 'next' | 'destination';
  isActive?: boolean;
}

const MapLandmark: React.FC<LandmarkProps> = ({ type, isActive = false }) => {
  switch (type) {
    case 'foundation':
      // Open Book & Stepping Stone
      return (
        <div className="relative w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center">
          <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            {/* Stepping stone base */}
            <ellipse cx="32" cy="48" rx="26" ry="10" fill="#EAE0D0" stroke="#702632" strokeWidth="2" />
            <ellipse cx="32" cy="45" rx="22" ry="7" fill="#FFF9EF" />
            {/* Open Book */}
            <path
              d="M16 28 C24 24 30 26 32 30 C34 26 40 24 48 28 L48 40 C40 36 34 38 32 42 C30 38 24 36 16 40 Z"
              fill="#FFFDF9"
              stroke="#B52D3A"
              strokeWidth="2.2"
              strokeLinejoin="round"
            />
            {/* Spine */}
            <line x1="32" y1="30" x2="32" y2="42" stroke="#702632" strokeWidth="2" />
            {/* Page lines */}
            <line x1="20" y1="32" x2="28" y2="30" stroke="#B52D3A" strokeWidth="1.2" strokeLinecap="round" />
            <line x1="20" y1="36" x2="28" y2="34" stroke="#B52D3A" strokeWidth="1.2" strokeLinecap="round" />
            <line x1="36" y1="30" x2="44" y2="32" stroke="#B52D3A" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
        </div>
      );

    case 'mca':
      // Green Academic Building with Red Flag
      return (
        <div className="relative w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center">
          <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            {/* Ground patch */}
            <ellipse cx="32" cy="52" rx="26" ry="8" fill="#E2EAD8" stroke="#4A6B35" strokeWidth="1.5" />
            {/* Building Body */}
            <rect x="18" y="26" width="28" height="24" rx="2" fill="#315A45" stroke="#252321" strokeWidth="2" />
            {/* Triangle Roof */}
            <polygon points="14,26 32,10 50,26" fill="#D92843" stroke="#252321" strokeWidth="2" />
            {/* Red Flag atop roof */}
            <line x1="32" y1="10" x2="32" y2="2" stroke="#252321" strokeWidth="1.8" />
            <polygon points="32,2 42,5 32,8" fill="#F6E7A8" stroke="#B52D3A" strokeWidth="1.2" />
            {/* Arched Door */}
            <path d="M28 50 V38 C28 36 36 36 36 38 V50 Z" fill="#FFF9EF" stroke="#252321" strokeWidth="1.5" />
            {/* Windows */}
            <rect x="22" y="30" width="5" height="5" rx="1" fill="#FFF3DA" stroke="#252321" strokeWidth="1" />
            <rect x="37" y="30" width="5" height="5" rx="1" fill="#FFF3DA" stroke="#252321" strokeWidth="1" />
          </svg>
        </div>
      );

    case 'design':
      // Glowing Idea Lightbulb & Wireframe Board
      return (
        <div className="relative w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center">
          <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            {/* Wireframe Canvas easel */}
            <rect x="14" y="18" width="36" height="28" rx="3" fill="#FFFDF9" stroke="#702632" strokeWidth="2" />
            {/* Miniature UI Boxes on canvas */}
            <rect x="18" y="22" width="12" height="4" rx="1" fill="#F6E7A8" />
            <rect x="18" y="28" width="28" height="2" rx="0.5" fill="#E8DCC9" />
            <rect x="18" y="32" width="20" height="2" rx="0.5" fill="#E8DCC9" />
            <rect x="18" y="36" width="10" height="6" rx="1" fill="#B52D3A" />
            <rect x="30" y="36" width="16" height="6" rx="1" fill="#315A45" />
            {/* Glowing Lightbulb popping above */}
            <circle cx="48" cy="14" r="8" fill="#F6E7A8" stroke="#B52D3A" strokeWidth="1.8" />
            <path d="M46 18 H50 V20 H46 Z" fill="#702632" />
            {/* Glow rays */}
            <line x1="48" y1="3" x2="48" y2="1" stroke="#D92843" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="57" y1="8" x2="59" y2="7" stroke="#D92843" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="39" y1="8" x2="37" y2="7" stroke="#D92843" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
      );

    case 'building':
      // Laptop with Cherry Sticker & Cassette
      return (
        <div className="relative w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center">
          <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            {/* Laptop Base */}
            <polygon points="10,48 54,48 58,52 6,52" fill="#EAE0D0" stroke="#252321" strokeWidth="2" />
            {/* Screen Body */}
            <rect x="14" y="20" width="36" height="26" rx="2" fill="#252321" stroke="#252321" strokeWidth="2" />
            {/* Inner Screen Display (Code Canvas) */}
            <rect x="16" y="22" width="32" height="22" rx="1" fill="#FFF9EF" />
            {/* Cherry Sticker on lid or screen */}
            <circle cx="28" cy="33" r="3" fill="#B52D3A" />
            <circle cx="34" cy="33" r="3" fill="#B52D3A" />
            <path d="M31 28 C29 31 28 33 28 33 M31 28 C33 31 34 33 34 33" stroke="#4A6B35" strokeWidth="1" />
            {/* Code Lines */}
            <line x1="19" y1="26" x2="28" y2="26" stroke="#B52D3A" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="19" y1="29" x2="36" y2="29" stroke="#702632" strokeWidth="1" strokeLinecap="round" />
          </svg>
        </div>
      );

    case 'hackathon':
      // Golden Trophy with Star Flag
      return (
        <div className="relative w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center">
          <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            {/* Trophy Pedestal */}
            <rect x="22" y="44" width="20" height="8" rx="1" fill="#702632" stroke="#252321" strokeWidth="1.8" />
            <rect x="28" y="38" width="8" height="6" fill="#E4C868" stroke="#252321" strokeWidth="1.5" />
            {/* Trophy Cup */}
            <path
              d="M18 16 H46 V26 C46 34 38 38 32 38 C26 38 18 34 18 26 Z"
              fill="#F6E7A8"
              stroke="#252321"
              strokeWidth="2"
            />
            {/* Left Handle */}
            <path d="M18 20 C12 20 12 28 18 30" stroke="#252321" strokeWidth="2" fill="none" />
            {/* Right Handle */}
            <path d="M46 20 C52 20 52 28 46 30" stroke="#252321" strokeWidth="2" fill="none" />
            {/* Star Icon on Trophy */}
            <polygon
              points="32,20 34,25 39,25 35,28 37,33 32,30 27,33 29,28 25,25 30,25"
              fill="#D92843"
            />
          </svg>
        </div>
      );

    case 'next':
      // Workshop Studio with Accessibility Compass & Audio Sign
      return (
        <div className="relative w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center">
          <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            {/* Workshop Building */}
            <rect x="12" y="24" width="40" height="26" rx="2" fill="#FAF6EE" stroke="#702632" strokeWidth="2" />
            {/* Striped Awning Roof */}
            <polygon points="8,24 56,24 52,14 12,14" fill="#F6E7A8" stroke="#702632" strokeWidth="1.8" />
            <line x1="22" y1="14" x2="20" y2="24" stroke="#D92843" strokeWidth="2.5" />
            <line x1="32" y1="14" x2="32" y2="24" stroke="#D92843" strokeWidth="2.5" />
            <line x1="42" y1="14" x2="44" y2="24" stroke="#D92843" strokeWidth="2.5" />
            {/* Accessibility / Voice Symbol */}
            <circle cx="32" cy="36" r="6" stroke="#B52D3A" strokeWidth="1.8" fill="#FFF9EF" />
            <circle cx="32" cy="36" r="2" fill="#B52D3A" />
            <path d="M26 33 C25 35 25 37 26 39 M38 33 C39 35 39 37 38 39" stroke="#702632" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
        </div>
      );

    case 'destination':
    default:
      // Creative Studio Desk beneath Blossoming Cherry Tree with Open Red Door
      return (
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
          <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            {/* Hillside Base */}
            <ellipse cx="40" cy="68" rx="36" ry="10" fill="#E2EAD8" stroke="#4A6B35" strokeWidth="1.5" />
            {/* Cottage House */}
            <rect x="22" y="36" width="36" height="32" rx="2" fill="#FFFDF9" stroke="#252321" strokeWidth="2" />
            {/* Red Gabled Roof */}
            <polygon points="16,36 40,16 64,36" fill="#D92843" stroke="#252321" strokeWidth="2" />
            {/* Open Red Door welcoming visitors */}
            <rect x="34" y="48" width="12" height="20" rx="1" fill="#F6E7A8" stroke="#252321" strokeWidth="1.5" />
            <polygon points="34,48 44,45 44,68 34,68" fill="#D92843" stroke="#252321" strokeWidth="1.5" />
            {/* Blossoming Cherry Branches on left */}
            <circle cx="16" cy="24" r="6" fill="#F5B7C8" />
            <circle cx="22" cy="18" r="5" fill="#D92843" />
            <circle cx="12" cy="18" r="4.5" fill="#F5B7C8" />
            <circle cx="18" cy="14" r="3" fill="#FFFFFF" />
            {/* Little Signpost Arrow pointing to horizon */}
            <line x1="62" y1="56" x2="74" y2="52" stroke="#252321" strokeWidth="1.8" />
            <polygon points="72,48 78,51 73,55" fill="#B52D3A" />
          </svg>
        </div>
      );
  }
};

// ---------------------------------------------------------------------------
// DATA INTERFACES
// ---------------------------------------------------------------------------

export interface MilestoneNode {
  id: string;
  order: number;
  landmarkType: 'foundation' | 'mca' | 'design' | 'building' | 'hackathon' | 'next';
  title: string;
  period: string;
  tag: string;
  summary: string;
  narrative: string;
  takeaway: string;
  verifiedDeliverables: string[];
  link?: {
    label: string;
    targetId: string;
  };
}

export const LittleMilestones: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [selectedNodeId, setSelectedNodeId] = useState<string>('mca');

  const journeyMilestones: MilestoneNode[] = [
    {
      id: 'foundation',
      order: 1,
      landmarkType: 'foundation',
      title: 'The Foundation: BBA-CA',
      period: 'Foundational Studies',
      tag: 'EDUCATION · ROOTS',
      summary: 'Rooted in computer applications, core database concepts, and business logic before diving deep into creative software craft.',
      narrative:
        'Started with Bachelor of Business Administration in Computer Applications (BBA-CA), learning relational database logic, programming fundamentals, and commercial product systems.',
      takeaway: 'Gave me a disciplined mental model for understanding product business feasibility alongside visual design.',
      verifiedDeliverables: [
        'Relational Database Modeling & SQL Foundations',
        'Structured Computer Application Curriculum',
        'Business Workflow Analysis & Systems Logic',
      ],
    },
    {
      id: 'mca',
      order: 2,
      landmarkType: 'mca',
      title: 'The MCA Chapter: SIEM',
      period: '2024 — 2027 (Expected)',
      tag: 'CURRENT STUDY · ADVANCED',
      summary: 'Pursuing Master of Computer Applications at Sandip Institute of Engineering and Management (SIEM).',
      narrative:
        'Currently advancing computer application engineering at Sandip Institute of Engineering and Management (SIEM, SPPU-affiliated). Deepening software architecture, data structures, and human-centered design principles.',
      takeaway: 'Actively in progress with an expected completion in 2027; blending academic engineering rigor with real-world product prototyping.',
      verifiedDeliverables: [
        'Advanced Software Engineering & System Architecture',
        'Human-Computer Interaction (HCI) Principles',
        'Collaborative Studio Sprints & Peer Code Reviews',
      ],
    },
    {
      id: 'design',
      order: 3,
      landmarkType: 'design',
      title: 'The Designer Brain Turns On',
      period: 'Design Awakening',
      tag: 'UI/UX · PRODUCT CRAFT',
      summary: 'Discovered that great software requires empathy, information architecture, and micro-interactions.',
      narrative:
        'Realized that clean code is only half the battle: software needs to feel clear, welcoming, and intuitive. Immersed in Figma auto-layout tokens, user journey mapping, and Nielsen Norman usability heuristics.',
      takeaway: 'Shifted focus permanently to end-to-end product design — framing user problems before jumping into code.',
      verifiedDeliverables: [
        'Atomic Design Systems in Figma with Variables',
        'Usability Heuristics & Accessibility (WCAG AA)',
        'Affinity Mapping & Student Usability Interviews',
      ],
    },
    {
      id: 'building',
      order: 4,
      landmarkType: 'building',
      title: 'The Building Phase: Shipped Code',
      period: '2024 — 2025',
      tag: 'SHIPPED PROJECTS · REACT & TS',
      summary: 'Turned concepts into deployed software: built interactive web apps and tested clickable prototypes.',
      narrative:
        'Refused to let ideas stay trapped as static Figma mockups. Coded and deployed tangible projects including "Your Life, In Receipts" (Spotify streaming history parsed into interactive retro receipt cards) and UX prototypes like "The First Week" and "Mood Money".',
      takeaway: 'Built the muscle memory to take ambiguous concepts from blank canvas to functional Vercel deployments.',
      verifiedDeliverables: [
        'Your Life, In Receipts (Interactive Web App)',
        'The First Week (Student Onboarding Architecture)',
        'Mood Money (Behavioral UX Mobile Concept)',
      ],
      link: {
        label: 'Explore Projects Section',
        targetId: 'work',
      },
    },
    {
      id: 'hackathon',
      order: 5,
      landmarkType: 'hackathon',
      title: 'The Hackathon Chapter',
      period: 'Competitive Sprints',
      tag: 'AWARDS & HONORS',
      summary: 'Top 5 Finalist at WebRush 6-Hour Solo Hackathon & 1st Runner-Up at NexaForge × Unstop AI Challenge.',
      narrative:
        'Thrived under high-pressure buildathons. Awarded Top 5 Finalist at WebRush Developer Hackathon after coding and deploying "Your Life, In Receipts" solo within 6 hours. Clinched 1st Runner-Up at NexaForge × Unstop AI Prompt & Image Generation Challenge.',
      takeaway: 'Proven capability to formulate problem statements, craft polished UI, and ship working code under tight countdown timers.',
      verifiedDeliverables: [
        'Top 5 Finalist: WebRush 6-Hour Solo Buildathon',
        '1st Runner-Up: NexaForge × Unstop AI Prompt Challenge',
        'National Space Tech Participant: ISRO Hackathon',
      ],
      link: {
        label: 'View Verified Honors Docket',
        targetId: 'certificates',
      },
    },
    {
      id: 'next',
      order: 6,
      landmarkType: 'next',
      title: 'The Next Chapter: In Development',
      period: 'Active Work in Progress',
      tag: 'ACTIVE CONCEPTS · 2025',
      summary: 'Designing AccessGap (accessibility auditing pipeline) & Udyog Mitra (Hindi-first voice bookkeeping).',
      narrative:
        'Currently engineering two high-impact concepts: "AccessGap" — an accessibility audit platform structured around: Audit → Score → Prioritize → Fix → Re-audit → Prove; and "Udyog Mitra" — a Hindi-first voice bookkeeping concept empowering local Indian shopkeepers.',
      takeaway: 'Directing product craft toward tools that solve high-friction civic and vernacular usability challenges.',
      verifiedDeliverables: [
        'AccessGap: Audit → Score → Prioritize → Fix pipeline',
        'Udyog Mitra: Hindi-first voice interaction heuristics',
        'Ongoing Multimodal AI & Tactile Interface Research',
      ],
    },
  ];

  const activeNode =
    journeyMilestones.find((m) => m.id === selectedNodeId) || journeyMilestones[1];

  const handleNextStop = () => {
    const currentIndex = journeyMilestones.findIndex((m) => m.id === activeNode.id);
    const nextIndex = (currentIndex + 1) % journeyMilestones.length;
    setSelectedNodeId(journeyMilestones[nextIndex].id);
  };

  const handlePrevStop = () => {
    const currentIndex = journeyMilestones.findIndex((m) => m.id === activeNode.id);
    const prevIndex = (currentIndex - 1 + journeyMilestones.length) % journeyMilestones.length;
    setSelectedNodeId(journeyMilestones[prevIndex].id);
  };

  return (
    <section
      id="milestones"
      className="py-10 sm:py-14 px-4 sm:px-6 lg:px-8 bg-transparent text-[#252321] relative overflow-visible"
    >
      {/* Background Illustrated Terrain Accents */}
      <div className="absolute top-12 left-10 pointer-events-none opacity-20 hidden md:block">
        <svg width="120" height="40" viewBox="0 0 120 40" fill="none">
          <path d="M10 30 Q 35 10 60 30 T 110 30" stroke="#702632" strokeWidth="1.5" fill="none" />
          <path d="M25 35 Q 45 20 65 35" stroke="#702632" strokeWidth="1.2" fill="none" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 bg-[#FFFDF9]/95 border-2 border-[#252321] rounded-3xl sm:rounded-[36px] p-6 sm:p-10 lg:p-12 paper-note-shadow">
        {/* Full 4-Sided Scrapbook Frame Sticker Decorations */}
        <MilestonesFrameDecorations />
        
        {/* =====================================================================
            1. SECTION HEADER WITH THE JOURNEY TRAIL LAUNCH
           ===================================================================== */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 pb-6 border-b-2 border-[#E8DCC9]">
          <div>
            {/* Map Ribbon Tag */}
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F6E7A8] border border-[#E4C868] shadow-sm text-xs font-mono font-bold text-[#702632]">
                <Compass className="w-3.5 h-3.5 text-[#B52D3A]" />
                <span>THE SNEHA SIDE QUEST MAP 🗺️</span>
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 font-mono text-xs text-[#625A53]">
                <PixelCherry size={14} />
                <span>2D Hand-Drawn Chronicle</span>
              </span>
            </div>

            {/* Title with Hand-Drawn Red Flag */}
            <div className="flex items-center gap-3">
              <h2 className="text-4xl sm:text-6xl font-lobster font-bold tracking-normal text-[#252321]">
                Little <span className="text-[#B52D3A]">Milestones</span>
              </h2>
              <div className="hidden sm:inline-block">
                <Flag className="w-8 h-8 text-[#B52D3A] fill-[#D92843] rotate-[10deg]" />
              </div>
            </div>

            <p className="font-sans text-[#625A53] text-base sm:text-lg max-w-xl font-normal leading-relaxed mt-2">
              Small steps, strange side quests, and a few surprisingly good plot twists along the road from student curious questions to shipped product code.
            </p>
          </div>

          {/* Stepper Navigation Controls */}
          <div className="flex items-center gap-2 self-start lg:self-end">
            <span className="font-mono text-xs font-bold text-[#625A53] mr-2">
              Stop {activeNode.order} of {journeyMilestones.length}
            </span>
            <button
              onClick={handlePrevStop}
              className="px-3.5 py-2 rounded-xl bg-[#FFFDF9] border border-[#E8DCC9] hover:border-[#B52D3A] hover:bg-[#F6E7A8] text-xs font-mono font-bold text-[#252321] transition-all cursor-pointer shadow-xs"
              aria-label="Previous milestone stop"
            >
              ← Prev Stop
            </button>
            <button
              onClick={handleNextStop}
              className="px-4 py-2 rounded-xl cherry-btn text-xs font-mono font-bold cursor-pointer shadow-sm flex items-center gap-1"
              aria-label="Next milestone stop"
            >
              <span>Next Stop</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* =====================================================================
            2. THE 2D JOURNEY MAP ENVIRONMENT (Winding Path & Landmark Nodes)
           ===================================================================== */}
        <div className="relative rounded-3xl p-6 sm:p-10 bg-[#FFFDF9] border-2 border-[#E8DCC9] shadow-[0_12px_36px_-6px_rgba(37,35,33,0.08)] mb-10 overflow-hidden">
          
          {/* Subtle Paper Grid & Topographic Doodle Lines */}
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none opacity-30"
            style={{
              backgroundImage: 'radial-gradient(#D8CBB6 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />

          {/* Top-Right Decorative Compass Rose */}
          <div className="absolute top-4 right-4 pointer-events-none opacity-40 select-none hidden sm:block">
            <div className="w-16 h-16 rounded-full border border-dashed border-[#B52D3A] flex items-center justify-center">
              <span className="font-mono text-[9px] font-black text-[#B52D3A]">N ✦ S</span>
            </div>
          </div>

          {/* Map Nodes Sequence along the Winding Trail */}
          <div className="relative z-10">
            
            {/* Desktop Milestone Node Markers Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 relative mb-8">
              {journeyMilestones.map((node) => {
                const isSelected = selectedNodeId === node.id;
                return (
                  <motion.div
                    key={node.id}
                    onClick={() => setSelectedNodeId(node.id)}
                    whileHover={shouldReduceMotion ? {} : { y: -6 }}
                    className={`relative p-4 rounded-2xl border-2 flex flex-col items-center text-center cursor-pointer transition-all duration-200 ${
                      isSelected
                        ? 'bg-[#FFF9DA] border-[#B52D3A] shadow-md scale-105'
                        : 'bg-[#FFFDF9] border-[#E8DCC9] hover:border-[#B52D3A] hover:bg-[#FFFDF0]'
                    }`}
                  >
                    {/* Order Badge */}
                    <div
                      className={`absolute -top-3 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full font-mono text-[10px] font-bold border ${
                        isSelected
                          ? 'bg-[#B52D3A] text-[#FFF9EF] border-[#702632]'
                          : 'bg-[#F6E7A8] text-[#702632] border-[#E4C868]'
                      }`}
                    >
                      STOP 0{node.order}
                    </div>

                    {/* Illustrated Landmark */}
                    <div className="mt-2 mb-2">
                      <MapLandmark type={node.landmarkType} isActive={isSelected} />
                    </div>

                    {/* Title */}
                    <div className="font-sans font-bold text-xs sm:text-sm text-[#252321] leading-tight line-clamp-2">
                      {node.title}
                    </div>

                    {/* Period */}
                    <div className="font-mono text-[10px] text-[#702632] mt-1 font-semibold truncate w-full">
                      {node.period}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* =====================================================================
                3. ACTIVE MILESTONE DEEP-DIVE DOSSIER CARD
               ===================================================================== */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeNode.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.22 }}
                className="relative rounded-3xl p-6 sm:p-8 bg-[#FFF9EF] border-2 border-[#E8DCC9] shadow-sm flex flex-col lg:flex-row items-start justify-between gap-8"
              >
                {/* Left Side: Story & Landmark Details */}
                <div className="flex-1">
                  
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full bg-[#B52D3A] text-[#FFF9EF] font-mono text-xs font-bold shadow-xs">
                      STOP 0{activeNode.order} OF 06
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-[#F6E7A8] text-[#702632] font-mono text-xs font-bold border border-[#E4C868]">
                      {activeNode.tag}
                    </span>
                    <span className="font-mono text-xs font-bold text-[#625A53] flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#B52D3A]" />
                      <span>{activeNode.period}</span>
                    </span>
                  </div>

                  <h3 className="font-lobster text-3xl sm:text-4xl font-bold text-[#252321] mb-3">
                    {activeNode.title}
                  </h3>

                  <p className="font-sans text-base text-[#252321] font-medium leading-relaxed mb-4">
                    {activeNode.narrative}
                  </p>

                  {/* Core Takeaway Box */}
                  <div className="p-4 rounded-2xl bg-[#FFFDF9] border border-[#E8DCC9] mb-4">
                    <div className="font-mono text-[11px] font-bold text-[#B52D3A] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>The Big Takeaway</span>
                    </div>
                    <p className="font-sans text-xs sm:text-sm text-[#625A53] leading-relaxed">
                      {activeNode.takeaway}
                    </p>
                  </div>
                </div>

                {/* Right Side: Key Verified Deliverables & Direct Links */}
                <div className="w-full lg:w-80 shrink-0 bg-[#FFFDF9] p-5 sm:p-6 rounded-2xl border border-[#E8DCC9]">
                  <div className="font-mono text-xs font-bold text-[#702632] uppercase tracking-wider mb-3 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#B52D3A]" />
                    <span>Verified Deliverables</span>
                  </div>

                  <ul className="space-y-2 mb-5">
                    {activeNode.verifiedDeliverables.map((item, idx) => (
                      <li
                        key={idx}
                        className="font-sans text-xs text-[#625A53] flex items-start gap-2 leading-relaxed"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#B52D3A] shrink-0 mt-1.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Optional Action Link to other sections */}
                  {activeNode.link && (
                    <a
                      href={`#${activeNode.link.targetId}`}
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl cherry-btn text-xs font-mono font-bold cursor-pointer"
                    >
                      <span>{activeNode.link.label}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>

          </div>

          {/* =====================================================================
              4. DESTINATION LANDMARK: "TO BE CONTINUED..."
             ===================================================================== */}
          <div className="mt-8 pt-6 border-t-2 border-dashed border-[#E8DCC9] flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <MapLandmark type="destination" />
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-lobster text-2xl font-bold text-[#252321]">
                    To Be Continued...
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#F6E7A8] text-[#702632] font-mono text-[10px] font-bold border border-[#E4C868]">
                    NEXT CHAPTER
                  </span>
                </div>
                <p className="font-sans text-xs sm:text-sm text-[#625A53] mt-0.5">
                  &ldquo;Still learning. Still building. Still figuring things out.&rdquo;
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="font-handwriting text-base text-[#B52D3A] font-bold">
                the story keeps unfolding ↗
              </span>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl butter-btn text-xs font-mono font-bold cursor-pointer"
              >
                <span>Write Next Chapter With Me</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
