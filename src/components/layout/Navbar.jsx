import { useState, useEffect } from 'react'
import { Menu, X, FileDown } from 'lucide-react'
import { profile } from '../../data/profile'
import Button from '../ui/Button'

const navLinks = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'À propos', href: '#a-propos' },
  { label: 'Compétences', href: '#competences' },
  { label: 'Projets', href: '#projets' },
  { label: 'Expériences', href: '#experiences' },
  { label: 'Formation', href: '#formation' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Services', href: '#services' },
  { label: 'Intérêts', href: '#interets' },
  { label: 'Contact', href: '#contact' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  const initials = profile.name
    .split(' ')
    .map((word) => word[0])
    .slice(0, 2)
    .join('')

  return (
    <header
      className={`xl:hidden fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-dark/90 backdrop-blur-md shadow-lg shadow-black/20 border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Navigation principale">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#accueil" className="flex items-center gap-2.5" onClick={handleLinkClick}>
            <span className="w-9 h-9 bg-primary text-white rounded-lg flex items-center justify-center font-display font-bold text-sm">
              {initials}
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-white">
              {profile.name}
            </span>
          </a>

          <button
            className="p-2 rounded-lg text-white hover:text-primary-light hover:bg-white/10 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="bg-dark border-b border-white/10 shadow-lg max-h-[calc(100vh-4rem)] overflow-y-auto">
          <nav className="px-4 py-4" aria-label="Navigation mobile">
            <ul className="space-y-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={handleLinkClick}
                    className="block px-3 py-3 rounded-lg text-sm font-medium text-slate-200 hover:bg-white/5 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4 px-3 pb-3">
              <Button href={profile.cv} variant="primary" className="w-full">
                <FileDown size={16} />
                Télécharger mon CV
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Navbar