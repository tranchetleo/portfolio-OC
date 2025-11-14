# Sani Template

**Sani Template** est un **starter kit Next.js + Tailwind CSS** en TypeScript créé par Léo Tranchet le 19 juillet 2025, conçu pour optimiser le workflow de développeur web freelance. Il fournit une base statique performante, responsive, proprement architecturée, et incluant des composants UI et SEO réutilisables.

---

## ✨ Fonctionnalités

- ⚙️ **Next.js** avec App Router (`app/` directory)
- 🎨 **Tailwind CSS** intégré
- 🧠 **TypeScript** pour une meilleure maintenabilité
- 🌐 **Exportation statique** (compatible GitHub Pages, Netlify, Vercel, etc.)
- 📦 **Composants réutilisables** : navbar, footer, bouton, méta SEO, etc.
- 📱 **Responsive** by design
- 🧩 Architecture modulaire et évolutive
- 📁 Prêt pour le versionnage Git

---

## 🚀 Démarrage

### Prérequis

- Node.js ≥ 18
- npm ou pnpm

### Installation

```bash
git clone https://github.com/votre-utilisateur/sani-template.git
cd sani-template
npm install
```

### Lancement en dev
```bash
npm run dev
```

### Build et export statique
```bash
npm run build
```
Le site exporté sera disponible dans le dossier out/.

### Procédure de création de nouveau projet :
Cloner le projet et adapter le fichier site.config.ts en renseignant le nom du site, sa potentielle url, les informations de contact du client et les différentes pages du site (accompagnées des leurs méta)

Avant le déploiment verrifier si le site doit être sur un sous domaine et ajuster le basepath de next.config.ts et de site.config.ts ex: https://sani-web.com/test/ -> basePath: '/test' sinon laisser vide

