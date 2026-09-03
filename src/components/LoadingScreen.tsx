import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const startTime = Date.now();
    const duration = 1000; // 1.0s fast loader

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(pct);

      if (pct >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsDone(true);
          setTimeout(onComplete, 450);
        }, 150);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          id="loading-screen"
          initial={{ opacity: 1, y: 0 }}
          exit={{ y: '-100%', transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-between bg-[#FAF9F6] text-[#171717] px-8 py-12 select-none"
        >
          {/* Top minimal status */}
          <div className="w-full flex justify-between items-center text-xs font-mono text-[#626262]">
            <span>PORTFOLIO // 2026</span>
            <span>DEEPTI SURYAVANSHI</span>
          </div>

          {/* Center Visual: D / DEEPTI */}
          <div className="flex flex-col items-center space-y-4">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="font-heading font-bold text-6xl sm:text-8xl tracking-tight text-[#171717] flex items-center"
            >
              <span>DEEPTI</span>
              <span className="text-[#6D5DFB]">.</span>
            </motion.div>
            <p className="text-xs font-mono tracking-widest uppercase text-[#626262]">
              SOFTWARE DEVELOPER • AI ENTHUSIAST
            </p>
          </div>

          {/* Bottom Counter: 0 -> 100% */}
          <div className="w-full max-w-sm flex flex-col items-center space-y-3">
            <div className="w-full bg-[#E7E4DE] rounded-full h-1 overflow-hidden">
              <motion.div
                className="h-full bg-[#6D5DFB]"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'linear' }}
              />
            </div>
            <div className="w-full flex justify-between items-center font-mono text-xs text-[#626262]">
              <span>LOADING EXPERIENCE</span>
              <span className="font-bold text-[#171717]">{progress}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
