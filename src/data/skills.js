export const skillCategories = [
  {
    title: 'Front-end',
    icon: 'layout',
    skills: [
      { name: 'Next.js' },
      { name: 'React' },
      { name: 'TypeScript' },
      { name: 'HTML5' },
      { name: 'CSS3' },
    ],
  },
  {
    title: 'Mobile',
    icon: 'smartphone',
    skills: [{ name: 'Flutter' }, { name: 'FlutterFlow' }],
  },
  {
    title: 'Back-end',
    icon: 'server',
    skills: [
      { name: 'NestJS (Node.js)' },
      { name: 'Spring Boot (Java)' },
      { name: "Architecture d'API" },
    ],
  },
  {
    title: 'Bases de données',
    icon: 'database',
    skills: [
      { name: 'PostgreSQL' },
      { name: 'MySQL' },
      { name: 'MongoDB' },
      { name: 'Prisma' },
      { name: 'TypeORM' },
    ],
  },
  {
    title: 'Méthodologies',
    icon: 'layers',
    skills: [
      { name: 'Agile Scrum' },
      { name: 'Clean Architecture' },
      { name: 'Git Flow' },
      { name: 'UML' },
    ],
  },
  {
    title: 'Outils & DevOps',
    icon: 'wrench',
    skills: [
      { name: 'Git (GitHub, GitLab)' },
      { name: 'GitLab CI/CD' },
      { name: 'Docker' },
      { name: 'Kubernetes' },
      { name: 'Ansible' },
      { name: 'Figma' },
      { name: 'CI/CD' },
    ],
  },
]

export const techMarquee = skillCategories.flatMap((category) =>
  category.skills.map((skill) => skill.name)
)
