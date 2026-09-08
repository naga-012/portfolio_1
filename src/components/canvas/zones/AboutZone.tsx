import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Html } from '@react-three/drei';
import * as THREE from 'three';
import { portfolioData } from '../../../data/portfolioData';
import { usePortfolioStore } from '../../../store/usePortfolioStore';
import { GraduationCap, Briefcase, Award, ArrowRight } from 'lucide-react';

export const AboutZone: React.FC = () => {
  const setZone = usePortfolioStore((state) => state.setZone);
  const octaRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (octaRef.current) {
      octaRef.current.rotation.y += delta * 0.4;
      octaRef.current.rotation.x += delta * 0.2;
    }
  });

  return (
    <group position={[-16, 0, -1]}>
      {/* 3D Geometric Crystal Core */}
      <mesh ref={octaRef} position={[0, 0, -1]}>
        <octahedronGeometry args={[1.5, 0]} />
        <meshStandardMaterial
          color="#00F0FF"
          emissive="#00F0FF"
          emissiveIntensity={0.6}
          wireframe
        />
      </mesh>

      {/* Floating UI Panel */}
      <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.3}>
        <Html position={[0, 0, 0.5]} center transform distanceFactor={7.5} className="w-[720px] pointer-events-auto">
          <div className="p-6 rounded-3xl bg-slate-950/98 backdrop-blur-2xl border border-cyan-500/35 shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/40 text-cyan-300 font-bold text-xs font-mono shadow-sm">
                BACKGROUND & QUALIFICATIONS
              </span>
              <span className="text-xs font-mono text-slate-300 font-medium">Hyderabad, India</span>
            </div>

            <h2 className="text-2xl font-black text-white mb-2 tracking-tight drop-shadow-sm">About Nagarjun Myakala</h2>
            <p className="text-xs text-slate-100 font-medium leading-relaxed mb-6">
              {portfolioData.identity.bio}
            </p>

            {/* Education & Experience Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="p-4 rounded-xl bg-slate-900/95 border border-slate-700 shadow-sm">
                <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm mb-1">
                  <GraduationCap className="w-4 h-4" /> Education
                </div>
                <div className="text-white text-xs font-bold">{portfolioData.education.degree}</div>
                <div className="text-slate-200 font-medium text-[11px] mt-0.5">{portfolioData.education.institution}</div>
                <div className="flex justify-between text-[11px] text-cyan-300 font-mono font-medium mt-2">
                  <span>{portfolioData.education.period}</span>
                  <span>GPA: {portfolioData.education.gpa}</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/95 border border-slate-700 shadow-sm">
                <div className="flex items-center gap-2 text-purple-400 font-bold text-sm mb-1">
                  <Briefcase className="w-4 h-4" /> Current Role
                </div>
                <div className="text-white text-xs font-bold">{portfolioData.experience[0].role}</div>
                <div className="text-slate-200 font-medium text-[11px] mt-0.5">{portfolioData.experience[0].company}</div>
                <div className="flex justify-between text-[11px] text-purple-300 font-mono font-medium mt-2">
                  <span>{portfolioData.experience[0].period}</span>
                  <span className="text-emerald-400 font-semibold">{portfolioData.experience[0].status}</span>
                </div>
              </div>
            </div>

            {/* Animated Stat Counters */}
            <div className="grid grid-cols-5 gap-2 mb-6">
              {portfolioData.stats.map((st) => (
                <div key={st.id} className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 text-center">
                  <div className="text-base font-extrabold text-cyan-400 font-mono">{st.value}</div>
                  <div className="text-[9px] text-slate-400 font-mono mt-1 leading-tight">{st.label}</div>
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center">
              <button
                onClick={() => setZone('hero')}
                className="text-xs text-slate-400 hover:text-white font-mono"
              >
                ← Back to Hero
              </button>
              <button
                onClick={() => setZone('skills')}
                className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold font-mono flex items-center gap-1.5 transition-colors"
              >
                Explore Skills Orbs <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </Html>
      </Float>
    </group>
  );
};
