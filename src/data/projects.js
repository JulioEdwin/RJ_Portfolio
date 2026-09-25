const githubProfile = 'https://github.com/JulioEdwin'

export const projects = [
  {
    id: 'gestion-soutenances',
    name: 'Gestion des soutenances de Master M2',
    description:
      "Application web et mobile permettant de gérer et organiser les soutenances de Master 2 : étudiants, enseignants, jurys, mémoires, disponibilités, salles, planification et résultats.",
    problem:
      "L'organisation des soutenances de Master 2 était réalisée manuellement, ce qui entraînait des conflits de planning, des erreurs de communication et une perte de temps considérable.",
    role: 'Développeur Full Stack',
    technologies: ['Angular', 'Spring Boot', 'PostgreSQL', 'Flutter'],
    tags: ['Web', 'Mobile', 'Full Stack'],
    image: null,
    github: null,
    demo: null,
    details: {
      context:
        "Projet académique réalisé dans le cadre de la Licence en Informatique, en collaboration avec l'université pour répondre à un besoin réel d'organisation administrative.",
      objective:
        "Centraliser et automatiser la gestion des soutenances de Master 2 : planification, affectation des jurys, gestion des disponibilités et publication des résultats.",
      features: [
        'Gestion des étudiants, enseignants et jurys',
        'Dépôt et gestion des mémoires',
        'Gestion des disponibilités et des salles',
        'Planification automatique des soutenances',
        'Publication des résultats',
        'Interface web (back-office) et mobile',
      ],
      architecture:
        "Architecture monolithique en couches : couche présentation (Angular / Flutter), couche service (Spring Boot) et couche données (PostgreSQL). API REST pour la communication entre le client web, le client mobile et le serveur.",
      difficulties: [
        'Coordination entre les deux clients (web et mobile) et l’API',
        'Gestion des règles métier complexes (disponibilités, doublons de planning)',
        'Optimisation des requêtes de planification',
      ],
      solutions: [
        "Contrat API REST commun consommé par Angular et Flutter",
        'Validation métier centralisée dans la couche service',
        'Requêtes optimisées et indexation des tables les plus sollicitées',
      ],
    },
  },
  {
    id: 'saas-appointment',
    name: 'SaaS — Prise de rendez-vous',
    description:
      "Application SaaS multi-tenant sophistiquée permettant la gestion et la planification automatique de rendez-vous professionnels : backend sécurisé par JWT et interface frontend ultra-réactive.",
    problem:
      'La planification manuelle des rendez-vous professionnels génère des conflits de créneaux et une perte de temps pour les entreprises.',
    role: 'Développeur Full Stack',
    technologies: ['Spring Boot', 'React', 'TypeScript', 'PostgreSQL', 'JWT', 'Docker'],
    tags: ['Web', 'Full Stack', 'Backend'],
    image: null,
    github: githubProfile,
    demo: null,
    details: {
      context:
        'Projet personnel visant à construire un produit SaaS complet, du backend industriel à la frontend réactive.',
      objective:
        "Offrir une plateforme multi-tenant de gestion de rendez-vous : réservation, planification automatique et suivi des disponibilités.",
      features: [
        'Gestion multi-tenant des espaces et des utilisateurs',
        'Réservation et planification automatique des rendez-vous',
        'Authentification et sécurité par JWT',
        'Interface frontend réactive et responsive',
        'Déploiement conteneurisé avec Docker',
      ],
      architecture:
        'Backend Spring Boot sécurisé par JWT, API REST consommée par un frontend React en TypeScript, persistance PostgreSQL, conteneurisation Docker.',
      difficulties: [
        "Isolation des données entre tenants",
        'Gestion fine des créneaux et des fuseaux horaires',
        "Sécurisation complète de l'API",
      ],
      solutions: [
        'Modèle de données isolé par tenant et validation côté serveur',
        'Règles de planification centralisées et testées',
        'Authentification par jetons avec rôles et restrictions',
      ],
    },
  },
  {
    id: 'e-commerce',
    name: 'E-commerce full stack',
    description:
      "Plateforme e-commerce haut de gamme : API backend hautes performances (catalogue, paniers en temps réel, commandes sécurisées), dashboard d'administration et interface client fluide.",
    problem:
      'Les boutiques en ligne ont besoin d’une plateforme fiable gérant catalogue, stock et commandes sans compromis sur la fluidité de l’interface.',
    role: 'Développeur Full Stack',
    technologies: ['NestJS', 'Prisma', 'React', 'TypeScript', 'NeonDB (PostgreSQL)', 'Tailwind CSS'],
    tags: ['Web', 'Full Stack', 'Backend'],
    image: null,
    github: githubProfile,
    demo: null,
    details: {
      context:
        "Projet personnel construit autour d'un stack Node.js moderne pour concevoir une architecture e-commerce évolutive.",
      objective:
        'Garantir une expérience d’achat fluide côté client et une administration complète côté vendeur.',
      features: [
        'Catalogue de produits et gestion des stocks',
        'Panier et commandes en temps réel',
        'Paiement et commandes sécurisés',
        "Dashboard d'administration élégant",
        'Interface client fluide et immersive',
      ],
      architecture:
        'API NestJS typée avec Prisma, base PostgreSQL NeonDB, frontend React + Tailwind CSS, communication via API REST.',
      difficulties: [
        'Cohérence du panier et du stock en temps réel',
        'Sécurité des parcours de commande',
        "Séparation claire des responsabilités administration / boutique",
      ],
      solutions: [
        'Transactions et contraintes côté base de données',
        'Validation systématique des entrées et contrôle des rôles',
        'Architecture modulaire (modules NestJS) facile à faire évoluer',
      ],
    },
  },
  {
    id: 'photoedit-marketplace',
    name: 'PhotoEdit — Marketplace d’artisans',
    description:
      "App mobile de vente pour les artisans malgaches. Marketplace pour artisans et vendeurs locaux, développée avec Flutter et Supabase.",
    problem:
      'Les artisans malgaches disposent de peu de visibilité et de canaux de vente numériques simples pour proposer leurs créations.',
    role: 'Développeur Mobile',
    technologies: ['Flutter', 'Dart', 'Supabase', 'Bloc', 'GoRouter'],
    tags: ['Mobile', 'Full Stack'],
    image: null,
    github: githubProfile,
    demo: null,
    details: {
      context:
        'Projet personnel dédié au commerce local, avec un objectif fort : donner un canal de vente aux artisans malgaches.',
      objective:
        'Permettre aux artisans de publier leurs produits et aux clients de commander directement depuis leur téléphone.',
      features: [
        'Publication des produits par les artisans',
        'Recherche et catégories de produits',
        'Comptes utilisateurs et gestion des commandes',
        'Base de données temps réel Supabase',
      ],
      architecture:
        'Application Flutter (state management Bloc, navigation GoRouter) connectée à Supabase pour l’authentification et la base de données temps réel.',
      difficulties: [
        'Synchronisation fiable des commandes en temps réel',
        'Interface simple pour des vendeurs non techniques',
      ],
      solutions: [
        'Composants Bloc testables et gestion d’état prévisible',
        'Parcours de publication réduit en quelques étapes',
      ],
    },
  },
  {
    id: 'retouche-photo',
    name: 'App mobile de retouche photo',
    description:
      "Application mobile permettant d'importer, modifier et exporter des images avec différents outils de traitement.",
    problem:
      'Les applications de retouche photo du marché sont souvent complexes ou payantes. L’objectif était une application simple et accessible.',
    role: 'Développeur Mobile',
    technologies: ['Flutter', 'Dart'],
    tags: ['Mobile', 'UI', 'Frontend'],
    image: null,
    github: githubProfile,
    demo: null,
    details: {
      context:
        "Projet académique de développement mobile visant à créer une application de traitement d'image simple d'utilisation.",
      objective:
        'Fournir une application mobile Android permettant de retoucher des photos directement sur le téléphone.',
      features: [
        'Importation de photos depuis la galerie',
        'Outil de recadrage',
        'Filtres et ajustements (luminosité, contraste)',
        'Exportation et partage des images',
      ],
      architecture:
        'Application Flutter organisée en couches (interface, logique métier, accès aux données) avec un état géré de manière simple et prévisible.',
      difficulties: [
        'Manipulation performante des images sur mobile',
        'Respect des performances sur les appareils modestes',
      ],
      solutions: [
        "Utilisation d'algorithmes de traitement optimisés",
        'Tests sur plusieurs tailles de fichiers et appareils',
      ],
    },
  },
  {
    id: 'gestion-restaurant',
    name: 'Gestion de restaurant',
    description:
      'Application permettant de gérer les produits, commandes, ventes et informations liées à un restaurant.',
    problem:
      "Le suivi des commandes et des ventes d'un restaurant était réalisé sur papier, rendant l'historique difficile à consulter et la gestion du stock approximative.",
    role: 'Développeur Full Stack',
    technologies: ['Spring Boot', 'Java', 'PostgreSQL', 'Angular'],
    tags: ['Web', 'Full Stack', 'Backend'],
    image: null,
    github: null,
    demo: null,
    details: {
      context: "Projet académique visant à digitaliser la gestion quotidienne d'un restaurant.",
      objective:
        'Suivre les produits, les commandes et les ventes afin de faciliter la prise de décision et la gestion quotidienne.',
      features: [
        'Gestion des produits du menu',
        'Création et suivi des commandes',
        'Suivi des ventes',
        'Tableau de bord avec indicateurs clés',
      ],
      architecture:
        'Application web construite avec Spring Boot pour le backend, Angular pour le frontend et PostgreSQL pour la persistance des données.',
      difficulties: [
        'Modélisation des relations entre produits, commandes et ventes',
        'Calcul fiable des indicateurs du tableau de bord',
      ],
      solutions: [
        "Schéma relationnel normalisé avec contraintes d'intégrité",
        "Requêtes d'agrégation pour les statistiques",
      ],
    },
  },
]

export const projectStats = (() => {
  const techs = new Set(projects.flatMap((project) => project.technologies))
  return [
    { value: String(projects.length), label: 'Projets' },
    { value: String(techs.size), label: 'Technologies' },
    { value: '12+', label: 'Réalisés' },
  ]
})()
