import React from 'react'
import { Mail, MapPin, FileDown, Terminal, ExternalLink, SlidersHorizontal } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../common/BrandIcons'
import { profile } from '../../data/profile'
import { usePreferences } from '../../context/PreferencesContext'

/**
 * Composant Pied de Page (Footer)
 * Règle de Génie Logiciel : Sémantique HTML, accessibilité et design system unifié, bilingue.
 */
const Footer = () => {
  const currentYear = new Date().getFullYear()
  const { t, language, setIsSettingsOpen } = usePreferences()

  const navItems = [
    { label: t.nav.home, href: '#accueil' },
    { label: t.nav.about, href: '#a-propos' },
    { label: t.nav.engineering, href: '#genie-logiciel' },
    { label: t.nav.skills, href: '#competences' },
    { label: t.nav.services, href: '#services' },
    { label: t.nav.projects, href: '#projets' },
    { label: t.nav.timeline, href: '#parcours' },
    { label: t.nav.certifications, href: '#certifications' },
    { label: t.nav.contact, href: '#contact' },
  ]

  return (
    <footer id="site-footer" className="bg-slate-950 border-t border-slate-800/80 text-slate-400 relative overflow-hidden">
      {/* Texture d'arrière-plan tech subtile */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          {/* Identité & Présentation */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center font-mono font-bold text-sm shadow-md shadow-blue-600/30">
                JR
              </div>
              <div>
                <h3 className="font-sans font-bold text-lg text-white tracking-tight">
                  {profile.name}
                </h3>
                <p className="font-mono text-xs text-blue-400 tracking-wider">
                  {t.hero.role}
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              {language === 'en'
                ? 'I engineer modern, performant, and scalable web and mobile software — from relational database design to intuitive user interfaces.'
                : profile.aboutLine}
            </p>

            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <MapPin size={14} className="text-blue-400" />
              <span>{profile.location}</span>
            </div>
          </div>

          {/* Navigation Rapide */}
          <div className="md:col-span-4">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-blue-400 mb-4 flex items-center gap-2">
              <Terminal size={14} />
              {t.footer.navigation}
            </p>
            <nav aria-label="Liens de pied de page">
              <ul className="grid grid-cols-2 gap-y-2.5 gap-x-4 text-xs font-medium">
                {navItems.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-slate-400 hover:text-white hover:underline transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Téléchargements & Documents & Préférences */}
          <div className="md:col-span-3 space-y-4">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-blue-400 mb-4">
              {t.footer.cvSection}
            </p>
            <div className="flex flex-col gap-2.5">
              <a
                href={profile.cv}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-200 hover:text-white hover:border-blue-500/50 hover:bg-slate-800 transition-all"
              >
                <span className="flex items-center gap-2">
                  <FileDown size={15} className="text-blue-400" />
                  CV Français (PDF)
                </span>
                <ExternalLink size={12} className="text-slate-500" />
              </a>
              <a
                href={profile.cvEn}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-200 hover:text-white hover:border-blue-500/50 hover:bg-slate-800 transition-all"
              >
                <span className="flex items-center gap-2">
                  <FileDown size={15} className="text-blue-400" />
                  Resume English (PDF)
                </span>
                <ExternalLink size={12} className="text-slate-500" />
              </a>

              {/* Raccourci Préférences */}
              <button
                type="button"
                onClick={() => setIsSettingsOpen(true)}
                className="inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-blue-400 hover:text-white hover:border-blue-500/50 hover:bg-slate-800 transition-all cursor-pointer text-left"
              >
                <span className="flex items-center gap-2">
                  <SlidersHorizontal size={14} />
                  <span>{t.nav.settings}</span>
                </span>
                <span className="text-[10px] font-mono uppercase bg-blue-500/10 px-1.5 py-0.5 rounded text-blue-300">
                  {language.toUpperCase()}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Barre inférieure */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <a
              href={profile.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Profil GitHub de Julio Edwin"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-blue-500/40 hover:bg-slate-800 transition-all"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={profile.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Profil LinkedIn de Julio Edwin"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-blue-500/40 hover:bg-slate-800 transition-all"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href={`mailto:${profile.contact.email}`}
              aria-label="Envoyer un e-mail à Julio Edwin"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-blue-500/40 hover:bg-slate-800 transition-all"
            >
              <Mail size={18} />
            </a>
          </div>

          <div className="text-center sm:text-right">
            <p className="font-mono text-xs text-slate-400">
              © {currentYear} {profile.name} — {t.footer.rights}
            </p>
            <p className="font-mono text-[10px] text-slate-500 uppercase tracking-widest mt-1">
              {t.footer.rulesNotice}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
