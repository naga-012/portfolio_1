import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Html } from '@react-three/drei';
import * as THREE from 'three';
import { usePortfolioStore } from '../../../store/usePortfolioStore';
import { portfolioData } from '../../../data/portfolioData';
import { ArrowRight, Sparkles, Database, Brain, Terminal, BarChart2, Mail, Phone, Linkedin, Github } from 'lucide-react';

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
      <Float speed={2} rotationIntensity={0.15} floatIntensity={0.4}>
        <Html
          position={[0, 0.2, 0.6]}
          center
          distanceFactor={7.0}
          transform
          className="pointer-events-none select-none w-[520px] max-w-[90vw]"
        >
          <div className="flex flex-col items-center text-center p-4 backdrop-blur-2xl bg-slate-950/95 rounded-2xl border border-cyan-500/35 shadow-2xl shadow-cyan-500/15 pointer-events-auto">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 font-bold text-[10px] font-mono mb-2.5 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 -ml-2.5" />
              {portfolioData.identity.status}
            </div>

            {/* Name & Title */}
            <h1 className="text-3xl md:text-3xl font-black tracking-tight text-white mb-1 drop-shadow-md">
              <span className="bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
                {portfolioData.identity.name}
              </span>
            </h1>

            <h2 className="text-sm md:text-base font-bold bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400 bg-clip-text text-transparent mb-2 drop-shadow-sm">
              {portfolioData.identity.title}
            </h2>

            {/* Tagline */}
            <p className="text-slate-200 font-mono text-[11px] font-medium tracking-wide max-w-sm mb-3 px-3 py-1 bg-slate-900/90 rounded-lg border border-slate-700/80 shadow-inner leading-relaxed">
              {portfolioData.identity.tagline}
            </p>

            {/* Key Strengths Pills */}
            <div className="flex flex-wrap justify-center gap-1.5 mb-3.5 max-w-md">
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-cyan-950/80 border border-cyan-500/40 text-cyan-200 text-[10px] font-mono font-medium shadow-sm">
                <Brain className="w-3 h-3 text-cyan-400" /> Production AI & CNNs
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-purple-950/80 border border-purple-500/40 text-purple-200 text-[10px] font-mono font-medium shadow-sm">
                <BarChart2 className="w-3 h-3 text-purple-400" /> Power BI & Analytics
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-sky-950/80 border border-sky-500/40 text-sky-200 text-[10px] font-mono font-medium shadow-sm">
                <Terminal className="w-3 h-3 text-sky-400" /> FastAPI Microservices
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-950/80 border border-emerald-500/40 text-emerald-200 text-[10px] font-mono font-medium shadow-sm">
                <Database className="w-3 h-3 text-emerald-400" /> High-Scale SQL ETL
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setZone('projects')}
                className="group relative px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-xs tracking-wide hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-md shadow-cyan-500/20 flex items-center gap-1.5"
              >
                <span>Explore 3D Projects</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={() => setResumeModalOpen(true)}
                className="px-3 py-1.5 rounded-lg bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-cyan-500/50 font-medium text-xs transition-all duration-300 flex items-center gap-1.5"
              >
                <Sparkles className="w-3 h-3 text-cyan-400" />
                <span>View Resumes</span>
              </button>

              <button
                onClick={() => setZone('about')}
                className="px-3 py-1.5 rounded-lg bg-slate-900/50 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700 text-xs transition-all"
              >
                About Me
              </button>
            </div>

            {/* Quick Contact & Social Bar */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 mt-3 pt-2.5 border-t border-slate-800/80 w-full">
              <a
                href={portfolioData.identity.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-900/90 hover:bg-[#0077B5]/20 border border-slate-700 hover:border-[#0077B5] text-slate-200 hover:text-[#00A0DC] text-[10px] font-mono transition-all shadow-sm"
              >
                <Linkedin className="w-3 h-3 text-[#00A0DC]" />
                <span>LinkedIn</span>
              </a>

              <a
                href={portfolioData.identity.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-900/90 hover:bg-slate-800 border border-slate-700 hover:border-slate-500 text-slate-200 hover:text-white text-[10px] font-mono transition-all shadow-sm"
              >
                <Github className="w-3 h-3" />
                <span>GitHub</span>
              </a>

              <a
                href={`mailto:${portfolioData.identity.email}`}
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-900/90 hover:bg-rose-500/20 border border-slate-700 hover:border-rose-500/60 text-slate-200 hover:text-rose-300 text-[10px] font-mono transition-all shadow-sm"
              >
                <Mail className="w-3 h-3 text-rose-400" />
                <span>Email</span>
              </a>

              <a
                href={`tel:${portfolioData.identity.phone}`}
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-900/90 hover:bg-emerald-500/20 border border-slate-700 hover:border-emerald-500/60 text-slate-200 hover:text-emerald-300 text-[10px] font-mono transition-all shadow-sm"
              >
                <Phone className="w-3 h-3 text-emerald-400" />
                <span>Call</span>
              </a>
            </div>
          </div>
        </Html>
      </Float>

      {/* Orbiting Tech Badges floating around */}
      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.6}>
        <Html position={[-3.1, 1.4, -0.4]} center distanceFactor={7.0} transform>
          <div className="px-2.5 py-1 rounded-lg bg-slate-900/80 border border-cyan-500/40 text-cyan-300 text-[11px] font-mono backdrop-blur-md shadow-lg shadow-cyan-500/10">
            ⚡ 94.8% Detection Accuracy
          </div>
        </Html>
      </Float>

      <Float speed={2} rotationIntensity={0.25} floatIntensity={0.5}>
        <Html position={[3.2, -1.0, -0.4]} center distanceFactor={7.0} transform>
          <div className="px-2.5 py-1 rounded-lg bg-slate-900/80 border border-purple-500/40 text-purple-300 text-[11px] font-mono backdrop-blur-md shadow-lg shadow-purple-500/10">
            📊 100k+ Daily Rows ETL
          </div>
        </Html>
      </Float>

      <Float speed={1.8} rotationIntensity={0.35} floatIntensity={0.5}>
        <Html position={[-3.2, -1.3, 0.1]} center distanceFactor={7.0} transform>
          <div className="px-2.5 py-1 rounded-lg bg-slate-900/80 border border-emerald-500/40 text-emerald-300 text-[11px] font-mono backdrop-blur-md shadow-lg shadow-emerald-500/10">
            🚀 40% Pipeline Latency Reduction
          </div>
        </Html>
      </Float>
    </group>
  );
};
