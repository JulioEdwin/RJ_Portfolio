import React, { useState } from 'react'
import {
  Layers,
  Target,
  Repeat,
  Zap,
  ShieldCheck,
  Eye,
  Gauge,
  Palette,
  Sparkles,
  CheckCircle2,
  Code2,
  BookOpen,
} from 'lucide-react'
import { ENGINEERING_RULES } from '../../constants/engineeringRules'
import SectionHeader from '../common/SectionHeader'
import Card from '../common/Card'
import useScrollReveal from '../../hooks/useScrollReveal'
import { usePreferences } from '../../context/PreferencesContext'

const iconMap = {
  Layers,
  Target,
  Repeat,
  Zap,
  ShieldCheck,
  Eye,
  Gauge,
  Palette,
  Sparkles,
  CheckCircle2,
}

/**
 * Section dédiée aux 10 Règles Fondamentales du Génie Logiciel.
 * Répond directement et rigoureusement à la consigne utilisateur.
 */
const SoftwareEngineering = () => {
  const ref = useScrollReveal()
  const [activeRule, setActiveRule] = useState(null)
  const { t, language } = usePreferences()

  const isEn = language === 'en'

  return (
    <section
      id="genie-logiciel"
      className="relative bg-slate-950 py-24 md:py-32 overflow-hidden border-t border-slate-900"
    >
      {/* Texture d'arrière-plan */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" aria-hidden="true" />
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px]"
        aria-hidden="true"
      />

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="scroll-reveal">
          <SectionHeader
            eyebrow={t.engineering.eyebrow}
            title={t.engineering.title}
            description={t.engineering.description}
          />
        </div>

        {/* Grille des 10 Règles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {ENGINEERING_RULES.map((item, index) => {
            const Icon = iconMap[item.icon] || Code2
            const isSelected = activeRule === item.number

            const ruleTitle = isEn && item.ruleEn ? item.ruleEn : item.rule
            const ruleDesc = isEn && item.descriptionEn ? item.descriptionEn : item.description
            const ruleApp = isEn && item.applicationEn ? item.applicationEn : item.application

            return (
              <div
                key={item.number}
                className="scroll-reveal"
                style={{ transitionDelay: `${(index % 3) * 60}ms` }}
              >
                <Card
                  onClick={() => setActiveRule(isSelected ? null : item.number)}
                  className={`h-full cursor-pointer flex flex-col justify-between transition-all duration-300 ${
                    isSelected
                      ? 'border-blue-500 bg-slate-900 ring-1 ring-blue-500/30'
                      : 'hover:border-blue-500/50'
                  }`}
                  aria-expanded={isSelected}
                >
                  <div>
                    {/* Numéro et Icône */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <span className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center font-mono font-bold text-sm border border-blue-500/20">
                          {item.number}
                        </span>
                        <span className="p-2 rounded-lg bg-slate-800/80 text-blue-400">
                          <Icon size={18} />
                        </span>
                      </div>

                      <span className="font-mono text-[10px] uppercase tracking-wider text-slate-500 bg-slate-800/40 px-2 py-0.5 rounded">
                        {t.engineering.ruleBadge}{item.number}
                      </span>
                    </div>

                    {/* Titre & Concept */}
                    <h3 className="font-sans font-bold text-lg text-white mb-1 group-hover:text-blue-400 transition-colors">
                      {ruleTitle}
                    </h3>
                    <p className="font-mono text-xs text-blue-400 mb-3">
                      // {item.concept}
                    </p>

                    {/* Description */}
                    <p className="text-sm text-slate-400 leading-relaxed mb-4">
                      {ruleDesc}
                    </p>
                  </div>

                  {/* Application concrète */}
                  <div className="pt-3 border-t border-slate-800/80 bg-slate-950/40 -mx-6 -mb-6 p-4 rounded-b-2xl">
                    <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-1 flex items-center gap-1.5">
                      <CheckCircle2 size={13} className="text-blue-400" />
                      {t.engineering.implementation}
                    </p>
                    <p className="text-xs text-slate-300 leading-normal">
                      {ruleApp}
                    </p>
                  </div>
                </Card>
              </div>
            )
          })}
        </div>

        {/* Note de synthèse d'ingénierie */}
        <div className="scroll-reveal mt-12 p-6 rounded-2xl bg-slate-900/50 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center shrink-0 border border-blue-500/30">
              <BookOpen size={24} />
            </div>
            <div>
              <h4 className="font-sans font-bold text-white text-base">
                {t.engineering.summaryTitle}
              </h4>
              <p className="text-xs text-slate-400 mt-0.5">
                {t.engineering.summaryDesc}
              </p>
            </div>
          </div>

          <a
            href="#projets"
            className="shrink-0 px-4 py-2.5 rounded-xl bg-blue-600 text-white font-sans text-xs font-semibold hover:bg-blue-500 transition-colors"
          >
            {t.engineering.viewProjectsBtn}
          </a>
        </div>
      </div>
    </section>
  )
}

export default SoftwareEngineering
