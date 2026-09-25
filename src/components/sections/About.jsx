import { ArrowRight, CheckCircle2, Quote } from 'lucide-react'
import { profile } from '../../data/profile'
import { education } from '../../data/education'
import SectionTitle from '../ui/SectionTitle'
import Button from '../ui/Button'
import useScrollReveal from '../../hooks/useScrollReveal'

const storyBlocks = [
  {
    number: '01',
    label: 'introduction',
    text: profile.about.intro,
  },
  {
    number: '02',
    label: 'mon parcours',
    text: profile.about.paragraphs[0],
  },
  {
    number: '03',
    label: 'mon objectif',
    text: profile.about.paragraphs[1],
  },
  {
    number: '04',
    label: 'ma façon de travailler',
    text: profile.about.paragraphs[2],
  },
]

const About = () => {
  const ref = useScrollReveal()
  const { about, qualities } = profile
  const school = education[0]

  return (
    <section id="a-propos" className="relative py-24 md:py-36 bg-light overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-60" aria-hidden="true" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="scroll-reveal">
          <SectionTitle
            num={1}
            eyebrow="à propos"
            title="À propos de moi"
            align="left"
          />
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-7">
            <div className="scroll-reveal bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
              <div className="flex items-center justify-between px-6 md:px-8 py-4 border-b border-slate-100">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500">
                  profil · expérience · philosophie
                </p>
                <span className="font-display font-bold text-primary/40 text-lg">01</span>
              </div>

              <div className="divide-y divide-slate-100">
                {storyBlocks.map((block) => (
                  <div key={block.number} className="px-6 md:px-8 py-6 md:py-7">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="font-display font-bold text-2xl text-primary/30">
                        {block.number}
                      </span>
                      <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
                        {block.label}
                      </span>
                    </div>
                    <p className="text-slate-600 leading-relaxed">{block.text}</p>
                  </div>
                ))}

                <div className="px-6 md:px-8 py-6 md:py-7 bg-navy text-white relative overflow-hidden">
                  <div className="absolute -top-10 -right-10 w-44 h-44 bg-primary/25 rounded-full blur-2xl" aria-hidden="true" />
                  <div className="relative">
                    <Quote size={22} className="text-primary-light mb-3" aria-hidden="true" />
                    <p className="text-white font-display font-bold text-lg md:text-xl leading-snug mb-5">
                      "{about.quotes[0]}"
                    </p>
                    <Button href="#contact" variant="outlineLight" size="sm">
                      Travaillons ensemble
                      <ArrowRight size={15} />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="scroll-reveal bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
                  profil
                </h3>
                <span className="font-display font-bold text-primary/40 text-lg">02</span>
              </div>

              <p className="font-mono text-xs text-slate-500 mb-1">
                {profile.title} · Fianarantsoa, Madagascar
              </p>
              <p className="text-sm text-slate-600 mb-5">
                {school.degree} — {school.school}, {school.period}
              </p>

              <div className="space-y-1.5 font-mono text-xs text-slate-500">
                <p className="flex justify-between gap-2">
                  <span>@julioedwin</span>
                  <span className="text-primary-light">{school.period}</span>
                </p>
                <p className="flex justify-between gap-2">
                  <span>@emitt_fianarantsoa</span>
                  <span className="text-primary-light">Madagascar</span>
                </p>
              </div>
            </div>

            <div className="scroll-reveal bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
                  mes qualités
                </h3>
                <span className="font-display font-bold text-primary/40 text-lg">03</span>
              </div>
              <ul className="grid sm:grid-cols-2 gap-3">
                {qualities.map((quality) => (
                  <li
                    key={quality}
                    className="flex items-center gap-2.5 px-4 py-3 rounded-lg bg-slate-50 border border-slate-100"
                  >
                    <CheckCircle2 size={18} className="text-primary shrink-0" />
                    <span className="text-sm font-medium text-navy">{quality}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="scroll-reveal bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm">
              <Quote size={20} className="text-primary mb-3" aria-hidden="true" />
              <p className="text-navy font-medium leading-relaxed text-sm md:text-base">
                "{about.quotes[1]}"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About