import React, { useState } from 'react'
import {
  Code2,
  CheckCircle2,
  GraduationCap,
  Target,
  Compass,
  Quote,
  Sparkles,
} from 'lucide-react'
import { profile } from '../../data/profile'
import SectionHeader from '../common/SectionHeader'
import Card from '../common/Card'
import useScrollReveal from '../../hooks/useScrollReveal'
import { usePreferences } from '../../context/PreferencesContext'

const stageIcons = [Code2, GraduationCap, Target, Compass]

const blocksEn = [
  {
    num: '01',
    label: 'Introduction',
    lines: [
      'Hello! I am',
      'Julio Edwin, Full Stack',
      'Engineer based in',
      'Fianarantsoa, Madagascar.',
    ],
    paragraph:
      'My Computer Science education has equipped me with a strong foundation in modern web and mobile architecture, database modeling, and DevOps pipelines. I pay meticulous attention to code quality, maintainability, and end-user ergonomics.',
  },
  {
    num: '02',
    label: 'My Background',
    lines: [
      '3rd-year CS Student',
      'at EMIT University,',
      'engineering full stack',
      'web & mobile applications',
      'for academic and client projects.',
    ],
    paragraph:
      'My university curriculum has trained me in object-oriented programming, data structures, relational databases, and multi-tier architectures.',
  },
  {
    num: '03',
    label: 'My Career Goals',
    lines: [
      'Join an engineering team',
      'where I can apply my',
      'skills on concrete,',
      'scalable and impactful systems.',
    ],
    paragraph:
      'My objective is to join a forward-thinking engineering team where I can contribute to high-impact production software while expanding my technical breadth.',
  },
  {
    num: '04',
    label: 'How I Work',
    lines: [
      'Understand requirements,',
      'architect clean solutions,',
      'test rigorously,',
      'and continuously iterate.',
    ],
    paragraph:
      'I approach software systematically: gather user requirements, design a modular solution, write clean code, test defensively, and deploy reliably.',
  },
]

const qualitiesEn = [
  'Team Player',
  'Autonomy',
  'Curiosity',
  'Problem Solving',
  'Adaptability',
  'Continuous Learning',
]

/**
 * Section À Propos (About) - Fluide, ultra-lisible et bilingue.
 * Règle de Génie Logiciel : Ergonomie UX, accessibilité et lisibilité des contenus.
 */
const About = () => {
  const ref = useScrollReveal()
  const [activeStep, setActiveStep] = useState(0)
  const { t, language } = usePreferences()

  const isEn = language === 'en'
  const activeBlocks = isEn ? blocksEn : profile.about.blocks
  const activeQualities = isEn ? qualitiesEn : profile.qualities
  const currentBlock = activeBlocks[activeStep] || activeBlocks[0]

  return (
    <section id="a-propos" className="relative bg-slate-950 py-24 md:py-32 overflow-hidden">
      {/* Motifs géométriques tech */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" aria-hidden="true" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="scroll-reveal">
          <SectionHeader
            eyebrow={t.about.eyebrow}
            title={t.about.title}
            description={
              isEn
                ? 'Building web applications from database architecture to user interfaces. Full Stack Developer specializing in React, TypeScript, Next.js, Spring Boot, PostgreSQL, and DevOps.'
                : profile.about.intro
            }
          />
        </div>

        {/* Grille principale : Parcours narratif interactif */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Colonne Gauche : Sélecteur d'étapes (01 à 04) */}
          <div className="lg:col-span-5 space-y-3">
            {activeBlocks.map((block, index) => {
              const Icon = stageIcons[index] || Code2
              const isActive = activeStep === index

              return (
                <button
                  key={block.num}
                  type="button"
                  onClick={() => setActiveStep(index)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-300 flex items-center justify-between cursor-pointer ${
                    isActive
                      ? 'bg-slate-900 border-blue-500 shadow-lg shadow-blue-950/40'
                      : 'bg-slate-900/40 border-slate-800/80 hover:bg-slate-900/80 hover:border-slate-700'
                  }`}
                  aria-pressed={isActive}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`w-10 h-10 rounded-xl flex items-center justify-center font-mono font-bold text-sm transition-colors ${
                        isActive
                          ? 'bg-blue-600 text-white'
                          : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      {block.num}
                    </span>
                    <div>
                      <h3
                        className={`font-sans font-bold text-sm sm:text-base capitalize transition-colors ${
                          isActive ? 'text-white' : 'text-slate-300'
                        }`}
                      >
                        {block.label}
                      </h3>
                      <p className="font-mono text-[11px] text-slate-500 uppercase tracking-wider">
                        {t.about.step} {block.num}
                      </p>
                    </div>
                  </div>

                  <Icon
                    size={18}
                    className={`transition-colors ${
                      isActive ? 'text-blue-400' : 'text-slate-600'
                    }`}
                  />
                </button>
              )
            })}
          </div>

          {/* Colonne Droite : Contenu de l'étape active + Détails */}
          <div className="lg:col-span-7">
            <Card className="min-h-[300px] flex flex-col justify-between p-6 sm:p-8 bg-slate-900/80 border-slate-700/80">
              <div>
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800">
                  <div className="flex items-center gap-2 font-mono text-xs text-blue-400 uppercase tracking-widest">
                    <span>// {currentBlock?.label}</span>
                  </div>
                  <span className="font-mono text-xs text-slate-500">
                    0{activeStep + 1} / 0{activeBlocks.length}
                  </span>
                </div>

                <div className="text-xl sm:text-2xl font-bold font-sans text-white leading-relaxed space-y-1">
                  {currentBlock?.lines.map((line) => (
                    <p key={line} className="block text-slate-100">
                      {line}
                    </p>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-slate-800/80">
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {isEn
                      ? currentBlock.paragraph
                      : profile.about.paragraphs[activeStep % profile.about.paragraphs.length]}
                  </p>
                </div>
              </div>

              {/* Barre de navigation des étapes */}
              <div className="flex items-center justify-between pt-6 mt-6 border-t border-slate-800/80">
                <button
                  type="button"
                  disabled={activeStep === 0}
                  onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider text-slate-400 hover:text-white disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
                >
                  {t.about.prev}
                </button>

                <div className="flex gap-1.5">
                  {activeBlocks.map((_, idx) => (
                    <span
                      key={idx}
                      className={`h-1.5 rounded-full transition-all duration-200 ${
                        idx === activeStep ? 'w-6 bg-blue-500' : 'w-2 bg-slate-700'
                      }`}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  disabled={activeStep === activeBlocks.length - 1}
                  onClick={() => setActiveStep((prev) => Math.min(activeBlocks.length - 1, prev + 1))}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider text-blue-400 hover:text-blue-300 disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
                >
                  {t.about.next}
                </button>
              </div>
            </Card>
          </div>
        </div>

        {/* Qualités humaines et Citation d'ingénierie */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-8 border-t border-slate-900">
          {/* Qualités professionnelles */}
          <div className="lg:col-span-7">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-blue-400 mb-4 flex items-center gap-2">
              <Sparkles size={14} />
              {t.about.qualitiesTitle}
            </h3>
            <ul className="flex flex-wrap gap-2.5">
              {activeQualities.map((quality) => (
                <li
                  key={quality}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs sm:text-sm text-slate-300 font-medium hover:border-blue-500/40 hover:text-white transition-colors"
                >
                  <CheckCircle2 size={14} className="text-blue-400 shrink-0" />
                  <span>{quality}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Citation philosophique */}
          <div className="lg:col-span-5">
            <blockquote className="relative p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80">
              <Quote size={28} className="text-blue-500/30 mb-3" aria-hidden="true" />
              <p className="font-sans font-medium text-slate-200 text-sm sm:text-base leading-relaxed italic">
                {isEn
                  ? '“Software development is not just writing code: it is a craft that turns human needs into robust, maintainable architecture.”'
                  : `« ${profile.about.quotes[0]} »`}
              </p>
              <footer className="mt-4 font-mono text-[11px] text-blue-400 uppercase tracking-widest">
                {t.about.quoteAuthor}
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
