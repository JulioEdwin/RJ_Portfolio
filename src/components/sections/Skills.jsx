import { LayoutGrid, Server, Smartphone, Database, Wrench, Layers } from 'lucide-react'
import { skillCategories, techMarquee } from '../../data/skills'
import SectionTitle from '../ui/SectionTitle'
import Marquee from '../ui/Marquee'
import useScrollReveal from '../../hooks/useScrollReveal'

const iconMap = {
  layout: LayoutGrid,
  server: Server,
  smartphone: Smartphone,
  database: Database,
  wrench: Wrench,
  layers: Layers,
}

const Skills = () => {
  const ref = useScrollReveal()

  return (
    <section id="competences" className="relative bg-light overflow-hidden">
      <Marquee items={techMarquee} className="-mt-px" />

      <div className="relative py-24 md:py-36">
        <div className="absolute inset-0 bg-grid-light" aria-hidden="true" />

        <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="scroll-reveal">
            <SectionTitle
              eyebrow="compétences"
              title="Compétences & Technologies"
              description="Des technologies modernes et des outils performants maîtrisés pour concevoir des applications web durables et scalables."
            />
          </div>

          <div className="space-y-4">
            {skillCategories.map((category, index) => {
              const Icon = iconMap[category.icon] || Layers
              return (
                <div
                  key={category.title}
                  className="scroll-reveal"
                  style={{ transitionDelay: `${(index % 3) * 70}ms` }}
                >
                  <div className="group flex flex-col md:flex-row md:items-center gap-4 md:gap-8 bg-white border border-slate-200 rounded-2xl px-5 py-5 md:px-7 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
                    <div className="flex items-center gap-4 md:w-64 shrink-0">
                      <span className="w-11 h-11 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                        <Icon size={20} />
                      </span>
                      <div>
                        <h3 className="font-heading font-extrabold text-base text-navy leading-tight">
                          {category.title}
                        </h3>
                        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-slate-400">
                          {String(index + 1).padStart(2, '0')} ·{' '}
                          {category.skills.length} techs
                        </p>
                      </div>
                    </div>

                    <ul className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <li
                          key={skill.name}
                          className="px-3.5 py-1.5 rounded-full bg-paper border border-slate-200 text-sm text-slate-600 hover:border-primary hover:text-primary hover:bg-primary/5 transition-colors"
                        >
                          {skill.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>

          <p
            className="scroll-reveal mt-10 font-mono text-xs tracking-wide text-slate-400 max-w-2xl leading-relaxed"
            style={{ transitionDelay: '150ms' }}
          >
            // Front-end, back-end, bases de données, méthodologies et outils DevOps —
            utilisés sur des projets académiques et professionnels.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Skills
