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
              Programador Frontend y Full Stack enfocado en el desarrollo de aplicaciones web reactivas, escalables y seguras. Con sólida base en fundamentos de software por Fundación Kinal y certificación profesional en React por Ada School. Experiencia demostrada en sistemas de reservaciones hoteleras, plataformas bancarias digitales y despliegue en entornos Linux de producción.
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
                    <h5 className="font-bold text-white">Carrera de Programación (3 Años)</h5>
                    <p className="text-xs text-cyan-400">Fundación Kinal</p>
                  </div>
                  <span className="text-xs font-mono text-slate-500">Cursando</span>
                </div>
                <p className="text-xs text-slate-400 mt-2">
                  Especialización en desarrollo web, algoritmia, bases de datos relacionales y NoSQL, POO y diseño de sistemas.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                <div className="flex justify-between items-start">
                  <div>
                    <h5 className="font-bold text-white">Middle Developer Front End JavaScript - React</h5>
                    <p className="text-xs text-emerald-400">Ada School</p>
                  </div>
                  <span className="text-xs font-mono text-emerald-400">Certificado</span>
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
                  Stack: React, Tailwind CSS, Node.js, Express, MongoDB, 2FA, JWT, Gráficos analíticos.
                </p>
              </div>
            </div>
          </div>

          {/* Habilidades Principales */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 font-mono flex items-center gap-2">
              <Award className="w-4 h-4 text-purple-400" />
              Competencias Técnicas
            </h4>
            <div className="flex flex-wrap gap-2">
              {['JavaScript (ES6+)', 'React.js', 'React Native', 'Tailwind CSS', 'Chakra UI', 'Node.js', 'Express', 'MongoDB', 'MySQL', 'Git & GitHub', 'Linux', 'Nginx', 'Cloudflare Zero Trust'].map((skill) => (
                <span key={skill} className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-800 text-slate-200 border border-slate-700">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="p-6 bg-slate-950 border-t border-slate-800 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-5 py-2.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 rounded-xl transition"
          >
            Cerrar
          </button>
          <a
            href="mailto:rafaelcastro.dev@gmail.com?subject=Contacto%20desde%20Portafolio%20de%20Rafael%20Castro"
            className="px-6 py-2.5 text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl transition font-mono"
          >
            Contactar por Correo
          </a>
        </div>
      </div>
    </div>
  );
}
