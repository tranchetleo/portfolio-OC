export const siteConfig = {
  name: 'SaniTemplate',

  locale: 'fr-FR',
  url: 'https://sani-template.dev',
  logo: '/logo.webp',
  basePath: '/test', // set to '' if you are not deploying to a subpath

  email: 'contact@saniweb.com',
  phone: '+33 6 12 34 56 78',
  address: '123 Rue de l\'Exemple, Paris, France',

  footerText: 'Exemple de pied de page pour un site web moderne, utilisant Next.js et Tailwind CSS.',



  navLinks: [
    { label: 'Accueil',
      href: '/',
      metaTitle: 'Page d\'accueil',
      metaDescription: 'Bienvenue sur la page d\'accueil de SaniTemplate',
      sections: [ // Links to sections on the homepage for single-page navigation
        { href: '/#welcome-section', label: 'Bienvenue' },
        { href: '/#features-section', label: 'Fonctionnalités' },
        { href: '/#contact-section', label: 'Contact' },
      ]
    },
    { label: 'À propos',
      href: '/about',
      metaTitle: 'À propos de SaniTemplate',
      metaDescription: 'Découvrez SaniTemplate, un template Next.js + Tailwind pour développeurs freelance.'
    },
    { label: 'Contact',
      href: '/contact',
      metaTitle: 'Contactez-nous',
      metaDescription: 'Entrer en contact avec l\'équipe de SaniTemplate.'
    },
  ],

  company: {
    legalName: "Sani Web",
    description: "Sani Web est un développeur web indépendant spécialisé dans la création de sites vitrine et e-commerce.",
    type: "LocalBusiness", // ou "Organization" ou "Person"
    businessType: "WebDesign", // pour LocalBusiness
    address: {
      street: "123 Rue du Code",
      postalCode: "75000",
      city: "Paris",
      country: "FR",
    },
    geo: {
      lat: 48.8566,
      lng: 2.3522,
    },
    phone: "+33 6 12 34 56 78",
    email: "contact@saniweb.fr",
    founder: {
      name: "Léo Tranchet",
      jobTitle: "Développeur Web Indépendant",
      image: "/leo.jpg",
    },
    sameAs: [
      "https://www.linkedin.com/in/leotranchet",
      "https://twitter.com/saniweb",
    ],
    services: [
      {
        name: "Création de site vitrine",
        description: "Site professionnel responsive optimisé SEO.",
        price: "499.00",
        currency: "EUR",
      },
      {
        name: "Site e-commerce",
        description: "Boutique en ligne complète et performante.",
        price: "999.00",
        currency: "EUR",
      },
    ],
    rating: {
      average: 4.8,
      count: 57,
    },
  },

  mainFAQ: [
    {
      question: "Qu'est-ce que SaniTemplate ?",
      answer:
        "SaniTemplate est un modèle de site web moderne, conçu pour aider les développeurs à créer des sites vitrines et e-commerce rapidement et facilement.",
    },
    {
      question: "Comment puis-je utiliser SaniTemplate ?",
      answer:
        "Pour utiliser SaniTemplate, il vous suffit de l'installer via npm ou yarn, puis de l'intégrer dans votre projet Next.js. Consultez la documentation pour des instructions détaillées.",
    },
    {
      question: "Quels sont les avantages de SaniTemplate ?",
      answer:
        "SaniTemplate offre de nombreux avantages, notamment une base de code optimisée, des composants réutilisables et une documentation complète. Il permet également un développement rapide et une personnalisation facile."
    },
  ],

  socialLinks: { // après modification, update les SameAs dans company
    website: "https://sani-template.dev",
    twitter: "https://twitter.com/saniweb",
    instagram: "https://instagram.com/toncompte",
    facebook: "https://facebook.com/toncompte",
    linkedin: "https://linkedin.com/in/léo-tranchet",
    tiktok: "https://www.tiktok.com/@tonprofil",
    uberEats: "https://www.ubereats.com/store/tonrestaurant",
    deliveroo: "https://deliveroo.fr/fr/restaurant/tonrestaurant",
  },

  legalInfos: {
    companyName: "Sani Web",
    companySiret: "981 310 634 00028",
    companyLegalForm: "EI",
    companyAddress: "3 Square Saint-Pasquier",
    companyPostalCode: "44000",
    companyCity: "Nantes",
    companyCountry: "France",
    companyEmail: "contact@sani-web.com",
    companyPhone: "+33 6 65 44 45 79",
    directorName: "Léo Tranchet",
    hostName: "OVH SAS",
    hostAddress: "2 rue Kellermann, 59100 Roubaix, France",
    hostPhone: "1007",
    customSections: [
      {
        title: "Conditions particulières",
        content: "Aucune condition particulière n'est applicable pour le moment.",
      },
    ],
  },
}
