import React from 'react';
import { motion, useReducedMotion } from 'motion/react';

export type StickerName =
  | 'star'
  | 'lotus'
  | 'pin'
  | 'strawberry'
  | 'camera'
  | 'iconic'
  | 'clapper'
  | 'discoball';

interface StickerProps {
  name: StickerName;
  size?: number;
  width?: number;
  height?: number;
  rotate?: number;
  className?: string;
  interactive?: boolean;
  alt?: string;
  onClick?: () => void;
}

export const Sticker: React.FC<StickerProps> = ({
  name,
  size = 80,
  width,
  height,
  rotate = 0,
  className = '',
  interactive = true,
  alt = 'Sticker graphic',
  onClick,
}) => {
  const shouldReduceMotion = useReducedMotion();
  const finalWidth = width || size;
  const finalHeight = height || size;

  const renderArtwork = () => {
    switch (name) {
      /*
       * 1. HOLOGRAPHIC CHROME STAR
       * 5-pointed liquid chrome star with iridescent pastel magenta, cyan & gold reflections,
       * center dark core, and thick white die-cut sticker border with realistic drop shadow.
       */
      case 'star':
        return (
          <svg
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full filter drop-shadow-[0_4px_10px_rgba(0,0,0,0.35)]"
          >
            <defs>
              <linearGradient id="starDieCut" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="100%" stopColor="#F8FAFC" />
              </linearGradient>
              <linearGradient id="holoBevel" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F1F5F9" />
                <stop offset="25%" stopColor="#E2E8F0" />
                <stop offset="50%" stopColor="#CBD5E1" />
                <stop offset="75%" stopColor="#94A3B8" />
                <stop offset="100%" stopColor="#64748B" />
              </linearGradient>
              <linearGradient id="iridescentGlow" x1="20%" y1="0%" x2="80%" y2="100%">
                <stop offset="0%" stopColor="#FED7E2" />
                <stop offset="25%" stopColor="#FBCFE8" />
                <stop offset="50%" stopColor="#BAE6FD" />
                <stop offset="75%" stopColor="#FEF08A" />
                <stop offset="100%" stopColor="#E9D5FF" />
              </linearGradient>
            </defs>
            {/* White die-cut outline base */}
            <path
              d="M100 12 L126 68 L188 77 L143 121 L154 182 L100 154 L46 182 L57 121 L12 77 L74 68 Z"
              fill="url(#starDieCut)"
              stroke="#E2E8F0"
              strokeWidth="4"
              strokeLinejoin="round"
            />
            {/* Inner Metallic Shadow border */}
            <path
              d="M100 24 L122 72 L176 80 L137 118 L146 171 L100 146 L54 171 L63 118 L24 80 L78 72 Z"
              fill="url(#holoBevel)"
            />
            {/* Core Chrome Liquid Center */}
            <path
              d="M100 32 L118 76 L166 83 L131 116 L139 162 L100 140 L61 162 L69 116 L34 83 L82 76 Z"
              fill="url(#iridescentGlow)"
            />
            {/* Chrome fluid reflection band */}
            <path
              d="M60 110 C80 90 120 90 140 110 C130 135 110 145 100 138 C90 145 70 135 60 110 Z"
              fill="#0F172A"
              opacity="0.92"
            />
            {/* White specular gleam across upper star */}
            <path
              d="M100 40 L110 75 L145 80 C130 90 110 88 100 78 C90 88 70 90 55 80 L90 75 Z"
              fill="#FFFFFF"
              opacity="0.85"
            />
            {/* Holographic light streak */}
            <path
              d="M75 145 C90 125 110 125 125 145 C115 152 105 155 100 148 C95 155 85 152 75 145 Z"
              fill="#67E8F9"
              opacity="0.8"
            />
          </svg>
        );

      /*
       * 2. WATERCOLOR BLOOMING LOTUS FLOWER
       * Rich watercolor lotus with layered crimson, burgundy & rose petals, golden stamen,
       * and crisp white die-cut sticker outline with drop shadow.
       */
      case 'lotus':
        return (
          <svg
            viewBox="0 0 200 180"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.35)]"
          >
            <defs>
              <linearGradient id="lotusDieCut" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="100%" stopColor="#FFF7F8" />
              </linearGradient>
              <radialGradient id="centerPetalGrad" cx="50%" cy="60%" r="55%">
                <stop offset="0%" stopColor="#FFDBE4" />
                <stop offset="40%" stopColor="#EE69B4" />
                <stop offset="75%" stopColor="#C24366" />
                <stop offset="100%" stopColor="#800021" />
              </radialGradient>
              <linearGradient id="sidePetalLeft" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#C24366" />
                <stop offset="50%" stopColor="#881144" />
                <stop offset="100%" stopColor="#800021" />
              </linearGradient>
              <linearGradient id="sidePetalRight" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#C24366" />
                <stop offset="50%" stopColor="#881144" />
                <stop offset="100%" stopColor="#800021" />
              </linearGradient>
            </defs>
            {/* White die-cut outline contour */}
            <path
              d="M100 16 C115 16 128 32 136 50 C154 36 172 44 178 68 C192 84 190 106 172 122 C162 132 148 138 136 142 C132 154 118 164 100 164 C82 164 68 154 64 142 C52 138 38 132 28 122 C10 106 8 84 22 68 C28 44 46 36 64 50 C72 32 85 16 100 16 Z"
              fill="url(#lotusDieCut)"
              stroke="#F1F5F9"
              strokeWidth="5"
              strokeLinejoin="round"
            />
            {/* Outer Back Petals */}
            <path
              d="M100 24 C116 45 125 75 100 105 C75 75 84 45 100 24 Z"
              fill="#881144"
              stroke="#800021"
              strokeWidth="1.5"
            />
            <path
              d="M68 56 C88 58 100 80 88 112 C68 96 60 76 68 56 Z"
              fill="url(#sidePetalLeft)"
              stroke="#800021"
              strokeWidth="1.2"
            />
            <path
              d="M132 56 C112 58 100 80 112 112 C132 96 140 76 132 56 Z"
              fill="url(#sidePetalRight)"
              stroke="#800021"
              strokeWidth="1.2"
            />
            {/* Wide Wing Petals */}
            <path
              d="M28 76 C52 74 76 96 82 126 C54 128 34 108 28 76 Z"
              fill="url(#sidePetalLeft)"
            />
            <path
              d="M172 76 C148 74 124 96 118 126 C146 128 166 108 172 76 Z"
              fill="url(#sidePetalRight)"
            />
            {/* Front Center Blooming Cup */}
            <path
              d="M100 68 C124 68 138 98 124 134 C100 148 76 134 76 98 C76 78 88 68 100 68 Z"
              fill="url(#centerPetalGrad)"
              stroke="#800021"
              strokeWidth="1.5"
            />
            {/* Golden Pollen Core */}
            <ellipse cx="100" cy="80" rx="14" ry="9" fill="#FACC15" stroke="#EAB308" strokeWidth="1" />
            <circle cx="96" cy="78" r="1.5" fill="#713F12" />
            <circle cx="100" cy="77" r="1.5" fill="#713F12" />
            <circle cx="104" cy="78" r="1.5" fill="#713F12" />
            <circle cx="98" cy="82" r="1.5" fill="#713F12" />
            <circle cx="102" cy="82" r="1.5" fill="#713F12" />
            {/* Bottom Supporting Base Petals */}
            <path
              d="M100 134 C118 142 126 156 100 160 C74 156 82 142 100 134 Z"
              fill="#C24366"
            />
          </svg>
        );

      /*
       * 3. RED TRANSLUCENT PUSH PIN
       * Realistic glossy ruby thumbtack with cylindrical grip, flared rim, sharp metal needle,
       * and white die-cut sticker outline with realistic shadow.
       */
      case 'pin':
        return (
          <svg
            viewBox="0 0 160 160"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full filter drop-shadow-[0_4px_10px_rgba(0,0,0,0.38)]"
          >
            <defs>
              <linearGradient id="pinMetal" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="40%" stopColor="#CBD5E1" />
                <stop offset="80%" stopColor="#64748B" />
                <stop offset="100%" stopColor="#334155" />
              </linearGradient>
              <radialGradient id="pinHead" cx="35%" cy="30%" r="65%">
                <stop offset="0%" stopColor="#FF6B8B" />
                <stop offset="30%" stopColor="#C24366" />
                <stop offset="70%" stopColor="#800021" />
                <stop offset="100%" stopColor="#4A0012" />
              </radialGradient>
            </defs>
            {/* White die-cut sticker outline */}
            <path
              d="M100 24 C116 28 126 42 120 56 C114 62 108 66 102 70 L112 96 C118 104 116 114 104 120 C92 126 80 124 72 118 L46 144 L40 138 L66 112 C60 104 62 92 68 86 L80 62 C76 56 74 48 80 40 C86 28 92 24 100 24 Z"
              fill="#FFFFFF"
              stroke="#F1F5F9"
              strokeWidth="6"
              strokeLinejoin="round"
            />
            {/* Steel Needle Tip */}
            <path d="M72 114 L36 150 L46 138 Z" fill="url(#pinMetal)" stroke="#475569" strokeWidth="1" />
            {/* Lower Flanged Base Disk */}
            <ellipse
              cx="88"
              cy="104"
              rx="24"
              ry="14"
              transform="rotate(-45 88 104)"
              fill="url(#pinHead)"
              stroke="#991B1B"
              strokeWidth="1.5"
            />
            {/* Base specular ring */}
            <ellipse
              cx="86"
              cy="102"
              rx="20"
              ry="8"
              transform="rotate(-45 86 102)"
              fill="#FFFFFF"
              opacity="0.3"
            />
            {/* Pin Column / Grip */}
            <path
              d="M74 68 L96 46 L108 58 L86 80 Z"
              fill="url(#pinHead)"
              stroke="#800021"
              strokeWidth="1"
            />
            {/* Column specular highlight */}
            <path
              d="M78 64 L96 46 L99 49 L81 67 Z"
              fill="#FFFFFF"
              opacity="0.6"
            />
            {/* Top Rounded Head Knob */}
            <circle cx="106" cy="40" r="16" fill="url(#pinHead)" stroke="#800021" strokeWidth="1.5" />
            {/* Top specular glint */}
            <ellipse cx="102" cy="34" rx="6" ry="3.5" transform="rotate(-30 102 34)" fill="#FFFFFF" opacity="0.85" />
          </svg>
        );

      /*
       * 4. MOSAIC FACETED STRAWBERRY
       * Digital mosaic berry composed of tiny crimson/pink tiles with leafy green cap,
       * and crisp white die-cut sticker outline with drop shadow.
       */
      case 'strawberry':
        return (
          <svg
            viewBox="0 0 180 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full filter drop-shadow-[0_4px_10px_rgba(0,0,0,0.35)]"
          >
            {/* White die-cut outline contour */}
            <path
              d="M90 14 C104 14 116 22 128 32 C148 48 160 76 156 104 C152 134 128 170 90 188 C52 170 28 134 24 104 C20 76 32 48 52 32 C64 22 76 14 90 14 Z"
              fill="#FFFFFF"
              stroke="#F1F5F9"
              strokeWidth="6"
              strokeLinejoin="round"
            />
            {/* Green Calyx Leaves on Top */}
            <path
              d="M90 28 C96 16 108 12 116 18 C112 28 104 36 90 38 C76 36 68 28 64 18 C72 12 84 16 90 28 Z"
              fill="#22C55E"
              stroke="#15803D"
              strokeWidth="1.2"
            />
            <path
              d="M90 34 C108 30 134 32 144 42 C132 48 114 46 90 38 C66 46 48 48 36 42 C46 32 72 30 90 34 Z"
              fill="#16A34A"
            />
            {/* Mosaic Faceted Grid of Tiles (Berry Body) */}
            <g transform="translate(10, 0)">
              {/* Row 1 */}
              <rect x="62" y="48" width="10" height="9" fill="#E11D48" rx="1" />
              <rect x="74" y="48" width="11" height="9" fill="#F43F5E" rx="1" />
              <rect x="87" y="48" width="10" height="9" fill="#FB7185" rx="1" />
              
              {/* Row 2 */}
              <rect x="50" y="59" width="10" height="9" fill="#BE123C" rx="1" />
              <rect x="62" y="59" width="10" height="9" fill="#E11D48" rx="1" />
              <rect x="74" y="59" width="11" height="9" fill="#FDA4AF" rx="1" />
              <rect x="87" y="59" width="10" height="9" fill="#F43F5E" rx="1" />
              <rect x="99" y="59" width="10" height="9" fill="#E11D48" rx="1" />
              {/* Row 3 */}
              <rect x="40" y="70" width="10" height="9" fill="#9F1239" rx="1" />
              <rect x="52" y="70" width="10" height="9" fill="#E11D48" rx="1" />
              <rect x="64" y="70" width="10" height="9" fill="#F43F5E" rx="1" />
              <rect x="76" y="70" width="10" height="9" fill="#FECDD3" rx="1" />
              <rect x="88" y="70" width="10" height="9" fill="#FDA4AF" rx="1" />
              <rect x="100" y="70" width="10" height="9" fill="#F43F5E" rx="1" />
              <rect x="112" y="70" width="10" height="9" fill="#BE123C" rx="1" />
              {/* Row 4 */}
              <rect x="36" y="81" width="10" height="9" fill="#BE123C" rx="1" />
              <rect x="48" y="81" width="10" height="9" fill="#E11D48" rx="1" />
              <rect x="60" y="81" width="11" height="9" fill="#FDA4AF" rx="1" />
              <rect x="73" y="81" width="11" height="9" fill="#FFF1F2" rx="1" />
              <rect x="86" y="81" width="11" height="9" fill="#FDA4AF" rx="1" />
              <rect x="99" y="81" width="11" height="9" fill="#F43F5E" rx="1" />
              <rect x="112" y="81" width="10" height="9" fill="#E11D48" rx="1" />
              {/* Row 5 */}
              <rect x="40" y="92" width="10" height="9" fill="#9F1239" rx="1" />
              <rect x="52" y="92" width="10" height="9" fill="#E11D48" rx="1" />
              <rect x="64" y="92" width="10" height="9" fill="#F43F5E" rx="1" />
              <rect x="76" y="92" width="10" height="9" fill="#FECDD3" rx="1" />
              <rect x="88" y="92" width="10" height="9" fill="#F43F5E" rx="1" />
              <rect x="100" y="92" width="10" height="9" fill="#E11D48" rx="1" />
              <rect x="110" y="92" width="10" height="9" fill="#881337" rx="1" />
              {/* Row 6 */}
              <rect x="46" y="103" width="10" height="9" fill="#BE123C" rx="1" />
              <rect x="58" y="103" width="10" height="9" fill="#E11D48" rx="1" />
              <rect x="70" y="103" width="10" height="9" fill="#F43F5E" rx="1" />
              <rect x="82" y="103" width="10" height="9" fill="#FDA4AF" rx="1" />
              <rect x="94" y="103" width="10" height="9" fill="#E11D48" rx="1" />
              <rect x="106" y="103" width="10" height="9" fill="#9F1239" rx="1" />
              {/* Row 7 */}
              <rect x="54" y="114" width="10" height="9" fill="#9F1239" rx="1" />
              <rect x="66" y="114" width="10" height="9" fill="#E11D48" rx="1" />
              <rect x="78" y="114" width="10" height="9" fill="#F43F5E" rx="1" />
              <rect x="90" y="114" width="10" height="9" fill="#E11D48" rx="1" />
              <rect x="100" y="114" width="10" height="9" fill="#881337" rx="1" />
              {/* Row 8 */}
              <rect x="62" y="125" width="10" height="9" fill="#BE123C" rx="1" />
              <rect x="74" y="125" width="10" height="9" fill="#E11D48" rx="1" />
              <rect x="86" y="125" width="10" height="9" fill="#BE123C" rx="1" />
              {/* Row 9 (Tip) */}
              <rect x="70" y="136" width="9" height="9" fill="#9F1239" rx="1" />
              <rect x="80" y="136" width="9" height="9" fill="#881337" rx="1" />
            </g>
          </svg>
        );

      /*
       * 5. RETRO VINTAGE 35MM CAMERA
       * Classic mechanical rangefinder camera with engraved hatching, circular lens,
       * electric hot pink focus burst sparks, and white die-cut sticker border with drop shadow.
       */
      case 'camera':
        return (
          <svg
            viewBox="0 0 200 160"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.35)]"
          >
            {/* White die-cut outline contour */}
            <path
              d="M32 40 L60 40 L70 24 L130 24 L140 40 L168 40 C176 40 182 46 182 54 L182 136 C182 144 176 150 168 150 L32 150 C24 150 18 144 18 136 L18 54 C18 46 24 40 32 40 Z"
              fill="#FFFFFF"
              stroke="#F1F5F9"
              strokeWidth="6"
              strokeLinejoin="round"
            />
            {/* Camera Body Main Block with crosshatch vintage texture */}
            <rect x="24" y="46" width="152" height="96" rx="6" fill="#18181B" />
            <rect x="28" y="58" width="144" height="80" rx="3" fill="#27272A" stroke="#09090B" strokeWidth="1" />
            {/* Metal Top Prism Plate */}
            <path d="M24 46 L60 46 L70 30 L130 30 L140 46 L176 46 L176 56 L24 56 Z" fill="#E4E4E7" stroke="#71717A" strokeWidth="1.5" />
            {/* Viewfinder window */}
            <rect x="124" y="36" width="14" height="10" rx="1.5" fill="#09090B" stroke="#A1A1AA" strokeWidth="1" />
            <rect x="44" y="24" width="12" height="6" rx="1.5" fill="#D4D4D8" stroke="#71717A" strokeWidth="1" />
            {/* Crosshatch line engravings */}
            <line x1="30" y1="70" x2="65" y2="70" stroke="#3F3F46" strokeWidth="1" />
            <line x1="30" y1="80" x2="65" y2="80" stroke="#3F3F46" strokeWidth="1" />
            <line x1="30" y1="90" x2="65" y2="90" stroke="#3F3F46" strokeWidth="1" />
            <line x1="135" y1="70" x2="170" y2="70" stroke="#3F3F46" strokeWidth="1" />
            <line x1="135" y1="80" x2="170" y2="80" stroke="#3F3F46" strokeWidth="1" />
            <line x1="135" y1="90" x2="170" y2="90" stroke="#3F3F46" strokeWidth="1" />
            {/* Center Camera Lens Barrel */}
            <circle cx="100" cy="98" r="38" fill="#18181B" stroke="#E4E4E7" strokeWidth="3" />
            <circle cx="100" cy="98" r="32" fill="#09090B" stroke="#71717A" strokeWidth="2" />
            <circle cx="100" cy="98" r="22" fill="#27272A" />
            <circle cx="100" cy="98" r="14" fill="#09090B" />
            
            {/* Lens Specular Glass Arc */}
            <ellipse cx="92" cy="88" rx="8" ry="4" transform="rotate(-35 92 88)" fill="#FFFFFF" opacity="0.8" />
            {/* Hot Pink Burst Accent Sparks around Lens */}
            {/* Top-right burst rays */}
            <path d="M128 66 L134 52" stroke="#FF2D78" strokeWidth="4.5" strokeLinecap="round" />
            <path d="M140 76 L154 70" stroke="#FF2D78" strokeWidth="4.5" strokeLinecap="round" />
            <path d="M142 90 L156 90" stroke="#FF2D78" strokeWidth="4.5" strokeLinecap="round" />
            
            {/* Bottom-left burst rays */}
            <path d="M72 108 L58 108" stroke="#FF2D78" strokeWidth="4.5" strokeLinecap="round" />
            <path d="M72 120 L60 128" stroke="#FF2D78" strokeWidth="4.5" strokeLinecap="round" />
            <path d="M78 130 L70 142" stroke="#FF2D78" strokeWidth="4.5" strokeLinecap="round" />
          </svg>
        );

      /*
       * 6. "ICONIC" PERIODIC TABLE TILES
       * 4 Periodic Table square cards spelling I-Co-Ni-C in deep burgundy/wine font
       * on ivory background with white die-cut border and drop shadow.
       */
      case 'iconic':
        return (
          <svg
            viewBox="0 0 280 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.35)]"
          >
            {/* White die-cut outline contour */}
            <rect
              x="6"
              y="6"
              width="268"
              height="88"
              rx="14"
              fill="#FFFFFF"
              stroke="#F1F5F9"
              strokeWidth="5"
            />
            {/* Tile 1: Iodine (I) */}
            <g transform="translate(14, 12)">
              <rect x="0" y="0" width="58" height="76" rx="4" fill="#FFFDF9" stroke="#800021" strokeWidth="2.5" />
              <text x="6" y="16" fontFamily="Space Mono, monospace" fontSize="10" fontWeight="bold" fill="#800021">53</text>
              <text x="24" y="16" fontFamily="Space Mono, monospace" fontSize="8.5" fill="#881144">126.90</text>
              <text x="29" y="52" fontFamily="Sofia Pro, sans-serif" fontSize="34" fontWeight="900" textAnchor="middle" fill="#800021">I</text>
              <text x="29" y="68" fontFamily="Sofia Pro, sans-serif" fontSize="8" fontWeight="bold" textAnchor="middle" fill="#800021">Iodine</text>
            </g>
            {/* Tile 2: Cobalt (Co) */}
            <g transform="translate(76, 12)">
              <rect x="0" y="0" width="58" height="76" rx="4" fill="#FFFDF9" stroke="#800021" strokeWidth="2.5" />
              <text x="6" y="16" fontFamily="Space Mono, monospace" fontSize="10" fontWeight="bold" fill="#800021">27</text>
              <text x="24" y="16" fontFamily="Space Mono, monospace" fontSize="8.5" fill="#881144">58.93</text>
              <text x="29" y="52" fontFamily="Sofia Pro, sans-serif" fontSize="26" fontWeight="900" textAnchor="middle" fill="#800021">Co</text>
              <text x="29" y="68" fontFamily="Sofia Pro, sans-serif" fontSize="8" fontWeight="bold" textAnchor="middle" fill="#800021">Cobalt</text>
            </g>
            {/* Tile 3: Nickel (Ni) */}
            <g transform="translate(138, 12)">
              <rect x="0" y="0" width="58" height="76" rx="4" fill="#FFFDF9" stroke="#800021" strokeWidth="2.5" />
              <text x="6" y="16" fontFamily="Space Mono, monospace" fontSize="10" fontWeight="bold" fill="#800021">28</text>
              <text x="24" y="16" fontFamily="Space Mono, monospace" fontSize="8.5" fill="#881144">58.69</text>
              <text x="29" y="52" fontFamily="Sofia Pro, sans-serif" fontSize="26" fontWeight="900" textAnchor="middle" fill="#800021">Ni</text>
              <text x="29" y="68" fontFamily="Sofia Pro, sans-serif" fontSize="8" fontWeight="bold" textAnchor="middle" fill="#800021">Nickel</text>
            </g>
            {/* Tile 4: Carbon (C) */}
            <g transform="translate(200, 12)">
              <rect x="0" y="0" width="58" height="76" rx="4" fill="#FFFDF9" stroke="#800021" strokeWidth="2.5" />
              <text x="6" y="16" fontFamily="Space Mono, monospace" fontSize="10" fontWeight="bold" fill="#800021">6</text>
              <text x="22" y="16" fontFamily="Space Mono, monospace" fontSize="8.5" fill="#881144">12.01</text>
              <text x="29" y="52" fontFamily="Sofia Pro, sans-serif" fontSize="34" fontWeight="900" textAnchor="middle" fill="#800021">C</text>
              <text x="29" y="68" fontFamily="Sofia Pro, sans-serif" fontSize="8" fontWeight="bold" textAnchor="middle" fill="#800021">Carbon</text>
            </g>
          </svg>
        );

      /*
       * 7. "MAIN CHARACTER" CLAPPERBOARD
       * Movie slate clapperboard with angled striped arm, salmon/blush pink slate,
       * bold black "MAIN CHARACTER" text, metadata fields, and white die-cut border.
       */
      case 'clapper':
        return (
          <svg
            viewBox="0 0 200 180"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.38)]"
          >
            {/* White die-cut outline contour */}
            <path
              d="M20 54 L170 12 C178 10 186 16 186 24 L186 156 C186 164 178 170 170 170 L30 170 C22 170 16 164 16 156 L16 62 C16 58 18 54 20 54 Z"
              fill="#FFFFFF"
              stroke="#F1F5F9"
              strokeWidth="6"
              strokeLinejoin="round"
            />
            {/* Angled Top Clapper Stick */}
            <g transform="rotate(-14 24 64)">
              <rect x="18" y="44" width="158" height="22" rx="3" fill="#18181B" stroke="#09090B" strokeWidth="1" />
              {/* White Angled Chevron Stripes */}
              <polygon points="34,44 48,44 36,66 22,66" fill="#FFFFFF" />
              <polygon points="62,44 76,44 64,66 50,66" fill="#FFFFFF" />
              <polygon points="90,44 104,44 92,66 78,66" fill="#FFFFFF" />
              <polygon points="118,44 132,44 120,66 106,66" fill="#FFFFFF" />
              <polygon points="146,44 160,44 148,66 134,66" fill="#FFFFFF" />
              {/* Metal hinge bolt */}
              <circle cx="28" cy="55" r="3.5" fill="#94A3B8" stroke="#475569" strokeWidth="1" />
            </g>
            {/* Fixed Bottom Clapper Stick */}
            <rect x="22" y="60" width="156" height="20" rx="2" fill="#18181B" stroke="#09090B" strokeWidth="1" />
            <polygon points="38,60 52,60 40,80 26,80" fill="#FFFFFF" />
            <polygon points="66,60 80,60 68,80 54,80" fill="#FFFFFF" />
            <polygon points="94,60 108,60 96,80 82,80" fill="#FFFFFF" />
            <polygon points="122,60 136,60 124,80 110,80" fill="#FFFFFF" />
            <polygon points="150,60 164,60 152,80 138,80" fill="#FFFFFF" />
            {/* Main Slate Body in Salmon Pink */}
            <rect x="22" y="80" width="156" height="82" rx="3" fill="#FB7185" stroke="#E11D48" strokeWidth="1.2" />
            {/* Slate Metadata Header */}
            <text x="30" y="94" fontFamily="Space Mono, monospace" fontSize="8" fontWeight="bold" fill="#18181B">STUDIO</text>
            <line x1="22" y1="98" x2="178" y2="98" stroke="#18181B" strokeWidth="0.75" />
            {/* Bold Headline: MAIN CHARACTER */}
            <text
              x="100"
              y="126"
              fontFamily="Sofia Pro, Impact, sans-serif"
              fontSize="23"
              fontWeight="900"
              letterSpacing="-0.5px"
              textAnchor="middle"
              fill="#09090B"
            >
              MAIN
            </text>
            <text
              x="100"
              y="146"
              fontFamily="Sofia Pro, Impact, sans-serif"
              fontSize="23"
              fontWeight="900"
              letterSpacing="-0.5px"
              textAnchor="middle"
              fill="#09090B"
            >
              CHARACTER
            </text>
            {/* Slate Footer Grid */}
            <line x1="22" y1="152" x2="178" y2="152" stroke="#18181B" strokeWidth="0.75" />
            <line x1="74" y1="152" x2="74" y2="162" stroke="#18181B" strokeWidth="0.75" />
            <line x1="126" y1="152" x2="126" y2="162" stroke="#18181B" strokeWidth="0.75" />
            <text x="32" y="160" fontFamily="Space Mono, monospace" fontSize="6.5" fill="#18181B">ROLL</text>
            <text x="84" y="160" fontFamily="Space Mono, monospace" fontSize="6.5" fill="#18181B">SCENE</text>
            <text x="136" y="160" fontFamily="Space Mono, monospace" fontSize="6.5" fill="#18181B">TAKE</text>
          </svg>
        );

      /*
       * 8. SILVER DISCO BALL WITH PINK STARS
       * Faceted chrome disco mirror ball with three bright pink 5-pointed stars,
       * and crisp white die-cut sticker outline with drop shadow.
       */
      case 'discoball':
        return (
          <svg
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.38)]"
          >
            {/* White die-cut outline contour wrapping ball and stars */}
            <path
              d="M100 14 C138 14 164 28 176 46 C190 56 186 78 174 90 C186 104 184 128 168 142 C164 164 142 182 100 182 C68 182 36 170 24 144 C12 128 18 102 32 88 C24 72 36 46 54 32 C68 20 84 14 100 14 Z"
              fill="#FFFFFF"
              stroke="#F1F5F9"
              strokeWidth="6"
              strokeLinejoin="round"
            />
            {/* Mirror Ball Base Sphere */}
            <defs>
              <radialGradient id="discoGrad" cx="35%" cy="30%" r="70%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="30%" stopColor="#E2E8F0" />
                <stop offset="70%" stopColor="#94A3B8" />
                <stop offset="100%" stopColor="#334155" />
              </radialGradient>
              <clipPath id="ballSphereClip">
                <circle cx="96" cy="98" r="54" />
              </clipPath>
            </defs>
            <circle cx="96" cy="98" r="54" fill="url(#discoGrad)" stroke="#475569" strokeWidth="1" />
            {/* Faceted Mirror Grid */}
            <g clipPath="url(#ballSphereClip)" stroke="#FFFFFF" strokeWidth="0.85" opacity="0.75">
              <ellipse cx="96" cy="98" rx="54" ry="14" fill="none" />
              <ellipse cx="96" cy="98" rx="54" ry="28" fill="none" />
              <ellipse cx="96" cy="98" rx="54" ry="42" fill="none" />
              <line x1="60" y1="44" x2="60" y2="152" />
              <line x1="78" y1="44" x2="78" y2="152" />
              <line x1="96" y1="44" x2="96" y2="152" />
              <line x1="114" y1="44" x2="114" y2="152" />
              <line x1="132" y1="44" x2="132" y2="152" />
              
              {/* Specular White Tile Glints */}
              <rect x="80" y="66" width="14" height="12" fill="#FFFFFF" opacity="0.9" rx="1" />
              <rect x="64" y="80" width="12" height="11" fill="#FFFFFF" opacity="0.75" rx="1" />
              <rect x="100" y="88" width="13" height="11" fill="#FFFFFF" opacity="0.8" rx="1" />
              <rect x="92" y="52" width="10" height="9" fill="#FFFFFF" opacity="0.85" rx="1" />
            </g>
            {/* Surrounding Pink Star 1 (Top Right) */}
            <path
              d="M152 42 L157 56 L171 56 L160 65 L164 79 L152 70 L140 79 L144 65 L133 56 L147 56 Z"
              fill="#FF2D78"
              stroke="#FFFFFF"
              strokeWidth="2"
            />
            {/* Surrounding Pink Star 2 (Middle Right) */}
            <path
              d="M166 22 L170 32 L180 32 L172 38 L175 48 L166 42 L157 48 L160 38 L152 32 L162 32 Z"
              fill="#FF2D78"
              stroke="#FFFFFF"
              strokeWidth="1.5"
            />
            {/* Surrounding Pink Star 3 (Bottom Left) */}
            <path
              d="M48 136 L53 148 L65 148 L55 156 L59 168 L48 160 L37 168 L41 156 L31 148 L43 148 Z"
              fill="#FF2D78"
              stroke="#FFFFFF"
              strokeWidth="2"
            />
          </svg>
        );
      default:
        return null;
    }
  };

  if (!interactive) {
    return (
      <div
        className={`inline-block select-none pointer-events-none ${className}`}
        style={{
          width: finalWidth,
          height: finalHeight,
          transform: `rotate(${rotate}deg)`,
        }}
        role="img"
        aria-label={alt}
      >
        {renderArtwork()}
      </div>
    );
  }

  return (
    <motion.div
      onClick={onClick}
      role="img"
      aria-label={alt}
      className={`inline-block select-none cursor-pointer group ${className}`}
      style={{
        width: finalWidth,
        height: finalHeight,
      }}
      initial={{ rotate }}
      whileHover={
        shouldReduceMotion
          ? {}
          : {
              scale: 1.08,
              y: -5,
              rotate: rotate + 3,
              transition: { type: 'spring', stiffness: 350, damping: 15 },
            }
      }
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <div className="w-full h-full transform transition-transform duration-200 group-hover:drop-shadow-[0_8px_20px_rgba(0,0,0,0.45)]">
        {renderArtwork()}
      </div>
    </motion.div>
  );
};
