import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight } from 'lucide-react';
import { EXPERIENCES_DATA } from '../data/portfolioData';

const CARD_COLORS = ['neo-pink', 'neo-lavender', 'neo-mint'];

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div className="text-center sm:text-left mb-12">
        <h2 className="section-title">Experience</h2>
        <p className="section-sub">Internships, communities, and technical roles</p>
      </div>

      <div className="space-y-8">
        {EXPERIENCES_DATA.map((exp, idx) => {
          const colorClass = CARD_COLORS[idx % CARD_COLORS.length];

          return (
            <div
              key={exp.id || idx}
              className={`window-card ${colorClass} p-6 sm:p-8`}
            >
              {/* Header */}
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2.5 py-0.5 rounded-full bg-white/90 border border-[#1a1a1a] text-xs font-mono font-bold text-[#1a1a1a]">
                      {exp.type}
                    </span>
                    <span className="text-xs font-mono font-bold text-[#1a1a1a]/60">
                      {exp.location}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1a1a1a]">
                    {exp.role}
                  </h3>
                  <p className="text-sm sm:text-base font-bold text-[#1a1a1a]/80 mt-0.5">
                    {exp.company}
                  </p>
                </div>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 border border-[#1a1a1a] text-xs font-mono font-bold text-[#1a1a1a] shadow-[2px_2px_0px_#1a1a1a]">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{exp.period}</span>
                </span>
              </div>

              {/* Responsibilities / Highlights */}
              <div className="mt-4 pt-4 border-t-2 border-[#1a1a1a]/15 space-y-2.5">
                {exp.highlights.map((highlight, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#1a1a1a] font-medium leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-[#1a1a1a] mt-0.5 shrink-0" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Technologies */}
              {exp.techStack && exp.techStack.length > 0 && (
                <div className="mt-6 pt-4 border-t-2 border-[#1a1a1a]/15 flex flex-wrap items-center gap-1.5">
                  <span className="text-xs font-mono font-bold text-[#1a1a1a] mr-1">Skills:</span>
                  {exp.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded-full bg-white/80 border border-[#1a1a1a] text-xs font-mono font-bold text-[#1a1a1a] shadow-[1px_1px_0px_#1a1a1a]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
