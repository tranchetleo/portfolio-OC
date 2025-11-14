"use client";

import { useState } from "react";
import Image from "next/image";
import { Dialog } from "@headlessui/react";
import { X } from "lucide-react";
import { siteConfig } from "@/config/site.config";

type ModalImageProps = {
  imageUrl: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
};

export function ModalImage({
  imageUrl,
  alt,
  width = 400,
  height = 300,
  className = "",
}: ModalImageProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Image
        src={`${siteConfig.basePath}${imageUrl}`}
        alt={alt}
        width={width}
        height={height}
        className={`cursor-pointer rounded shadow hover:scale-105 transition-transform duration-200 ${className}`}
        onClick={() => setIsOpen(true)}
      />

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="relative max-w-4xl mx-auto w-full">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 z-10 p-2 bg-background rounded-full shadow hover:bg-background/80 cursor-pointer"
              aria-label="Fermer"
            >
              <X className="w-5 h-5 text-foreground" />
            </button>
            <Image
              src={`${siteConfig.basePath}${imageUrl}`}
              alt={alt}
              width={1200}
              height={800}
              className="rounded shadow-lg max-h-[90vh] w-auto h-auto mx-auto"
            />
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}
