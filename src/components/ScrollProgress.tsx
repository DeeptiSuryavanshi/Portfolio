import React, { useEffect, useState } from 'react';

export const ScrollProgress: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll <= 0) return;
      const currentProgress = (window.scrollY / totalScroll) * 100;
      setProgress(Math.min(100, Math.max(0, currentProgress)));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      id="scroll-progress-container"
      className="fixed top-0 left-0 w-full h-[2.5px] z-50 pointer-events-none bg-transparent"
    >
      <div
        id="scroll-progress-bar"
        className="h-full bg-[var(--pink-dark)] transition-all duration-75 ease-out shadow-[0_0_8px_var(--pink)]"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};
