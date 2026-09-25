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
    image: '/images/projects/soutenances.png',
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
        "Coordination entre les deux clients (web et mobile) et l'API",
        "Gestion des règles métier complexes (disponibilités, doublons de planning)",
        "Optimisation des requêtes de planification",
      ],
      solutions: [
        "Définition d'un contrat API REST commun consommé par Angular et Flutter",
        "Validation métier centralisée dans la couche service",
        "Requêtes optimisées et indexation des tables les plus sollicitées",
      ],
    },
  },
  {
    id: 'gestion-restaurant',
    name: 'Gestion de restaurant',
    description:
      "Application permettant de gérer les produits, commandes, ventes et informations liées à un restaurant.",
    problem:
      "Le suivi des commandes et des ventes d'un restaurant était réalisé sur papier, rendant l'historique difficile à consulter et la gestion du stock approximative.",
    role: 'Développeur Full Stack',
    technologies: ['Spring Boot', 'Java', 'PostgreSQL', 'Angular'],
    tags: ['Web', 'Full Stack', 'Backend'],
    image: '/images/projects/restaurant.png',
    github: null,
    demo: null,
    details: {
      context:
        "Projet académique visant à digitaliser la gestion quotidienne d'un restaurant.",
      objective:
        "Suivre les produits, les commandes et les ventes afin de faciliter la prise de décision et la gestion quotidienne.",
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
        'Schéma relationnel normalisé avec contraintes d\'intégrité',
        'Requêtes d\'agrégation pour les statistiques',
      ],
    },
  },
  {
    id: 'retouche-photo',
    name: 'App mobile de retouche photo',
    description:
      "Application mobile permettant d'importer, modifier et exporter des images avec différents outils de traitement.",
    problem:
      "Les applications de retouche photo du marché sont souvent complexes ou payantes. L'objectif était une application simple et accessible.",
    role: 'Développeur Mobile',
    technologies: ['Flutter', 'Dart'],
    tags: ['Mobile', 'UI', 'Frontend'],
    image: '/images/projects/photo.png',
    github: null,
    demo: null,
    details: {
      context:
        'Projet académique de développement mobile visant à créer une application de traitement d\'images simple d\'utilisation.',
      objective:
        "Fournir une application mobile Android permettant de retoucher des photos directement sur le téléphone.",
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
]