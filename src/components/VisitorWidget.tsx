import React, { useState, useEffect } from 'react';
import { Clock, Eye, Music2, Volume2, VolumeX, ChevronDown, ChevronUp } from 'lucide-react';

export const VisitorWidget: React.FC = () => {
  const [currentTime, setCurrentTime] = useState('');
  const [visitorCount, setVisitorCount] = useState(1284);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    // Persistent visitor increment
    const stored = localStorage.getItem('deepti_portfolio_visitor_count');
    if (stored) {
      const parsed = parseInt(stored, 10);
      setVisitorCount(parsed + 1);
      localStorage.setItem('deepti_portfolio_visitor_count', (parsed + 1).toString());
    } else {
      localStorage.setItem('deepti_portfolio_visitor_count', '1285');
    }

    const updateClock = () => {
      const istTime = new Date().toLocaleTimeString('en-US', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      });
      setCurrentTime(istTime);
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  // Web Audio synthetic ambient lofi tone generator when "Now Playing" is active
  useEffect(() => {
    if (!isPlayingMusic) return;

    let audioCtx: AudioContext | null = null;
    let osc1: OscillatorNode | null = null;
    let osc2: OscillatorNode | null = null;
    let gainNode: GainNode | null = null;

    try {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      audioCtx = new AudioContextClass();
      gainNode = audioCtx.createGain();
      gainNode.gain.setValueAtTime(0.04, audioCtx.currentTime);

      osc1 = audioCtx.createOscillator();
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(220, audioCtx.currentTime); // A3 note

      osc2 = audioCtx.createOscillator();
      osc2.type = 'triangle';
      osc2.frequency.setValueAtTime(329.63, audioCtx.currentTime); // E4 note

      osc1.connect(gainNode);
      osc2.connect(gainNode);
      gainNode.connect(audioCtx.destination);

      osc1.start();
      osc2.start();
    } catch {
      // Audio autoplay restrictions or unsupported
    }

    return () => {
      try {
        osc1?.stop();
        osc2?.stop();
        audioCtx?.close();
      } catch {
        // cleanup
      }
    };
  }, [isPlayingMusic]);

  return (
    <div
      id="visitor-spotify-widget"
      className="fixed bottom-5 left-5 z-30 flex flex-col gap-1.5 transition-all duration-300"
    >
      <div className="glass-panel p-2.5 sm:p-3 rounded-2xl shadow-xl max-w-[280px] w-full text-xs font-mono select-none">
        {/* Header toggler */}
        <div className="flex items-center justify-between gap-2 pb-1.5 border-b border-slate-700/40 text-slate-400">
          <div className="flex items-center gap-1.5 text-[11px] text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="font-sans font-semibold">Live System Status</span>
          </div>
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-0.5 text-slate-400 hover:text-white rounded cursor-pointer"
            title={isCollapsed ? 'Expand Widget' : 'Collapse Widget'}
          >
            {isCollapsed ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
        </div>

        {!isCollapsed && (
          <div className="pt-2 space-y-2 text-slate-300">
            {/* Clock */}
            <div className="flex items-center justify-between text-[11px]">
              <span className="flex items-center gap-1 text-slate-400">
                <Clock className="w-3.5 h-3.5 text-sky-400" />
                <span>India (IST):</span>
              </span>
              <span className="text-white font-semibold">{currentTime || 'Loading...'}</span>
            </div>

            {/* Visitor Counter */}
            <div className="flex items-center justify-between text-[11px]">
              <span className="flex items-center gap-1 text-slate-400">
                <Eye className="w-3.5 h-3.5 text-purple-400" />
                <span>Total Visitors:</span>
              </span>
              <span className="text-emerald-400 font-bold tracking-wider">
                {visitorCount.toLocaleString()}
              </span>
            </div>

            {/* Spotify / Audio Player Placeholder */}
            <div className="pt-1.5 border-t border-slate-700/40">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 overflow-hidden">
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <Music2 className="w-3.5 h-3.5" />
                  </div>
                  <div className="truncate">
                    <p className="text-[11px] font-sans font-medium text-white truncate">
                      Lofi Coding Beats
                    </p>
                    <p className="text-[9px] text-slate-400 truncate">Deepti's Focus Session</p>
                  </div>
                </div>

                <button
                  id="toggle-audio-player-btn"
                  onClick={() => setIsPlayingMusic(!isPlayingMusic)}
                  className={`p-1.5 rounded-lg border transition-all cursor-pointer ${
                    isPlayingMusic
                      ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40'
                      : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-white'
                  }`}
                  title={isPlayingMusic ? 'Mute ambient lofi' : 'Play ambient lofi tone'}
                >
                  {isPlayingMusic ? (
                    <Volume2 className="w-3.5 h-3.5 animate-pulse" />
                  ) : (
                    <VolumeX className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {/* Animated Equalizer bars when playing */}
              {isPlayingMusic && (
                <div className="flex items-end gap-1 h-3 mt-2 px-1">
                  <div className="w-1 bg-emerald-400 rounded-full animate-bounce h-2" />
                  <div className="w-1 bg-sky-400 rounded-full animate-pulse h-3" />
                  <div className="w-1 bg-purple-400 rounded-full animate-bounce h-1.5" />
                  <div className="w-1 bg-emerald-400 rounded-full animate-pulse h-2.5" />
                  <span className="text-[9px] text-emerald-400/90 font-mono ml-1">ambient audio on</span>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
