import React, { useState } from 'react';
import { ExternalLink, Github, ArrowUpRight, Sparkles, Terminal, BookOpen, Layers } from 'lucide-react';
import { FEATURED_PROJECTS } from '../data/projects';
import { Project } from '../types';
import { ProjectModal } from '../components/ProjectModal';

const FILTER_TAGS = ['ALL', 'PYTHON', 'AI', 'WEB', 'MOBILE'];

const CARD_COLORS = ['neo-pink', 'neo-mint', 'neo-lavender', 'neo-gold'];

export const ProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = FEATURED_PROJECTS.filter((proj) => {
    if (activeFilter === 'ALL') return true;
    const tags = (proj.filterTags || proj.filterCategories || []).map((t) => t.toUpperCase());
    return tags.includes(activeFilter.toUpperCase()) || proj.category.toUpperCase().includes(activeFilter.toUpperCase());
  });

  return (
    <section id="projects" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <h2 className="section-title">Projects</h2>
          <p className="section-sub">Things I've built and shipped</p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {FILTER_TAGS.map((tag) => {
            const isActive = activeFilter === tag;
            return (
              <button
                key={tag}
                onClick={() => setActiveFilter(tag)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-bold transition-all cursor-pointer border-2 border-[#1a1a1a] ${
                  isActive
                    ? 'bg-[#1a1a1a] text-white shadow-[2px_2px_0px_rgba(231,156,194,0.7)]'
                    : 'bg-[var(--bg-card)] text-[var(--text)] shadow-[2px_2px_0px_#1a1a1a] hover:bg-[var(--bg-card-hover)]'
                }`}
              >
                {tag}
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredProjects.map((project, idx) => {
          const colorClass = CARD_COLORS[idx % CARD_COLORS.length];
          const features = project.keyFeatures || project.features || [];

          return (
            <div
              key={project.id}
              className={`window-card ${colorClass} p-6 sm:p-8 flex flex-col justify-between`}
            >
              <div>
                {/* Top Row: Number & Category Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 font-mono text-xs font-bold">
                    <span className="text-xl sm:text-2xl text-[#1a1a1a] dark:text-[#f8eff8]">
                      {project.number || project.projectNumber || `0${idx + 1}`}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1a1a1a]/40 dark:bg-white/40" />
                    <span className="px-2.5 py-0.5 rounded-full bg-white/80 dark:bg-white/10 border border-[#1a1a1a] dark:border-white/20 text-[#1a1a1a] dark:text-[#f8eff8] uppercase">
                      {project.category}
                    </span>
                  </div>

                  {project.featured && (
                    <span className="px-3 py-1 rounded-full bg-white dark:bg-white/10 border border-[#1a1a1a] dark:border-white/20 text-xs font-bold text-[#1a1a1a] dark:text-[#f8eff8] shadow-[2px_2px_0px_#1a1a1a] dark:shadow-[2px_2px_0px_#000000] flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-[var(--pink-dark)] dark:text-[#f48fb1]" />
                      <span>Featured</span>
                    </span>
                  )}
                </div>

                {/* Title & Tagline */}
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1a1a1a] dark:text-[#f8eff8] mb-2 leading-tight">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm font-medium text-[#1a1a1a]/80 dark:text-[#f8eff8]/85 mb-4 line-clamp-2">
                  {project.tagline || project.description}
                </p>

                {/* Key Features (up to 3) */}
                {features.length > 0 && (
                  <div className="space-y-1.5 mb-6 py-3 border-y-2 border-[#1a1a1a]/15 dark:border-white/15 text-xs text-[#1a1a1a] dark:text-[#f8eff8]/90">
                    {features.slice(0, 3).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 font-medium">
                        <span className="text-[var(--pink-dark)] dark:text-[#f48fb1] font-bold">✦</span>
                        <span className="line-clamp-1 text-[#1a1a1a] dark:text-[#f8eff8]/90">{feat}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-full bg-white/90 dark:bg-white/10 border border-[#1a1a1a] dark:border-white/20 text-[11px] font-mono font-bold text-[#1a1a1a] dark:text-[#f8eff8] shadow-[1.5px_1.5px_0px_#1a1a1a] dark:shadow-[1.5px_1.5px_0px_#000000]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t-2 border-[#1a1a1a]/20 dark:border-white/20">
                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-full bg-white dark:bg-white/10 border-2 border-[#1a1a1a] dark:border-white/25 text-xs font-bold text-[#1a1a1a] dark:text-[#f8eff8] shadow-[2px_2px_0px_#1a1a1a] dark:shadow-[2px_2px_0px_#000000] hover:bg-[#1a1a1a] hover:text-white transition-all flex items-center gap-1.5"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Code</span>
                    </a>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-full bg-white dark:bg-white/10 border-2 border-[#1a1a1a] dark:border-white/25 text-xs font-bold text-[#1a1a1a] dark:text-[#f8eff8] shadow-[2px_2px_0px_#1a1a1a] dark:shadow-[2px_2px_0px_#000000] hover:bg-[#1a1a1a] hover:text-white transition-all flex items-center gap-1.5"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Demo</span>
                    </a>
                  )}
                </div>

                {/* View Details / Case Study Modal Trigger */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="px-4 py-1.5 rounded-full bg-[#1a1a1a] dark:bg-[var(--pink)] text-white dark:text-[#1a1a1a] text-xs font-bold shadow-[2px_2px_0px_rgba(231,156,194,0.8)] dark:shadow-[2px_2px_0px_#000000] hover:bg-[var(--pink-dark)] dark:hover:bg-white transition-all cursor-pointer flex items-center gap-1.5"
                >
                  <span>Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal View */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};
