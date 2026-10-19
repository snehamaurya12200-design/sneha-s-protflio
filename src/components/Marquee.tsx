import React from 'react';

export const Marquee: React.FC = () => {
  const items = [
    'TACTILE PRODUCT DESIGN',
    'BURGUNDY ROSE GLASS AESTHETIC',
    'MICROINTERACTIONS THAT FEEL PHYSICAL',
    'AUTO-LAYOUT OBSESSED',
    'DRAMATIC GLASSMORPHISM',
    'EMOTIONAL SOFTWARE',
    'MCA BUILDER · NASHIK',
    'AI-ASSISTED FRONTEND CRAFT',
  ];

  return (
    <div
      className="w-full bg-[#800021] text-[#FFF7F8] py-3.5 sm:py-4 overflow-hidden select-none border-y border-[#EE69B4]/40 relative z-20 shadow-[0_8px_30px_rgba(40,0,10,0.4)]"
    >
      <div className="flex whitespace-nowrap animate-[marquee_32s_linear_infinite]">
        {[...items, ...items, ...items].map((text, idx) => (
          <div key={idx} className="flex items-center mx-3 sm:mx-4 gap-3 sm:gap-4">
            <span className="font-mono text-xs sm:text-sm font-bold tracking-widest uppercase text-[#FFF7F8]/90">
              {text}
            </span>
            <span className="text-[#EE69B4] text-xs font-bold filter drop-shadow-[0_0_4px_#EE69B4]">✦</span>
          </div>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};
