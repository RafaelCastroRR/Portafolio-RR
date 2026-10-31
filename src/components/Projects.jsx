import React, { useState } from 'react';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import GithubIcon from './GithubIcon';
import { projects } from '../data/projectsData';

export default function Projects({ onSelectProject }) {
  const [filter, setFilter] = useState('Todos');

  const categories = ['Todos', 'Full Stack', 'Frontend', 'Backend', 'Mobile', 'Desktop & Java'];

  const filteredProjects = filter === 'Todos'
    ? projects
    : projects.filter((p) => p.category === filter);

  return (
    <section id="proyectos" className="py-24 border-t border-white/5 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header & Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-mono text-sky-400 uppercase tracking-widest block mb-2">
              Portafolio
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Proyectos Destacados
            </h2>
            <p className="mt-2 text-sm text-neutral-400 max-w-xl font-normal">
              Aplicaciones completas en producción, plataformas web, APIs REST y software de escritorio.
            </p>
          </div>

          {/* Segmented Filter Control */}
          <div className="flex flex-wrap gap-1 p-1 rounded-xl bg-white/[0.03] border border-white/10 self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  filter === cat
                    ? 'bg-white text-neutral-950 font-semibold shadow-sm'
                    : 'text-neutral-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => {
            const isFeatured = project.featured;
            const hasLiveApp = project.liveUrl && !project.liveUrl.includes('github.com');

            return (
              <div
                key={project.id}
                className="group flex flex-col rounded-2xl bg-white/[0.02] border border-white/10 overflow-hidden hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300 flex-1"
              >
                {/* Image & Status Badge */}
                <div className="relative h-48 w-full overflow-hidden bg-neutral-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090a0f] via-transparent to-transparent" />

                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-black/70 text-neutral-300 border border-white/10 backdrop-blur-md">
                      {project.category}
                    </span>

                    {isFeatured && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-medium bg-emerald-950/80 text-emerald-300 border border-emerald-800/60 backdrop-blur-md">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                        En Vivo
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-white mb-1.5 group-hover:text-sky-300 transition">
                      {project.title}
                    </h3>
                    <p className="text-xs text-neutral-400 line-clamp-3 leading-relaxed mb-4 font-normal">
                      {project.shortDesc}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-neutral-300 border border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="px-1.5 py-0.5 rounded text-[10px] font-mono text-neutral-500">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                    <button
                      onClick={() => onSelectProject(project)}
                      className="text-xs font-medium text-neutral-300 hover:text-white flex items-center gap-1 transition"
                    >
                      <span>Detalles</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500" />
                    </button>

                    <div className="flex items-center gap-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-white/5 transition"
                        title="Ver Código en GitHub"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>

                      {hasLiveApp && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-semibold bg-white text-neutral-950 hover:bg-neutral-200 transition"
                          title="Visitar Proyecto en Vivo"
                        >
                          <span>En Vivo</span>
                          <ExternalLink className="w-3 h-3" />
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
