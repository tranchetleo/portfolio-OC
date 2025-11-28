import { siteConfig } from "@/config/site.config";

export function Meta() {
  const org = siteConfig.company;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": org.type,
    name: org.legalName,
    description: org.description,
    url: siteConfig.url + siteConfig.basePath,
    logo: `${siteConfig.url}${siteConfig.basePath}${siteConfig.logo}`,
    telephone: org.phone,
    email: org.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: org.address.street,
      addressLocality: org.address.city,
      postalCode: org.address.postalCode,
      addressCountry: org.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: org.geo.lat,
      longitude: org.geo.lng,
    },
    sameAs: org.sameAs,
    founder: {
      "@type": "Person",
      name: org.founder.name,
      jobTitle: org.founder.jobTitle,
      image: `${siteConfig.url}${org.founder.image}`,
    },
    makesOffer: org.services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.name,
        description: service.description,
      },
      price: service.price,
      priceCurrency: service.currency,
    })),
    faq: siteConfig.mainFAQ.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
