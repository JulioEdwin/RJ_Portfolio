import useScrollReveal from '../../hooks/useScrollReveal'
import { profile } from '../../data/profile'

const lines = [
  { text: 'Je conçois des applications', style: 'text-white' },
  { text: 'de la base de données', style: 'text-outline' },
  { text: "à l'interface utilisateur.", style: 'text-primary-light' },
]

const Manifesto = () => {
  const ref = useScrollReveal()

  return (
    <section id="manifeste" className="relative bg-ink text-white overflow-hidden py-24 md:py-36">
      <div className="absolute inset-0 bg-dots-light" aria-hidden="true" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/10 rounded-full blur-3xl"
        aria-hidden="true"
      />

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="scroll-reveal section-label text-primary-light mb-8 flex items-center gap-3">
          <span className="inline-block h-px w-8 bg-primary-light" aria-hidden="true" />
          manifeste
        </p>

        <h2 className="text-fluid-display space-y-1">
          {lines.map((line, index) => (
            <span
              key={line.text}
              className={`block scroll-reveal reveal-clip ${line.style}`}
              style={{ transitionDelay: `${index * 140}ms` }}
            >
              {line.text}
            </span>
          ))}
        </h2>

        <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-4xl">
          <p
            className="scroll-reveal text-slate-400 leading-relaxed"
            style={{ transitionDelay: '350ms' }}
          >
            {profile.aboutLine}
          </p>
          <p
            className="scroll-reveal text-slate-500 leading-relaxed font-mono text-sm"
            style={{ transitionDelay: '450ms' }}
          >
            // React · TypeScript · Next.js · Spring Boot · PostgreSQL · DevOps
          </p>
        </div>
      </div>
    </section>
  )
}

export default Manifesto
