"use client"

import { useEffect, useState } from "react";

export function useScreenSize(): `${number}x${number}` {
  const [size, setSize] = useState<`${number}x${number}`>(() => {
    if (typeof window !== "undefined") {
      return `${window.innerWidth}x${window.innerHeight}`;
    }
    return "0x0";
  });

  useEffect(() => {
    function handleResize() {
      setSize(`${window.innerWidth}x${window.innerHeight}`);
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
}