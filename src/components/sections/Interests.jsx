import React from 'react'
import {
  Puzzle,
  Sparkles,
  Cpu,
  Users,
  Handshake,
  Palette,
  Music,
  Gamepad2,
  Languages,
  Globe,
} from 'lucide-react'
import { interests } from '../../data/interests'
import { profile } from '../../data/profile'
import SectionHeader from '../common/SectionHeader'
import Card from '../common/Card'
import useScrollReveal from '../../hooks/useScrollReveal'
import { usePreferences } from '../../context/PreferencesContext'

const iconMap = {
  puzzle: Puzzle,
  sparkles: Sparkles,
  cpu: Cpu,
  users: Users,
  handshake: Handshake,
  palette: Palette,
  music: Music,
  gamepad: Gamepad2,
}

const interestsEn = [
  {
    icon: 'puzzle',
    title: 'Problem Solving & Logic',
    description: 'Passion for algorithms, competitive coding challenges, and architecting elegant solutions for complex technical issues.',
  },
  {
    icon: 'sparkles',
    title: 'Technology Watch & Innovation',
    description: 'Continuous exploration of open-source ecosystems, software engineering trends, AI integration, and cloud advancements.',
  },
  {
    icon: 'palette',
    title: 'UI/UX Craft & Ergonomics',
    description: 'Designing intuitive, high-speed user experiences with strict accessibility standards and minimalist aesthetics.',
  },
  {
    icon: 'users',
    title: 'Teamwork & Knowledge Sharing',
    description: 'Active collaboration, pair programming, code reviews, and knowledge exchange within academic and professional teams.',
  },
]

const languagesEn = [
  { name: 'Malagasy', level: 'Native Language' },
  { name: 'French', level: 'Certified — FLTC Group (2024)' },
  { name: 'English', level: 'Technical & Professional' },
]

/**
 * Section Centres d'Intérêt & Langues.
 * Règle de Génie Logiciel : 3 couleurs max, design sobre et aéré, bilingue.
 */
const Interests = () => {
  const ref = useScrollReveal()
  const { t, language } = usePreferences()
  const isEn = language === 'en'

  const activeInterests = isEn ? interestsEn : interests
  const activeLanguages = isEn ? languagesEn : profile.languages

  return (
    <section id="interets" className="relative bg-slate-950 py-24 md:py-32 overflow-hidden border-t border-slate-900">
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" aria-hidden="true" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="scroll-reveal">
          <SectionHeader
            eyebrow={t.interests.eyebrow}
            title={t.interests.title}
            description={t.interests.description}
          />
        </div>

        {/* Grille des centres d'intérêt */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {activeInterests.map((item, index) => {
            const Icon = iconMap[item.icon] || Sparkles

            return (
              <div
                key={item.title}
                className="scroll-reveal"
                style={{ transitionDelay: `${(index % 4) * 60}ms` }}
              >
                <Card className="h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="w-11 h-11 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center border border-blue-500/20">
                        <Icon size={20} />
                      </span>
                      <span className="font-mono text-xs text-slate-400">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="font-sans font-bold text-base text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </Card>
              </div>
            )
          })}
        </div>

        {/* Profil Plurilingue */}
        <div className="scroll-reveal p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center border border-blue-500/20">
              <Languages size={20} />
            </span>
            <div>
              <h3 className="font-sans font-bold text-lg text-white">
                {t.interests.languagesTitle}
              </h3>
              <p className="font-mono text-xs text-blue-400">
                {t.interests.languagesSub}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {activeLanguages.map((lang) => (
              <div
                key={lang.name}
                className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center justify-between"
              >
                <div>
                  <p className="font-sans font-bold text-sm text-white">
                    {lang.name}
                  </p>
                  <p className="font-mono text-xs text-blue-400 mt-0.5">
                    {lang.level}
                  </p>
                </div>
                <Globe size={18} className="text-slate-500" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Interests
