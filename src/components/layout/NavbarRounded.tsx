'use client'

import Link from 'next/link'
import Image from "next/image";
import { useState } from 'react'
import { siteConfig } from '@/config/site.config'

export function NavbarRounded({ logo }: { logo?: string }) {
  const [open, setOpen] = useState(false)

  return (
    <header className={`fixed w-9/10 md:w-8/10 left-5/100 md:left-1/10 p-0 top-0 z-50 bg-background ${!open ? 'rounded-b-2xl' : 'rounded-b-none'} shadow-lg`}>
      <nav>
        <div className="container mx-auto px-6 py-3 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center justify-between w-full md:w-auto">
            <Link href="/" className="text-xl font-bold focus:outline-2">
              {logo ? (
                <Image
                  className="h-8 w-auto"
                  src={`${siteConfig.basePath}${logo}`}
                  alt={siteConfig.name + " logo"}
                  width={180}
                  height={38}
                  priority
                />
              ) : (
                <span>{siteConfig.name}</span>
              )}
            </Link>
            <button
              className="md:hidden block focus:outline-2 text-2xl"
              onClick={() => setOpen(!open)}
            >
              ☰
            </button>
          </div>
          <ul className={`flex flex-col md:flex-row gap-4 md:gap-10 ${open ? 'absolute top-12 p-4 left-0 w-full bg-background shadow-md text-center rounded-b-2xl' : 'hidden'} md:mt-0 md:flex`}>
            {siteConfig.navLinks.length === 1
              ? siteConfig.navLinks[0].sections?.map((section: { href: string; label: string }) => (
                <li key={section.href}>
                  <Link href={section.href} className="hover:underline focus:outline-2">
                    {section.label}
                  </Link>
                </li>
              ))
              : siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:underline focus:outline-2">
                    {link.label}
                  </Link>
                </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}
