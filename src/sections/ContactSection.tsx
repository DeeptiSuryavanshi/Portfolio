import React, { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  Github, 
  Linkedin, 
  Send, 
  CheckCircle2, 
  Copy, 
  Check, 
  Sparkles,
  AlertCircle,
  Loader2
} from 'lucide-react';
import confetti from 'canvas-confetti';
import emailjs from '@emailjs/browser';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useToast } from '../context/ToastContext';

export const ContactSection: React.FC = () => {
  const { showToast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleCopyEmail = () => {
    try {
      if (navigator?.clipboard?.writeText) {
        navigator.clipboard.writeText(PERSONAL_INFO.email).catch(() => {});
      }
    } catch {
      // safe fallback
    }
    setCopiedEmail(true);
    showToast('Email copied to clipboard', 'success');
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    if (statusMessage) setStatusMessage(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatusMessage({ type: 'error', text: 'Something went wrong. Please try again.' });
      return;
    }

    setIsSubmitting(true);
    setStatusMessage(null);

    const env = (import.meta as unknown as { env?: Record<string, string | undefined> }).env || {};
    const serviceId = env.VITE_EMAILJS_SERVICE_ID;
    const templateId = env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = env.VITE_EMAILJS_PUBLIC_KEY;

    try {
      if (serviceId && templateId && publicKey) {
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject || 'Portfolio Inquiry',
            message: formData.message,
            to_name: PERSONAL_INFO.name,
          },
          publicKey
        );
      } else {
        // Fallback simulation for local preview without keys
        await new Promise((resolve) => setTimeout(resolve, 800));
      }

      setStatusMessage({ type: 'success', text: 'Message sent successfully ✦' });
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 },
      });
      showToast('Message sent successfully ✦', 'success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err: unknown) {
      setStatusMessage({ type: 'error', text: 'Something went wrong. Please try again.' });
      showToast('Something went wrong. Please try again.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#E7E4DE]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Direct contact info */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-widest text-[#6D5DFB] font-mono font-semibold">
              ✦ INQUIRIES & CONNECT
            </p>
            <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-[#171717]">
              LET'S TALK.
            </h2>
            <p className="text-[#626262] text-sm sm:text-base leading-relaxed">
              Have an open software engineering role, collaborative project, or technical question? Feel free to reach out directly.
            </p>
          </div>

          <div className="space-y-4">
            {/* Email Card with Copy button */}
            <div className="bg-white p-5 rounded-2xl border border-[#E7E4DE] shadow-xs flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FAF9F6] border border-[#E7E4DE] flex items-center justify-center text-[#6D5DFB]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-[#626262]">Direct Email</p>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="font-mono text-sm font-semibold text-[#171717] hover:text-[#6D5DFB] transition-colors"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                className="p-2 rounded-xl bg-[#FAF9F6] hover:bg-[#F3F1EC] text-[#626262] hover:text-[#171717] border border-[#E7E4DE] transition-colors cursor-pointer"
                title="Copy Email"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-[#4F9D69]" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location */}
            <div className="bg-white p-5 rounded-2xl border border-[#E7E4DE] shadow-xs flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#FAF9F6] border border-[#E7E4DE] flex items-center justify-center text-[#E98A6A]">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-[#626262]">Location</p>
                <p className="text-sm font-semibold text-[#171717]">{PERSONAL_INFO.location} (Open to Remote / Relocation)</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-full bg-white border border-[#E7E4DE] text-xs font-semibold text-[#171717] hover:border-[#6D5DFB] hover:text-[#6D5DFB] transition-colors flex items-center gap-2 shadow-xs cursor-pointer"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Profile</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-full bg-white border border-[#E7E4DE] text-xs font-semibold text-[#171717] hover:border-[#6D5DFB] hover:text-[#6D5DFB] transition-colors flex items-center gap-2 shadow-xs cursor-pointer"
              >
                <Linkedin className="w-4 h-4 text-[#0A66C2]" />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Editorial Contact Form */}
        <div className="lg:col-span-7 bg-white rounded-3xl border border-[#E7E4DE] p-6 sm:p-10 shadow-editorial">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Status alerts */}
            {statusMessage && (
              <div
                className={`p-4 rounded-xl text-xs font-mono font-medium flex items-center gap-2 ${
                  statusMessage.type === 'success'
                    ? 'bg-[#4F9D69]/15 text-[#4F9D69] border border-[#4F9D69]/30'
                    : 'bg-[#E98A6A]/15 text-[#E98A6A] border border-[#E98A6A]/30'
                }`}
              >
                {statusMessage.type === 'success' ? (
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                ) : (
                  <AlertCircle className="w-4 h-4 shrink-0" />
                )}
                <span>{statusMessage.text}</span>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Name */}
              <div className="space-y-1.5">
                <label htmlFor="contact-name" className="text-xs font-mono uppercase tracking-wider text-[#171717] font-semibold">
                  Name <span className="text-[#E98A6A]">*</span>
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-xl bg-[#FAF9F6] border border-[#E7E4DE] text-sm text-[#171717] placeholder:text-[#626262] focus:outline-hidden focus:border-[#6D5DFB] transition-colors"
                />
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label htmlFor="contact-email" className="text-xs font-mono uppercase tracking-wider text-[#171717] font-semibold">
                  Email <span className="text-[#E98A6A]">*</span>
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@domain.com"
                  className="w-full px-4 py-3 rounded-xl bg-[#FAF9F6] border border-[#E7E4DE] text-sm text-[#171717] placeholder:text-[#626262] focus:outline-hidden focus:border-[#6D5DFB] transition-colors"
                />
              </div>
            </div>

            {/* Subject */}
            <div className="space-y-1.5">
              <label htmlFor="contact-subject" className="text-xs font-mono uppercase tracking-wider text-[#171717] font-semibold">
                Subject
              </label>
              <input
                id="contact-subject"
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Job Opportunity / Project Collaboration / Inquiry"
                className="w-full px-4 py-3 rounded-xl bg-[#FAF9F6] border border-[#E7E4DE] text-sm text-[#171717] placeholder:text-[#626262] focus:outline-hidden focus:border-[#6D5DFB] transition-colors"
              />
            </div>

            {/* Message */}
            <div className="space-y-1.5">
              <label htmlFor="contact-message" className="text-xs font-mono uppercase tracking-wider text-[#171717] font-semibold">
                Message <span className="text-[#E98A6A]">*</span>
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Share project details, team requirements, or your query..."
                className="w-full px-4 py-3 rounded-xl bg-[#FAF9F6] border border-[#E7E4DE] text-sm text-[#171717] placeholder:text-[#626262] focus:outline-hidden focus:border-[#6D5DFB] transition-colors resize-none"
              />
            </div>

            {/* Send Message Button */}
            <button
              id="contact-send-btn"
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 rounded-full font-semibold text-sm bg-[#171717] text-white hover:bg-[#6D5DFB] transition-colors flex items-center justify-center gap-2 shadow-xs cursor-pointer tracking-tight disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Sending Message...</span>
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
