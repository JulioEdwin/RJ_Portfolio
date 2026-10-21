import React, { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

/**
 * Bouton de retour en haut de page avec gestion de scroll optimisée.
 * Règle de Génie Logiciel : Écouteur d'événement passif et accessibilité ARIA.
 */
const ScrollToTop = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setVisible(window.scrollY > 400)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (!visible) return null

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Remonter en haut de la page"
      className="fixed bottom-6 right-6 z-40 p-3.5 bg-blue-600 text-white rounded-2xl shadow-xl shadow-blue-600/30 hover:bg-blue-500 hover:scale-105 active:scale-95 transition-all duration-200 border border-blue-400/40 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
    >
      <ArrowUp size={20} className="stroke-[2.5]" aria-hidden="true" />
    </button>
  )
}

export default ScrollToTop

