import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { CameraRig } from './CameraRig';
import { DataParticles } from './DataParticles';
import { HeroZone } from './zones/HeroZone';
import { AboutZone } from './zones/AboutZone';
import { SkillsZone } from './zones/SkillsZone';
import { ProjectsZone } from './zones/ProjectsZone';
import { ExperienceZone } from './zones/ExperienceZone';
import { ContactZone } from './zones/ContactZone';

import { usePortfolioStore } from '../../store/usePortfolioStore';
import { ZoneId } from '../../types/portfolio';

export const PortfolioCanvas: React.FC = () => {
  const currentZone = usePortfolioStore((state) => state.currentZone);
  const previousZone = usePortfolioStore((state) => state.previousZone);
  const isTransitioning = usePortfolioStore((state) => state.isTransitioning);

  // Mount only active zone and previous zone during transitions
  const shouldRender = (zone: ZoneId) => {
    return currentZone === zone || (isTransitioning && previousZone === zone);
  };

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-auto bg-[#030712]">
      <Canvas
        camera={{ position: [0, 1.2, 8.5], fov: 48, near: 0.1, far: 1000 }}
        dpr={[1, 2]} // Crisp high-DPI rendering
        gl={{
          antialias: true,
          powerPreference: 'high-performance',
          alpha: false,
        }}
      >
        <color attach="background" args={['#030712']} />
        <fog attach="fog" args={['#030712', 30, 100]} />

        {/* Ambient & Scene Lights */}
        <ambientLight intensity={0.7} />
        <directionalLight position={[10, 15, 10]} intensity={1.2} color="#00F0FF" />
        <directionalLight position={[-10, -10, -5]} intensity={0.8} color="#8B5CF6" />
        <pointLight position={[0, 0, 0]} intensity={1.5} color="#38BDF8" distance={20} />

        <Suspense fallback={null}>
          <CameraRig />
          <DataParticles />

          {/* 6 Spatial Zones - Conditionally mounted to prevent DOM/UI bleeding between zones */}
          {shouldRender('hero') && <HeroZone />}
          {shouldRender('about') && <AboutZone />}
          {shouldRender('skills') && <SkillsZone />}
          {shouldRender('projects') && <ProjectsZone />}
          {shouldRender('experience') && <ExperienceZone />}
          {shouldRender('contact') && <ContactZone />}
        </Suspense>
      </Canvas>
    </div>
  );
};
