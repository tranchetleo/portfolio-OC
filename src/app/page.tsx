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
            window.location.href = `#contact-section`
          }
        />
        <Section
          className="w-full px-4"
          id="about-section"
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
        <Section className="w-full" id="projects-section">
          <Container className="container px-4 md:px-0" type="col">
            <h2 className="text-3xl text-center font-bold mb-4 uppercase underline decoration-primary decoration-3">
              Projets
            </h2>
            <p className="text-center text-lg mb-6">
              Découvrez quelques-unes de mes réalisations récentes.
            </p>
            <Container className="container mx-auto gap-2 md:gap-6 bg-background p-6 rounded-2xl shadow-md shadow-primary/10" type="row">
              <Image
                src={`${siteConfig.basePath}/projet1.webp`}
                alt="Mockup du projet Home'plans"
                width={600}
                height={400}
                className="w-full aspect-[4/3] object-cover rounded-xl"
              />
              <Container className="w-full md:w-9/10 flex flex-col justify-center gap-2 md:gap-6" type="col">
                <h3 className="text-2xl font-bold text-primary uppercase">
                  Home'plans - Site Vitrine Moderne
                </h3>
                <p>
                  Home'plans souhaitait un <strong className="text-primary">site vitrine moderne</strong> pour présenter ses services de conception de plans de maison. L'objectif était de créer une <strong className="text-primary">interface épurée, facile à naviguer et optimisée pour le référencement.</strong>
                </p>
                <h4 className="uppercase text-lg underline decoration-primary decoration-2">Stack et compétences utilisées :</h4>
                <p>Pour ce projet simple, j'ai utilisé les technologies <strong className="text-primary">HTML5, CSS3, JavaScript, PHP</strong> et mis en place de nombreuses <strong className="text-primary">bonnes pratiques SEO</strong>.</p>
                <h4 className="uppercase text-lg underline decoration-primary decoration-2">Résultats et perspectives d'amélioration :</h4>
                <p>
                  Le site a permis à Home'plans d'augmenter sa visibilité en ligne et d'attirer de nouveaux clients. À l'avenir, des fonctionnalités supplémentaires telles qu'un blog et une section de témoignages clients pourraient être intégrées pour enrichir le contenu.
                </p>
              </Container>
            </Container>
            <Container className="container mx-auto gap-2 md:gap-6 bg-background p-6 rounded-2xl shadow-md shadow-primary/10 md:flex-row-reverse" type="row">
              <Image
                src={`${siteConfig.basePath}/projet4.webp`}
                alt="Mockup du projet Glassy Skin Care"
                width={600}
                height={400}
                className="w-full aspect-[4/3] object-cover rounded-xl"
              />
              <Container className="w-full md:w-9/10 flex flex-col justify-center gap-2 md:gap-6" type="col">
                <h3 className="text-2xl font-bold text-primary uppercase">
                  Glassy Skin Care - Site vitrine
                </h3>
                <p>
                  Glassy Skin Care avait besoin d'un <strong className="text-primary">site vitrine élégant</strong> pour présenter ses produits de soins de la peau. Le défi était de créer une <strong className="text-primary">expérience utilisateur immersive</strong> tout en mettant en avant l'aspect naturel et haut de gamme de la marque.
                </p>
                <h4 className="uppercase text-lg underline decoration-primary decoration-2">Stack et compétences utilisées :</h4>
                <p>Pour ce projet, j'ai utilisé <strong className="text-primary">React, Next.js, Tailwind CSS</strong> et intégré des animations subtiles avec <strong className="text-primary">Framer Motion</strong>.</p>
                <h4 className="uppercase text-lg underline decoration-primary decoration-2">Résultats et perspectives d'amélioration :</h4>
                <p>
                  Le site a reçu des retours positifs pour son design soigné et son expérience utilisateur fluide. Des fonctionnalités supplémentaires telles qu'une boutique en ligne pourraient être envisagées pour étendre la présence de la marque.
                </p>
              </Container>
            </Container>
            <Container className="container mx-auto gap-2 md:gap-6 bg-background p-6 rounded-2xl shadow-md shadow-primary/10" type="row">
              <Image
                src={`${siteConfig.basePath}/projet5.webp`}
                alt="Mockup du projet MakeWebP"
                width={600}
                height={400}
                className="w-full aspect-[4/3] object-cover rounded-xl"
              />
              <Container className="w-full md:w-9/10 flex flex-col justify-center gap-2 md:gap-6" type="col">
                <h3 className="text-2xl font-bold text-primary uppercase">
                  MakeWebP - Outil de conversion d'images
                </h3>
                <p>
                  MakeWebP est un outil en ligne permettant de convertir des images en format WebP. Le défi était de créer une <strong className="text-primary">interface utilisateur simple et efficace</strong> tout en assurant des performances de conversion rapides.
                </p>
                <h4 className="uppercase text-lg underline decoration-primary decoration-2">Stack et compétences utilisées :</h4>
                <p>Pour ce projet, j'ai utilisé <strong className="text-primary">React, Next.js, Node.js, Express</strong> et intégré des bibliothèques de traitement d'images comme <strong className="text-primary">Sharp</strong>.</p>
                <h4 className="uppercase text-lg underline decoration-primary decoration-2">Résultats et perspectives d'amélioration :</h4>
                <p>
                  L'outil a été bien accueilli par les utilisateurs grâce à sa simplicité d'utilisation et ses performances. À l'avenir, d'autres convertisseurs de formats d'images pourraient être ajoutés pour élargir les fonctionnalités.
                </p>
              </Container>
            </Container>
            <Container className="container mx-auto gap-2 md:gap-6 bg-background p-6 rounded-2xl shadow-md shadow-primary/10 md:flex-row-reverse" type="row">
              <Image
                src={`${siteConfig.basePath}/projet3.webp`}
                alt="Mockup du projet Kasa"
                width={600}
                height={400}
                className="w-full aspect-[4/3] object-cover rounded-xl"
              />
              <Container className="w-full md:w-9/10 flex flex-col justify-center gap-2 md:gap-6" type="col">
                <h3 className="text-2xl font-bold text-primary uppercase">
                  Kasa - Application de location
                </h3>
                <p>
                  Kasa est une application de location immobilière qui permet aux utilisateurs de rechercher et de réserver des logements. Le défi était de créer une <strong className="text-primary">interface utilisateur intuitive</strong> tout en gérant efficacement les données des logements.
                </p>
                <h4 className="uppercase text-lg underline decoration-primary decoration-2">Stack et compétences utilisées :</h4>
                <p>Pour ce projet, j'ai utilisé <strong className="text-primary">React, React Router, Sass</strong> et mis en place une gestion d'état avec le contexte React.</p>
                <h4 className="uppercase text-lg underline decoration-primary decoration-2">Résultats et perspectives d'amélioration :</h4>
                <p>
                  L'application a permis aux utilisateurs de trouver facilement des logements adaptés à leurs besoins. Des fonctionnalités supplémentaires telles qu'un système de paiement intégré pourraient être envisagées...
                </p>
              </Container>
            </Container>
            <Container className="container mx-auto gap-2 md:gap-6 bg-background p-6 rounded-2xl shadow-md shadow-primary/10" type="row">
              <Image
                src={`${siteConfig.basePath}/projet2.webp`}
                alt="Mockup du projet Mon Vieux Grimoire."
                width={600}
                height={400}
                className="w-full aspect-[4/3] object-cover rounded-xl"
              />
              <Container className="w-full md:w-9/10 flex flex-col justify-center gap-2 md:gap-6" type="col">
                <h3 className="text-2xl font-bold text-primary uppercase">
                  Mon Vieux Grimoire. - Boutique en ligne
                </h3>
                <p>
                  Mon Vieux Grimoire. est un site de référencement et de notation de livres. Le défi était de créer une <strong className="text-primary">interface utilisateur conviviale</strong> tout en intégrant un système de notation et de commentaires pour les utilisateurs.
                </p>
                <h4 className="uppercase text-lg underline decoration-primary decoration-2">Stack et compétences utilisées :</h4>
                <p>Pour ce projet, j'ai utilisé <strong className="text-primary">Express, MongoDB, React</strong> et mis en place une API RESTful pour gérer les données des livres et des utilisateurs.</p>
                <h4 className="uppercase text-lg underline decoration-primary decoration-2">Résultats et perspectives d'amélioration :</h4>
                <p>
                  Le site a permis aux utilisateurs de découvrir et d'évaluer des livres facilement. Des fonctionnalités supplémentaires telles qu'un système de recommandations personnalisées pourraient être envisagées pour améliorer l'expérience utilisateur.
                </p>
              </Container>
            </Container>
          </Container>
        </Section>
        <Section
          className="w-full bg-background shadow-md"
          id="skills-section"
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
              onClick={() =>
                window.location.href = `#contact-section`
              }
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
        <ContactSection sectionId="contact-section" title="Contactez-moi" subtitle="N'hésitez pas à me contacter pour toute question ou projet." />
      </main>
    </div>
  );
}
