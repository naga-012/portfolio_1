import React, { useEffect, useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import gsap from 'gsap';
import { usePortfolioStore, ZONE_CAMERAS } from '../../store/usePortfolioStore';

export const CameraRig: React.FC = () => {
  const { camera } = useThree();
  const currentZone = usePortfolioStore((state) => state.currentZone);
  const setIsTransitioning = usePortfolioStore((state) => state.setIsTransitioning);

  const lookAtTarget = useRef(new THREE.Vector3(0, 0, 0));
  const mouse = useRef({ x: 0, y: 0 });

  // Handle zone transition animation with GSAP
  useEffect(() => {
    const config = ZONE_CAMERAS[currentZone];
    if (!config) return;

    setIsTransitioning(true);

    const tl = gsap.timeline({
      defaults: { duration: 1.8, ease: 'power2.inOut' },
      onComplete: () => {
        setIsTransitioning(false);
      },
    });

    tl.to(camera.position, {
      x: config.position[0],
      y: config.position[1],
      z: config.position[2],
    });

    tl.to(
      lookAtTarget.current,
      {
        x: config.target[0],
        y: config.target[1],
        z: config.target[2],
      },
      '<', // sync with camera move
    );

    return () => {
      tl.kill();
    };
  }, [currentZone, camera, setIsTransitioning]);

  // Track subtle mouse movement for parallax
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.current.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame(() => {
    // Apply subtle parallax drift relative to current target
    const currentConfig = ZONE_CAMERAS[currentZone];
    if (currentConfig) {
      const targetLookX = currentConfig.target[0] + mouse.current.x * 0.35;
      const targetLookY = currentConfig.target[1] + mouse.current.y * 0.35;
      
      lookAtTarget.current.x = THREE.MathUtils.lerp(lookAtTarget.current.x, targetLookX, 0.05);
      lookAtTarget.current.y = THREE.MathUtils.lerp(lookAtTarget.current.y, targetLookY, 0.05);
      
      camera.lookAt(lookAtTarget.current);
    }
  });

  return null;
};
