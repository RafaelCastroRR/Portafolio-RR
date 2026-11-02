import React from 'react';
import { ArrowDown, FileText, ArrowUpRight } from 'lucide-react';
import GithubIcon from './GithubIcon';

export default function Hero({ onOpenCvModal }) {
  return (
    <section id="inicio" className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 md:pt-48 md:pb-28 overflow-hidden bg-grid-subtle">
      {/* Subtle Ambient Light */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] md:w-[600px] h-[250px] sm:h-[350px] bg-sky-500/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          {/* Status Badge */}
          <div className="inline-flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:py-1 rounded-full bg-white/[0.04] border border-white/10 text-[11px] sm:text-xs font-mono text-neutral-300 mb-6 sm:mb-8 backdrop-blur-sm max-w-full">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0"></span>
            <span>Disponible para nuevos proyectos</span>
            <span className="text-neutral-600 hidden sm:inline">•</span>
            <span className="text-neutral-400">Guatemala 🇬🇹</span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-4 sm:mb-6 break-words">
            Rafael Castro
          </h1>

          {/* Role */}
          <p className="text-lg sm:text-2xl font-semibold text-neutral-300 mb-4 sm:mb-6 tracking-tight">
            Desarrollador Full Stack & Frontend
          </p>

          {/* Professional Narrative */}
          <p className="text-sm sm:text-base md:text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-10 font-normal px-1">
            Diseño y construyo aplicaciones web interactivas, arquitecturas de backend y herramientas que resuelven necesidades reales. Graduado de <span className="text-neutral-200 font-medium">Fundación Kinal</span> y certificado en React por <span className="text-neutral-200 font-medium">Ada School</span>, enfocado en código limpio, buen rendimiento y despliegues sólidos.
          </p>

          {/* CTA Row */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 mb-12 sm:mb-16 w-full max-w-md sm:max-w-none mx-auto">
            <a
              href="#proyectos"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-neutral-950 bg-white hover:bg-neutral-200 transition shadow-lg shadow-white/10"
            >
              <span>Ver Proyectos</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenCvModal}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-medium text-neutral-200 bg-white/5 hover:bg-white/10 border border-white/10 transition"
            >
              <FileText className="w-4 h-4 text-sky-400" />
              <span>Currículum Vitae</span>
            </button>

            <a
              href="https://github.com/RafaelCastroRR"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-medium text-neutral-300 hover:text-white bg-transparent hover:bg-white/5 border border-white/10 transition"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500" />
            </a>
          </div>

          {/* Key Facts / Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mx-auto pt-6 sm:pt-8 border-t border-white/5 text-left">
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <span className="text-xs font-mono text-sky-400 block mb-0.5">Educación</span>
              <span className="text-sm font-semibold text-white block">Perito en Informática</span>
              <span className="text-xs text-neutral-500">Fundación Kinal (Graduado)</span>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <span className="text-xs font-mono text-sky-400 block mb-0.5">Certificación</span>
              <span className="text-sm font-semibold text-white block">Middle React Dev</span>
              <span className="text-xs text-neutral-500">Ada School (Aprobado)</span>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <span className="text-xs font-mono text-sky-400 block mb-0.5">Infraestructura</span>
              <span className="text-sm font-semibold text-white block">Servidores en Producción</span>
              <span className="text-xs text-neutral-500">Linux • Nginx • Cloudflare</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
