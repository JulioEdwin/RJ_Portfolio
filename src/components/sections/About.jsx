import { useEffect, useRef, useState } from 'react'
import { profile } from '../../data/profile'
import useScrollReveal from '../../hooks/useScrollReveal'

const blocks = profile.about.blocks

const AboutStage = ({ block, active, onSelect }) => (
  <div className="sticky top-0 h-svh overflow-hidden bg-ink text-white flex items-center">
    <div className="absolute inset-0 bg-dots-light" aria-hidden="true" />
    <div
      className="absolute -top-32 left-1/4 w-[420px] h-[420px] bg-primary/20 rounded-full blur-3xl"
      aria-hidden="true"
    />

    <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div>
          <p className="section-label text-primary-light mb-6 flex items-center gap-3">
            <span className="inline-block h-px w-8 bg-primary-light" aria-hidden="true" />
            à propos
          </p>

          <div key={active} className="min-h-[15rem] md:min-h-[17rem]">
            <div className="flex items-center gap-4 mb-5">
              <span className="font-display font-black text-5xl text-primary/50 leading-none">
                {block.num}
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500">
                {block.label}
              </span>
            </div>

            <p className="font-heading font-extrabold text-2xl md:text-3xl lg:text-4xl leading-tight text-white">
              {block.lines.map((line, index) => (
                <span
                  key={line}
                  className="block rise"
                  style={{ animationDelay: `${0.06 * index}s` }}
                >
                  {line}
                </span>
              ))}
            </p>
          </div>

          <ol className="flex items-center gap-2 mt-8" aria-label="Étapes de la présentation">
            {blocks.map((item, index) => (
              <li key={item.num}>
                <button
                  type="button"
                  onClick={() => onSelect(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === active ? 'w-8 bg-primary-light' : 'w-4 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Aller à l'étape ${item.num} : ${item.label}`}
                  aria-current={index === active}
                />
              </li>
            ))}
          </ol>
        </div>

        <div className="hidden md:flex justify-center lg:justify-end">
          <div className="relative">
            <div
              className="absolute -inset-4 bg-primary/15 rounded-[2rem] blur-xl"
              aria-hidden="true"
            />
            <div className="relative w-72 lg:w-80 rounded-2xl overflow-hidden border border-white/15 shadow-2xl shadow-black/50">
              <img
                src={profile.photo}
                alt={`Portrait de ${profile.name}`}
                className="w-full h-auto object-cover"
                loading="lazy"
                decoding="async"
                width={720}
                height={960}
              />
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-ink via-ink/70 to-transparent">
                <p className="font-heading font-bold text-sm text-white">{profile.name}</p>
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-slate-400">
                  @JulioEdwin · Licence 3 Informatique
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const About = () => {
  const wrapperRef = useRef(null)
  const [active, setActive] = useState(0)
  const revealRef = useScrollReveal()

  useEffect(() => {
    const wrapper = wrapperRef.current
    if (!wrapper) return
    if (window.matchMedia('(max-width: 767px)').matches) return

    let frame = null

    const update = () => {
      frame = null
      const rect = wrapper.getBoundingClientRect()
      const scrollable = rect.height - window.innerHeight
      if (scrollable <= 0) return
      const progress = Math.min(Math.max(-rect.top / scrollable, 0), 1)
      const index = Math.min(blocks.length - 1, Math.floor(progress * blocks.length))
      setActive((previous) => (previous === index ? previous : index))
    }

    const handleScroll = () => {
      if (frame === null) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
      if (frame !== null) cancelAnimationFrame(frame)
    }
  }, [])

  const scrollToBlock = (index) => {
    const wrapper = wrapperRef.current
    if (!wrapper) return
    const scrollable = wrapper.offsetHeight - window.innerHeight
    const top = wrapper.offsetTop + (scrollable * index) / blocks.length + 4
    window.scrollTo({ top, behavior: 'smooth' })
  }

  const block = blocks[active]

  return (
    <section id="a-propos" className="relative bg-ink text-white">
      <div ref={wrapperRef} className="relative">
        <div className="hidden md:block">
          <AboutStage block={block} active={active} onSelect={scrollToBlock} />
          {blocks.slice(1).map((item, index) => (
            <div key={item.num} className="h-svh" aria-hidden="true" />
          ))}
        </div>

        <div className="md:hidden relative bg-ink">
          <div className="absolute inset-0 bg-dots-light" aria-hidden="true" />
          <div className="relative px-4 sm:px-6 py-20 space-y-12">
            <div className="relative w-48 mx-auto">
              <img
                src={profile.photo}
                alt={`Portrait de ${profile.name}`}
                className="w-full h-auto rounded-2xl border border-white/15 shadow-xl shadow-black/40"
                loading="lazy"
                decoding="async"
                width={720}
                height={960}
              />
            </div>

            {blocks.map((item) => (
              <div key={item.num}>
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-display font-black text-4xl text-primary/50 leading-none">
                    {item.num}
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500">
                    {item.label}
                  </span>
                </div>
                <p className="font-heading font-extrabold text-xl leading-snug text-white">
                  {item.lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div ref={revealRef} className="relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 grid lg:grid-cols-2 gap-10 items-start">
          <div className="scroll-reveal">
            <p className="section-label text-primary-light mb-5 flex items-center gap-3">
              <span className="inline-block h-px w-8 bg-primary-light" aria-hidden="true" />
              mes qualités
            </p>
            <ul className="flex flex-wrap gap-2.5">
              {profile.qualities.map((quality) => (
                <li
                  key={quality}
                  className="px-4 py-2 rounded-full border border-white/15 bg-white/5 text-sm text-slate-300"
                >
                  {quality}
                </li>
              ))}
            </ul>
          </div>

          <blockquote
            className="scroll-reveal lg:justify-self-end max-w-md border-l-2 border-primary pl-6"
            style={{ transitionDelay: '120ms' }}
          >
            <p className="font-heading font-bold text-lg md:text-xl leading-snug text-white">
              « {profile.about.quotes[0]} »
            </p>
            <footer className="mt-3 font-mono text-[11px] uppercase tracking-[0.16em] text-slate-500">
              {profile.name} · {profile.title}
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  )
}

export default About
