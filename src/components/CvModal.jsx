import React from 'react';
import { X, Download, FileText, CheckCircle2, GraduationCap, Award, Briefcase, Mail, MapPin, Phone } from 'lucide-react';

export default function CvModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="bg-[#0f121a] border border-white/10 rounded-2xl max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-2xl relative animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 sm:p-8 border-b border-white/10 flex items-start justify-between">
          <div>
            <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-mono text-sky-400 bg-sky-950/60 border border-sky-800/60 mb-2">
              CURRÍCULUM VITAE
            </span>
            <h3 className="text-2xl font-bold text-white tracking-tight">Rafael Castro</h3>
            <p className="text-xs text-neutral-400 font-mono mt-0.5">
              Desarrollador Full Stack & Frontend
            </p>
            <div className="flex flex-wrap gap-4 mt-3 text-xs text-neutral-400">
              <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-neutral-500" /> Guatemala</span>
              <span className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5 text-neutral-500" /> +502 3632-3559</span>
              <span className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5 text-neutral-500" /> rafaelcastro0605@gmail.com</span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-white/5 border border-white/5 transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-7 text-neutral-300 text-xs sm:text-sm font-normal">
          {/* Perfil */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
              Perfil Profesional
            </h4>
            <p className="leading-relaxed text-neutral-300">
              Desarrollador de software enfocado en la construcción de productos web reactivos, escalables y seguros. Graduado como Perito en Informática por Fundación Kinal y certificado como Middle Developer Front End en React por Ada School. Experiencia práctica en desarrollo de plataformas de reservaciones hoteleras, soluciones bancarias con 2FA, APIs empresariales y despliegue en servidores Linux.
            </p>
          </div>

          {/* Formación */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">
              Educación & Certificaciones
            </h4>
            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="flex justify-between items-start">
                  <div>
                    <h5 className="font-semibold text-white">Perito en Informática (3 Años)</h5>
                    <p className="text-xs text-sky-400">Fundación Kinal</p>
                  </div>
                  <span className="text-xs font-mono text-emerald-400 font-medium">Graduado / Egresado</span>
                </div>
                <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                  Formación completa en arquitectura de software, algoritmia, desarrollo web, POO (Java), y gestión de bases de datos relacionales (MySQL) y NoSQL (MongoDB).
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="flex justify-between items-start">
                  <div>
                    <h5 className="font-semibold text-white">Middle Developer Front End JavaScript - React</h5>
                    <p className="text-xs text-emerald-400">Ada School</p>
                  </div>
                  <span className="text-xs font-mono text-emerald-400 font-medium">Certificado Aprobado</span>
                </div>
                <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                  Especialización en desarrollo avanzado con React, hooks personalizados, ciclo de vida, consumo asíncrono de APIs REST y patrones limpios de componentes.
                </p>
              </div>
            </div>
          </div>

          {/* Proyectos Destacados */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">
              Proyectos Destacados en Producción
            </h4>
            <div className="space-y-2.5">
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                <h5 className="font-semibold text-white text-xs">QuickStay — Gestión Hotelera & Reservas</h5>
                <p className="text-[11px] text-neutral-400 mt-0.5">
                  React, Chakra UI, Node.js, Express, MongoDB Atlas, Nginx, Cloudflare Zero Trust.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                <h5 className="font-semibold text-white text-xs">Nova Bank — Sistema Bancario Digital</h5>
                <p className="text-[11px] text-neutral-400 mt-0.5">
                  React, Tailwind CSS, Node.js, Express, MongoDB, 2FA, JWT, Analíticas de transferencias.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                <h5 className="font-semibold text-white text-xs">Eventos & Recordatorios — Gestor con Calendario</h5>
                <p className="text-[11px] text-neutral-400 mt-0.5">
                  React, FullCalendar, Chakra UI, Vite, LocalStorage.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                <h5 className="font-semibold text-white text-xs">Dev Learning Blog — Plataforma MERN</h5>
                <p className="text-[11px] text-neutral-400 mt-0.5">
                  MongoDB Atlas, Express, React, Node.js, Chakra UI, Sistema dinámico de comentarios.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                <h5 className="font-semibold text-white text-xs">SuperKinal POS — Sistema de Inventario & Ventas</h5>
                <p className="text-[11px] text-neutral-400 mt-0.5">
                  Java, JavaFX, Patrón MVC, MySQL, JDBC, JasperReports.
                </p>
              </div>
            </div>
          </div>

          {/* Habilidades Técnicas */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
              Habilidades Técnicas
            </h4>
            <div className="flex flex-wrap gap-1.5 text-xs font-mono">
              <span className="px-2.5 py-1 rounded bg-white/5 text-neutral-300">JavaScript ES6+</span>
              <span className="px-2.5 py-1 rounded bg-white/5 text-neutral-300">React & Vite</span>
              <span className="px-2.5 py-1 rounded bg-white/5 text-neutral-300">React Native</span>
              <span className="px-2.5 py-1 rounded bg-white/5 text-neutral-300">Node.js & Express</span>
              <span className="px-2.5 py-1 rounded bg-white/5 text-neutral-300">Java & JavaFX (MVC)</span>
              <span className="px-2.5 py-1 rounded bg-white/5 text-neutral-300">MongoDB & Atlas</span>
              <span className="px-2.5 py-1 rounded bg-white/5 text-neutral-300">MySQL & JDBC</span>
              <span className="px-2.5 py-1 rounded bg-white/5 text-neutral-300">Linux Server & Nginx</span>
              <span className="px-2.5 py-1 rounded bg-white/5 text-neutral-300">Cloudflare Zero Trust</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-5 border-t border-white/10 flex items-center justify-between">
          <p className="text-[11px] text-neutral-500 font-mono">
            Actualizado • 2026
          </p>
          <button
            onClick={() => window.print()}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-neutral-950 bg-white hover:bg-neutral-200 transition"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Imprimir / PDF</span>
          </button>
        </div>
      </div>
    </div>
  );
}
