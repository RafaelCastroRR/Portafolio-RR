import React from 'react';
import { Layers, CheckCircle2 } from 'lucide-react';
import { skillGroups } from '../data/skillsData';

export default function Skills() {
  return (
    <section id="habilidades" className="py-24 border-t border-white/5 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <span className="text-xs font-mono text-sky-400 uppercase tracking-widest block mb-2">
            Stack Tecnológico
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Habilidades & Tecnologías
          </h2>
          <p className="mt-2 text-sm text-neutral-400 max-w-2xl font-normal">
            Herramientas y tecnologías que utilizo a diario para construir productos de software desde el concepto hasta la producción.
          </p>
        </div>

        {/* 2x2 Grid of Skill Groups */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillGroups.map((group, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-bold text-white mb-1.5 flex items-center justify-between">
                  <span>{group.title}</span>
                  <span className="text-xs font-mono text-sky-400/80 font-normal">
                    0{idx + 1}
                  </span>
                </h3>
                <p className="text-xs text-neutral-400 mb-6 leading-relaxed">
                  {group.description}
                </p>

                <div className="space-y-3.5">
                  {group.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-semibold text-neutral-200">
                          {skill.name}
                        </span>
                      </div>
                      <p className="text-xs text-neutral-400 leading-relaxed font-normal">
                        {skill.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
