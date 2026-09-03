import React, { useEffect, useState, useRef } from 'react';
import { Sparkles, Terminal, ArrowUpRight, FolderGit2, Briefcase, Trophy, Award } from 'lucide-react';
import { PERSONAL_INFO, COUNTER_STATS } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState<number[]>(COUNTER_STATS.map(() => 0));
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          COUNTER_STATS.forEach((stat, index) => {
            let start = 0;
            const end = stat.value;
            const duration = 1200;
            const stepTime = Math.max(25, Math.floor(duration / (end || 1)));

            const timer = setInterval(() => {
              start += 1;
              setCounts((prev) => {
                const next = [...prev];
                next[index] = start;
                return next;
              });
              if (start >= end) {
                clearInterval(timer);
              }
            }, stepTime);
          });
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const getStatIcon = (label: string) => {
    if (label.includes('Project')) return <FolderGit2 className="w-5 h-5 text-[#6D5DFB]" />;
    if (label.includes('Internship')) return <Briefcase className="w-5 h-5 text-[#E98A6A]" />;
    if (label.includes('Hackathon')) return <Trophy className="w-5 h-5 text-[#6D5DFB]" />;
    return <Award className="w-5 h-5 text-[#4F9D69]" />;
  };

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#E7E4DE]"
    >
      {/* Section Sub-heading Badge */}
      <div className="mb-12">
        <p className="text-xs uppercase tracking-widest text-[#6D5DFB] font-mono font-semibold">
          ✦ A LITTLE ABOUT ME
        </p>
      </div>

      {/* Two-Column Editorial Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Huge Editorial Statement */}
        <div className="lg:col-span-5 space-y-6">
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#171717] leading-[1.08]">
            Curious by nature.<br />
            <span className="text-[#6D5DFB]">Builder</span> by choice.
          </h2>

          <div className="pt-2">
            <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white border border-[#E7E4DE] shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#6D5DFB] animate-pulse" />
              <div className="text-xs font-mono">
                <span className="text-[#626262]">Currently exploring: </span>
                <span className="font-semibold text-[#171717]">{PERSONAL_INFO.currentlyExploring}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Professional Paragraphs & Context */}
        <div className="lg:col-span-7 space-y-6 text-[#626262] text-base sm:text-lg leading-relaxed">
          <p>
            {PERSONAL_INFO.bioParagraph1}
          </p>

          <p>
            {PERSONAL_INFO.bioParagraph2}
          </p>

          {/* Key Principles Checklist */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#E7E4DE]">
            <div className="bg-white p-4 rounded-xl border border-[#E7E4DE] shadow-xs space-y-1">
              <p className="font-heading text-sm font-bold text-[#171717]">Problem Solving First</p>
              <p className="text-xs text-[#626262]">Writing clean code with measurable utility over unnecessary complexity.</p>
            </div>

            <div className="bg-white p-4 rounded-xl border border-[#E7E4DE] shadow-xs space-y-1">
              <p className="font-heading text-sm font-bold text-[#171717]">Continuous Learning</p>
              <p className="text-xs text-[#626262]">Expanding from Python & algorithms into modern full-stack web and AI models.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats: Minimal Animated Counters */}
      <div className="mt-16 pt-12 border-t border-[#E7E4DE]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {COUNTER_STATS.map((stat, idx) => (
            <div
              key={stat.id}
              className="bg-white p-6 rounded-2xl border border-[#E7E4DE] shadow-editorial hover:border-[#6D5DFB]/40 transition-colors"
            >
              <div className="mb-3">{getStatIcon(stat.label)}</div>
              <div className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#171717] tracking-tight">
                {counts[idx]}
                <span className="text-[#6D5DFB]">{stat.suffix}</span>
              </div>
              <p className="text-xs sm:text-sm font-medium text-[#626262] mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
