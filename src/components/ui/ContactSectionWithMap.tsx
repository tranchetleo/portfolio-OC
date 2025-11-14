"use client";

import { siteConfig } from "@/config/site.config";
import { Section } from "@/components/ui/Section";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { Mail, MapPin, Phone, Users } from "lucide-react";
import { useTracking } from "@/components/tracking/TrackingProvider";
import { usePath } from "@/hooks/usePath";
import { useScreenSize } from "@/hooks/useScreenSize";
import { Container } from "../layout/Container";

interface ContactSectionWithMapProps {
  sectionId?: string;
  title?: string;
  subtitle?: string;
}

export function ContactSectionWithMap({
  sectionId = "contact",
  title = "Contactez-nous",
  subtitle = "",
}: ContactSectionWithMapProps) {
  const { trackEvent } = useTracking();
  const path = usePath();
  const screenSize = useScreenSize();

  return (
    <Section
      id={sectionId}
      className="w-full bg-background text-foreground py-16"
    >
      <Container className="container" type="row">
        {/* Google Maps Integration */}
        <div className="md:w-2/3 flex justify-center">
          <iframe
            title="Google Map"
            src={`https://www.google.com/maps?q=${
              encodeURIComponent(
                siteConfig.address,
              )
            }&output=embed`}
            className="border border-truebase shadow-lg w-full h-full"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="md:w-1/3 mx-auto px-4">
          <h2 className="text-3xl font-bold text-center md:text-left">
            {title}
          </h2>
          <p className="text-lg text-center md:text-left">{subtitle}</p>

          <Container type="col">
            <div>
              <h3 className="text-xl font-semibold flex items-center justify-center md:justify-start gap-2 mb-2">
                <Mail className="w-5 h-5" />
                Email
              </h3>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-primary hover:underline flex justify-center md:justify-start"
                onClick={() =>
                  trackEvent("cta_click", path, screenSize, "email_click", {
                    action: "contact_email",
                    label: siteConfig.email,
                  })}
                target="_blank"
                rel="noopener noreferrer"
              >
                {siteConfig.email}
              </a>
            </div>

            <div>
              <h3 className="text-xl font-semibold flex items-center justify-center md:justify-start gap-2 mb-2">
                <Phone className="w-5 h-5" />
                Téléphone
              </h3>
              <a
                href={`tel:${siteConfig.phone}`}
                className="text-primary hover:underline flex justify-center md:justify-start"
                onClick={() =>
                  trackEvent("cta_click", path, screenSize, "phone_click", {
                    action: "contact_phone",
                    label: siteConfig.phone,
                  })}
                target="_blank"
                rel="noopener noreferrer"
              >
                {siteConfig.phone}
              </a>
            </div>

            <div>
              <h3 className="text-xl font-semibold flex items-center justify-center md:justify-start gap-2 mb-2">
                <MapPin className="w-5 h-5" />
                Adresse
              </h3>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${
                  encodeURIComponent(siteConfig.address)
                }`}
                className="text-primary hover:underline flex justify-center md:justify-start"
                onClick={() =>
                  trackEvent("cta_click", path, screenSize, "address_click", {
                    action: "contact_address",
                    label: siteConfig.address,
                  })}
                target="_blank"
                rel="noopener noreferrer"
              >
                {siteConfig.address}
              </a>
            </div>
          </Container>

          {siteConfig.socialLinks &&
            Object.keys(siteConfig.socialLinks).length > 0 && (
            <div className="mt-12">
              <h3 className="text-xl font-semibold flex gap-2 mb-4 justify-center md:justify-start">
                <Users className="w-6 h-6" />
                Suivez-nous
              </h3>
              <SocialLinks className="flex gap-4 justify-center md:justify-start" />
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
}
