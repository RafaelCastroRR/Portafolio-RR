import React from 'react';
import { X, ExternalLink, ArrowUpRight } from 'lucide-react';
import GithubIcon from './GithubIcon';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  const hasLiveApp = project.liveUrl && !project.liveUrl.includes('github.com');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="bg-[#0f121a] border border-white/10 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cover Image */}
        <div className="relative h-52 sm:h-64 w-full overflow-hidden rounded-t-2xl bg-neutral-900">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f121a] via-[#0f121a]/30 to-transparent" />

          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/60 hover:bg-black/90 text-neutral-300 hover:text-white border border-white/10 transition"
            aria-label="Cerrar modal"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="absolute bottom-4 left-6 right-6">
            <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-mono font-medium bg-white/10 text-neutral-200 border border-white/10 backdrop-blur-md mb-2">
              {project.category}
            </span>
            <h3 className="text-2xl font-bold text-white tracking-tight">
              {project.title}
            </h3>
            <p className="text-xs text-neutral-400 mt-0.5">
              {project.subtitle}
            </p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
            {project.fullDesc}
          </p>

          {/* Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">
                Aspectos Técnicos Destacados
              </h4>
              <ul className="space-y-2">
                {project.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Badges */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">
              Tecnologías Utilizadas
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded text-xs font-mono bg-white/5 text-neutral-300 border border-white/5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Footer Actions */}
          <div className="pt-6 border-t border-white/5 flex items-center justify-end gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-neutral-400 hover:text-white transition"
            >
              Cerrar
            </button>

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-neutral-200 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Ver Código en GitHub</span>
              </a>
            )}

            {hasLiveApp && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-neutral-950 bg-white hover:bg-neutral-200 rounded-lg transition shadow-sm"
              >
                <span>Probar en Vivo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
