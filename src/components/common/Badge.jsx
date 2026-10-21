import React from 'react'
import { cn } from '../../utils/cn'

/**
 * Composant Badge atomique.
 * Règle de Génie Logiciel : DRY & Design System unifié.
 */
const Badge = ({
  children,
  variant = 'default',
  size = 'md',
  dot = false,
  className = '',
}) => {
  const baseStyles =
    'inline-flex items-center gap-1.5 font-mono uppercase tracking-[0.12em] rounded-full whitespace-nowrap transition-colors'

  const variants = {
    // Teinte Bleue Tech
    tech: 'bg-blue-500/10 text-blue-400 border border-blue-500/25',
    techSolid: 'bg-blue-600 text-white font-semibold shadow-sm',
    // Teinte Slate Sombre
    slate: 'bg-slate-800/80 text-slate-300 border border-slate-700/60',
    // Teinte Blanche / Claire
    light: 'bg-white/10 text-white border border-white/15 backdrop-blur-sm',
    outline: 'bg-transparent text-slate-400 border border-slate-700/80',
    default: 'bg-slate-800/60 text-slate-300 border border-slate-700/50',
  }

  const sizes = {
    sm: 'px-2 py-0.5 text-[10px]',
    md: 'px-3 py-1 text-xs',
    lg: 'px-3.5 py-1.5 text-xs',
  }

  return (
    <span className={cn(baseStyles, variants[variant], sizes[size], className)}>
      {dot && (
        <span
          className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse shrink-0"
          aria-hidden="true"
        />
      )}
      {children}
    </span>
  )
}

export default Badge

