import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePortfolioStore } from '../../store/usePortfolioStore';
import {
  X,
  ExternalLink,
  Github,
  CheckCircle,
  AlertCircle,
  Cpu,
  Layers,
  Sparkles,
  TrendingUp,
} from 'lucide-react';

export const ProjectModal: React.FC = () => {
  const selectedProject = usePortfolioStore((state) => state.selectedProject);
  const setSelectedProject = usePortfolioStore((state) => state.setSelectedProject);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [setSelectedProject]);

  if (!selectedProject) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedProject(null)}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ scale: 0.92, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 15 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl rounded-3xl bg-slate-950/95 border border-slate-700/80 shadow-2xl z-10 overflow-hidden my-8"
          style={{
            boxShadow: `0 0 40px ${selectedProject.accentColor}25`,
          }}
        >
          {/* Glowing Top Accent Line */}
          <div
            className="h-1.5 w-full"
            style={{
              background: `linear-gradient(90deg, ${selectedProject.accentColor}, #8B5CF6)`,
            }}
          />

          {/* Close Button */}
          <button
            onClick={() => setSelectedProject(null)}
            className="absolute top-5 right-5 p-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors z-20"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="p-6 sm:p-8 max-h-[85vh] overflow-y-auto">
            {/* Project Photo / Mockup Banner */}
            {selectedProject.image && (
              <div className="relative w-full h-56 sm:h-72 rounded-2xl overflow-hidden mb-6 border border-slate-700/80 shadow-2xl group">
                <img
                  src={selectedProject.image}
                  alt={`${selectedProject.title} screenshot`}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-3 left-4 flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-md border border-slate-700 text-[11px] font-mono text-cyan-300">
                    Interactive Interface Preview
                  </span>
                </div>
              </div>
            )}

            {/* Category & Badge */}
            <div className="flex items-center gap-2 mb-3">
              <span
                className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider"
                style={{
                  backgroundColor: `${selectedProject.accentColor}20`,
                  color: selectedProject.accentColor,
                  border: `1px solid ${selectedProject.accentColor}50`,
                }}
              >
                {selectedProject.category}
              </span>
              <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                Case Study In-Depth
              </span>
            </div>

            {/* Title & Subtitle */}
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
              {selectedProject.title}
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed mb-6 font-sans">
              {selectedProject.shortDesc}
            </p>

            {/* High-Impact Metrics Grid */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {selectedProject.metrics.map((metric, i) => (
                <div
                  key={i}
                  className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-center gap-3"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg font-mono shrink-0"
                    style={{
                      backgroundColor: `${selectedProject.accentColor}15`,
                      color: selectedProject.accentColor,
                    }}
                  >
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <div
                      className="text-xl font-extrabold font-mono"
                      style={{ color: selectedProject.accentColor }}
                    >
                      {metric.highlight}
                    </div>
                    <div className="text-xs text-slate-400">{metric.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* 3 Pillars: Problem, Approach, Result */}
            <div className="space-y-6 mb-8">
              {/* Problem */}
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/50 border border-red-500/20">
                <div className="flex items-center gap-2 text-red-400 text-xs font-mono font-bold mb-2 uppercase">
                  <AlertCircle className="w-4 h-4" /> 01. The Challenge & Problem
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {selectedProject.problem}
                </p>
              </div>

              {/* Approach */}
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/50 border border-cyan-500/20">
                <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono font-bold mb-2 uppercase">
                  <Cpu className="w-4 h-4" /> 02. Architecture & Approach
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {selectedProject.approach}
                </p>
              </div>

              {/* Result */}
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/50 border border-emerald-500/20">
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-bold mb-2 uppercase">
                  <CheckCircle className="w-4 h-4" /> 03. Outcome & Business Impact
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {selectedProject.result}
                </p>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="mb-8">
              <div className="text-xs font-mono text-slate-400 mb-3 uppercase tracking-wider flex items-center gap-2">
                <Layers className="w-3.5 h-3.5 text-purple-400" /> Technologies & Tools Applied
              </div>
              <div className="flex flex-wrap gap-2">
                {selectedProject.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Links */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-6 border-t border-slate-800">
              <div className="flex flex-wrap items-center gap-3">
                {selectedProject.links.github && (
                  <a
                    href={selectedProject.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 text-xs font-mono flex items-center gap-2 transition-all hover:border-slate-500"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Repository</span>
                  </a>
                )}
                {selectedProject.links.patientLive && (
                  <a
                    href={selectedProject.links.patientLive}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2.5 rounded-xl text-slate-950 font-bold text-xs font-mono flex items-center gap-2 transition-all shadow-lg shadow-cyan-500/25 bg-cyan-400 hover:bg-cyan-300"
                  >
                    <span>Patient Booking App</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                {selectedProject.links.doctorLive && (
                  <a
                    href={selectedProject.links.doctorLive}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2.5 rounded-xl text-white font-bold text-xs font-mono flex items-center gap-2 transition-all shadow-lg shadow-emerald-500/25 bg-emerald-600 hover:bg-emerald-500 border border-emerald-400/40"
                  >
                    <span>Doctor Portal App</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                {selectedProject.links.customerLive && (
                  <a
                    href={selectedProject.links.customerLive}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2.5 rounded-xl text-white font-bold text-xs font-mono flex items-center gap-2 transition-all shadow-lg shadow-purple-500/25 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 border border-purple-400/40"
                  >
                    <span>Customer 3D Store</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                {selectedProject.links.adminLive && (
                  <a
                    href={selectedProject.links.adminLive}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2.5 rounded-xl text-slate-200 hover:text-white font-bold text-xs font-mono flex items-center gap-2 transition-all shadow-lg bg-slate-900 hover:bg-slate-800 border border-purple-500/30"
                  >
                    <span>Admin Dashboard</span>
                    <ExternalLink className="w-4 h-4 text-purple-400" />
                  </a>
                )}
                {!selectedProject.links.patientLive && !selectedProject.links.customerLive && selectedProject.links.live && (
                  <a
                    href={selectedProject.links.live}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2.5 rounded-xl text-slate-950 font-bold text-xs font-mono flex items-center gap-2 transition-all shadow-lg shadow-cyan-500/20"
                    style={{
                      backgroundColor: selectedProject.accentColor,
                    }}
                  >
                    <span>Live Interactive Demo</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                {selectedProject.links.demo && (
                  <a
                    href={selectedProject.links.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs font-mono flex items-center gap-2 transition-all shadow-lg shadow-purple-500/20"
                  >
                    <span>Live Demo App</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>

              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 rounded-xl text-xs font-mono text-slate-400 hover:text-white"
              >
                Close Case Study
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
