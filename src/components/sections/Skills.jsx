import React, { useState } from 'react'
import {
  LayoutGrid,
  Server,
  Smartphone,
  Database,
  Wrench,
  Layers,
  Code2,
} from 'lucide-react'
import { skillCategories, techMarquee } from '../../data/skills'
import SectionHeader from '../common/SectionHeader'
import Card from '../common/Card'
import Marquee from '../common/Marquee'
import useScrollReveal from '../../hooks/useScrollReveal'
import { usePreferences } from '../../context/PreferencesContext'

const iconMap = {
  layout: LayoutGrid,
  server: Server,
  smartphone: Smartphone,
  database: Database,
  wrench: Wrench,
  layers: Layers,
}

const categoryTranslationsEn = {
  'Front-end': 'Front-end',
  'Mobile': 'Mobile',
  'Back-end': 'Back-end',
  'Bases de données': 'Databases',
  'Méthodologies': 'Methodologies',
  'Outils & DevOps': 'Tooling & DevOps',
}

/**
 * Section Compétences & Technologies - Claire, structurée et filtrable.
 * Règle de Génie Logiciel : Organisation logique en domaines d'ingénierie logicielle.
 */
const Skills = () => {
  const ref = useScrollReveal()
  const { t, language } = usePreferences()
  const isEn = language === 'en'

  const [selectedFilter, setSelectedFilter] = useState('ALL')

  const getCatTitle = (title) => (isEn ? categoryTranslationsEn[title] || title : title)

  const categories = [
    { id: 'ALL', label: t.skills.all },
    ...skillCategories.map((c) => ({ id: c.title, label: getCatTitle(c.title) })),
  ]

  const filteredCategories =
    selectedFilter === 'ALL'
      ? skillCategories
      : skillCategories.filter((c) => c.title === selectedFilter)

  return (
    <section id="competences" className="relative bg-slate-950 py-24 md:py-32 overflow-hidden">
      {/* Bandeau défilant de technologies */}
      <Marquee items={techMarquee} className="mb-20" />

      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" aria-hidden="true" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="scroll-reveal">
          <SectionHeader
            eyebrow={t.skills.eyebrow}
            title={t.skills.title}
            description={t.skills.description}
          />
        </div>

        {/* Filtres par domaine d'ingénierie */}
        <div className="scroll-reveal flex flex-wrap gap-2 mb-10" role="tablist" aria-label="Filtres de compétences">
          {categories.map((cat) => {
            const isActive = selectedFilter === cat.id
            return (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setSelectedFilter(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                    : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                }`}
              >
                {cat.label}
              </button>
            )
          })}
        </div>

        {/* Grille des catégories de compétences */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category, index) => {
            const Icon = iconMap[category.icon] || Code2

            return (
              <div
                key={category.title}
                className="scroll-reveal"
                style={{ transitionDelay: `${(index % 3) * 70}ms` }}
              >
                <Card className="h-full flex flex-col justify-between">
                  <div>
                    {/* En-tête de catégorie */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center gap-3">
                        <span className="w-11 h-11 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center border border-blue-500/20 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                          <Icon size={20} />
                        </span>
                        <div>
                          <h3 className="font-sans font-bold text-base text-white">
                            {getCatTitle(category.title)}
                          </h3>
                          <span className="font-mono text-[10px] text-blue-400 uppercase tracking-widest">
                            {category.skills.length} {t.skills.techCount}
                          </span>
                        </div>
                      </div>

                      <span className="font-mono text-xs text-slate-400">
                        0{index + 1}
                      </span>
                    </div>

                    {/* Liste des tags de technologies */}
                    <ul className="flex flex-wrap gap-2 pt-2">
                      {category.skills.map((skill) => (
                        <li
                          key={skill.name}
                          className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300 font-medium hover:border-blue-500/50 hover:text-white hover:bg-slate-800/80 transition-all cursor-default"
                        >
                          {skill.name}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 mt-6 border-t border-slate-800/80">
                    <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider">
                      {t.skills.masteredHint}
                    </span>
                  </div>
                </Card>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills
