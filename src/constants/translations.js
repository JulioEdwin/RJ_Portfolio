/**
 * Dictionnaire bilingue (Français / English) pour l'ensemble du portfolio.
 * Règle de Génie Logiciel : DRY & Centralisation des données de localisation.
 */
export const TRANSLATIONS = {
  fr: {
    // Navigation
    nav: {
      home: 'Accueil',
      about: 'À propos',
      engineering: 'Règles GL',
      skills: 'Compétences',
      services: 'Services',
      projects: 'Projets',
      timeline: 'Parcours',
      certifications: 'Certifications',
      contact: 'Contact',
      cvFr: 'CV (FR)',
      cvEn: 'CV (EN)',
      openMenu: 'Ouvrir le menu',
      closeMenu: 'Fermer le menu',
      settings: 'Préférences',
    },

    // Hero
    hero: {
      status: 'OPEN FOR WORK',
      statusSub: 'Stage & Opportunités 2026',
      role: 'Développeur Full Stack • React • TypeScript • DevOps',
      tagline:
        "Étudiant en 3e année (L3) Informatique, passionné par le développement web et mobile, à la recherche de stages et d'opportunités professionnelles.",
      exploreProjects: 'Explorer mes projets',
      downloadCv: 'Télécharger mon CV',
      contactMe: 'Me contacter',
      discover: 'Découvrir',
      activeStatus: 'Actif',
      yearsExp: "Années d'expérience",
      projectsCount: 'Projets réalisés',
      techsCount: 'Technologies',
    },

    // Manifesto
    manifesto: {
      badge: 'Manifeste Ingénierie',
      line1: 'Je conçois des applications',
      line2: 'de la base de données',
      line3: "à l'interface utilisateur.",
      targetArch: '// Architecture cible :',
    },

    // Engineering Rules
    engineering: {
      eyebrow: "Règles d'Ingénierie & Qualité",
      title: '10 Règles de Génie Logiciel Appliquées',
      description:
        "Le développement logiciel ne se limite pas à écrire du code : c'est une discipline stricte, architecturée et pérenne. Voici les 10 règles appliquées avec rigueur à l'ensemble de mes projets.",
      ruleBadge: 'Règle #',
      implementation: 'Mise en œuvre :',
      summaryTitle: 'Architecture normalisée & Code propre',
      summaryDesc:
        "Chaque module de ce portfolio a été pensé selon ces principes : arborescence découplée, typage défensif et design system strict.",
      viewProjectsBtn: "Voir l'application sur mes projets",
    },

    // About
    about: {
      eyebrow: 'À Propos de moi',
      title: 'Concevoir des solutions robustes & durables',
      step: 'Étape',
      prev: '← Précédent',
      next: 'Suivant →',
      qualitiesTitle: 'Qualités Professionnelles & Méthode',
      quoteAuthor: '— Julio Edwin RAZAFIMANAMPY · Développeur Full Stack',
    },

    // Skills
    skills: {
      eyebrow: 'Compétences Techniques',
      title: 'Stack Technologique & Outils',
      description:
        'Une maîtrise concrète des technologies modernes, des architectures modulaires et des pratiques DevOps pour délivrer des applications web et mobiles performantes.',
      all: 'Toutes',
      techCount: 'technologies',
      masteredHint: '// Maîtrisé & éprouvé sur projets',
    },

    // Services
    services: {
      eyebrow: 'Services & Valeur Ajoutée',
      title: 'Ce Que Je Peux Réaliser Pour Vous',
      description:
        "De l'expression de besoin au déploiement en production : des prestations d'ingénierie logicielle rigoureuses pour donner vie à vos projets numériques.",
      custom: 'Sur mesure',
      discuss: 'Discuter du besoin',
    },

    // Projects
    projects: {
      eyebrow: 'Projets Réalisés & Code',
      title: 'Conceptions Logicielles Concrètes',
      description:
        'Des projets applicatifs complets démontrant une maîtrise de bout en bout : modélisation, API sécurisées, architectures multi-tiers et interfaces réactives.',
      searchPlaceholder: 'Rechercher (ex: Spring, React)...',
      all: 'Tous',
      detailsBtn: 'Détails & Architecture',
      noResults: 'Aucun projet ne correspond à votre recherche',
      resetFilters: 'Réinitialiser les filtres',
      allGithub: 'Explorer tous mes dépôts sur GitHub',
      modal: {
        problem: 'Problématique adressée',
        context: 'Contexte',
        objective: 'Objectif',
        features: 'Fonctionnalités Principales',
        architecture: 'Architecture Logicielle',
        challenges: 'Défis Techniques',
        solutions: 'Solutions Implémentées',
        stack: 'Stack Technique Employée',
        viewCode: 'Voir le code source',
        allRepos: 'Tous les dépôts GitHub',
        close: 'Fermer',
      },
    },

    // Timeline / Parcours
    timeline: {
      eyebrow: 'Timeline Académique & Expériences',
      title: 'Mon Parcours & Évolution',
      description:
        "De la Licence en Informatique à l'EMIT Fianarantsoa aux expériences concrètes en entreprise et freelance : un apprentissage continu guidé par la rigueur.",
      all: 'Vue Complète',
      experiences: 'Expériences Pro',
      education: 'Formations Académiques',
      formationBadge: 'Formation',
      experienceBadge: 'Expérience',
    },

    // Certifications
    certifications: {
      eyebrow: 'Certifications & Diplômes',
      title: 'Reconnaissances Professionnelles',
      description:
        "Des certifications techniques, attestations linguistiques et simulations professionnelles validées : FLTC Madagascar Group, Codefinity, NIIS X-Road®, Orange Digital Center et Forage.",
      verified: 'Vérifié',
      viewBtn: 'Consulter',
      onRequest: 'Sur demande',
      downloadPdf: 'Télécharger PDF',
      downloadDoc: 'Télécharger Attestation',
      fullscreen: 'Plein écran',
    },

    // Interests & Languages
    interests: {
      eyebrow: 'Passions & Valeurs',
      title: 'Ce Qui Nourrit Ma Créativité',
      description:
        "Au-delà des lignes de code : des passions, un esprit d'équipe et une curiosité continue qui forgent ma rigueur d'ingénieur.",
      languagesTitle: 'Compétences Linguistiques',
      languagesSub: '// Communication internationale & technique',
    },

    // Contact
    contact: {
      eyebrow: 'Entrer en Contact',
      title: 'Démarrons Une Nouvelle Collaboration',
      description:
        "À la recherche d'un stage de fin d'études, d'un poste ou d'une mission freelance ? Je réponds rapidement à vos opportunités et projets.",
      emailLabel: 'Adresse E-mail',
      phoneLabel: 'Téléphone / WhatsApp',
      locationLabel: 'Localisation',
      networksLabel: '// Réseaux Professionnels & Code',
      formTitle: 'Envoyer un message direct',
      nameLabel: 'Nom complet *',
      namePlaceholder: 'Ex: Jean Dupont',
      emailInputLabel: 'Adresse E-mail *',
      emailPlaceholder: 'nom@entreprise.com',
      subjectLabel: "Objet de l'échange *",
      subjectPlaceholder: 'Proposition de stage / Entretien / Projet...',
      messageLabel: 'Votre message *',
      messagePlaceholder: 'Détaillez votre projet ou votre offre...',
      sendBtn: 'Envoyer le message',
      copyEmailToast: 'Adresse e-mail copiée dans le presse-papier !',
      copyPhoneToast: 'Numéro de téléphone copié dans le presse-papier !',
      successMsgTitle: 'Message bien reçu !',
      successMsgText: 'Merci pour votre prise de contact. Je vous répondrai dans les plus brefs délais.',
      errorMsgTitle: 'Erreur de transmission',
      errorMsgText: "Veuillez vérifier votre connexion ou m'écrire directement par email.",
    },

    // Settings Modal
    settings: {
      title: 'Préférences & Paramètres',
      subtitle: '// Personnalisation de votre expérience',
      description: "Personnalisez l'affichage du portfolio selon vos besoins ergonomiques, linguistiques et visuels.",
      language: {
        title: 'Langue d’affichage',
        desc: 'Choisissez la langue de navigation du portfolio.',
        fr: 'Français',
        en: 'English',
      },
      theme: {
        title: 'Thème visuel',
        desc: 'Palette stricte à 3 couleurs respectant vos préférences.',
        dark: 'Sombre',
        light: 'Clair',
        system: 'Système',
      },
      motion: {
        title: 'Animations & Mouvements',
        desc: 'Contrôlez les transitions fluides ou optez pour le mode éco/réduit.',
        full: 'Fluides',
        reduced: 'Réduites',
      },
      density: {
        title: 'Densité d’affichage',
        desc: 'Ajustez l’espacement des cartes et des composants.',
        comfortable: 'Confortable',
        compact: 'Compact',
      },
      reset: 'Réinitialiser par défaut',
      close: 'Fermer',
      savedToast: 'Préférences enregistrées avec succès !',
    },

    // Footer
    footer: {
      navigation: 'Navigation',
      cvSection: 'Curriculum Vitæ',
      rights: 'Tous droits réservés',
      rulesNotice: 'Conçu selon les 10 règles du génie logiciel',
    },
  },

  en: {
    // Navigation
    nav: {
      home: 'Home',
      about: 'About',
      engineering: 'SE Rules',
      skills: 'Skills',
      services: 'Services',
      projects: 'Projects',
      timeline: 'Timeline',
      certifications: 'Certifications',
      contact: 'Contact',
      cvFr: 'Resume (FR)',
      cvEn: 'Resume (EN)',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      settings: 'Preferences',
    },

    // Hero
    hero: {
      status: 'OPEN FOR WORK',
      statusSub: 'Internship & Opportunities 2026',
      role: 'Full Stack Software Engineer • React • TypeScript • DevOps',
      tagline:
        '3rd-year Computer Science student passionate about web & mobile engineering, seeking internship and professional software engineering opportunities.',
      exploreProjects: 'Explore projects',
      downloadCv: 'Download Resume',
      contactMe: 'Contact me',
      discover: 'Discover',
      activeStatus: 'Active',
      yearsExp: 'Years Experience',
      projectsCount: 'Completed Projects',
      techsCount: 'Technologies',
    },

    // Manifesto
    manifesto: {
      badge: 'Engineering Manifesto',
      line1: 'I build software systems',
      line2: 'from the database architecture',
      line3: 'to the user experience.',
      targetArch: '// Target Architecture:',
    },

    // Engineering Rules
    engineering: {
      eyebrow: 'Engineering & Quality Standards',
      title: '10 Software Engineering Rules Applied',
      description:
        'Software development is more than writing code: it is a rigorous, modular, and long-term discipline. Here are the 10 fundamental rules strictly applied across all my projects.',
      ruleBadge: 'Rule #',
      implementation: 'Concrete implementation:',
      summaryTitle: 'Standardized Architecture & Clean Code',
      summaryDesc:
        'Every single module of this portfolio was architected following these principles: decoupled layers, defensive typing, and a disciplined design system.',
      viewProjectsBtn: 'See application in projects',
    },

    // About
    about: {
      eyebrow: 'About me',
      title: 'Crafting robust & sustainable digital solutions',
      step: 'Step',
      prev: '← Previous',
      next: 'Next →',
      qualitiesTitle: 'Professional Strengths & Method',
      quoteAuthor: '— Julio Edwin RAZAFIMANAMPY · Full Stack Developer',
    },

    // Skills
    skills: {
      eyebrow: 'Technical Proficiencies',
      title: 'Technology Stack & Tooling',
      description:
        'Hands-on mastery of modern web technologies, scalable architectures, and DevOps workflows to deliver high-performance applications.',
      all: 'All',
      techCount: 'technologies',
      masteredHint: '// Battle-tested on production & academic projects',
    },

    // Services
    services: {
      eyebrow: 'Services & Value Proposition',
      title: 'What I Can Build For You',
      description:
        'From requirements engineering to cloud deployment: rigorous software development services to bring your digital vision to life.',
      custom: 'Custom tailored',
      discuss: 'Discuss your project',
    },

    // Projects
    projects: {
      eyebrow: 'Shipped Projects & Code',
      title: 'Concrete Software Implementations',
      description:
        'Full-featured applications demonstrating end-to-end expertise: domain modeling, secured RESTful APIs, multi-tier architectures, and reactive interfaces.',
      searchPlaceholder: 'Search (e.g. Spring, React, Docker)...',
      all: 'All',
      detailsBtn: 'Details & Architecture',
      noResults: 'No project matching your search query',
      resetFilters: 'Reset filters',
      allGithub: 'Explore all repositories on GitHub',
      modal: {
        problem: 'Addressed Problem',
        context: 'Context',
        objective: 'Objective',
        features: 'Core Features',
        architecture: 'Software Architecture',
        challenges: 'Technical Challenges',
        solutions: 'Implemented Solutions',
        stack: 'Tech Stack Employed',
        viewCode: 'View source code',
        allRepos: 'All GitHub Repositories',
        close: 'Close',
      },
    },

    // Timeline / Parcours
    timeline: {
      eyebrow: 'Academic & Professional Timeline',
      title: 'My Journey & Evolution',
      description:
        'From Computer Science studies at EMIT Fianarantsoa to real-world experience in client and team environments: a continuous, disciplined learning curve.',
      all: 'Full Timeline',
      experiences: 'Professional Work',
      education: 'Academic Degrees',
      formationBadge: 'Education',
      experienceBadge: 'Experience',
    },

    // Certifications
    certifications: {
      eyebrow: 'Certifications & Credentials',
      title: 'Professional Recognitions',
      description:
        'Verified technical certifications, language credentials, and industry simulations: FLTC Madagascar Group, Codefinity, NIIS X-Road®, Orange Digital Center, and Forage.',
      verified: 'Verified',
      viewBtn: 'Inspect',
      onRequest: 'Upon request',
      downloadPdf: 'Download PDF',
      downloadDoc: 'Download Certificate',
      fullscreen: 'Fullscreen',
    },

    // Interests & Languages
    interests: {
      eyebrow: 'Passions & Values',
      title: 'What Drives My Creativity',
      description:
        'Beyond lines of code: passions, team collaboration, and constant curiosity that shape my engineering rigor.',
      languagesTitle: 'Language Proficiencies',
      languagesSub: '// Technical & international communication',
    },

    // Contact
    contact: {
      eyebrow: 'Get in Touch',
      title: "Let's Start a New Collaboration",
      description:
        'Looking for a final-year intern, a full-time engineer, or a freelance consultant? I respond promptly to exciting software engineering opportunities.',
      emailLabel: 'Email Address',
      phoneLabel: 'Phone / WhatsApp',
      locationLabel: 'Location',
      networksLabel: '// Professional Networks & Code',
      formTitle: 'Send a direct message',
      nameLabel: 'Full Name *',
      namePlaceholder: 'e.g., John Doe',
      emailInputLabel: 'Email Address *',
      emailPlaceholder: 'name@company.com',
      subjectLabel: 'Subject *',
      subjectPlaceholder: 'Internship offer / Interview / Project proposal...',
      messageLabel: 'Your message *',
      messagePlaceholder: 'Describe your project or opportunity...',
      sendBtn: 'Send Message',
      copyEmailToast: 'Email address copied to clipboard!',
      copyPhoneToast: 'Phone number copied to clipboard!',
      successMsgTitle: 'Message received!',
      successMsgText: 'Thank you for reaching out. I will get back to you as soon as possible.',
      errorMsgTitle: 'Transmission failed',
      errorMsgText: 'Please verify your internet connection or email me directly.',
    },

    // Settings Modal
    settings: {
      title: 'Preferences & Settings',
      subtitle: '// Tailor your viewing experience',
      description: 'Customize this portfolio according to your ergonomic, linguistic, and visual preferences.',
      language: {
        title: 'Display Language',
        desc: 'Choose your preferred language for the portfolio.',
        fr: 'Français',
        en: 'English',
      },
      theme: {
        title: 'Visual Theme',
        desc: 'Strict 3-color palette tuned to your preference.',
        dark: 'Dark',
        light: 'Light',
        system: 'System',
      },
      motion: {
        title: 'Motion & Animations',
        desc: 'Toggle smooth GPU animations or opt for reduced motion.',
        full: 'Smooth',
        reduced: 'Reduced',
      },
      density: {
        title: 'Layout Density',
        desc: 'Adjust card spacing and component density.',
        comfortable: 'Comfortable',
        compact: 'Compact',
      },
      reset: 'Reset to Defaults',
      close: 'Close',
      savedToast: 'Preferences saved successfully!',
    },

    // Footer
    footer: {
      navigation: 'Navigation',
      cvSection: 'Curriculum Vitæ',
      rights: 'All rights reserved',
      rulesNotice: 'Engineered following the 10 Software Engineering Rules',
    },
  },
}

