import React from 'react';
import { X, Download, FileText, CheckCircle2, GraduationCap, Award, Briefcase, Mail, Phone, MapPin } from 'lucide-react';

export default function CvModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="bg-slate-900 border border-slate-700/80 rounded-2xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl relative animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 sm:p-8 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border-b border-slate-800 flex items-start justify-between relative">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-cyan-950/80 border border-cyan-800 text-xs font-mono text-cyan-300 mb-2">
              CURRÍCULUM VITAE
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">Rafael Castro</h3>
            <p className="text-sm font-medium text-cyan-400 font-mono mt-1">
              Desarrollador Frontend & Full Stack
            </p>
            <div className="flex flex-wrap gap-4 mt-3 text-xs text-slate-400">
              <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-slate-500" /> Guatemala</span>
              <span className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5 text-slate-500" /> rafaelcastro.dev@gmail.com</span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* CV Content */}
        <div className="p-6 sm:p-8 space-y-8 text-slate-300 text-sm">
          {/* Perfil */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 font-mono flex items-center gap-2">
              <FileText className="w-4 h-4 text-cyan-400" />
              Perfil Profesional
            </h4>
            <p className="leading-relaxed text-slate-300">
              Programador Frontend y Full Stack enfocado en el desarrollo de aplicaciones web reactivas, escalables y seguras. Graduado con título de Perito en Informática por Fundación Kinal y certificación profesional en React por Ada School. Experiencia demostrada en sistemas de reservaciones hoteleras, plataformas bancarias digitales, microservicios empresariales y despliegue en servidores Linux de producción.
            </p>
          </div>

          {/* Formación */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 font-mono flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-emerald-400" />
              Educación
            </h4>
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                <div className="flex justify-between items-start">
                  <div>
                    <h5 className="font-bold text-white">Perito en Informática (3 Años)</h5>
                    <p className="text-xs text-cyan-400">Fundación Kinal</p>
                  </div>
                  <span className="text-xs font-mono text-emerald-400 font-semibold">Graduado / Egresado</span>
                </div>
                <p className="text-xs text-slate-400 mt-2">
                  Formación completa y culminada en ingeniería de software, arquitectura web, estructuras de datos, algoritmia, POO y administración de bases de datos relacionales (MySQL) y NoSQL (MongoDB).
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                <div className="flex justify-between items-start">
                  <div>
                    <h5 className="font-bold text-white">Middle Developer Front End JavaScript - React</h5>
                    <p className="text-xs text-emerald-400">Ada School</p>
                  </div>
                  <span className="text-xs font-mono text-emerald-400 font-semibold">Certificado Aprobado</span>
                </div>
                <p className="text-xs text-slate-400 mt-2">
                  Especialización avanzada en React, hooks personalizados, ciclo de vida, consumo de APIs REST y patrones limpios de arquitectura.
                </p>
              </div>
            </div>
          </div>

          {/* Proyectos Clave */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 font-mono flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-indigo-400" />
              Proyectos Destacados en Producción
            </h4>
            <div className="space-y-3">
              <div className="p-3.5 rounded-xl bg-slate-950/40 border border-slate-800">
                <h5 className="font-bold text-white text-xs">QuickStay - Plataforma de Hoteles & Reservas en Guatemala</h5>
                <p className="text-xs text-slate-400 mt-1">
                  Stack: React, Chakra UI, Node.js, Express, MongoDB Atlas, Nginx, Cloudflare Zero Trust.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950/40 border border-slate-800">
                <h5 className="font-bold text-white text-xs">Nova Bank - Sistema Bancario Digital</h5>
                <p className="text-xs text-slate-400 mt-1">
                  Stack: React, Tailwind CSS, Node.js, Express, MongoDB, 2FA, JWT, Gráficas interactivas.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950/40 border border-slate-800">
                <h5 className="font-bold text-white text-xs">Eventos & Recordatorios - Gestor de Productividad</h5>
                <p className="text-xs text-slate-400 mt-1">
                  Stack: React, FullCalendar, Chakra UI, Vite, LocalStorage.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950/40 border border-slate-800">
                <h5 className="font-bold text-white text-xs">Blog de Aprendizaje & Opiniones - Plataforma MERN</h5>
                <p className="text-xs text-slate-400 mt-1">
                  Stack: MongoDB Atlas, Express, React, Node.js, Chakra UI, Comentarios dinámicos.
                </p>
              </div>
            </div>
          </div>

          {/* Habilidades Principales */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 font-mono flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal-400" />
              Habilidades Técnicas Principales
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
              <span className="p-2 rounded-lg bg-slate-950/40 border border-slate-800 text-slate-300">JavaScript (ES6+)</span>
              <span className="p-2 rounded-lg bg-slate-950/40 border border-slate-800 text-slate-300">React & Vite</span>
              <span className="p-2 rounded-lg bg-slate-950/40 border border-slate-800 text-slate-300">React Native (Mobile)</span>
              <span className="p-2 rounded-lg bg-slate-950/40 border border-slate-800 text-slate-300">Node.js & Express</span>
              <span className="p-2 rounded-lg bg-slate-950/40 border border-slate-800 text-slate-300">MongoDB & Atlas</span>
              <span className="p-2 rounded-lg bg-slate-950/40 border border-slate-800 text-slate-300">Java & JavaFX (MVC)</span>
              <span className="p-2 rounded-lg bg-slate-950/40 border border-slate-800 text-slate-300">MySQL & JDBC</span>
              <span className="p-2 rounded-lg bg-slate-950/40 border border-slate-800 text-slate-300">Tailwind & Chakra UI</span>
              <span className="p-2 rounded-lg bg-slate-950/40 border border-slate-800 text-slate-300">Linux, Nginx & PM2</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 bg-slate-950 border-t border-slate-800 flex items-center justify-between">
          <p className="text-xs text-slate-500 font-mono">
            Actualizado • Octubre 2026
          </p>
          <button
            onClick={() => window.print()}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition"
          >
            <Download className="w-4 h-4" />
            Imprimir / Guardar PDF
          </button>
        </div>
      </div>
    </div>
  );
}
