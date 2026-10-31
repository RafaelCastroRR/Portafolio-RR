import React from 'react';
import { Code2, Server, Terminal, Shield, ArrowUpRight, Cpu } from 'lucide-react';

export default function About({ onOpenCvModal }) {
  const capabilities = [
    {
      icon: Code2,
      title: 'Frontend & Mobile',
      desc: 'Interfaces dinámicas y accesibles construidas con React 19, Vite y React Native. Enfoque en código desacoplado, modularidad y transiciones fluidas.'
    },
    {
      icon: Server,
      title: 'Backend & APIs',
      desc: 'Servicios RESTful estructurados en Node.js, Express y Java. Gestión de autenticación segura (JWT, Argon2, 2FA) y reglas de negocio robustas.'
    },
    {
      icon: Cpu,
      title: 'Bases de Datos',
      desc: 'Modelado NoSQL escalable con MongoDB Atlas y esquemas Mongoose, junto con bases relacionales MySQL aplicando integridad y transacciones ACID.'
    },
    {
      icon: Terminal,
      title: 'Servidores & Despliegues',
      desc: 'Administración de servidores Linux (CasaOS, Ubuntu), proxy inverso con Nginx, persistencia de microservicios con PM2 y túneles Cloudflare Zero Trust.'
    }
  ];

  return (
    <section id="sobre-mi" className="py-24 border-t border-white/5 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <span className="text-xs font-mono text-sky-400 uppercase tracking-widest block mb-2">
            Perfil Profesional
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Acerca de mí
          </h2>
        </div>

        {/* Story Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
          {/* Main Story Card */}
          <div className="lg:col-span-8 p-7 sm:p-9 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col justify-between">
            <div className="space-y-4 text-neutral-300 text-sm sm:text-base leading-relaxed font-normal">
              <p>
                Soy <strong className="text-white font-semibold">Rafael Castro</strong>, desarrollador de software con base en Guatemala. Me enfoco en construir productos web completos que combinen una interfaz pulida con una arquitectura de backend confiable y mantenible.
              </p>
              <p>
                Cuento con formación de tres años culminada como <span className="text-sky-300">Perito en Informática en Fundación Kinal</span> y certificación profesional como <span className="text-sky-300">Middle Developer Front End en React por Ada School</span>. Esta trayectoria me ha permitido abordar proyectos desde múltiples disciplinas: desde interfaces reactivas y aplicaciones móviles hasta la configuración física y lógica de servidores Linux en producción.
              </p>
              <p className="text-neutral-400 text-sm">
                Valoro la claridad en el código, la atención a los detalles de interfaz y la resiliencia en los sistemas. Disfruto resolver retos técnicos reales y participar en proyectos que demanden calidad de ingeniería.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2 text-xs font-mono text-neutral-400">
                <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5">React 19</span>
                <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5">Node.js</span>
                <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5">MongoDB</span>
                <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5">Linux Server</span>
              </div>

              <button
                onClick={onOpenCvModal}
                className="text-xs font-semibold text-sky-400 hover:text-sky-300 flex items-center gap-1 transition"
              >
                <span>Ver currículum completo</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Highlights Card */}
          <div className="lg:col-span-4 p-7 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider block mb-4">
                Estándares de Trabajo
              </span>

              <div className="space-y-5">
                <div>
                  <h4 className="text-sm font-semibold text-white mb-1">Componentes Limpios</h4>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    Arquitecturas desacopladas, separación estricta de lógica de presentación y código reutilizable.
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-white mb-1">Seguridad en Endpoints</h4>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    Autenticación JWT, verificación en dos pasos (2FA), validaciones en servidor y sanitización de datos.
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-white mb-1">Despliegues Autónomos</h4>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    Túneles cifrados con Cloudflare Zero Trust, proxies Nginx y control de procesos con PM2.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/5">
              <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>Proyectos activos en producción</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Capabilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {capabilities.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-all"
              >
                <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-4 text-sky-400">
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-1.5">{item.title}</h3>
                <p className="text-xs text-neutral-400 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
