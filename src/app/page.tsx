"use client";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/layout/Container";
import { FeatureItem } from "@/components/ui/FeatureItem";
import {
  Code2,
  Heart,
  PencilRuler,
  Rocket,
} from "lucide-react";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
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
          title="Léo Tranchet, développeur web spécialisé en interfaces modernes et performantes."
          subtitle="Je conçois et développe des applications web rapides, accessibles et centrées sur l’expérience utilisateur."
          imageUrl="/background.webp"
          overlayOpacity={50}
          ctaVariant="primary"
          ctaLabel="Me contacter"
          colours="dark"
          onCtaClick={() =>
            window.location.href = `${siteConfig.basePath}/contact`
          }
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
              <h2 className="text-4xl font-bold mb-4 uppercase underline decoration-primary decoration-3">
                À propos
              </h2>
              <h3 className="text-2xl font-bold mb-4">
                Je transforme des idées en interfaces web fluides, élégantes et faciles à maintenir.
              </h3>
              <p className="text-lg">
                Avec une expertise en <strong className="text-primary">développement front-end et back-end</strong>, j'accompagne les entreprises et les entrepreneurs dans la création de sites web et d'applications performantes, optimisées pour le référencement et l'expérience utilisateur.
              </p>
            </Container>
            <Container className="w-full flex justify-center" type="col">
              <Container
                className="w-full justify-end gap-8 md:my-0"
                type="row"
              >
                <Image
                  src={`${siteConfig.basePath}/mockup-2.webp`}
                  className="w-full h-full md:w-8/20 object-cover rounded-2xl shadow-lg shadow-primary/30"
                  alt="Image 1"
                  width={500}
                  height={300}
                />
                <Image
                  src={`${siteConfig.basePath}/mockup-1.webp`}
                  className="w-full h-full md:w-9/20 md:h-9/10 object-cover rounded-2xl mt-auto shadow-lg shadow-primary/30"
                  alt="Image 2"
                  width={500}
                  height={300}
                />
              </Container>
              <Container className="w-full gap-8" type="row">
                <Image
                  src={`${siteConfig.basePath}/mockup-3.webp`}
                  className="w-full h-full md:w-9/20 md:h-2/3 object-cover rounded-2xl shadow-lg shadow-primary/30"
                  alt="Image 3"
                  width={500}
                  height={300}
                />
                <Image
                  src={`${siteConfig.basePath}/mockup-4.webp`}
                  className="w-full h-full md:w-11/20 object-cover rounded-2xl shadow-lg shadow-primary/30"
                  alt="Image 4"
                  width={500}
                  height={300}
                />
              </Container>
            </Container>
          </Container>
          <h2 className="text-3xl text-center font-bold mb-8 uppercase underline decoration-primary decoration-3">Témoignages</h2>
          <Container type="grid3" className="container mx-auto">
            <TestimonialCard
              name="Jane Smith"
              role="CTO, Tech Innovations"
              content="Travailler avec Léo a été un plaisir absolu. Son expertise en développement web a permis de transformer notre vision en une réalité numérique impressionnante."
              imageUrl="/testimonial-1.webp"
              rating={4}
            />
            <TestimonialCard
              name="John Doe"
              content="Léo a dépassé nos attentes à chaque étape du projet. Son attention aux détails et son engagement envers la qualité sont inégalés."
              imageUrl="/testimonial-2.webp"
              rating={5}
            />
            <TestimonialCard
              name="Alice Johnson"
              role="CEO, Creative Agency"
              content="Grâce à Léo, notre site web est non seulement beau, mais aussi incroyablement fonctionnel et performant. Je le recommande vivement à quiconque cherche un développeur talentueux."
              imageUrl="/testimonial-3.webp"
              rating={4}
            />
          </Container>
        </Section>
        <Section className="w-full" id="portfolio-section">
          <Container className="container px-4 md:px-0" type="col">
            <h2 className="text-3xl text-center font-bold mb-4 uppercase underline decoration-primary decoration-3">
              Projets
            </h2>
            <p className="text-center text-lg mb-6">
              Découvrez quelques-unes de mes réalisations récentes.
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
          className="w-full bg-background shadow-md"
          id="features-section"
        >
          <h2 className="text-3xl text-center font-bold my-10 uppercase underline decoration-primary decoration-3">
            Mes competences
          </h2>
          <p className="text-center text-lg mb-6">
            Voici les outils et pratiques que j’utilise au quotidien pour concevoir des expériences web fiables et soignées.
          </p>
          <Container className="container p-6 gap-6" type="grid3">
            <Container className="bg-truebase p-4 !m-0 rounded-xl" type="col">
              <FeatureItem
                icon={Code2}
                title="Développement Front-End"
                description="Création d’interfaces modernes en HTML, CSS, JavaScript et React."
              />
            </Container>
            <Container className="bg-truebase p-4 !m-0 rounded-xl" type="col">
              <FeatureItem
                icon={PencilRuler}
                title="Intégration & UI/UX"
                description="Mise en place de designs responsive, design system et micro-interactions."
              />
            </Container>
            <Container className="bg-truebase p-4 !m-0 rounded-xl" type="col">
              <FeatureItem
                icon={Heart}
                title="Accessibilité (A11y)"
                description="Conception de sites accessibles, compatibles clavier et lecteurs d’écran."
              />
            </Container>
            <Container className="bg-truebase p-4 !m-0 rounded-xl" type="col">
              <FeatureItem
                icon={Rocket}
                title="Optimisation & Performance"
                description="Chargement rapide, images optimisées, structure propre et scalable."
              />
            </Container>
            <Container className="bg-truebase p-4 !m-0 rounded-xl" type="col">
              <FeatureItem
                icon={Code2}
                title="Méthodes de travail"
                description="Organisation en Kanban, conception modulaire et gestion de projet professionnelle."
              />
            </Container>
          </Container>
          <Container className="container px-4 md:px-0 mt-8" type="row">
            <CallToAction
              title="Vous avez un projet en tête ?"
              description="Contactez-moi dès aujourd’hui et je vous aiderai à le concrétiser."
              ctaVariant="primary"
              ctaLabel="Me contacter"
            />
          </Container>
        </Section>

        <Section
          className="w-full"
          id="study-path-section"
        >
          <Container className="container px-4 md:px-0" type="col">
            <h2 className="text-3xl text-center font-bold mb-4 uppercase underline decoration-primary decoration-3">
              Mon parcours
            </h2>
            <p className="text-center text-lg mb-6">
              Découvrez mon parcours académique et professionnel qui m'a conduit à devenir un développeur web passionné et compétent.
            </p>
            <ul className="grid gap-4 md:grid-cols-4">
              <li className="bg-background rounded-xl p-4 shadow-md shadow-primary/10">
                <Image
                  src={`${siteConfig.basePath}/lycee-nicolas-appert.webp`}
                  alt="Lycée Nicolas Appert"
                  className="w-full aspect-[2/1] object-cover rounded-md mb-4"
                  width={384}
                  height={192}
                />
                <strong className="text-primary">Baccalauréat Général</strong><br /><br />
                <span className="underline decoration-primary decoration-1">Lycée Nicolas Appert, 2021</span><br /><br />
                Spécialité Mathématiques et Numérique et sciences de l'Informatique
              </li>
              <li className="bg-background rounded-xl p-4 shadow-md shadow-primary/10">
                <Image
                  src={`${siteConfig.basePath}/iut-nantes.webp`}
                  alt="IUT de Nantes"
                  className="w-full aspect-[2/1] object-cover rounded-md mb-4"
                  width={384}
                  height={192}
                />
                <strong className="text-primary">BUT Informatique</strong><br /><br />
                <span className="underline decoration-primary decoration-1">IUT de Nantes, 2021-2023</span><br /><br />
                Parcours Réalisation d'applications : conception, développement, validation
              </li>
              <li className="bg-background rounded-xl p-4 shadow-md shadow-primary/10">
                <Image
                  src={`${siteConfig.basePath}/leo-tranchet.webp`}
                  alt="Léo Tranchet - Développeur Web Indépendant"
                  className="w-full aspect-[2/1] object-cover rounded-md mb-4"
                  width={384}
                  height={192}
                />
                <strong className="text-primary">Developpeur Web Indépendant</strong><br /><br />
                <span className="underline decoration-primary decoration-1">Auto-entrepreneur, 2023-présent</span><br /><br />
                Conception et développement de sites web pour des clients variés.
              </li>
              <li className="bg-background rounded-xl p-4 shadow-md shadow-primary/10">
                <Image
                  src={`${siteConfig.basePath}/openclassrooms.webp`}
                  alt="OpenClassrooms"
                  className="w-full aspect-[2/1] object-cover rounded-md mb-4"
                  width={384}
                  height={192}
                />
                <strong className="text-primary">Alternance Développeur Web</strong><br /><br />
                <span className="underline decoration-primary decoration-1">OpenClassrooms, 2025-2026</span><br /><br />
                Formation en alternance pour approfondir mes compétences en développement web.
              </li>
            </ul>
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
        <ContactSection title="Contactez-moi" subtitle="N'hésitez pas à me contacter pour toute question ou projet."/>
      </main>
    </div>
  );
}
