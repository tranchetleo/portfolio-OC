"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/config/site.config";

export function Navbar(
  {
    logo,
    logoHeight = 8,
    paddingY = 4,
    invert = false,
    invertReverse = false,
    underline,
    opacity,
    name,
  }: {
    logo?: string;
    logoHeight?: number;
    paddingY?: number;
    invert?: boolean;
    invertReverse?: boolean;
    underline?: boolean;
    opacity?: number;
    name?: boolean;
  },
) {
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLHeadElement>(null);

  useEffect(() => {
    if (!open) return;
    function handleClickOutside(event: MouseEvent) {
      if (
        headerRef.current && !headerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <header
      ref={headerRef}
      className={`fixed w-full p-0 top-0 z-50 ${
        underline ? "border-b-2 border-primary" : ""
      } ${
        opacity ? "backdrop-blur bg-background/" + opacity : "bg-background"
      }`}
    >
      <nav>
        <div
          className={`container mx-auto px-4 lg:px-0 py-${paddingY} flex flex-col lg:flex-row items-center justify-between`}
        >
          <div className="flex items-center justify-between w-full lg:w-auto">
            <Link
              href="/"
              className={`flex items-center gap-2 text-xl font-bold focus:outline-2 hover:scale-105 transition-transform duration-200 ${
                invert ? "dark:invert" : ""
              } ${invertReverse ? "invert dark:invert-0" : ""}`}
            >
              {logo
                ? (
                  <Image
                    className={`h-${logoHeight} w-auto`}
                    src={`${siteConfig.basePath}${logo}`}
                    alt={siteConfig.name + " logo"}
                    width={180}
                    height={38}
                    priority
                  />
                )
                : <span>{siteConfig.name}</span>}
              {name && <span>{siteConfig.name}</span>}
            </Link>
            <button
              className="lg:hidden focus:outline-2 w-8 h-8 flex flex-col justify-center items-center relative"
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
            >
              <span
                className={`bg-foreground block w-6 h-0.5 transition-all duration-300 ${
                  open ? "rotate-45 translate-y-2.5" : ""
                }`}
              />
              <span
                className={`bg-foreground block w-6 h-0.5 my-2 transition-all duration-300 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`bg-foreground block w-6 h-0.5 transition-all duration-300 ${
                  open ? "-rotate-45 -translate-y-2.5" : ""
                }`}
              />
            </button>
          </div>
          <ul
            className={`flex flex-col font-bold lg:flex-row px-2 gap-4 lg:gap-10 overflow-hidden transition-all duration-500 text-center ${
              open ? "max-h-100 pt-4 w-full" : "max-h-0"
            } lg:mt-0 lg:flex lg:max-h-none lg:pt-0 lg:w-auto lg:text-left`}
            style={{
              transitionProperty: "max-height, padding-top",
            }}
          >
            {siteConfig.navLinks.length === 1
              ? siteConfig.navLinks[0].sections?.map((
                section: { href: string; label: string },
              ) => (
                <li key={section.href}>
                  <Link
                    href={section.href}
                    className="hover:underline hover:text-primary focus:outline-2 transition-colors duration-200"
                    onClick={() => setOpen(false)}
                  >
                    {section.label}
                  </Link>
                </li>
              ))
              : siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:underline focus:outline-2"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
