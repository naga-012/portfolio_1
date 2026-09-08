import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePortfolioStore } from '../../store/usePortfolioStore';
import { portfolioData } from '../../data/portfolioData';
import {
  X,
  Download,
  FileText,
  CheckCircle2,
  Sparkles,
  Eye,
  ExternalLink,
  Layers,
} from 'lucide-react';

export const ResumeModal: React.FC = () => {
  const resumeModalOpen = usePortfolioStore((state) => state.resumeModalOpen);
  const setResumeModalOpen = usePortfolioStore((state) => state.setResumeModalOpen);
  const [selectedResumeId, setSelectedResumeId] = useState<'ai-dev' | 'data-analyst'>('ai-dev');
  const [viewMode, setViewMode] = useState<'preview' | 'overview'>('preview');

  if (!resumeModalOpen) return null;

  const currentResume = portfolioData.resumes.find((r) => r.id === selectedResumeId) || portfolioData.resumes[0];

  const handleDownload = (filename: string) => {
    const link = document.createElement('a');
    link.href = `/resumes/${filename}`;
    link.download = filename;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setResumeModalOpen(false)}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ scale: 0.94, opacity: 0, y: 15 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 10 }}
          className={`relative w-full ${
            viewMode === 'preview' ? 'max-w-4xl' : 'max-w-2xl'
          } rounded-3xl bg-slate-950/95 border border-slate-800 shadow-2xl z-10 overflow-hidden transition-all duration-300`}
        >
          {/* Header */}
          <div className="p-5 sm:p-6 border-b border-slate-800 flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono mb-1">
                <FileText className="w-4 h-4" /> CURRICULUM VITAE VIEWER
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">Interactive Resume Hub</h3>
              <p className="text-xs text-slate-400 mt-0.5">
                View in-browser or download the certified resume tailored for AI or Analytics
              </p>
            </div>
            <button
              onClick={() => setResumeModalOpen(false)}
              className="p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-white border border-slate-800 transition-colors"
              title="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Track Selection Tabs */}
          <div className="flex border-b border-slate-800 bg-slate-900/50 p-2 gap-2">
            {portfolioData.resumes.map((res) => {
              const isSelected = selectedResumeId === res.id;
              return (
                <button
                  key={res.id}
                  onClick={() => setSelectedResumeId(res.id)}
                  className={`flex-1 py-2 px-3 rounded-xl text-xs font-mono transition-all flex items-center justify-center gap-2 ${
                    isSelected
                      ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span className="truncate">{res.title}</span>
                </button>
              );
            })}
          </div>

          {/* Sub-Tabs: Live PDF vs Overview */}
          <div className="flex items-center justify-between px-5 py-2.5 bg-slate-900/30 border-b border-slate-800/70 text-xs font-mono">
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-950 border border-slate-800">
              <button
                onClick={() => setViewMode('preview')}
                className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all ${
                  viewMode === 'preview'
                    ? 'bg-cyan-500/15 text-cyan-300 font-semibold border border-cyan-500/30'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                <span>View PDF</span>
              </button>
              <button
                onClick={() => setViewMode('overview')}
                className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all ${
                  viewMode === 'overview'
                    ? 'bg-cyan-500/15 text-cyan-300 font-semibold border border-cyan-500/30'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Summary & Skills</span>
              </button>
            </div>

            <a
              href={`/resumes/${currentResume.filename}`}
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-cyan-300 flex items-center gap-1.5 transition-colors py-1 px-2.5 rounded-lg hover:bg-slate-800"
              title="Open full PDF in a dedicated browser tab"
            >
              <span>Open in Full Tab</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Main Content Area */}
          <div className="p-4 sm:p-6">
            {viewMode === 'preview' ? (
              <div className="space-y-3">
                {/* Embedded PDF Viewer */}
                <div className="relative w-full h-[62vh] min-h-[480px] rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl">
                  <iframe
                    src={`/resumes/${currentResume.filename}#toolbar=1&navpanes=0`}
                    className="w-full h-full border-0 bg-white"
                    title={`${currentResume.title} Preview`}
                  />
                </div>
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 px-1">
                  <span>Document: {currentResume.filename}</span>
                  <a
                    href={`/resumes/${currentResume.filename}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-cyan-400 hover:underline flex items-center gap-1"
                  >
                    Trouble viewing? Click to open directly <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ) : (
              <div>
                <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800 mb-6">
                  <div className="text-xs font-mono text-cyan-400 font-semibold mb-1">
                    PROFILE FOCUS & TARGET SCOPE
                  </div>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                    {currentResume.summary}
                  </p>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                    Key Track Competencies Included:
                  </div>
                  {currentResume.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-500/20 flex items-center justify-between">
                  <div className="text-xs text-cyan-200">
                    Want to inspect the complete 1-page layout?
                  </div>
                  <button
                    onClick={() => setViewMode('preview')}
                    className="px-3 py-1.5 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/40 text-xs font-mono flex items-center gap-1.5 transition-all"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Switch to PDF Preview</span>
                  </button>
                </div>
              </div>
            )}

            {/* Actions Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-5 mt-4 border-t border-slate-800">
              <div className="text-xs font-mono text-slate-500">
                Format: PDF • Certified & Updated 2026
              </div>

              <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
                <a
                  href={`/resumes/${currentResume.filename}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-slate-500 text-xs font-mono flex items-center justify-center gap-2 transition-all"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                  <span>View in Full Tab</span>
                </a>

                <button
                  onClick={() => handleDownload(currentResume.filename)}
                  className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs font-mono flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/25 transition-all"
                >
                  <Download className="w-4 h-4" />
                  <span>Download PDF</span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
