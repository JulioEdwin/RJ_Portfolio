import { Briefcase } from 'lucide-react'
import { experiences } from '../../data/experience'
import SectionTitle from '../ui/SectionTitle'
import Badge from '../ui/Badge'
import Timeline from '../ui/Timeline'
import useScrollReveal from '../../hooks/useScrollReveal'

const Experience = () => {
  const ref = useScrollReveal()

  return (
    <section id="experiences" className="relative py-24 md:py-36 bg-dark overflow-hidden">
      <div className="absolute inset-0 bg-dots-light" aria-hidden="true" />
      <div className="absolute bottom-20 -left-40 w-[400px] h-[400px] bg-primary/15 rounded-full blur-3xl" aria-hidden="true" />

      <div ref={ref} className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="scroll-reveal">
          <SectionTitle
            num={4}
            eyebrow="expériences"
            title="Expériences"
            subtitle="Mon parcours professionnel et académique, avec les responsabilités et technologies associées."
            align="left"
            dark
          />
        </div>

        <Timeline
          dark
          items={experiences}
          renderItem={(exp, index) => (
            <div
              className={`bg-dark-card border border-white/10 rounded-2xl p-6 md:p-7 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 ${
                index % 2 === 1 ? 'md:text-right' : ''
              }`}
            >
              <div className={`flex items-center gap-2 mb-2 ${index % 2 === 1 ? 'md:justify-end flex-row-reverse' : ''}`}>
                <h3 className="text-lg font-semibold text-white">{exp.position}</h3>
                <Briefcase size={18} className="text-primary-light shrink-0" />
              </div>

              <p className={`text-primary-light font-medium text-sm mb-1 ${index % 2 === 1 ? 'md:text-right' : ''}`}>
                {exp.organization}
              </p>
              <p className={`inline-block px-3 py-1 mb-4 rounded-full bg-primary/20 text-primary-light text-xs font-semibold font-mono ${index % 2 === 1 ? 'md:ml-auto block' : ''}`}>
                {exp.period}
              </p>

              <p className={`text-sm text-slate-400 leading-relaxed mb-4 ${index % 2 === 1 ? 'md:text-right' : ''}`}>
                {exp.description}
              </p>

              <h4 className={`text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 ${index % 2 === 1 ? 'md:text-right' : ''}`}>
                Responsabilités
              </h4>
              <ul className={`space-y-1.5 mb-4 ${index % 2 === 1 ? 'md:text-right' : ''}`}>
                {exp.responsibilities.map((resp) => (
                  <li key={resp} className="flex items-start gap-2 text-sm text-slate-300 justify-start md:justify-start">
                    <span className="w-1 h-1 mt-2 bg-primary-light rounded-full shrink-0 order-1" />
                    <span className={index % 2 === 1 ? 'md:order-0' : ''}>{resp}</span>
                  </li>
                ))}
              </ul>

              <div className={`flex flex-wrap gap-1.5 ${index % 2 === 1 ? 'md:justify-end' : ''}`}>
                {exp.technologies.map((tech) => (
                  <Badge key={tech} variant="outlineLight">{tech}</Badge>
                ))}
              </div>
            </div>
          )}
        />
      </div>
    </section>
  )
}

export default Experience