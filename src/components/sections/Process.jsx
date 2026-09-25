import { processSteps } from '../../data/process'
import SectionTitle from '../ui/SectionTitle'
import useScrollReveal from '../../hooks/useScrollReveal'

const Process = () => {
  const ref = useScrollReveal()

  return (
    <section id="methode" className="relative py-24 md:py-36 bg-dark overflow-hidden">
      <div className="absolute inset-0 bg-dots-light" aria-hidden="true" />
      <div className="absolute -bottom-32 -right-32 w-[420px] h-[420px] bg-primary/15 rounded-full blur-3xl" aria-hidden="true" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="scroll-reveal">
          <SectionTitle
            num={9}
            eyebrow="méthode"
            title="Ma méthode de travail"
            subtitle="Une approche structurée pour garantir des résultats de qualité à chaque étape."
            align="left"
            dark
          />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {processSteps.map((step, index) => (
            <div key={step.number} className="scroll-reveal" style={{ transitionDelay: `${index * 60}ms` }}>
              <div className="relative h-full bg-dark-card border border-white/10 rounded-2xl p-6 pt-8 hover:border-primary/60 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300">
                <span className="absolute -top-4 left-6 w-9 h-9 bg-primary text-white rounded-lg flex items-center justify-center font-display font-bold text-sm shadow-sm shadow-primary/40">
                  {step.number}
                </span>
                <h3 className="text-base font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process