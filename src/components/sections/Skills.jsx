import { LayoutGrid, Server, Smartphone, Database, Wrench, Layers } from 'lucide-react'
import { skillCategories } from '../../data/skills'
import SectionTitle from '../ui/SectionTitle'
import Badge from '../ui/Badge'
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
    <section id="competences" className="relative py-24 md:py-36 bg-dark overflow-hidden">
      <div className="absolute inset-0 bg-dots-light" aria-hidden="true" />
      <div className="absolute top-40 -right-40 w-[400px] h-[400px] bg-primary/20 rounded-full blur-3xl" aria-hidden="true" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="scroll-reveal">
          <SectionTitle
            num={2}
            eyebrow="compétences"
            title="Mes compétences"
            subtitle="Technologies et méthodes que j'utilise pour concevoir et développer des applications professionnelles."
            align="left"
            dark
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category, index) => {
            const Icon = iconMap[category.icon] || Layers
            return (
              <div
                key={category.title}
                className="scroll-reveal"
                style={{ transitionDelay: `${(index % 3) * 60}ms` }}
              >
                <div className="h-full bg-dark-card border border-white/10 rounded-2xl p-6 flex flex-col hover:border-primary/60 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="w-10 h-10 bg-primary/20 text-primary-light rounded-lg flex items-center justify-center shrink-0">
                        <Icon size={20} />
                      </span>
                      <h3 className="text-base font-semibold text-white">{category.title}</h3>
                    </div>
                    <span className="font-display font-bold text-primary/40 text-lg">
                      0{index + 1}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill.name} variant="outlineLight">
                        {skill.name}
                        <span className="ml-1.5 font-mono text-[9px] uppercase tracking-wide text-slate-500">
                          · {skill.level}
                        </span>
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="scroll-reveal mt-10">
          <p className="text-sm text-slate-500 text-center max-w-2xl mx-auto leading-relaxed font-mono text-xs tracking-wide">
            // Niveaux évalués en fonction des projets réalisés, sans pourcentage arbitraire.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Skills