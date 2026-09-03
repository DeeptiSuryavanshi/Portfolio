import React, { useState, useEffect, useRef } from 'react';
import { 
  Search, 
  Terminal, 
  FileDown, 
  Mail, 
  Github, 
  Linkedin, 
  ArrowRight, 
  Sparkles,
  Layers,
  Award,
  Code2,
  FolderGit2,
  UserCheck
} from 'lucide-react';
import { useToast } from '../context/ToastContext';
import { PERSONAL_INFO } from '../data/portfolioData';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenTerminal: () => void;
  onOpenHireMe: () => void;
  onDownloadResume: () => void;
}

interface CommandOption {
  id: string;
  title: string;
  category: 'Navigation' | 'Actions' | 'Social';
  icon: React.ComponentType<{ className?: string }>;
  action: () => void;
  shortcut?: string;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onOpenTerminal,
  onOpenHireMe,
  onDownloadResume,
}) => {
  const { showToast } = useToast();
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const jumpTo = (sectionId: string) => {
    onClose();
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    showToast('Email copied: ' + PERSONAL_INFO.email, 'success');
    onClose();
  };

  const commands: CommandOption[] = [
    // Navigation
    { id: 'nav-about', title: 'Go to About & Bio', category: 'Navigation', icon: UserCheck, action: () => jumpTo('about') },
    { id: 'nav-edu', title: 'Go to Education', category: 'Navigation', icon: Code2, action: () => jumpTo('education') },
    { id: 'nav-proj', title: 'Go to Selected Projects', category: 'Navigation', icon: FolderGit2, action: () => jumpTo('projects') },
    { id: 'nav-exp', title: 'Go to Experience & Internships', category: 'Navigation', icon: Layers, action: () => jumpTo('experience') },
    { id: 'nav-skills', title: 'Go to Technical Skills', category: 'Navigation', icon: Sparkles, action: () => jumpTo('skills') },
    { id: 'nav-ach', title: 'Go to Achievements', category: 'Navigation', icon: Award, action: () => jumpTo('achievements') },
    { id: 'nav-cert', title: 'Go to Certifications', category: 'Navigation', icon: Award, action: () => jumpTo('certifications') },
    { id: 'nav-sticky', title: 'Go to Virtual Sticky Note Board', category: 'Navigation', icon: Sparkles, action: () => jumpTo('sticky-note') },

    // Actions
    {
      id: 'act-download-res',
      title: 'Download Official Resume (PDF)',
      category: 'Actions',
      icon: FileDown,
      action: () => {
        onClose();
        onDownloadResume();
      },
    },
    {
      id: 'act-open-term',
      title: 'Launch Interactive Developer Terminal',
      category: 'Actions',
      icon: Terminal,
      shortcut: '`',
      action: () => {
        onClose();
        onOpenTerminal();
      },
    },
    {
      id: 'act-open-hire',
      title: 'Discuss an Opportunity / Hire Deepti',
      category: 'Actions',
      icon: Mail,
      action: () => {
        onClose();
        onOpenHireMe();
      },
    },
    {
      id: 'act-copy-mail',
      title: `Copy Email (${PERSONAL_INFO.email})`,
      category: 'Actions',
      icon: Mail,
      action: copyEmail,
    },

    // Social
    {
      id: 'soc-github',
      title: 'Open GitHub Profile',
      category: 'Social',
      icon: Github,
      action: () => {
        window.open(PERSONAL_INFO.github, '_blank');
        onClose();
      },
    },
    {
      id: 'soc-linkedin',
      title: 'Open LinkedIn Profile',
      category: 'Social',
      icon: Linkedin,
      action: () => {
        window.open(PERSONAL_INFO.linkedin, '_blank');
        onClose();
      },
    },
  ];

  const filteredCommands = commands.filter((cmd) =>
    cmd.title.toLowerCase().includes(query.toLowerCase()) ||
    cmd.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % (filteredCommands.length || 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % (filteredCommands.length || 1));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredCommands[selectedIndex]) {
          filteredCommands[selectedIndex].action();
        }
      } else if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredCommands, selectedIndex, onClose]);

  if (!isOpen) return null;

  return (
    <div
      id="command-palette-backdrop"
      onClick={onClose}
      className="fixed inset-0 z-50 bg-[#171717]/60 backdrop-blur-xs flex items-start justify-center pt-[14vh] px-4"
    >
      <div
        id="command-palette-modal"
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-xl bg-white rounded-3xl border border-[#E7E4DE] shadow-editorial overflow-hidden animate-in fade-in zoom-in-95 duration-150"
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-[#E7E4DE]">
          <Search className="w-4 h-4 text-[#626262]" />
          <input
            ref={inputRef}
            id="command-palette-input"
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Type a command or jump to section..."
            className="flex-1 bg-transparent text-sm text-[#171717] placeholder:text-[#626262] outline-hidden"
          />
          <kbd className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-mono text-[#626262] bg-[#FAF9F6] rounded border border-[#E7E4DE]">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2">
          {filteredCommands.length === 0 ? (
            <div className="py-8 text-center text-xs text-[#626262] font-mono">
              No matching commands found for "{query}"
            </div>
          ) : (
            filteredCommands.map((cmd, idx) => {
              const Icon = cmd.icon;
              const isSelected = idx === selectedIndex;
              return (
                <button
                  key={cmd.id}
                  id={`cmd-item-${cmd.id}`}
                  onClick={cmd.action}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-left text-xs transition-colors cursor-pointer ${
                    isSelected
                      ? 'bg-[#F3F1EC] text-[#171717]'
                      : 'text-[#626262] hover:bg-[#FAF9F6]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-1.5 rounded-lg ${
                        isSelected
                          ? 'bg-[#6D5DFB] text-white'
                          : 'bg-[#FAF9F6] text-[#626262] border border-[#E7E4DE]'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-medium text-sm text-[#171717]">{cmd.title}</span>
                      <span className="block text-[10px] text-[#626262] uppercase tracking-wider font-mono">
                        {cmd.category}
                      </span>
                    </div>
                  </div>
                  {cmd.shortcut ? (
                    <span className="font-mono text-xs px-2 py-0.5 rounded bg-[#FAF9F6] text-[#626262] border border-[#E7E4DE]">
                      {cmd.shortcut}
                    </span>
                  ) : (
                    <ArrowRight
                      className={`w-3.5 h-3.5 text-[#6D5DFB] transition-transform ${
                        isSelected ? 'translate-x-1 opacity-100' : 'opacity-0'
                      }`}
                    />
                  )}
                </button>
              );
            })
          )}
        </div>

        {/* Footer info */}
        <div className="px-5 py-2.5 bg-[#FAF9F6] border-t border-[#E7E4DE] flex items-center justify-between text-[11px] text-[#626262] font-mono">
          <span>Navigate: ↑ ↓</span>
          <span>Select: ↵</span>
          <span>Close: ESC</span>
        </div>
      </div>
    </div>
  );
};
