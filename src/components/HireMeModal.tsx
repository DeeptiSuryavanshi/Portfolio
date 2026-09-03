import React, { useState } from 'react';
import { X, Send, CheckCircle2, Mail, Briefcase, Building2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useToast } from '../context/ToastContext';

interface HireMeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HireMeModal: React.FC<HireMeModalProps> = ({ isOpen, onClose }) => {
  const { showToast } = useToast();
  const [roleType, setRoleType] = useState('Full-Time Software Engineer');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [note, setNote] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      showToast('Please provide your name and email.', 'error');
      return;
    }

    setSubmitted(true);
    confetti({
      particleCount: 60,
      spread: 60,
      origin: { y: 0.6 },
    });
    showToast('Inquiry sent successfully ✦', 'success');

    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <div
      id="hire-me-modal-backdrop"
      onClick={onClose}
      className="fixed inset-0 z-50 bg-[#171717]/60 backdrop-blur-xs flex items-center justify-center p-4"
    >
      <div
        id="hire-me-modal"
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-lg bg-white rounded-3xl border border-[#E7E4DE] shadow-editorial p-6 sm:p-8 relative"
      >
        <div className="flex items-center justify-between mb-6 border-b border-[#E7E4DE] pb-4">
          <div>
            <span className="text-xs font-mono text-[#6D5DFB] uppercase font-semibold">✦ Recruiter Connect</span>
            <h3 className="font-heading font-bold text-xl text-[#171717]">Discuss an Opportunity</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-[#F3F1EC] text-[#626262] cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {submitted ? (
          <div className="py-12 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-[#4F9D69]/15 text-[#4F9D69] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h4 className="font-heading font-bold text-lg text-[#171717]">Inquiry Sent</h4>
            <p className="text-xs text-[#626262]">Thank you! Deepti will review and get back to you shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            <div className="space-y-1.5">
              <label className="font-mono uppercase text-[#171717] font-semibold">Role Consideration</label>
              <select
                value={roleType}
                onChange={(e) => setRoleType(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF9F6] border border-[#E7E4DE] text-[#171717] focus:outline-hidden focus:border-[#6D5DFB]"
              >
                <option value="Full-Time Software Engineer">Full-Time Software Engineer</option>
                <option value="Frontend / Full Stack Developer">Frontend / Full Stack Developer</option>
                <option value="Python / AI Application Developer">Python / AI Application Developer</option>
                <option value="Contract / Project Collaboration">Contract / Project Collaboration</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="font-mono uppercase text-[#171717] font-semibold">Your Name *</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Recruiter / Founder"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF9F6] border border-[#E7E4DE] text-[#171717] focus:outline-hidden focus:border-[#6D5DFB]"
                />
              </div>

              <div className="space-y-1">
                <label className="font-mono uppercase text-[#171717] font-semibold">Your Email *</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF9F6] border border-[#E7E4DE] text-[#171717] focus:outline-hidden focus:border-[#6D5DFB]"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="font-mono uppercase text-[#171717] font-semibold">Company / Organization</label>
              <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Tech Company / Startup"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF9F6] border border-[#E7E4DE] text-[#171717] focus:outline-hidden focus:border-[#6D5DFB]"
              />
            </div>

            <div className="space-y-1">
              <label className="font-mono uppercase text-[#171717] font-semibold">Quick Note / Role Link</label>
              <textarea
                rows={3}
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Let Deepti know about your team or project..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF9F6] border border-[#E7E4DE] text-[#171717] focus:outline-hidden focus:border-[#6D5DFB] resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-full bg-[#171717] text-white font-semibold hover:bg-[#6D5DFB] transition-colors cursor-pointer flex items-center justify-center gap-2 mt-2"
            >
              <span>Submit Inquiry</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
