import React from 'react';
import { User, Code, Layers, Server, ShieldCheck, HeartHandshake, Zap } from 'lucide-react';

export default function About({ onOpenCvModal }) {
  const pillars = [
    {
      icon: Code,
      title: 'Frontend Especializado',
      color: 'from-cyan-500 to-blue-500',
      description: 'Especialista en React y React Native. Construyo aplicaciones web con interfaces limpias, componentes desacoplados, control de estado eficiente y diseño 100% responsivo.'
    },
    {
      icon: Server,
      title: 'Backend & APIs Robustas',
      color: 'from-indigo-500 to-purple-500',
      description: 'Desarrollo de servicios RESTful seguros en Node.js y Express. Integración de bases de datos relacionales (MySQL) y no relacionales (MongoDB), autenticación JWT y roles de acceso.'
    },
    {
      icon: Layers,
      title: 'Despliegue & Servidores',
      color: 'from-teal-500 to-emerald-500',
      description: 'Experiencia real configurando servidores Linux (CasaOS, Ubuntu), Nginx como proxy inverso, gestión de procesos con PM2 y túneles cifrados con Cloudflare Zero Trust.'
    }
  ];

  return (
    <section id="sobre-mi" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-xs font-mono text-cyan-400 uppercase tracking-wider mb-3">
            <User className="w-3.5 h-3.5" />
            Perfil Profesional
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Quién Soy y Cómo Trabajo
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Un desarrollador apasionado por convertir ideas complejas en experiencias web elegantes, rápidas y funcionales.
          </p>
        </div>

        {/* Bio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          {/* Main Story */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 leading-relaxed text-base sm:text-lg">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-md shadow-xl">
              <p className="mb-4">
                Soy <strong className="text-white font-semibold">Rafael Castro</strong>, programador enfocado en el ecosistema JavaScript moderno. Me apasiona crear interfaces accesibles, intuitivas y con un acabado visual de primer nivel, cuidando tanto la usabilidad para el usuario final como la mantenibilidad del código para el equipo de desarrollo.
              </p>
              <p className="mb-4">
                Me considero una persona <span className="text-cyan-400 font-medium">creativa, autodidacta y orientada a resultados</span>. Disfruto enfrentarme a retos arquitectónicos: desde diseñar un sistema de reservaciones con sincronización de precios exactos hasta levantar arquitecturas bancarias con verificación en dos pasos (2FA).
              </p>
              <p className="text-slate-400 text-sm">
                Mi objetivo es seguir creciendo profesionalmente, aportando valor en proyectos de alto impacto donde el diseño y la ingeniería de software converjan.
              </p>

              <div className="pt-6 mt-6 border-t border-slate-800 flex flex-wrap gap-3">
                <span className="px-3 py-1 text-xs font-medium bg-slate-800/80 text-cyan-300 rounded-md border border-slate-700/80 font-mono">
                  React 19 & Hooks
                </span>
                <span className="px-3 py-1 text-xs font-medium bg-slate-800/80 text-indigo-300 rounded-md border border-slate-700/80 font-mono">
                  RESTful APIs
                </span>
                <span className="px-3 py-1 text-xs font-medium bg-slate-800/80 text-teal-300 rounded-md border border-slate-700/80 font-mono">
                  MongoDB & Mongoose
                </span>
                <span className="px-3 py-1 text-xs font-medium bg-slate-800/80 text-purple-300 rounded-md border border-slate-700/80 font-mono">
                  Cloudflare & Nginx
                </span>
              </div>
            </div>
          </div>

          {/* Quick Snapshot Card */}
          <div className="lg:col-span-5">
            <div className="p-8 rounded-2xl bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 border border-cyan-500/30 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Zap className="w-5 h-5 text-cyan-400" />
                Filosofía de Desarrollo
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-cyan-950/80 text-cyan-400 mt-0.5 border border-cyan-800/60">
                    <Code className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Código Limpio y Reutilizable</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Componentización estricta, tipado seguro y legibilidad para el equipo.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-indigo-950/80 text-indigo-400 mt-0.5 border border-indigo-800/60">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Seguridad y Resiliencia</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Protección de endpoints, hashing con Argon2, 2FA y validación de tokens.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-teal-950/80 text-teal-400 mt-0.5 border border-teal-800/60">
                    <HeartHandshake className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Experiencia de Usuario (UX)</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Microinteracciones fluidas, tiempos de respuesta mínimos y accesibilidad.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800">
                <button
                  onClick={onOpenCvModal}
                  className="w-full py-2.5 px-4 text-xs font-bold uppercase tracking-wider text-cyan-300 bg-cyan-950/60 hover:bg-cyan-900/80 border border-cyan-800 hover:border-cyan-500 rounded-xl transition font-mono text-center block"
                >
                  Conocer más en mi Currículum →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => {
            const IconComponent = pillar.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/60 transition-all duration-300 group"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${pillar.color} p-0.5 mb-5 shadow-lg group-hover:scale-105 transition-transform duration-300`}>
                  <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{pillar.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{pillar.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
