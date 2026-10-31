import React, { useState } from 'react';
import { Cpu, CheckCircle, Code, Database, Wrench } from 'lucide-react';
import { skillCategories } from '../data/skillsData';

export default function Skills() {
  const [activeTab, setActiveTab] = useState(0);

  const icons = [Code, Database, Wrench];

  return (
    <section id="habilidades" className="py-20 md:py-32 bg-slate-950/70 border-y border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-800/60 text-xs font-mono text-indigo-400 uppercase tracking-wider mb-3">
            <Cpu className="w-3.5 h-3.5" />
            Stack & Habilidades
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Tecnologías y Competencias
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Herramientas probadas en proyectos reales, abarcando desde el diseño de la interfaz hasta la configuración en el servidor.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-900/80 border border-slate-800 max-w-full overflow-x-auto">
            {skillCategories.map((cat, idx) => {
              const IconComp = icons[idx] || Code;
              const isActive = activeTab === idx;
              return (
                <button
                  key={cat.category}
                  onClick={() => setActiveTab(idx)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 whitespace-nowrap ${
                    isActive
                      ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md shadow-cyan-500/20'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  <IconComp className="w-4 h-4" />
                  {cat.category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Category Description */}
        <p className="text-center text-sm md:text-base text-slate-400 max-w-2xl mx-auto mb-10 italic">
          &ldquo;{skillCategories[activeTab].description}&rdquo;
        </p>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {skillCategories[activeTab].skills.map((skill, index) => (
            <div
              key={skill.name}
              className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-slate-700/80 transition-all duration-200 group"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 group-hover:scale-125 transition-transform" />
                  <h3 className="text-base font-bold text-white tracking-wide">{skill.name}</h3>
                </div>
                <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/60">
                  {skill.level}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden my-3 border border-slate-800">
                <div
                  className="h-full bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-500 rounded-full transition-all duration-700 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {skill.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
