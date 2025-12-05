"use client"

import { useState } from "react";
import { siteConfig } from "@/config/site.config";
import { Section } from "@/components/ui/Section";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { Mail, Phone, MapPin, Users } from "lucide-react"; // Assurez-vous d'avoir lucide-react installé
import { useTracking } from "@/components/tracking/TrackingProvider";
import { usePath } from "@/hooks/usePath";
import { useScreenSize } from "@/hooks/useScreenSize";
import { Button } from "@/components/ui/Button";

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
  const [erreur, setErreur] = useState<boolean | null>(null);
  const [nom, setNom] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [telephone, setTelephone] = useState<string>("");
  const [message, setMessage] = useState<string>("");



  async function handleSubmit() {
    try {
      fetch("https://sani-web.com/oc-portfolio/send_email.php", {
        method: "POST",
        body: new URLSearchParams({
          nom,
          email,
          telephone,
          message,
        }),
      });
      setNom("");
      setEmail("");
      setTelephone("");
      setMessage("");
      setErreur(false);
    } catch (error) {
      setErreur(true);
      console.error("Error submitting form:", error);
    }
  }

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
              Suivez-moi
            </h3>
            <SocialLinks className="justify-center" />
          </div>
        )}
      </div>

      <h3 className="text-xl font-semibold flex items-center justify-center gap-2 mb-4 mt-10 px-4">Ou contactez-moi directement via ce formulaire :</h3>

      {
        erreur && <p className="text-red-600 text-center mb-4">Une erreur est survenue lors de l'envoi du formulaire. Veuillez réessayer plus tard.</p>
      }
      {
        erreur === false && <p className="text-green-600 text-center mb-4">Votre message a été envoyé avec succès ! Je vous répondrai dans les plus brefs délais.</p>
      }
      <div
        className="max-w-2xl mx-auto flex flex-col gap-4 px-4"
      >
        <div className="flex flex-col gap-2 mb-6">
          <label htmlFor="nom">Nom :</label>
          <input className="w-full border border-primary/20 rounded-full p-2" type="text" id="nom" name="nom" required value={nom} onChange={(e) => setNom(e.target.value)} />
        </div>
        <div className="flex flex-col gap-2 mb-6">
          <label htmlFor="email">Email :</label>
          <input className="w-full border border-primary/20 rounded-full p-2" type="email" id="email" name="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="flex flex-col gap-2 mb-6">
          <label htmlFor="telephone">Téléphone :</label>
          <input className="w-full border border-primary/20 rounded-full p-2" type="tel" id="telephone" name="telephone" required value={telephone} onChange={(e) => setTelephone(e.target.value)} />
        </div>
        <div className="flex flex-col gap-2 mb-6">
          <label htmlFor="message">Message :</label>
          <textarea
            id="message"
            name="message"
            placeholder="Veuillez décrire votre projet ou poser vos questions ici..."
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={{ resize: "none" }}
            className="w-full border border-primary/20 rounded-2xl p-4 h-40"
          />
        </div>
        <Button type="submit" onClick={() => {
          trackEvent("conversion", window.location.pathname, `${window.innerWidth}x${window.innerHeight}`, "devis_form_submit", {
            action: "form_submit",
            label: "Devis Form Submit"
          });
          handleSubmit();
        }}>Envoyer</Button>
      </div>
    </Section>
  );
}
