import React, { useState } from 'react';
import { Mail, MessageSquare, Send, Check, Copy, MapPin, Sparkles, Terminal } from 'lucide-react';
import GithubIcon from './GithubIcon';

export default function Contact() {
  const [copiedType, setCopiedType] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const discordUser = "xibalba0188";
  const emailAddress = "rafaelcastro.dev@gmail.com";

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
      window.location.href = `mailto:${emailAddress}?subject=Mensaje de ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message + '\n\nContacto: ' + formData.email)}`;
    }, 1200);
  };

  return (
    <section id="contacto" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-xs font-mono text-cyan-400 uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            Hablemos
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            ¿Tienes una idea o proyecto en mente?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Estoy disponible para colaborar en proyectos web, desarrollo de aplicaciones y oportunidades laborales.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
          {/* Direct Channels */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-md">
              <h3 className="text-lg font-bold text-white mb-1 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                Canales de Contacto Directo
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Elige el medio que prefieras para comunicarte conmigo rápidamente:
              </p>

              {/* Discord Pill */}
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 mb-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-indigo-950/80 border border-indigo-800/60 flex items-center justify-center text-indigo-400">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 uppercase font-mono">Discord</div>
                    <div className="text-sm font-bold text-white font-mono">{discordUser}</div>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(discordUser, 'discord')}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 transition"
                  title="Copiar usuario de Discord"
                >
                  {copiedType === 'discord' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">¡Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copiar</span>
                    </>
                  )}
                </button>
              </div>

              {/* Email Pill */}
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 mb-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-cyan-950/80 border border-cyan-800/60 flex items-center justify-center text-cyan-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 uppercase font-mono">Correo Electrónico</div>
                    <div className="text-xs sm:text-sm font-bold text-white font-mono truncate max-w-[170px] sm:max-w-none">
                      {emailAddress}
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(emailAddress, 'email')}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 transition"
                  title="Copiar correo"
                >
                  {copiedType === 'email' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">¡Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copiar</span>
                    </>
                  )}
                </button>
              </div>

              {/* GitHub Pill */}
              <a
                href="https://github.com/RafaelCastroRR"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 hover:border-slate-700 transition flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center text-white">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 uppercase font-mono">GitHub</div>
                    <div className="text-sm font-bold text-white font-mono">RafaelCastroRR</div>
                  </div>
                </div>
                <span className="text-xs text-cyan-400 group-hover:translate-x-1 transition-transform">
                  Ver perfil →
                </span>
              </a>

              {/* Location indicator */}
              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center gap-2 text-xs text-slate-400">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>Ciudad de Guatemala, Guatemala C.A. (UTC-6)</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-md shadow-xl">
              <h3 className="text-xl font-bold text-white mb-2">Envíame un Mensaje</h3>
              <p className="text-sm text-slate-400 mb-6">
                Completa este formulario y te responderé a la brevedad posible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 font-mono mb-2">
                    Tu Nombre
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ej. Juan Pérez"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-white placeholder-slate-600 outline-none transition text-sm font-sans"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 font-mono mb-2">
                    Tu Correo Electrónico
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="nombre@empresa.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-white placeholder-slate-600 outline-none transition text-sm font-sans"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 font-mono mb-2">
                    Mensaje o Propuesta
                  </label>
                  <textarea
                    required
                    rows="4"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Cuéntame sobre tu proyecto o idea..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-white placeholder-slate-600 outline-none transition text-sm font-sans resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitted}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 transition shadow-lg shadow-cyan-500/20 disabled:opacity-50"
                >
                  {submitted ? (
                    <>
                      <Check className="w-4 h-4" />
                      ¡Abriendo correo para enviar...!
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Enviar Mensaje
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
