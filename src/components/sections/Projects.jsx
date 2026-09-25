import { useState, useEffect, useCallback } from 'react'
import { ExternalLink, X, AlertCircle, MonitorSmartphone, ArrowUpRight } from 'lucide-react'
import { GithubIcon } from '../ui/BrandIcons'
import { projects, projectStats } from '../../data/projects'
import SectionTitle from '../ui/SectionTitle'
import useScrollReveal from '../../hooks/useScrollReveal'

const filters = ['Tous', 'Web', 'Mobile', 'Full Stack', 'Backend', 'UI']

const ProjectModal = ({ project, onClose }) => {
  // Verrouille le scroll uniquement quand la modale est réellement ouverte :
  // sans ce garde-fou, body.overflow: hidden bloquerait le scroll du site entier.
  useEffect(() => {
    if (!project) return undefined

    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [project, onClose])

  if (!project) return null

  const details = project.details || {}

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6 modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Détails du projet : ${project.name}`}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      <div
        className="relative bg-ink-soft w-full sm:max-w-3xl max-h-[92vh] sm:rounded-2xl rounded-t-2xl overflow-y-auto shadow-2xl modal-content border border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-ink-soft/95 backdrop-blur-sm border-b border-white/10 px-5 sm:px-8 py-4 flex items-center justify-between z-10">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary-light mb-1">
              {project.role}
            </p>
            <h3 className="text-lg sm:text-xl font-heading font-extrabold text-white pr-4">
              {project.name}
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Fermer"
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors shrink-0"
          >
            <X size={20} />
          </button>
        </div>

        <div className="px-5 sm:px-8 py-6 space-y-8">
          {details.context && (
            <div>
              <h4 className="text-xs font-semibold text-primary-light uppercase tracking-wider mb-2">
                Contexte
              </h4>
              <p className="text-slate-300 leading-relaxed">{details.context}</p>
            </div>
          )}

          {details.objective && (
            <div>
              <h4 className="text-xs font-semibold text-primary-light uppercase tracking-wider mb-2">
                Objectif
              </h4>
              <p className="text-slate-300 leading-relaxed">{details.objective}</p>
            </div>
          )}

          {details.features?.length > 0 && (
            <div>
              <h4 className="text-xs font-semibold text-primary-light uppercase tracking-wider mb-3">
                Fonctionnalités
              </h4>
              <ul className="space-y-2">
                {details.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-slate-300">
                    <span className="w-1.5 h-1.5 mt-2 bg-primary-light rounded-full shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {details.architecture && (
            <div>
              <h4 className="text-xs font-semibold text-primary-light uppercase tracking-wider mb-2">
                Architecture
              </h4>
              <p className="text-slate-300 leading-relaxed">{details.architecture}</p>
            </div>
          )}

          {details.difficulties?.length > 0 && (
            <div>
              <h4 className="text-xs font-semibold text-primary-light uppercase tracking-wider mb-3">
                Difficultés rencontrées
              </h4>
              <ul className="space-y-2">
                {details.difficulties.map((diff) => (
                  <li key={diff} className="flex items-start gap-2.5 text-slate-300">
                    <AlertCircle size={16} className="text-amber-400 shrink-0 mt-0.5" />
                    {diff}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {details.solutions?.length > 0 && (
            <div>
              <h4 className="text-xs font-semibold text-primary-light uppercase tracking-wider mb-3">
                Solutions apportées
              </h4>
              <ul className="space-y-2">
                {details.solutions.map((solution) => (
                  <li key={solution} className="flex items-start gap-2.5 text-slate-300">
                    <span className="w-1.5 h-1.5 mt-2 bg-emerald-400 rounded-full shrink-0" />
                    {solution}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full bg-primary/20 text-primary-light text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 border-t border-white/10 pt-6">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary-dark transition-colors"
              >
                <GithubIcon size={16} />
                Voir le code
              </a>
            )}
            <a
              href="https://github.com/JulioEdwin?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-lg border border-white/25 text-white hover:bg-white/10 transition-all"
            >
              Tous mes dépôts
              <ExternalLink size={15} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

const Projects = () => {
  const ref = useScrollReveal()
  const [selectedProject, setSelectedProject] = useState(null)
  const [filter, setFilter] = useState('Tous')

  const filteredProjects =
    filter === 'Tous'
      ? projects
      : projects.filter((project) => project.tags.includes(filter))

  const openModal = useCallback((projectId) => {
    const project = projects.find((p) => p.id === projectId)
    setSelectedProject(project)
  }, [])

  return (
    <section id="projets" className="relative bg-ink overflow-hidden">
      <div className="absolute inset-0 bg-dots-light" aria-hidden="true" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
        <div className="scroll-reveal">
          <SectionTitle
            dark
            eyebrow="projets"
            title="Mes projets"
            description="Des projets académiques et personnels concrets, montrant ma capacité à concevoir et développer des applications complètes."
          />
        </div>

        <dl className="scroll-reveal grid grid-cols-3 gap-4 max-w-xl mb-10 border-y border-white/10 py-5">
          {projectStats.map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="block font-display font-black text-3xl text-white leading-none">
                  {stat.value}
                </span>
                <span className="mt-1 block font-mono text-[10px] uppercase tracking-[0.14em] text-slate-500">
                  {stat.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>

        <div className="scroll-reveal flex flex-wrap gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                filter === f
                  ? 'bg-primary text-white shadow-sm shadow-primary/40'
                  : 'bg-white/5 text-slate-400 border border-white/10 hover:border-primary hover:text-white'
              }`}
              aria-pressed={filter === f}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <article
              key={project.id}
              className="scroll-reveal group bg-ink-card border border-white/10 rounded-2xl overflow-hidden flex flex-col hover:border-primary/60 hover:-translate-y-1 transition-all duration-300"
              style={{ transitionDelay: `${(index % 3) * 70}ms` }}
            >
              <div className="relative h-40 overflow-hidden bg-gradient-to-br from-primary/30 via-primary/10 to-transparent flex items-center justify-center">
                <span className="font-display font-black text-6xl text-white/10 group-hover:text-white/20 transition-colors">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur text-[10px] font-bold uppercase tracking-[0.14em] text-white">
                  {project.tags[0]}
                </span>
                {!project.github && !project.demo && (
                  <span className="absolute bottom-3 right-3 flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-slate-300">
                    <MonitorSmartphone size={13} />
                    en cours
                  </span>
                )}
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-heading font-extrabold text-lg text-white mb-2 group-hover:text-primary-light transition-colors">
                  {project.name}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                <p className="text-[10px] font-medium text-slate-500 uppercase tracking-wider mb-2">
                  Technologies
                </p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.technologies.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded-full border border-white/15 text-xs text-slate-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2 pt-4 border-t border-white/10">
                  <button
                    onClick={() => openModal(project.id)}
                    className="flex-1 justify-center inline-flex items-center gap-2 px-4 py-2.5 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary-dark transition-colors cursor-pointer"
                  >
                    Voir le projet
                    <ArrowUpRight size={15} />
                  </button>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Voir le code de ${project.name}`}
                      className="px-3 inline-flex items-center rounded-lg border border-white/15 text-slate-300 hover:text-white hover:border-primary transition-colors"
                    >
                      <GithubIcon size={16} />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="scroll-reveal mt-12 text-center">
          <a
            href="https://github.com/JulioEdwin?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold uppercase tracking-[0.15em] border border-white/25 text-white hover:bg-white/10 transition-all"
          >
            Voir tous mes projets sur GitHub
            <GithubIcon size={16} />
          </a>
        </div>
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  )
}

export default Projects
