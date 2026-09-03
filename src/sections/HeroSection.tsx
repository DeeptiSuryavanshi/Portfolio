import React from 'react';
import { Mail, Github, Linkedin, Code2, ArrowDown, Sparkles, Terminal, BookOpen, Rocket } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { handleResumeDownload } from '../utils/resumeDownload';
import { useToast } from '../context/ToastContext';

export const HeroSection: React.FC = () => {
  const { showToast } = useToast();

  const handleDownload = (e: React.MouseEvent) => {
    e.preventDefault();
    handleResumeDownload(showToast);
  };

  return (
    <section id="about" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden min-h-[90vh] flex items-center">
      {/* Soft Floating Blobs */}
      <div className="hero-blob blob-1" />
      <div className="hero-blob blob-2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bio & Hero Details */}
          <div className="lg:col-span-6 text-center lg:text-left space-y-6">
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--bg-card)] border-2 border-[#1a1a1a] shadow-[2px_2px_0px_#1a1a1a] text-xs font-semibold text-[var(--pink-dark)]">
              <Sparkles className="w-3.5 h-3.5 text-[var(--pink-dark)]" />
              <span>✦ Final-year CS Student · Developer & AI Enthusiast</span>
            </div>

            {/* Main Greeting */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--text)] leading-[1.15]">
              Hello, I'm<br />
              <span className="hero-name-badge hero-name-gradient mt-2 inline-block">
                Deepti Suryavanshi.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[var(--text-muted)] max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              Computer Science student passionate about building scalable web apps and AI-driven systems that deliver real value.
              <br className="hidden sm:inline" />
              Still learning, always curious, and excited about building practical, intelligent things.
            </p>

            {/* Stat Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 py-2">
              <div className="stat-pill border-2 border-[#1a1a1a] shadow-[3px_3px_0px_#1a1a1a]">
                <span className="stat-num">15+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat-pill border-2 border-[#1a1a1a] shadow-[3px_3px_0px_#1a1a1a]">
                <span className="stat-num">1</span>
                <span className="stat-label">ML Internship</span>
              </div>
              <div className="stat-pill border-2 border-[#1a1a1a] shadow-[3px_3px_0px_#1a1a1a]">
                <span className="stat-num">4+</span>
                <span className="stat-label">Hackathons</span>
              </div>
              <div className="stat-pill border-2 border-[#1a1a1a] shadow-[3px_3px_0px_#1a1a1a]">
                <span className="stat-num">4+</span>
                <span className="stat-label">Certifications</span>
              </div>
            </div>

            {/* Social Buttons Row (Matching sindhusree style btn-pink & btn-download) */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-2">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="btn-pink border-2 border-[#1a1a1a] shadow-[3px_3px_0px_#1a1a1a]"
              >
                <Mail className="w-4 h-4 text-[var(--pink-dark)]" />
                <span>Email</span>
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pink border-2 border-[#1a1a1a] shadow-[3px_3px_0px_#1a1a1a]"
              >
                <Github className="w-4 h-4 text-[var(--pink-dark)]" />
                <span>GitHub</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pink border-2 border-[#1a1a1a] shadow-[3px_3px_0px_#1a1a1a]"
              >
                <Linkedin className="w-4 h-4 text-[var(--pink-dark)]" />
                <span>LinkedIn</span>
              </a>

              <a
                href="#skills"
                className="btn-pink border-2 border-[#1a1a1a] shadow-[3px_3px_0px_#1a1a1a]"
              >
                <Code2 className="w-4 h-4 text-[var(--pink-dark)]" />
                <span>Skills</span>
              </a>

              <button
                onClick={handleDownload}
                className="btn-download border-2 border-[#1a1a1a] shadow-[3px_3px_0px_#1a1a1a] cursor-pointer"
              >
                <ArrowDown className="w-4 h-4" />
                <span>Download Resume</span>
              </button>
            </div>
          </div>

          {/* Right Column: 3-Card Polaroid Stage (Signature Sindhu Feature) */}
          <div className="lg:col-span-6 flex justify-center items-center">
            <div className="polaroid-stage relative w-full h-[450px] sm:h-[480px]">
              
              {/* Card 1 (Left - Leader) */}
              <div
                className="polaroid-card w-[240px] sm:w-[270px] left-[15%] sm:left-[22%] z-10"
                style={{
                  transform: 'translate(-50%, -50%) rotate(-9deg)',
                  top: '52%',
                }}
              >
                <div className="rounded-xl overflow-hidden bg-gradient-to-br from-[#cbe7fc] to-[#7dd3fc] p-4 text-center border-2 border-[#1a1a1a] aspect-square flex flex-col items-center justify-center relative">
                  <span className="text-4xl mb-2">🚀</span>
                  <div className="px-3 py-1 bg-white/90 rounded-full border border-[#1a1a1a] text-xs font-bold text-[#1a1a1a] shadow-[2px_2px_0px_#1a1a1a]">
                    A Leader
                  </div>
                  <p className="text-[11px] font-medium text-[#1a1a1a] mt-2 max-w-[180px]">
                    Hackathon Finalist & Project Coordinator driving technical impact.
                  </p>
                </div>
                <div className="pt-3 text-center">
                  <p className="font-handwriting text-2xl font-bold text-[var(--text)]">
                    Passionate Lead
                  </p>
                </div>
              </div>

              {/* Card 2 (Center - Builder) */}
              <div
                className="polaroid-card w-[250px] sm:w-[280px] left-[50%] z-20"
                style={{
                  transform: 'translate(-50%, -50%) rotate(3deg)',
                  top: '46%',
                }}
              >
                <div className="rounded-xl overflow-hidden bg-gradient-to-br from-[#c7d2fe] to-[#bae6fd] p-4 text-center border-2 border-[#1a1a1a] aspect-square flex flex-col items-center justify-center relative">
                  <span className="text-4xl mb-2">💻</span>
                  <div className="px-3 py-1 bg-white/90 rounded-full border border-[#1a1a1a] text-xs font-bold text-[#1a1a1a] shadow-[2px_2px_0px_#1a1a1a]">
                    A Builder
                  </div>
                  <p className="text-[11px] font-medium text-[#1a1a1a] mt-2 max-w-[190px]">
                    Building Python tools, distributed systems & AI apps with real utility.
                  </p>
                </div>
                <div className="pt-3 text-center">
                  <p className="font-handwriting text-2xl font-bold text-[var(--text)]">
                    Software Crafter
                  </p>
                </div>
              </div>

              {/* Card 3 (Right - Student) */}
              <div
                className="polaroid-card w-[240px] sm:w-[270px] left-[85%] sm:left-[78%] z-10"
                style={{
                  transform: 'translate(-50%, -50%) rotate(9deg)',
                  top: '52%',
                }}
              >
                <div className="rounded-xl overflow-hidden bg-gradient-to-br from-[#fef08a] to-[#cbe7fc] p-4 text-center border-2 border-[#1a1a1a] aspect-square flex flex-col items-center justify-center relative">
                  <span className="text-4xl mb-2">📚</span>
                  <div className="px-3 py-1 bg-white/90 rounded-full border border-[#1a1a1a] text-xs font-bold text-[#1a1a1a] shadow-[2px_2px_0px_#1a1a1a]">
                    A Student
                  </div>
                  <p className="text-[11px] font-medium text-[#1a1a1a] mt-2 max-w-[180px]">
                    Continuous learner exploring machine learning, systems & web architectures.
                  </p>
                </div>
                <div className="pt-3 text-center">
                  <p className="font-handwriting text-2xl font-bold text-[var(--text)]">
                    Curious Mind
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
