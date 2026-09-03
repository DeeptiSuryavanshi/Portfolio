import React from 'react';
import { GraduationCap, Calendar, MapPin, BookOpen, Award, CheckCircle2 } from 'lucide-react';
import { RESUME_DATA } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div className="text-center sm:text-left mb-12">
        <h2 className="section-title">Education</h2>
        <p className="section-sub">My academic journey so far</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Main University Card */}
        <div className="lg:col-span-8">
          <div className="window-card neo-lavender p-6 sm:p-8">
            <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-white border-2 border-[#1a1a1a] shadow-[2px_2px_0px_#1a1a1a] flex items-center justify-center text-[#1a1a1a]">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1a1a1a]">
                    {RESUME_DATA.education.degree}
                  </h3>
                  <p className="text-sm font-semibold text-[#1a1a1a]/80 mt-0.5">
                    {RESUME_DATA.education.institution}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 border border-[#1a1a1a] text-xs font-mono font-bold text-[#1a1a1a] shadow-[2px_2px_0px_#1a1a1a]">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{RESUME_DATA.education.period}</span>
                </span>
              </div>
            </div>

            {/* Coursework & Focus */}
            <div className="mt-6 pt-6 border-t-2 border-[#1a1a1a]/20 space-y-4">
              <div>
                <p className="text-xs uppercase tracking-wider font-mono font-bold text-[#1a1a1a] mb-2 flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4" />
                  <span>Key Coursework & Domains:</span>
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Data Structures & Algorithms',
                    'Object-Oriented Programming',
                    'Database Management Systems',
                    'Operating Systems',
                    'Computer Networks',
                    'Distributed Computing',
                    'Machine Learning Fundamentals',
                    'Software Engineering Principles'
                  ].map((course, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full bg-white/80 border border-[#1a1a1a] text-xs font-semibold text-[#1a1a1a] shadow-[1.5px_1.5px_0px_#1a1a1a]"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Academic Highlights & Metrics Sidebar */}
        <div className="lg:col-span-4 space-y-6">
          <div className="window-card neo-gold p-6">
            <h4 className="font-serif text-lg font-bold text-[#1a1a1a] mb-4 flex items-center gap-2">
              <Award className="w-5 h-5" />
              <span>Academic Highlights</span>
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-[#1a1a1a]">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#1a1a1a] shrink-0 mt-0.5" />
                <span>Consistently high academic standing in core computer science curriculum.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#1a1a1a] shrink-0 mt-0.5" />
                <span>Active participant in university technical coding hackathons & workshops.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#1a1a1a] shrink-0 mt-0.5" />
                <span>Hands-on lab simulations and capstone projects in distributed computing and AI.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
