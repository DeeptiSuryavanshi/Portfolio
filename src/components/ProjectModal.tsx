import React, { useEffect } from 'react';
import { Project } from '../types';
import { 
  X, 
  Github, 
  ExternalLink, 
  CheckCircle2, 
  AlertTriangle, 
  Layers, 
  BookOpen,
  ArrowRight,
  ShieldCheck,
  Cpu
} from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      id="project-modal-backdrop"
      onClick={onClose}
      className="fixed inset-0 z-50 bg-[#171717]/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
    >
      <div
        id={`project-modal-${project.id}`}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-3xl my-auto bg-white dark:bg-[#1a1329] rounded-3xl border-2 border-[#1a1a1a] dark:border-[var(--border)] shadow-[6px_6px_0px_#1a1a1a] dark:shadow-[6px_6px_0px_#000000] overflow-hidden flex flex-col max-h-[92vh] animate-in fade-in zoom-in-95 duration-150"
      >
        {/* Modal Header */}
        <div className="p-6 sm:p-8 border-b-2 border-[#1a1a1a]/20 dark:border-white/15 flex items-start justify-between gap-4 bg-[#FAF9F6] dark:bg-[#140d21]">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-xs">
              <span className="font-bold text-[var(--pink-dark)] dark:text-[var(--pink)]">{project.number || project.projectNumber}</span>
              <span className="text-[#1a1a1a]/30 dark:text-white/20">/</span>
              <span className="px-2.5 py-0.5 rounded-full bg-white dark:bg-white/10 border border-[#1a1a1a] dark:border-white/20 text-[#1a1a1a] dark:text-[#f8eff8] uppercase tracking-wider font-semibold">
                {project.category}
              </span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1a1a1a] dark:text-[#f8eff8]">
              {project.title}
            </h2>
            <p className="text-sm text-[#1a1a1a]/80 dark:text-[#f8eff8]/80 mt-1 font-medium">{project.tagline}</p>
          </div>
          <button
            id="close-project-modal-btn"
            onClick={onClose}
            className="p-2 rounded-full text-[#1a1a1a] dark:text-white/80 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body: 01 to 08 Sections */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-sm text-[#626262] dark:text-[#f8eff8]/80">
          {/* 01 — Overview */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 font-mono text-xs text-[var(--pink-dark)] dark:text-[var(--pink)] font-semibold">
              <span>01</span>
              <span>—</span>
              <span className="uppercase tracking-wider">Overview</span>
            </div>
            <p className="text-[#171717] dark:text-[#f8eff8] text-base leading-relaxed">
              {project.fullDescription || project.longDescription || project.description}
            </p>
          </div>

          {/* 02 & 03 — Problem & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-[#FAF9F6] dark:bg-[#140d21] border-2 border-[#1a1a1a]/15 dark:border-white/10 space-y-2">
              <div className="flex items-center gap-2 font-mono text-xs text-[#E98A6A] dark:text-[#ffb7a1] font-semibold">
                <span>02</span>
                <span>—</span>
                <span className="uppercase tracking-wider">The Problem</span>
              </div>
              <p className="text-xs sm:text-sm text-[#171717] dark:text-[#f8eff8]/90 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#FAF9F6] dark:bg-[#140d21] border-2 border-[#1a1a1a]/15 dark:border-white/10 space-y-2">
              <div className="flex items-center gap-2 font-mono text-xs text-[#4F9D69] dark:text-[#88d49e] font-semibold">
                <span>03</span>
                <span>—</span>
                <span className="uppercase tracking-wider">The Solution</span>
              </div>
              <p className="text-xs sm:text-sm text-[#171717] dark:text-[#f8eff8]/90 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* 04 — Architecture */}
          {project.architecture && (
            <div className="space-y-3">
              <div className="flex items-center gap-2 font-mono text-xs text-[var(--pink-dark)] dark:text-[var(--pink)] font-semibold">
                <span>04</span>
                <span>—</span>
                <span className="uppercase tracking-wider">System Architecture</span>
              </div>
              <div className="p-4 rounded-2xl bg-[#F3F1EC] dark:bg-[#20152d] border-2 border-[#1a1a1a]/15 dark:border-white/10 flex items-center gap-3">
                <Layers className="w-5 h-5 text-[var(--pink-dark)] dark:text-[var(--pink)] shrink-0" />
                <p className="font-mono text-xs text-[#171717] dark:text-[#f8eff8] leading-relaxed">
                  {project.architecture}
                </p>
              </div>
            </div>
          )}

          {/* 05 — Technologies */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs text-[var(--pink-dark)] dark:text-[var(--pink)] font-semibold">
              <span>05</span>
              <span>—</span>
              <span className="uppercase tracking-wider">Technologies</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full text-xs font-mono bg-[#FAF9F6] dark:bg-white/10 text-[#171717] dark:text-[#f8eff8] border border-[#1a1a1a]/20 dark:border-white/20 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* 06 — Challenges */}
          {project.challenges && project.challenges.length > 0 && (
            <div className="space-y-3">
              <div className="flex items-center gap-2 font-mono text-xs text-[var(--pink-dark)] dark:text-[var(--pink)] font-semibold">
                <span>06</span>
                <span>—</span>
                <span className="uppercase tracking-wider">Engineering Challenges</span>
              </div>
              <div className="space-y-2">
                {project.challenges.map((ch, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#171717] dark:text-[#f8eff8]/90">
                    <span className="text-[#E98A6A] mt-0.5 font-bold">✕</span>
                    <span>{ch}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 07 — What I Learned */}
          {(project.whatILearned || project.learnings) && (project.whatILearned || project.learnings)!.length > 0 && (
            <div className="space-y-3">
              <div className="flex items-center gap-2 font-mono text-xs text-[var(--pink-dark)] dark:text-[var(--pink)] font-semibold">
                <span>07</span>
                <span>—</span>
                <span className="uppercase tracking-wider">What I Learned</span>
              </div>
              <div className="space-y-2">
                {(project.whatILearned || project.learnings)!.map((lr, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#171717] dark:text-[#f8eff8]/90">
                    <CheckCircle2 className="w-4 h-4 text-[#4F9D69] dark:text-[#88d49e] mt-0.5 shrink-0" />
                    <span>{lr}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Features Bullet Points */}
          <div className="space-y-2 pt-2 border-t-2 border-[#1a1a1a]/15 dark:border-white/10">
            <p className="text-xs font-bold uppercase tracking-wider text-[#171717] dark:text-[#f8eff8]">
              Key Highlights & Impact
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {(project.keyFeatures || project.features || []).map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-[#626262] dark:text-[#f8eff8]/75">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--pink)]" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 08 — GitHub / Live Demo Footer */}
        <div className="p-6 border-t-2 border-[#1a1a1a]/20 dark:border-white/15 bg-[#FAF9F6] dark:bg-[#140d21] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 font-mono text-xs text-[#626262] dark:text-white/60">
            <span>08</span>
            <span>—</span>
            <span>REPOSITORY & ARTIFACTS</span>
          </div>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold bg-[#1a1a1a] dark:bg-[var(--pink)] text-white dark:text-[#1a1a1a] hover:bg-[var(--pink-dark)] dark:hover:bg-white transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Repository</span>
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold bg-white dark:bg-white/10 text-[#1a1a1a] dark:text-[#f8eff8] border-2 border-[#1a1a1a] dark:border-white/25 hover:border-[var(--pink)] hover:text-[var(--pink)] transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Interactive Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
