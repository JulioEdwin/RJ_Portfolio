import React from 'react'
import {
  Globe,
  Smartphone,
  Server,
  Database,
  LayoutGrid,
  Wrench,
  ArrowUpRight,
} from 'lucide-react'
import { services } from '../../data/services'
import SectionHeader from '../common/SectionHeader'
import Card from '../common/Card'
import useScrollReveal from '../../hooks/useScrollReveal'
import { usePreferences } from '../../context/PreferencesContext'

const iconMap = {
  globe: Globe,
  smartphone: Smartphone,
  server: Server,
  database: Database,
  layout: LayoutGrid,
  wrench: Wrench,
}

const servicesEn = [
  {
    icon: 'globe',
    title: 'Full Stack Web Development',
    description:
      'Designing and engineering custom web applications with React, Next.js, and Spring Boot: responsive, performant, and secure from backend to UI.',
  },
  {
    icon: 'smartphone',
    title: 'Mobile App Development',
    description:
      'Cross-platform iOS & Android mobile apps engineered with Flutter: smooth animations, native responsiveness, and real-time backend synchronization.',
  },
  {
    icon: 'server',
    title: 'RESTful API & Backend Architecture',
    description:
      'Design of robust APIs, microservices, secure JWT authentication, and business logic using Spring Boot and Node.js/NestJS.',
  },
  {
    icon: 'database',
    title: 'Database Design & Optimization',
    description:
      'Relational modeling (PostgreSQL, MySQL), indexing strategies, and ORM integration (Prisma, Hibernate) for maximum query speed and integrity.',
  },
  {
    icon: 'wrench',
    title: 'DevOps & Containerized Deployment',
    description:
      'Application containerization with Docker, automated CI/CD deployment pipelines on Vercel and Netlify for zero-downtime releases.',
  },
  {
    icon: 'layout',
    title: 'UI/UX Design & Prototyping',
    description:
      'Translating user needs into sleek, interactive interfaces on Figma, followed by pixel-perfect Tailwind CSS code implementation.',
  },
]

/**
 * Section Services / Prestations - Concrète, professionnelle et axée valeur ajoutée.
 * Règle de Génie Logiciel : 3 couleurs max, clarté ergonomique, support bilingue.
 */
const Services = () => {
  const ref = useScrollReveal()
  const { t, language } = usePreferences()
  const isEn = language === 'en'

  const activeServices = isEn ? servicesEn : services

  return (
    <section id="services" className="relative bg-slate-950 py-24 md:py-32 overflow-hidden border-t border-slate-900">
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" aria-hidden="true" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="scroll-reveal">
          <SectionHeader
            eyebrow={t.services.eyebrow}
            title={t.services.title}
            description={t.services.description}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeServices.map((service, index) => {
            const Icon = iconMap[service.icon] || Globe

            return (
              <div
                key={service.title}
                className="scroll-reveal"
                style={{ transitionDelay: `${(index % 3) * 70}ms` }}
              >
                <Card className="h-full flex flex-col justify-between group">
                  <div>
                    <div className="flex items-start justify-between mb-5">
                      <span className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center border border-blue-500/20 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <Icon size={22} />
                      </span>
                      <span className="font-mono text-xs text-slate-400">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="font-sans font-bold text-lg text-white mb-2.5 group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-6 border-t border-slate-800/80 flex items-center justify-between">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-blue-400">
                      {t.services.custom}
                    </span>
                    <a
                      href="#contact"
                      className="text-xs text-slate-400 hover:text-white flex items-center gap-1 font-medium transition-colors"
                      aria-label={`Demander une étude pour ${service.title}`}
                    >
                      <span>{t.services.discuss}</span>
                      <ArrowUpRight size={13} className="text-blue-400" />
                    </a>
                  </div>
                </Card>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
