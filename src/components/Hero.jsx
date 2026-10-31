import React from 'react';
import { ArrowRight, ExternalLink, Sparkles, Terminal, FileText, CheckCircle2 } from 'lucide-react';
import GithubIcon from './GithubIcon';

export default function Hero({ onOpenCvModal }) {
  return (
    <section id="inicio" className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
      {/* Background glowing orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-cyan-500/15 via-indigo-500/15 to-purple-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-xs font-mono text-cyan-300 mb-8 shadow-inner shadow-cyan-950 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="w-2 h-2 -ml-3.5 rounded-full bg-emerald-400" />
            <span>Disponible para nuevos proyectos & retos</span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-400">Guatemala 🇬🇹</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6">
            Hola, soy <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">Rafael Castro</span>
          </h1>

          {/* Subtitle / Role */}
          <p className="text-xl sm:text-2xl font-semibold text-slate-300 mb-6 flex items-center justify-center gap-2 flex-wrap font-mono">
            <Terminal className="w-5 h-5 text-cyan-400" />
            <span>Frontend & Full Stack Developer</span>
          </p>

          {/* Signature Quote */}
          <div className="max-w-2xl mx-auto my-6 p-4 rounded-2xl bg-slate-900/40 border border-cyan-500/20 backdrop-blur-sm shadow-xl">
            <p className="text-lg md:text-xl italic text-cyan-200 font-serif">
              &ldquo;Donde otros ven límites, yo escribo soluciones.&rdquo;
            </p>
          </div>

          {/* Bio paragraph */}
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10">
            Especializado en la creación de interfaces web modernas, reactivas y de alto rendimiento. 
            Combino atención minuciosa al detalle visual en <span className="text-slate-200 font-medium">React</span> con arquitecturas robustas y seguras en <span className="text-slate-200 font-medium">Node.js y bases de datos</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="#proyectos"
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all duration-200"
            >
              Explorar Proyectos
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenCvModal}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-slate-900 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 shadow-md transition-all duration-200 hover:-translate-y-0.5"
            >
              <FileText className="w-4 h-4 text-cyan-400" />
              Ver Currículum
            </button>

            <a
              href="https://github.com/RafaelCastroRR"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-300 hover:text-white bg-slate-900/50 hover:bg-slate-800/80 border border-slate-800 hover:border-slate-700 transition-all duration-200"
            >
              <GithubIcon className="w-4 h-4" />
              GitHub
            </a>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto pt-8 border-t border-slate-800/80">
            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 text-left">
              <div className="text-2xl md:text-3xl font-extrabold text-cyan-400 font-mono">Graduado</div>
              <div className="text-xs uppercase tracking-wider text-slate-400 font-medium mt-1">Perito en Informática (Kinal)</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 text-left">
              <div className="text-2xl md:text-3xl font-extrabold text-teal-400 font-mono">React Cert.</div>
              <div className="text-xs uppercase tracking-wider text-slate-400 font-medium mt-1">Middle Dev por Ada School</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 text-left">
              <div className="text-2xl md:text-3xl font-extrabold text-purple-400 font-mono">Full Stack</div>
              <div className="text-xs uppercase tracking-wider text-slate-400 font-medium mt-1">Sistemas Cloud & Linux Server</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
