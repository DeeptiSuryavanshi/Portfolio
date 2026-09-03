import React, { useState } from 'react';
import { FileDown, Mail, Eye, CheckCircle2, ArrowDown, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ResumeSectionProps {
  onDownloadResume: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ onDownloadResume }) => {
  const [showQuickSummary, setShowQuickSummary] = useState(false);

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="resume"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#E7E4DE]"
    >
      <div className="bg-[#FAF9F6] rounded-3xl border border-[#E7E4DE] p-8 sm:p-14 text-center max-w-4xl mx-auto shadow-editorial relative overflow-hidden">
        {/* Subtle decorative background glow */}
        <div className="absolute inset-0 -m-10 bg-gradient-to-b from-[#DCD7FF]/30 to-transparent pointer-events-none rounded-3xl" />

        <div className="relative z-10 space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#E7E4DE] text-[#6D5DFB] text-xs font-mono font-semibold uppercase tracking-wider shadow-xs">
            <span>✦ OPPORTUNITIES & COLLABORATION</span>
          </div>

          {/* Heading */}
          <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#171717]">
            LET'S BUILD SOMETHING USEFUL.
          </h2>

          {/* Text */}
          <p className="text-[#626262] text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Interested in working together or discussing an opportunity?
          </p>

          {/* Buttons: Download Resume & Contact Me */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              id="resume-section-download-btn"
              onClick={onDownloadResume}
              className="px-8 py-3.5 rounded-full font-semibold text-sm bg-[#171717] text-white hover:bg-[#6D5DFB] transition-colors flex items-center gap-2 shadow-xs cursor-pointer tracking-tight"
            >
              <span>Download Resume</span>
              <ArrowDown className="w-4 h-4" />
            </button>

            <button
              id="resume-section-contact-btn"
              onClick={scrollToContact}
              className="px-8 py-3.5 rounded-full font-semibold text-sm bg-white text-[#171717] border border-[#E7E4DE] hover:border-[#6D5DFB] hover:text-[#6D5DFB] transition-colors flex items-center gap-2 shadow-xs cursor-pointer tracking-tight"
            >
              <span>Contact Me</span>
              <Mail className="w-4 h-4" />
            </button>
          </div>

          {/* Recruiter Quick Snapshot toggle */}
          <div className="pt-6">
            <button
              onClick={() => setShowQuickSummary(!showQuickSummary)}
              className="text-xs font-mono text-[#626262] hover:text-[#6D5DFB] underline underline-offset-4 cursor-pointer"
            >
              {showQuickSummary ? 'Hide ATS Executive Summary ▲' : 'View ATS Executive Summary ▼'}
            </button>

            {showQuickSummary && (
              <div className="mt-6 text-left bg-white p-6 sm:p-8 rounded-2xl border border-[#E7E4DE] shadow-xs space-y-4 animate-in fade-in duration-200">
                <div className="flex items-center justify-between border-b border-[#E7E4DE] pb-3">
                  <div>
                    <h3 className="font-heading font-bold text-lg text-[#171717]">{PERSONAL_INFO.name}</h3>
                    <p className="text-xs text-[#626262]">{PERSONAL_INFO.title} • {PERSONAL_INFO.location}</p>
                  </div>
                  <span className="text-xs font-mono text-[#4F9D69] font-medium">● ATS Ready</span>
                </div>

                <div className="space-y-2 text-xs text-[#626262] leading-relaxed">
                  <p className="font-semibold text-[#171717]">Core Qualifications:</p>
                  <p>• Machine Learning & Python Intern at TESRECO: Designed test-driven backends and ML feature engineering workflows.</p>
                  <p>• Google GenAI Academy Finalist: Developed end-to-end multi-modal streaming web applications using Gemini models.</p>
                  <p>• Distributed Systems Capstone (1st Place): Engineered IoT Fog Computing adaptive load balancers in Java, cutting latency by 34.2%.</p>
                  <p>• Technical Stack: Python, JavaScript, Java, C++, React, FastAPI, Node.js, Firebase, MongoDB, Git.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
