import React, { useState, useEffect } from 'react';
import { Sun, Moon, ArrowDown, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { handleResumeDownload } from '../utils/resumeDownload';
import { useToast } from '../context/ToastContext';

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Sticky Note', href: '#sticky-note' },
];

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { showToast } = useToast();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [showThemeNudge, setShowThemeNudge] = useState(false);

  useEffect(() => {
    // Check if user has already dismissed theme nudge
    const nudgeDismissed = localStorage.getItem('theme_nudge_dismissed');
    if (!nudgeDismissed && theme === 'light') {
      const timer = setTimeout(() => setShowThemeNudge(true), 2500);
      return () => clearTimeout(timer);
    }
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sectionIds = ['about', 'education', 'projects', 'experience', 'skills', 'achievements', 'certifications', 'sticky-note'];
      const scrollPos = window.scrollY + 180;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownload = (e: React.MouseEvent) => {
    e.preventDefault();
    handleResumeDownload(showToast);
  };

  const dismissNudge = () => {
    setShowThemeNudge(false);
    localStorage.setItem('theme_nudge_dismissed', 'true');
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-2.5 bg-[var(--bg-nav-scrolled)] border-b-[3.5px] border-[#1a1a1a] shadow-[0_4px_0px_rgba(0,0,0,0.08)] backdrop-blur-md'
          : 'py-4 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo with Ribbon Bow */}
        <a
          id="navbar-brand"
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('#about');
          }}
          className="flex items-center gap-1.5 text-xl sm:text-2xl font-bold tracking-tight text-[var(--text)] hover:opacity-85 transition-opacity"
        >
          <span></span>
          <span className="font-serif">Deepti</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          id="navbar-links"
          className="hidden lg:flex items-center gap-1 bg-[var(--bg-card)] px-3.5 py-1.5 rounded-full border border-[var(--border)] shadow-[0_2px_12px_rgba(186,215,243,0.25)] backdrop-blur-md"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(item.href);
                }}
                className={`px-3 py-1 text-sm rounded-full transition-all duration-200 font-medium whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-[#1a1a1a] text-white shadow-[2px_2px_0px_var(--pink)] font-semibold'
                    : 'text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--bg-card-hover)]'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right Controls: Theme Toggle & Resume Button */}
        <div className="flex items-center gap-2.5 sm:gap-3 relative">
          {/* Custom Theme Toggle Button */}
          <div className="relative">
            <button
              id="theme-toggle-btn"
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="w-14 h-8 rounded-full bg-[var(--bg-card)] border-2 border-[#1a1a1a] shadow-[2px_2px_0px_#1a1a1a] p-0.5 flex items-center transition-all cursor-pointer relative"
            >
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-transform duration-300 ${
                  theme === 'dark'
                    ? 'translate-x-6 bg-[#f0849f] text-[#1a1a1a]'
                    : 'translate-x-0 bg-[#38bdf8] text-white'
                }`}
              >
                {theme === 'dark' ? (
                  <Moon className="w-3.5 h-3.5 fill-current" />
                ) : (
                  <Sun className="w-3.5 h-3.5 fill-current" />
                )}
              </div>
            </button>

            {/* Playful Theme Nudge Tooltip (from reference site) */}
            {showThemeNudge && theme === 'light' && (
              <div
                id="themeNudge"
                className="theme-nudge"
                role="tooltip"
              >
                <p className="font-medium text-xs leading-tight text-[var(--text)]">
                  too light for you?<br />
                  <span className="text-[var(--pink-dark)] font-semibold">switch to dark mode ✦</span>
                </p>
                <button
                  onClick={dismissNudge}
                  className="mt-2 text-[11px] text-[var(--text-muted)] underline hover:text-[var(--text)] cursor-pointer block"
                >
                  no thanks
                </button>
              </div>
            )}
          </div>

          {/* Download Resume Nav Button */}
          <button
            id="navbar-resume-btn"
            onClick={handleDownload}
            className="btn-download text-xs sm:text-sm font-semibold cursor-pointer whitespace-nowrap shadow-[3px_3px_0px_#1a1a1a] border-2 border-[#1a1a1a]"
          >
            <span>Resume</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            id="mobile-nav-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-[var(--bg-card)] border-2 border-[#1a1a1a] shadow-[2px_2px_0px_#1a1a1a] text-[var(--text)]"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden px-6 py-6 bg-[var(--bg-card)] border-b-[3.5px] border-[#1a1a1a] shadow-[0_6px_0px_rgba(0,0,0,0.1)] backdrop-blur-xl animate-in fade-in slide-in-from-top-3"
        >
          <div className="flex flex-col gap-2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(item.href);
                }}
                className="py-2 px-3 rounded-lg font-medium text-base text-[var(--text)] hover:bg-[var(--pink-light)]/40 transition-colors border border-transparent hover:border-[#1a1a1a]"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
