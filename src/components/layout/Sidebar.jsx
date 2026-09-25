import { Mail } from 'lucide-react'
import { profile } from '../../data/profile'
import { GithubIcon, LinkedinIcon } from '../ui/BrandIcons'

const navLinks = [
  { label: 'À propos', href: '#a-propos' },
  { label: 'Compétences', href: '#competences' },
  { label: 'Projets', href: '#projets' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Parcours', href: '#experiences' },
  { label: 'Formation', href: '#formation' },
  { label: 'Services', href: '#services' },
  { label: 'Intérêts', href: '#interets' },
  { label: 'Contact', href: '#contact' },
]

const Sidebar = () => {
  const initials = profile.name
    .split(' ')
    .map((word) => word[0])
    .slice(0, 2)
    .join('')

  return (
    <aside className="hidden xl:flex fixed inset-y-0 left-0 w-64 flex-col bg-dark border-r border-white/10 z-50">
      <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col">
        <a href="#accueil" className="flex items-center gap-3 mb-10 group">
          <span className="w-10 h-10 bg-primary text-white rounded-lg flex items-center justify-center font-display font-bold text-sm shrink-0 group-hover:bg-primary-dark transition-colors">
            {initials}
          </span>
          <span>
            <span className="block font-mono text-[11px] uppercase tracking-[0.14em] text-white leading-tight">
              {profile.name}
            </span>
            <span className="block font-mono text-[10px] text-slate-500 leading-tight">
              {profile.title}
            </span>
          </span>
        </a>

        <nav className="space-y-1" aria-label="Navigation principale">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group flex items-center gap-3 py-2 font-mono text-[11px] uppercase tracking-[0.16em] text-slate-400 hover:text-white transition-colors"
            >
              <span className="w-4 h-px bg-white/15 group-hover:bg-primary group-hover:w-6 transition-all duration-300" />
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="px-6 py-6 border-t border-white/10 space-y-4">
        <p className="flex items-center gap-2 font-mono text-[10px] text-slate-500">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          Disponible · Stage / Emploi
        </p>
        <a
          href={`mailto:${profile.contact.email}`}
          className="flex items-center gap-2 font-mono text-[11px] text-slate-400 hover:text-primary-light transition-colors"
        >
          <Mail size={13} />
          {profile.contact.email}
        </a>
        <div className="flex items-center gap-3 pt-1">
          <a
            href={profile.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-slate-400 hover:text-white hover:border-primary transition-colors"
          >
            <GithubIcon size={16} />
          </a>
          <a
            href={profile.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-slate-400 hover:text-white hover:border-primary transition-colors"
          >
            <LinkedinIcon size={16} />
          </a>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar