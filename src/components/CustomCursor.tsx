import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isProjectHovered, setIsProjectHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Disable on touch devices or screens <= 1024px
    if (
      typeof window !== 'undefined' &&
      ('ontouchstart' in window || navigator.maxTouchPoints > 0 || window.innerWidth < 1024)
    ) {
      setIsTouch(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement;
      const isProjectCard = !!target.closest('[data-project-card="true"]');
      setIsProjectHovered(isProjectCard);

      if (
        !isProjectCard &&
        (target.closest('button') ||
          target.closest('a') ||
          target.closest('input') ||
          target.closest('textarea') ||
          target.closest('[role="button"]') ||
          target.closest('.interactive-target'))
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  useEffect(() => {
    if (isTouch) return;
    let animationFrameId: number;

    const followCursor = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (pos.x - prev.x) * 0.22,
        y: prev.y + (pos.y - prev.y) * 0.22,
      }));
      animationFrameId = requestAnimationFrame(followCursor);
    };

    animationFrameId = requestAnimationFrame(followCursor);
    return () => cancelAnimationFrame(animationFrameId);
  }, [pos, isTouch]);

  if (isTouch || !isVisible) return null;

  return (
    <>
      {/* Precision Dot */}
      <div
        id="custom-cursor-dot"
        className={`fixed pointer-events-none z-50 rounded-full bg-[var(--pink-dark)] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-150 ${
          isProjectHovered ? 'opacity-0 scale-0' : 'w-2 h-2 opacity-100'
        }`}
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
        }}
      />

      {/* Trailing Outer Ring / Project Card Expansion */}
      <div
        id="custom-cursor-ring"
        className={`fixed pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ease-out flex items-center justify-center font-medium ${
          isProjectHovered
            ? 'px-4 py-2 bg-[#1a1a1a] text-white border-2 border-[var(--pink)] text-[11px] tracking-wider rounded-full shadow-lg scale-100 font-mono'
            : isHovered
            ? 'w-12 h-12 rounded-full bg-[var(--pink-light)]/60 border border-[var(--pink-dark)]/60 scale-125'
            : 'w-7 h-7 rounded-full bg-[var(--pink)]/15 border border-[var(--pink-dark)]/35'
        }`}
        style={{
          left: `${trailingPos.x}px`,
          top: `${trailingPos.y}px`,
        }}
      >
        {isProjectHovered && <span>VIEW PROJECT →</span>}
      </div>
    </>
  );
};
