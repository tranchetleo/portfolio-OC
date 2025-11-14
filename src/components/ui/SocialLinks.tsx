"use client";

import { JSX } from "react";
import { siteConfig } from "@/config/site.config";
import {
  SiDeliveroo,
  SiFacebook,
  SiInstagram,
  SiLinkedin,
  SiTiktok,
  SiTripadvisor,
  SiUbereats,
  SiX,
} from "react-icons/si";
import { FaGlobe } from "react-icons/fa";
import Link from "next/link";
import { useTracking } from "@/components/tracking/TrackingProvider";
import { usePath } from "@/hooks/usePath";
import { useScreenSize } from "@/hooks/useScreenSize";

type PlatformKey =
  | "website"
  | "twitter"
  | "instagram"
  | "facebook"
  | "linkedin"
  | "tiktok"
  | "uberEats"
  | "deliveroo"
  | "tripadvisor";

const iconMap: Record<PlatformKey, JSX.Element> = {
  website: <FaGlobe className="w-5 h-5" />,
  twitter: <SiX className="w-5 h-5" />,
  instagram: <SiInstagram className="w-5 h-5" />,
  facebook: <SiFacebook className="w-5 h-5" />,
  linkedin: <SiLinkedin className="w-5 h-5" />,
  tiktok: <SiTiktok className="w-5 h-5" />,
  uberEats: <SiUbereats className="w-5 h-5" />,
  deliveroo: <SiDeliveroo className="w-5 h-5" />,
  tripadvisor: <SiTripadvisor className="w-5 h-5" />,
};

export function SocialLinks({ className = "" }: { className?: string }) {
  const links = siteConfig.socialLinks;

  const { trackEvent } = useTracking();
  const path = usePath();
  const screenSize = useScreenSize();

  return (
    <div className={`flex flex-wrap gap-6 md:gap-10 items-center ${className}`}>
      {Object.entries(links).map(([key, url]) => {
        const Icon = iconMap[key as PlatformKey] ?? (
          <FaGlobe className="w-5 h-5" />
        );
        return (
          <Link
            key={key}
            href={url as string}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-foreground hover:text-primary transition"
            aria-label={`Lien vers ${key}`}
            onClick={() =>
              trackEvent("cta_click", path, screenSize, `${key}_click`, {
                action: `social_${key}`,
                label: url,
              })}
          >
            {Icon}
            <span className="capitalize text-sm inline">{key}</span>
          </Link>
        );
      })}
    </div>
  );
}
