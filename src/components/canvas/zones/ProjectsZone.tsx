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
    const spacing = 3.6;
    const startX = -((total - 1) * spacing) / 2;
    const x = startX + index * spacing;
    const z = Math.abs(x) * 0.12;
    const rotY = -x * 0.035;
    return {
      pos: [x, -0.2, z] as [number, number, number],
      rot: [0, rotY, 0] as [number, number, number],
    };
  };

  return (
    <group position={[16, 0, 0]}>
      {/* Section Header floating above the cards */}
      <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.3}>
        <Html position={[0, 3.2, 0]} center transform distanceFactor={8} className="pointer-events-none select-none w-[700px]">
          <div className="flex flex-col items-center text-center p-4 backdrop-blur-2xl bg-slate-950/95 rounded-2xl border border-cyan-500/35 shadow-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/40 text-cyan-300 font-bold text-xs font-mono mb-2 shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>PRODUCTION WORK & CAPSTONES</span>
            </div>
            <h2 className="text-3xl font-black text-white tracking-tight drop-shadow-md">
              Featured 3D Projects & Case Studies
            </h2>
            <p className="text-xs text-slate-100 font-medium font-mono mt-1">
              Select any project node to view architecture diagrams, problem breakdown & metrics
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
      <Html position={[0, -3.2, 0]} center transform distanceFactor={8} className="pointer-events-auto">
        <div className="flex items-center gap-4 p-2 rounded-xl bg-slate-950/80 border border-slate-800 backdrop-blur-md">
          <button
            onClick={() => setZone('hero')}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white text-xs font-mono transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Hero
          </button>
          <button
            onClick={() => setZone('about')}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 hover:text-white text-xs font-mono transition-colors"
          >
            Explore About & Stats <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </Html>
    </group>
  );
};
