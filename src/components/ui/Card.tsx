"use client";

import Image from "next/image";
import { Button } from "./Button";
import { siteConfig } from "@/config/site.config";
import Link from "next/link";

type CardProps = {
  title: string;
  description: string;
  imageUrl?: string;
  link?: string;
  cta?: {
    label: string;
    onClick: () => void;
    variant?: "primary" | "secondary";
    classname?: string;
  };
};

export function Card({ title, description, imageUrl, link, cta }: CardProps) {
  return (
    <div
      className="rounded-lg shadow-md bg-background overflow-hidden h-full flex flex-col relative group"
    >
      {link && (
        <Link
          href={link}
          className="absolute inset-0 z-10"
          aria-label={title}
        />
      )}
      {imageUrl && (
        <div>
          <Image
            src={`${siteConfig.basePath}${imageUrl}`}
            alt={title}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
            width={384}
            height={192}
          />
          {link && (
            <span className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          )}
        </div>
      )}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="mb-4">{description}</p>
        {cta && (
          <div className="mt-auto">
            <Button
              variant={cta.variant}
              onClick={cta.onClick}
              className={cta.classname}
            >
              {cta.label}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
