"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/layout/Container";
import { Home } from "lucide-react";
import { useEffect, useState } from "react";
import { useTracking } from "@/components/tracking/TrackingProvider";
import { useScreenSize } from "@/hooks/useScreenSize";

export default function NotFoundAnimated() {
  const { trackEvent } = useTracking();
  const screenSize = useScreenSize();

  useEffect(() => {
    // Tracker la visite de la page 404
    trackEvent(
      "page_view",
      "/404",
      screenSize,
      JSON.stringify({
        page_title: "Page Not Found",
      }),
    );
  }, [trackEvent, screenSize]);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-truebase px-4 md:px-0">
      <Container className="text-center" type="col">
        <div className="max-w-2xl mx-auto">
          {/* Animation du 404 */}
          <div
            className={`transition-all duration-1000 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative">
              <h1 className="text-8xl md:text-9xl font-extrabold text-primary select-none">
                404
              </h1>
            </div>
          </div>

          {/* Contenu principal */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Oups ! Page introuvable
            </h2>

            <p className="text-lg md:text-xl text-foreground/80 mb-8">
              Il semble que cette page ait pris des vacances... 🏖️<br />
              Mais ne vous inquiétez pas, nous allons vous ramener en territoire
              familier !
            </p>
          </div>

          {/* Actions */}
          <div
            className={`transition-all duration-1000 delay-500 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/">
                <Button
                  variant="primary"
                  className="px-8 py-4 text-lg flex items-center gap-2"
                >
                  <Home size={20} />
                  Retour à l'accueil
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
