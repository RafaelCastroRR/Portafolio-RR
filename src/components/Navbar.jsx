import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar({ onOpenCvModal }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Perfil', href: '#sobre-mi' },
    { name: 'Habilidades', href: '#habilidades' },
    { name: 'Proyectos', href: '#proyectos' },
    { name: 'Educación', href: '#educacion' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 pt-4 sm:pt-6">
      <div className={`max-w-5xl mx-auto transition-all duration-300 rounded-full border ${
        scrolled 
          ? 'bg-[#0f121ae6] border-white/10 shadow-2xl shadow-black/60 backdrop-blur-xl py-2.5 px-5 sm:px-6' 
          : 'bg-[#0f121a80] border-white/5 backdrop-blur-md py-3 px-5 sm:px-6'
      }`}>
        <div className="flex items-center justify-between">
          {/* Logo / Monogram */}
          <a href="#inicio" className="flex items-center gap-2.5 group">
            <span className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center font-mono text-xs font-bold text-sky-400 group-hover:border-sky-400/50 group-hover:bg-sky-500/10 transition-all">
              RC
            </span>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-tight text-white group-hover:text-sky-300 transition">
                Rafael Castro
              </span>
              <span className="text-[10px] text-neutral-400 font-mono -mt-0.5">
                Full Stack Developer
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-medium text-neutral-300 hover:text-white hover:bg-white/5 rounded-full transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-2.5">
            <button
              onClick={onOpenCvModal}
              className="px-3.5 py-1.5 text-xs font-medium text-neutral-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition"
            >
              CV
            </button>
            <a
              href="#contacto"
              className="px-4 py-1.5 text-xs font-semibold text-neutral-950 bg-white hover:bg-neutral-200 rounded-full transition shadow-sm"
            >
              Contactar
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-1.5 rounded-full text-neutral-400 hover:text-white hover:bg-white/5 transition"
            aria-label="Abrir menú"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden mt-3 max-w-sm mx-auto bg-[#0f121af0] border border-white/10 rounded-2xl p-4 shadow-2xl backdrop-blur-2xl animate-in fade-in duration-200">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 rounded-xl text-sm font-medium text-neutral-300 hover:text-white hover:bg-white/5 transition"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 mt-2 border-t border-white/10 flex gap-2">
              <button
                onClick={() => { setIsOpen(false); onOpenCvModal(); }}
                className="flex-1 py-2 text-xs font-semibold text-neutral-200 bg-white/5 border border-white/10 rounded-xl transition text-center"
              >
                Ver CV
              </button>
              <a
                href="#contacto"
                onClick={() => setIsOpen(false)}
                className="flex-1 py-2 text-xs font-bold text-neutral-950 bg-white rounded-xl transition text-center"
              >
                Contacto
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
