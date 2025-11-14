import { LucideIcon } from "lucide-react"

type FeatureItemProps = {
  icon: LucideIcon
  title: string
  description: string
}

export function FeatureItem({ icon: Icon, title, description }: FeatureItemProps) {
  return (
    <div className="flex items-start gap-4">
      <div className="p-3 rounded-lg bg-background/50 text-primary shadow-md dark:shadow-primary/20">
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-foreground/80">{description}</p>
      </div>
    </div>
  )
}
