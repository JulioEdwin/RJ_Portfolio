import React from 'react'
import { Terminal, Code, Cpu } from 'lucide-react'
import { profile } from '../../data/profile'
import useScrollReveal from '../../hooks/useScrollReveal'
import { usePreferences } from '../../context/PreferencesContext'

/**
 * Section Manifeste / Vision - Déclaration d'ingénierie logicielle.
 * Règle de Génie Logiciel : 3 couleurs max, design épuré, haute lisibilité, bilingue.
 */
const Manifesto = () => {
  const ref = useScrollReveal()
  const { t, language } = usePreferences()

  const isEn = language === 'en'

  return (
    <section
      id="manifeste"
      className="relative bg-slate-950 py-24 md:py-36 overflow-hidden border-y border-slate-900"
    >
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" aria-hidden="true" />
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-blue-600/10 rounded-full blur-[140px]"
        aria-hidden="true"
      />

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="scroll-reveal inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-xs uppercase tracking-[0.2em] mb-8">
          <Terminal size={14} />
          <span>{t.manifesto.badge}</span>
        </div>

        <div className="scroll-reveal space-y-2 mb-12">
          <h2 className="text-fluid-display font-sans font-black text-white tracking-tight">
            {t.manifesto.line1}
          </h2>
          <h2 className="text-fluid-display font-sans font-black text-outline-tech tracking-tight">
            {t.manifesto.line2}
          </h2>
          <h2 className="text-fluid-display font-sans font-black text-blue-400 tracking-tight">
            {t.manifesto.line3}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-slate-800/80 max-w-5xl">
          <div className="scroll-reveal">
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
              {isEn
                ? 'I engineer modern, performant, and scalable web and mobile software — from relational database design to intuitive user interfaces.'
                : profile.aboutLine}
            </p>
          </div>
          <div className="scroll-reveal">
            <p className="font-mono text-xs sm:text-sm text-slate-400 leading-relaxed bg-slate-900/60 border border-slate-800 p-4 rounded-xl">
              <span className="text-blue-400 font-semibold">{t.manifesto.targetArch}</span>
              <br />
              React · TypeScript · Spring Boot · PostgreSQL · Docker · Clean Architecture
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Manifesto
