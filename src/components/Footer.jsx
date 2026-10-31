import React from 'react';
import { Mail } from 'lucide-react';
import GithubIcon from './GithubIcon';

export default function Footer({ onOpenCvModal }) {
  return (
    <footer className="border-t border-white/5 py-12 text-neutral-400 text-xs font-normal">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Identity */}
          <div className="flex items-center gap-3">
            <span className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center font-mono text-[10px] font-bold text-sky-400">
              RC
            </span>
            <div>
              <span className="font-semibold text-white text-sm">Rafael Castro</span>
              <p className="text-[11px] text-neutral-500 font-mono">Full Stack & Software Developer</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap items-center justify-center gap-5 text-neutral-400 font-medium">
            <a href="#inicio" className="hover:text-white transition">Inicio</a>
            <a href="#sobre-mi" className="hover:text-white transition">Perfil</a>
            <a href="#habilidades" className="hover:text-white transition">Habilidades</a>
            <a href="#proyectos" className="hover:text-white transition">Proyectos</a>
            <a href="#educacion" className="hover:text-white transition">Educación</a>
            <button onClick={onOpenCvModal} className="hover:text-white transition">CV</button>
            <a href="#contacto" className="hover:text-white transition">Contacto</a>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/RafaelCastroRR"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/[0.02] hover:bg-white/[0.08] text-neutral-400 hover:text-white transition border border-white/5"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="mailto:rafaelcastro.dev@gmail.com"
              className="p-2 rounded-lg bg-white/[0.02] hover:bg-white/[0.08] text-neutral-400 hover:text-white transition border border-white/5"
              aria-label="Correo"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] text-neutral-500 gap-3">
          <p>© {new Date().getFullYear()} Rafael Castro — Desarrollado en Guatemala.</p>
          <p className="font-mono text-neutral-600">
            Diseñado y desplegado con React, Tailwind CSS y Nginx.
          </p>
        </div>
      </div>
    </footer>
  );
}
