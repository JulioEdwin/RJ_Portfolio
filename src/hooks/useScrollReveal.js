import { useEffect, useRef } from 'react'

const useScrollReveal = (threshold = 0.1) => {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const targets = container.classList.contains('scroll-reveal')
      ? [container]
      : container.querySelectorAll('.scroll-reveal')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold }
    )

    targets.forEach((target) => observer.observe(target))
    return () => observer.disconnect()
  }, [threshold])

  return containerRef
}

export default useScrollReveal