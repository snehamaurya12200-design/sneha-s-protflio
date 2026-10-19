import React from 'react';

interface WarpedCheckerboardProps {
  className?: string;
  variant?: 'hero' | 'contact' | 'card' | 'banner';
  colorA?: string;
  colorB?: string;
  accentColor?: string;
  intensity?: number;
}

export const WarpedCheckerboard: React.FC<WarpedCheckerboardProps> = ({
  className = '',
  variant = 'hero',
  colorA = '#B90F2E', // Cherry red
  colorB = '#F5A6B8', // Bubblegum pink
  accentColor = '#F52B3E', // Pop red
}) => {
  // We construct an organic, fluidly curved distorted checkerboard mesh
  // using mathematical sine/cosine bezier warps for the retro editorial look.
  const cols = 9;
  const rows = 9;

  // Compute curved grid vertices
  const width = 600;
  const height = 600;

  const getVertex = (i: number, j: number) => {
    const u = i / cols;
    const v = j / rows;
    
    // Wave distortion formula resembling contemporary retro editorial graphics
    const warpX = Math.sin(v * Math.PI * 1.5 + 0.4) * 48 + Math.cos(u * Math.PI) * 16;
    const warpY = Math.sin(u * Math.PI * 1.6 + 0.2) * 52 + Math.cos(v * Math.PI * 1.2) * 20;

    const x = u * width + warpX;
    const y = v * height + warpY;
    return { x, y };
  };

  const quads = [];
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      const p0 = getVertex(i, j);
      const p1 = getVertex(i + 1, j);
      const p2 = getVertex(i + 1, j + 1);
      const p3 = getVertex(i, j + 1);

      // Curved control points for fluid, wavy square edges
      const cx01 = (p0.x + p1.x) / 2 + (j % 2 === 0 ? 8 : -8);
      const cy01 = (p0.y + p1.y) / 2 + (i % 2 === 0 ? -6 : 6);

      const cx12 = (p1.x + p2.x) / 2 + (j % 2 === 0 ? -7 : 7);
      const cy12 = (p1.y + p2.y) / 2 + (i % 2 === 0 ? 8 : -8);

      const cx23 = (p2.x + p3.x) / 2 + (j % 2 === 0 ? -8 : 8);
      const cy23 = (p2.y + p3.y) / 2 + (i % 2 === 0 ? 6 : -6);

      const cx30 = (p3.x + p0.x) / 2 + (j % 2 === 0 ? 7 : -7);
      const cy30 = (p3.y + p0.y) / 2 + (i % 2 === 0 ? -8 : 8);

      const pathData = `M ${p0.x} ${p0.y} 
        Q ${cx01} ${cy01} ${p1.x} ${p1.y} 
        Q ${cx12} ${cy12} ${p2.x} ${p2.y} 
        Q ${cx23} ${cy23} ${p3.x} ${p3.y} 
        Q ${cx30} ${cy30} ${p0.x} ${p0.y} Z`;

      const isEven = (i + j) % 2 === 0;
      // Inject occasional pop red accent cell for visual rhythm
      let fillColor = isEven ? colorA : colorB;
      if (isEven && (i === 3 && j === 4 || i === 6 && j === 2)) {
        fillColor = accentColor;
      }

      quads.push({
        key: `${i}-${j}`,
        d: pathData,
        fill: fillColor,
      });
    }
  }

  return (
    <div className={`relative overflow-hidden select-none pointer-events-none ${className}`}>
      <svg
        viewBox="0 0 640 640"
        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="checkerHighlight" cx="35%" cy="30%" r="65%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.22" />
            <stop offset="60%" stopColor="#000000" stopOpacity="0" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.25" />
          </radialGradient>
          <filter id="subtleDistort">
            <feTurbulence type="fractalNoise" baseFrequency="0.015" numOctaves="2" result="warp" />
            <feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="12" in="SourceGraphic" in2="warp" />
          </filter>
        </defs>

        <g filter="url(#subtleDistort)">
          {quads.map((q) => (
            <path
              key={q.key}
              d={q.d}
              fill={q.fill}
              stroke="rgba(255, 255, 255, 0.15)"
              strokeWidth="0.75"
            />
          ))}
        </g>
        {/* Editorial sheen layer */}
        <rect width="640" height="640" fill="url(#checkerHighlight)" style={{ mixBlendMode: 'overlay' }} />
      </svg>
    </div>
  );
};
