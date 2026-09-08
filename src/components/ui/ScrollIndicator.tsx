import React from 'react';
import { usePortfolioStore, ZONE_ORDER } from '../../store/usePortfolioStore';
import { ChevronDown, ArrowUp, MousePointer } from 'lucide-react';

export const ScrollIndicator: React.FC = () => {
  const currentZone = usePortfolioStore((state) => state.currentZone);
  const nextZone = usePortfolioStore((state) => state.nextZone);
  const setZone = usePortfolioStore((state) => state.setZone);
  const is3DMode = usePortfolioStore((state) => state.is3DMode);
  const resumeModalOpen = usePortfolioStore((state) => state.resumeModalOpen);
  const contactModalOpen = usePortfolioStore((state) => state.contactModalOpen);
  const selectedProject = usePortfolioStore((state) => state.selectedProject);

  if (!is3DMode || resumeModalOpen || contactModalOpen || selectedProject !== null) {
    return null;
  }

  const currentIndex = ZONE_ORDER.indexOf(currentZone);
  const isLastZone = currentIndex === ZONE_ORDER.length - 1;

  const zoneNames: Record<string, string> = {
    hero: 'NEXUS',
    about: 'PROFILE',
    skills: 'SKILLS',
    projects: 'PROJECTS',
    experience: 'EXPERIENCE',
    contact: 'CONNECT',
  };

  const handleClick = () => {
    if (isLastZone) {
      setZone('hero');
    } else {
      nextZone(true);
    }
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 pointer-events-auto select-none">
      <button
        onClick={handleClick}
        className="group flex items-center gap-3 px-4 py-2 rounded-full bg-slate-950/70 hover:bg-slate-900/90 border border-slate-800/90 hover:border-cyan-500/50 backdrop-blur-xl shadow-2xl transition-all duration-300 cursor-pointer"
        aria-label={isLastZone ? 'Scroll back to top' : 'Scroll to next section'}
      >
        {/* Animated Mouse Icon */}
        <div className="relative w-4 h-6 rounded-full border border-cyan-400/60 flex items-start justify-center p-1 group-hover:border-cyan-300">
          <div className="w-1 h-1.5 bg-cyan-400 rounded-full animate-bounce" />
        </div>

        <div className="flex items-center gap-2 font-mono text-xs text-slate-300 group-hover:text-white">
          <span className="text-[10px] text-cyan-400 font-bold tracking-wider">
            0{currentIndex + 1}/06
          </span>
          <span className="hidden sm:inline text-slate-500">•</span>
          <span className="font-semibold tracking-wider">
            {isLastZone ? 'BACK TO TOP' : `SCROLL TO ${zoneNames[ZONE_ORDER[currentIndex + 1]] || 'EXPLORE'}`}
          </span>
        </div>

        {/* Chevron or Arrow */}
        {isLastZone ? (
          <ArrowUp className="w-3.5 h-3.5 text-cyan-400 group-hover:-translate-y-0.5 transition-transform" />
        ) : (
          <ChevronDown className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-y-0.5 transition-transform animate-pulse" />
        )}
      </button>

      {/* Subtle Hint Text */}
      <span className="text-[10px] font-mono text-slate-500 tracking-widest uppercase hidden md:block">
        Scroll wheel / Trackpad / Arrow keys
      </span>
    </div>
  );
};
