import { Globe, Smartphone, Server, Database, LayoutGrid, Wrench } from 'lucide-react'
import { services } from '../../data/services'
import SectionTitle from '../ui/SectionTitle'
import useScrollReveal from '../../hooks/useScrollReveal'

const iconMap = {
  globe: Globe,
  smartphone: Smartphone,
  server: Server,
  database: Database,
  layout: LayoutGrid,
  wrench: Wrench,
}

const Services = () => {
  const ref = useScrollReveal()

  return (
    <section id="services" className="relative py-24 md:py-36 bg-paper overflow-hidden">
      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="scroll-reveal">
          <SectionTitle
            num={8}
            eyebrow="services"
            title="Ce que je peux réaliser"
            subtitle="Des services concrets pour transformer vos besoins en applications fiables et utilisables."
            align="left"
          />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Globe
            return (
              <div
                key={service.title}
                className="scroll-reveal"
                style={{ transitionDelay: `${(index % 3) * 60}ms` }}
              >
                <div className="h-full bg-white border border-slate-200 rounded-2xl p-6 flex flex-col hover:border-primary/60 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300">
                  <span className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-4">
                    <Icon size={24} />
                  </span>
                  <h3 className="text-base font-semibold text-navy mb-2">{service.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{service.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services