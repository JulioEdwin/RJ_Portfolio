import { GraduationCap } from 'lucide-react'
import { education } from '../../data/education'
import SectionTitle from '../ui/SectionTitle'
import Timeline from '../ui/Timeline'
import useScrollReveal from '../../hooks/useScrollReveal'

const Education = () => {
  const ref = useScrollReveal()

  return (
    <section id="formation" className="relative py-24 md:py-36 bg-light overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-60" aria-hidden="true" />

      <div ref={ref} className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="scroll-reveal">
          <SectionTitle
            num={5}
            eyebrow="formation"
            title="Formation"
            subtitle="Mon parcours académique en informatique."
            align="left"
          />
        </div>

        <Timeline
          items={education}
          renderItem={(edu, index) => (
            <div
              className={`bg-white border border-slate-200 rounded-2xl p-6 md:p-7 hover:border-primary/60 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 ${
                index % 2 === 1 ? 'md:text-right' : ''
              }`}
            >
              <div className={`flex items-center gap-2 mb-2 ${index % 2 === 1 ? 'md:justify-end flex-row-reverse' : ''}`}>
                <GraduationCap size={18} className="text-primary shrink-0" />
                <h3 className="text-lg font-semibold text-navy">{edu.degree}</h3>
              </div>

              <p className={`text-primary font-medium text-sm mb-2 ${index % 2 === 1 ? 'md:text-right' : ''}`}>
                {edu.school}
              </p>
              <p className={`inline-block px-3 py-1 mb-4 rounded-full bg-primary/10 text-primary text-xs font-semibold font-mono ${index % 2 === 1 ? 'md:ml-auto block' : ''}`}>
                {edu.period}
              </p>

              <p className={`text-sm text-slate-500 leading-relaxed mb-4 ${index % 2 === 1 ? 'md:text-right' : ''}`}>
                <span className="font-medium text-slate-600">Spécialité :</span> {edu.specialty}
              </p>

              <h4 className={`text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 ${index % 2 === 1 ? 'md:text-right' : ''}`}>
                Principaux domaines étudiés
              </h4>
              <ul className={`space-y-1.5 ${index % 2 === 1 ? 'md:text-right' : ''}`}>
                {edu.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-600 justify-start md:justify-start">
                    <span className="w-1 h-1 mt-2 bg-primary rounded-full shrink-0 order-1" />
                    <span className={index % 2 === 1 ? 'md:order-0' : ''}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        />
      </div>
    </section>
  )
}

export default Education