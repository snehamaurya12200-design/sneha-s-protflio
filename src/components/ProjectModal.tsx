import React from 'react';
import { X, ExternalLink, Github, CheckCircle2, Clock } from 'lucide-react';
import { ProjectDetail } from './Projects.tsx';

interface ProjectModalProps {
  project: ProjectDetail | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 animate-[fadeIn_0.2s_ease-out]">
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#800021] rounded-[32px] border-2 border-[#EE69B4]/40 shadow-2xl p-6 sm:p-10 subtle-print-texture text-[#FFF7F8]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 rounded-full bg-[#881144]/60 border border-[#EE69B4]/30 flex items-center justify-center text-[#FFF7F8] hover:bg-[#C24366] hover:border-[#EE69B4] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider mb-4 border bg-[#C24366]/30 border-[#EE69B4]/40 text-[#FFDBE4]">
          <span>{project.badge}</span>
        </div>

        {/* Project Title in Lobster */}
        <h2 className="text-3xl sm:text-5xl font-lobster font-bold tracking-normal text-[#FFF7F8] mb-4">
          {project.title}
        </h2>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((t, i) => (
            <span
              key={i}
              className="px-3 py-1 rounded-md bg-[#881144]/50 border border-[#EE69B4]/25 font-mono text-xs font-bold text-[#E6CBD3]"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Core Brief */}
        <div className="bg-[#881144]/40 rounded-2xl border border-[#EE69B4]/25 p-6 mb-6 shadow-sm">
          <h4 className="font-mono text-xs font-bold text-[#EE69B4] uppercase tracking-wider mb-2">
            THE BRIEF &amp; OBJECTIVE
          </h4>
          <p className="font-sans text-[#E6CBD3] text-base leading-relaxed mb-4 font-normal">
            {project.description}
          </p>

          {project.hackathonNote && (
            <div className="pt-3 border-t border-[#EE69B4]/20 flex items-center gap-2 text-xs font-mono text-[#FFDBE4] font-semibold">
              <CheckCircle2 className="w-4 h-4 text-[#EE69B4]" />
              <span>{project.hackathonNote}</span>
            </div>
          )}

          {project.statusNote && (
            <div className="pt-3 border-t border-[#EE69B4]/20 flex items-center gap-2 text-xs font-mono text-[#FFDBE4]/80 font-semibold">
              <Clock className="w-4 h-4 text-[#EE69B4]" />
              <span>{project.statusNote}</span>
            </div>
          )}
        </div>

        {/* Key Deliverables & Method */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div className="p-4 rounded-xl bg-[#881144]/35 border border-[#EE69B4]/25">
            <h5 className="font-mono text-xs font-bold text-[#FFDBE4] mb-1">DESIGN EXECUTION</h5>
            <p className="font-sans text-xs sm:text-sm text-[#E6CBD3] leading-relaxed font-normal">
              Problem framing, rapid Figma wireframes, tokenized design systems, and responsive layouts built for intuitive ease.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-[#881144]/35 border border-[#EE69B4]/25">
            <h5 className="font-mono text-xs font-bold text-[#FFDBE4] mb-1">FRONTEND ARCHITECTURE</h5>
            <p className="font-sans text-xs sm:text-sm text-[#E6CBD3] leading-relaxed font-normal">
              Component-driven code in React, Tailwind CSS styling, tactile micro-animations, and live Vercel deployments.
            </p>
          </div>
        </div>

        {/* CTA Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-[#EE69B4]/20">
          <div className="flex flex-wrap items-center gap-3">
            {project.isLive && project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-[#C24366] hover:bg-[#a83252] text-[#FFF7F8] font-sans text-xs sm:text-sm font-bold border border-[#EE69B4]/40 shadow-[0_4px_16px_rgba(194,67,102,0.4)] transition-colors"
              >
                <span>Open Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-[#881144]/50 hover:bg-[#881144]/80 text-[#FFF7F8] font-sans text-xs sm:text-sm font-bold border border-[#EE69B4]/30 transition-colors"
              >
                <Github className="w-3.5 h-3.5 text-[#EE69B4]" />
                <span>GitHub Repo</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-full border border-[#EE69B4]/30 bg-[#881144]/40 hover:bg-[#881144]/80 text-[#FFF7F8] font-mono text-xs font-bold transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
