import React, { useEffect } from 'react';
import { usePortfolioStore } from './store/usePortfolioStore';
import { PortfolioCanvas } from './components/canvas/PortfolioCanvas';
import { Navbar } from './components/ui/Navbar';
import { ZoneNavigation } from './components/ui/ZoneNavigation';
import { ProjectModal } from './components/ui/ProjectModal';
import { ResumeModal } from './components/ui/ResumeModal';
import { ContactModal } from './components/ui/ContactModal';
import { Accessible2DView } from './components/ui/Accessible2DView';
import { LoadingScreen } from './components/ui/LoadingScreen';
import { ScrollIndicator } from './components/ui/ScrollIndicator';
import { useScrollNavigation } from './hooks/useScrollNavigation';

export const App: React.FC = () => {
  const is3DMode = usePortfolioStore((state) => state.is3DMode);
  const setIsMobile = usePortfolioStore((state) => state.setIsMobile);
  const setIs3DMode = usePortfolioStore((state) => state.setIs3DMode);

  // Responsive device check
  useEffect(() => {
    const checkDevice = () => {
      const isSmallScreen = window.innerWidth < 768;
      setIsMobile(isSmallScreen);
      // If mobile on initial load, default to 2D view for smoothest battery and touch experience
      if (isSmallScreen) {
        setIs3DMode(false);
      }
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, [setIsMobile, setIs3DMode]);

  // Enable smooth mouse wheel, trackpad, touch swipe, and keyboard zone navigation
  useScrollNavigation();

  return (
    <main className="relative min-h-screen bg-[#030712] text-slate-100 overflow-x-hidden selection:bg-cyan-500 selection:text-black">
      {/* 3D Asset Boot Loader */}
      <LoadingScreen />

      {/* Persistent Navigation Header */}
      <Navbar />

      {/* 3D WebGL Spatial Canvas */}
      {is3DMode && <PortfolioCanvas />}

      {/* Side Zone Dot Navigator for 3D Scene */}
      <ZoneNavigation />

      {/* Interactive Bottom Scroll Wheel Indicator */}
      <ScrollIndicator />

      {/* Accessible / 2D High Performance View (always accessible for screen readers & SEO) */}
      <Accessible2DView />

      {/* Modals & Overlays */}
      <ProjectModal />
      <ResumeModal />
      <ContactModal />
    </main>
  );
};

export default App;
