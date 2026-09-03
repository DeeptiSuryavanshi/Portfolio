import React from 'react';
import { Trophy, Award, Briefcase, Sparkles, FolderGit2, Star } from 'lucide-react';
import { ACHIEVEMENTS_DATA } from '../data/achievements';

const CARD_COLORS = ['neo-gold', 'neo-lavender', 'neo-mint', 'neo-pink'];

export const AchievementsSection: React.FC = () => {
  const getIcon = (category: string) => {
    switch (category) {
      case 'Internship': return <Briefcase className="w-6 h-6 text-[#1a1a1a]" />;
      case 'Hackathons': return <Trophy className="w-6 h-6 text-[#1a1a1a]" />;
      case 'Projects': return <FolderGit2 className="w-6 h-6 text-[#1a1a1a]" />;
      case 'Certifications': return <Award className="w-6 h-6 text-[#1a1a1a]" />;
      default: return <Star className="w-6 h-6 text-[#1a1a1a]" />;
    }
  };

  return (
    <section id="achievements" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div className="text-center sm:text-left mb-12">
        <h2 className="section-title">Achievements</h2>
        <p className="section-sub">Key milestones, hackathons, and technical highlights</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {ACHIEVEMENTS_DATA.map((item, idx) => {
          const colorClass = CARD_COLORS[idx % CARD_COLORS.length];

          return (
            <div
              key={item.id}
              className={`window-card ${colorClass} p-6 sm:p-8 flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-white border-2 border-[#1a1a1a] shadow-[2px_2px_0px_#1a1a1a] flex items-center justify-center shrink-0">
                    {getIcon(item.category)}
                  </div>
                  <div className="flex-1">
                    <span className="px-2.5 py-0.5 rounded-full bg-white/90 border border-[#1a1a1a] text-[11px] font-mono font-bold text-[#1a1a1a] uppercase inline-block mb-1">
                      {item.badge || item.category}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1a1a1a] leading-tight">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#1a1a1a] font-medium leading-relaxed mt-3">
                  {item.description}
                </p>
              </div>

              {item.metrics && (
                <div className="mt-6 pt-4 border-t-2 border-[#1a1a1a]/15 flex items-center justify-between text-xs font-mono font-bold text-[#1a1a1a]">
                  <span>{item.issuer}</span>
                  <span className="px-3 py-1 rounded-full bg-white border border-[#1a1a1a] shadow-[1.5px_1.5px_0px_#1a1a1a]">
                    {item.metrics}
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
