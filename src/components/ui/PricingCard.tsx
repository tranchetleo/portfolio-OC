type PricingCardProps = {
  title: string
  price: string
  features: string[]
  highlight?: boolean
  ctaLabel: string
  onClick?: () => void
}

export function PricingCard({
  title,
  price,
  features,
  highlight = false,
  ctaLabel,
  onClick,
}: PricingCardProps) {
  return (
    <div
      className={`w-full max-w-sm h-full flex flex-col rounded-xl border shadow-sm p-6 transition
        ${highlight ? "border-primary bg-primary/10" : "border-foreground/30 bg-background"}
      `}
    > 
      <h3 className="text-xl font-semibold mb-6">{title}</h3>
      <p className="text-3xl font-bold text-primary mb-6">{price}</p>
      <ul className="space-y-2 mb-6">
        {features.map((f, idx) => (
          <li key={idx} className="text-foreground/80 text-sm">• {f}</li>
        ))}
      </ul>
      <div className="mt-auto">
        <button
          onClick={onClick}
          className={`w-full px-4 py-2 rounded-md font-bold transition cursor-pointer
            ${highlight
              ? "bg-primary text-background hover:bg-primary/90"
              : "border border-primary text-primary hover:bg-primary/10"}
          `}
        >
          {ctaLabel}
        </button>
      </div>
    </div>
  )
}
