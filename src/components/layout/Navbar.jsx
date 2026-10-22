import React, { useState, useEffect } from 'react'
import { Menu, X, FileDown, Send, SlidersHorizontal, Sun, Moon } from 'lucide-react'
import { profile } from '../../data/profile'
import { SECTION_IDS } from '../../constants/navigation'
import useActiveSection from '../../hooks/useActiveSection'
import { usePreferences } from '../../context/PreferencesContext'
import { getInitials } from '../../utils/helpers'

/**
 * Composant Barre de Navigation (Navbar) ergonomique, accessible et fluide.
 * Règle de Génie Logiciel : SoC, A11y (WCAG AA), préférences utilisateur intégrées.
 */
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)
  const activeSection = useActiveSection(SECTION_IDS)
  const { language, resolvedTheme, setIsSettingsOpen, t } = usePreferences()

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY
          const scrollable = document.documentElement.scrollHeight - window.innerHeight
          setScrolled(scrollY > 20)
          setProgress(scrollable > 0 ? Math.min(scrollY / scrollable, 1) : 0)
          ticking = false
        })
        ticking = true
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Verrouillage du scroll quand le menu mobile est ouvert
  useEffect(() => {
    const prevOverflow = document.body.style.overflow
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = prevOverflow
    }
  }, [isOpen])

  const initials = getInitials(profile.name, 2)

  const desktopNavItems = [
    { label: t.nav.home, href: '#accueil' },
    { label: t.nav.projects, href: '#projets' },
    { label: t.nav.skills, href: '#competences' },
    { label: t.nav.about, href: '#a-propos' },
    { label: t.nav.timeline, href: '#parcours' },
    { label: t.nav.contact, href: '#contact' },
  ]

  const mobileNavItems = [
    { label: t.nav.home, href: '#accueil' },
    { label: t.nav.projects, href: '#projets' },
    { label: t.nav.skills, href: '#competences' },
    { label: t.nav.about, href: '#a-propos' },
    { label: t.nav.timeline, href: '#parcours' },
    { label: t.nav.engineering, href: '#genie-logiciel' },
    { label: t.nav.certifications, href: '#certifications' },
    { label: t.nav.contact, href: '#contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 transition-all duration-300">
      <div
        className={`w-full transition-all duration-300 ${
          scrolled || isOpen
            ? 'bg-slate-950/85 backdrop-blur-xl border-b border-slate-800/80 shadow-lg shadow-black/40'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            className="flex items-center justify-between h-16 md:h-20"
            aria-label="Navigation principale"
          >
            {/* Logo / Monogramme */}
            <a
              href="#accueil"
              className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded-xl p-1"
              onClick={() => setIsOpen(false)}
            >
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-mono font-bold text-sm tracking-wider shadow-md shadow-blue-600/30 group-hover:bg-blue-500 transition-colors">
                {initials}
              </div>
              <div className="flex flex-col">
                <span className="font-sans font-bold text-sm text-white tracking-tight group-hover:text-blue-400 transition-colors">
                  {profile.firstName}
                </span>
                <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                  Full Stack
                </span>
              </div>
            </a>

            {/* Liens de navigation Desktop : Aérés et hiérarchisés */}
            <ul className="hidden lg:flex items-center gap-1 bg-slate-900/60 border border-slate-800/80 px-3 py-1.5 rounded-full backdrop-blur-md">
              {desktopNavItems.map((link) => {
                const isActive = activeSection === link.href.slice(1)
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className={`relative px-3.5 py-1.5 rounded-full text-xs font-semibold font-sans transition-all duration-200 block ${
                        isActive
                          ? 'bg-blue-600 text-white shadow-sm shadow-blue-600/30'
                          : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                      }`}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {link.label}
                    </a>
                  </li>
                )
              })}
            </ul>

            {/* Actions à droite : Préférences + CV */}
            <div className="flex items-center gap-2">
              {/* Bouton Paramètres / Préférences */}
              <button
                type="button"
                onClick={() => setIsSettingsOpen(true)}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900/90 text-slate-200 border border-slate-700/80 hover:text-white hover:border-blue-500/60 hover:bg-slate-800 transition-all cursor-pointer shadow-sm"
                title={t.nav.settings}
                aria-label={t.nav.settings}
              >
                <SlidersHorizontal size={15} className="text-blue-400 shrink-0" />
                <span className="hidden sm:inline font-mono text-xs uppercase tracking-wider">
                  {language.toUpperCase()}
                </span>
                <span className="text-xs opacity-75 hidden sm:inline" aria-hidden="true">
                  {resolvedTheme === 'dark' ? <Moon size={13} className="inline text-blue-300" /> : <Sun size={13} className="inline text-blue-400" />}
                </span>
              </button>

              <a
                href={language === 'en' ? profile.cvEn : profile.cv}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900 text-slate-200 text-xs font-semibold hover:bg-slate-800 hover:text-white border border-slate-700/80 transition-all duration-200"
              >
                <FileDown size={14} className="text-blue-400" />
                <span>{language === 'en' ? t.nav.cvEn : t.nav.cvFr}</span>
              </a>

              {/* Bouton Toggle Mobile */}
              <button
                type="button"
                className="lg:hidden p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? t.nav.closeMenu : t.nav.openMenu}
                aria-expanded={isOpen}
              >
                {isOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </nav>
        </div>

        {/* Ligne fine de progression de défilement */}
        <div className="h-[2px] bg-slate-800/60 w-full" aria-hidden="true">
          <div
            className="h-full bg-blue-500 origin-left transition-transform duration-100 ease-out"
            style={{ transform: `scaleX(${progress})` }}
          />
        </div>
      </div>

      {/* Menu Déroulant Mobile */}
      {isOpen && (
        <div className="lg:hidden fixed inset-x-0 top-16 md:top-20 bg-slate-950/98 backdrop-blur-2xl border-b border-slate-800 max-h-[calc(100vh-4rem)] md:max-h-[calc(100vh-5rem)] overflow-y-auto animate-fadeIn shadow-2xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-4">
            {/* Raccourci paramètres dans le menu mobile */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-slate-800">
              <span className="font-mono text-xs uppercase tracking-wider text-slate-400">
                {t.nav.settings}
              </span>
              <button
                type="button"
                onClick={() => {
                  setIsOpen(false)
                  setIsSettingsOpen(true)
                }}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-600/15 border border-blue-500/30 text-blue-400 font-mono text-xs font-semibold hover:bg-blue-600 hover:text-white transition-colors cursor-pointer"
              >
                <SlidersHorizontal size={14} />
                <span>{language.toUpperCase()} • {resolvedTheme === 'dark' ? 'Sombre' : 'Clair'}</span>
              </button>
            </div>

            <nav aria-label="Navigation mobile">
              <ul className="space-y-1">
                {mobileNavItems.map((link, idx) => {
                  const isActive = activeSection === link.href.slice(1)
                  return (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                          isActive
                            ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25 font-bold'
                            : 'text-slate-300 hover:text-blue-400 hover:bg-slate-800/50'
                        }`}
                      >
                        <span>{link.label}</span>
                        <span className={`font-mono text-xs ${isActive ? 'text-blue-100' : 'text-slate-500'}`}>
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                      </a>
                    </li>
                  )
                })}
              </ul>
            </nav>

            <div className="pt-4 border-t border-slate-800/80 grid grid-cols-2 gap-3">
              <a
                href={profile.cv}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 text-xs font-semibold hover:bg-slate-800 hover:text-white transition-colors"
              >
                <FileDown size={16} className="text-blue-400" />
                {t.nav.cvFr}
              </a>
              <a
                href={profile.cvEn}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 text-xs font-semibold hover:bg-slate-800 hover:text-white transition-colors"
              >
                <FileDown size={16} className="text-blue-400" />
                {t.nav.cvEn}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
