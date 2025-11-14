import { Button } from '@/components/ui/Button'

type CallToActionProps = {
  title: string
  description?: string
  ctaVariant?: 'primary' | 'secondary'
  ctaLabel: string
  onClick?: () => void
}

export function CallToAction({ title, description, ctaLabel, ctaVariant, onClick }: CallToActionProps) {
  return (
    <div className="w-full rounded-xl bg-primary/10 border border-primary px-8 py-12 text-center shadow-lg">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">{title}</h2>
      {description && <p className="text-base md:text-lg mb-6">{description}</p>}
      <Button
        onClick={onClick}
        variant={ctaVariant}
        className="bg-primary text-background font-semibold px-6 py-3 rounded-md shadow hover:bg-primary/90 transition"
      >
        {ctaLabel}
      </Button>
    </div>
  )
}
