import React, { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';

export const AuroraBackground: React.FC = () => {
  const { theme } = useTheme();
  const [mousePos, setMousePos] = useState({ x: -500, y: -500 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div id="aurora-background-container" className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Subtle Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60" />

      {/* Aurora Gradient Blobs */}
      <div
        className={`absolute top-[-10%] left-[-10%] w-[55vw] h-[55vw] rounded-full blur-[120px] transition-opacity duration-1000 animate-aurora-1 ${
          theme === 'dark'
            ? 'bg-gradient-to-tr from-sky-500/20 via-indigo-600/15 to-transparent'
            : 'bg-gradient-to-tr from-sky-300/30 via-indigo-300/20 to-transparent'
        }`}
      />
      <div
        className={`absolute top-[30%] right-[-15%] w-[50vw] h-[50vw] rounded-full blur-[140px] transition-opacity duration-1000 animate-aurora-2 ${
          theme === 'dark'
            ? 'bg-gradient-to-bl from-purple-600/20 via-sky-500/15 to-transparent'
            : 'bg-gradient-to-bl from-purple-300/25 via-sky-200/25 to-transparent'
        }`}
      />
      <div
        className={`absolute bottom-[-10%] left-[20%] w-[45vw] h-[45vw] rounded-full blur-[130px] transition-opacity duration-1000 ${
          theme === 'dark'
            ? 'bg-gradient-to-t from-emerald-500/10 via-cyan-500/10 to-transparent'
            : 'bg-gradient-to-t from-emerald-200/20 via-cyan-200/20 to-transparent'
        }`}
      />

      {/* Interactive Mouse Spotlight Glow */}
      <div
        id="mouse-spotlight-glow"
        className="absolute rounded-full pointer-events-none transition-transform duration-75 ease-out -translate-x-1/2 -translate-y-1/2"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          width: '600px',
          height: '600px',
          background:
            theme === 'dark'
              ? 'radial-gradient(circle, rgba(56, 189, 248, 0.08) 0%, rgba(139, 92, 246, 0.04) 40%, transparent 70%)'
              : 'radial-gradient(circle, rgba(2, 132, 199, 0.06) 0%, rgba(124, 58, 237, 0.03) 40%, transparent 70%)',
        }}
      />
    </div>
  );
};
