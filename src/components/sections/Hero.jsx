import { ArrowRight, FileDown, Code2, MapPin, Briefcase, Zap } from 'lucide-react'
import { profile } from '../../data/profile'
import Button from '../ui/Button'

const quickInfo = [
  { icon: Briefcase, label: profile.title },
  { icon: MapPin, label: profile.location },
  { icon: Zap, label: profile.availability },
  { icon: Code2, label: profile.passion },
]

const Hero = () => {
  const [firstName, lastName] = profile.name.split(' ')

  return (
    <section id="accueil" className="relative overflow-hidden bg-dark text-white">
      <div className="absolute inset-0 bg-dots-light" aria-hidden="true" />
      <div className="absolute -top-32 -right-32 w-[480px] h-[480px] bg-primary/30 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute -bottom-40 -left-24 w-[420px] h-[420px] bg-primary/15 rounded-full blur-3xl" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 md:pt-36 pb-20 md:pb-28">
        <p className="scroll-reveal flex items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500 mb-10 md:mb-14">
          <span>portfolio/2026</span>
          <span className="hidden sm:inline">{profile.location}</span>
        </p>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-8 z-10">
            <p className="scroll-reveal section-label text-primary-light mb-4 md:mb-6">
              — Bonjour, moi c'est
            </p>

            <h1 className="scroll-reveal text-fluid-display text-white">
              <span className="block">{firstName}</span>
              <span className="block text-outline">{lastName}</span>
            </h1>

            <p className="scroll-reveal font-mono text-sm md:text-base uppercase tracking-[0.18em] text-primary-light mt-6 mb-6">
              / {profile.title}
            </p>

            <p className="scroll-reveal text-base md:text-lg text-slate-400 leading-relaxed mb-8 md:mb-10 max-w-xl">
              {profile.tagline}
            </p>

            <div className="scroll-reveal flex flex-wrap gap-3 mb-10">
              <Button href={profile.cv} variant="primary" size="lg">
                <FileDown size={18} />
                Télécharger mon CV
              </Button>
              <Button href="#projets" variant="outlineLight" size="lg">
                Voir mes projets
                <ArrowRight size={18} />
              </Button>
              <Button href="#contact" variant="ghost" size="lg" className="text-white hover:bg-white/10">
                Me contacter
              </Button>
            </div>

            <ul className="scroll-reveal grid sm:grid-cols-2 gap-x-8 gap-y-3">
              {quickInfo.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="flex items-center gap-2.5 text-sm text-slate-300"
                >
                  <Icon size={16} className="text-primary-light shrink-0" />
                  <span className="leading-snug">{label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4 z-10 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-3 bg-primary/20 rounded-3xl blur-lg" aria-hidden="true" />
              <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-2xl bg-dark-card border border-white/10 shadow-2xl shadow-black/40 overflow-hidden flex items-center justify-center">
                {profile.photo ? (
                  <img
                    src={profile.photo}
                    alt={`Photo de ${profile.name}`}
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                ) : (
                  <div className="flex flex-col items-center gap-3 px-6 text-center">
                    <Code2 size={48} className="text-primary-light" />
                    <p className="text-slate-400 text-xs font-medium leading-relaxed">
                      Placeholder
                      <span className="block font-mono text-[10px] mt-1 opacity-70">
                        public/images/profile.jpg
                      </span>
                    </p>
                  </div>
                )}
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-dark-card/90 backdrop-blur rounded-xl border border-white/10 px-4 py-2.5 text-center whitespace-nowrap">
                <p className="text-[10px] text-slate-500 font-medium">Disponible pour</p>
                <p className="text-xs font-semibold text-white">Stage / Emploi / Freelance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero