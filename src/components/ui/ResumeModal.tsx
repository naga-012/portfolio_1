import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePortfolioStore } from '../../store/usePortfolioStore';
import { portfolioData } from '../../data/portfolioData';
import { X, Download, FileText, CheckCircle2, Sparkles, UserCheck } from 'lucide-react';

export const ResumeModal: React.FC = () => {
  const resumeModalOpen = usePortfolioStore((state) => state.resumeModalOpen);
  const setResumeModalOpen = usePortfolioStore((state) => state.setResumeModalOpen);
  const [selectedResumeId, setSelectedResumeId] = useState<'ai-dev' | 'data-analyst'>('ai-dev');

  if (!resumeModalOpen) return null;

  const currentResume = portfolioData.resumes.find((r) => r.id === selectedResumeId) || portfolioData.resumes[0];

  const handleDownload = (filename: string) => {
    // In production, this points to public/resumes/[filename]
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
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setResumeModalOpen(false)}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ scale: 0.94, opacity: 0, y: 15 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 10 }}
          className="relative w-full max-w-2xl rounded-3xl bg-slate-950/95 border border-slate-800 shadow-2xl z-10 overflow-hidden"
        >
          {/* Header */}
          <div className="p-6 sm:p-8 border-b border-slate-800 flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono mb-1">
                <FileText className="w-4 h-4" /> CURRICULUM VITAE SELECTION
              </div>
              <h3 className="text-2xl font-bold text-white">Dual Resume Profiles</h3>
              <p className="text-xs text-slate-400 mt-1">
                Select between specialized tracks tailored for AI Engineering or Analytics roles
              </p>
            </div>
            <button
              onClick={() => setResumeModalOpen(false)}
              className="p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-white border border-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-slate-800 bg-slate-900/40 p-2 gap-2">
            {portfolioData.resumes.map((res) => {
              const isSelected = selectedResumeId === res.id;
              return (
                <button
                  key={res.id}
                  onClick={() => setSelectedResumeId(res.id)}
                  className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-mono transition-all flex items-center justify-center gap-2 ${
                    isSelected
                      ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{res.title}</span>
                </button>
              );
            })}
          </div>

          {/* Details Body */}
          <div className="p-6 sm:p-8">
            <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800 mb-6">
              <div className="text-xs font-mono text-cyan-400 font-semibold mb-1">
                PROFILE FOCUS & TARGET SCOPE
              </div>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                {currentResume.summary}
              </p>
            </div>

            <div className="space-y-3 mb-8">
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

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t border-slate-800">
              <div className="text-xs font-mono text-slate-500">
                Format: PDF • Updated Jun 2026
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={() => handleDownload(currentResume.filename)}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs font-mono flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/25 transition-all"
                >
                  <Download className="w-4 h-4" />
                  <span>Download {selectedResumeId === 'ai-dev' ? 'AI Full Stack' : 'Data Analyst'} PDF</span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
