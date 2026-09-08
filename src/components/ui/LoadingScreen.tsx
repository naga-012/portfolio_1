import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Cpu, Sparkles } from 'lucide-react';

export const LoadingScreen: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsDone(true), 400);
          return 100;
        }
        return prev + Math.floor(Math.random() * 18) + 8;
      });
    }, 120);

    return () => clearInterval(timer);
  }, []);

  if (isDone) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#030712] text-white select-none pointer-events-auto"
      >
        <div className="w-full max-w-md px-6 flex flex-col items-center">
          {/* Glowing Monogram Logo */}
          <div className="relative mb-6">
            <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-cyan-500/50 flex items-center justify-center font-extrabold text-2xl text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 via-sky-300 to-purple-400 shadow-xl shadow-cyan-500/20">
              NM
            </div>
            <div className="absolute -inset-1 bg-cyan-500/20 rounded-2xl blur-lg -z-10 animate-pulse" />
          </div>

          <div className="text-center mb-6">
            <h2 className="text-lg font-bold tracking-tight text-white mb-1">
              Nagarjun Myakala
            </h2>
            <div className="text-xs font-mono text-cyan-400 flex items-center justify-center gap-2">
              <Cpu className="w-3.5 h-3.5 animate-spin-slow text-cyan-400" />
              <span>INITIALIZING 3D SPATIAL RUNTIME</span>
            </div>
          </div>

          {/* Progress Bar Container */}
          <div className="w-full h-1.5 rounded-full bg-slate-900 border border-slate-800 overflow-hidden mb-3">
            <motion.div
              className="h-full bg-gradient-to-r from-cyan-500 via-sky-400 to-purple-500 rounded-full"
              style={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ ease: 'easeOut' }}
            />
          </div>

          {/* Terminal log ticker */}
          <div className="w-full flex items-center justify-between text-[11px] font-mono text-slate-500">
            <span>
              {progress < 30 && 'Mounting WebGL 2.0 viewport...'}
              {progress >= 30 && progress < 70 && 'Compiling spatial neural shaders...'}
              {progress >= 70 && progress < 100 && 'Synchronizing telemetry metrics...'}
              {progress >= 100 && 'Ready to initialize experience.'}
            </span>
            <span className="text-cyan-400 font-bold">{Math.min(progress, 100)}%</span>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
