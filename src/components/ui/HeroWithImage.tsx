"use client";

import Image from "next/image";
import { siteConfig } from "@/config/site.config";
import { Section } from "@/components/ui/Section";
import { Button } from '@/components/ui/Button';

type HeroWithImageProps = {
  sectionClassName?: string;
  sectionId?: string;
  title: string
  subtitle?: string
  imageUrl: string
  ctaVariant?: 'primary' | 'secondary'
  ctaLabel?: string
  onCtaClick?: () => void
}

export function HeroWithImage({
  sectionClassName,
  sectionId,
  title,
  subtitle,
  imageUrl,
  ctaVariant = 'primary',
  ctaLabel,
  onCtaClick,
}: HeroWithImageProps) {
  return (
    <Section className={`pt-12 md:pt-20 ${sectionClassName}`} id={sectionId}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-2 md:px-0 text-center md:text-start">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 text-lg text-foreground/80">{subtitle}</p>
          )}
          {ctaLabel && (
            <Button
              onClick={onCtaClick}
              className="mt-6 px-6 py-3"
              variant={ctaVariant}
            >
              {ctaLabel}
            </Button>
          )}
        </div>
        <div>
          <Image
            src={`${siteConfig.basePath}${imageUrl}`}
            alt="Hero Illustration"
            className="w-full h-auto rounded-xl shadow-lg"
            width={600}
            height={400}
          />
        </div>
      </div>
    </Section>
  )
}
