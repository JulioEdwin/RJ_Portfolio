import { useEffect, useRef, useState } from 'react'
import { GraduationCap, Briefcase, Award } from 'lucide-react'
import { education } from '../../data/education'
import { experiences } from '../../data/experience'
import SectionTitle from '../ui/SectionTitle'
import useScrollReveal from '../../hooks/useScrollReveal'

const buildTimeline = () => {
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
    professional.find((item) => item.kind === 'academique'),
    professional.find((item) => item.kind === 'professionnel' && item.period.includes('aujourd')),
    professional.find((item) => item.kind === 'professionnel' && item.period.includes('Juin')),
    formations[1],
    formations[2],
  ].filter(Boolean)
}

const kindMeta = {
  formation: { icon: GraduationCap, label: 'Formation', color: 'bg-primary/10 text-primary' },
  academique: { icon: Award, label: 'Projet académique', color: 'bg-primary/10 text-primary' },
  professionnel: {
    icon: Briefcase,
    label: 'Expérience',
    color: 'bg-emerald-500/10 text-emerald-600',
  },
}

const TimelineItem = ({ item, index }) => {
  const ref = useScrollReveal(0.25)
  const meta = kindMeta[item.kind]
  const Icon = meta.icon
  const isLeft = index % 2 === 0

  return (
    <div ref={ref} className="scroll-reveal relative md:grid md:grid-cols-2 md:gap-14 items-start">
      <span
        className="absolute left-5 md:left-1/2 -translate-x-1/2 top-6 w-3.5 h-3.5 rounded-full bg-primary ring-4 ring-primary/15 border-2 border-light z-10"
        aria-hidden="true"
      />

      <div className={`ml-12 md:ml-0 ${isLeft ? 'md:pr-4' : 'md:col-start-2 md:pl-4'}`}>
        <article className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-primary/60 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
          <div
            className={`flex items-center gap-3 mb-4 flex-wrap ${isLeft ? 'md:justify-end md:flex-row-reverse' : ''}`}
          >
            <span className={`w-10 h-10 rounded-xl flex items-center justify-center ${meta.color}`}>
              <Icon size={18} />
            </span>
            <span className="px-3 py-1 rounded-full bg-paper border border-slate-200 font-mono text-[11px] text-slate-500">
              {item.period}
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-primary">
              {meta.label}
            </span>
          </div>

          <h3
            className={`font-heading font-extrabold text-lg md:text-xl text-navy mb-1 ${isLeft ? 'md:text-right' : ''}`}
          >
            {item.title}
          </h3>
          <p
            className={`text-sm font-medium text-primary mb-3 ${isLeft ? 'md:text-right' : ''}`}
          >
            {item.organization}
          </p>
          <p
            className={`text-sm text-slate-500 leading-relaxed mb-4 ${isLeft ? 'md:text-right' : ''}`}
          >
            {item.summary}
          </p>

          <ul className={`space-y-1.5 mb-4 ${isLeft ? 'md:text-right' : ''}`}>
            {(item.points || []).slice(0, 4).map((point) => (
              <li
                key={point}
                className={`flex items-start gap-2 text-sm text-slate-600 ${isLeft ? 'md:flex-row-reverse' : ''}`}
              >
                <span className="w-1 h-1 mt-2 bg-primary rounded-full shrink-0" />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          {item.technologies && (
            <div className={`flex flex-wrap gap-1.5 ${isLeft ? 'md:justify-end' : ''}`}>
              {item.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </article>
      </div>
    </div>
  )
}

const Parcours = () => {
  const containerRef = useRef(null)
  const [progress, setProgress] = useState(0)
  const headerRef = useScrollReveal()
  const timeline = buildTimeline()

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let frame = null

    const update = () => {
      frame = null
      const rect = container.getBoundingClientRect()
      const passed = window.innerHeight * 0.6 - rect.top
      const ratio = rect.height > 0 ? Math.min(Math.max(passed / rect.height, 0), 1) : 0
      setProgress(ratio)
    }

    const handleScroll = () => {
      if (frame === null) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
      if (frame !== null) cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <section id="parcours" className="relative bg-light overflow-hidden">
      <div className="absolute inset-0 bg-grid-light" aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
        <div ref={headerRef} className="scroll-reveal">
          <SectionTitle
            align="center"
            eyebrow="timeline académique & professionnelle"
            title="Mon parcours"
            description="De la Licence en Informatique à l'EMIT Fianarantsoa jusqu'aux expériences professionnelles, les étapes qui structurent mon parcours."
          />
        </div>

        <div ref={containerRef} className="relative mt-16">
          <div
            className="pointer-events-none absolute left-5 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[3px] bg-primary/15 rounded-full"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute left-5 md:left-1/2 md:-translate-x-1/2 top-0 w-[3px] bg-primary rounded-full origin-top"
            style={{ height: '100%', transform: `scaleY(${progress})` }}
            aria-hidden="true"
          />

          <div className="space-y-12 md:space-y-24">
            {timeline.map((item, index) => (
              <TimelineItem key={`${item.title}-${item.period}`} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Parcours
