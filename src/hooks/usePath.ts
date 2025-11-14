"use client"

import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site.config";

export function usePath(): string {
  const [path, setPath] = useState<string>("");

  useEffect(() => {
    setPath(window.location.pathname.replace(siteConfig.basePath, ""));
  }, []);

  return path;
}