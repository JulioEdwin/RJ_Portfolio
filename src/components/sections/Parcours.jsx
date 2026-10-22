import React, { useState } from 'react'
import { GraduationCap, Briefcase, Award, Calendar, CheckCircle2 } from 'lucide-react'
import { education } from '../../data/education'
import { experiences } from '../../data/experience'
import SectionHeader from '../common/SectionHeader'
import Card from '../common/Card'
import useScrollReveal from '../../hooks/useScrollReveal'
import { usePreferences } from '../../context/PreferencesContext'

const buildTimeline = (isEn = false) => {
  const formations = education.map((item) => ({
    ...item,
    kind: 'formation',
    title: item.degree,
    organization: item.school,
    summary: item.description,
    points: item.highlights,
    technologies: null,
  }))

  const professional = experiences.map((item) => ({
    ...item,
    kind: item.type === 'académique' ? 'academique' : 'professionnel',
    title: item.position,
    summary: item.description,
    points: item.responsibilities,
  }))

  return [
    formations[0],
    professional.find((item) => item.kind === 'professionnel' && item.period.includes('aujourd')),
    professional.find((item) => item.kind === 'academique'),
    professional.find((item) => item.kind === 'professionnel' && item.period.includes('Juin')),
    formations[1],
    formations[2],
  ].filter(Boolean)
}

/**
 * Section Parcours & Timeline Académique & Professionnelle.
 * Règle de Génie Logiciel : 3 couleurs max, hiérarchie temporelle claire, support bilingue.
 */
const Parcours = () => {
  const ref = useScrollReveal()
  const { t, language } = usePreferences()
  const isEn = language === 'en'

  const [filter, setFilter] = useState('tous')
  const timeline = buildTimeline(isEn)

  const filteredItems = timeline.filter((item) => {
    if (filter === 'formation') return item.kind === 'formation'
    if (filter === 'experience') return item.kind === 'professionnel' || item.kind === 'academique'
    return true
  })

  return (
    <section id="parcours" className="relative bg-slate-950 py-24 md:py-32 overflow-hidden border-t border-slate-900">
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" aria-hidden="true" />

      <div ref={ref} className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="scroll-reveal">
          <SectionHeader
            align="center"
            eyebrow={t.timeline.eyebrow}
            title={t.timeline.title}
            description={t.timeline.description}
          />
        </div>

        {/* Filtres de la timeline */}
        <div className="scroll-reveal flex justify-center gap-2 mb-14" role="tablist" aria-label="Filtres de parcours">
          <button
            type="button"
            role="tab"
            aria-selected={filter === 'tous'}
            onClick={() => setFilter('tous')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
              filter === 'tous'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            {t.timeline.all}
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={filter === 'experience'}
            onClick={() => setFilter('experience')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
              filter === 'experience'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            {t.timeline.experiences}
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={filter === 'formation'}
            onClick={() => setFilter('formation')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
              filter === 'formation'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            {t.timeline.education}
          </button>
        </div>

        {/* Ligne chronologique */}
        <div className="relative pl-6 sm:pl-8 border-l border-slate-800 space-y-10 sm:space-y-12 ml-2 sm:ml-4">
          {filteredItems.map((item, index) => {
            const isFormation = item.kind === 'formation'
            const Icon = isFormation ? GraduationCap : Briefcase

            return (
              <div
                key={`${item.title}-${item.period}`}
                className="relative group transition-all duration-300"
              >
                {/* Pastille sur la ligne */}
                <div
                  className="absolute -left-[31px] sm:-left-[39px] top-6 w-4 h-4 rounded-full bg-slate-950 border-2 border-blue-500 group-hover:scale-125 transition-transform"
                  aria-hidden="true"
                />

                <Card className="p-6 sm:p-7 bg-slate-900/80 border-slate-800 hover:border-blue-500/50">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-2.5">
                      <span className="p-2 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
                        <Icon size={16} />
                      </span>
                      <span className="font-mono text-xs font-semibold uppercase tracking-wider text-blue-400">
                        {isFormation ? t.timeline.formationBadge : t.timeline.experienceBadge}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/60 border border-slate-800 text-slate-400 font-mono text-xs">
                      <Calendar size={13} className="text-blue-400" />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  <h3 className="font-sans font-bold text-lg text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="font-mono text-xs text-blue-400 mb-3">
                    {item.organization}
                  </p>

                  <p className="text-sm text-slate-400 leading-relaxed mb-4">
                    {item.summary}
                  </p>

                  {/* Points clés */}
                  {item.points?.length > 0 && (
                    <ul className="space-y-1.5 mb-4">
                      {item.points.map((point) => (
                        <li key={point} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 size={13} className="text-blue-400 shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Technologies */}
                  {item.technologies && (
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/80">
                      {item.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-0.5 rounded bg-blue-500/10 border border-blue-500/20 text-blue-300 text-[11px] font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </Card>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Parcours
