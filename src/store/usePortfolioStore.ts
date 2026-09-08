import { create } from 'zustand';
import { ProjectItem, ZoneId } from '../types/portfolio';

export interface ZoneCameraConfig {
  position: [number, number, number];
  target: [number, number, number];
}

export const ZONE_CAMERAS: Record<ZoneId, ZoneCameraConfig> = {
  hero: {
    position: [0, 1.2, 8.5],
    target: [0, 0, 0],
  },
  about: {
    position: [-16, 1.5, 7.5],
    target: [-16, 0, -1],
  },
  skills: {
    position: [-14, -10, 8],
    target: [-14, -10.5, 0],
  },
  projects: {
    position: [16, 1.2, 10.5],
    target: [16, 0, 0],
  },
  experience: {
    position: [15, -10, 8.5],
    target: [15, -10.5, 0],
  },
  contact: {
    position: [0, -12.5, 8.5],
    target: [0, -13, 0],
  },
};

export const ZONE_ORDER: ZoneId[] = ['hero', 'about', 'skills', 'projects', 'experience', 'contact'];

interface PortfolioState {
  currentZone: ZoneId;
  previousZone: ZoneId;
  isTransitioning: boolean;
  selectedProject: ProjectItem | null;
  resumeModalOpen: boolean;
  contactModalOpen: boolean;
  is3DMode: boolean;
  isMobile: boolean;
  soundEnabled: boolean;
  
  // Actions
  setZone: (zone: ZoneId) => void;
  nextZone: (clamp?: boolean) => void;
  prevZone: (clamp?: boolean) => void;
  setSelectedProject: (project: ProjectItem | null) => void;
  setResumeModalOpen: (open: boolean) => void;
  setContactModalOpen: (open: boolean) => void;
  setIs3DMode: (enabled: boolean) => void;
  toggle3DMode: () => void;
  setIsMobile: (isMobile: boolean) => void;
  toggleSound: () => void;
  setIsTransitioning: (status: boolean) => void;
}

export const usePortfolioStore = create<PortfolioState>((set, get) => ({
  currentZone: 'hero',
  previousZone: 'hero',
  isTransitioning: false,
  selectedProject: null,
  resumeModalOpen: false,
  contactModalOpen: false,
  is3DMode: true,
  isMobile: false,
  soundEnabled: false,

  setZone: (zone: ZoneId) => {
    const current = get().currentZone;
    if (current === zone) return;
    set({
      previousZone: current,
      currentZone: zone,
      isTransitioning: true,
    });
  },

  nextZone: (clamp: boolean = false) => {
    const currentIndex = ZONE_ORDER.indexOf(get().currentZone);
    if (clamp) {
      if (currentIndex < ZONE_ORDER.length - 1) {
        get().setZone(ZONE_ORDER[currentIndex + 1]);
      }
    } else {
      const nextIndex = (currentIndex + 1) % ZONE_ORDER.length;
      get().setZone(ZONE_ORDER[nextIndex]);
    }
  },

  prevZone: (clamp: boolean = false) => {
    const currentIndex = ZONE_ORDER.indexOf(get().currentZone);
    if (clamp) {
      if (currentIndex > 0) {
        get().setZone(ZONE_ORDER[currentIndex - 1]);
      }
    } else {
      const prevIndex = (currentIndex - 1 + ZONE_ORDER.length) % ZONE_ORDER.length;
      get().setZone(ZONE_ORDER[prevIndex]);
    }
  },

  setSelectedProject: (project: ProjectItem | null) => set({ selectedProject: project }),
  setResumeModalOpen: (open: boolean) => set({ resumeModalOpen: open }),
  setContactModalOpen: (open: boolean) => set({ contactModalOpen: open }),
  setIs3DMode: (enabled: boolean) => set({ is3DMode: enabled }),
  toggle3DMode: () => set((state) => ({ is3DMode: !state.is3DMode })),
  setIsMobile: (isMobile: boolean) => set({ isMobile }),
  toggleSound: () => set((state) => ({ soundEnabled: !state.soundEnabled })),
  setIsTransitioning: (status: boolean) => set({ isTransitioning: status }),
}));
