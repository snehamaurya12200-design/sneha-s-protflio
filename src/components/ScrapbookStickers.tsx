import React from 'react';

// ============================================================================
// CHERRY POP SCRAPBOOK STICKER ASSETS
// High-fidelity, hand-crafted paper cutout stickers with white kiss-cut borders,
// soft shadows, rich details, and playful pop-art pastel tones:
// - Blush Pink: #FFE4EC
// - Pastel Pink: #FFC4D6
// - Cherry Red: #E84A65 / #D92843
// - Butter Yellow: #FFF0A8 / #F6E7A8
// - Sky Blue: #BDE7FF
// - Ink Black: #252321
// ============================================================================

export interface StickerProps {
  className?: string;
  size?: number;
  rotate?: number;
}

// 1. OVERSIZED BOW WITH FLUTTERING RIBBON TAILS 🎀
export const StickerBigBow: React.FC<StickerProps & { color?: string; knotColor?: string }> = ({
  className = '',
  size = 76,
  rotate = -6,
  color = '#FFC4D6',
  knotColor = '#E84A65',
}) => (
  <div
    style={{ transform: `rotate(${rotate}deg)`, width: size, height: size * 0.72 }}
    className={`inline-block select-none pointer-events-none filter drop-shadow-[0_4px_8px_rgba(37,35,33,0.14)] ${className}`}
  >
    <svg viewBox="0 0 88 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Outer White Sticker Border Silhouette */}
      <path
        d="M44 32 C34 16 12 14 8 26 C4 38 24 44 44 34 M44 32 C54 16 76 14 80 26 C84 38 64 44 44 34 M38 36 C32 46 22 56 16 60 M50 36 C56 46 66 56 72 60"
        stroke="#FFFFFF"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Left Hanging Ribbon Tail */}
      <path
        d="M38 34 C33 44 24 54 16 58 C21 54 27 50 29 44 C31 40 36 36 38 34 Z"
        fill={color}
        stroke="#252321"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      {/* Right Hanging Ribbon Tail */}
      <path
        d="M50 34 C55 44 64 54 72 58 C67 54 61 50 59 44 C57 40 52 36 50 34 Z"
        fill={color}
        stroke="#252321"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      {/* Left Bow Loop */}
      <path
        d="M44 32 C32 16 14 16 10 26 C6 36 24 42 44 34 Z"
        fill={color}
        stroke="#252321"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      {/* Left Loop Crease */}
      <path d="M22 24 C18 28 20 34 26 34" stroke="#E84A65" strokeWidth="2" strokeLinecap="round" />
      {/* Right Bow Loop */}
      <path
        d="M44 32 C56 16 74 16 78 26 C82 36 64 42 44 34 Z"
        fill={color}
        stroke="#252321"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      {/* Right Loop Crease */}
      <path d="M66 24 C70 28 68 34 62 34" stroke="#E84A65" strokeWidth="2" strokeLinecap="round" />
      {/* Central Knot */}
      <ellipse cx="44" cy="32" rx="7" ry="8" fill={knotColor} stroke="#252321" strokeWidth="2.4" />
      <ellipse cx="42" cy="30" rx="2.5" ry="3.5" fill="#FFFFFF" opacity="0.6" />
    </svg>
  </div>
);

// 2. JUICY STRAWBERRY STICKER WITH SEEDS & LEAFY TOP 🍓
export const StickerStrawberry: React.FC<StickerProps> = ({
  className = '',
  size = 54,
  rotate = 8,
}) => (
  <div
    style={{ transform: `rotate(${rotate}deg)`, width: size, height: size * 1.15 }}
    className={`inline-block select-none pointer-events-none filter drop-shadow-[0_4px_8px_rgba(37,35,33,0.15)] ${className}`}
  >
    <svg viewBox="0 0 60 70" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* White Sticker Die-Cut Contour */}
      <path
        d="M30 64 C12 52 6 36 8 24 C10 12 22 10 30 10 C38 10 50 12 52 24 C54 36 48 52 30 64 Z"
        stroke="#FFFFFF"
        strokeWidth="8"
        strokeLinejoin="round"
      />
      {/* Strawberry Body */}
      <path
        d="M30 62 C14 50 8 36 10 24 C12 14 22 12 30 12 C38 12 48 14 50 24 C52 36 46 50 30 62 Z"
        fill="#E84A65"
        stroke="#252321"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      {/* Gloss Highlight */}
      <path
        d="M16 24 C14 30 16 38 20 44"
        stroke="#FFFFFF"
        strokeWidth="2.2"
        strokeLinecap="round"
        opacity="0.75"
      />
      {/* Little Golden Yellow Seeds */}
      {[
        { cx: 24, cy: 26 },
        { cx: 34, cy: 24 },
        { cx: 20, cy: 36 },
        { cx: 30, cy: 36 },
        { cx: 40, cy: 34 },
        { cx: 25, cy: 46 },
        { cx: 35, cy: 46 },
        { cx: 30, cy: 54 },
      ].map((seed, idx) => (
        <circle key={idx} cx={seed.cx} cy={seed.cy} r="1.5" fill="#FFF0A8" stroke="#252321" strokeWidth="0.8" />
      ))}
      {/* Green Leafy Calyx Top */}
      <path
        d="M30 12 C28 4 24 2 22 2 M30 12 C22 8 12 12 14 16 C18 16 26 14 30 12 M30 12 C26 16 24 22 28 22 C30 18 30 14 30 12 M30 12 C34 16 36 22 32 22 C30 18 30 14 30 12 M30 12 C38 8 48 12 46 16 C42 16 34 14 30 12"
        fill="#729A48"
        stroke="#252321"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

// 3. HEXAGONAL WOODEN PENCIL ✏️
export const StickerPencil: React.FC<StickerProps & { color?: string }> = ({
  className = '',
  size = 68,
  rotate = 38,
  color = '#FFF0A8',
}) => (
  <div
    style={{ transform: `rotate(${rotate}deg)`, width: size, height: size * 0.35 }}
    className={`inline-block select-none pointer-events-none filter drop-shadow-[0_4px_8px_rgba(37,35,33,0.14)] ${className}`}
  >
    <svg viewBox="0 0 90 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* White Sticker Contour */}
      <rect x="22" y="4" width="50" height="20" rx="3" stroke="#FFFFFF" strokeWidth="8" />
      {/* Pencil Body Barrel */}
      <rect x="24" y="5" width="46" height="18" fill={color} stroke="#252321" strokeWidth="2.2" />
      <line x1="24" y1="11" x2="70" y2="11" stroke="#252321" strokeWidth="1.2" strokeDasharray="3 2" />
      <line x1="24" y1="17" x2="70" y2="17" stroke="#252321" strokeWidth="1.2" strokeDasharray="3 2" />
      {/* Silver Ferrule */}
      <rect x="70" y="5" width="8" height="18" fill="#E8DCC9" stroke="#252321" strokeWidth="2.2" />
      {/* Pink Eraser */}
      <path
        d="M78 5 H82 C85 5 87 8 87 14 C87 20 85 23 82 23 H78 Z"
        fill="#FFC4D6"
        stroke="#252321"
        strokeWidth="2.2"
      />
      {/* Sharpened Wood Cone & Graphite Tip */}
      <polygon points="24,5 24,23 6,14" fill="#FFF5E8" stroke="#252321" strokeWidth="2.2" />
      <polygon points="12,11 12,17 6,14" fill="#252321" stroke="#252321" strokeWidth="1" />
    </svg>
  </div>
);

// 4. WAX CRAYON STICKER 🖍️
export const StickerCrayon: React.FC<StickerProps & { color?: string; wrapperColor?: string }> = ({
  className = '',
  size = 64,
  rotate = -24,
  color = '#E84A65',
  wrapperColor = '#BDE7FF',
}) => (
  <div
    style={{ transform: `rotate(${rotate}deg)`, width: size, height: size * 0.32 }}
    className={`inline-block select-none pointer-events-none filter drop-shadow-[0_4px_8px_rgba(37,35,33,0.14)] ${className}`}
  >
    <svg viewBox="0 0 84 26" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* White Sticker Contour */}
      <path
        d="M16 4 H74 V22 H16 L6 13 Z"
        stroke="#FFFFFF"
        strokeWidth="7"
        strokeLinejoin="round"
      />
      {/* Crayon Barrel */}
      <rect x="18" y="5" width="56" height="16" rx="2" fill={color} stroke="#252321" strokeWidth="2.2" />
      {/* Paper Wrapper */}
      <rect x="26" y="5" width="38" height="16" fill={wrapperColor} stroke="#252321" strokeWidth="2.2" />
      {/* Wavy Stripe on wrapper */}
      <path d="M28 13 Q35 9 42 13 T56 13" stroke="#252321" strokeWidth="2" fill="none" />
      {/* Pointed Wax Tip */}
      <polygon points="18,5 18,21 6,13" fill={color} stroke="#252321" strokeWidth="2.2" />
    </svg>
  </div>
);

// 5. CHISEL-TIP PASTEL MARKER STICKER 🖊️
export const StickerMarker: React.FC<StickerProps & { capColor?: string; bodyColor?: string }> = ({
  className = '',
  size = 62,
  rotate = 15,
  capColor = '#BDE7FF',
  bodyColor = '#FFFDF9',
}) => (
  <div
    style={{ transform: `rotate(${rotate}deg)`, width: size, height: size * 0.35 }}
    className={`inline-block select-none pointer-events-none filter drop-shadow-[0_4px_8px_rgba(37,35,33,0.14)] ${className}`}
  >
    <svg viewBox="0 0 80 26" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* White Sticker Outline */}
      <rect x="6" y="4" width="68" height="18" rx="4" stroke="#FFFFFF" strokeWidth="7" />
      {/* Marker Body */}
      <rect x="22" y="5" width="50" height="16" rx="3" fill={bodyColor} stroke="#252321" strokeWidth="2.2" />
      <rect x="62" y="5" width="10" height="16" fill={capColor} stroke="#252321" strokeWidth="2.2" />
      {/* Cap Clip */}
      <rect x="8" y="5" width="16" height="16" rx="2" fill={capColor} stroke="#252321" strokeWidth="2.2" />
      <path d="M12 5 V2" stroke="#252321" strokeWidth="2" strokeLinecap="round" />
      {/* Chisel Tip */}
      <polygon points="8,7 2,11 2,15 8,19" fill={capColor} stroke="#252321" strokeWidth="2" />
    </svg>
  </div>
);

// 6. DANGLING RIBBON BOOKMARK 🔖
export const StickerBookmark: React.FC<StickerProps & { bg?: string; badgeText?: string }> = ({
  className = '',
  size = 46,
  rotate = -3,
  bg = '#FFC4D6',
  badgeText = '★',
}) => (
  <div
    style={{ transform: `rotate(${rotate}deg)`, width: size, height: size * 1.9 }}
    className={`inline-block select-none pointer-events-none filter drop-shadow-[0_4px_8px_rgba(37,35,33,0.15)] ${className}`}
  >
    <svg viewBox="0 0 40 76" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* White Contour */}
      <path
        d="M6 4 H34 V68 L20 54 L6 68 Z"
        stroke="#FFFFFF"
        strokeWidth="7"
        strokeLinejoin="round"
      />
      {/* Bookmark Ribbon */}
      <path
        d="M8 6 H32 V64 L20 52 L8 64 Z"
        fill={bg}
        stroke="#252321"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      {/* Stitched Border */}
      <path
        d="M11 9 H29 V56 L20 47 L11 56 Z"
        stroke="#FFFFFF"
        strokeWidth="1.2"
        strokeDasharray="2 2"
        fill="none"
        opacity="0.8"
      />
      {/* Central Star or Heart Icon */}
      <circle cx="20" cy="24" r="8" fill="#FFFDF9" stroke="#252321" strokeWidth="1.8" />
      <text
        x="20"
        y="28"
        textAnchor="middle"
        fontSize="12"
        fontWeight="bold"
        fill="#E84A65"
      >
        {badgeText}
      </text>
      {/* Mini polka dots */}
      <circle cx="20" cy="40" r="1.8" fill="#E84A65" />
    </svg>
  </div>
);

// 7. TINY OPEN SKETCHBOOK / DIARY 📖
export const StickerNotebook: React.FC<StickerProps> = ({
  className = '',
  size = 56,
  rotate = 6,
}) => (
  <div
    style={{ transform: `rotate(${rotate}deg)`, width: size, height: size * 0.75 }}
    className={`inline-block select-none pointer-events-none filter drop-shadow-[0_4px_8px_rgba(37,35,33,0.15)] ${className}`}
  >
    <svg viewBox="0 0 68 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* White Contour */}
      <rect x="4" y="4" width="60" height="42" rx="4" stroke="#FFFFFF" strokeWidth="7" />
      {/* Notebook Cover backing */}
      <rect x="6" y="6" width="56" height="38" rx="3" fill="#E84A65" stroke="#252321" strokeWidth="2.2" />
      {/* Left Page */}
      <rect x="9" y="8" width="24" height="34" fill="#FFFDF9" stroke="#252321" strokeWidth="1.8" />
      <line x1="12" y1="14" x2="28" y2="14" stroke="#BDE7FF" strokeWidth="1.8" />
      <line x1="12" y1="20" x2="28" y2="20" stroke="#BDE7FF" strokeWidth="1.8" />
      <line x1="12" y1="26" x2="24" y2="26" stroke="#BDE7FF" strokeWidth="1.8" />
      <circle cx="24" cy="34" r="2" fill="#E84A65" />
      {/* Right Page */}
      <rect x="35" y="8" width="24" height="34" fill="#FFFDF9" stroke="#252321" strokeWidth="1.8" />
      <line x1="38" y1="14" x2="54" y2="14" stroke="#BDE7FF" strokeWidth="1.8" />
      <line x1="38" y1="20" x2="54" y2="20" stroke="#BDE7FF" strokeWidth="1.8" />
      <path d="M42 28 Q46 24 50 28" stroke="#E84A65" strokeWidth="1.8" fill="none" />
      {/* Spiral Spine Ring */}
      <line x1="34" y1="8" x2="34" y2="42" stroke="#252321" strokeWidth="2.5" />
    </svg>
  </div>
);

// 8. BIG HAND-DRAWN SPARKLY STAR ⭐
export const StickerBigStar: React.FC<StickerProps & { color?: string; hasFace?: boolean }> = ({
  className = '',
  size = 58,
  rotate = 12,
  color = '#FFF0A8',
  hasFace = true,
}) => (
  <div
    style={{ transform: `rotate(${rotate}deg)`, width: size, height: size }}
    className={`inline-block select-none pointer-events-none filter drop-shadow-[0_4px_8px_rgba(37,35,33,0.15)] ${className}`}
  >
    <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* White Sticker Contour */}
      <path
        d="M30 4 L37 19 L54 21 L41 33 L45 50 L30 41 L15 50 L19 33 L6 21 L23 19 Z"
        stroke="#FFFFFF"
        strokeWidth="8"
        strokeLinejoin="round"
      />
      {/* Star Shape */}
      <path
        d="M30 6 L37 20 L52 22 L40 33 L44 49 L30 40 L16 49 L20 33 L8 22 L23 20 Z"
        fill={color}
        stroke="#252321"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      {/* Optional Happy Smiling Face */}
      {hasFace && (
        <>
          <circle cx="25" cy="27" r="2.2" fill="#252321" />
          <circle cx="35" cy="27" r="2.2" fill="#252321" />
          <path d="M26 33 Q30 37 34 33" stroke="#252321" strokeWidth="2" strokeLinecap="round" fill="none" />
          <circle cx="21" cy="30" r="2" fill="#FFC4D6" />
          <circle cx="39" cy="30" r="2" fill="#FFC4D6" />
        </>
      )}
      {/* Specular Sparkle Highlight */}
      <circle cx="30" cy="14" r="1.5" fill="#FFFFFF" />
    </svg>
  </div>
);

// 9. SHOOTING STAR WITH PASTEL RAINBOW TRAILS 🌠
export const StickerShootingStar: React.FC<StickerProps> = ({
  className = '',
  size = 72,
  rotate = -15,
}) => (
  <div
    style={{ transform: `rotate(${rotate}deg)`, width: size, height: size * 0.65 }}
    className={`inline-block select-none pointer-events-none filter drop-shadow-[0_4px_8px_rgba(37,35,33,0.15)] ${className}`}
  >
    <svg viewBox="0 0 90 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Rainbow Trail Contours */}
      <path
        d="M4 14 C24 14 44 26 62 38"
        stroke="#FFFFFF"
        strokeWidth="10"
        strokeLinecap="round"
      />
      <path
        d="M4 24 C24 24 44 34 62 44"
        stroke="#FFFFFF"
        strokeWidth="10"
        strokeLinecap="round"
      />
      {/* Trail 1: Sky Blue */}
      <path
        d="M6 14 C26 14 44 24 60 36"
        stroke="#BDE7FF"
        strokeWidth="4"
        strokeLinecap="round"
      />
      {/* Trail 2: Pastel Pink */}
      <path
        d="M10 22 C30 22 46 30 62 42"
        stroke="#FFC4D6"
        strokeWidth="4"
        strokeLinecap="round"
      />
      {/* Trail 3: Butter Yellow */}
      <path
        d="M14 30 C32 30 48 38 64 48"
        stroke="#FFF0A8"
        strokeWidth="4"
        strokeLinecap="round"
      />
      {/* Shooting Star Head */}
      <path
        d="M72 16 L76 26 L87 28 L79 36 L81 47 L72 41 L63 47 L65 36 L57 28 L68 26 Z"
        stroke="#FFFFFF"
        strokeWidth="7"
        strokeLinejoin="round"
      />
      <path
        d="M72 18 L76 27 L86 29 L78 36 L80 46 L72 41 L64 46 L66 36 L58 29 L68 27 Z"
        fill="#FFF0A8"
        stroke="#252321"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

// 10. DAISY FLOWER CLUSTER 🌸
export const StickerFlowerCluster: React.FC<StickerProps> = ({
  className = '',
  size = 62,
  rotate = 6,
}) => (
  <div
    style={{ transform: `rotate(${rotate}deg)`, width: size, height: size * 0.8 }}
    className={`inline-block select-none pointer-events-none filter drop-shadow-[0_4px_8px_rgba(37,35,33,0.14)] ${className}`}
  >
    <svg viewBox="0 0 74 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* White Sticker Contour */}
      <circle cx="26" cy="28" r="22" fill="#FFFFFF" />
      <circle cx="50" cy="34" r="18" fill="#FFFFFF" />
      {/* Flower 1 (Large Daisy) */}
      <g>
        <circle cx="26" cy="14" r="7" fill="#FFFDF9" stroke="#252321" strokeWidth="1.8" />
        <circle cx="38" cy="22" r="7" fill="#FFFDF9" stroke="#252321" strokeWidth="1.8" />
        <circle cx="34" cy="36" r="7" fill="#FFFDF9" stroke="#252321" strokeWidth="1.8" />
        <circle cx="18" cy="36" r="7" fill="#FFFDF9" stroke="#252321" strokeWidth="1.8" />
        <circle cx="14" cy="22" r="7" fill="#FFFDF9" stroke="#252321" strokeWidth="1.8" />
        {/* Center */}
        <circle cx="26" cy="26" r="6" fill="#FFF0A8" stroke="#252321" strokeWidth="2" />
        <circle cx="24" cy="24" r="1.5" fill="#FFFFFF" />
      </g>
      {/* Flower 2 (Blush Pink Daisy) */}
      <g>
        <circle cx="50" cy="24" r="5.5" fill="#FFC4D6" stroke="#252321" strokeWidth="1.8" />
        <circle cx="58" cy="32" r="5.5" fill="#FFC4D6" stroke="#252321" strokeWidth="1.8" />
        <circle cx="54" cy="42" r="5.5" fill="#FFC4D6" stroke="#252321" strokeWidth="1.8" />
        <circle cx="44" cy="42" r="5.5" fill="#FFC4D6" stroke="#252321" strokeWidth="1.8" />
        <circle cx="42" cy="30" r="5.5" fill="#FFC4D6" stroke="#252321" strokeWidth="1.8" />
        {/* Center */}
        <circle cx="50" cy="34" r="5" fill="#E84A65" stroke="#252321" strokeWidth="1.8" />
      </g>
    </svg>
  </div>
);

// 11. CHARMING BUTTERFLY STICKER 🦋
export const StickerButterfly: React.FC<StickerProps & { colorA?: string; colorB?: string }> = ({
  className = '',
  size = 52,
  rotate = -12,
  colorA = '#FFC4D6',
  colorB = '#BDE7FF',
}) => (
  <div
    style={{ transform: `rotate(${rotate}deg)`, width: size, height: size * 0.8 }}
    className={`inline-block select-none pointer-events-none filter drop-shadow-[0_4px_8px_rgba(37,35,33,0.14)] ${className}`}
  >
    <svg viewBox="0 0 60 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* White Contour */}
      <path
        d="M30 24 C22 10 4 12 6 26 C8 36 24 38 30 26 M30 24 C38 10 56 12 54 26 C52 36 36 38 30 26"
        stroke="#FFFFFF"
        strokeWidth="8"
        strokeLinejoin="round"
      />
      {/* Top Left Wing */}
      <path
        d="M30 24 C20 8 4 10 6 24 C8 32 24 30 30 24 Z"
        fill={colorA}
        stroke="#252321"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <circle cx="16" cy="20" r="3" fill="#FFF0A8" stroke="#252321" strokeWidth="1.2" />
      {/* Top Right Wing */}
      <path
        d="M30 24 C40 8 56 10 54 24 C52 32 36 30 30 24 Z"
        fill={colorB}
        stroke="#252321"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <circle cx="44" cy="20" r="3" fill="#FFF0A8" stroke="#252321" strokeWidth="1.2" />
      {/* Bottom Left Wing */}
      <path
        d="M30 26 C24 32 14 38 16 44 C20 46 28 38 30 26 Z"
        fill={colorB}
        stroke="#252321"
        strokeWidth="2"
      />
      {/* Bottom Right Wing */}
      <path
        d="M30 26 C36 32 46 38 44 44 C40 46 32 38 30 26 Z"
        fill={colorA}
        stroke="#252321"
        strokeWidth="2"
      />
      {/* Body & Antennae */}
      <ellipse cx="30" cy="26" rx="2.5" ry="9" fill="#252321" />
      <path d="M29 18 C26 12 22 12 20 14" stroke="#252321" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M31 18 C34 12 38 12 40 14" stroke="#252321" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  </div>
);

// 12. FOLDED PAPER AIRPLANE WITH DOTTED LOOP ✈️
export const StickerPaperAirplane: React.FC<StickerProps> = ({
  className = '',
  size = 56,
  rotate = -10,
}) => (
  <div
    style={{ transform: `rotate(${rotate}deg)`, width: size, height: size * 0.7 }}
    className={`inline-block select-none pointer-events-none filter drop-shadow-[0_4px_8px_rgba(37,35,33,0.14)] ${className}`}
  >
    <svg viewBox="0 0 68 46" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Dotted Trail Loop */}
      <path
        d="M6 38 C14 42 22 40 22 32 C22 24 12 26 14 34 C16 40 32 32 44 24"
        stroke="#E84A65"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeDasharray="3 3"
        fill="none"
      />
      {/* White Sticker Contour */}
      <polygon points="64,6 40,32 50,22 64,6" stroke="#FFFFFF" strokeWidth="7" strokeLinejoin="round" />
      {/* Paper Airplane Body */}
      <polygon points="64,6 28,26 44,28" fill="#FFFDF9" stroke="#252321" strokeWidth="2.2" />
      <polygon points="64,6 44,28 40,38" fill="#FFC4D6" stroke="#252321" strokeWidth="2.2" />
      <polygon points="44,28 40,38 34,30" fill="#E8DCC9" stroke="#252321" strokeWidth="2.2" />
    </svg>
  </div>
);

// 13. ARTIST COLOR PALETTE WITH PAINT DOTS 🎨
export const StickerPalette: React.FC<StickerProps> = ({
  className = '',
  size = 56,
  rotate = 14,
}) => (
  <div
    style={{ transform: `rotate(${rotate}deg)`, width: size, height: size * 0.8 }}
    className={`inline-block select-none pointer-events-none filter drop-shadow-[0_4px_8px_rgba(37,35,33,0.14)] ${className}`}
  >
    <svg viewBox="0 0 68 54" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* White Contour */}
      <path
        d="M34 6 C16 6 6 18 8 34 C10 48 24 50 36 48 C44 46 48 38 52 38 C56 38 60 42 64 36 C68 28 62 10 34 6 Z"
        stroke="#FFFFFF"
        strokeWidth="7"
        strokeLinejoin="round"
      />
      {/* Palette Wooden Base */}
      <path
        d="M34 8 C18 8 8 20 10 34 C12 46 24 48 36 46 C44 44 48 36 54 36 C58 36 62 40 64 34 C66 26 58 12 34 8 Z"
        fill="#FFF9EF"
        stroke="#252321"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      {/* Thumb Hole */}
      <ellipse cx="48" cy="24" rx="4" ry="5" fill="#FFE4EC" stroke="#252321" strokeWidth="2" />
      {/* Color Paint Dollops */}
      <circle cx="20" cy="18" r="4.5" fill="#E84A65" stroke="#252321" strokeWidth="1.2" />
      <circle cx="28" cy="16" r="4.5" fill="#FFF0A8" stroke="#252321" strokeWidth="1.2" />
      <circle cx="16" cy="28" r="4.5" fill="#BDE7FF" stroke="#252321" strokeWidth="1.2" />
      <circle cx="22" cy="38" r="4.5" fill="#729A48" stroke="#252321" strokeWidth="1.2" />
      <circle cx="32" cy="40" r="4.5" fill="#FFC4D6" stroke="#252321" strokeWidth="1.2" />
    </svg>
  </div>
);

// 14. MINI DESK RULER 📐
export const StickerRuler: React.FC<StickerProps> = ({
  className = '',
  size = 74,
  rotate = -18,
}) => (
  <div
    style={{ transform: `rotate(${rotate}deg)`, width: size, height: size * 0.3 }}
    className={`inline-block select-none pointer-events-none filter drop-shadow-[0_4px_8px_rgba(37,35,33,0.14)] ${className}`}
  >
    <svg viewBox="0 0 90 26" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* White Contour */}
      <rect x="4" y="4" width="82" height="18" rx="2" stroke="#FFFFFF" strokeWidth="7" />
      {/* Ruler Body */}
      <rect x="6" y="5" width="78" height="16" rx="2" fill="#FFF0A8" stroke="#252321" strokeWidth="2.2" />
      {/* Ruler Inch Marks */}
      {[12, 18, 24, 30, 36, 42, 48, 54, 60, 66, 72, 78].map((x, idx) => (
        <line
          key={x}
          x1={x}
          y1="5"
          x2={x}
          y2={idx % 2 === 0 ? '13' : '9'}
          stroke="#252321"
          strokeWidth="1.6"
        />
      ))}
      <circle cx="10" cy="13" r="2.5" fill="#FFFDF9" stroke="#252321" strokeWidth="1.5" />
    </svg>
  </div>
);

// 15. VINTAGE SCALLOPED POSTAGE STAMP 📮
export const StickerPostageStamp: React.FC<StickerProps & { icon?: 'cherry' | 'star' | 'heart'; color?: string }> = ({
  className = '',
  size = 48,
  rotate = 8,
  icon = 'cherry',
  color = '#FFFDF9',
}) => (
  <div
    style={{ transform: `rotate(${rotate}deg)`, width: size, height: size * 1.15 }}
    className={`inline-block select-none pointer-events-none filter drop-shadow-[0_4px_8px_rgba(37,35,33,0.15)] ${className}`}
  >
    <svg viewBox="0 0 50 58" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Stamp Perforated Scalloped Outer Edge */}
      <rect x="4" y="4" width="42" height="50" rx="3" fill="#FFFFFF" stroke="#252321" strokeWidth="2.2" />
      <rect x="8" y="8" width="34" height="42" rx="1" fill={color} stroke="#E8DCC9" strokeWidth="1.5" />
      {/* Icon */}
      {icon === 'cherry' && (
        <g transform="translate(13, 16)">
          <path d="M6 14 C7 6 12 2 17 2 M17 14 C16 7 14 3 17 2" stroke="#702632" strokeWidth="1.8" strokeLinecap="round" />
          <circle cx="6" cy="18" r="5" fill="#E84A65" />
          <circle cx="16" cy="18" r="5" fill="#E84A65" />
        </g>
      )}
      {icon === 'star' && (
        <polygon
          points="25,18 28,26 36,27 30,33 32,41 25,37 18,41 20,33 14,27 22,26"
          fill="#FFF0A8"
          stroke="#252321"
          strokeWidth="1.5"
        />
      )}
      {icon === 'heart' && (
        <path
          d="M25 38 C25 38 15 31 15 25 C15 21 18 19 21 19 C23 19 24 20 25 21 C26 20 27 19 29 19 C32 19 35 21 35 25 C35 31 25 38 25 38 Z"
          fill="#E84A65"
          stroke="#252321"
          strokeWidth="1.5"
        />
      )}
      {/* Postmark cancellation wavy line */}
      <path d="M10 44 Q17 40 25 44 T40 44" stroke="#702632" strokeWidth="1.5" fill="none" opacity="0.6" />
    </svg>
  </div>
);

// 16. DIAGONAL / HORIZONTAL WASHI TAPE STRIP 🩹
export const StickerWashiStrip: React.FC<StickerProps & { pattern?: 'gingham' | 'stripes' | 'dots' | 'solid'; color?: string }> = ({
  className = '',
  size = 80,
  rotate = -4,
  pattern = 'gingham',
  color = '#FFF0A8',
}) => (
  <div
    style={{ transform: `rotate(${rotate}deg)`, width: size, height: size * 0.3 }}
    className={`inline-block select-none pointer-events-none filter drop-shadow-[0_2px_4px_rgba(37,35,33,0.12)] opacity-90 ${className}`}
  >
    <svg viewBox="0 0 100 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Torn jagged edges on left and right */}
      <path
        d="M6 3 L100 1 L96 8 L99 15 L95 22 L98 29 L2 28 L5 21 L1 14 L4 7 Z"
        fill={color}
        stroke="#252321"
        strokeWidth="1.2"
        opacity="0.85"
      />
      {pattern === 'stripes' && (
        <>
          <line x1="20" y1="2" x2="26" y2="28" stroke="#E84A65" strokeWidth="2.5" opacity="0.4" />
          <line x1="40" y1="2" x2="46" y2="28" stroke="#E84A65" strokeWidth="2.5" opacity="0.4" />
          <line x1="60" y1="2" x2="66" y2="28" stroke="#E84A65" strokeWidth="2.5" opacity="0.4" />
          <line x1="80" y1="2" x2="86" y2="28" stroke="#E84A65" strokeWidth="2.5" opacity="0.4" />
        </>
      )}
      {pattern === 'dots' && (
        <>
          <circle cx="25" cy="15" r="3" fill="#E84A65" opacity="0.4" />
          <circle cx="50" cy="15" r="3" fill="#E84A65" opacity="0.4" />
          <circle cx="75" cy="15" r="3" fill="#E84A65" opacity="0.4" />
        </>
      )}
    </svg>
  </div>
);

// 17. SMILING SUNSHINE OR CLOUD WITH RAINBOW ☁️
export const StickerSunCloud: React.FC<StickerProps> = ({
  className = '',
  size = 64,
  rotate = 4,
}) => (
  <div
    style={{ transform: `rotate(${rotate}deg)`, width: size, height: size * 0.7 }}
    className={`inline-block select-none pointer-events-none filter drop-shadow-[0_4px_8px_rgba(37,35,33,0.14)] ${className}`}
  >
    <svg viewBox="0 0 72 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* White Contour */}
      <circle cx="24" cy="18" r="14" fill="#FFFFFF" />
      <path
        d="M12 40 C6 40 2 34 4 28 C6 22 14 20 18 20 C22 12 34 12 40 18 C48 16 58 22 56 30 C62 32 64 40 56 42 Z"
        stroke="#FFFFFF"
        strokeWidth="7"
        strokeLinejoin="round"
      />
      {/* Smiling Sun */}
      <circle cx="24" cy="18" r="12" fill="#FFF0A8" stroke="#252321" strokeWidth="2" />
      <circle cx="19" cy="16" r="1.5" fill="#252321" />
      <circle cx="27" cy="16" r="1.5" fill="#252321" />
      <path d="M20 21 Q23 24 26 21" stroke="#252321" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* Puffy Cloud */}
      <path
        d="M14 40 C8 40 6 34 8 28 C10 24 16 22 20 24 C24 16 34 16 38 22 C44 20 52 24 50 32 C56 34 56 40 50 40 Z"
        fill="#BDE7FF"
        stroke="#252321"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      {/* Cloud blush */}
      <circle cx="22" cy="34" r="2" fill="#FFC4D6" />
      <circle cx="42" cy="34" r="2" fill="#FFC4D6" />
    </svg>
  </div>
);

// 18. RETRO SMILEY BADGE STICKER 😊
export const StickerSmileyBadge: React.FC<StickerProps & { bg?: string }> = ({
  className = '',
  size = 46,
  rotate = 6,
  bg = '#FFF0A8',
}) => (
  <div
    style={{ transform: `rotate(${rotate}deg)`, width: size, height: size }}
    className={`inline-block select-none pointer-events-none filter drop-shadow-[0_4px_8px_rgba(37,35,33,0.15)] ${className}`}
  >
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* White Contour */}
      <circle cx="24" cy="24" r="22" stroke="#FFFFFF" strokeWidth="7" />
      {/* Circle Badge */}
      <circle cx="24" cy="24" r="20" fill={bg} stroke="#252321" strokeWidth="2.4" />
      {/* Eyes */}
      <circle cx="17" cy="19" r="2.5" fill="#252321" />
      <circle cx="31" cy="19" r="2.5" fill="#252321" />
      {/* Big Grin */}
      <path
        d="M14 26 C16 34 32 34 34 26"
        stroke="#252321"
        strokeWidth="2.4"
        strokeLinecap="round"
        fill="none"
      />
      {/* Rosy Cheeks */}
      <circle cx="13" cy="26" r="2.2" fill="#FFC4D6" />
      <circle cx="35" cy="26" r="2.2" fill="#FFC4D6" />
    </svg>
  </div>
);
