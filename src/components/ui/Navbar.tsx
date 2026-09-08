import React from 'react';
import { usePortfolioStore } from '../../store/usePortfolioStore';
import { portfolioData } from '../../data/portfolioData';
import { ZoneId } from '../../types/portfolio';
import {
  FileText,
  Send,
  Eye,
  Layers,
  Sparkles,
  Compass,
  Code2,
  Linkedin,
  Github,
  Mail,
  Phone
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const currentZone = usePortfolioStore((state) => state.currentZone);
  const setZone = usePortfolioStore((state) => state.setZone);
  const setResumeModalOpen = usePortfolioStore((state) => state.setResumeModalOpen);
  const setContactModalOpen = usePortfolioStore((state) => state.setContactModalOpen);
  const is3DMode = usePortfolioStore((state) => state.is3DMode);
  const toggle3DMode = usePortfolioStore((state) => state.toggle3DMode);

  const navItems: { id: ZoneId; label: string }[] = [
    { id: 'hero', label: 'Nexus' },
    { id: 'about', label: 'Profile' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 py-3 md:px-8 pointer-events-auto">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Monogram */}
        <button
          onClick={() => setZone('hero')}
          className="flex items-center gap-3 group text-left"
        >
          <div className="w-10 h-10 rounded-xl bg-slate-900 border border-cyan-500/40 flex items-center justify-center font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-purple-400 text-base shadow-lg shadow-cyan-500/10 group-hover:border-cyan-400 transition-all">
            NM
          </div>
          <div className="hidden sm:block">
            <div className="text-sm font-bold text-white tracking-wide group-hover:text-cyan-300 transition-colors">
              {portfolioData.identity.name}
            </div>
            <div className="text-[10px] font-mono text-cyan-400">
              AI Full Stack & Data Analyst
            </div>
          </div>
        </button>

        {/* Central Nav Links (Glass bar) */}
        <nav className="hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full bg-slate-950/70 border border-slate-800/80 backdrop-blur-xl shadow-xl">
          {navItems.map((item) => {
            const isActive = currentZone === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setZone(item.id);
                  if (!is3DMode) {
                    const el = document.getElementById(item.id);
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth' });
                    }
                  }
                }}
                className={`px-3 py-1 rounded-full text-xs font-mono transition-all duration-200 ${
                  isActive
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/50'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          {/* Quick Social & Contact Icons */}
          <div className="hidden lg:flex items-center gap-1 px-2 py-1 rounded-xl bg-slate-900/60 border border-slate-800 backdrop-blur-md">
            <a
              href={portfolioData.identity.linkedin}
              target="_blank"
              rel="noreferrer"
              title="LinkedIn Profile"
              className="p-1.5 rounded-lg text-slate-400 hover:text-[#00A0DC] hover:bg-[#0077B5]/20 transition-all"
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>
            <a
              href={portfolioData.identity.github}
              target="_blank"
              rel="noreferrer"
              title="GitHub Codebase"
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-all"
            >
              <Github className="w-3.5 h-3.5" />
            </a>
            <a
              href={`mailto:${portfolioData.identity.email}`}
              title={`Email: ${portfolioData.identity.email}`}
              className="p-1.5 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-rose-500/20 transition-all"
            >
              <Mail className="w-3.5 h-3.5" />
            </a>
            <a
              href={`tel:${portfolioData.identity.phone}`}
              title={`Phone: ${portfolioData.identity.phone}`}
              className="p-1.5 rounded-lg text-slate-400 hover:text-emerald-400 hover:bg-emerald-500/20 transition-all"
            >
              <Phone className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* 3D / 2D Toggle */}
          <button
            onClick={toggle3DMode}
            title={is3DMode ? 'Switch to accessible 2D view' : 'Switch to 3D spatial view'}
            className={`px-3 py-1.5 rounded-xl border text-xs font-mono flex items-center gap-1.5 backdrop-blur-md transition-all ${
              is3DMode
                ? 'bg-slate-900/80 border-cyan-500/40 text-cyan-300 hover:bg-slate-800'
                : 'bg-cyan-500 text-slate-950 font-bold border-cyan-400'
            }`}
          >
            {is3DMode ? (
              <>
                <Compass className="w-3.5 h-3.5 text-cyan-400 animate-spin-slow" />
                <span className="hidden sm:inline">3D Spatial</span>
              </>
            ) : (
              <>
                <Layers className="w-3.5 h-3.5 text-slate-950" />
                <span className="hidden sm:inline">2D View</span>
              </>
            )}
          </button>

          {/* Resumes */}
          <button
            onClick={() => setResumeModalOpen(true)}
            className="px-3 py-1.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white text-xs font-mono flex items-center gap-1.5 backdrop-blur-md transition-colors"
          >
            <FileText className="w-3.5 h-3.5 text-purple-400" />
            <span className="hidden sm:inline">Resumes</span>
          </button>

          {/* Contact */}
          <button
            onClick={() => setContactModalOpen(true)}
            className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 text-xs font-mono font-bold flex items-center gap-1.5 shadow-lg shadow-cyan-500/20 transition-all"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Connect</span>
          </button>
        </div>
      </div>
    </header>
  );
};
