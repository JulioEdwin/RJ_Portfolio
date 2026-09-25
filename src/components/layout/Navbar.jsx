import { useState, useEffect } from 'react'
import { Menu, X, FileDown } from 'lucide-react'
import { profile } from '../../data/profile'
import useActiveSection from '../../hooks/useActiveSection'

const navLinks = [
  { label: 'À propos', href: '#a-propos' },
  { label: 'Compétences', href: '#competences' },
  { label: 'Projets', href: '#projets' },
  { label: 'Parcours', href: '#parcours' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Intérêts', href: '#interets' },
  { label: 'Contact', href: '#contact' },
]

const sectionIds = ['accueil', 'a-propos', 'competences', 'services', 'projets', 'parcours', 'certifications', 'interets', 'contact']

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)
  const active = useActiveSection(sectionIds)

  useEffect(() => {
    const handleScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      setScrolled(window.scrollY > 10)
      setProgress(scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const initials = profile.name
    .split(' ')
    .map((word) => word[0])
    .slice(0, 2)
    .join('')

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div
        className={`transition-all duration-300 ${
          scrolled || isOpen
            ? 'bg-ink/85 backdrop-blur-md border-b border-white/10'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <nav
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          aria-label="Navigation principale"
        >
          <div className="flex items-center justify-between h-16 md:h-20">
            <a href="#accueil" className="flex items-center gap-2.5 group" onClick={() => setIsOpen(false)}>
              <span className="w-9 h-9 bg-primary text-white rounded-lg flex items-center justify-center font-display font-bold text-sm group-hover:bg-primary-dark transition-colors">
                {initials}
              </span>
              <span className="hidden sm:block font-mono text-[11px] uppercase tracking-[0.14em] text-white">
                {profile.name}
              </span>
            </a>

            <ul className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = active === link.href.slice(1)
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className={`relative px-3 py-2 text-[11px] font-bold uppercase tracking-[0.11em] transition-colors duration-300 ${
                        isActive ? 'text-white' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {link.label}
                      <span
                        className={`absolute left-3 right-3 -bottom-0.5 h-px bg-primary-light origin-left transition-transform duration-300 ${
                          isActive ? 'scale-x-100' : 'scale-x-0'
                        }`}
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                )
              })}
            </ul>

            <div className="flex items-center gap-3">
              <a
                href={profile.cv}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-primary text-white text-[11px] font-bold uppercase tracking-[0.14em] hover:bg-primary-dark transition-colors"
              >
                <FileDown size={14} />
                CV
              </a>

              <button
                className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
                aria-expanded={isOpen}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </nav>

        <div className="h-0.5 bg-white/5" aria-hidden="true">
          <div
            className="h-full bg-primary origin-left transition-transform duration-150"
            style={{ transform: `scaleX(${progress})` }}
          />
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-ink/97 backdrop-blur-md border-b border-white/10 max-h-[calc(100vh-4.5rem)] overflow-y-auto">
          <nav className="px-4 py-6" aria-label="Navigation mobile">
            <ul className="space-y-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between px-3 py-3.5 font-heading font-bold text-lg border-b border-white/5 transition-colors ${
                      active === link.href.slice(1) ? 'text-white' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {link.label}
                    <span className="font-mono text-[10px] text-slate-600">
                      {String(navLinks.indexOf(link) + 1).padStart(2, '0')}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6 px-3 pb-3">
              <a
                href={profile.cv}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 px-4 py-3 bg-primary text-white text-xs font-bold uppercase tracking-[0.14em] hover:bg-primary-dark transition-colors"
              >
                <FileDown size={16} />
                Télécharger mon CV
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Navbar
