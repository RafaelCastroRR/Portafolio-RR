import React from 'react';
import { GraduationCap, Award, Calendar, CheckCircle2, BookOpen } from 'lucide-react';

export default function Education() {
  const experiences = [
    {
      type: "Educación Técnica Superior",
      title: "Perito en Informática (3 Años)",
      institution: "Fundación Kinal",
      period: "3 Años Completados",
      status: "Graduado / Egresado",
      description: "Formación técnica rigurosa de 3 años culminada exitosamente, con enfoque en ingeniería de software, arquitectura de sistemas, algoritmia avanzada, desarrollo web full stack y gestión de bases de datos relacionales y NoSQL. Durante mi trayectoria en Kinal desarrollé múltiples proyectos de alta exigencia, consolidando un pensamiento analítico disciplinado y capacidad resolutiva ante problemas reales.",
      highlights: [
        "Graduado de la carrera técnica de Perito en Informática",
        "Desarrollo de aplicaciones completas con JavaScript, React, Java y Node.js",
        "Diseño de bases de datos relacionales (MySQL) y no relacionales (MongoDB)",
        "Implementación de patrones de arquitectura (MVC), POO y buenas prácticas"
      ]
    },
    {
      type: "Certificación Profesional",
      title: "Middle Developer Front End JavaScript - React",
      institution: "Ada School",
      period: "Certificación Oficial",
      status: "Certificado Aprobado",
      description: "Programa intensivo y especializado en arquitectura frontend moderna. Profundización en mejores prácticas de ingeniería de software con React, hooks avanzados, optimización de renderizados y desarrollo modular para preparar mi perfil para roles profesionales de alta exigencia.",
      highlights: [
        "Patrones de diseño modernos en React y manejo de ciclo de vida",
        "Arquitecturas escalables de estado y consumo asíncrono de APIs REST",
        "Testing, depuración de errores y control de calidad de código",
        "Buenas prácticas de Clean Code y desarrollo guiado por componentes"
      ]
    }
  ];

  return (
    <section id="educacion" className="py-20 md:py-32 bg-slate-950/70 border-y border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/60 text-xs font-mono text-emerald-400 uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            Trayectoria Académica
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Educación y Certificaciones
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Bases técnicas sólidas construidas con estudio constante, títulos culminados y certificaciones oficiales.
          </p>
        </div>

        {/* Education Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-slate-700/80 transition-all duration-300 relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-950/80 text-emerald-300 border border-emerald-800/60">
                    {exp.type}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    {exp.period}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-1">
                  {exp.title}
                </h3>

                <h4 className="text-sm font-semibold text-cyan-400 mb-4 flex items-center gap-1.5">
                  <Award className="w-4 h-4" />
                  {exp.institution}
                </h4>

                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {exp.description}
                </p>

                <div className="space-y-2 pt-4 border-t border-slate-800/80">
                  {exp.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Estado:</span>
                <span className="text-emerald-400 font-semibold">{exp.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
