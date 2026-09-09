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
  Phone,
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
      className={`min-h-screen text-slate-100 py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-16 transition-opacity duration-500 ${
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

        {/* START Contact Channels: LinkedIn, GitHub, Gmail, Phone */}
        <div className="pt-4 max-w-4xl mx-auto w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-left">
            {/* LinkedIn */}
            <a
              href={portfolioData.identity.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-3.5 rounded-2xl bg-slate-900/95 hover:bg-[#0077B5]/20 border border-slate-800 hover:border-[#0077B5] flex items-center gap-3 transition-all group shadow-md"
            >
              <div className="w-10 h-10 rounded-xl bg-[#0077B5]/20 flex items-center justify-center text-[#00A0DC] shrink-0">
                <Linkedin className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">LinkedIn</div>
                <div className="text-xs font-bold text-white group-hover:text-[#00A0DC] truncate">nagarjun-myakala-</div>
              </div>
            </a>

            {/* GitHub */}
            <a
              href={portfolioData.identity.github}
              target="_blank"
              rel="noreferrer"
              className="p-3.5 rounded-2xl bg-slate-900/95 hover:bg-slate-800 border border-slate-800 hover:border-slate-600 flex items-center gap-3 transition-all group shadow-md"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-slate-200 shrink-0">
                <Github className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">GitHub</div>
                <div className="text-xs font-bold text-white group-hover:text-cyan-300 truncate">naga-012</div>
              </div>
            </a>

            {/* Gmail */}
            <a
              href={`mailto:${portfolioData.identity.email}`}
              className="p-3.5 rounded-2xl bg-slate-900/95 hover:bg-rose-500/20 border border-slate-800 hover:border-rose-500/60 flex items-center gap-3 transition-all group shadow-md"
            >
              <div className="w-10 h-10 rounded-xl bg-rose-500/15 flex items-center justify-center text-rose-400 shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Gmail Direct</div>
                <div className="text-xs font-bold text-white group-hover:text-rose-300 truncate">{portfolioData.identity.email}</div>
              </div>
            </a>

            {/* Phone */}
            <a
              href={`tel:${portfolioData.identity.phone}`}
              className="p-3.5 rounded-2xl bg-slate-900/95 hover:bg-emerald-500/20 border border-slate-800 hover:border-emerald-500/60 flex items-center gap-3 transition-all group shadow-md"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-500/15 flex items-center justify-center text-emerald-400 shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Phone / Call</div>
                <div className="text-xs font-bold text-white group-hover:text-emerald-300 truncate">{portfolioData.identity.phone}</div>
              </div>
            </a>
          </div>
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
                  <div className="flex flex-wrap items-center gap-2 mb-3" onClick={(e) => e.stopPropagation()}>
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
                    {proj.links.patientGithub && (
                      <a
                        href={proj.links.patientGithub}
                        target="_blank"
                        rel="noreferrer"
                        className="px-2 py-1 rounded-lg bg-slate-950/80 hover:bg-slate-800 border border-slate-700 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-300 text-[10px] font-mono flex items-center gap-1 transition-all"
                        title="Patient Booking GitHub Repository"
                      >
                        <Github className="w-3 h-3" /> Patient Repo
                      </a>
                    )}
                    {proj.links.doctorGithub && (
                      <a
                        href={proj.links.doctorGithub}
                        target="_blank"
                        rel="noreferrer"
                        className="px-2 py-1 rounded-lg bg-slate-950/80 hover:bg-slate-800 border border-slate-700 hover:border-emerald-500/40 text-slate-300 hover:text-emerald-300 text-[10px] font-mono flex items-center gap-1 transition-all"
                        title="Doctor Portal GitHub Repository"
                      >
                        <Github className="w-3 h-3" /> Doctor Repo
                      </a>
                    )}
                  </div>
                )}

                {proj.links.customerLive && proj.links.adminLive && (
                  <div className="flex flex-wrap items-center gap-2 mb-3" onClick={(e) => e.stopPropagation()}>
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
                    {proj.links.customerGithub && proj.links.adminGithub ? (
                      <>
                        <a
                          href={proj.links.customerGithub}
                          target="_blank"
                          rel="noreferrer"
                          className="px-2 py-1 rounded-lg bg-slate-950/80 hover:bg-slate-800 border border-slate-700 hover:border-emerald-500/40 text-slate-300 hover:text-emerald-300 text-[10px] font-mono flex items-center gap-1 transition-all"
                          title="Customer App GitHub Repository"
                        >
                          <Github className="w-3 h-3 text-emerald-400" /> Customer Repo
                        </a>
                        <a
                          href={proj.links.adminGithub}
                          target="_blank"
                          rel="noreferrer"
                          className="px-2 py-1 rounded-lg bg-slate-950/80 hover:bg-slate-800 border border-slate-700 hover:border-teal-500/40 text-slate-300 hover:text-teal-300 text-[10px] font-mono flex items-center gap-1 transition-all"
                          title="Kitchen Admin GitHub Repository"
                        >
                          <Github className="w-3 h-3 text-teal-400" /> Admin Repo
                        </a>
                      </>
                    ) : proj.links.github ? (
                      <a
                        href={proj.links.github}
                        target="_blank"
                        rel="noreferrer"
                        className="px-2 py-1 rounded-lg bg-slate-950/80 hover:bg-slate-800 border border-slate-700 hover:border-slate-500 text-slate-300 text-[10px] font-mono flex items-center gap-1 transition-all"
                        title="GitHub Repository"
                      >
                        <Github className="w-3 h-3" /> Repo
                      </a>
                    ) : null}
                  </div>
                )}

                {!proj.links.patientLive && !proj.links.customerLive && (proj.links.demo || proj.links.github) && (
                  <div className="flex flex-wrap items-center gap-2 mb-3" onClick={(e) => e.stopPropagation()}>
                    {proj.links.demo && (
                      <a
                        href={proj.links.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="px-2.5 py-1 rounded-lg bg-purple-500/15 hover:bg-purple-500/25 border border-purple-500/40 text-purple-300 text-[10px] font-mono flex items-center gap-1 transition-all"
                      >
                        Live Demo <ArrowUpRight className="w-3 h-3" />
                      </a>
                    )}
                    {proj.links.github && (
                      <a
                        href={proj.links.github}
                        target="_blank"
                        rel="noreferrer"
                        className="px-2 py-1 rounded-lg bg-slate-950/80 hover:bg-slate-800 border border-slate-700 hover:border-slate-500 text-slate-300 text-[10px] font-mono flex items-center gap-1 transition-all"
                        title="GitHub Repository"
                      >
                        <Github className="w-3 h-3" /> Repo
                      </a>
                    )}
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
          Currently seeking full-time roles in AI Full Stack Engineering and Data Analytics. Reach out directly:
        </p>

        {/* Direct Connect Grid: LinkedIn, GitHub, Gmail, Phone (LAST) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto pt-2 text-left">
          <a
            href={portfolioData.identity.linkedin}
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-2xl bg-slate-900/80 hover:bg-[#0077B5]/20 border border-slate-800 hover:border-[#0077B5] flex items-center gap-3 transition-all group"
          >
            <div className="w-9 h-9 rounded-xl bg-[#0077B5]/20 flex items-center justify-center text-[#00A0DC] shrink-0">
              <Linkedin className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <div className="text-[10px] font-mono text-slate-400">LinkedIn</div>
              <div className="text-xs font-bold text-white group-hover:text-[#00A0DC] truncate">nagarjun-myakala-</div>
            </div>
          </a>

          <a
            href={portfolioData.identity.github}
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-2xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-500 flex items-center gap-3 transition-all group"
          >
            <div className="w-9 h-9 rounded-xl bg-slate-800 flex items-center justify-center text-slate-200 shrink-0">
              <Github className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <div className="text-[10px] font-mono text-slate-400">GitHub</div>
              <div className="text-xs font-bold text-white group-hover:text-cyan-300 truncate">naga-012</div>
            </div>
          </a>

          <a
            href={`mailto:${portfolioData.identity.email}`}
            className="p-3 rounded-2xl bg-slate-900/80 hover:bg-rose-500/20 border border-slate-800 hover:border-rose-500/60 flex items-center gap-3 transition-all group"
          >
            <div className="w-9 h-9 rounded-xl bg-rose-500/15 flex items-center justify-center text-rose-400 shrink-0">
              <Mail className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <div className="text-[10px] font-mono text-slate-400">Gmail</div>
              <div className="text-xs font-bold text-white group-hover:text-rose-300 truncate">{portfolioData.identity.email}</div>
            </div>
          </a>

          <a
            href={`tel:${portfolioData.identity.phone}`}
            className="p-3 rounded-2xl bg-slate-900/80 hover:bg-emerald-500/20 border border-slate-800 hover:border-emerald-500/60 flex items-center gap-3 transition-all group"
          >
            <div className="w-9 h-9 rounded-xl bg-emerald-500/15 flex items-center justify-center text-emerald-400 shrink-0">
              <Phone className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <div className="text-[10px] font-mono text-slate-400">Phone / WhatsApp</div>
              <div className="text-xs font-bold text-white group-hover:text-emerald-300 truncate">{portfolioData.identity.phone}</div>
            </div>
          </a>
        </div>

        <div className="flex justify-center gap-3 pt-3">
          <button
            onClick={() => setContactModalOpen(true)}
            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs font-mono shadow-md transition-colors"
          >
            Launch Message Form
          </button>
        </div>
      </section>

      {/* 2D Mode Persistent Footer */}
      <footer className="border-t border-slate-800/80 pt-10 pb-20 text-center space-y-6">
        <div className="flex items-center justify-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-slate-900 border border-cyan-500/40 flex items-center justify-center font-bold text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-purple-400 text-sm">
            NM
          </div>
          <span className="text-sm font-bold text-white">{portfolioData.identity.name}</span>
          <span className="text-slate-600">•</span>
          <span className="text-xs font-mono text-cyan-400">{portfolioData.identity.title}</span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono">
          <a
            href={portfolioData.identity.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-slate-300 hover:text-[#00A0DC] transition-colors"
          >
            <Linkedin className="w-4 h-4 text-[#00A0DC]" /> LinkedIn
          </a>
          <span className="text-slate-700">•</span>
          <a
            href={portfolioData.identity.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
          >
            <Github className="w-4 h-4" /> GitHub
          </a>
          <span className="text-slate-700">•</span>
          <a
            href={`mailto:${portfolioData.identity.email}`}
            className="flex items-center gap-1.5 text-slate-300 hover:text-rose-400 transition-colors"
          >
            <Mail className="w-4 h-4 text-rose-400" /> {portfolioData.identity.email}
          </a>
          <span className="text-slate-700">•</span>
          <a
            href={`tel:${portfolioData.identity.phone}`}
            className="flex items-center gap-1.5 text-slate-300 hover:text-emerald-400 transition-colors"
          >
            <Phone className="w-4 h-4 text-emerald-400" /> {portfolioData.identity.phone}
          </a>
        </div>

        <p className="text-[11px] font-mono text-slate-500">
          © {new Date().getFullYear()} Nagarjun Myakala. Hyderabad, Telangana, India. All rights reserved.
        </p>
      </footer>

      {/* 2D Mode Floating Quick Connect Dock */}
      {!is3DMode && (
        <aside
          aria-label="Quick contact channels"
          className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 flex items-center gap-2 px-4 py-2 rounded-full bg-slate-950/95 border border-cyan-500/40 backdrop-blur-2xl shadow-2xl pointer-events-auto select-none"
        >
          <a
            href={portfolioData.identity.linkedin}
            target="_blank"
            rel="noreferrer"
            title="LinkedIn Profile"
            className="p-2 rounded-full bg-slate-900/90 text-[#00A0DC] hover:bg-[#0077B5]/30 transition-all hover:scale-110"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={portfolioData.identity.github}
            target="_blank"
            rel="noreferrer"
            title="GitHub Codebase"
            className="p-2 rounded-full bg-slate-900/90 text-white hover:bg-slate-800 transition-all hover:scale-110"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${portfolioData.identity.email}`}
            title={`Email: ${portfolioData.identity.email}`}
            className="p-2 rounded-full bg-slate-900/90 text-rose-400 hover:bg-rose-500/30 transition-all hover:scale-110"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href={`tel:${portfolioData.identity.phone}`}
            title={`Call / WhatsApp: ${portfolioData.identity.phone}`}
            className="p-2 rounded-full bg-slate-900/90 text-emerald-400 hover:bg-emerald-500/30 transition-all hover:scale-110"
          >
            <Phone className="w-4 h-4" />
          </a>
          <div className="h-4 w-px bg-slate-800 mx-1" />
          <button
            onClick={() => setContactModalOpen(true)}
            className="px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-xs font-mono hover:from-cyan-400 hover:to-blue-500 transition-all"
          >
            Connect
          </button>
        </aside>
      )}
    </div>
  );
};
