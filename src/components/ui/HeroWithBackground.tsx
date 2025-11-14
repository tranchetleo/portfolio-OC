"use client";

import { siteConfig } from "@/config/site.config";
import { Button } from "@/components/ui/Button";

type HeroWithBackgroundProps = {
  sectionClassName?: string;
  sectionId?: string;
  title: string;
  subtitle?: string;
  imageUrl: string;
  overlayOpacity?: number; // Opacity percentage (0-100)
  colours?: "auto" | "light" | "dark";
  ctaVariant?: "primary" | "secondary";
  ctaLabel?: string;
  onCtaClick?: () => void;
};

export function HeroWithBackground({
  sectionClassName = "", // Use the sectionClassName prop to apply custom styles such as text color for readability
  sectionId,
  title,
  subtitle,
  imageUrl,
  overlayOpacity = 60,
  colours = "auto",
  ctaVariant = "primary",
  ctaLabel,
  onCtaClick,
}: HeroWithBackgroundProps) {
  let lightBg = "background";
  let lightText = "foreground";
  let darkBg = "background";
  let darkText = "foreground";

  switch (colours) {
    case "light":
      darkBg = "foreground";
      darkText = "background";
      break;
    case "dark":
      lightBg = "foreground";
      lightText = "background";
      break;
  }

  const overlayOpacityClass =
    `bg-${lightBg}/${overlayOpacity} dark:bg-${darkBg}/${overlayOpacity}`;

  return (
    <section
      id={sectionId}
      className={`relative w-full min-h-screen flex items-center justify-center text-center px-4 md:px-6 text-${lightText} dark:text-${darkText} ${sectionClassName}`}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${siteConfig.basePath}${imageUrl})`,
        }}
      />
      {/* Overlay */}
      <div
        className={`absolute inset-0 z-10 ${overlayOpacityClass}`}
      />
      {/* Content */}
      <div className="relative z-20 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-extrabold">{title}</h1>
        {subtitle && <p className="mt-4 text-lg md:text-xl">{subtitle}</p>}
        {ctaLabel && (
          <Button
            onClick={onCtaClick}
            className="mt-8 px-6 py-3 text-base"
            variant={ctaVariant}
          >
            {ctaLabel}
          </Button>
        )}
      </div>
    </section>
  );
}
