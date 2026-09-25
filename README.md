# Portfolio — Julio Edwin RAZAFIMANAMPY

Portfolio professionnel de développeur Full Stack, construit avec **React**, **Vite** et **Tailwind CSS**.

## Démarrage

```bash
npm install
npm run dev      # Serveur de développement
npm run build    # Build de production
npm run preview  # Aperçu du build
```

## Personnalisation

Toutes les données personnelles sont centralisées dans `src/data/` :

| Fichier | Contenu |
|---|---|
| `profile.js` | Nom, titre, présentation, coordonnées, réseaux sociaux, CV |
| `skills.js` | Compétences par catégorie |
| `projects.js` | Projets et leurs détails (modal) |
| `experience.js` | Timeline d'expériences |
| `education.js` | Timeline de formation |
| `services.js` | Services proposés |
| `process.js` | Étapes de la méthode de travail |

### Images et documents

- **Photo de profil** : `public/images/profile.jpg`
- **Aperçus de projets** : `public/images/projects/*.png`
- **CV** : `public/pdf/cv.pdf`

Pensez à ajouter une photo dans `public/images/profile.jpg` pour remplacer le placeholder du Hero.