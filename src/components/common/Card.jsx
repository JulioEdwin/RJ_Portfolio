import React from 'react'
import { cn } from '../../utils/cn'

/**
 * Composant Card atomique.
 * Respecte le principe de Single Responsibility Principle (SRP) et le Design System.
 */
const Card = ({
  children,
  className = '',
  hoverEffect = true,
  glow = false,
  as: Component = 'div',
  ...props
}) => {
  return (
    <Component
      className={cn(
        'relative bg-slate-900/60 backdrop-blur-md rounded-2xl border border-slate-800/80 p-6 md:p-7 transition-all duration-300 overflow-hidden',
        hoverEffect &&
          'hover:border-blue-500/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-950/30',
        glow && 'ring-1 ring-blue-500/20',
        className
      )}
      {...props}
    >
      {glow && (
        <div
          className="pointer-events-none absolute -top-24 -right-24 w-48 h-48 bg-blue-500/10 rounded-full blur-2xl"
          aria-hidden="true"
        />
      )}
      {children}
    </Component>
  )
}

export default Card

