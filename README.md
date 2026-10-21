# Portfolio Professionnel — Julio Edwin RAZAFIMANAMPY

Portfolio moderne d'ingénieur logiciel Full Stack, conçu et développé selon les normes strictes de **Génie Logiciel**, avec **React 19**, **Vite** et **Tailwind CSS**.

---

## 🎨 Système de Design Informatique (Règle des 3 Couleurs)

L'ensemble de l'interface respecte une palette stricte issue du domaine de l'ingénierie informatique, limitée au maximum à **3 familles de couleurs fondamentales** :

1. **Bleu Cyber Tech (`#2563eb` / `#60a5fa`)** : Accent principal haute visibilité (CTA, indicateurs actifs, focus, badges).
2. **Noir Ardoise & Obsidian (`#090d16` / `#0f172a` / `#1e293b`)** : Surfaces sombres haute technicité, cartes terminal et contrastes profonds.
3. **Blanc Pur & Gris Slate (`#ffffff` / `#f8fafc` / `#cbd5e1`)** : Lisibilité maximale des textes, surfaces claires et hiérarchie typographique.

---

## ⚙️ Centre de Préférences & Paramètres Utilisateur

Un panneau de préférences complet et accessible permet aux recruteurs et visiteurs de personnaliser leur expérience en direct :

- 🌐 **Bilingue intégral (Français / English)** : Changement instantané de langue de l'ensemble du portfolio (navigation, textes, projets, compétences, formulaires, règles GL).
- 🌓 **Thème d'apparence** :
  - **Sombre (Dark)** : Ambiance terminal / IDE haute technicité.
  - **Clair (Light)** : Contraste lumineux sur fond blanc pur / slate tout en respectant les 3 couleurs de base.
  - **Système (System)** : Détection et synchronisation automatique avec les préférences OS (`prefers-color-scheme`).
- ⚡ **Animations & Mouvements** : Option pour basculer entre animations fluides GPU et mode éco/réduit pour l'accessibilité (`prefers-reduced-motion`).
- 📏 **Densité d'affichage** : Mode confortable ou compact.
- 💾 **Persistance locale** : Sauvegarde automatique et défensive dans `localStorage`.

---

## 📐 Les 10 Règles de Génie Logiciel Appliquées

Le projet a été restructuré pour respecter les 10 principes fondamentaux de l'ingénierie logicielle :

1. **Séparation des Préoccupations (SoC)** : Découpage strict entre données (`data/`), logique métier (`hooks/`, `context/`), primitives UI (`common/`), sections (`sections/`) et utilitaires (`utils/`).
2. **Responsabilité Unique (SRP)** : Chaque composant remplit une fonction dédiée et circonscrite.
3. **DRY (Don't Repeat Yourself)** : Primitives mutualisées (`Button`, `Badge`, `Card`, `Modal`, `Toast`, `SectionHeader`, `SettingsModal`), tokens CSS et constantes globales.
4. **KISS (Keep It Simple, Stupid)** : Suppression des abstractions prématurées et du scroll-hijacking lourd au profit d'un défilement naturel et fluide.
5. **Programmation Défensive & Robustesse** : Validation instantanée de formulaire, replis gracieux (ex. `mailto` si API indisponible, `?.` optional chaining, `safeStorage`), nettoyage systématique des écouteurs.
6. **Accessibilité (A11y) & Sémantique HTML** : Balises HTML5 sémantiques, attributs ARIA complets, navigation clavier (fermeture `Escape` des modales), support de `prefers-reduced-motion`.
7. **Performance & Optimisation** : 0 Cumulative Layout Shift (CLS), transitions matérielles GPU (`transform`, `opacity`), lazy loading des médias et build Vite en ~1 seconde.
8. **Cohérence Graphique & Design Tokens** : Règle absolue des 3 couleurs max, échelle typographique fluide (`clamp`), espacements unifiés.
9. **Ergonomie UX (UX First)** : Copie en 1-clic de l'e-mail et du téléphone avec notification Toast flottante, barre de recherche instantanée sur les projets, prévisualisation directe des attestations PDF et images.
10. **Maintenabilité & Scalabilité** : Arborescence normalisée, conventions de nommage explicites, code modulaire prêt pour l'intégration de tests unitaires ou de nouvelles vues.

---

## 📂 Architecture des Dossiers

```
src/
├── components/
│   ├── common/                  # Primitives UI réutilisables (DRY & SRP)
│   │   ├── Badge.jsx
│   │   ├── BrandIcons.jsx
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── Marquee.jsx
│   │   ├── Modal.jsx
│   │   ├── ScrollToTop.jsx
│   │   ├── SectionHeader.jsx
│   │   ├── SettingsModal.jsx    # Boîte modale des préférences
│   │   └── Toast.jsx
│   ├── layout/                  # Composants structurels
│   │   ├── Footer.jsx
│   │   └── Navbar.jsx
│   └── sections/                # Sections fonctionnelles de la page
│       ├── About.jsx
│       ├── Certifications.jsx
│       ├── Contact.jsx
│       ├── Hero.jsx
│       ├── Interests.jsx
│       ├── Manifesto.jsx
│       ├── Parcours.jsx
│       ├── Projects.jsx
│       ├── Services.jsx
│       ├── Skills.jsx
│       └── SoftwareEngineering.jsx  # Présentation interactive des 10 règles
│   └── ui/                      # Alias rétrocompatibles
├── constants/                   # Constantes, navigation, traductions et règles d'ingénierie
│   ├── engineeringRules.js
│   ├── navigation.js
│   └── translations.js          # Dictionnaire bilingue FR/EN
├── context/                     # Gestion d'état global
│   └── PreferencesContext.jsx   # Contexte réactif des paramètres (thème, langue, motion)
├── data/                        # Sources de données brutes découplées
│   ├── certifications.js
│   ├── education.js
│   ├── experience.js
│   ├── interests.js
│   ├── profile.js
│   ├── projects.js
│   ├── services.js
│   └── skills.js
├── hooks/                       # Logique réutilisable & état
│   ├── useActiveSection.js
│   ├── useClipboard.js
│   ├── usePreferences.js
│   └── useScrollReveal.js
├── utils/                       # Fonctions pures & helpers
│   ├── cn.js
│   └── helpers.js
├── App.jsx                      # Point d'entrée de l'application
├── index.css                    # Système de variables & animations
└── main.jsx
```

---

## 🚀 Démarrage Rapide

```bash
# Installation des dépendances
npm install

# Démarrage du serveur local
npm run dev

# Compilation pour production
npm run build

# Aperçu du build de production
npm run preview
```
