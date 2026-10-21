/**
 * Constantes de navigation de l'application
 * Centralisées pour respecter le principe DRY (utilisées dans Navbar, Footer, useActiveSection).
 */
export const NAV_LINKS = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'À propos', href: '#a-propos' },
  { label: 'Règles GL', href: '#genie-logiciel' },
  { label: 'Compétences', href: '#competences' },
  { label: 'Services', href: '#services' },
  { label: 'Projets', href: '#projets' },
  { label: 'Parcours', href: '#parcours' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

export const SECTION_IDS = NAV_LINKS.map((link) => link.href.slice(1))

export const MARQUEE_TECH_ITEMS = [
  'Full Stack Software Engineer',
  'React 19',
  'TypeScript',
  'Next.js',
  'Spring Boot',
  'Java',
  'PostgreSQL',
  'Docker',
  'Flutter',
  'Clean Architecture',
  'DevOps & CI/CD',
  'Disponible pour Stage & Emploi',
]

