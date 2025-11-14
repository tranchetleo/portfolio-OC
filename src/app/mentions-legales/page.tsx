"use client";

import { Container } from "@/components/layout/Container";
import { useClientInfo } from "@/hooks/useClientInfo";
import { useEffect } from "react";
import { useTracking } from "@/components/tracking/TrackingProvider";
import { usePath } from "@/hooks/usePath";
import { useScreenSize } from "@/hooks/useScreenSize";

interface LegalSectionProps {
  title: string;
  children: React.ReactNode;
}

function LegalSection({ title, children }: LegalSectionProps) {
  return (
    <section className="mb-8">
      <h2 className="text-lg font-semibold text-primary mb-2">{title}</h2>
      <div className="text-foreground">{children}</div>
    </section>
  );
}

export default function MentionsLegalesPage() {
  const client = useClientInfo();

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
        page_title: "Mentions légales",
      }),
    );
  }, [path, screenSize, trackEvent]);

  return (
    <Container className="container px-4 md:px-0">
      <h1 className="text-3xl font-bold text-primary mb-8">Mentions légales</h1>
      <LegalSection title="Éditeur du site">
        <p>
          <strong>{client.companyName}</strong>
          <br />
          {client.companyAddress}
          <br />
          {client.companyPostalCode} {client.companyCity}
          <br />
          SIRET : {client.companySiret}
          <br />
          {client.companyEmail && (
            <>
              Email :{" "}
              <a href={`mailto:${client.companyEmail}`}>
                {client.companyEmail}
              </a>
              <br />
            </>
          )}
          {client.companyPhone && (
            <>
              Téléphone :{" "}
              <a href={`tel:${client.companyPhone}`}>{client.companyPhone}</a>
            </>
          )}
        </p>
      </LegalSection>
      <LegalSection title="Directeur de la publication">
        <p>{client.directorName || client.companyName}</p>
      </LegalSection>
      <LegalSection title="Hébergement">
        <p>
          {client.hostName || "Nom de l’hébergeur"}
          <br />
          {client.hostAddress || "Adresse de l’hébergeur"}
          <br />
          {client.hostPhone && (
            <>
              Téléphone :{" "}
              <a href={`tel:${client.hostPhone}`}>{client.hostPhone}</a>
            </>
          )}
        </p>
      </LegalSection>
      <LegalSection title="Propriété intellectuelle">
        <p>
          Le contenu du présent site est protégé par le droit d’auteur. Toute
          reproduction, même partielle, est interdite sans autorisation
          préalable.
        </p>
      </LegalSection>
      <LegalSection title="Données personnelles">
        <p>
          Les informations collectées via le site sont utilisées uniquement pour
          répondre aux demandes des utilisateurs. Conformément à la loi
          Informatique et Libertés, vous disposez d’un droit d’accès, de
          rectification et de suppression de vos données.
        </p>
      </LegalSection>
      {/* Section adaptative pour besoins spécifiques */}
      {client.customSections?.map((section) => (
        <LegalSection key={section.title} title={section.title}>
          <p>{section.content}</p>
        </LegalSection>
      ))}
    </Container>
  );
}
