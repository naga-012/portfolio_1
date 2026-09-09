import React from 'react';
import { Float, Html } from '@react-three/drei';
import { portfolioData } from '../../../data/portfolioData';
import { ProjectCard3D } from './ProjectCard3D';
import { usePortfolioStore } from '../../../store/usePortfolioStore';
import { Sparkles, ArrowLeft, ArrowRight } from 'lucide-react';

export const ProjectsZone: React.FC = () => {
  const setZone = usePortfolioStore((state) => state.setZone);

  // Dynamically calculate curved gallery layout for any number of projects
  const getCardLayout = (index: number, total: number) => {
    const spacing = 2.35;
    const startX = -((total - 1) * spacing) / 2;
    const x = startX + index * spacing;
    const z = Math.abs(x) * 0.12;
    const rotY = -x * 0.035;
    return {
      pos: [x, -0.25, z] as [number, number, number],
      rot: [0, rotY, 0] as [number, number, number],
    };
  };

  return (
    <group position={[28, 0, 0]}>
      {/* Section Header floating cleanly above the cards */}
      <Float speed={1.2} rotationIntensity={0.04} floatIntensity={0.12}>
        <Html position={[0, 3.2, 0]} center transform distanceFactor={7.0} className="pointer-events-none select-none w-[320px]">
          <div className="flex flex-col items-center text-center py-1.5 px-3 backdrop-blur-xl bg-slate-950/90 rounded-lg border border-cyan-500/25 shadow-md">
            <div className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-300 font-bold text-[8px] font-mono mb-0.5 shadow-sm">
              <Sparkles className="w-2 h-2" />
              <span>PRODUCTION WORK & CAPSTONES</span>
            </div>
            <h2 className="text-xs sm:text-[13px] font-bold text-white tracking-tight drop-shadow-sm">
              Featured 3D Projects & Case Studies
            </h2>
            <p className="text-[8.5px] text-slate-300 font-mono mt-0.5">
              Hover card to enlarge in 3D • Click to open case study
            </p>
          </div>
        </Html>
      </Float>

      {/* Interactive 3D Project Cards */}
      {portfolioData.projects.map((project, index) => {
        const layout = getCardLayout(index, portfolioData.projects.length);
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

      {/* Navigation shortcuts floating below */}
      <Html position={[0, -2.8, 0]} center transform distanceFactor={8.8} className="pointer-events-auto">
        <div className="flex items-center gap-3 p-1.5 rounded-xl bg-slate-950/80 border border-slate-800 backdrop-blur-md">
          <button
            onClick={() => setZone('hero')}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white text-[11px] font-mono transition-colors"
          >
            <ArrowLeft className="w-3 h-3" /> Back to Hero
          </button>
          <button
            onClick={() => setZone('about')}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 hover:text-white text-[11px] font-mono transition-colors"
          >
            Explore About & Stats <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </Html>
    </group>
  );
};
