/**
 * Les 10 Règles Fondamentales du Génie Logiciel appliquées à l'architecture
 * et aux développements de Julio Edwin RAZAFIMANAMPY (Support bilingue FR/EN).
 */
export const ENGINEERING_RULES = [
  {
    number: '01',
    rule: 'Séparation des Préoccupations (SoC)',
    ruleEn: 'Separation of Concerns (SoC)',
    concept: 'Separation of Concerns',
    description:
      'Découpage strict de l’application en couches indépendantes : données brutes (data), logique réutilisable (hooks), présentation pure (common UI), vues fonctionnelles (sections) et utilitaires (utils).',
    descriptionEn:
      'Strict decoupling of layers: raw data (data), business logic (hooks), UI primitives (common), feature sections, and utility helpers (utils).',
    application:
      'Aucune requête ou manipulation directe de données au sein des composants de présentation.',
    applicationEn:
      'Zero direct data mutation or business queries inside pure presentation components.',
    icon: 'Layers',
  },
  {
    number: '02',
    rule: 'Responsabilité Unique (SRP)',
    ruleEn: 'Single Responsibility Principle (SRP)',
    concept: 'Single Responsibility Principle',
    description:
      'Chaque composant, fonction ou hook remplit une tâche unique, bien circonscrite et prévisible.',
    descriptionEn:
      'Every component, custom hook, or helper fulfills one well-defined and predictable responsibility.',
    application:
      'Ex : useClipboard gère la copie, Toast gère l’alerte, ProjectModal gère la fenêtre modale.',
    applicationEn:
      'e.g. useClipboard manages copy, Toast manages alert, Modal handles the accessible dialog.',
    icon: 'Target',
  },
  {
    number: '03',
    rule: 'DRY — Ne Pas Se Répéter',
    ruleEn: "DRY — Don't Repeat Yourself",
    concept: "Don't Repeat Yourself",
    description:
      'Élimination systématique des duplications de code, de styles et de constantes.',
    descriptionEn:
      'Systematic elimination of code, CSS duplication, and dispersed magic strings.',
    application:
      'Composants atomiques mutualisés (Button, Badge, Modal, Card), système de tokens CSS et constantes centralisées.',
    applicationEn:
      'Shared atomic primitives (Button, Badge, Modal, Card), CSS design tokens, and centralized constants.',
    icon: 'Repeat',
  },
  {
    number: '04',
    rule: 'KISS — Simplicité et Clarté',
    ruleEn: 'KISS — Keep It Simple, Stupid',
    concept: 'Keep It Simple, Stupid',
    description:
      'Privilégier les solutions directes, lisibles et élégantes face à la sur-ingénierie et aux abstractions prématurées.',
    descriptionEn:
      'Favor direct, readable, and elegant solutions over speculative overengineering and premature abstractions.',
    application:
      'Code auto-documenté, conventions explicites et suppression des effets de bord opaques.',
    applicationEn:
      'Self-documenting code, explicit naming conventions, and removal of opaque side effects.',
    icon: 'Zap',
  },
  {
    number: '05',
    rule: 'Programmation Défensive & Robustesse',
    ruleEn: 'Defensive Programming & Robustness',
    concept: 'Defensive Programming',
    description:
      'Anticipation des erreurs, validation stricte des entrées utilisateur et replis gracieux en cas d’anomalie réseau ou matérielle.',
    descriptionEn:
      'Proactive error anticipation, strict input validation, and graceful fallbacks during network anomalies.',
    application:
      'Validation de formulaire en temps réel, optional chaining (?.), timeouts réseau et nettoyage systématique des écouteurs.',
    applicationEn:
      'Real-time form validation, optional chaining (?.), network timeouts, and strict event cleanup.',
    icon: 'ShieldCheck',
  },
  {
    number: '06',
    rule: 'Accessibilité (A11y) & Sémantique HTML',
    ruleEn: 'Accessibility (A11y) & HTML Semantics',
    concept: 'Accessibility & Standards (WCAG AA)',
    description:
      'Interfaces utilisables par tous : navigation complète au clavier, contrastes stricts, balises sémantiques et rôles ARIA.',
    descriptionEn:
      'Inclusive interfaces: complete keyboard navigation, high contrast ratios, HTML5 landmarks, and ARIA attributes.',
    application:
      'Balises HTML5 (nav, main, section, article), gestion de la touche Échap, focus visibles et respect de prefers-reduced-motion.',
    applicationEn:
      'HTML5 semantic landmarks, Escape key modal closing, visible focus indicators, and reduced-motion support.',
    icon: 'Eye',
  },
  {
    number: '07',
    rule: 'Performance & Optimisation Continue',
    ruleEn: 'Performance & Ongoing Optimization',
    concept: 'High Performance & Efficiency',
    description:
      'Minimisation des temps de chargement, fluidité d’affichage à 60+ FPS et absence totale de Cumulative Layout Shift (CLS).',
    descriptionEn:
      'Minimized initial load time, steady 60+ FPS animation frame rate, and zero Cumulative Layout Shift (CLS).',
    application:
      'Animations GPU exclusives (transform, opacity), throttled scroll via requestAnimationFrame et dimensions explicites sur les médias.',
    applicationEn:
      'GPU-accelerated transforms/opacity, throttled requestAnimationFrame scroll handlers, explicit media dimensions.',
    icon: 'Gauge',
  },
  {
    number: '08',
    rule: 'Cohérence Graphique & Règle des 3 Couleurs',
    ruleEn: 'Visual Coherence & 3-Color Strict Palette',
    concept: 'Strict Design System (3 Colors Max)',
    description:
      'Discipline visuelle absolue du domaine informatique : 3 familles de couleurs maximum garantissant lisibilité et élégance sobre.',
    descriptionEn:
      'Strict visual discipline: maximum 3 color families ensuring high readability and clean developer elegance.',
    application:
      'Bleu Cyber Tech (#2563eb / #60a5fa) + Noir Ardoise / Slate (#090d16) + Blanc / Gris Pur (#ffffff / #f8fafc).',
    applicationEn:
      'Tech Cyber Blue (#2563eb / #60a5fa) + Slate Obsidian (#090d16) + Pure White / Slate (#ffffff / #f8fafc).',
    icon: 'Palette',
  },
  {
    number: '09',
    rule: 'Ergonomie & UX First',
    ruleEn: 'Ergonomics & UX First',
    concept: 'User Experience & Ergonomics',
    description:
      'Fournir un retour d’information instantané à chaque geste utilisateur : états actifs, confirmations visuelles et fluidité tactile.',
    descriptionEn:
      'Instant feedback for every user interaction: active states, visual confirmations, and tactile responsiveness.',
    application:
      'Boutons de copie 1-clic avec notifications Toast, barre de progression dynamique et prévisualisation instantanée des projets.',
    applicationEn:
      '1-click copy buttons with floating Toast alerts, dynamic progress indicator, instant modal previews.',
    icon: 'Sparkles',
  },
  {
    number: '10',
    rule: 'Maintenabilité & Évolutivité du Code',
    ruleEn: 'Maintainability & Code Scalability',
    concept: 'Clean Architecture & Scalability',
    description:
      'Structure de code modulaire et prédictible, conçue pour grandir sans régressions et pour faciliter la revue de code.',
    descriptionEn:
      'Modular, predictable code architecture built to scale without regressions and streamline code reviews.',
    application:
      'Arborescence standardisée, couplage faible, haute cohésion et conventions de nommage rigoureuses.',
    applicationEn:
      'Standardized directory layout, loose coupling, high cohesion, and strict naming conventions.',
    icon: 'CheckCircle2',
  },
]
