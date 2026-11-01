import React from 'react';
import { Smartphone, Server, Database, Terminal, Sparkles, CheckCircle2 } from 'lucide-react';
import { skillGroups } from '../data/skillsData';

const ICONS = {
  Smartphone,
  Server,
  Database,
  Terminal
};

const LEVEL_STYLES = {
  emerald: {
    badge: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    dot: 'bg-emerald-400'
  },
  sky: {
    badge: 'text-sky-400 bg-sky-500/10 border-sky-500/20',
    dot: 'bg-sky-400'
  },
  violet: {
    badge: 'text-violet-400 bg-violet-500/10 border-violet-500/20',
    dot: 'bg-violet-400'
  }
};

export default function Skills() {
  return (
    <section id="habilidades" className="py-24 border-t border-white/5 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Stack Tecnológico & Dominio
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Habilidades de Ingeniería de Software
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-400 max-w-2xl font-normal leading-relaxed">
            Tecnologías y herramientas que domino para diseñar, desarrollar y desplegar arquitecturas completas desde el frontend hasta la infraestructura en servidores propios.
          </p>
        </div>

        {/* 2x2 Grid of Skill Groups */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {skillGroups.map((group, idx) => {
            const GroupIcon = ICONS[group.iconKey] || Terminal;
            return (
              <div
                key={group.id}
                className="group relative p-6 sm:p-8 rounded-2xl bg-[#0c1017]/80 border border-white/10 hover:border-sky-500/30 transition-all duration-300 shadow-xl backdrop-blur-sm flex flex-col justify-between"
              >
                {/* Header of Group */}
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 group-hover:scale-105 transition-transform duration-300">
                        <GroupIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white group-hover:text-sky-300 transition-colors">
                          {group.title}
                        </h3>
                        <span className="text-[11px] font-mono text-neutral-400">
                          {group.badge}
                        </span>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-sky-400/70 px-2.5 py-1 rounded-lg bg-white/5 border border-white/5">
                      0{idx + 1}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-400 mb-6 leading-relaxed">
                    {group.description}
                  </p>

                  {/* Skills List */}
                  <div className="space-y-4">
                    {group.skills.map((skill, sIdx) => {
                      const style = LEVEL_STYLES[skill.levelColor] || LEVEL_STYLES.sky;
                      return (
                        <div
                          key={sIdx}
                          className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/15 hover:bg-white/[0.04] transition-all duration-200"
                        >
                          <div className="flex items-start justify-between gap-3 mb-2">
                            <div>
                              <div className="flex items-center gap-2 flex-wrap">
                                <span className="text-sm font-semibold text-neutral-100">
                                  {skill.name}
                                </span>
                                <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 px-2 py-0.5 rounded bg-white/5 border border-white/5">
                                  {skill.tag}
                                </span>
                              </div>
                            </div>
                            <span
                              className={`inline-flex items-center gap-1.5 text-[10px] font-mono px-2 py-0.5 rounded-full border shrink-0 ${style.badge}`}
                            >
                              <span className={`w-1.5 h-1.5 rounded-full ${style.dot}`} />
                              {skill.level}
                            </span>
                          </div>

                          <p className="text-xs text-neutral-400 leading-relaxed font-normal mb-3">
                            {skill.detail}
                          </p>

                          {/* Tech Pills */}
                          {skill.pills && (
                            <div className="flex flex-wrap gap-1.5 pt-1">
                              {skill.pills.map((pill, pIdx) => (
                                <span
                                  key={pIdx}
                                  className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-neutral-300 border border-white/5"
                                >
                                  {pill}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })}
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
