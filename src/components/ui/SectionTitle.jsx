import React from 'react'

const SectionTitle = ({ num, eyebrow, title, subtitle, dark = false, align = 'center' }) => {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left'
  const labelColor = dark ? 'text-primary-light' : 'text-primary'
  const titleColor = dark ? 'text-white' : 'text-navy'
  const subtitleColor = dark ? 'text-slate-400' : 'text-slate-500'

  return (
    <div className={`max-w-3xl ${alignment} mb-12 md:mb-16`}>
      {num ? (
        <p className={`section-label mb-4 ${labelColor}`}>
          <span className="text-slate-500">{String(num).padStart(2, '0')}</span> · {eyebrow}
        </p>
      ) : (
        <p className={`section-label mb-4 ${labelColor}`}>{eyebrow}</p>
      )}
      <h2 className={`text-fluid-section mb-5 ${titleColor}`}>{title}</h2>
      {subtitle && (
        <p className={`text-base md:text-lg leading-relaxed ${subtitleColor}`}>{subtitle}</p>
      )}
    </div>
  )
}

export default SectionTitle