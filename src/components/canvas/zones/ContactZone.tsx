import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Html } from '@react-three/drei';
import * as THREE from 'three';
import { portfolioData } from '../../../data/portfolioData';
import { usePortfolioStore } from '../../../store/usePortfolioStore';
import { Mail, Linkedin, Github, Send, ArrowUp } from 'lucide-react';

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
        <Html position={[0, 0, 0.4]} center transform distanceFactor={7.5} className="w-[620px] pointer-events-auto">
          <div className="p-6 rounded-3xl bg-slate-950/90 backdrop-blur-xl border border-cyan-500/30 shadow-2xl text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
              <Mail className="w-3.5 h-3.5" /> GET IN TOUCH
            </div>

            <h2 className="text-2xl font-bold text-white mb-2">Let's Build Something Extraordinary</h2>
            <p className="text-xs text-slate-300 max-w-md mx-auto mb-6">
              Available for full-time AI Engineering, Data Analytics, and Full Stack positions. Let's discuss how my skills can accelerate your initiatives.
            </p>

            <div className="flex justify-center gap-3 mb-6">
              <button
                onClick={() => setContactModalOpen(true)}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-xs font-mono flex items-center gap-2 shadow-lg shadow-cyan-500/25 hover:from-cyan-400 hover:to-blue-500 transition-all"
              >
                <Send className="w-3.5 h-3.5" /> Launch Contact Form
              </button>

              <a
                href={`mailto:${portfolioData.identity.email}`}
                className="px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-cyan-500/50 text-slate-200 text-xs font-mono flex items-center gap-2 transition-all"
              >
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                Email Direct
              </a>
            </div>

            {/* Social Links */}
            <div className="flex justify-center items-center gap-4 text-xs font-mono text-slate-400 pt-4 border-t border-slate-800">
              <a
                href={portfolioData.identity.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" /> LinkedIn
              </a>
              <span>•</span>
              <a
                href={portfolioData.identity.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
              >
                <Github className="w-3.5 h-3.5" /> GitHub
              </a>
              <span>•</span>
              <button
                onClick={() => setZone('hero')}
                className="flex items-center gap-1 hover:text-white transition-colors"
              >
                <ArrowUp className="w-3.5 h-3.5" /> Return to Hero
              </button>
            </div>
          </div>
        </Html>
      </Float>
    </group>
  );
};
