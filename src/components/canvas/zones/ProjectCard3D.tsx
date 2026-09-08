import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Html } from '@react-three/drei';
import * as THREE from 'three';
import { ProjectItem } from '../../../types/portfolio';
import { usePortfolioStore } from '../../../store/usePortfolioStore';
import { ExternalLink, Layers, ArrowUpRight, Cpu } from 'lucide-react';

interface ProjectCard3DProps {
  project: ProjectItem;
  position: [number, number, number];
  rotation?: [number, number, number];
  index: number;
}

export const ProjectCard3D: React.FC<ProjectCard3DProps> = ({
  project,
  position,
  rotation = [0, 0, 0],
  index,
}) => {
  const meshRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  const setSelectedProject = usePortfolioStore((state) => state.setSelectedProject);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();
    
    // Subtle breathing float per card with offset
    const floatY = Math.sin(time * 1.5 + index * 0.8) * 0.08;

    // Interactive Hover: Fly forward towards camera in Z, elevate in Y, face viewer flat (rotY=0), and scale up!
    const targetX = position[0];
    const targetY = position[1] + floatY + (hovered ? 0.35 : 0);
    const targetZ = position[2] + (hovered ? 2.5 : 0);
    const targetScale = hovered ? 1.25 : 1.0;
    const targetRotY = hovered ? 0 : rotation[1];

    meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, targetX, 0.12);
    meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, targetY, 0.12);
    meshRef.current.position.z = THREE.MathUtils.lerp(meshRef.current.position.z, targetZ, 0.12);

    meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, targetRotY, 0.12);
    meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.12);
  });

  return (
    <group
      ref={meshRef}
      position={position}
      rotation={rotation}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(true);
        document.body.style.cursor = 'pointer';
      }}
      onPointerOut={() => {
        setHovered(false);
        document.body.style.cursor = 'auto';
      }}
      onClick={() => setSelectedProject(project)}
    >
      {/* 3D Glass / Cyber Backdrop Plate */}
      <mesh position={[0, 0, -0.05]}>
        <boxGeometry args={[2.45, 3.5, 0.08]} />
        <meshStandardMaterial
          color={hovered ? '#0f172a' : '#030712'}
          emissive={project.accentColor}
          emissiveIntensity={hovered ? 0.75 : 0.15}
        />
      </mesh>

      {/* Outer Glowing Wireframe Border */}
      <lineSegments position={[0, 0, 0.01]}>
        <edgesGeometry args={[new THREE.BoxGeometry(2.47, 3.52, 0.08)]} />
        <lineBasicMaterial
          color={hovered ? '#ffffff' : project.accentColor}
          linewidth={hovered ? 3 : 1}
          transparent
          opacity={hovered ? 1 : 0.4}
        />
      </lineSegments>

      {/* Cyber Corner Accents */}
      <mesh position={[-1.15, 1.68, 0.05]}>
        <boxGeometry args={[0.15, 0.15, 0.02]} />
        <meshBasicMaterial color={hovered ? '#ffffff' : project.accentColor} />
      </mesh>
      <mesh position={[1.15, 1.68, 0.05]}>
        <boxGeometry args={[0.15, 0.15, 0.02]} />
        <meshBasicMaterial color={hovered ? '#ffffff' : project.accentColor} />
      </mesh>
      <mesh position={[-1.15, -1.68, 0.05]}>
        <boxGeometry args={[0.15, 0.15, 0.02]} />
        <meshBasicMaterial color={hovered ? '#ffffff' : project.accentColor} />
      </mesh>
      <mesh position={[1.15, -1.68, 0.05]}>
        <boxGeometry args={[0.15, 0.15, 0.02]} />
        <meshBasicMaterial color={hovered ? '#ffffff' : project.accentColor} />
      </mesh>

      {/* Card UI Content in 3D Space */}
      <Html
        position={[0, 0, 0.06]}
        transform
        distanceFactor={6.8}
        zIndexRange={hovered ? [100, 50] : [10, 0]}
        className="select-none w-[275px]"
      >
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className={`p-3.5 rounded-xl flex flex-col justify-between h-[395px] transition-all duration-300 pointer-events-auto ${
            hovered
              ? 'bg-slate-950 shadow-2xl'
              : 'bg-slate-950/95 shadow-xl'
          }`}
          style={{
            border: `2px solid ${hovered ? project.accentColor : 'rgba(255, 255, 255, 0.18)'}`,
            boxShadow: hovered
              ? `0 25px 60px -12px ${project.accentColor}70, 0 0 40px ${project.accentColor}40`
              : '0 10px 25px -5px rgba(0, 0, 0, 0.5)',
          }}
        >
          {/* Top Row: Category & Status */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span
                className="px-2 py-0.5 rounded text-[10px] font-mono font-bold tracking-wider uppercase shadow-sm"
                style={{
                  backgroundColor: `${project.accentColor}25`,
                  color: project.accentColor,
                  border: `1px solid ${project.accentColor}70`,
                }}
              >
                {project.category}
              </span>

              <span className="text-[10px] font-mono text-slate-300 font-medium flex items-center gap-1">
                <Cpu className="w-3 h-3 text-cyan-400" />
                0{index + 1} / 06
              </span>
            </div>

            {/* Project Photo Preview */}
            {project.image && (
              <div className="relative w-full h-20 rounded-lg overflow-hidden mb-2 border border-slate-700 shadow-md">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
              </div>
            )}

            {/* Title */}
            <h3
              className="text-sm font-bold text-white mb-1 leading-snug tracking-tight group-hover:text-cyan-300 transition-colors drop-shadow-sm line-clamp-1"
              title={project.title}
            >
              {project.title}
            </h3>
            {/* Description */}
            <p className="text-[11px] text-slate-200 font-medium line-clamp-2 leading-relaxed mb-2">
              {project.shortDesc}
            </p>

            {/* Highlight Metrics */}
            <div className="grid grid-cols-2 gap-1.5 mb-2">
              {project.metrics.map((metric, i) => (
                <div
                  key={i}
                  className="p-1.5 rounded-lg bg-slate-900/95 border border-slate-750 shadow-sm"
                >
                  <div
                    className="text-sm font-black font-mono tracking-tight"
                    style={{ color: project.accentColor }}
                  >
                    {metric.highlight}
                  </div>
                  <div className="text-[10px] text-slate-200 font-medium font-sans truncate mt-0.5">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Area: Tech Stack & Action */}
          <div>
            {/* Tech Badges */}
            <div className="flex flex-wrap gap-1 mb-2">
              {project.techStack.slice(0, 3).map((tech, i) => (
                <span
                  key={i}
                  className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-700 text-[9px] font-mono font-medium text-slate-200"
                >
                  {tech}
                </span>
              ))}
              {project.techStack.length > 3 && (
                <span className="px-1 py-0.5 rounded bg-slate-900 border border-slate-700 text-[9px] font-mono font-medium text-slate-300">
                  +{project.techStack.length - 3}
                </span>
              )}
            </div>

            {/* Expand Case Study Trigger */}
            <button
              onClick={() => setSelectedProject(project)}
              className="w-full py-1.5 px-2 rounded-lg flex items-center justify-center gap-1.5 font-medium text-[11px] tracking-wide transition-all duration-300 shadow-md"
              style={{
                backgroundColor: hovered ? project.accentColor : 'rgba(30, 41, 59, 0.8)',
                color: hovered ? '#020617' : '#f1f5f9',
                border: `1px solid ${project.accentColor}60`,
              }}
            >
              <span className="font-semibold">Explore Case Study</span>
              <ArrowUpRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </Html>
    </group>
  );
};
