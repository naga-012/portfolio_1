import React from 'react';
import { Float, Html } from '@react-three/drei';
import { portfolioData } from '../../../data/portfolioData';
import { ProjectCard3D } from './ProjectCard3D';
import { usePortfolioStore } from '../../../store/usePortfolioStore';
import { Sparkles, ArrowLeft, ArrowRight } from 'lucide-react';

export const ProjectsZone: React.FC = () => {
  const setZone = usePortfolioStore((state) => state.setZone);

  // Curved gallery layout coordinates relative to [16, 0, 0]
  const cardLayouts: { pos: [number, number, number]; rot: [number, number, number] }[] = [
    { pos: [-5.4, -0.2, 0.5], rot: [0, 0.2, 0] },
    { pos: [-1.8, -0.2, 0], rot: [0, 0.06, 0] },
    { pos: [1.8, -0.2, 0], rot: [0, -0.06, 0] },
    { pos: [5.4, -0.2, 0.5], rot: [0, -0.2, 0] },
  ];

  return (
    <group position={[16, 0, 0]}>
      {/* Section Header floating above the cards */}
      <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.3}>
        <Html position={[0, 3.2, 0]} center transform distanceFactor={8} className="pointer-events-none select-none w-[700px]">
          <div className="flex flex-col items-center text-center p-4 backdrop-blur-md bg-slate-950/70 rounded-2xl border border-cyan-500/20 shadow-xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-2">
              <Sparkles className="w-3 h-3" />
              <span>PRODUCTION WORK & CAPSTONES</span>
            </div>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Featured 3D Projects & Case Studies
            </h2>
            <p className="text-xs text-slate-300 font-mono mt-1">
              Select any project node to view architecture diagrams, problem breakdown & metrics
            </p>
          </div>
        </Html>
      </Float>

      {/* 4 Interactive 3D Project Cards */}
      {portfolioData.projects.map((project, index) => (
        <ProjectCard3D
          key={project.id}
          project={project}
          position={cardLayouts[index].pos}
          rotation={cardLayouts[index].rot}
          index={index}
        />
      ))}

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
