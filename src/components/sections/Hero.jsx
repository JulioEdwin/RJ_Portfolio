import React from 'react'
import { ArrowRight, FileDown, Send, ChevronDown } from 'lucide-react'
import { profile } from '../../data/profile'
import Button from '../common/Button'
import { usePreferences } from '../../context/PreferencesContext'

/**
 * Section Hero - Hiérarchie claire, typographie proportionnée, orientée preuves et réalisations.
 * Améliorations UX : Nom équilibré, métier mis au centre, CTAs hiérarchisés sans surcharge.
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
      className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 pt-24 pb-12 md:pt-28 md:pb-16"
    >
      {/* Motifs et halos technologiques adoucis */}
      <div className="absolute inset-0 bg-tech-grid opacity-25 pointer-events-none" aria-hidden="true" />
      <div
        className="pointer-events-none absolute top-1/4 -right-48 w-80 h-80 md:w-96 md:h-96 bg-blue-600/10 rounded-full blur-[100px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-32 -left-48 w-80 h-80 md:w-96 md:h-96 bg-blue-500/10 rounded-full blur-[100px]"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Colonne Gauche : Titres, Métier et Présentation orientée valeur */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Badge Disponibilité & Stage */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs mb-5 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span className="font-mono text-blue-400 font-semibold tracking-wide">
                {t.hero.status}
              </span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-300 font-medium">
                {t.hero.statusSub}
              </span>
            </div>

            {/* Nom & Prénom proportionnés (56-72px max desktop, 36-44px mobile) */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold tracking-tight text-white mb-2">
              {profile.firstName} {profile.lastName}
            </h1>

            {/* Rôle & Spécialité : Au centre de la hiérarchie visuelle */}
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-blue-400 font-sans tracking-tight mb-4">
              {t.hero.role}
            </h2>

            {/* Tagline concise en 2-3 lignes orientée preuves et impact */}
            <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8">
              {t.hero.tagline}
            </p>

            {/* Actions hiérarchisées : 1 Primaire, 1 Secondaire, 1 Lien discret */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10 w-full sm:w-auto">
              <Button
                href="#projets"
                variant="primary"
                size="md"
                iconRight={ArrowRight}
                className="w-full sm:w-auto shadow-md shadow-blue-600/30"
              >
                {t.hero.exploreProjects}
              </Button>

              <Button
                href={cvLink}
                variant="outlineLight"
                size="md"
                icon={FileDown}
                className="w-full sm:w-auto"
              >
                {t.hero.downloadCv}
              </Button>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-slate-400 hover:text-white transition-colors cursor-pointer w-full sm:w-auto"
              >
                <Send size={14} className="text-blue-400" />
                <span>{t.hero.contactMe}</span>
              </a>
            </div>

            {/* Statistiques clés de l'ingénieur */}
            <dl className="grid grid-cols-3 gap-6 sm:gap-10 pt-6 border-t border-slate-800/80 w-full max-w-lg">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span className="font-mono font-bold text-2xl sm:text-3xl text-white tracking-tight">
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

          {/* Colonne Droite : Carte Photo de Profil avec cadrage soigné et halo allégé */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative animate-float-soft">
              {/* Halo tech atténué et subtil */}
              <div
                className="pointer-events-none absolute -inset-3 bg-blue-600/10 rounded-3xl blur-xl"
                aria-hidden="true"
              />

              {/* Cadre de l'image ajusté */}
              <div className="relative w-60 h-72 sm:w-68 sm:h-84 md:w-72 md:h-[370px] rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-900 shadow-xl">
                <img
                  src={profile.photo}
                  alt={`Portrait professionnel de ${profile.name}`}
                  className="w-full h-full object-cover object-top filter brightness-95 contrast-105"
                  width={640}
                  height={800}
                  loading="eager"
                  fetchPriority="high"
                />

                {/* Dégradé de fusion inférieur discret */}
                <div
                  className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"
                  aria-hidden="true"
                />

                {/* Badge d'identification simplifié : Pas de répétition inutile */}
                <div className="absolute bottom-3 inset-x-3 p-2.5 rounded-xl bg-slate-900/90 border border-slate-700/80 backdrop-blur-md flex items-center justify-between">
                  <span className="font-mono text-xs text-slate-200 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                    EMIT Fianarantsoa
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-blue-500/10 text-blue-400 font-mono text-[10px] font-semibold border border-blue-500/20">
                    {t.hero.activeStatus}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Flèche d'indication de défilement discrète vers les Projets */}
        <div className="hidden md:flex justify-center mt-10">
          <a
            href="#projets"
            className="inline-flex flex-col items-center gap-1.5 text-slate-400 hover:text-blue-400 transition-colors font-mono text-[11px] uppercase tracking-widest"
            aria-label="Faire défiler vers la section Projets"
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
