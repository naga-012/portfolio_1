import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Html } from '@react-three/drei';
import * as THREE from 'three';
import { usePortfolioStore } from '../../../store/usePortfolioStore';
import { portfolioData } from '../../../data/portfolioData';
import { ArrowRight, Sparkles, Database, Brain, Terminal, BarChart2 } from 'lucide-react';

export const HeroZone: React.FC = () => {
  const setZone = usePortfolioStore((state) => state.setZone);
  const setResumeModalOpen = usePortfolioStore((state) => state.setResumeModalOpen);

  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const [hoveredCore, setHoveredCore] = useState(false);

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = time * 0.4;
      ring1Ref.current.rotation.y = time * 0.2;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y = -time * 0.35;
      ring2Ref.current.rotation.z = time * 0.25;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.x = -time * 0.3;
      ring3Ref.current.rotation.z = -time * 0.4;
    }
    if (coreRef.current) {
      const scale = 1 + Math.sin(time * 2.5) * 0.08 + (hoveredCore ? 0.2 : 0);
      coreRef.current.scale.set(scale, scale, scale);
      coreRef.current.rotation.y += delta * 0.8;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* 3D Gyroscopic AI Neural Core */}
      <group position={[0, 0.2, -1]}>
        {/* Outer Ring */}
        <mesh ref={ring1Ref}>
          <torusGeometry args={[2.2, 0.03, 16, 100]} />
          <meshStandardMaterial
            color="#00F0FF"
            emissive="#00F0FF"
            emissiveIntensity={0.6}
            roughness={0.2}
            metalness={0.8}
            wireframe
          />
        </mesh>

        {/* Middle Ring */}
        <mesh ref={ring2Ref}>
          <torusGeometry args={[1.7, 0.035, 16, 100]} />
          <meshStandardMaterial
            color="#8B5CF6"
            emissive="#8B5CF6"
            emissiveIntensity={0.7}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>

        {/* Inner Ring */}
        <mesh ref={ring3Ref}>
          <torusGeometry args={[1.25, 0.04, 16, 100]} />
          <meshStandardMaterial
            color="#38BDF8"
            emissive="#00F0FF"
            emissiveIntensity={0.8}
            roughness={0.1}
          />
        </mesh>

        {/* Central Pulsating AI Core */}
        <mesh
          ref={coreRef}
          onPointerOver={(e) => {
            e.stopPropagation();
            setHoveredCore(true);
            document.body.style.cursor = 'pointer';
          }}
          onPointerOut={() => {
            setHoveredCore(false);
            document.body.style.cursor = 'auto';
          }}
          onClick={() => setZone('projects')}
        >
          <icosahedronGeometry args={[0.75, 1]} />
          <meshStandardMaterial
            color={hoveredCore ? '#00F0FF' : '#4F46E5'}
            emissive={hoveredCore ? '#00F0FF' : '#6366F1'}
            emissiveIntensity={hoveredCore ? 1.5 : 0.8}
            roughness={0.1}
            metalness={0.9}
            wireframe={!hoveredCore}
          />
        </mesh>

        {/* Point Light inside core */}
        <pointLight
          color={hoveredCore ? '#00F0FF' : '#8B5CF6'}
          intensity={3}
          distance={10}
        />
      </group>

      {/* Floating 3D/2D UI Overlay in Space */}
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
        <Html
          position={[0, 0.3, 0.8]}
          center
          distanceFactor={7.5}
          transform
          className="pointer-events-none select-none w-[780px]"
        >
          <div className="flex flex-col items-center text-center p-6 backdrop-blur-2xl bg-slate-950/95 rounded-3xl border border-cyan-500/35 shadow-2xl shadow-cyan-500/15 pointer-events-auto">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 font-bold text-xs font-mono mb-4 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="w-2 h-2 rounded-full bg-emerald-400 -ml-3" />
              {portfolioData.identity.status}
            </div>

            {/* Name & Title */}
            <h1 className="text-5xl md:text-6xl font-black tracking-tight text-white mb-2 drop-shadow-md">
              <span className="bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
                {portfolioData.identity.name}
              </span>
            </h1>

            <h2 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400 bg-clip-text text-transparent mb-3 drop-shadow-sm">
              {portfolioData.identity.title}
            </h2>

            {/* Tagline */}
            <p className="text-slate-100 font-mono text-xs md:text-sm font-medium tracking-wide max-w-xl mb-6 px-4 py-2 bg-slate-900/95 rounded-xl border border-slate-700 shadow-inner">
              {portfolioData.identity.tagline}
            </p>

            {/* Key Strengths Pills */}
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-950/80 border border-cyan-500/40 text-cyan-200 text-xs font-mono font-medium shadow-sm">
                <Brain className="w-3.5 h-3.5 text-cyan-400" /> Production AI & CNNs
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-950/80 border border-purple-500/40 text-purple-200 text-xs font-mono font-medium shadow-sm">
                <BarChart2 className="w-3.5 h-3.5 text-purple-400" /> Power BI & Analytics
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-950/80 border border-sky-500/40 text-sky-200 text-xs font-mono font-medium shadow-sm">
                <Terminal className="w-3.5 h-3.5 text-sky-400" /> FastAPI Microservices
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-950/80 border border-emerald-500/40 text-emerald-200 text-xs font-mono font-medium shadow-sm">
                <Database className="w-3.5 h-3.5 text-emerald-400" /> High-Scale SQL ETL
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setZone('projects')}
                className="group relative px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-sm tracking-wide hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-lg shadow-cyan-500/25 flex items-center gap-2"
              >
                <span>Explore 3D Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => setResumeModalOpen(true)}
                className="px-5 py-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-cyan-500/50 font-medium text-sm transition-all duration-300 flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>View Resumes</span>
              </button>

              <button
                onClick={() => setZone('about')}
                className="px-4 py-2.5 rounded-xl bg-slate-900/50 hover:bg-slate-800 text-slate-400 hover:text-white border border-transparent hover:border-slate-700 text-sm transition-all"
              >
                About Me
              </button>
            </div>
          </div>
        </Html>
      </Float>

      {/* Orbiting Tech Badges floating around */}
      <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.8}>
        <Html position={[-3.2, 1.8, -0.5]} center distanceFactor={8} transform>
          <div className="px-3 py-1.5 rounded-lg bg-slate-900/80 border border-cyan-500/40 text-cyan-300 text-xs font-mono backdrop-blur-md shadow-lg shadow-cyan-500/10">
            ⚡ 94.8% Detection Accuracy
          </div>
        </Html>
      </Float>

      <Float speed={2} rotationIntensity={0.3} floatIntensity={0.6}>
        <Html position={[3.4, -1.2, -0.5]} center distanceFactor={8} transform>
          <div className="px-3 py-1.5 rounded-lg bg-slate-900/80 border border-purple-500/40 text-purple-300 text-xs font-mono backdrop-blur-md shadow-lg shadow-purple-500/10">
            📊 100k+ Daily Rows ETL
          </div>
        </Html>
      </Float>

      <Float speed={1.8} rotationIntensity={0.5} floatIntensity={0.7}>
        <Html position={[-3.4, -1.6, 0.2]} center distanceFactor={8} transform>
          <div className="px-3 py-1.5 rounded-lg bg-slate-900/80 border border-emerald-500/40 text-emerald-300 text-xs font-mono backdrop-blur-md shadow-lg shadow-emerald-500/10">
            🚀 40% Pipeline Latency Reduction
          </div>
        </Html>
      </Float>
    </group>
  );
};
