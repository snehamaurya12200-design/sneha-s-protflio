import React, { useState } from 'react';
import { ExternalLink, Sparkles, Check, Clock, ShieldCheck, Heart, Coffee, AlertCircle, ShoppingBag, ArrowRight } from 'lucide-react';

interface ProjectLivePreviewProps {
  projectId: string;
  className?: string;
  isDetailed?: boolean;
}

export const ProjectLivePreview: React.FC<ProjectLivePreviewProps> = ({
  projectId,
  className = '',
  isDetailed = false,
}) => {
  // 1. THERMAL RECEIPT (Your Life, In Receipts)
  if (projectId === 'your-life-in-rec') {
    return (
      <div className={`relative bg-[#FFFDF9] text-[#252321] rounded-2xl shadow-md border border-[#E8DCC9] overflow-hidden select-none font-mono ${className}`}>
        {/* Jagged Serrated Top Edge */}
        <div
          className="h-3 w-full bg-[#B52D3A]"
          style={{
            clipPath: 'polygon(0% 0%, 5% 100%, 10% 0%, 15% 100%, 20% 0%, 25% 100%, 30% 0%, 35% 100%, 40% 0%, 45% 100%, 50% 0%, 55% 100%, 60% 0%, 65% 100%, 70% 0%, 75% 100%, 80% 0%, 85% 100%, 90% 0%, 95% 100%, 100% 0%)',
          }}
        />

        <div className="p-4 sm:p-6 space-y-3">
          {/* Receipt Header */}
          <div className="text-center pb-3 border-b-2 border-dashed border-[#E8DCC9]">
            <div className="text-sm sm:text-base font-black tracking-widest text-[#B52D3A] uppercase">
              ★ YOUR LIFE, IN RECEIPTS ★
            </div>
            <div className="text-[10px] sm:text-xs text-[#625A53] mt-0.5">
              WEBRUSH 6-HOUR FRONTEND SPRINT // NASHIK, IN
            </div>
            <div className="text-[9px] sm:text-[10px] text-[#625A53]/80 mt-0.5">
              TERMINAL #04 · HOST: VERCEL EDGE · ORDER #2024-TOP5
            </div>
          </div>

          {/* Line Items */}
          <div className="space-y-1.5 text-xs sm:text-sm py-2">
            <div className="flex justify-between items-center text-[#252321]">
              <span className="truncate pr-2">1x Figma Layout &amp; Tokens</span>
              <span className="font-bold shrink-0">$0.00</span>
            </div>
            <div className="flex justify-between items-center text-[#252321]">
              <span className="truncate pr-2">12x Late-Night Cold Brews</span>
              <span className="font-bold shrink-0">$0.00</span>
            </div>
            <div className="flex justify-between items-center text-[#252321]">
              <span className="truncate pr-2">1x Existential Spacing Crisis</span>
              <span className="font-bold shrink-0">FREE</span>
            </div>
            <div className="flex justify-between items-center text-[#B52D3A] font-semibold">
              <span className="truncate pr-2">1x Live Life Milestone Generator</span>
              <span className="font-bold shrink-0">100%</span>
            </div>
            <div className="flex justify-between items-center text-[#252321]">
              <span className="truncate pr-2">1x React + Tailwind CSS Build</span>
              <span className="font-bold shrink-0">DEPLOYED</span>
            </div>
          </div>

          {/* Totals */}
          <div className="pt-3 border-t-2 border-dashed border-[#E8DCC9] space-y-1 text-xs">
            <div className="flex justify-between text-[#625A53]">
              <span>SUBTOTAL (HUMAN EXPERIENCES)</span>
              <span>100.00%</span>
            </div>
            <div className="flex justify-between text-[#625A53]">
              <span>EMOTIONAL TAX (18%)</span>
              <span>INCLUDED</span>
            </div>
            <div className="flex justify-between text-sm sm:text-base font-black text-[#B52D3A] pt-1 border-t border-[#E8DCC9]">
              <span>TOTAL VALUE</span>
              <span>PRICELESS</span>
            </div>
          </div>

          {/* Barcode & Footer Note */}
          <div className="pt-3 text-center space-y-2">
            <div className="h-9 sm:h-11 w-full bg-[#252321] opacity-90 rounded flex items-center justify-center p-1">
              <div className="flex items-center gap-[2px] sm:gap-[3px] h-full w-full justify-center overflow-hidden">
                {[3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 8, 9, 7, 9, 3, 2, 3, 8, 4, 6, 2, 6, 4, 3, 3, 8, 3, 2, 7, 9, 5].map((w, i) => (
                  <div
                    key={i}
                    className="bg-white h-full"
                    style={{ width: `${w}px` }}
                  />
                ))}
              </div>
            </div>
            <div className="text-[10px] text-[#625A53]">
              AUTH CODE: 6HR-WEBRUSH-2024 · LIVE DEMO ON VERCEL
            </div>
          </div>
        </div>

        {/* Serrated Bottom Edge */}
        <div
          className="h-3 w-full bg-[#B52D3A]"
          style={{
            clipPath: 'polygon(0% 100%, 5% 0%, 10% 100%, 15% 0%, 20% 100%, 25% 0%, 30% 100%, 35% 0%, 40% 100%, 45% 0%, 50% 100%, 55% 0%, 60% 100%, 65% 0%, 70% 100%, 75% 0%, 80% 100%, 85% 0%, 90% 100%, 95% 0%, 100% 100%)',
          }}
        />
      </div>
    );
  }

  // 2. THE FIRST WEEK (College Onboarding Roadmap & Dilemma Cards)
  if (projectId === 'first-week') {
    const days = [
      { day: 'Day 01', title: 'Hostel & Keys', status: 'done' },
      { day: 'Day 02', title: 'Audi 3 at 8 AM', status: 'done' },
      { day: 'Day 03', title: 'Chai & Comrades', status: 'active' },
      { day: 'Day 04', title: 'Clubs & Societies', status: 'next' },
      { day: 'Day 05', title: 'Campus Survival', status: 'next' },
    ];

    return (
      <div className={`relative bg-[#FFFDF9] text-[#252321] rounded-2xl p-4 sm:p-6 border border-[#E8DCC9] shadow-md overflow-hidden ${className}`}>
        {/* Browser Top Bar */}
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#E8DCC9]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#B52D3A]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#F6E7A8] border border-[#E4C868]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#EAE0D0]" />
            <span className="font-mono text-xs font-bold text-[#625A53] ml-2">thefirstweek.vercel.app</span>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#F6E7A8] text-[#702632] border border-[#E4C868] font-bold">
            PIXELPROMPT AWARD
          </span>
        </div>

        {/* 5-Day Interactive Stepper */}
        <div className="grid grid-cols-5 gap-1.5 sm:gap-2 mb-5">
          {days.map((d, idx) => (
            <div
              key={idx}
              className={`p-2 rounded-xl text-center border transition-all ${
                d.status === 'active'
                  ? 'bg-[#F6E7A8] border-[#B52D3A] shadow-sm'
                  : d.status === 'done'
                  ? 'bg-[#FFF9EF] border-[#E8DCC9]'
                  : 'bg-white border-[#E8DCC9] opacity-60'
              }`}
            >
              <div className="font-mono text-[9px] sm:text-[10px] font-bold text-[#B52D3A]">
                {d.day}
              </div>
              <div className="text-[10px] sm:text-xs font-sans font-bold text-[#252321] truncate">
                {d.title}
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Dilemma Card */}
        <div className="p-4 rounded-xl bg-[#FFF9EF] border border-[#E8DCC9] mb-3 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-[#702632] flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#B52D3A]" />
              <span>07:45 AM · The First Morning Sprint</span>
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#F6E7A8] text-[#702632] font-bold">
              DILEMMA CARD
            </span>
          </div>
          <h4 className="font-sans font-bold text-sm sm:text-base text-[#252321]">
            &ldquo;You have 15 minutes before lecture in Audi 3. Do you grab cutting chai or secure a front-row seat?&rdquo;
          </h4>
          <div className="grid grid-cols-2 gap-2 pt-1">
            <div className="p-2.5 rounded-lg bg-white border border-[#E8DCC9] text-xs text-[#252321] flex items-center gap-2">
              <span className="text-[#B52D3A] font-bold">A.</span>
              <span>Chai stall sprint</span>
            </div>
            <div className="p-2.5 rounded-lg bg-[#F6E7A8]/60 border border-[#B52D3A]/40 text-xs text-[#702632] font-semibold flex items-center gap-2">
              <span className="text-[#B52D3A] font-bold">B.</span>
              <span>Audi 3 front row</span>
            </div>
          </div>
        </div>

        {/* Survival Tip Chip */}
        <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-[#E8DCC9] text-xs text-[#625A53]">
          <span className="font-mono text-[11px] text-[#252321] flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#B52D3A]" />
            <span>CAMPUS LORE: Never skip the basement photocopy uncle.</span>
          </span>
          <span className="text-[10px] font-mono text-[#B52D3A] font-bold">Verified ✓</span>
        </div>
      </div>
    );
  }

  // 3. MOOD MONEY (Gen Z Personal Finance with Impulse Friction)
  if (projectId === 'mood-money') {
    return (
      <div className={`relative bg-[#FFFDF9] text-[#252321] rounded-2xl p-4 sm:p-6 border border-[#E8DCC9] shadow-md overflow-hidden ${className}`}>
        {/* Smartphone Header Bar */}
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#E8DCC9]">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-[#252321]">9:41</span>
            <span className="text-[10px] font-mono text-[#625A53]">MOOD MONEY · VERCEL LIVE</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-600" />
            <span className="font-mono text-[11px] font-semibold text-emerald-700">Vibe: Protected</span>
          </div>
        </div>

        {/* Balance & Impulse Shield */}
        <div className="p-4 rounded-xl bg-[#FFF9EF] border border-[#E8DCC9] mb-4">
          <div className="text-[11px] font-mono text-[#625A53] uppercase tracking-wider mb-1">
            Protected Weekly Balance
          </div>
          <div className="text-2xl sm:text-3xl font-lobster font-bold text-[#252321] mb-2">
            ₹3,420 <span className="text-sm font-sans font-normal text-[#625A53]">remaining</span>
          </div>

          {/* 15-Minute Impulse Cooldown Banner */}
          <div className="p-3 rounded-lg bg-[#F6E7A8] border border-[#E4C868] flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#B52D3A]" />
              <div className="text-xs">
                <span className="font-bold text-[#702632]">Impulse Cooldown Active: </span>
                <span className="font-mono text-[#B52D3A] font-bold">14:28</span>
              </div>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white font-bold text-[#702632]">
              PAUSE SCREEN
            </span>
          </div>
        </div>

        {/* Emotional Tagging Grid */}
        <div className="space-y-2">
          <div className="text-xs font-mono font-bold text-[#625A53] flex items-center justify-between">
            <span>TAG TRANSACTIONS BY EMOTION</span>
            <span className="text-[#B52D3A]">BEHAVIORAL UX</span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div className="p-2 rounded-lg bg-white border border-[#E8DCC9] text-center text-xs">
              <span className="block text-base">☕</span>
              <span className="text-[10px] font-mono font-semibold text-[#625A53]">Treat Myself</span>
            </div>
            <div className="p-2 rounded-lg bg-white border border-[#B52D3A]/40 text-center text-xs">
              <span className="block text-base">🛒</span>
              <span className="text-[10px] font-mono font-bold text-[#B52D3A]">Stress Doom-Buy</span>
            </div>
            <div className="p-2 rounded-lg bg-white border border-[#E8DCC9] text-center text-xs">
              <span className="block text-base">🍕</span>
              <span className="text-[10px] font-mono font-semibold text-[#625A53]">Social Pressure</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 4. UDYOG MITRA (AI Business Copilot Concept & Multimodal Architecture)
  if (projectId === 'udyog-mitra') {
    return (
      <div className={`relative bg-[#FFFDF9] text-[#252321] rounded-2xl p-4 sm:p-6 border border-[#E8DCC9] shadow-md overflow-hidden ${className}`}>
        {/* Header */}
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#E8DCC9]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#B52D3A]" />
            <span className="font-mono text-xs font-bold text-[#252321]">UDYOG MITRA // AI COPILOT</span>
          </div>
          <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#F6E7A8] text-[#702632] border border-[#E4C868]">
            SME COPILOT SPEC
          </span>
        </div>

        {/* Conversational Morning Brief */}
        <div className="p-4 rounded-xl bg-[#FFF9EF] border border-[#E8DCC9] mb-4 space-y-2">
          <div className="flex items-center justify-between text-xs font-mono text-[#702632]">
            <span>MORNING DISPATCH · सुबह का हिसाब</span>
            <span className="text-[#B52D3A] font-bold">Concept Spec</span>
          </div>
          <h4 className="font-sans font-bold text-sm sm:text-base text-[#252321] leading-snug">
            &ldquo;3 wholesale invoices cleared yesterday. Mustard oil stock is below 15 units. Ready to auto-draft a vendor message in Hindi?&rdquo;
          </h4>
          <div className="flex flex-wrap gap-2 pt-2">
            <span className="px-2.5 py-1 rounded-lg cherry-btn font-mono text-xs font-semibold shadow-sm">
              ✓ Draft WhatsApp Order
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-white border border-[#E8DCC9] text-[#625A53] font-mono text-xs font-semibold">
              View GST Summary
            </span>
          </div>
        </div>

        {/* Multi-Modal Handwritten Ledger Ingestion Card */}
        <div className="p-3.5 rounded-xl bg-white border border-[#E8DCC9] flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-[#F6E7A8] border border-[#E4C868] flex items-center justify-center text-lg">
              📷
            </div>
            <div>
              <div className="text-xs font-sans font-bold text-[#252321]">Handwritten Bill Parser</div>
              <div className="text-[10px] font-mono text-[#625A53]">Gemini Multimodal Vision Pipeline</div>
            </div>
          </div>
          <span className="text-xs font-mono text-[#B52D3A] font-bold">Zero Data-Entry</span>
        </div>
      </div>
    );
  }

  // 5. ACCESSGAP (Built-Environment Accessibility Auditing Platform Concept)
  if (projectId === 'accessgap') {
    const auditWorkflow = [
      { step: '01', label: 'Audit' },
      { step: '02', label: 'Score' },
      { step: '03', label: 'Prioritize' },
      { step: '04', label: 'Fix' },
      { step: '05', label: 'Re-audit' },
      { step: '06', label: 'Prove' },
    ];

    return (
      <div className={`relative bg-[#FFFDF9] text-[#252321] rounded-2xl p-4 sm:p-6 border border-[#E8DCC9] shadow-md overflow-hidden ${className}`}>
        {/* Header */}
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#E8DCC9]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#B52D3A]" />
            <span className="font-mono text-xs font-bold text-[#252321]">ACCESSGAP // INCLUSIVE DESIGN</span>
          </div>
          <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#F6E7A8] text-[#702632] border border-[#E4C868]">
            WORKFLOW SPEC
          </span>
        </div>

        {/* Six-Stage Lifecycle Strip */}
        <div className="mb-4">
          <div className="text-[10px] font-mono font-bold text-[#625A53] mb-2 uppercase tracking-wider">
            Accountability Cycle: Audit → Proof of Improvement
          </div>
          <div className="grid grid-cols-6 gap-1 text-center">
            {auditWorkflow.map((item, idx) => (
              <div
                key={idx}
                className="p-1.5 rounded-lg bg-[#FFF9EF] border border-[#E8DCC9] flex flex-col items-center"
              >
                <span className="text-[9px] font-mono font-bold text-[#B52D3A]">{item.step}</span>
                <span className="text-[10px] font-sans font-bold text-[#252321]">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Sample Barrier Severity Heuristic Card */}
        <div className="p-3.5 rounded-xl bg-[#FFF9EF] border border-[#E8DCC9] space-y-2">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="font-bold text-[#702632]">BARRIER #14 · EAST RAMP</span>
            <span className="px-2 py-0.5 rounded bg-[#B52D3A] text-[#FFF9EF] text-[10px] font-bold">
              CRITICAL PRIORITY
            </span>
          </div>
          <p className="text-xs font-sans text-[#252321]">
            Slope exceeds 1:12 standard (measured 1:8.5); lack of tactile warning indicators at curb edge.
          </p>
          <div className="flex items-center justify-between text-[11px] font-mono text-[#625A53] pt-1 border-t border-[#E8DCC9]">
            <span>IMPACT: WHEELCHAIR ACCESS</span>
            <span className="text-[#B52D3A] font-bold">ASSIGNED TO MAINTENANCE</span>
          </div>
        </div>
      </div>
    );
  }

  // 6. STUMATE (Startup Team Experience & Onboarding Simplification)
  return (
    <div className={`relative bg-[#FFFDF9] text-[#252321] rounded-2xl p-4 sm:p-6 border border-[#E8DCC9] shadow-md overflow-hidden ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#E8DCC9]">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#B52D3A]" />
          <span className="font-mono text-xs font-bold text-[#252321]">STUMATE // PEER MATCHING</span>
        </div>
        <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#EAE0D0] text-[#702632] border border-[#702632]/25">
          STARTUP EXPERIENCE
        </span>
      </div>

      {/* Onboarding Reduction Callout (7 to 3 Steps) */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="p-3 rounded-xl bg-[#FFF9EF] border border-[#E8DCC9] opacity-75">
          <div className="text-[10px] font-mono text-[#625A53] line-through">INITIAL ALPHA</div>
          <div className="text-xl font-black text-[#625A53]">7 Steps</div>
          <div className="text-[10px] text-[#625A53]">Heavy form fatigue</div>
        </div>
        <div className="p-3 rounded-xl bg-[#F6E7A8] border border-[#E4C868] shadow-sm">
          <div className="text-[10px] font-mono text-[#702632] font-bold">REDESIGNED MVP</div>
          <div className="text-xl font-black text-[#B52D3A]">3 Steps ✓</div>
          <div className="text-[10px] text-[#702632] font-semibold">Course · Skills · Availability</div>
        </div>
      </div>

      {/* Matching Card Preview */}
      <div className="p-3.5 rounded-xl bg-[#FFF9EF] border border-[#E8DCC9] space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#B52D3A] text-white flex items-center justify-center font-bold text-xs">
              SM
            </div>
            <div>
              <div className="text-xs font-sans font-bold text-[#252321]">Peer Match Card</div>
              <div className="text-[10px] font-mono text-[#625A53]">MCA Student · SPPU Campus</div>
            </div>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white border border-[#E8DCC9] font-bold text-[#B52D3A]">
            94% Match
          </span>
        </div>
        <div className="flex flex-wrap gap-1.5 pt-1">
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white text-[#252321] border border-[#E8DCC9]">
            Figma Design Systems
          </span>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white text-[#252321] border border-[#E8DCC9]">
            React &amp; TypeScript
          </span>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#F6E7A8] text-[#702632] font-bold border border-[#E4C868]">
            Hackathon Sprint
          </span>
        </div>
      </div>
    </div>
  );
};
