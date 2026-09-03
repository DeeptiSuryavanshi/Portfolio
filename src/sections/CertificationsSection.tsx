import React, { useState } from 'react';
import { Award, ArrowUpRight, CheckCircle2, ShieldCheck, Sparkles, Briefcase, Terminal, Layers, X, ExternalLink } from 'lucide-react';
import { CERTIFICATIONS_DATA } from '../data/certifications';

const CARD_COLORS = ['neo-lavender', 'neo-pink', 'neo-mint', 'neo-gold'];

export const CertificationsSection: React.FC = () => {
  const [activeCredentialModal, setActiveCredentialModal] = useState<typeof CERTIFICATIONS_DATA[0] | null>(null);

  const getCertIcon = (icon: string) => {
    switch (icon) {
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-[#1a1a1a]" />;
      case 'Briefcase': return <Briefcase className="w-6 h-6 text-[#1a1a1a]" />;
      case 'Terminal': return <Terminal className="w-6 h-6 text-[#1a1a1a]" />;
      default: return <Layers className="w-6 h-6 text-[#1a1a1a]" />;
    }
  };

  return (
    <section id="certifications" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div className="text-center sm:text-left mb-12">
        <h2 className="section-title">Certifications</h2>
        <p className="section-sub">Professional training, credentials, and courses completed</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {CERTIFICATIONS_DATA.map((cert, idx) => {
          const colorClass = CARD_COLORS[idx % CARD_COLORS.length];

          return (
            <div
              key={cert.id}
              className={`window-card ${colorClass} p-6 sm:p-8 flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-white border-2 border-[#1a1a1a] shadow-[2px_2px_0px_#1a1a1a] flex items-center justify-center shrink-0">
                      {getCertIcon(cert.icon)}
                    </div>
                    <div>
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1a1a1a] leading-tight">
                        {cert.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-bold text-[#1a1a1a]/70 mt-1">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>

                  <span className="px-2.5 py-1 rounded-full bg-white/90 border border-[#1a1a1a] text-xs font-mono font-bold text-[#1a1a1a] shadow-[1.5px_1.5px_0px_#1a1a1a] shrink-0">
                    {cert.year}
                  </span>
                </div>

                {/* Skills Learned */}
                <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t-2 border-[#1a1a1a]/15">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-0.5 rounded-full bg-white/80 border border-[#1a1a1a] text-xs font-mono font-bold text-[#1a1a1a]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* View Certificate Button */}
              <div className="mt-6 pt-4 border-t-2 border-[#1a1a1a]/15 flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-[#1a1a1a] flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#1a1a1a]" />
                  <span>Verified Credential</span>
                </span>

                <button
                  onClick={() => setActiveCredentialModal(cert)}
                  className="px-3.5 py-1.5 rounded-full bg-white border-2 border-[#1a1a1a] text-xs font-bold text-[#1a1a1a] shadow-[2px_2px_0px_#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-all cursor-pointer flex items-center gap-1.5"
                >
                  <span>View Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Credential Details Modal */}
      {activeCredentialModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in">
          <div className="window-card neo-white max-w-lg w-full p-6 sm:p-8 relative">
            <button
              onClick={() => setActiveCredentialModal(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white border-2 border-[#1a1a1a] shadow-[2px_2px_0px_#1a1a1a] flex items-center justify-center text-[#1a1a1a] hover:bg-[var(--pink-light)] cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-[var(--pink-light)] border-2 border-[#1a1a1a] shadow-[2px_2px_0px_#1a1a1a] flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-[#1a1a1a]" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold uppercase text-[var(--pink-dark)]">
                  Verified Credential
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#1a1a1a]">
                  {activeCredentialModal.title}
                </h3>
              </div>
            </div>

            <div className="space-y-3 py-4 border-y-2 border-[#1a1a1a]/15 text-sm text-[#1a1a1a]">
              <div className="flex justify-between">
                <span className="font-mono text-xs font-bold text-[#1a1a1a]/70">Issuer:</span>
                <span className="font-bold">{activeCredentialModal.issuer}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-mono text-xs font-bold text-[#1a1a1a]/70">Issued Year:</span>
                <span className="font-bold font-mono">{activeCredentialModal.year}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-mono text-xs font-bold text-[#1a1a1a]/70">Credential ID:</span>
                <span className="font-mono font-bold">{activeCredentialModal.credentialId}</span>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-xs font-mono font-bold text-[#1a1a1a] mb-2 uppercase">
                Skills Validated:
              </p>
              <div className="flex flex-wrap gap-2">
                {activeCredentialModal.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full bg-[var(--lavender)] border border-[#1a1a1a] text-xs font-bold text-[#1a1a1a]"
                  >
                    ✓ {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t-2 border-[#1a1a1a]/15 flex justify-end">
              <button
                onClick={() => setActiveCredentialModal(null)}
                className="px-5 py-2 rounded-full bg-[#1a1a1a] text-white text-xs font-bold shadow-[2px_2px_0px_rgba(231,156,194,0.8)] cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
