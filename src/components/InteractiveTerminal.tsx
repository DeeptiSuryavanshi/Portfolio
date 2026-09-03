import React, { useState, useEffect, useRef } from 'react';
import { Terminal, X, Minus, Maximize2, CornerDownLeft } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { FEATURED_PROJECTS } from '../data/projects';
import { SKILLS_DATA } from '../data/skills';
import { EXPERIENCES_DATA } from '../data/experience';

interface TerminalProps {
  isOpen: boolean;
  onClose: () => void;
  onDownloadResume?: () => void;
}

interface CommandHistoryItem {
  id: string;
  command: string;
  output: React.ReactNode;
}

const AVAILABLE_COMMANDS = [
  'help',
  'about',
  'skills',
  'projects',
  'experience',
  'contact',
  'clear',
];

export const InteractiveTerminal: React.FC<TerminalProps> = ({
  isOpen,
  onClose,
}) => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<CommandHistoryItem[]>([
    {
      id: 'init-1',
      command: 'welcome',
      output: (
        <div className="space-y-1 text-[#626262]">
          <p className="text-[#6D5DFB] font-bold">
            ⚡ Deepti Suryavanshi Interactive Portfolio Terminal
          </p>
          <p className="text-xs">
            Type <span className="text-[#171717] font-semibold font-mono">help</span> to view commands, or press <span className="text-[#6D5DFB] font-mono">Tab</span> for autocomplete.
          </p>
        </div>
      ),
    },
  ]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [pastCommands, setPastCommands] = useState<string[]>([]);

  const inputRef = useRef<HTMLInputElement>(null);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    const args = trimmed.split(' ');
    const primary = args[0];

    setPastCommands((prev) => [...prev, cmd]);
    setHistoryIndex(-1);

    const itemId = Math.random().toString(36).substring(2, 9);
    let output: React.ReactNode = null;

    switch (primary) {
      case 'help':
        output = (
          <div className="space-y-1.5 text-xs text-[#626262]">
            <p className="text-[#171717] font-bold font-mono">Available Commands:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 font-mono text-[11px]">
              <div><span className="text-[#6D5DFB] font-semibold">about</span> - Background & engineering bio</div>
              <div><span className="text-[#6D5DFB] font-semibold">skills</span> - Verified technical competencies</div>
              <div><span className="text-[#6D5DFB] font-semibold">projects</span> - Selected featured projects</div>
              <div><span className="text-[#6D5DFB] font-semibold">experience</span> - Internship & milestones</div>
              <div><span className="text-[#6D5DFB] font-semibold">contact</span> - Direct contact channels</div>
              <div><span className="text-[#6D5DFB] font-semibold">clear</span> - Clear terminal window</div>
            </div>
          </div>
        );
        break;

      case 'about':
        output = (
          <div className="space-y-1.5 text-xs text-[#171717]">
            <p className="font-bold">{PERSONAL_INFO.name} — {PERSONAL_INFO.title}</p>
            <p className="text-[#626262] leading-relaxed">{PERSONAL_INFO.bioParagraph1}</p>
            <p className="text-[#6D5DFB] font-mono text-[11px]">Exploring: {PERSONAL_INFO.currentlyExploring}</p>
          </div>
        );
        break;

      case 'skills':
        output = (
          <div className="space-y-2 text-xs">
            <p className="text-[#171717] font-bold font-mono">Core Competencies & Evidence:</p>
            <div className="space-y-1.5 font-mono text-[11px]">
              {SKILLS_DATA.slice(0, 7).map((sk) => (
                <div key={sk.name} className="flex items-start gap-2">
                  <span className="text-[#6D5DFB] font-semibold w-24 shrink-0">{sk.name}</span>
                  <span className="text-[#626262]">Used in: {sk.usedIn.slice(0, 2).join(', ')}</span>
                </div>
              ))}
            </div>
            <p className="text-[10px] text-[#626262] italic mt-1">+ All technologies available in the Skills explorer.</p>
          </div>
        );
        break;

      case 'projects':
        output = (
          <div className="space-y-2 text-xs">
            <p className="text-[#171717] font-bold font-mono">Featured Projects:</p>
            {FEATURED_PROJECTS.map((p) => (
              <div key={p.id} className="border-l-2 border-[#6D5DFB] pl-2.5 py-0.5 space-y-0.5 font-mono">
                <p className="text-[#171717] font-semibold">
                  {p.number || p.projectNumber}. {p.title} <span className="text-[#6D5DFB] text-[10px]">[{p.category}]</span>
                </p>
                <p className="text-[#626262] text-[11px]">{p.description}</p>
              </div>
            ))}
          </div>
        );
        break;

      case 'experience':
        output = (
          <div className="space-y-2 text-xs">
            <p className="text-[#171717] font-bold font-mono">Experience & Timeline:</p>
            {EXPERIENCES_DATA.map((exp) => (
              <div key={exp.id} className="border-l-2 border-[#E98A6A] pl-2.5 py-0.5">
                <p className="text-[#171717] font-medium">{exp.role} @ {exp.company}</p>
                <p className="text-[11px] text-[#626262]">{exp.period} • {exp.location}</p>
                <p className="text-[10px] text-[#626262] mt-0.5">{exp.description}</p>
              </div>
            ))}
          </div>
        );
        break;

      case 'contact':
        output = (
          <div className="space-y-1.5 text-xs text-[#171717] font-mono">
            <p className="font-bold text-[#4F9D69]">Direct Contact:</p>
            <p>Email: <a href={`mailto:${PERSONAL_INFO.email}`} className="text-[#6D5DFB] underline">{PERSONAL_INFO.email}</a></p>
            <p>GitHub: <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="text-[#6D5DFB] underline">{PERSONAL_INFO.github}</a></p>
            <p>LinkedIn: <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="text-[#6D5DFB] underline">{PERSONAL_INFO.linkedin}</a></p>
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        return;

      case '':
        output = null;
        break;

      default:
        output = (
          <p className="text-[#E98A6A] text-xs font-mono">
            command not found: {trimmed}. Type <span className="underline font-bold">help</span> to view supported commands.
          </p>
        );
        break;
    }

    setHistory((prev) => [...prev, { id: itemId, command: cmd, output }]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(inputVal);
      setInputVal('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (pastCommands.length > 0) {
        const nextIdx = historyIndex + 1;
        if (nextIdx < pastCommands.length) {
          setHistoryIndex(nextIdx);
          setInputVal(pastCommands[pastCommands.length - 1 - nextIdx]);
        }
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIdx = historyIndex - 1;
        setHistoryIndex(nextIdx);
        setInputVal(pastCommands[pastCommands.length - 1 - nextIdx]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInputVal('');
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const match = AVAILABLE_COMMANDS.find((cmd) => cmd.startsWith(inputVal.toLowerCase().trim()));
      if (match) {
        setInputVal(match);
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div
      id="terminal-modal-backdrop"
      onClick={onClose}
      className="fixed inset-0 z-50 bg-[#171717]/50 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6"
    >
      <div
        id="interactive-terminal-container"
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-2xl bg-white rounded-2xl border border-[#E7E4DE] shadow-editorial flex flex-col h-[460px] overflow-hidden"
      >
        {/* Terminal Header */}
        <div className="bg-[#FAF9F6] px-4 py-3 border-b border-[#E7E4DE] flex items-center justify-between select-none">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 mr-2">
              <button onClick={onClose} className="w-3 h-3 rounded-full bg-[#E98A6A] hover:opacity-80" />
              <div className="w-3 h-3 rounded-full bg-[#E7E4DE]" />
              <div className="w-3 h-3 rounded-full bg-[#4F9D69]" />
            </div>
            <span className="text-xs font-mono font-semibold text-[#171717]">
              $ deepti@portfolio:~
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-md text-[#626262] hover:text-[#171717] hover:bg-[#F3F1EC] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Command Log */}
        <div
          onClick={() => inputRef.current?.focus()}
          className="flex-1 p-4 overflow-y-auto font-mono text-xs space-y-3 cursor-text bg-white"
        >
          {history.map((item) => (
            <div key={item.id} className="space-y-1">
              <div className="flex items-center gap-2 text-[#626262]">
                <span className="text-[#6D5DFB]">$</span>
                <span className="text-[#171717] font-semibold">{item.command}</span>
              </div>
              {item.output && <div className="pl-4 py-0.5">{item.output}</div>}
            </div>
          ))}

          {/* Active Prompt Line */}
          <div className="flex items-center gap-2 text-xs pt-1">
            <span className="text-[#6D5DFB]">$</span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent text-[#171717] outline-hidden border-none font-mono"
              placeholder="type help or command..."
            />
          </div>
          <div ref={terminalEndRef} />
        </div>
      </div>
    </div>
  );
};
