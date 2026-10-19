import React, { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';

export const CustomCursor: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isFinePointer, setIsFinePointer] = useState(false);

  useEffect(() => {
    // Check if the device has a fine pointer (mouse / trackpad) rather than a touch screen
    const mediaQuery = window.matchMedia('(pointer: fine)');
    setIsFinePointer(mediaQuery.matches);

    const handlePointerChange = (e: MediaQueryListEvent) => {
      setIsFinePointer(e.matches);
    };
    mediaQuery.addEventListener('change', handlePointerChange);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Check if target is an interactive element
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest('a, button, input, textarea, select, [role="button"], [tabindex="0"]');
        setIsHoveringInteractive(!!interactive);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      mediaQuery.removeEventListener('change', handlePointerChange);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  // Don't render on touch screens, or if reduced motion is preferred, or before first move
  if (!isFinePointer || shouldReduceMotion || !isVisible) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden select-none">
      {/* Small crisp center dot in Raspberry Pink #C24366 */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 rounded-full bg-[#C24366] pointer-events-none -translate-x-1/2 -translate-y-1/2 z-50 shadow-[0_0_10px_rgba(238,105,180,0.85)]"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          scale: isHoveringInteractive ? 1.5 : 1,
        }}
        transition={{
          type: 'spring',
          damping: 28,
          stiffness: 700,
          mass: 0.1,
        }}
      />
      {/* Subtle trailing ring in Rose Pink #EE69B4 that softly expands on interactive hover */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-[#EE69B4]/60 pointer-events-none -translate-x-1/2 -translate-y-1/2 z-40"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          width: isHoveringInteractive ? 36 : 22,
          height: isHoveringInteractive ? 36 : 22,
          opacity: isHoveringInteractive ? 0.9 : 0.45,
          backgroundColor: isHoveringInteractive ? 'rgba(194, 67, 102, 0.18)' : 'rgba(238, 105, 180, 0.04)',
        }}
        transition={{
          type: 'spring',
          damping: 24,
          stiffness: 350,
          mass: 0.25,
        }}
      />
    </div>
  );
};
