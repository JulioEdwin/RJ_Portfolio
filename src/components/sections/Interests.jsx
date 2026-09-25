import { Puzzle, Sparkles, Cpu, Users, Handshake, Palette, Music, Gamepad2, Languages } from 'lucide-react'
import { interests } from '../../data/interests'
import { profile } from '../../data/profile'
import SectionTitle from '../ui/SectionTitle'
import useScrollReveal from '../../hooks/useScrollReveal'

const iconMap = {
  puzzle: Puzzle,
  sparkles: Sparkles,
  cpu: Cpu,
  users: Users,
  handshake: Handshake,
  palette: Palette,
  music: Music,
  gamepad: Gamepad2,
}

const Interests = () => {
  const ref = useScrollReveal()

  return (
    <section id="interets" className="relative bg-paper overflow-hidden">
      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
        <div className="scroll-reveal">
          <SectionTitle
            eyebrow="centres d'intérêt"
            title="Ce qui m'anime"
            description="Au-delà du code : des passions et des valeurs qui nourrissent ma créativité et ma rigueur."
          />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {interests.map((item, index) => {
            const Icon = iconMap[item.icon] || Sparkles
            return (
              <div
                key={item.title}
                className="scroll-reveal"
                style={{ transitionDelay: `${(index % 4) * 70}ms` }}
              >
                <div className="group h-full bg-white border border-slate-200 rounded-2xl p-6 flex flex-col hover:border-primary/60 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <span className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                      <Icon size={22} />
                    </span>
                    <span className="font-display font-black text-xl text-primary/25">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="font-heading font-extrabold text-base text-navy mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="scroll-reveal mt-14 bg-white border border-slate-200 rounded-2xl p-6 md:p-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
              <Languages size={20} />
            </span>
            <div>
              <h3 className="font-heading font-extrabold text-lg text-navy">Langues</h3>
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-slate-400">
                profil plurilingue
              </p>
            </div>
          </div>

          <ul className="grid sm:grid-cols-3 gap-4">
            {profile.languages.map((language) => (
              <li key={language.name} className="bg-paper border border-slate-200 rounded-xl p-4">
                <p className="font-heading font-bold text-navy">{language.name}</p>
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-primary mt-1">
                  {language.level}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Interests
