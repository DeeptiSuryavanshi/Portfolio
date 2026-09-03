import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="main-footer"
      className="border-t-[3.5px] border-[#1a1a1a] bg-[var(--bg-card)] py-12 px-4 sm:px-6 lg:px-8 mt-20 relative"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        {/* Brand & Note */}
        <div>
          <div className="flex items-center justify-center md:justify-start gap-1.5 text-xl font-bold text-[var(--text)]">
            <span></span>
            <span className="font-serif">Deepti Suryavanshi</span>
          </div>
          <p className="text-xs font-semibold text-[var(--text-muted)] mt-1 flex items-center justify-center md:justify-start gap-1">
            <span>Made with</span>
            <span className="text-pink-500"></span>
            <span>& code · Always learning, always building.</span>
          </p>
        </div>

        {/* Social Buttons & Back to Top */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            className="px-3.5 py-1.5 rounded-full bg-[var(--bg)] border-2 border-[#1a1a1a] shadow-[2px_2px_0px_#1a1a1a] text-xs font-mono font-bold text-[var(--text)] hover:bg-[var(--pink-light)] transition-all flex items-center gap-1.5"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>

          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noreferrer"
            className="px-3.5 py-1.5 rounded-full bg-[var(--bg)] border-2 border-[#1a1a1a] shadow-[2px_2px_0px_#1a1a1a] text-xs font-mono font-bold text-[var(--text)] hover:bg-[var(--pink-light)] transition-all flex items-center gap-1.5"
          >
            <Linkedin className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
          </a>

          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="px-3.5 py-1.5 rounded-full bg-[var(--bg)] border-2 border-[#1a1a1a] shadow-[2px_2px_0px_#1a1a1a] text-xs font-mono font-bold text-[var(--text)] hover:bg-[var(--pink-light)] transition-all flex items-center gap-1.5"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Email</span>
          </a>

          <button
            onClick={scrollToTop}
            className="px-4 py-1.5 rounded-full bg-[#1a1a1a] text-white border-2 border-[#1a1a1a] shadow-[2px_2px_0px_rgba(231,156,194,0.8)] text-xs font-mono font-bold hover:bg-[var(--pink-dark)] transition-all cursor-pointer flex items-center gap-1.5 ml-2"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
