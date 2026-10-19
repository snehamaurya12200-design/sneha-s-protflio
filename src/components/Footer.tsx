import React, { useState, useEffect } from 'react';
import { ArrowUp, Clock, MapPin, Heart, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  const [timeStr, setTimeStr] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format time in IST (Nashik, India)
      const istTime = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      }).format(now);
      setTimeStr(istTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-4 sm:px-8 border-t-2 border-[#252321] bg-[#FFFDF9]/95 text-[#252321] relative overflow-hidden">
      {/* Top decorative sketchbook stitch line */}
      <div className="absolute top-0 left-0 right-0 h-1 flex justify-center overflow-hidden pointer-events-none opacity-40">
        <div className="w-full border-t border-dashed border-[#B52D3A]" />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-8 relative z-10">
        {/* Left Branding & Status */}
        <div>
          <div className="flex flex-wrap items-center gap-2.5 mb-2.5">
            <span className="font-lobster text-2xl sm:text-3xl font-bold text-[#B52D3A] tracking-normal">
              A Little World
            </span>
            <span className="font-sans text-xs text-[#702632] font-bold">
              — Sneha Maurya
            </span>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#F6E7A8] text-[#252321] border border-[#252321]/20 shadow-[1px_1px_0px_#252321]">
              MCA &apos;27 · SIEM
            </span>
          </div>

          <p className="font-sans text-[#625A53] text-xs sm:text-sm font-normal mb-3 max-w-xl">
            Product Designer · UI/UX · Creative Frontend &amp; Systems Thinker · Nashik, Maharashtra, India.
          </p>

          <div className="inline-flex items-center gap-2 font-mono text-[11px] sm:text-xs text-[#252321] bg-[#FFFDF9] border border-[#252321]/20 px-3 py-1.5 rounded-lg shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <Clock className="w-3.5 h-3.5 text-[#B52D3A]" />
            <span className="tracking-wider">
              LOCAL TIME: {timeStr || '10:30 AM'} IST · NASHIK, IN (BUILDING IDEAS SOLO)
            </span>
          </div>
        </div>

        {/* Right Links & Back to Top */}
        <div className="flex flex-col items-start md:items-end gap-3 text-xs w-full md:w-auto">
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 font-mono font-bold text-[#252321]">
            <a
              href="https://github.com/snehamaurya12200-design"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#B52D3A] transition-colors hover:underline"
            >
              GitHub
            </a>
            <span className="text-[#252321]/30">/</span>
            <a
              href="https://www.linkedin.com/in/sneha-maurya-b842743b0/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#B52D3A] transition-colors hover:underline"
            >
              LinkedIn
            </a>
            <span className="text-[#252321]/30">/</span>
            <a
              href="mailto:snehamaurya12200@gmail.com"
              className="hover:text-[#B52D3A] transition-colors hover:underline"
            >
              Email
            </a>
            <span className="text-[#252321]/30">/</span>
            <a
              href="tel:+917020644538"
              className="hover:text-[#B52D3A] transition-colors hover:underline"
            >
              +91 7020644538
            </a>
            <span className="text-[#252321]/30">/</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-[#702632] hover:text-[#B52D3A] font-mono font-bold transition-colors cursor-pointer group"
              title="Scroll back to top of sketchbook"
            >
              <span>TOP</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          <div className="text-[#625A53] font-mono text-[11px] flex items-center gap-1.5 flex-wrap">
            <span>&copy; 2026 Sneha Maurya · Cherry Butter Studio™.</span>
            <span>Handcrafted with curiosity, Figma, &amp; code.</span>
            <Heart className="w-3 h-3 text-[#B52D3A] fill-current inline-block" />
          </div>
        </div>
      </div>
    </footer>
  );
};
