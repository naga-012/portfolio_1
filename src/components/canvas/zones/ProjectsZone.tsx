import React from 'react';
import { Float, Html } from '@react-three/drei';
import { portfolioData } from '../../../data/portfolioData';
import { ProjectCard3D } from './ProjectCard3D';
import { usePortfolioStore } from '../../../store/usePortfolioStore';
import { Sparkles, ArrowLeft, ArrowRight } from 'lucide-react';

export const ProjectsZone: React.FC = () => {
  const setZone = usePortfolioStore((state) => state.setZone);

  // 2-Row Grid Layout (3 cards top row, 3 cards bottom row) for crystal-clear visibility with zero overlap
  const getCardLayout = (index: number) => {
    const row = Math.floor(index / 3); // 0 for top row (projects 1-3), 1 for bottom row (projects 4-6)
    const col = index % 3; // 0: left, 1: center, 2: right

    const xSpacing = 3.25;
    const x = (col - 1) * xSpacing; // -3.25, 0, +3.25
    const y = row === 0 ? 1.35 : -1.85;

    // Subtle 3D amphitheater curvature
    const z = Math.abs(x) * 0.08;
    const rotY = -x * 0.025;

    return {
      pos: [x, y, z] as [number, number, number],
      rot: [0, rotY, 0] as [number, number, number],
    };
  };

  return (
    <group position={[28, 0, 0]}>
      {/* Section Header floating cleanly ABOVE the projects */}
      <Float speed={1.2} rotationIntensity={0.03} floatIntensity={0.1}>
        <Html position={[0, 3.85, 0]} center transform distanceFactor={8.5} className="pointer-events-none select-none w-[420px]">
          <div className="flex flex-col items-center text-center py-2 px-4 backdrop-blur-2xl bg-slate-950/95 rounded-2xl border border-cyan-500/40 shadow-2xl shadow-cyan-500/15">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-500/15 border border-cyan-500/35 text-cyan-300 font-bold text-[9px] font-mono mb-1 shadow-sm">
              <Sparkles className="w-3 h-3 text-cyan-400" />
              <span>PRODUCTION WORK & CAPSTONES</span>
            </div>
            <h2 className="text-base sm:text-lg font-extrabold text-white tracking-tight drop-shadow-md">
              Featured 3D Projects & Case Studies
            </h2>
            <p className="text-[10.5px] text-cyan-200/90 font-mono mt-0.5">
              Hover card to enlarge in 3D • Click to open case study
            </p>
          </div>
        </Html>
      </Float>

      {/* Interactive 3D Project Cards in 2x3 Grid */}
      {portfolioData.projects.map((project, index) => {
        const layout = getCardLayout(index);
        return (
          <ProjectCard3D
            key={project.id}
            project={project}
            position={layout.pos}
            rotation={layout.rot}
            index={index}
          />
        );
      })}

      {/* Navigation shortcuts floating cleanly below cards */}
      <Html position={[0, -3.85, 0]} center transform distanceFactor={8.5} className="pointer-events-auto">
        <div className="flex items-center gap-3 p-1.5 rounded-xl bg-slate-950/90 border border-slate-800 backdrop-blur-md shadow-xl">
          <button
            onClick={() => setZone('hero')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white text-xs font-mono transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Hero
          </button>
          <button
            onClick={() => setZone('about')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 hover:text-white text-xs font-mono transition-colors shadow-sm"
          >
            Explore About & Stats <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </Html>
    </group>
  );
};
