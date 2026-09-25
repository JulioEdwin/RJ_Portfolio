import { Mail, MapPin, FileDown } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../ui/BrandIcons'
import { profile } from '../../data/profile'

const footerLinks = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'À propos', href: '#a-propos' },
  { label: 'Compétences', href: '#competences' },
  { label: 'Projets', href: '#projets' },
  { label: 'Parcours', href: '#parcours' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer id="site-footer" className="bg-ink-soft text-slate-400 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-2 gap-10 items-start mb-10">
          <div>
            <h3 className="font-display font-black text-3xl text-white tracking-tight uppercase leading-none mb-2">
              {profile.firstName}
              <span className="text-outline ml-2">{profile.lastName}</span>
            </h3>
            <p className="font-heading font-bold text-primary-light">{profile.title}</p>
            <p className="mt-4 text-sm leading-relaxed max-w-sm text-slate-500">
              {profile.aboutLine}
            </p>
          </div>

          <div className="md:justify-self-end">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500 mb-4">
              navigation
            </p>
            <nav aria-label="Liens de pied de page">
              <ul className="grid grid-cols-2 gap-x-8 gap-y-2">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={profile.cv}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg border border-white/20 text-white hover:bg-white/10 transition-all"
              >
                <FileDown size={14} />
                CV (FR)
              </a>
              <a
                href={profile.cvEn}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg border border-white/20 text-white hover:bg-white/10 transition-all"
              >
                <FileDown size={14} />
                CV (EN)
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-white/10 pt-8">
          <div className="flex items-center gap-3">
            <a
              href={profile.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-slate-400 hover:text-white hover:border-primary transition-colors"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={profile.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-slate-400 hover:text-white hover:border-primary transition-colors"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href={`mailto:${profile.contact.email}`}
              aria-label="Email"
              className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-slate-400 hover:text-white hover:border-primary transition-colors"
            >
              <Mail size={18} />
            </a>
            <span className="flex items-center gap-2 pl-2 font-mono text-[11px] text-slate-500">
              <MapPin size={13} />
              {profile.contact.location}
            </span>
          </div>

          <div className="text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-slate-500">
              &copy; {year} — {profile.name} · Tous droits réservés
            </p>
            <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-slate-700">
              portfolio/2.0 · conçu &amp; développé avec passion
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
