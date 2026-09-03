import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { ToastProvider, useToast } from './context/ToastContext';
import { Navbar } from './components/Navbar';
import { CustomCursor } from './components/CustomCursor';
import { ScrollProgress } from './components/ScrollProgress';
import { CommandPalette } from './components/CommandPalette';
import { InteractiveTerminal } from './components/InteractiveTerminal';
import { ProjectModal } from './components/ProjectModal';
import { HireMeModal } from './components/HireMeModal';
import { Footer } from './components/Footer';

// Neo-Brutalist Sindhusree-Inspired Sections
import { HeroSection } from './sections/HeroSection';
import { EducationSection } from './sections/EducationSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { SkillsSection } from './sections/SkillsSection';
import { AchievementsSection } from './sections/AchievementsSection';
import { CertificationsSection } from './sections/CertificationsSection';
import { StickyNoteSection } from './sections/StickyNoteSection';

import { Project } from './types';
import { handleResumeDownload } from './utils/resumeDownload';

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  override state: ErrorBoundaryState = { hasError: false, error: null };

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  override componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Portfolio Error caught:', error, errorInfo);
  }

  override render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] flex flex-col items-center justify-center p-6 text-center">
          <h2 className="text-2xl font-bold mb-2 font-serif">Deepti Suryavanshi — Portfolio</h2>
          <p className="text-[var(--text-muted)] mb-6 text-sm max-w-md">
            The application encountered a display glitch.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-2.5 bg-[#1a1a1a] text-white rounded-full text-xs font-semibold cursor-pointer transition-colors shadow-[2px_2px_0px_var(--pink)]"
          >
            Reload Portfolio
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

const PortfolioContent: React.FC = () => {
  const { showToast } = useToast();
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isHireMeOpen, setIsHireMeOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const onDownloadResume = () => {
    handleResumeDownload(showToast);
  };

  useEffect(() => {
    // Keyboard shortcuts for Command Palette (Ctrl+K, Cmd+K) & Terminal (`~`)
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
      }
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === '`') {
        e.preventDefault();
        setIsTerminalOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, []);

  return (
    <div
      id="portfolio-root-container"
      className="relative min-h-screen bg-[var(--bg)] text-[var(--text)] selection:bg-[var(--pink-light)] selection:text-[#1a1a1a] antialiased overflow-x-hidden transition-colors duration-300"
    >
      {/* Interactive Custom Cursor */}
      <CustomCursor />

      {/* Reading Progress Line */}
      <ScrollProgress />

      {/* Floating Navbar with sliding Sun/Moon toggle & theme nudge */}
      <Navbar />

      {/* Main Flow Matching sindhusree.vercel.app */}
      <main id="main-content" className="relative z-10 flex flex-col">
        <HeroSection />
        <EducationSection />
        <ProjectsSection />
        <ExperienceSection />
        <SkillsSection />
        <AchievementsSection />
        <CertificationsSection />
        <StickyNoteSection />
      </main>

      {/* Floating Quick Action Pill */}
      <div className="fixed bottom-6 right-6 z-30 flex items-center gap-2">
        <button
          id="floating-terminal-pill"
          onClick={() => setIsTerminalOpen(true)}
          className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-[var(--bg-card)] border-2 border-[#1a1a1a] text-[var(--text)] text-xs font-mono font-bold shadow-[2px_2px_0px_#1a1a1a] hover:bg-[var(--pink-light)] transition-all cursor-pointer"
          title="Terminal (Press `~`)"
        >
          <span className="text-[var(--pink-dark)]">$</span>
          <span>terminal</span>
        </button>

        <button
          id="floating-hire-pill"
          onClick={() => setIsHireMeOpen(true)}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1a1a1a] text-white border-2 border-[#1a1a1a] hover:bg-[var(--pink-dark)] text-xs font-bold shadow-[3px_3px_0px_rgba(231,156,194,0.8)] transition-all cursor-pointer"
        >
          <span className="w-2 h-2 rounded-full bg-[#66bb6a] animate-pulse" />
          <span>Hire Me</span>
        </button>
      </div>

      {/* Global Modals */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onOpenTerminal={() => setIsTerminalOpen(true)}
        onOpenHireMe={() => setIsHireMeOpen(true)}
        onDownloadResume={onDownloadResume}
      />

      <InteractiveTerminal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
        onDownloadResume={onDownloadResume}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <HireMeModal
        isOpen={isHireMeOpen}
        onClose={() => setIsHireMeOpen(false)}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <ToastProvider>
          <PortfolioContent />
        </ToastProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
