import React from 'react'
import { cn } from '../../utils/cn'

/**
 * Composant de défilement infini de mots-clés technologiques.
 * Règle de Génie Logiciel : Performance matérielle (GPU-accelerated CSS marquee).
 */
const Marquee = ({
  items = [],
  speed = 'normal',
  className = '',
}) => {
  if (!items || items.length === 0) return null

  // Duplication pour défilement sans à-coups
  const list = [...items, ...items]

  return (
    <div
      className={cn(
        'relative w-full overflow-hidden border-y border-slate-800/80 bg-slate-950/60 py-3.5 select-none',
        className
      )}
      aria-hidden="true"
    >
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {list.map((item, index) => (
          <div
            key={`${item}-${index}`}
            className="flex items-center gap-3 px-5 text-xs font-mono tracking-widest uppercase text-slate-400 font-semibold"
          >
            <span>{item}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Marquee

