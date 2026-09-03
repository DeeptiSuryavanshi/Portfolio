import React, { useState, useEffect } from 'react';
import { Send, Pin, Sparkles, Check, Smile, RefreshCw, MessageSquare } from 'lucide-react';
import { useToast } from '../context/ToastContext';

interface StickyNoteItem {
  id: string;
  message: string;
  author: string;
  color: 'yellow' | 'pink' | 'mint' | 'lavender';
  date: string;
  rotation: number;
}

const DEFAULT_BOARD_NOTES: StickyNoteItem[] = [
  {
    id: 'note-1',
    message: 'Love the clean neo-brutalist pastel design! Great project on the GitHub PR reviewer! 🚀',
    author: 'Tech Recruiter',
    color: 'yellow',
    date: 'Yesterday',
    rotation: -2.5,
  },
  {
    id: 'note-2',
    message: 'Impressive work on the Fog Computing simulation dashboard. Keep building! 💻✨',
    author: 'Fellow Dev',
    color: 'pink',
    date: '3 days ago',
    rotation: 1.8,
  },
  {
    id: 'note-3',
    message: 'FeelMate looks so heartwarming and thoughtful. Best of luck in tech! 🌸',
    author: 'Priya S.',
    color: 'mint',
    date: 'May 2026',
    rotation: -1.2,
  },
];

const COLOR_MAP = {
  yellow: {
    bg: '#fff9c4',
    border: '#fbc02d',
    text: '#4a3f12',
  },
  pink: {
    bg: '#f8bbd0',
    border: '#ec407a',
    text: '#501e30',
  },
  mint: {
    bg: '#c8e6c9',
    border: '#66bb6a',
    text: '#1b4d21',
  },
  lavender: {
    bg: '#e1bee7',
    border: '#ab47bc',
    text: '#3d1746',
  },
};

export const StickyNoteSection: React.FC = () => {
  const { showToast } = useToast();
  const [message, setMessage] = useState('');
  const [author, setAuthor] = useState('');
  const [noteColor, setNoteColor] = useState<'yellow' | 'pink' | 'mint' | 'lavender'>('yellow');
  const [isSending, setIsSending] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isSent, setIsSent] = useState(false);
  const [boardNotes, setBoardNotes] = useState<StickyNoteItem[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('deepti_board_notes');
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch {
          return DEFAULT_BOARD_NOTES;
        }
      }
    }
    return DEFAULT_BOARD_NOTES;
  });

  const wordCount = message.trim() ? message.trim().split(/\s+/).length : 0;
  const isOverWordLimit = wordCount > 80;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    if (isOverWordLimit) {
      showToast('Please keep your message under 80 words!', 'error');
      return;
    }

    setIsSending(true);
    setProgress(0);

    // Vintage loading bar progress animation matching sindhusree reference
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsSending(false);
          setIsSent(true);

          // Create new sticky note on virtual board
          const newNote: StickyNoteItem = {
            id: `user-note-${Date.now()}`,
            message: message.trim(),
            author: author.trim() || 'Anonymous Visitor',
            color: noteColor,
            date: 'Just now',
            rotation: (Math.random() * 6 - 3), // slight tilt between -3 and +3 deg
          };

          setBoardNotes((current) => {
            const updated = [newNote, ...current];
            localStorage.setItem('deepti_board_notes', JSON.stringify(updated));
            return updated;
          });

          showToast('Your note has been pinned to the board! 📌', 'success');

          // Reset form after delay
          setTimeout(() => {
            setIsSent(false);
            setMessage('');
            setAuthor('');
          }, 3500);

          return 100;
        }
        return prev + 20;
      });
    }, 180);
  };

  const selectedTheme = COLOR_MAP[noteColor];

  return (
    <section id="sticky-note" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div className="text-center mb-12">
        <h2 className="section-title">Leave a Sticky Note</h2>
        <p className="section-sub">
          Write a quick note and stick it on my virtual board!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Side: Virtual Chalkboard with Live Real-time Sticky Note */}
        <div className="lg:col-span-6 flex justify-center">
          <div className="chalkboard-container">
            <div
              className="sticky-paper relative flex flex-col justify-between"
              style={{
                backgroundColor: selectedTheme.bg,
                color: selectedTheme.text,
                border: `2px solid ${selectedTheme.border}`,
              }}
            >
              {/* Note Content / Live Preview */}
              {!isSending && !isSent && (
                <>
                  <div>
                    <div className="flex items-center justify-between border-b border-black/10 pb-2 mb-3">
                      <span className="text-[11px] font-mono uppercase font-bold opacity-70">
                        Virtual Note
                      </span>
                      <span className="text-[11px] font-mono opacity-70">
                        {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                      </span>
                    </div>

                    <p className="font-handwriting text-2xl sm:text-3xl leading-relaxed whitespace-pre-wrap break-words min-h-[120px]">
                      {message.trim() || 'Start typing your note...'}
                    </p>
                  </div>

                  <div className="mt-4 pt-2 border-t border-black/10 text-right">
                    <p className="font-handwriting text-xl sm:text-2xl font-bold">
                      — {author.trim() || 'Guest'}
                    </p>
                  </div>
                </>
              )}

              {/* Vintage Loading Overlay */}
              {isSending && (
                <div className="flex-1 flex flex-col items-center justify-center text-center py-8">
                  <p className="font-mono text-xs font-bold uppercase tracking-widest mb-3">
                    SENDING NOTE...
                  </p>
                  <div className="w-full max-w-[200px] h-4 rounded-full border-2 border-[#1a1a1a] bg-white overflow-hidden p-0.5 shadow-[2px_2px_0px_#1a1a1a]">
                    <div
                      className="h-full rounded-full bg-[var(--pink)] transition-all duration-150"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <p className="font-mono text-xs font-bold mt-2">{progress}%</p>
                </div>
              )}

              {/* Sent Success Overlay */}
              {isSent && (
                <div className="flex-1 flex flex-col items-center justify-center text-center py-6 animate-in zoom-in-95">
                  <div className="text-5xl mb-2">☺</div>
                  <h4 className="font-serif text-2xl font-bold text-[#1a1a1a]">
                    Sent!
                  </h4>
                  <p className="font-handwriting text-xl font-bold text-[#1a1a1a]/80 mt-1">
                    Your note is stuck on my board!
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Side: Form / Sticky Composer Window Card */}
        <div className="lg:col-span-6 flex justify-center">
          <form
            onSubmit={handleSubmit}
            className="window-card neo-mint p-6 sm:p-8 w-full max-w-lg text-left"
          >
            {/* Form Title */}
            <div className="mb-4">
              <h3 className="font-serif text-2xl font-bold text-[#1a1a1a]">
                Stick a Message
              </h3>
              <p className="text-xs font-semibold text-[#1a1a1a]/70 mt-0.5">
                Leave your thoughts, feedback, or a friendly hello!
              </p>
            </div>

            {/* Note Color Picker */}
            <div className="mb-4">
              <label className="block text-xs font-mono font-bold uppercase text-[#1a1a1a] mb-1.5">
                Note Color:
              </label>
              <div className="flex items-center gap-2">
                {(['yellow', 'pink', 'mint', 'lavender'] as const).map((color) => (
                  <button
                    key={color}
                    type="button"
                    onClick={() => setNoteColor(color)}
                    className={`w-7 h-7 rounded-full border-2 border-[#1a1a1a] transition-transform cursor-pointer flex items-center justify-center ${
                      noteColor === color ? 'scale-125 shadow-[2px_2px_0px_#1a1a1a]' : 'hover:scale-110'
                    }`}
                    style={{ backgroundColor: COLOR_MAP[color].bg }}
                    aria-label={`Select ${color} note color`}
                  >
                    {noteColor === color && <Check className="w-3.5 h-3.5 text-[#1a1a1a]" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Message Textarea */}
            <div className="mb-4">
              <div className="flex items-center justify-between mb-1">
                <label
                  htmlFor="stickyMessage"
                  className="text-xs font-mono font-bold uppercase text-[#1a1a1a]"
                >
                  Your Message
                </label>
                <span
                  className={`text-[11px] font-mono font-bold ${
                    isOverWordLimit ? 'text-red-600' : 'text-[#1a1a1a]/70'
                  }`}
                >
                  {wordCount} / 80 words
                </span>
              </div>
              <textarea
                id="stickyMessage"
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write a brief note (max 80 words)..."
                required
                className="w-full px-3.5 py-2.5 rounded-xl bg-white/90 border-2 border-[#1a1a1a] shadow-[2px_2px_0px_#1a1a1a] text-sm text-[#1a1a1a] placeholder:text-[#1a1a1a]/40 focus:outline-none focus:bg-white transition-all font-medium"
              />
            </div>

            {/* Author Input */}
            <div className="mb-6">
              <label
                htmlFor="stickyAuthor"
                className="block text-xs font-mono font-bold uppercase text-[#1a1a1a] mb-1"
              >
                Your Name / Signature
              </label>
              <input
                id="stickyAuthor"
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="Anonymous / Recruiter / Friend"
                required
                className="w-full px-3.5 py-2 rounded-xl bg-white/90 border-2 border-[#1a1a1a] shadow-[2px_2px_0px_#1a1a1a] text-sm text-[#1a1a1a] placeholder:text-[#1a1a1a]/40 focus:outline-none focus:bg-white transition-all font-medium"
              />
            </div>

            {/* Submit Button with Pushpin Icon */}
            <button
              type="submit"
              disabled={isSending || isOverWordLimit}
              className="w-full py-3 rounded-full bg-[#1a1a1a] text-white text-sm font-bold shadow-[3px_3px_0px_var(--pink)] hover:bg-[var(--pink-dark)] transition-all cursor-pointer flex items-center justify-center gap-2 border-2 border-[#1a1a1a]"
            >
              <span className="text-base">📌</span>
              <span>Send Note</span>
            </button>
          </form>
        </div>
      </div>

      {/* Pinned Board Feed: Pinned Notes from Visitors */}
      {boardNotes.length > 0 && (
        <div className="mt-16 pt-12 border-t-2 border-[#1a1a1a]/15">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-xl">📌</span>
            <h3 className="font-serif text-2xl font-bold text-[var(--text)]">
              Pinned on the Board ({boardNotes.length})
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {boardNotes.map((note) => {
              const themeStyle = COLOR_MAP[note.color] || COLOR_MAP.yellow;
              return (
                <div
                  key={note.id}
                  className="rounded-xl p-5 border-2 border-[#1a1a1a] shadow-[4px_4px_0px_#1a1a1a] relative transition-transform hover:scale-105 hover:z-10 flex flex-col justify-between min-h-[160px]"
                  style={{
                    backgroundColor: themeStyle.bg,
                    color: themeStyle.text,
                    transform: `rotate(${note.rotation || 0}deg)`,
                  }}
                >
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-lg">
                    📌
                  </span>
                  <p className="font-handwriting text-2xl font-semibold leading-snug pt-2">
                    "{note.message}"
                  </p>
                  <div className="flex items-center justify-between text-xs font-mono font-bold mt-4 pt-2 border-t border-black/10">
                    <span>— {note.author}</span>
                    <span className="opacity-60 text-[10px]">{note.date}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
};
