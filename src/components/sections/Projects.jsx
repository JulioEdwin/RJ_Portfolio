import React, { useState, useMemo, useCallback } from 'react'
import {
  ExternalLink,
  Search,
  Code2,
  Layers,
  CheckCircle2,
  AlertCircle,
  ArrowUpRight,
  MonitorSmartphone,
} from 'lucide-react'
import { GithubIcon } from '../common/BrandIcons'
import { projects, projectStats } from '../../data/projects'
import SectionHeader from '../common/SectionHeader'
import Modal from '../common/Modal'
import Card from '../common/Card'
import Button from '../common/Button'
import useScrollReveal from '../../hooks/useScrollReveal'
import { usePreferences } from '../../context/PreferencesContext'

/**
 * Composant de fenêtre de détail de projet.
 * Règle de Génie Logiciel : SRP, A11y & clarté d'information.
 */
const ProjectDetailModal = ({ project, onClose, t }) => {
  if (!project) return null
  const details = project.details || {}
  const m = t.projects.modal

  return (
    <Modal
      isOpen={Boolean(project)}
      onClose={onClose}
      title={project.name}
      subtitle={`// ${project.role}`}
      maxWidth="max-w-4xl"
    >
      <div className="space-y-8">
        {/* Résumé & Problématique */}
        <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
          <p className="text-xs font-mono uppercase tracking-wider text-blue-400 mb-1.5 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            {m.problem}
          </p>
          <p className="text-sm text-slate-300 leading-relaxed">{project.problem}</p>
        </div>

        {/* Contexte & Objectifs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {details.context && (
            <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-800">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400 mb-2">
                {m.context}
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {details.context}
              </p>
            </div>
          )}

          {details.objective && (
            <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-800">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400 mb-2">
                {m.objective}
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {details.objective}
              </p>
            </div>
          )}
        </div>

        {/* Fonctionnalités clés */}
        {details.features?.length > 0 && (
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400 mb-3 flex items-center gap-2">
              <Layers size={14} />
              {m.features}
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {details.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2.5 p-2.5 rounded-lg bg-slate-950/40 border border-slate-800/60 text-xs text-slate-300"
                >
                  <CheckCircle2 size={15} className="text-blue-400 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Architecture Technique */}
        {details.architecture && (
          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400 mb-2 flex items-center gap-2">
              <Code2 size={14} />
              {m.architecture}
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
              {details.architecture}
            </p>
          </div>
        )}

        {/* Difficultés & Solutions */}
        {(details.difficulties?.length > 0 || details.solutions?.length > 0) && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {details.difficulties?.length > 0 && (
              <div className="p-4 rounded-xl bg-slate-950/40 border border-slate-800">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                  <AlertCircle size={14} className="text-blue-400" />
                  {m.challenges}
                </h4>
                <ul className="space-y-2">
                  {details.difficulties.map((diff) => (
                    <li key={diff} className="text-xs text-slate-300 flex items-start gap-2">
                      <span className="text-blue-400 font-bold">•</span>
                      <span>{diff}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {details.solutions?.length > 0 && (
              <div className="p-4 rounded-xl bg-slate-950/40 border border-slate-800">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400 mb-3 flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-blue-400" />
                  {m.solutions}
                </h4>
                <ul className="space-y-2">
                  {details.solutions.map((sol) => (
                    <li key={sol} className="text-xs text-slate-300 flex items-start gap-2">
                      <span className="text-blue-400 font-bold">✓</span>
                      <span>{sol}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* Stack Technologique */}
        <div>
          <p className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5">
            {m.stack}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-lg bg-blue-600/15 border border-blue-500/30 text-blue-300 text-xs font-mono font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Actions au bas de la modale */}
        <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {project.github && (
              <Button
                href={project.github}
                variant="primary"
                size="md"
                icon={GithubIcon}
              >
                {m.viewCode}
              </Button>
            )}
            <Button
              href="https://github.com/JulioEdwin?tab=repositories"
              variant="outlineLight"
              size="md"
              iconRight={ExternalLink}
            >
              {m.allRepos}
            </Button>
          </div>

          <Button variant="ghost" size="md" onClick={onClose}>
            {m.close}
          </Button>
        </div>
      </div>
    </Modal>
  )
}

/**
 * Section Projets Réalisés avec recherche instantanée et filtres réactifs.
 * Règle de Génie Logiciel : 3 couleurs max, UX réactive (0 rechargement), A11y, bilingue.
 */
const Projects = () => {
  const ref = useScrollReveal()
  const { t } = usePreferences()

  const [selectedTag, setSelectedTag] = useState('ALL')
  const [searchQuery, setSearchQuery] = useState('')
  const [activeProject, setActiveProject] = useState(null)

  const tagFilters = [
    { id: 'ALL', label: t.projects.all },
    { id: 'Full Stack', label: 'Full Stack' },
    { id: 'Web', label: 'Web' },
    { id: 'Mobile', label: 'Mobile' },
    { id: 'Backend', label: 'Backend' },
    { id: 'UI', label: 'UI' },
  ]

  // Filtrage combiné par tag et recherche textuelle
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchTag =
        selectedTag === 'ALL' || project.tags.includes(selectedTag)
      const query = searchQuery.trim().toLowerCase()
      if (!query) return matchTag

      const matchText =
        project.name.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.technologies.some((t) => t.toLowerCase().includes(query)) ||
        project.tags.some((t) => t.toLowerCase().includes(query))

      return matchTag && matchText
    })
  }, [selectedTag, searchQuery])

  const openProjectModal = useCallback((project) => {
    setActiveProject(project)
  }, [])

  return (
    <section id="projets" className="relative bg-slate-950 py-24 md:py-32 overflow-hidden border-t border-slate-900">
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" aria-hidden="true" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="scroll-reveal">
          <SectionHeader
            eyebrow={t.projects.eyebrow}
            title={t.projects.title}
            description={t.projects.description}
          />
        </div>

        {/* Métriques Projets */}
        <dl className="scroll-reveal grid grid-cols-3 gap-6 max-w-md p-5 rounded-2xl bg-slate-900/60 border border-slate-800 mb-10">
          {projectStats.map((stat) => (
            <div key={stat.label} className="text-center sm:text-left">
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="font-mono font-bold text-2xl sm:text-3xl text-white">
                  {stat.value}
                </span>
                <span className="block font-mono text-[10px] uppercase tracking-wider text-blue-400 mt-1">
                  {stat.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>

        {/* Barre de Recherche et Filtres */}
        <div className="scroll-reveal flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-10">
          {/* Filtres par tags */}
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filtres de projets">
            {tagFilters.map((tag) => {
              const isActive = selectedTag === tag.id
              return (
                <button
                  key={tag.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setSelectedTag(tag.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                      : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                  }`}
                >
                  {tag.label}
                </button>
              )
            })}
          </div>

          {/* Champ de recherche instantanée */}
          <div className="relative w-full sm:w-72">
            <Search
              size={16}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
              aria-hidden="true"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.projects.searchPlaceholder}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs sm:text-sm text-white placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
              aria-label="Rechercher parmi les projets"
            />
          </div>
        </div>

        {/* Grille des Cartes Projets */}
        {filteredProjects.length === 0 ? (
          <div className="p-12 text-center rounded-2xl bg-slate-900/40 border border-slate-800">
            <p className="text-slate-400 font-mono text-sm mb-3">
              {t.projects.noResults} « {searchQuery} ».
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('')
                setSelectedTag('ALL')
              }}
              className="text-xs text-blue-400 hover:underline font-mono uppercase tracking-wider cursor-pointer"
            >
              {t.projects.resetFilters}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <article
                key={project.id}
                className="group flex flex-col justify-between p-6 rounded-2xl bg-slate-900/70 border border-slate-800/80 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-950/40 transition-all duration-300"
              >
                <div>
                  {/* Bannière d'en-tête de carte */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-[10px] font-semibold uppercase tracking-wider">
                      {project.tags[0]}
                    </span>
                    <span className="font-mono text-xs text-slate-400">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Titre & Rôle */}
                  <h3 className="font-sans font-bold text-lg text-white mb-1.5 group-hover:text-blue-400 transition-colors">
                    {project.name}
                  </h3>
                  <p className="font-mono text-[11px] text-slate-400 uppercase tracking-wider mb-3">
                    // {project.role}
                  </p>

                  {/* Description concise */}
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Badges de Technologies */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded bg-slate-800/80 border border-slate-700/60 text-[11px] font-mono text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-1.5 py-0.5 rounded bg-slate-800/40 text-[10px] font-mono text-slate-400">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Barre d'action */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => openProjectModal(project)}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-500 transition-colors cursor-pointer shadow-sm shadow-blue-600/25"
                  >
                    <span>{t.projects.detailsBtn}</span>
                    <ArrowUpRight size={14} />
                  </button>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:border-blue-400 transition-colors"
                      aria-label={`Code source GitHub de ${project.name}`}
                    >
                      <GithubIcon size={16} />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Lien global GitHub */}
        <div className="scroll-reveal mt-14 text-center">
          <Button
            href="https://github.com/JulioEdwin?tab=repositories"
            variant="outlineLight"
            size="lg"
            icon={GithubIcon}
            iconRight={ExternalLink}
          >
            {t.projects.allGithub}
          </Button>
        </div>
      </div>

      {/* Fenêtre Modale de Détail */}
      <ProjectDetailModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
        t={t}
      />
    </section>
  )
}

export default Projects
