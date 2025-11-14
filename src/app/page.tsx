"use client";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { FeatureItem } from "@/components/ui/FeatureItem";
import {
  Code2,
  Heart,
  Lamp,
  MonitorCheck,
  PencilRuler,
  PiggyBank,
  Rocket,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  User,
} from "lucide-react";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { PricingCard } from "@/components/ui/PricingCard";
import { CallToAction } from "@/components/ui/CallToAction";
import { HeroWithBackground } from "@/components/ui/HeroWithBackground";
import { ContactSection } from "@/components/ui/ContactSection";
import { FAQ } from "@/components/ui/FAQ";
import { siteConfig } from "@/config/site.config";
import { useEffect } from "react";
import { useTracking } from "@/components/tracking/TrackingProvider";
import { usePath } from "@/hooks/usePath";
import { useScreenSize } from "@/hooks/useScreenSize";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const faqs = siteConfig.mainFAQ.map((faq) => ({
    question: faq.question,
    answer: faq.answer,
  }));

  const { trackEvent } = useTracking();
  const path = usePath();
  const screenSize = useScreenSize();

  useEffect(() => {
    // Tracker la visite de la page d'accueil
    trackEvent(
      "page_view",
      path,
      screenSize,
      JSON.stringify({
        page_title: siteConfig.navLinks[0].label,
      }),
    );
  }, [path, screenSize, trackEvent]);

  return (
    <div>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <HeroWithBackground
          sectionId="hero-section"
          title="Votre site web professionnel, sans compromis"
          subtitle="Des solutions web sur mesure pour TPE, PME, artisans et indépendants à Nantes. Alliant design responsive, optimisation SEO et performance pour une présence en ligne efficace et professionnelle."
          imageUrl="/background.webp"
          overlayOpacity={30}
          ctaVariant="primary"
          ctaLabel="Demandez un devis gratuit"
          onCtaClick={() =>
            trackEvent("cta_click", path, screenSize, "hero_cta_click", {
              action: "demander_devis",
              label: "Demandez un devis gratuit",
            })}
        />
        <Section
          className="w-full px-4"
          id="welcome-section"
        >
          <Container
            className="container gap-10"
            type="grid2"
          >
            <Container className="w-full md:w-3/4 justify-center" type="col">
              <h2 className="text-3xl font-bold mb-4">
                Création de Sites Web Professionnels
              </h2>
              <p className="text-lg">
                Découvrez comment nous pouvons transformer votre présence en
                ligne avec des solutions sur mesure.
              </p>
              <Container className="gap-6" type="col">
                <FeatureItem
                  icon={PencilRuler}
                  title="Développement sur mesure"
                  description="Chaque projet est adapté à vos besoins spécifiques pour garantir un résultat unique."
                />
                <FeatureItem
                  icon={PiggyBank}
                  title="Prix abordable"
                  description="Des solutions accessibles pour tous les budgets, sans compromis sur la qualité."
                />
                <FeatureItem
                  icon={Rocket}
                  title="Optimisation avancée"
                  description="Votre site bénéficie des dernières techniques pour maximiser sa performance et son référencement."
                />
              </Container>
            </Container>
            <Container className="w-full flex justify-center" type="col">
              <Container
                className="w-full justify-end gap-8 md:my-0"
                type="row"
              >
                <Image
                  src={`${siteConfig.basePath}/mockup-2.webp`}
                  className="w-full h-full md:w-8/20 object-cover rounded-2xl"
                  alt="Image 1"
                  width={500}
                  height={300}
                />
                <Image
                  src={`${siteConfig.basePath}/mockup-1.webp`}
                  className="w-full h-full md:w-9/20 md:h-9/10 object-cover rounded-2xl mt-auto"
                  alt="Image 2"
                  width={500}
                  height={300}
                />
              </Container>
              <Container className="w-full gap-8" type="row">
                <Image
                  src={`${siteConfig.basePath}/mockup-3.webp`}
                  className="w-full h-full md:w-9/20 md:h-2/3 object-cover rounded-2xl"
                  alt="Image 3"
                  width={500}
                  height={300}
                />
                <Image
                  src={`${siteConfig.basePath}/mockup-4.webp`}
                  className="w-full h-full md:w-11/20 object-cover rounded-2xl"
                  alt="Image 4"
                  width={500}
                  height={300}
                />
              </Container>
            </Container>
          </Container>
          <h2 className="text-3xl text-center font-bold mb-8">Témoignages</h2>
          <Container type="grid3" className="container mx-auto">
            <TestimonialCard
              name="Jane Smith"
              role="CTO, Tech Innovations"
              content="Sani Template a transformé notre façon de travailler. Leur équipe est réactive et les résultats sont au-delà de nos attentes."
              imageUrl="/testimonial-1.webp"
            />
            <TestimonialCard
              name="John Doe"
              content="C'est un produit fantastique ! Je le recommande vivement. Il a transformé notre flux de travail."
              imageUrl="/testimonial-2.webp"
            />
            <TestimonialCard
              name="Alice Johnson"
              role="CEO, Creative Agency"
              content="Une expérience incroyable ! Le design est superbe et la performance est au rendez-vous."
              imageUrl="/testimonial-3.webp"
            />
          </Container>
        </Section>
        <Section
          className="w-full bg-background shadow-md"
          id="services-section"
        >
          <h2 className="text-3xl text-center font-bold my-8">
            Nos Services
          </h2>
          <Container type="grid3" className="container mx-auto">
            <div className="flex flex-col p-6">
              <div className="flex flex-col items-center mb-6">
                <MonitorCheck className="w-1/3 h-auto text-primary" />
                <h3 className="text-2xl font-semibold">
                  Création de site vitrine
                </h3>
              </div>
              <p className="text-lg text-center mb-6">
                <strong className="text-primary">
                  Faites bonne impression dès le premier clic.
                </strong>{" "}
                Nous créons des sites vitrine sur mesure et parfaitement adaptés
                à vos besoins. Design responsive, optimisation SEO avancée, tout
                y est !
              </p>
              <Button variant="primary" className="mt-auto !rounded-xl">
                En savoir plus
              </Button>
            </div>
            <div className="flex flex-col p-6">
              <div className="flex flex-col items-center mb-6">
                <Sparkles className="w-1/3 h-auto text-primary" />
                <h3 className="text-2xl font-semibold">Référencement SEO</h3>
              </div>
              <p className="text-lg text-center mb-6">
                <strong className="text-primary">
                  Dominez les résultats de recherche.
                </strong>{" "}
                Notre expertise en SEO vous permet d'atteindre les premières
                positions sur Google. Nous optimisons votre site pour un
                référencement naturel performant et durable.
              </p>
              <Button variant="primary" className="mt-auto !rounded-xl">
                En savoir plus
              </Button>
            </div>
            <div className="flex flex-col p-6">
              <div className="flex flex-col items-center mb-6">
                <ShoppingCart className="w-1/3 h-auto text-primary" />
                <h3 className="text-2xl font-semibold">E-commerce</h3>
              </div>
              <p className="text-lg text-center mb-6">
                <strong className="text-primary">
                  Transformez vos visiteurs en clients fidèles.
                </strong>{" "}
                Nous développons des boutiques en ligne performantes et
                sécurisées, optimisées pour la conversion et l'expérience
                utilisateur.
              </p>
              <Button variant="primary" className="mt-auto rounded-xl">
                En savoir plus
              </Button>
            </div>
          </Container>
          <Container className="container px-4 md:px-0 mt-8" type="row">
            <CallToAction
              title="Prêt à lancer votre site ?"
              description="Contactez-moi dès aujourd’hui et obtenez un devis personnalisé."
              ctaVariant="primary"
              ctaLabel="Demander un devis"
            />
          </Container>
        </Section>
        <Section className="w-full" id="portfolio-section">
          <Container className="container px-4 md:px-0" type="col">
            <h2 className="text-2xl text-center font-bold mb-4">
              Réalisations
            </h2>
            <p className="text-center text-lg mb-6">
              Découvrez quelques-uns de nos projets récents.
            </p>
            <Container type="grid3">
              <Card
                title="Home'plans"
                description="Un site vitrine moderne et épuré."
                imageUrl="/projet1.webp"
                link="/portfolio"
              />
              <Card
                title="Black N White"
                description="Une boutique en ligne performante."
                imageUrl="/projet2.webp"
                link="/portfolio"
              />
              <Card
                title="Saint Michel"
                description="Un site vitrine élégant et fonctionnel."
                imageUrl="/projet3.webp"
                link="/portfolio"
              />
              <Card
                title="Glassy skin care"
                description="Une boutique en ligne performante."
                imageUrl="/projet4.webp"
                link="/portfolio"
              />
              <Card
                title="MakeWebP"
                description="Un outil de conversion d'images en WebP."
                imageUrl="/projet5.webp"
                link="/portfolio"
              />
            </Container>
            <p className="text-center text-lg mt-6">
              ...et bien d'autres&nbsp;
              <Link
                href="/portfolio"
                className="text-primary underline hover:text-foreground transition-colors"
              >
                découvrez tout le portfolio
              </Link>
            </p>
          </Container>
        </Section>
        <Section
          className="w-full"
          id="welcome-section"
        >
          <h2 className="text-2xl text-center font-bold mb-4">
            Welcome to Our Site
          </h2>
          <p className="text-center text-lg">
            This is a simple example of a section with a title and some content.
          </p>
          <Button
            variant="primary"
            className="flex mx-auto my-5"
          >
            Bouton avec une redirection
          </Button>
          <Container
            className="container px-4 md:px-0 py-6 gap-10"
            type="grid3"
          >
            <FeatureItem
              icon={Code2}
              title="Développement rapide"
              description="Démarrez chaque projet avec une base solide et réutilisable."
            />
            <FeatureItem
              icon={ShieldCheck}
              title="Sécurité intégrée"
              description="Protégez vos applications avec des fonctionnalités de sécurité robustes."
            />
            <FeatureItem
              icon={Rocket}
              title="Déploiement facile"
              description="Mettez vos applications en production en un clin d'œil."
            />
            <FeatureItem
              icon={Lamp}
              title="Documentation complète"
              description="Accédez à une documentation détaillée pour chaque composant."
            />
            <FeatureItem
              icon={Heart}
              title="Support communautaire"
              description="Rejoignez une communauté active pour partager vos expériences et obtenir de l'aide."
            />
            <FeatureItem
              icon={User}
              title="Personnalisation facile"
              description="Adaptez chaque composant à vos besoins spécifiques."
            />
          </Container>
        </Section>
        <Section
          className="w-full"
          id="features-section"
        >
          <h2 className="text-2xl text-center font-bold mb-4">
            Welcome to Our Site
          </h2>
          <p className="text-center text-lg">
            This is a simple example of a section with a title and some content.
          </p>
          <Container
            className="container w9/10 md:w-7/10 px-4 md:px-0 gap-8"
            type="row"
          >
            <PricingCard
              title="Standard"
              price="29€ / mois"
              features={[
                "Site 5 pages",
                "Design sur mesure",
                "Optimisation SEO",
                "Hébergement inclus",
                "Support standard",
              ]}
              ctaLabel="Choisir cette offre"
            />
            <PricingCard
              title="Premium"
              price="49€ / mois"
              features={[
                "Site 10 pages",
                "Design sur mesure",
                "Optimisation SEO avancée",
                "Hébergement inclus",
                "Support prioritaire",
              ]}
              ctaLabel="Choisir cette offre"
            />
            <PricingCard
              title="Entreprise"
              price="99€ / mois"
              features={[
                "Site illimité",
                "Design sur mesure",
                "Optimisation SEO avancée",
                "Hébergement inclus",
                "Support prioritaire",
              ]}
              ctaLabel="Choisir cette offre"
              highlight
            />
          </Container>
          <Container className="container px-4 md:px-0" type="grid3">
            <Card
              title="Card Title"
              description="This is a description for the card."
              imageUrl="/next.svg"
              cta={{
                label: "Learn More",
                onClick: () => alert("Card clicked!"),
                variant: "primary",
                classname: "mt-4",
              }}
            />
            <Card
              title="Card Title"
              description="This is a description for the card. It can be longer to show how it wraps."
              imageUrl="/next.svg"
              cta={{
                label: "Learn More",
                onClick: () => alert("Card clicked!"),
                variant: "secondary",
                classname: "mt-4",
              }}
            />
            <Card
              title="Card Title"
              description="This is a description for the card."
              imageUrl="/next.svg"
              cta={{
                label: "Learn More",
                onClick: () => alert("Card clicked!"),
                variant: "secondary",
                classname: "mt-4",
              }}
            />
          </Container>
        </Section>
        <Section
          className="w-full"
          id="contact-section"
        >
          <Container className="container px-4 md:px-0" type="row">
            <CallToAction
              title="Prêt à lancer votre site ?"
              description="Contactez-moi dès aujourd’hui et obtenez un devis personnalisé."
              ctaVariant="primary"
              ctaLabel="Demander un devis"
            />
          </Container>
        </Section>
        <Section
          className="w-full"
          id="faq-section"
        >
          <Container className="container px-4 md:px-0 md:!w-1/2" type="col">
            <FAQ faqs={faqs} />
          </Container>
        </Section>
        <ContactSection />
      </main>
    </div>
  );
}
