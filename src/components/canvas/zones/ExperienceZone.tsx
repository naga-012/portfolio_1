import React from 'react';
import { Float, Html } from '@react-three/drei';
import { portfolioData } from '../../../data/portfolioData';
import { usePortfolioStore } from '../../../store/usePortfolioStore';
import { Briefcase, ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';

export const ExperienceZone: React.FC = () => {
  const setZone = usePortfolioStore((state) => state.setZone);
  const exp = portfolioData.experience[0];

  return (
    <group position={[15, -10.5, 0]}>
      {/* 3D Timeline Node */}
      <mesh position={[0, 0, -0.8]}>
        <cylinderGeometry args={[0.08, 0.08, 6, 16]} />
        <meshStandardMaterial color="#8B5CF6" emissive="#8B5CF6" emissiveIntensity={0.8} />
      </mesh>

      <Float speed={1.5} rotationIntensity={0.08} floatIntensity={0.25}>
        <Html position={[0, 0, 0.4]} center transform distanceFactor={7.5} className="w-[660px] pointer-events-auto">
          <div className="p-6 rounded-3xl bg-slate-950/90 backdrop-blur-xl border border-purple-500/30 shadow-2xl">
            <div className="flex items-center justify-between mb-3">
              <span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-mono flex items-center gap-1.5">
                <Briefcase className="w-3.5 h-3.5" /> PROFESSIONAL JOURNEY
              </span>
              <span className="text-xs font-mono text-emerald-400">{exp.status}</span>
            </div>

            <h3 className="text-xl font-bold text-white">{exp.role}</h3>
            <div className="text-sm font-semibold text-cyan-400 mt-0.5">{exp.company} • {exp.location}</div>
            <div className="text-xs font-mono text-slate-400 mb-4">{exp.period}</div>

            <div className="space-y-2 mb-6">
              {exp.achievements.map((ach, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{ach}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-1.5 mb-6">
              {exp.skills.map((s, i) => (
                <span key={i} className="px-2.5 py-1 rounded-md bg-purple-950/40 border border-purple-500/30 text-purple-300 text-[11px] font-mono">
                  {s}
                </span>
              ))}
            </div>

            <div className="flex justify-between items-center pt-3 border-t border-slate-800">
              <button
                onClick={() => setZone('projects')}
                className="text-xs text-slate-400 hover:text-white font-mono flex items-center gap-1"
              >
                <ArrowLeft className="w-3.5 h-3.5" /> Back to Projects
              </button>
              <button
                onClick={() => setZone('contact')}
                className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-mono font-bold flex items-center gap-1.5 transition-colors"
              >
                Connect / Contact Zone <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </Html>
      </Float>
    </group>
  );
};
