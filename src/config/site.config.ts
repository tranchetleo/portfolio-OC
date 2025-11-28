export const siteConfig = {
  name: 'Léo Tranchet',

  locale: 'fr-FR',
  url: 'https://leo-tranchet.dev',
  logo: '/logo.webp',
  basePath: '/test', // set to '' if you are not deploying to a subpath

  email: 'leo.tranchet.pro@gmail.com',
  phone: '+33 6 65 44 45 79',
  address: '3 Square Saint-Pasquier, 44000 Nantes, France',

  footerText: 'Léo Tranchet - Développeur Web Indépendant. Je crée des sites vitrines et e-commerce sur mesure. Chaque site web est optimisé pour le référencement et l\'expérience utilisateur. Contactez-moi pour discuter de votre projet !',



  navLinks: [
    { label: 'Accueil',
      href: '/',
      metaTitle: 'Léo Tranchet - Développeur Web Indépendant',
      metaDescription: 'Découvrez Léo Tranchet, développeur web indépendant basé à Nantes 44000, spécialisé dans la création de sites vitrines et e-commerce.',
      sections: [ // Links to sections on the homepage for single-page navigation
        { href: '/#welcome-section', label: 'Bienvenue' },
        { href: '/#features-section', label: 'Fonctionnalités' },
        { href: '/#contact-section', label: 'Contact' },
      ]
    },
    { label: 'Projets',
      href: '/projets',
      metaTitle: 'Léo Tranchet - Projets de Développement Web',
      metaDescription: 'Explorez les projets de Léo Tranchet, développeur web indépendant à Nantes 44000, mettant en avant ses compétences en création de sites vitrines et e-commerce.'
    },
    { label: 'Contact',
      href: '/contact',
      metaTitle: 'Contactez-nous',
      metaDescription: 'Entrer en contact avec l\'équipe de SaniTemplate.'
    },
  ],

  company: {
    legalName: "Léo Tranchet",
    description: "Léo Tranchet est un développeur web indépendant spécialisé dans la création de sites vitrine et e-commerce.",
    type: "Person", // ou "Organization" ou "Person"
    businessType: "WebDesign", // pour LocalBusiness
    address: {
      street: "3 Square Saint-Pasquier",
      postalCode: "44000",
      city: "Nantes",
      country: "FR",
    },
    geo: {
      lat: 47.1339,
      lng: -1.3402,
    },
    phone: "+33 6 65 44 45 79",
    email: "leo.tranchet.pro@gmail.com",
    founder: {
      name: "Léo Tranchet",
      jobTitle: "Développeur Web Indépendant",
      image: "/leo.jpg",
    },
    sameAs: [
      "https://www.linkedin.com/in/leotranchet",
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
  },

  mainFAQ: [
    {
      question: "Quels types de sites web développez-vous ?",
      answer:
        "Je développe principalement des sites vitrines et des sites e-commerce adaptés aux besoins de mes clients. Chaque site est conçu pour être responsive et optimisé pour le référencement. Je porte une attention particulière à l'expérience utilisateur et à la performance.",
    },
    {
      question: "Quels sont vos tarifs pour la création d'un site web ?",
      answer:
        "Mes tarifs varient en fonction de la complexité et des fonctionnalités requises pour le site. En général, un site vitrine commence à partir de 499€, tandis qu'un site e-commerce débute à 999€. Je propose également des forfaits personnalisés en fonction des besoins spécifiques de chaque projet.",
    },
    {
      question: "Combien de temps faut-il pour créer un site web ?",
      answer:
        "Le délai de création d'un site web dépend de la complexité du projet. En moyenne, un site vitrine peut être réalisé en 2 à 4 semaines, tandis qu'un site e-commerce peut prendre entre 4 à 8 semaines. Je m'efforce toujours de respecter les délais convenus avec mes clients.",
    },
    {
      question: "Offrez-vous des services de maintenance après la création du site ?",
      answer:
        "Oui, je propose des services de maintenance pour assurer que votre site reste à jour, sécurisé et performant. Cela inclut les mises à jour de contenu, les sauvegardes régulières, et la surveillance de la sécurité. Des forfaits de maintenance mensuels ou annuels sont disponibles selon vos besoins.",
    },
    {
      question: "Aidez-vous avec le référencement (SEO) de mon site web ?",
      answer:
        "Absolument ! J'intègre les meilleures pratiques SEO lors de la création de votre site web pour améliorer sa visibilité sur les moteurs de recherche. Cela inclut l'optimisation des balises méta, la structure du site, la vitesse de chargement, et plus encore. Je peux également vous conseiller sur des stratégies SEO à long terme.",
    }
  ],

  socialLinks: { // après modification, update les SameAs dans company
    website: "https://sani-web.com",
    instagram: "https://instagram.com/abso.yt",
    linkedin: "https://linkedin.com/in/léo-tranchet",
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
