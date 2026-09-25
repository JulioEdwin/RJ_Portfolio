import { Mail, MapPin } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../ui/BrandIcons'
import { profile } from '../../data/profile'

const footerLinks = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'À propos', href: '#a-propos' },
  { label: 'Projets', href: '#projets' },
  { label: 'Compétences', href: '#competences' },
  { label: 'Contact', href: '#contact' },
]

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-dark text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center gap-8">
          <div className="text-center">
            <h3 className="font-display font-bold text-2xl text-white tracking-tight mb-1">
              {profile.name}
            </h3>
            <p className="text-sm text-primary-light">{profile.title}</p>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2" aria-label="Liens de pied de page">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-slate-500 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
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
            <a
              href="#contact"
              aria-label="Localisation"
              className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-slate-400 hover:text-white hover:border-primary transition-colors"
            >
              <MapPin size={18} />
            </a>
          </div>

          <div className="w-full h-px bg-white/10" />

          <p className="text-sm text-slate-600 text-center font-mono text-xs uppercase tracking-[0.18em]">
            &copy; {year} — {profile.name} · Fianarantsoa, Madagascar (GMT+3)
          </p>
          <p className="text-xs text-slate-700 font-mono text-[10px] uppercase tracking-[0.18em]">
            portfolio/1.0 · conçu &amp; développé avec passion
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer