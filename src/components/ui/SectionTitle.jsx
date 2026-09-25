import { ArrowDown } from 'lucide-react'

const SectionTitle = ({
  eyebrow,
  title,
  description,
  cta,
  dark = false,
  align = 'left',
}) => {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left'
  const labelColor = dark ? 'text-primary-light' : 'text-primary'
  const lineColor = dark ? 'bg-primary-light' : 'bg-primary'
  const titleColor = dark ? 'text-white' : 'text-navy'
  const descriptionColor = dark ? 'text-slate-400' : 'text-slate-500'

  return (
    <div className={`max-w-3xl ${alignment} mb-12 md:mb-16`}>
      <p className={`section-label inline-flex items-center gap-3 mb-5 ${labelColor}`}>
        <span className={`inline-block h-px w-8 ${lineColor}`} aria-hidden="true" />
        {eyebrow}
      </p>

      <h2 className={`text-fluid-section mb-5 ${titleColor}`}>{title}</h2>

      {description && (
        <p className={`text-base md:text-lg leading-relaxed ${descriptionColor}`}>
          {description}
        </p>
      )}

      {cta && (
        <a
          href={cta.href}
          className={`mt-8 inline-flex items-center gap-2 px-6 py-3 text-sm font-bold uppercase tracking-[0.15em] backdrop-blur transition-all duration-300 ${
            dark
              ? 'bg-white/10 text-white hover:bg-primary hover:text-white'
              : 'bg-white/70 text-primary hover:bg-primary hover:text-white'
          }`}
        >
          {cta.label}
          <ArrowDown size={16} className="animate-bounce" aria-hidden="true" />
        </a>
      )}
    </div>
  )
}

export default SectionTitle
