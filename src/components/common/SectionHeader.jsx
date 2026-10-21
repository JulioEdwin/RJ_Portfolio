import React from 'react'
import { cn } from '../../utils/cn'

/**
 * En-tête de section unifié et responsive.
 * Règle de Génie Logiciel : DRY & Hiérarchie visuelle claire.
 */
const SectionHeader = ({
  eyebrow,
  title,
  description,
  align = 'left',
  action = null,
  className = '',
}) => {
  const isCentered = align === 'center'

  return (
    <div
      className={cn(
        'mb-12 md:mb-16',
        isCentered ? 'text-center max-w-3xl mx-auto' : 'max-w-3xl',
        className
      )}
    >
      {eyebrow && (
        <div
          className={cn(
            'inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-[11px] uppercase tracking-[0.2em] mb-4',
            isCentered && 'justify-center'
          )}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400" aria-hidden="true" />
          <span>{eyebrow}</span>
        </div>
      )}

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.1] mb-4">
        {title}
      </h2>

      {description && (
        <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl">
          {description}
        </p>
      )}

      {action && <div className="mt-6">{action}</div>}
    </div>
  )
}

export default SectionHeader

