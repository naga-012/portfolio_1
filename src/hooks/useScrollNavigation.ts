import { useEffect, useRef } from 'react';
import { usePortfolioStore } from '../store/usePortfolioStore';

export const useScrollNavigation = () => {
  const is3DMode = usePortfolioStore((state) => state.is3DMode);
  const nextZone = usePortfolioStore((state) => state.nextZone);
  const prevZone = usePortfolioStore((state) => state.prevZone);
  const isTransitioning = usePortfolioStore((state) => state.isTransitioning);
  const resumeModalOpen = usePortfolioStore((state) => state.resumeModalOpen);
  const contactModalOpen = usePortfolioStore((state) => state.contactModalOpen);
  const selectedProject = usePortfolioStore((state) => state.selectedProject);

  const lastScrollTime = useRef<number>(0);
  const touchStartY = useRef<number | null>(null);
  const touchStartX = useRef<number | null>(null);
  const accumulatedDelta = useRef<number>(0);

  useEffect(() => {
    // If a modal is open or not in 3D mode, let normal browser/modal scroll proceed
    const isModalOpen = resumeModalOpen || contactModalOpen || selectedProject !== null;

    if (!is3DMode || isModalOpen) {
      return;
    }

    const COOLDOWN_MS = 650;
    const DELTA_THRESHOLD = 30;

    const handleWheel = (e: WheelEvent) => {
      // Check if target is inside an interactive form or scrollable element
      const target = e.target as HTMLElement | null;
      if (target?.closest('input, textarea, select, [data-scrollable="true"]')) {
        return;
      }

      // Prevent window default bounce
      e.preventDefault();

      const now = Date.now();
      if (now - lastScrollTime.current < COOLDOWN_MS || isTransitioning) {
        return;
      }

      accumulatedDelta.current += e.deltaY;

      if (Math.abs(accumulatedDelta.current) >= DELTA_THRESHOLD) {
        if (accumulatedDelta.current > 0) {
          // Scroll Down -> Next zone (clamped)
          nextZone(true);
        } else {
          // Scroll Up -> Previous zone (clamped)
          prevZone(true);
        }
        lastScrollTime.current = now;
        accumulatedDelta.current = 0;
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        touchStartY.current = e.touches[0].clientY;
        touchStartX.current = e.touches[0].clientX;
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      // Prevent browser pull-to-refresh or page bounce while navigating 3D space
      if (touchStartY.current !== null) {
        e.preventDefault();
      }
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (touchStartY.current === null || e.changedTouches.length === 0) return;

      const deltaY = touchStartY.current - e.changedTouches[0].clientY;
      const deltaX = (touchStartX.current || 0) - e.changedTouches[0].clientX;

      // Only trigger if primarily vertical swipe
      if (Math.abs(deltaY) > Math.abs(deltaX) && Math.abs(deltaY) > 45) {
        const now = Date.now();
        if (now - lastScrollTime.current >= COOLDOWN_MS && !isTransitioning) {
          if (deltaY > 0) {
            // Swiped up -> navigate forward (downwards)
            nextZone(true);
          } else {
            // Swiped down -> navigate backwards (upwards)
            prevZone(true);
          }
          lastScrollTime.current = now;
        }
      }

      touchStartY.current = null;
      touchStartX.current = null;
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }

      const now = Date.now();
      if (now - lastScrollTime.current < COOLDOWN_MS || isTransitioning) {
        return;
      }

      if (e.key === 'ArrowDown' || e.key === 'PageDown' || (e.key === ' ' && !e.shiftKey)) {
        e.preventDefault();
        nextZone(true);
        lastScrollTime.current = now;
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp' || (e.key === ' ' && e.shiftKey)) {
        e.preventDefault();
        prevZone(true);
        lastScrollTime.current = now;
      } else if (['1', '2', '3', '4', '5', '6'].includes(e.key)) {
        const index = parseInt(e.key, 10) - 1;
        const { ZONE_ORDER, setZone } = usePortfolioStore.getState();
        if (ZONE_ORDER[index]) {
          setZone(ZONE_ORDER[index]);
          lastScrollTime.current = now;
        }
      }
    };

    // Attach wheel with non-passive listener to reliably preventDefault in 3D canvas
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [is3DMode, resumeModalOpen, contactModalOpen, selectedProject, isTransitioning, nextZone, prevZone]);
};
