"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site.config";
import Image from "next/image";

export function LoadingScreen() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
      <div className="flex flex-col items-center justify-center space-y-6 px-4">
        {/* Logo animé */}
        <div
          className={`transition-all duration-1000 ${
            mounted ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <div className="relative">
            <Image
              src={`${siteConfig.basePath}/logo_full.webp`}
              alt={`${siteConfig.name} logo`}
              width={200}
              height={60}
              className="h-auto w-auto max-w-[200px] md:max-w-[250px]"
              priority
            />

            {/* Effet de brillance qui passe sur le logo */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse opacity-50">
            </div>
          </div>
        </div>

        {/* Texte de chargement */}
        <div
          className={`transition-all duration-1000 delay-500 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="text-foreground/80 text-sm md:text-base font-medium text-center">
            Chargement...
          </p>
        </div>

        {/* Points animés */}
        <div
          className={`transition-all duration-1000 delay-900 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="flex space-x-2">
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce">
            </div>
            <div
              className="w-2 h-2 bg-primary rounded-full animate-bounce"
              style={{ animationDelay: "0.1s" }}
            >
            </div>
            <div
              className="w-2 h-2 bg-primary rounded-full animate-bounce"
              style={{ animationDelay: "0.2s" }}
            >
            </div>
          </div>
        </div>
      </div>

      {/* Effet de fond subtil */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 pointer-events-none">
      </div>

      {/* Pattern de fond optionnel */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            `radial-gradient(circle at 1px 1px, var(--foreground) 1px, transparent 0)`,
          backgroundSize: "20px 20px",
        }}
      >
      </div>
    </div>
  );
}
