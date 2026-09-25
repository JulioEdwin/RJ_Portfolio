import { useState, useEffect, useCallback } from 'react'
import { ExternalLink, X, AlertCircle, User, MonitorSmartphone } from 'lucide-react'
import { GithubIcon } from '../ui/BrandIcons'
import { projects } from '../../data/projects'
import SectionTitle from '../ui/SectionTitle'
import Badge from '../ui/Badge'
import Button from '../ui/Button'
import useScrollReveal from '../../hooks/useScrollReveal'

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  if (!project) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6 modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Détails du projet : ${project.name}`}
    >
      <div className="absolute inset-0 bg-navy/60 backdrop-blur-sm" />
      <div
        className="relative bg-white w-full sm:max-w-3xl max-h-[92vh] sm:rounded-2xl rounded-t-2xl overflow-y-auto shadow-2xl modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-slate-100 px-5 sm:px-8 py-4 flex items-center justify-between z-10">
          <h3 className="text-lg sm:text-xl font-bold text-navy pr-4">{project.name}</h3>
          <button
            onClick={onClose}
            aria-label="Fermer"
            className="p-2 rounded-lg text-slate-500 hover:text-navy hover:bg-slate-100 transition-colors shrink-0"
          >
            <X size={20} />
          </button>
        </div>

        <div className="px-5 sm:px-8 py-6 space-y-8">
          <div>
            <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Contexte</h4>
            <p className="text-slate-600 leading-relaxed">{project.details.context}</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Objectif</h4>
            <p className="text-slate-600 leading-relaxed">{project.details.objective}</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Fonctionnalités</h4>
            <ul className="space-y-2">
              {project.details.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 text-slate-600">
                  <span className="w-1.5 h-1.5 mt-2 bg-primary rounded-full shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Architecture</h4>
            <p className="text-slate-600 leading-relaxed">{project.details.architecture}</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Difficultés rencontrées</h4>
            <ul className="space-y-2">
              {project.details.difficulties.map((diff) => (
                <li key={diff} className="flex items-start gap-2.5 text-slate-600">
                  <AlertCircle size={16} className="text-amber-500 shrink-0 mt-0.5" />
                  {diff}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Solutions apportées</h4>
            <ul className="space-y-2">
              {project.details.solutions.map((solution) => (
                <li key={solution} className="flex items-start gap-2.5 text-slate-600">
                  <span className="w-1.5 h-1.5 mt-2 bg-emerald-500 rounded-full shrink-0" />
                  {solution}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="primary">{tech}</Badge>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 border-t border-slate-100 pt-6">
            {project.url && (
              <Button href={project.url} target="_blank" rel="noopener noreferrer" variant="primary" size="sm">
                <ExternalLink size={16} />
                Voir la démo
              </Button>
            )}
            {project.github && (
              <Button href={project.github} target="_blank" rel="noopener noreferrer" variant="secondary" size="sm">
                <GithubIcon size={16} />
                Voir le code
              </Button>
            )}
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

  const filters = ['Tous', 'Web', 'Mobile', 'Full Stack', 'Backend', 'UI']

  const filteredProjects =
    filter === 'Tous'
      ? projects
      : projects.filter((project) => project.tags.includes(filter))

  const openModal = useCallback((projectId) => {
    const project = projects.find((p) => p.id === projectId)
    setSelectedProject(project)
  }, [])

  return (
    <section id="projets" className="relative py-24 md:py-36 bg-paper overflow-hidden">
      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="scroll-reveal">
          <SectionTitle
            num={3}
            eyebrow="projets"
            title="Mes projets"
            subtitle="Des projets académiques et personnels concrets, montrant ma capacité à concevoir et développer des applications complètes."
            align="left"
          />
        </div>

        <div className="scroll-reveal flex flex-wrap gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                filter === f
                  ? 'bg-primary text-white shadow-sm shadow-primary/25'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-primary hover:text-primary'
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
              className="group bg-white rounded-2xl border border-slate-200 overflow-hidden flex flex-col hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative h-44 overflow-hidden bg-gradient-to-br from-primary/10 via-primary/5 to-primary-light/10 flex items-center justify-center">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`Aperçu du projet ${project.name}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                ) : (
                  <div className="flex flex-col items-center gap-2 text-primary/50">
                    <MonitorSmartphone size={40} />
                    <p className="text-xs font-medium">Capture à venir</p>
                  </div>
                )}
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-3 flex-wrap">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="primary">{tag}</Badge>
                  ))}
                </div>

                <h3 className="text-lg font-semibold text-navy mb-2 group-hover:text-primary transition-colors">
                  {project.name}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-4">
                  <User size={14} className="text-primary shrink-0" />
                  <span>{project.role}</span>
                </div>

                <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">
                  Technologies
                </p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline">{tech}</Badge>
                  ))}
                </div>

                <div className="flex gap-2 pt-4 border-t border-slate-100">
                  <Button
                    onClick={() => openModal(project.id)}
                    variant="primary"
                    size="sm"
                    className="flex-1 justify-center"
                  >
                    Voir le projet
                  </Button>
                  {project.github && (
                    <Button
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="secondary"
                      size="sm"
                      className="px-3"
                      aria-label={`Voir le code de ${project.name}`}
                    >
                      <GithubIcon size={16} />
                    </Button>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  )
}

export default Projects