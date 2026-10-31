import React from 'react';
import { Code2, Heart, MessageSquare, Mail } from 'lucide-react';
import GithubIcon from './GithubIcon';

export default function Footer({ onOpenCvModal }) {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-500 p-0.5 shadow-md shadow-cyan-500/20">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Code2 className="w-4 h-4 text-cyan-400" />
              </div>
            </div>
            <div>
              <span className="font-bold text-white text-base">Rafael Castro</span>
              <p className="text-xs text-slate-500 font-mono">Frontend & Full Stack Developer</p>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-slate-400">
            <a href="#inicio" className="hover:text-cyan-400 transition">Inicio</a>
            <a href="#sobre-mi" className="hover:text-cyan-400 transition">Quién Soy</a>
            <a href="#habilidades" className="hover:text-cyan-400 transition">Habilidades</a>
            <a href="#proyectos" className="hover:text-cyan-400 transition">Proyectos</a>
            <a href="#educacion" className="hover:text-cyan-400 transition">Educación</a>
            <button onClick={onOpenCvModal} className="hover:text-cyan-400 transition">Currículum</button>
            <a href="#contacto" className="hover:text-cyan-400 transition">Contacto</a>
          </div>

          {/* Socials & Copyright */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/RafaelCastroRR"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition border border-slate-800"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="mailto:rafaelcastro.dev@gmail.com"
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition border border-slate-800"
              aria-label="Correo"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Rafael Castro - Todos los derechos reservados.</p>
          <p className="flex items-center gap-1 font-mono">
            Diseñado y programado con <Heart className="w-3.5 h-3.5 text-rose-500 inline fill-rose-500" /> en Guatemala
          </p>
        </div>
      </div>
    </footer>
  );
}
