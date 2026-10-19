import React from 'react';

// ============================================================================
// CHERRY POP SCRAPBOOK DOODLE COMPONENT COLLECTION
// Hand-drawn vector doodles styled in the pastel pop scrapbook palette:
// Blush Pink #FFE4EC, Pastel Pink #FFC4D6, Cherry Red #E84A65,
// Butter Yellow #FFF0A8, Sky Blue #BDE7FF, and Ink Black #252321.
// ============================================================================

interface DoodleProps {
  className?: string;
  size?: number;
  color?: string;
  rotate?: number;
}

// 1. Four-Point Sparkle / Twinkle
export const DoodleSparkle: React.FC<DoodleProps> = ({
  className = '',
  size = 22,
  color = '#E84A65',
  rotate = 0,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    style={{ transform: `rotate(${rotate}deg)` }}
    className={`select-none pointer-events-none inline-block ${className}`}
  >
    <path
      d="M12 2 C12 7 17 12 22 12 C17 12 12 17 12 22 C12 17 7 12 2 12 C7 12 12 7 12 2 Z"
      fill={color}
    />
  </svg>
);

// 2. Hand-Drawn Cute Star (with optional happy face)
export const DoodleStar: React.FC<DoodleProps & { hasFace?: boolean }> = ({
  className = '',
  size = 26,
  color = '#FFF0A8',
  rotate = 0,
  hasFace = false,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    style={{ transform: `rotate(${rotate}deg)` }}
    className={`select-none pointer-events-none inline-block ${className}`}
  >
    <path
      d="M16 2.5 L19.8 11.2 L29.2 12.1 L22.1 18.3 L24.2 27.6 L16 22.8 L7.8 27.6 L9.9 18.3 L2.8 12.1 L12.2 11.2 Z"
      fill={color}
      stroke="#252321"
      strokeWidth="1.8"
      strokeLinejoin="round"
      strokeLinecap="round"
    />
    {hasFace && (
      <>
        {/* Smiling Eyes */}
        <circle cx="13" cy="14" r="1.2" fill="#252321" />
        <circle cx="19" cy="14" r="1.2" fill="#252321" />
        {/* Cute Smile */}
        <path d="M14 17.5 Q16 19.5 18 17.5" stroke="#252321" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        {/* Rosy Cheeks */}
        <circle cx="11.5" cy="16" r="1.2" fill="#FFC4D6" />
        <circle cx="20.5" cy="16" r="1.2" fill="#FFC4D6" />
      </>
    )}
  </svg>
);

// 3. Hand-Drawn Heart (Outlined or Filled)
export const DoodleHeart: React.FC<DoodleProps & { filled?: boolean }> = ({
  className = '',
  size = 24,
  color = '#E84A65',
  rotate = -6,
  filled = true,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 28 28"
    fill="none"
    style={{ transform: `rotate(${rotate}deg)` }}
    className={`select-none pointer-events-none inline-block ${className}`}
  >
    <path
      d="M14 24 C14 24 2.5 17 2.5 9.5 C2.5 5.5 5.5 2.5 9.5 2.5 C12 2.5 13.5 4 14 5 C14.5 4 16 2.5 18.5 2.5 C22.5 2.5 25.5 5.5 25.5 9.5 C25.5 17 14 24 14 24 Z"
      fill={filled ? color : '#FFE4EC'}
      stroke="#252321"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Cute highlight shine */}
    <path
      d="M6 7.5 C6.5 5.5 8.5 4.5 10 4.8"
      stroke="#FFFFFF"
      strokeWidth="1.5"
      strokeLinecap="round"
      opacity="0.85"
    />
  </svg>
);

// 4. Retro 8-bit Pixel Heart
export const DoodlePixelHeart: React.FC<DoodleProps> = ({
  className = '',
  size = 20,
  rotate = 0,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    style={{ transform: `rotate(${rotate}deg)` }}
    className={`select-none pointer-events-none inline-block ${className}`}
  >
    <rect x="3" y="2" width="4" height="2" fill="#E84A65" />
    <rect x="9" y="2" width="4" height="2" fill="#E84A65" />
    <rect x="1" y="4" width="14" height="4" fill="#E84A65" />
    <rect x="3" y="8" width="10" height="2" fill="#E84A65" />
    <rect x="5" y="10" width="6" height="2" fill="#E84A65" />
    <rect x="7" y="12" width="2" height="2" fill="#E84A65" />
    {/* Pixel Highlight */}
    <rect x="3" y="4" width="2" height="2" fill="#FFF0A8" />
  </svg>
);

// 5. Hand-Drawn Daisy Flower
export const DoodleFlower: React.FC<DoodleProps & { petalColor?: string; centerColor?: string }> = ({
  className = '',
  size = 28,
  petalColor = '#FFFFFF',
  centerColor = '#FFF0A8',
  rotate = 0,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    style={{ transform: `rotate(${rotate}deg)` }}
    className={`select-none pointer-events-none inline-block ${className}`}
  >
    {/* 5 rounded petals */}
    <circle cx="16" cy="8" r="5" fill={petalColor} stroke="#252321" strokeWidth="1.5" />
    <circle cx="23.5" cy="13.5" r="5" fill={petalColor} stroke="#252321" strokeWidth="1.5" />
    <circle cx="20.5" cy="22.5" r="5" fill={petalColor} stroke="#252321" strokeWidth="1.5" />
    <circle cx="11.5" cy="22.5" r="5" fill={petalColor} stroke="#252321" strokeWidth="1.5" />
    <circle cx="8.5" cy="13.5" r="5" fill={petalColor} stroke="#252321" strokeWidth="1.5" />
    {/* Center */}
    <circle cx="16" cy="16" r="4.5" fill={centerColor} stroke="#252321" strokeWidth="1.8" />
  </svg>
);

// 6. Charming Quirky Smiley Face
export const DoodleSmiley: React.FC<DoodleProps> = ({
  className = '',
  size = 26,
  color = '#FFF0A8',
  rotate = 6,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 28 28"
    fill="none"
    style={{ transform: `rotate(${rotate}deg)` }}
    className={`select-none pointer-events-none inline-block ${className}`}
  >
    <circle cx="14" cy="14" r="12" fill={color} stroke="#252321" strokeWidth="1.8" />
    {/* Eyes */}
    <circle cx="10" cy="11.5" r="1.5" fill="#252321" />
    <circle cx="18" cy="11.5" r="1.5" fill="#252321" />
    {/* Big smile with tongue */}
    <path
      d="M9 16 C10 20 18 20 19 16"
      stroke="#252321"
      strokeWidth="1.8"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

// 7. Hand-Drawn Sketchy Arrow (directional)
export const DoodleArrow: React.FC<DoodleProps & { direction?: 'right' | 'down' | 'up-right' | 'down-right' | 'curve' }> = ({
  className = '',
  size = 34,
  color = '#E84A65',
  direction = 'curve',
  rotate = 0,
}) => {
  return (
    <svg
      width={size}
      height={size * 0.75}
      viewBox="0 0 44 32"
      fill="none"
      style={{ transform: `rotate(${rotate}deg)` }}
      className={`select-none pointer-events-none inline-block ${className}`}
    >
      {direction === 'curve' && (
        <>
          <path
            d="M4 22 C14 6 28 8 38 18"
            stroke={color}
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <path
            d="M30 14 L39 19 L32 25"
            stroke={color}
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      )}
      {direction === 'down' && (
        <>
          <path
            d="M22 4 C18 14 26 20 22 26"
            stroke={color}
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <path
            d="M16 20 L22 27 L28 20"
            stroke={color}
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      )}
      {direction === 'up-right' && (
        <>
          <path
            d="M6 26 C12 24 24 16 34 6"
            stroke={color}
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <path
            d="M24 6 L35 6 L35 17"
            stroke={color}
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      )}
      {(direction === 'right' || direction === 'down-right') && (
        <>
          <path
            d="M4 14 C16 10 26 16 38 16"
            stroke={color}
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <path
            d="M30 9 L39 16 L30 23"
            stroke={color}
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      )}
    </svg>
  );
};

// 8. Squiggle / Loop / Wave
export const DoodleSquiggle: React.FC<DoodleProps & { variant?: 'wave' | 'spiral' | 'loop' }> = ({
  className = '',
  size = 36,
  color = '#E84A65',
  variant = 'wave',
  rotate = 0,
}) => (
  <svg
    width={size}
    height={size * 0.4}
    viewBox="0 0 48 18"
    fill="none"
    style={{ transform: `rotate(${rotate}deg)` }}
    className={`select-none pointer-events-none inline-block ${className}`}
  >
    {variant === 'wave' && (
      <path
        d="M2 9 C8 2 14 16 20 9 C26 2 32 16 38 9 C42 4 46 12 47 9"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    )}
    {variant === 'loop' && (
      <path
        d="M2 12 C10 12 14 3 19 3 C24 3 24 15 16 15 C10 15 12 6 22 6 C32 6 36 14 46 14"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    )}
  </svg>
);

// 9. Tiny Comic Lightning Bolt
export const DoodleLightning: React.FC<DoodleProps> = ({
  className = '',
  size = 22,
  color = '#FFF0A8',
  rotate = 12,
}) => (
  <svg
    width={size}
    height={size * 1.3}
    viewBox="0 0 16 22"
    fill="none"
    style={{ transform: `rotate(${rotate}deg)` }}
    className={`select-none pointer-events-none inline-block ${className}`}
  >
    <path
      d="M9 1 L1 12 L7 12 L4 21 L15 9 L9 9 Z"
      fill={color}
      stroke="#252321"
      strokeWidth="1.6"
      strokeLinejoin="round"
      strokeLinecap="round"
    />
  </svg>
);

// 10. Little Bow / Ribbon Knot
export const DoodleBow: React.FC<DoodleProps> = ({
  className = '',
  size = 26,
  color = '#FFC4D6',
  rotate = 0,
}) => (
  <svg
    width={size}
    height={size * 0.75}
    viewBox="0 0 32 24"
    fill="none"
    style={{ transform: `rotate(${rotate}deg)` }}
    className={`select-none pointer-events-none inline-block ${className}`}
  >
    {/* Left Loop */}
    <path
      d="M16 12 C12 6 4 6 4 11 C4 16 12 13 16 12 Z"
      fill={color}
      stroke="#252321"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    {/* Right Loop */}
    <path
      d="M16 12 C20 6 28 6 28 11 C28 16 20 13 16 12 Z"
      fill={color}
      stroke="#252321"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    {/* Center Knot */}
    <circle cx="16" cy="12" r="3" fill="#E84A65" stroke="#252321" strokeWidth="1.6" />
    {/* Ribbons hanging */}
    <path d="M14 14 C12 18 8 21 7 22" stroke="#252321" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M18 14 C20 18 24 21 25 22" stroke="#252321" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

// 11. Twin Cherries with Leaf
export const DoodleCherries: React.FC<DoodleProps> = ({
  className = '',
  size = 28,
  rotate = 4,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    style={{ transform: `rotate(${rotate}deg)` }}
    className={`select-none pointer-events-none inline-block ${className}`}
  >
    {/* Twin stems */}
    <path d="M10 18 C11 10 16 5 22 4" stroke="#4A6B35" strokeWidth="2" strokeLinecap="round" />
    <path d="M22 19 C21 12 18 6 22 4" stroke="#4A6B35" strokeWidth="2" strokeLinecap="round" />
    {/* Leaf */}
    <path d="M22 4 C27 3 30 6 29 9 C27 10 23 8 22 4 Z" fill="#729A48" stroke="#4A6B35" strokeWidth="1.4" />
    {/* Left cherry */}
    <circle cx="9.5" cy="21.5" r="7" fill="#E84A65" stroke="#252321" strokeWidth="1.6" />
    <circle cx="7" cy="19" r="1.5" fill="#FFFFFF" opacity="0.8" />
    {/* Right cherry */}
    <circle cx="22.5" cy="22.5" r="7" fill="#E84A65" stroke="#252321" strokeWidth="1.6" />
    <circle cx="20" cy="20" r="1.5" fill="#FFFFFF" opacity="0.8" />
  </svg>
);

// 12. Tiny Creative Pencil
export const DoodlePencil: React.FC<DoodleProps> = ({
  className = '',
  size = 26,
  rotate = 45,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 28 28"
    fill="none"
    style={{ transform: `rotate(${rotate}deg)` }}
    className={`select-none pointer-events-none inline-block ${className}`}
  >
    <rect x="8" y="2" width="6" height="18" fill="#FFF0A8" stroke="#252321" strokeWidth="1.5" />
    <rect x="8" y="2" width="6" height="4" fill="#FFC4D6" stroke="#252321" strokeWidth="1.5" />
    <polygon points="8,20 14,20 11,26" fill="#FFF5E8" stroke="#252321" strokeWidth="1.5" />
    <polygon points="10,24 12,24 11,26" fill="#252321" />
  </svg>
);

// 13. Tiny Mouse Pointer / Cursor
export const DoodleCursor: React.FC<DoodleProps> = ({
  className = '',
  size = 20,
  rotate = -15,
}) => (
  <svg
    width={size}
    height={size * 1.2}
    viewBox="0 0 16 20"
    fill="none"
    style={{ transform: `rotate(${rotate}deg)` }}
    className={`select-none pointer-events-none inline-block ${className}`}
  >
    <path
      d="M2 1 L13 11 L8 12 L11 18 L8 19 L5 13 L2 16 Z"
      fill="#FFFFFF"
      stroke="#252321"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
  </svg>
);

// 14. Tiny Cloud with Sunshine
export const DoodleCloud: React.FC<DoodleProps> = ({
  className = '',
  size = 32,
  rotate = 0,
}) => (
  <svg
    width={size}
    height={size * 0.65}
    viewBox="0 0 36 24"
    fill="none"
    style={{ transform: `rotate(${rotate}deg)` }}
    className={`select-none pointer-events-none inline-block ${className}`}
  >
    {/* Sun poking out */}
    <circle cx="10" cy="8" r="5" fill="#FFF0A8" stroke="#252321" strokeWidth="1.5" />
    {/* Puffy cloud */}
    <path
      d="M7 19 C4 19 2 17 2 14 C2 11.5 4 9.5 6.5 9.5 C7 7 9.5 5 12.5 5 C15.5 5 18 7.5 18.5 10 C19.5 9.5 21 9.5 22 10.5 C23.5 10 26 11 26 13.5 C28 14 29 16 29 18 C29 20 27 21 25 21 L7 21 Z"
      fill="#BDE7FF"
      stroke="#252321"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
  </svg>
);

// 15. Handwritten Scrapbook Note Tag ("cute!", "yay!", "idea!", "look! ↗")
export const DoodleNote: React.FC<{
  text: string;
  className?: string;
  rotate?: number;
  bg?: string;
  textColor?: string;
}> = ({
  text,
  className = '',
  rotate = -3,
  bg = '#FFF0A8',
  textColor = '#702632',
}) => (
  <div
    style={{ transform: `rotate(${rotate}deg)` }}
    className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full border border-[#252321] font-handwriting text-xs sm:text-sm font-bold shadow-[1px_1px_0px_#252321] select-none pointer-events-none ${className}`}
    style-bg={bg}
  >
    <span
      className="px-1.5 py-0.5 rounded"
      style={{ backgroundColor: bg, color: textColor }}
    >
      {text}
    </span>
  </div>
);

// 16. Hand-Drawn Wavy Underline
export const DoodleUnderline: React.FC<DoodleProps & { width?: number }> = ({
  className = '',
  width = 80,
  color = '#E84A65',
}) => (
  <svg
    width={width}
    height={10}
    viewBox="0 0 100 10"
    fill="none"
    className={`select-none pointer-events-none ${className}`}
  >
    <path
      d="M2 5 C20 1 40 9 60 4 C75 1 88 8 98 5"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

// 17. Mini Paperclip
export const DoodlePaperclip: React.FC<DoodleProps> = ({
  className = '',
  size = 24,
  rotate = 20,
}) => (
  <svg
    width={size * 0.6}
    height={size}
    viewBox="0 0 16 28"
    fill="none"
    style={{ transform: `rotate(${rotate}deg)` }}
    className={`select-none pointer-events-none inline-block ${className}`}
  >
    <path
      d="M5 9 L5 19 C5 22 7 24 9.5 24 C12 24 14 22 14 19 L14 6 C14 3 11.5 1 8.5 1 C5.5 1 3 3 3 6 L3 20"
      stroke="#702632"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);
