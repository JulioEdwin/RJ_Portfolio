import React from 'react'
import { ArrowRight, FileDown, Terminal, Sparkles, ChevronDown } from 'lucide-react'
import { profile } from '../../data/profile'
import Button from '../common/Button'
import { usePreferences } from '../../context/PreferencesContext'

/**
 * Section Hero - Première impression fluide, moderne et hautement lisible.
 * Règle de Génie Logiciel : 3 couleurs max, 0 CLS (dimensions images explicites), A11y, bilingue.
 */
const Hero = () => {
  const { t, language } = usePreferences()

  const stats = [
    { value: '3', label: t.hero.yearsExp },
    { value: '12+', label: t.hero.projectsCount },
    { value: '15+', label: t.hero.techsCount },
  ]

  const cvLink = language === 'en' ? profile.cvEn : profile.cv

  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 pt-28 pb-16 md:py-32"
    >
      {/* Motifs et halos technologiques (Bleu Tech strictly) */}
      <div className="absolute inset-0 bg-tech-grid opacity-60 pointer-events-none" aria-hidden="true" />
      <div
        className="pointer-events-none absolute top-1/4 -right-48 w-96 h-96 md:w-[500px] md:h-[500px] bg-blue-600/15 rounded-full blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-32 -left-48 w-96 h-96 md:w-[480px] md:h-[480px] bg-blue-500/10 rounded-full blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Colonne Gauche : Titres et Présentation */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Badge Terminal Statut */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-slate-300 font-mono text-xs mb-6 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-blue-400 font-semibold">// {t.hero.status}</span>
              <span className="text-slate-400">•</span>
              <span className="text-slate-300">{t.hero.statusSub}</span>
            </div>

            {/* Titre Principal */}
            <h1 className="text-fluid-display font-sans tracking-tight text-white mb-4">
              <span>{profile.firstName}</span>{' '}
              <span className="text-outline-tech block sm:inline">
                {profile.lastName}
              </span>
            </h1>

            {/* Rôle & Spécialité */}
            <p className="text-xl sm:text-2xl font-bold text-blue-400 font-sans tracking-tight mb-5">
              {t.hero.role}
            </p>

            {/* Tagline / Pitch */}
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl mb-8">
              {t.hero.tagline}
            </p>

            {/* Actions principales (CTAs) */}
            <div className="flex flex-wrap items-center gap-3.5 mb-12 w-full sm:w-auto">
              <Button
                href="#projets"
                variant="primary"
                size="lg"
                iconRight={ArrowRight}
                className="w-full sm:w-auto"
              >
                {t.hero.exploreProjects}
              </Button>

              <Button
                href={cvLink}
                variant="secondary"
                size="lg"
                icon={FileDown}
                className="w-full sm:w-auto"
              >
                {t.hero.downloadCv}
              </Button>

              <Button
                href="#contact"
                variant="outlineLight"
                size="lg"
                className="w-full sm:w-auto"
              >
                {t.hero.contactMe}
              </Button>
            </div>

            {/* Statistiques clés de l'ingénieur */}
            <dl className="grid grid-cols-3 gap-6 sm:gap-10 pt-6 border-t border-slate-800/80 w-full max-w-lg">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span className="font-mono font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
                      {stat.value}
                    </span>
                    <span className="block font-mono text-[11px] uppercase tracking-wider text-slate-400 mt-1">
                      {stat.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Colonne Droite : Carte Photo de Profil Tech */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative animate-float-soft">
              {/* Effet Glow ardoise/bleu */}
              <div
                className="pointer-events-none absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-blue-400/20 rounded-3xl blur-2xl"
                aria-hidden="true"
              />

              {/* Cadre de l'image */}
              <div className="relative w-64 h-80 sm:w-72 sm:h-96 md:w-80 md:h-[420px] rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-900 shadow-2xl">
                <img
                  src={profile.photo}
                  alt={`Portrait professionnel de ${profile.name}`}
                  className="w-full h-full object-cover object-top filter brightness-95 contrast-105"
                  width={640}
                  height={800}
                  loading="eager"
                  fetchPriority="high"
                />

                {/* Dégradé de fusion inférieur */}
                <div
                  className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"
                  aria-hidden="true"
                />

                {/* Badge d'identification flottant */}
                <div className="absolute bottom-4 inset-x-4 p-3 rounded-xl bg-slate-900/90 border border-slate-700/80 backdrop-blur-md flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="font-sans font-bold text-xs text-white">
                      {profile.firstName} {profile.lastName}
                    </span>
                    <span className="font-mono text-[10px] text-blue-400">
                      EMIT Fianarantsoa (L3)
                    </span>
                  </div>
                  <span className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-blue-500/10 text-blue-400 font-mono text-[10px] font-semibold border border-blue-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-ping" />
                    {t.hero.activeStatus}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Flèche d'indication de défilement discrète */}
        <div className="hidden md:flex justify-center mt-12">
          <a
            href="#a-propos"
            className="inline-flex flex-col items-center gap-1.5 text-slate-500 hover:text-blue-400 transition-colors font-mono text-[11px] uppercase tracking-widest"
            aria-label="Faire défiler vers la section À propos"
          >
            <span>{t.hero.discover}</span>
            <ChevronDown size={16} className="animate-bounce text-blue-400" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
