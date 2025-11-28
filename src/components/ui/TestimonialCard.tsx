"use client";

import Image from "next/image";
import { siteConfig } from "@/config/site.config";

type TestimonialCardProps = {
  name: string
  role?: string
  content: string
  imageUrl?: string
  rating?: number
}

export function TestimonialCard({ name, role, content, imageUrl, rating }: TestimonialCardProps) {
  return (
    <div className="flex flex-col rounded-xl bg-background p-6 shadow-md">
      <div className="flex items-center gap-4 mb-6">
        {imageUrl && (
          <Image
            src={`${siteConfig.basePath}${imageUrl}`}
            alt={name}
            className="w-12 h-12 rounded-full object-cover"
            width={48}
            height={48}
          />
        ) || (
            <div className="w-12 h-12 rounded-full bg-foreground/50" />
          )}
        <div>
          <p className="text-sm font-medium">{name}</p>
          {role && <p className="text-sm text-foreground/80">{role}</p>}
        </div>
      </div>
      <p className="text-foreground/80 italic">“{content}”</p>
      <div className="mt-auto">
        {rating && Array.from({ length: rating }).map((_, index) => (
          <span key={index} className="text-yellow-400">★</span>
        ))}
        {rating && Array.from({ length: 5 - rating }).map((_, index) => (
          <span key={index} className="text-foreground/70">★</span>
        ))}
      </div>
    </div>
  )
}
