import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Html } from '@react-three/drei';
import * as THREE from 'three';
import { portfolioData } from '../../../data/portfolioData';
import { usePortfolioStore } from '../../../store/usePortfolioStore';
import { Sparkles, ArrowRight, ArrowLeft } from 'lucide-react';

export const SkillsZone: React.FC = () => {
  const setZone = usePortfolioStore((state) => state.setZone);
  const [activeCategory, setActiveCategory] = useState<string>('languages');

  const orbPositions: [number, number, number][] = [
    [-3.2, 0.5, 0],
    [-1.1, -0.5, 0.5],
    [1.1, 0.5, 0.5],
    [3.2, -0.5, 0],
  ];

  return (
    <group position={[-14, -10.5, 0]}>
      {/* 3D Title */}
      <Float speed={1.5} rotationIntensity={0.1}>
        <Html position={[0, 2.8, 0]} center transform distanceFactor={9.2} className="pointer-events-none select-none w-[540px]">
          <div className="text-center p-2.5 rounded-xl bg-slate-950/80 border border-purple-500/20 backdrop-blur-md">
            <span className="text-[11px] font-mono text-purple-400">SKILL CONSTELLATION</span>
            <h2 className="text-2xl font-extrabold text-white mt-0.5">4 Technical Clusters</h2>
            <p className="text-[11px] text-slate-400 font-mono mt-0.5">Click orbs to expand technical proficiencies</p>
          </div>
        </Html>
      </Float>

      {/* 4 Skill Category Orbs */}
      {portfolioData.skillCategories.map((category, idx) => {
        const isSelected = activeCategory === category.id;
        const pos = orbPositions[idx];

        return (
          <group key={category.id} position={pos}>
            <mesh
              onClick={() => setActiveCategory(category.id)}
              onPointerOver={(e) => {
                e.stopPropagation();
                document.body.style.cursor = 'pointer';
              }}
              onPointerOut={() => {
                document.body.style.cursor = 'auto';
              }}
            >
              <sphereGeometry args={[isSelected ? 0.7 : 0.55, 32, 32]} />
              <meshStandardMaterial
                color={category.color}
                emissive={category.color}
                emissiveIntensity={isSelected ? 0.9 : 0.4}
                roughness={0.2}
                metalness={0.8}
                wireframe={!isSelected}
              />
            </mesh>

            <Html position={[0, -1.1, 0]} center transform distanceFactor={7.5} className="pointer-events-auto">
              <button
                onClick={() => setActiveCategory(category.id)}
                className={`px-2.5 py-0.5 rounded-lg text-[11px] font-mono transition-all duration-200 border whitespace-nowrap ${
                  isSelected
                    ? 'bg-slate-900 text-white font-bold'
                    : 'bg-slate-950/70 text-slate-300'
                }`}
                style={{ borderColor: category.color }}
              >
                {category.name}
              </button>
            </Html>
          </group>
        );
      })}

      {/* Expanded Chips for Selected Category */}
      <Float speed={1.2} floatIntensity={0.2}>
        <Html position={[0, -2.8, 0]} center transform distanceFactor={8.6} className="w-[580px] pointer-events-auto">
          {(() => {
            const active = portfolioData.skillCategories.find((c) => c.id === activeCategory);
            if (!active) return null;
            return (
              <div
                className="p-4 rounded-2xl bg-slate-950/90 backdrop-blur-xl border shadow-2xl text-center"
                style={{ borderColor: `${active.color}40` }}
              >
                <div className="text-sm font-bold text-white mb-0.5">{active.name}</div>
                <div className="text-[11px] text-slate-400 font-mono mb-3">{active.tagline}</div>

                <div className="flex flex-wrap justify-center gap-1.5">
                  {active.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-lg text-[11px] font-mono font-medium border transition-transform hover:scale-105"
                      style={{
                        backgroundColor: `${active.color}15`,
                        borderColor: `${active.color}50`,
                        color: active.color,
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center mt-4 pt-2.5 border-t border-slate-800">
                  <button
                    onClick={() => setZone('about')}
                    className="text-[11px] text-slate-400 hover:text-white font-mono flex items-center gap-1"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" /> Back to About
                  </button>
                  <button
                    onClick={() => setZone('projects')}
                    className="px-3 py-1.5 rounded-lg bg-cyan-500 text-slate-950 text-xs font-mono font-bold flex items-center gap-1"
                  >
                    Go to 3D Projects <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })()}
        </Html>
      </Float>
    </group>
  );
};
