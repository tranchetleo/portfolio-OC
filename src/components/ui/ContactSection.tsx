"use client"

import { siteConfig } from "@/config/site.config";
import { Section } from "@/components/ui/Section";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { Mail, Phone, MapPin, Users } from "lucide-react"; // Assurez-vous d'avoir lucide-react installé
import { useTracking } from "@/components/tracking/TrackingProvider";
import { usePath } from "@/hooks/usePath";
import { useScreenSize } from "@/hooks/useScreenSize";

export function ContactSection({
  sectionId = "contact",
  title = "Contactez-nous",
  subtitle = "Nous vous répondrons rapidement.",
}: {
  sectionId?: string;
  title?: string;
  subtitle?: string;
}) {
  const { trackEvent } = useTracking();
  const path = usePath();
  const screenSize = useScreenSize();

  return (
    <Section id={sectionId} className="w-full bg-background text-foreground py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold">{title}</h2>
        <p className="text-muted mt-2 mb-8">{subtitle}</p>

        <div className="grid gap-6 md:grid-cols-3 md:text-left">
          <div>
            <h3 className="text-2xl font-semibold flex items-center justify-center md:justify-start gap-2 mb-4">
              <Mail className="w-7 h-7" />
              Email
            </h3>
            <a href={`mailto:${siteConfig.email}`} className="text-primary hover:underline" onClick={() => trackEvent("cta_click", path, screenSize, "email_click", { action: "contact_email", label: siteConfig.email })} target="_blank">
              {siteConfig.email}
            </a>
          </div>

          <div>
            <h3 className="text-2xl font-semibold flex items-center justify-center md:justify-start gap-2 mb-4">
              <Phone className="w-7 h-7" />
              Téléphone
            </h3>
            <a href={`tel:${siteConfig.phone}`} className="text-primary hover:underline" onClick={() => trackEvent("cta_click", path, screenSize, "phone_click", { action: "contact_phone", label: siteConfig.phone })} target="_blank">
              {siteConfig.phone}
            </a>
          </div>

          <div>
            <h3 className="text-2xl font-semibold flex items-center justify-center md:justify-start gap-2 mb-4">
              <MapPin className="w-7 h-7" />
              Adresse
            </h3>
            <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.address)}`} className="text-primary hover:underline" onClick={() => trackEvent("cta_click", path, screenSize, "address_click", { action: "contact_address", label: siteConfig.address })} target="_blank">
              {siteConfig.address}
            </a>
          </div>
        </div>
        {siteConfig.socialLinks && Object.keys(siteConfig.socialLinks).length > 0 && (
          <div className="mt-12">
            <h3 className="text-xl font-semibold flex items-center justify-center gap-2 mb-4">
              <Users className="w-6 h-6" />
              Suivez-nous
            </h3>
            <SocialLinks className="justify-center" />
          </div>
        )}
      </div>
    </Section>
  );
}
