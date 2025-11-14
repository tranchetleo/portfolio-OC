"use client";

import Image from "next/image";
import { siteConfig } from "@/config/site.config";

type TestimonialCardProps = {
  name: string
  role?: string
  content: string
  imageUrl?: string
}

export function TestimonialCard({ name, role, content, imageUrl }: TestimonialCardProps) {
  return (
    <div className="flex flex-col rounded-xl bg-background p-6 shadow-md">
      <p className="text-foreground/80 italic mb-6">“{content}”</p>
      <div className="flex items-center gap-4 mt-auto">
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
    </div>
  )
}
