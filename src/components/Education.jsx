import React from 'react';
import { GraduationCap, Award, Calendar, CheckCircle2 } from 'lucide-react';

export default function Education() {
  const experiences = [
    {
      type: "Educación Técnica Superior",
      title: "Perito en Informática (3 Años)",
      institution: "Fundación Kinal",
      period: "3 Años Completados",
      status: "Graduado / Egresado",
      description: "Formación técnica rigurosa de 3 años culminada con éxito, orientada a la ingeniería de software, arquitectura de sistemas, algoritmia avanzada, desarrollo web full stack y administración de bases de datos relacionales y NoSQL. Desarrollo de proyectos con altos estándares de la industria y resolución de problemas empresariales.",
      highlights: [
        "Graduado de la carrera técnica de Perito en Informática",
        "Desarrollo de proyectos con JavaScript, React, Java y Node.js",
        "Diseño e implementación de bases de datos con MySQL y MongoDB",
        "Patrones arquitectónicos (MVC), Programación Orientada a Objetos y Clean Code"
      ]
    },
    {
      type: "Certificación Profesional",
      title: "Middle Developer Front End JavaScript - React",
      institution: "Ada School",
      period: "Certificación Oficial",
      status: "Certificado Aprobado",
      description: "Programa intensivo y especializado en arquitectura frontend moderna. Profundización en patrones de diseño en React, custom hooks, optimización de renderizados y desarrollo modular para preparar mi perfil para roles profesionales de alta exigencia.",
      highlights: [
        "Patrones de diseño modernos en React y manejo de ciclo de vida",
        "Arquitecturas escalables de estado y consumo asíncrono de APIs REST",
        "Testing, depuración de errores y control de calidad de código",
        "Buenas prácticas de desarrollo guiado por componentes"
      ]
    }
  ];

  return (
    <section id="educacion" className="py-24 border-t border-white/5 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <span className="text-xs font-mono text-sky-400 uppercase tracking-widest block mb-2">
            Trayectoria
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Educación & Certificaciones
          </h2>
          <p className="mt-2 text-sm text-neutral-400 max-w-xl font-normal">
            Bases técnicas sólidas construidas con formación técnica culminada y certificaciones oficiales.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-white/5 text-neutral-300 border border-white/5">
                    {exp.type}
                  </span>
                  <span className="text-xs text-neutral-500 font-mono">
                    {exp.period}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-1">
                  {exp.title}
                </h3>

                <h4 className="text-xs font-semibold text-sky-400 mb-4 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5" />
                  {exp.institution}
                </h4>

                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6 font-normal">
                  {exp.description}
                </p>

                <div className="space-y-2 pt-4 border-t border-white/5">
                  {exp.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-neutral-400">
                      <span className="w-1 h-1 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono">
                <span className="text-neutral-500">Estado:</span>
                <span className="text-emerald-400 font-semibold">{exp.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
