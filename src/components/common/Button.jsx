import React from 'react'
import { Loader2 } from 'lucide-react'
import { cn } from '../../utils/cn'

/**
 * Composant Bouton atomique réutilisable.
 * Règle de Génie Logiciel : DRY & Accessibilité.
 * Utilise strictement la palette informatique à 3 couleurs.
 */
const Button = ({
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  children,
  className = '',
  type = 'button',
  target,
  rel,
  loading = false,
  disabled = false,
  icon: Icon,
  iconRight: IconRight,
  ...props
}) => {
  const baseStyles =
    'relative inline-flex items-center justify-center gap-2.5 font-sans font-semibold rounded-xl transition-all duration-200 cursor-pointer select-none active:scale-[0.98] disabled:opacity-60 disabled:pointer-events-none disabled:active:scale-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900'

  const variants = {
    // Couleur 1 : Bleu Tech (Accent primaire)
    primary:
      'bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-600/25 border border-blue-500/30',
    // Couleur 2 & 3 : Surface blanche / ardoise
    secondary:
      'bg-slate-900/80 text-white hover:bg-slate-800 border border-slate-700/60 shadow-sm backdrop-blur-md',
    outline:
      'bg-transparent text-blue-400 border border-blue-500/50 hover:bg-blue-600/10 hover:border-blue-400',
    outlineLight:
      'bg-transparent text-slate-200 border border-slate-700 hover:bg-white/10 hover:border-slate-400 hover:text-white',
    ghost:
      'bg-transparent text-slate-300 hover:text-white hover:bg-slate-800/60',
    dark:
      'bg-slate-950 text-white hover:bg-slate-900 border border-slate-800',
  }

  const sizes = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-6 py-3 text-base',
  }

  const classes = cn(baseStyles, variants[variant], sizes[size], className)

  const content = (
    <>
      {loading ? (
        <Loader2 size={16} className="animate-spin text-current" aria-hidden="true" />
      ) : Icon ? (
        <Icon size={16} className="shrink-0 text-current" aria-hidden="true" />
      ) : null}
      <span>{children}</span>
      {IconRight && !loading && (
        <IconRight size={16} className="shrink-0 text-current" aria-hidden="true" />
      )}
    </>
  )

  if (href) {
    const isExternal =
      href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')
    return (
      <a
        href={href}
        className={classes}
        {...(isExternal || target
          ? { target: target || '_blank', rel: rel || 'noopener noreferrer' }
          : {})}
        {...props}
      >
        {content}
      </a>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={classes}
      {...props}
    >
      {content}
    </button>
  )
}

export default Button

