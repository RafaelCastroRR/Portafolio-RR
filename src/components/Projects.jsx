import React, { useState } from 'react';
import { Briefcase, ExternalLink, ArrowUpRight, Sparkles } from 'lucide-react';
import GithubIcon from './GithubIcon';
import { projects } from '../data/projectsData';

export default function Projects({ onSelectProject }) {
  const [filter, setFilter] = useState('Todos');

  const categories = ['Todos', 'Full Stack', 'Frontend', 'Backend', 'Mobile', 'Desktop & Java'];

  const filteredProjects = filter === 'Todos'
    ? projects
    : projects.filter((p) => p.category === filter);

  return (
    <section id="proyectos" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-xs font-mono text-cyan-400 uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            Portafolio de Trabajo
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Mis Proyectos Desarrollados
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Sistemas completos en producción, aplicaciones web interactivas, servicios backend, apps móviles y software de escritorio.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap justify-center gap-2 p-1.5 rounded-2xl bg-slate-900/80 border border-slate-800 max-w-3xl">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  filter === cat
                    ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const isFeatured = project.featured;
            const hasLiveApp = project.liveUrl && !project.liveUrl.includes('github.com');

            return (
              <div
                key={project.id}
                className={`flex flex-col rounded-2xl overflow-hidden bg-slate-900/60 border transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl ${
                  isFeatured 
                    ? 'border-cyan-500/40 hover:border-cyan-400 hover:shadow-cyan-500/10' 
                    : 'border-slate-800/80 hover:border-slate-700 hover:shadow-black/40'
                }`}
              >
                {/* Image & Badges */}
                <div className="relative h-52 w-full overflow-hidden group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                  {isFeatured && (
                    <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-cyan-950/90 text-cyan-300 border border-cyan-500/50 shadow-md backdrop-blur-md">
                      <Sparkles className="w-3 h-3 text-cyan-400" />
                      Producción / En Vivo
                    </div>
                  )}

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-md text-xs font-mono font-medium bg-slate-900/90 text-slate-300 border border-slate-700/80 backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-400 line-clamp-3 leading-relaxed mb-4">
                      {project.shortDesc}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded-md text-xs font-mono bg-slate-800/80 text-cyan-300/90 border border-slate-700/60"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 4 && (
                        <span className="px-2 py-0.5 rounded-md text-xs font-mono bg-slate-800/40 text-slate-400">
                          +{project.tags.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
                    <button
                      onClick={() => onSelectProject(project)}
                      className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition flex items-center gap-1"
                    >
                      Ver Detalles →
                    </button>

                    <div className="flex items-center gap-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition"
                        title="Ver Código en GitHub"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>

                      {hasLiveApp && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition shadow-sm"
                          title="Visitar Proyecto en Vivo"
                        >
                          <span>En Vivo</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
