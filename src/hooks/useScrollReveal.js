import { useEffect, useRef } from 'react'

const useScrollReveal = (threshold = 0.1) => {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let isContainerRevealed = false

    const revealTarget = (target) => {
      if (target && !target.classList.contains('revealed')) {
        target.classList.add('revealed')
      }
    }

    const targets = container.classList.contains('scroll-reveal')
      ? [container]
      : Array.from(container.querySelectorAll('.scroll-reveal'))

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
            isContainerRevealed = true
            const list = observed.get(entry.target) || []
            list.forEach(revealTarget)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold }
    )

    observed.forEach((_, el) => observer.observe(el))

    // Sécurité dynamique : si des éléments .scroll-reveal sont insérés dynamiquement
    // (ex: filtrage, changement de recherche, onglets), ils sont immédiatement révélés si la section est déjà visible.
    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === 1) {
            if (node.classList?.contains('scroll-reveal')) {
              if (isContainerRevealed) {
                revealTarget(node)
              } else {
                observer.observe(node)
              }
            }
            node.querySelectorAll?.('.scroll-reveal').forEach((el) => {
              if (isContainerRevealed) {
                revealTarget(el)
              } else {
                observer.observe(el)
              }
            })
          }
        })
      })
    })

    mutationObserver.observe(container, { childList: true, subtree: true })

    return () => {
      observer.disconnect()
      mutationObserver.disconnect()
    }
  }, [threshold])

  return containerRef
}

export default useScrollReveal
