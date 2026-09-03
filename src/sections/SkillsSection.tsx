import React, { useState } from 'react';
import {
  Terminal,
  Code,
  Cpu,
  Layers,
  Sparkles,
  Server,
  Database,
  BrainCircuit,
  GitBranch,
  Github,
  Monitor,
  CheckCircle2
} from 'lucide-react';
import { SKILLS_DATA } from '../data/skills';

const PILLARS = [
  {
    title: 'Programming & Foundations',
    color: 'neo-mint',
    description: 'Core languages for systems, algorithms, and data pipelines',
    skills: ['Python', 'JavaScript (ES6+)', 'Java', 'C++', 'C', 'Data Structures & Algorithms'],
    icon: Terminal
  },
  {
    title: 'Frontend & Mobile Engineering',
    color: 'neo-lavender',
    description: 'Creating accessible, responsive, and tactile web & mobile interfaces',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Flutter', 'HTML5 / Modern CSS', 'Vite'],
    icon: Code
  },
  {
    title: 'Backend & Cloud Databases',
    color: 'neo-pink',
    description: 'REST APIs, asynchronous request handling, and persistent data layers',
    skills: ['FastAPI (Python)', 'Node.js / Express', 'PostgreSQL / MySQL', 'Firebase Firestore', 'MongoDB', 'RESTful API Design'],
    icon: Server
  },
  {
    title: 'AI / Machine Learning & Tooling',
    color: 'neo-gold',
    description: 'Deep learning frameworks, generative AI models, and DevOps workflows',
    skills: ['PyTorch', 'Hugging Face Transformers', 'Google GenAI / LLMs', 'Git & GitHub', 'Docker', 'Linux / Bash'],
    icon: BrainCircuit
  }
];

export const SkillsSection: React.FC = () => {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  const selectedSkillData = SKILLS_DATA.find(s => s.name.toLowerCase() === activeSkill?.toLowerCase());

  return (
    <section id="skills" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div className="text-center sm:text-left mb-12">
        <h2 className="section-title">Technical Skills</h2>
        <p className="section-sub">
          A showcase of engineering capabilities, project experience, and technical focus
        </p>
      </div>

      {/* 4 Pillars Grid in Window Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PILLARS.map((pillar) => {
          const IconComponent = pillar.icon;
          return (
            <div
              key={pillar.title}
              className={`window-card ${pillar.color} p-6 sm:p-8 flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white border-2 border-[#1a1a1a] shadow-[2px_2px_0px_#1a1a1a] flex items-center justify-center text-[#1a1a1a]">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#1a1a1a]">
                      {pillar.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#1a1a1a]/70">
                      {pillar.description}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t-2 border-[#1a1a1a]/15">
                  {pillar.skills.map((skill) => {
                    const isSelected = activeSkill === skill;
                    return (
                      <button
                        key={skill}
                        onClick={() => setActiveSkill(isSelected ? null : skill)}
                        className={`px-3 py-1.5 rounded-full text-xs font-mono font-bold transition-all border-2 border-[#1a1a1a] cursor-pointer ${
                          isSelected
                            ? 'bg-[#1a1a1a] text-white shadow-[2px_2px_0px_rgba(231,156,194,0.8)] scale-105'
                            : 'bg-white/90 text-[#1a1a1a] shadow-[1.5px_1.5px_0px_#1a1a1a] hover:bg-white'
                        }`}
                      >
                        {skill}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Helper tip */}
              <div className="mt-6 pt-3 border-t border-[#1a1a1a]/10 flex items-center justify-between text-[11px] font-mono text-[#1a1a1a]/70">
                <span>✦ Click any skill to inspect where I used it</span>
                <span>{pillar.skills.length} core competencies</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Selected Skill Drilldown / Evidence Box */}
      {selectedSkillData && (
        <div className="mt-8 window-card neo-white p-6 animate-in fade-in slide-in-from-top-3">
          <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--pink-dark)]">
                Skill In Practice:
              </span>
              <h4 className="font-serif text-xl font-bold text-[#1a1a1a]">
                {selectedSkillData.name}
              </h4>
            </div>
            <button
              onClick={() => setActiveSkill(null)}
              className="text-xs font-mono font-bold text-[#1a1a1a] underline cursor-pointer"
            >
              close ✕
            </button>
          </div>

          <p className="text-sm text-[#1a1a1a] mb-4 font-medium">
            {selectedSkillData.description}
          </p>

          <div>
            <p className="text-xs font-mono font-bold text-[#1a1a1a] mb-2 uppercase">
              Proven Project & Work Application:
            </p>
            <div className="flex flex-wrap gap-2">
              {selectedSkillData.usedIn.map((item, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full bg-[var(--pink-light)] border border-[#1a1a1a] text-xs font-bold text-[#1a1a1a] shadow-[1.5px_1.5px_0px_#1a1a1a]"
                >
                  ✓ {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
