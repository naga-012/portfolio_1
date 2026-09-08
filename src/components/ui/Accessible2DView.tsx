import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { usePortfolioStore } from '../../store/usePortfolioStore';
import {
  Brain,
  Database,
  BarChart2,
  Terminal,
  Layers,
  GraduationCap,
  Briefcase,
  ExternalLink,
  Github,
  Mail,
  Linkedin,
  FileText,
  Sparkles,
  ArrowUpRight,
  TrendingUp,
  ChevronRight,
} from 'lucide-react';

export const Accessible2DView: React.FC = () => {
  const setSelectedProject = usePortfolioStore((state) => state.setSelectedProject);
  const setResumeModalOpen = usePortfolioStore((state) => state.setResumeModalOpen);
  const setContactModalOpen = usePortfolioStore((state) => state.setContactModalOpen);
  const is3DMode = usePortfolioStore((state) => state.is3DMode);

  return (
    <div
      className={`min-h-screen text-slate-100 py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-24 transition-opacity duration-500 ${
        is3DMode ? 'sr-only' : 'relative z-10'
      }`}
      aria-label="Accessible Portfolio Overview"
    >
      {/* Hero Section */}
      <section id="hero" className="text-center pt-8 space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          {portfolioData.identity.status}
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
          <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400 bg-clip-text text-transparent">
            {portfolioData.identity.name}
          </span>
        </h1>

        <p className="text-xl sm:text-2xl font-semibold text-slate-200">
          {portfolioData.identity.title}
        </p>

        <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-400 font-mono">
          {portfolioData.identity.tagline}
        </p>

        <p className="max-w-3xl mx-auto text-sm text-slate-300 leading-relaxed font-sans">
          {portfolioData.identity.bio}
        </p>

        <div className="flex flex-wrap justify-center gap-3 pt-4">
          <button
            onClick={() => setContactModalOpen(true)}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm font-mono shadow-lg shadow-cyan-500/20"
          >
            Get In Touch
          </button>
          <button
            onClick={() => setResumeModalOpen(true)}
            className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 text-sm font-mono flex items-center gap-2"
          >
            <FileText className="w-4 h-4 text-purple-400" />
            <span>View Resumes</span>
          </button>
        </div>
      </section>

      {/* Key Stats Counter */}
      <section className="grid grid-cols-2 md:grid-cols-5 gap-3">
        {portfolioData.stats.map((st) => (
          <div
            key={st.id}
            className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 text-center"
          >
            <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400 font-mono mb-1">
              {st.value}
            </div>
            <div className="text-xs font-semibold text-slate-200 mb-1">{st.label}</div>
            <div className="text-[11px] text-slate-400 leading-tight">{st.description}</div>
          </div>
        ))}
      </section>

      {/* About & Education */}
      <section id="about" className="space-y-6">
        <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono">
          <Sparkles className="w-4 h-4" /> 02 // BACKGROUND & EDUCATION
        </div>
        <h2 className="text-3xl font-extrabold text-white">Profile & Foundations</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-3xl bg-slate-900/50 border border-slate-800">
            <div className="flex items-center gap-2 text-cyan-400 font-semibold text-sm mb-2">
              <GraduationCap className="w-5 h-5" /> Education
            </div>
            <h3 className="text-lg font-bold text-white">{portfolioData.education.degree}</h3>
            <p className="text-slate-300 text-xs mt-1">{portfolioData.education.institution}</p>
            <div className="flex justify-between text-xs text-cyan-300 font-mono mt-3 mb-4">
              <span>{portfolioData.education.period}</span>
              <span>Cumulative GPA: {portfolioData.education.gpa}</span>
            </div>
            <ul className="space-y-1.5 text-xs text-slate-400 list-disc list-inside">
              {portfolioData.education.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          </div>

          <div className="p-6 rounded-3xl bg-slate-900/50 border border-slate-800">
            <div className="flex items-center gap-2 text-purple-400 font-semibold text-sm mb-2">
              <Briefcase className="w-5 h-5" /> Experience
            </div>
            <h3 className="text-lg font-bold text-white">{portfolioData.experience[0].role}</h3>
            <p className="text-slate-300 text-xs mt-1">{portfolioData.experience[0].company} • {portfolioData.experience[0].location}</p>
            <div className="flex justify-between text-xs text-purple-300 font-mono mt-3 mb-4">
              <span>{portfolioData.experience[0].period}</span>
              <span className="text-emerald-400">{portfolioData.experience[0].status}</span>
            </div>
            <ul className="space-y-1.5 text-xs text-slate-400">
              {portfolioData.experience[0].achievements.slice(0, 3).map((ach, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-purple-400">•</span>
                  <span>{ach}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Technical Skills Clusters */}
      <section id="skills" className="space-y-6">
        <div className="flex items-center gap-2 text-purple-400 text-xs font-mono">
          <Terminal className="w-4 h-4" /> 03 // SKILL CONSTELLATIONS
        </div>
        <h2 className="text-3xl font-extrabold text-white">Technical Arsenal</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {portfolioData.skillCategories.map((cat) => (
            <div
              key={cat.id}
              className="p-5 rounded-3xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between"
            >
              <div>
                <div
                  className="text-xs font-mono font-bold uppercase mb-1"
                  style={{ color: cat.color }}
                >
                  {cat.name}
                </div>
                <p className="text-[11px] text-slate-400 mb-4">{cat.tagline}</p>
                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((s, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-lg bg-slate-950/80 border border-slate-800 text-xs font-mono text-slate-300"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="space-y-8">
        <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono">
          <Layers className="w-4 h-4" /> 04 // FEATURED WORK & CAPSTONES
        </div>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-extrabold text-white">Engineered Systems</h2>
            <p className="text-xs text-slate-400 font-mono mt-1">
              Select any project to explore full architectural breakdowns, problems, and metrics
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioData.projects.map((proj, idx) => (
            <div
              key={proj.id}
              onClick={() => setSelectedProject(proj)}
              className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span
                    className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold"
                    style={{
                      backgroundColor: `${proj.accentColor}15`,
                      color: proj.accentColor,
                      border: `1px solid ${proj.accentColor}40`,
                    }}
                  >
                    {proj.category}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">0{idx + 1}</span>
                </div>

                {proj.image && (
                  <div className="relative w-full h-44 rounded-2xl overflow-hidden mb-4 border border-slate-800/80 group-hover:border-slate-700 transition-all">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  </div>
                )}

                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                  {proj.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {proj.shortDesc}
                </p>

                <div className="grid grid-cols-2 gap-2 mb-4">
                  {proj.metrics.map((m, i) => (
                    <div key={i} className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800/80">
                      <div className="text-sm font-extrabold font-mono" style={{ color: proj.accentColor }}>
                        {m.highlight}
                      </div>
                      <div className="text-[10px] text-slate-400">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {proj.techStack.map((t, i) => (
                    <span key={i} className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-[10px] font-mono text-slate-400">
                      {t}
                    </span>
                  ))}
                </div>

                {proj.links.patientLive && proj.links.doctorLive && (
                  <div className="flex items-center gap-2 mb-3" onClick={(e) => e.stopPropagation()}>
                    <a
                      href={proj.links.patientLive}
                      target="_blank"
                      rel="noreferrer"
                      className="px-2.5 py-1 rounded-lg bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-500/40 text-cyan-300 text-[10px] font-mono flex items-center gap-1 transition-all"
                    >
                      Patient App <ArrowUpRight className="w-3 h-3" />
                    </a>
                    <a
                      href={proj.links.doctorLive}
                      target="_blank"
                      rel="noreferrer"
                      className="px-2.5 py-1 rounded-lg bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/40 text-emerald-300 text-[10px] font-mono flex items-center gap-1 transition-all"
                    >
                      Doctor Portal <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                )}

                {proj.links.customerLive && proj.links.adminLive && (
                  <div className="flex items-center gap-2 mb-3" onClick={(e) => e.stopPropagation()}>
                    <a
                      href={proj.links.customerLive}
                      target="_blank"
                      rel="noreferrer"
                      className="px-2.5 py-1 rounded-lg border text-[10px] font-mono flex items-center gap-1 transition-all"
                      style={{
                        backgroundColor: `${proj.accentColor}15`,
                        borderColor: `${proj.accentColor}40`,
                        color: proj.accentColor,
                      }}
                    >
                      {proj.id === 'mensverse-3d' ? 'Customer Store' : 'Ordering App'} <ArrowUpRight className="w-3 h-3" />
                    </a>
                    <a
                      href={proj.links.adminLive}
                      target="_blank"
                      rel="noreferrer"
                      className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-750 border border-slate-700 text-slate-300 text-[10px] font-mono flex items-center gap-1 transition-all"
                    >
                      {proj.id === 'inti-ruchi' ? 'Kitchen Admin' : 'Admin Portal'} <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                )}

                <div className="flex items-center justify-between pt-3 border-t border-slate-800/80 text-xs font-mono">
                  <span className="text-cyan-400 flex items-center gap-1 group-hover:underline">
                    Inspect Full Case Study <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-300" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="p-8 rounded-3xl bg-slate-900/40 border border-slate-800 text-center space-y-4">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Let's Connect</h2>
        <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
          Currently seeking full-time roles in AI Full Stack Engineering and Data Analytics.
        </p>

        <div className="flex justify-center gap-3 pt-2">
          <button
            onClick={() => setContactModalOpen(true)}
            className="px-6 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs font-mono transition-colors"
          >
            Launch Message Form
          </button>
          <a
            href={`mailto:${portfolioData.identity.email}`}
            className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-mono transition-colors"
          >
            Direct Email
          </a>
        </div>
      </section>
    </div>
  );
};
