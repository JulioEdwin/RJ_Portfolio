import { Music, Gamepad2, Palette, Cpu, Sparkles } from 'lucide-react'
import { interests } from '../../data/interests'
import SectionTitle from '../ui/SectionTitle'
import useScrollReveal from '../../hooks/useScrollReveal'

const iconMap = {
  music: Music,
  gamepad: Gamepad2,
  palette: Palette,
  cpu: Cpu,
}

const Interests = () => {
  const ref = useScrollReveal()

  return (
    <section id="interets" className="relative py-24 md:py-36 bg-light overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-60" aria-hidden="true" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="scroll-reveal">
          <SectionTitle
            num={7}
            eyebrow="intérêts"
            title="Centres d'intérêt"
            subtitle="Au-delà du code : des passions qui nourrissent ma créativité et ma rigueur."
            align="left"
          />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {interests.map((item, index) => {
            const Icon = iconMap[item.icon] || Sparkles
            return (
              <div
                key={item.title}
                className="scroll-reveal"
                style={{ transitionDelay: `${(index % 4) * 60}ms` }}
              >
                <div className="h-full bg-white border border-slate-200 rounded-2xl p-6 flex flex-col items-center text-center hover:border-primary/60 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300">
                  <span className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-4">
                    <Icon size={26} />
                  </span>
                  <h3 className="font-display font-bold text-xl text-navy mb-2 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Interests