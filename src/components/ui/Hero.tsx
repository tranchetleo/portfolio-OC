import { Section } from "@/components/ui/Section";
import { Button } from '@/components/ui/Button';

type HeroProps = {
  sectionClassName?: string;
  sectionId?: string;
  title: string
  subtitle?: string
  ctaVariant?: 'primary' | 'secondary'
  ctaLabel?: string
  onCtaClick?: () => void
}

export function Hero({ sectionClassName, sectionId, title, subtitle, ctaLabel, ctaVariant, onCtaClick }: HeroProps) {
  return (
    <Section
          className={"pt-12 md:pt-20 " + sectionClassName}
          id={sectionId}
        >
      <div className="max-w-3xl mx-auto text-center px-2 md:px-0">
        <h1 className="text-4xl md:text-5xl font-extrabold text-foreground">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-xl text-foreground/80">{subtitle}</p>
        )}
        {ctaLabel && (
          <Button
            onClick={onCtaClick}
            variant={ctaVariant}
            className="mt-8 px-6 py-3"
          >
            {ctaLabel}
          </Button>
        )}
      </div>
    </Section>
  )
}
