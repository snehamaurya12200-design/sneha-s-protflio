import React, { useMemo } from 'react';

export type BackgroundTheme = 'soft-aura' | 'sparkle-rose' | 'burgundy-studio';

interface BackgroundAuraProps {
  opacity?: number;
  bgMode?: BackgroundTheme;
}

/**
 * Light Pastel Pop-Art Scrapbook Background
 * Palette:
 * - Blush Pink: #FFE4EC (Main airy base)
 * - Secondary Pastel Pink: #FFC4D6
 * - Butter-Yellow: #FFF0A8
 * - Light Sky Blue: #BDE7FF
 * - Cherry-Red: #E84A65 (selective playful accents)
 */
export const BackgroundAura: React.FC<BackgroundAuraProps> = ({ opacity = 1 }) => {
  // Generate a soft, light, undulating pastel grid with low contrast
  const quads = useMemo(() => {
    const cols = 12;
    const rows = 12;
    const width = 1200;
    const height = 1200;

    const colorBase = '#FFE4EC'; // Airy blush pink
    const colorPastelPink = '#FFD8E3'; // Soft secondary pink
    const colorButter = '#FFF6D1'; // Gentle butter yellow
    const colorSky = '#E2F3FF'; // Gentle sky blue

    const getVertex = (i: number, j: number) => {
      const u = i / cols;
      const v = j / rows;

      // Gentle organic wave distortion
      const warpX = Math.sin(v * Math.PI * 2.5 + 0.3) * 32 + Math.cos(u * Math.PI * 2) * 14;
      const warpY = Math.sin(u * Math.PI * 2.5 + 0.5) * 32 + Math.cos(v * Math.PI * 2) * 14;

      return {
        x: u * width + warpX,
        y: v * height + warpY,
      };
    };

    const items: Array<{ key: string; d: string; fill: string }> = [];

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        const p0 = getVertex(i, j);
        const p1 = getVertex(i + 1, j);
        const p2 = getVertex(i + 1, j + 1);
        const p3 = getVertex(i, j + 1);

        const cx01 = (p0.x + p1.x) / 2 + (j % 2 === 0 ? 6 : -6);
        const cy01 = (p0.y + p1.y) / 2 + (i % 2 === 0 ? -6 : 6);

        const cx12 = (p1.x + p2.x) / 2 + (j % 2 === 0 ? -6 : 6);
        const cy12 = (p1.y + p2.y) / 2 + (i % 2 === 0 ? 6 : -6);

        const cx23 = (p2.x + p3.x) / 2 + (j % 2 === 0 ? -6 : 6);
        const cy23 = (p2.y + p3.y) / 2 + (i % 2 === 0 ? 6 : -6);

        const cx30 = (p3.x + p0.x) / 2 + (j % 2 === 0 ? 6 : -6);
        const cy30 = (p3.y + p0.y) / 2 + (i % 2 === 0 ? -6 : 6);

        const pathData = `M ${p0.x.toFixed(1)} ${p0.y.toFixed(1)} 
          Q ${cx01.toFixed(1)} ${cy01.toFixed(1)} ${p1.x.toFixed(1)} ${p1.y.toFixed(1)} 
          Q ${cx12.toFixed(1)} ${cy12.toFixed(1)} ${p2.x.toFixed(1)} ${p2.y.toFixed(1)} 
          Q ${cx23.toFixed(1)} ${cy23.toFixed(1)} ${p3.x.toFixed(1)} ${p3.y.toFixed(1)} 
          Q ${cx30.toFixed(1)} ${cy30.toFixed(1)} ${p0.x.toFixed(1)} ${p0.y.toFixed(1)} Z`;

        const isEven = (i + j) % 2 === 0;
        let fill = isEven ? colorBase : colorPastelPink;

        // Occasional light butter and sky blue tiles for soft visual variety
        if (isEven && (i + j) % 6 === 0) {
          fill = colorButter;
        } else if (!isEven && (i * 2 + j) % 7 === 0) {
          fill = colorSky;
        }

        items.push({
          key: `${i}-${j}`,
          d: pathData,
          fill,
        });
      }
    }

    return items;
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none -z-20 overflow-hidden select-none bg-[#FFE4EC]"
      style={{ opacity }}
    >
      {/* Light, Soft, Gentle Pastel Wavy Mesh */}
      <svg
        viewBox="-40 -40 1280 1280"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full object-cover"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          {quads.map((q) => (
            <path
              key={q.key}
              d={q.d}
              fill={q.fill}
              stroke="rgba(255, 196, 214, 0.4)"
              strokeWidth="0.8"
            />
          ))}
        </g>
      </svg>

      {/* Subtle Soft Pink Graph Grid Overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(232, 74, 101, 0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(232, 74, 101, 0.12) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />
    </div>
  );
};
