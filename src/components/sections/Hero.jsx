import { ArrowRight, FileDown, ChevronDown } from 'lucide-react'
import { profile } from '../../data/profile'

const Hero = () => {
  return (
    <section
      id="accueil"
      className="relative min-h-svh flex items-center overflow-hidden bg-ink text-white"
    >
      <div className="absolute inset-0 bg-dots-light" aria-hidden="true" />
      <div
        className="absolute top-1/4 -right-40 w-[520px] h-[520px] bg-primary/25 rounded-full blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-40 -left-32 w-[420px] h-[420px] bg-primary/15 rounded-full blur-3xl"
        aria-hidden="true"
      />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 md:pt-32 pb-20 md:pb-24">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          <div className="lg:col-span-7 z-10">
            <div
              className="rise flex items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500 mb-8"
              style={{ animationDelay: '0.05s' }}
            >
              <span>portfolio / 2026</span>
              <span className="hidden sm:inline">{profile.location}</span>
            </div>

            <p
              className="rise section-label text-primary-light mb-5"
              style={{ animationDelay: '0.15s' }}
            >
              — Bonjour, je suis
            </p>

            <h1 className="rise text-fluid-display" style={{ animationDelay: '0.25s' }}>
              <span className="block text-white">Julio Edwin</span>
              <span className="block text-outline">{profile.lastName}</span>
            </h1>

            <p
              className="rise font-heading font-extrabold text-lg md:text-2xl text-primary-light mt-6 mb-4"
              style={{ animationDelay: '0.4s' }}
            >
              {profile.role}
            </p>

            <p
              className="rise text-base md:text-lg text-slate-400 leading-relaxed mb-8 max-w-xl"
              style={{ animationDelay: '0.5s' }}
            >
              {profile.tagline}
            </p>

            <div className="rise flex flex-wrap gap-3 mb-10" style={{ animationDelay: '0.6s' }}>
              <a
                href={profile.cv}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary-dark transition-colors shadow-lg shadow-primary/25"
              >
                <FileDown size={18} />
                Télécharger mon CV
              </a>
              <a
                href="#projets"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-lg border border-white/25 text-white hover:bg-white/10 hover:border-white transition-all"
              >
                Voir mes projets
                <ArrowRight size={18} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-all"
              >
                Me contacter
              </a>
            </div>

            <dl className="rise grid grid-cols-3 gap-4 max-w-lg border-t border-white/10 pt-6" style={{ animationDelay: '0.7s' }}>
              {profile.stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span className="block font-display font-black text-3xl md:text-4xl text-white leading-none">
                      {stat.value}
                    </span>
                    <span className="mt-1.5 block font-mono text-[10px] uppercase tracking-[0.14em] text-slate-500">
                      {stat.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-5 z-10 flex justify-center lg:justify-end">
            <div className="rise" style={{ animationDelay: '0.45s' }}>
              <div className="relative animate-float">
              <div
                className="absolute -inset-4 bg-primary/20 rounded-[2rem] blur-xl"
                aria-hidden="true"
              />
              <div className="relative w-64 h-80 md:w-72 md:h-96 rounded-2xl overflow-hidden border border-white/15 shadow-2xl shadow-black/50">
                <img
                  src={profile.photo}
                  alt={`Portrait de ${profile.name}`}
                  className="w-full h-full object-cover"
                  width={720}
                  height={960}
                  fetchPriority="high"
                />
                <div
                  className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink to-transparent"
                  aria-hidden="true"
                />
              </div>
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-ink-card/95 backdrop-blur rounded-xl border border-white/10 px-4 py-2.5 text-center whitespace-nowrap">
                <p className="flex items-center gap-2 text-xs font-semibold text-white">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Disponible · Stage / Emploi
                </p>
              </div>
            </div>
            </div>
          </div>
        </div>

        <a
          href="#manifeste"
          className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-slate-500 hover:text-white transition-colors"
          aria-label="Défiler vers le bas"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.2em]">défiler</span>
          <ChevronDown size={18} className="animate-bounce" />
        </a>
      </div>
    </section>
  )
}

export default Hero
