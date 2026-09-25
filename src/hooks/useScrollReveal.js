import { useEffect, useRef } from 'react'

const useScrollReveal = (threshold = 0.1) => {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const targets = container.classList.contains('scroll-reveal')
      ? [container]
      : container.querySelectorAll('.scroll-reveal')

    // Chromium inclut le clip-path de l'élément lui-même dans le calcul
    // d'intersection : un .reveal-clip masqué (ratio 0) ne serait jamais
    // observé. On observe donc son parent et on révèle l'enfant.
    const observed = new Map()
    targets.forEach((target) => {
      const el =
        target.classList.contains('reveal-clip') && target.parentElement
          ? target.parentElement
          : target
      if (!observed.has(el)) observed.set(el, [])
      observed.get(el).push(target)
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const list = observed.get(entry.target) || []
            list.forEach((target) => target.classList.add('revealed'))
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold }
    )

    observed.forEach((_, el) => observer.observe(el))
    return () => observer.disconnect()
  }, [threshold])

  return containerRef
}

export default useScrollReveal
