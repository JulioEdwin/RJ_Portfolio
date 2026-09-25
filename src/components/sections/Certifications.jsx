import { Award, FileText, ExternalLink } from 'lucide-react'
import { certifications } from '../../data/certifications'
import SectionTitle from '../ui/SectionTitle'
import Button from '../ui/Button'
import useScrollReveal from '../../hooks/useScrollReveal'

const Certifications = () => {
  const ref = useScrollReveal()

  return (
    <section id="certifications" className="relative py-24 md:py-36 bg-dark overflow-hidden">
      <div className="absolute inset-0 bg-dots-light" aria-hidden="true" />
      <div className="absolute top-20 -right-40 w-[400px] h-[400px] bg-primary/15 rounded-full blur-3xl" aria-hidden="true" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="scroll-reveal">
          <SectionTitle
            num={6}
            eyebrow="certifications"
            title="Certifications"
            subtitle="Des certifications obtenues auprès d'organismes reconnus."
            align="left"
            dark
          />
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {certifications.map((cert, index) => (
            <div
              key={cert.title}
              className="scroll-reveal"
              style={{ transitionDelay: `${(index % 3) * 60}ms` }}
            >
              <div className="h-full bg-dark-card border border-white/10 rounded-2xl p-6 flex flex-col hover:border-primary/60 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center justify-between mb-5">
                  <span className="w-11 h-11 bg-primary/20 text-primary-light rounded-xl flex items-center justify-center">
                    <Award size={22} />
                  </span>
                  <span className="px-3 py-1 rounded-full bg-primary/20 text-primary-light text-xs font-semibold font-mono">
                    {cert.date}
                  </span>
                </div>

                <h3 className="text-base font-semibold text-white leading-snug mb-1.5">
                  {cert.title}
                </h3>
                <p className="text-sm text-primary-light mb-3">{cert.issuer}</p>
                <p className="text-sm text-slate-400 leading-relaxed flex-1 mb-5">
                  {cert.detail}
                </p>

                <div className="pt-4 border-t border-white/10">
                  <Button
                    href={cert.file}
                    variant="outlineLight"
                    size="sm"
                    className="w-full justify-center"
                  >
                    <FileText size={15} />
                    Voir le certificat
                    <ExternalLink size={13} className="opacity-70" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications