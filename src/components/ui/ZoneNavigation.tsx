import React from 'react';
import { usePortfolioStore, ZONE_ORDER } from '../../store/usePortfolioStore';
import { ZoneId } from '../../types/portfolio';
import { ChevronUp, ChevronDown } from 'lucide-react';

export const ZoneNavigation: React.FC = () => {
  const currentZone = usePortfolioStore((state) => state.currentZone);
  const setZone = usePortfolioStore((state) => state.setZone);
  const nextZone = usePortfolioStore((state) => state.nextZone);
  const prevZone = usePortfolioStore((state) => state.prevZone);
  const is3DMode = usePortfolioStore((state) => state.is3DMode);

  const zoneLabels: Record<ZoneId, string> = {
    hero: '01 Nexus',
    about: '02 Profile',
    skills: '03 Skills',
    projects: '04 Projects',
    experience: '05 Experience',
    contact: '06 Contact',
  };



  if (!is3DMode) return null;

  return (
    <aside className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center gap-3 p-2 rounded-2xl bg-slate-950/60 border border-slate-800/80 backdrop-blur-xl pointer-events-auto shadow-2xl">
      <button
        onClick={prevZone}
        title="Previous Zone (ArrowUp)"
        className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-cyan-400 transition-colors"
      >
        <ChevronUp className="w-4 h-4" />
      </button>

      <div className="flex flex-col items-center gap-3 my-1">
        {ZONE_ORDER.map((zoneId) => {
          const isActive = currentZone === zoneId;
          return (
            <div key={zoneId} className="relative group flex items-center">
              {/* Tooltip on left */}
              <div className="absolute right-7 px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-[11px] font-mono text-cyan-300 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-lg">
                {zoneLabels[zoneId]}
              </div>

              {/* Dot Button */}
              <button
                onClick={() => setZone(zoneId)}
                aria-label={zoneLabels[zoneId]}
                className={`transition-all duration-300 rounded-full ${
                  isActive
                    ? 'w-3 h-8 bg-gradient-to-b from-cyan-400 to-purple-500 ring-4 ring-cyan-500/20'
                    : 'w-2.5 h-2.5 bg-slate-700 hover:bg-slate-400'
                }`}
              />
            </div>
          );
        })}
      </div>

      <button
        onClick={nextZone}
        title="Next Zone (ArrowDown)"
        className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-cyan-400 transition-colors"
      >
        <ChevronDown className="w-4 h-4" />
      </button>
    </aside>
  );
};
