import React, { useState } from 'react';
import { Mail, MessageSquare, Send, Check, Copy, MapPin, ArrowUpRight, Phone } from 'lucide-react';
import GithubIcon from './GithubIcon';

export default function Contact() {
  const [copiedType, setCopiedType] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const emailAddress = "rafaelcastro0605@gmail.com";
  const phoneNumber = "36323559";
  const phoneFormatted = "+502 3632-3559";
  const whatsappUrl = "https://wa.me/50236323559";
  const discordUser = "xibalba0188";

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const safeName = encodeURIComponent(formData.name.replace(/[\r\n]/g, ' ').trim());
    const safeBody = encodeURIComponent(
      formData.message.trim() + 
      '\n\n-------------------------\nRemitente: ' + formData.name.trim() + 
      '\nCorreo de contacto: ' + formData.email.trim()
    );

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
      window.location.href = `mailto:${emailAddress}?subject=Mensaje%20de%20${safeName}&body=${safeBody}`;
    }, 800);
  };

  return (
    <section id="contacto" className="py-24 border-t border-white/5 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <span className="text-xs font-mono text-sky-400 uppercase tracking-widest block mb-2">
            Contacto
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Iniciemos una conversación
          </h2>
          <p className="mt-2 text-sm text-neutral-400 max-w-xl font-normal">
            Disponible para proyectos de software, desarrollo web y oportunidades profesionales.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Direct Channels */}
          <div className="lg:col-span-5 space-y-3">
            {/* Email Card */}
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-sky-400">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-neutral-500 font-mono">Correo Electrónico</div>
                  <div className="text-xs font-semibold text-white font-mono">{emailAddress}</div>
                </div>
              </div>

              <button
                onClick={() => handleCopy(emailAddress, 'email')}
                className="px-2.5 py-1 rounded text-[11px] font-medium bg-white/5 hover:bg-white/10 text-neutral-300 transition"
              >
                {copiedType === 'email' ? '¡Copiado!' : 'Copiar'}
              </button>
            </div>

            {/* Phone / WhatsApp Card */}
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-950/50 border border-emerald-800/50 flex items-center justify-center text-emerald-400">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-neutral-500 font-mono">Teléfono / WhatsApp</div>
                  <div className="text-xs font-semibold text-white font-mono">{phoneFormatted}</div>
                </div>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => handleCopy(phoneNumber, 'phone')}
                  className="px-2 py-1 rounded text-[11px] font-medium bg-white/5 hover:bg-white/10 text-neutral-300 transition"
                >
                  {copiedType === 'phone' ? '¡Copiado!' : 'Copiar'}
                </button>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 rounded text-[11px] font-semibold bg-emerald-500 hover:bg-emerald-400 text-neutral-950 transition flex items-center gap-1"
                >
                  <span>Chat</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Discord Card */}
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-indigo-950/50 border border-indigo-800/50 flex items-center justify-center text-indigo-400">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-neutral-500 font-mono">Discord</div>
                  <div className="text-xs font-semibold text-white font-mono">{discordUser}</div>
                </div>
              </div>

              <button
                onClick={() => handleCopy(discordUser, 'discord')}
                className="px-2.5 py-1 rounded text-[11px] font-medium bg-white/5 hover:bg-white/10 text-neutral-300 transition"
              >
                {copiedType === 'discord' ? '¡Copiado!' : 'Copiar'}
              </button>
            </div>

            {/* GitHub Card */}
            <a
              href="https://github.com/RafaelCastroRR"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-white/[0.02] border border-white/10 flex items-center justify-between hover:bg-white/[0.04] transition group"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-neutral-300">
                  <GithubIcon className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-neutral-500 font-mono">GitHub</div>
                  <div className="text-xs font-semibold text-white font-mono">@RafaelCastroRR</div>
                </div>
              </div>

              <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-white transition" />
            </a>

            {/* Location Card */}
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[11px] text-neutral-500 font-mono">Ubicación</div>
                <div className="text-xs font-semibold text-white font-mono">Guatemala 🇬🇹</div>
              </div>
            </div>
          </div>

          {/* Clean Message Form */}
          <div className="lg:col-span-7 p-6 sm:p-7 rounded-2xl bg-white/[0.02] border border-white/10">
            <h3 className="text-base font-bold text-white mb-1">
              Enviar Mensaje
            </h3>
            <p className="text-xs text-neutral-400 mb-5 font-normal">
              Escríbeme directamente y nos pondremos en contacto rápidamente.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-neutral-400 mb-1.5">Tu Nombre</label>
                <input
                  type="text"
                  required
                  maxLength={80}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Tu nombre completo"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-xs sm:text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-sky-500 transition font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-neutral-400 mb-1.5">Tu Correo Electrónico</label>
                <input
                  type="email"
                  required
                  maxLength={100}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="ejemplo@correo.com"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-xs sm:text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-sky-500 transition font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-neutral-400 mb-1.5">Mensaje o Propuesta</label>
                <textarea
                  required
                  rows={4}
                  maxLength={1500}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Hola Rafael, me gustaría conversar sobre..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-xs sm:text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-sky-500 transition font-mono resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={submitted}
                className="w-full py-2.5 rounded-xl font-semibold text-xs text-neutral-950 bg-white hover:bg-neutral-200 transition shadow-sm flex items-center justify-center gap-2"
              >
                {submitted ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>Abriendo cliente de correo...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Enviar Mensaje</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
