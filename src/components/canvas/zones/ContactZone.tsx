import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Html } from '@react-three/drei';
import * as THREE from 'three';
import { portfolioData } from '../../../data/portfolioData';
import { usePortfolioStore } from '../../../store/usePortfolioStore';
import { Mail, Phone, Linkedin, Github, Send, ArrowUp } from 'lucide-react';

export const ContactZone: React.FC = () => {
  const setZone = usePortfolioStore((state) => state.setZone);
  const setContactModalOpen = usePortfolioStore((state) => state.setContactModalOpen);
  const beaconRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (beaconRef.current) {
      beaconRef.current.rotation.y = state.clock.getElapsedTime() * 0.5;
    }
  });

  return (
    <group position={[0, -13, 0]}>
      {/* 3D Holographic Beacon Antenna */}
      <group position={[0, 0, -1]}>
        <mesh ref={beaconRef}>
          <coneGeometry args={[1, 2.5, 4]} />
          <meshStandardMaterial
            color="#00F0FF"
            emissive="#00F0FF"
            emissiveIntensity={0.8}
            wireframe
          />
        </mesh>
        <pointLight color="#00F0FF" intensity={2} distance={8} />
      </group>

      <Float speed={1.5} rotationIntensity={0.1}>
        <Html position={[0, 0, 0.4]} center transform distanceFactor={7.2} className="w-[490px] max-w-[90vw] pointer-events-auto">
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-950/90 backdrop-blur-xl border border-cyan-500/30 shadow-2xl text-center">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-[10px] font-mono mb-2.5">
              <Mail className="w-3 h-3" /> GET IN TOUCH
            </div>

            <h2 className="text-xl font-bold text-white mb-1.5">Let's Build Something Extraordinary</h2>
            <p className="text-[11px] text-slate-300 max-w-md mx-auto mb-3.5">
              Available for full-time AI Engineering, Data Analytics, and Full Stack positions. Direct outreach channels below:
            </p>

            {/* Direct Connect Grid: LinkedIn, GitHub, Gmail, Phone (LAST) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3.5 max-w-md mx-auto text-left">
              {/* LinkedIn */}
              <a
                href={portfolioData.identity.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-900/90 hover:bg-[#0077B5]/20 border border-slate-700 hover:border-[#0077B5] flex items-center gap-2.5 transition-all group shadow-sm"
              >
                <div className="w-7 h-7 rounded-md bg-[#0077B5]/20 flex items-center justify-center text-[#00A0DC] shrink-0">
                  <Linkedin className="w-3.5 h-3.5" />
                </div>
                <div className="min-w-0">
                  <div className="text-[9px] font-mono text-slate-400">LinkedIn</div>
                  <div className="text-xs font-bold text-white group-hover:text-[#00A0DC] truncate">
                    nagarjun-myakala-
                  </div>
                </div>
              </a>

              {/* GitHub */}
              <a
                href={portfolioData.identity.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-900/90 hover:bg-slate-800 border border-slate-700 hover:border-slate-500 flex items-center gap-2.5 transition-all group shadow-sm"
              >
                <div className="w-7 h-7 rounded-md bg-slate-800 flex items-center justify-center text-slate-200 shrink-0">
                  <Github className="w-3.5 h-3.5" />
                </div>
                <div className="min-w-0">
                  <div className="text-[9px] font-mono text-slate-400">GitHub</div>
                  <div className="text-xs font-bold text-white group-hover:text-cyan-300 truncate">
                    naga-012
                  </div>
                </div>
              </a>

              {/* Gmail */}
              <a
                href={`mailto:${portfolioData.identity.email}`}
                className="p-2 rounded-lg bg-slate-900/90 hover:bg-rose-500/20 border border-slate-700 hover:border-rose-500/60 flex items-center gap-2.5 transition-all group shadow-sm"
              >
                <div className="w-7 h-7 rounded-md bg-rose-500/15 flex items-center justify-center text-rose-400 shrink-0">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <div className="min-w-0">
                  <div className="text-[9px] font-mono text-slate-400">Gmail</div>
                  <div className="text-xs font-bold text-white group-hover:text-rose-300 truncate">
                    {portfolioData.identity.email}
                  </div>
                </div>
              </a>

              {/* Phone */}
              <a
                href={`tel:${portfolioData.identity.phone}`}
                className="p-2 rounded-lg bg-slate-900/90 hover:bg-emerald-500/20 border border-slate-700 hover:border-emerald-500/60 flex items-center gap-2.5 transition-all group shadow-sm"
              >
                <div className="w-7 h-7 rounded-md bg-emerald-500/15 flex items-center justify-center text-emerald-400 shrink-0">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <div className="min-w-0">
                  <div className="text-[9px] font-mono text-slate-400">Phone / WhatsApp</div>
                  <div className="text-xs font-bold text-white group-hover:text-emerald-300 truncate">
                    {portfolioData.identity.phone}
                  </div>
                </div>
              </a>
            </div>

            {/* Launch Form & Return to Hero */}
            <div className="flex justify-center items-center gap-2.5 pt-2.5 border-t border-slate-800">
              <button
                onClick={() => setContactModalOpen(true)}
                className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-xs font-mono flex items-center gap-1.5 shadow-md hover:from-cyan-400 hover:to-blue-500 transition-all"
              >
                <Send className="w-3 h-3" /> Launch Contact Form
              </button>

              <button
                onClick={() => setZone('hero')}
                className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white text-xs font-mono flex items-center gap-1 transition-all"
              >
                <ArrowUp className="w-3 h-3" /> Return to Hero
              </button>
            </div>
          </div>
        </Html>
      </Float>
    </group>
  );
};
