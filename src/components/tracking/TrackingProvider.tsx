"use client";

import React, { createContext, ReactNode, useContext } from "react";
import { useTracker } from "@/hooks/useTracker";

interface TrackingContextType {
  trackEvent: (type: string, path: string, screenSize: string, eventName: string, props?: Record<string, unknown>) => void;
}

const TrackingContext = createContext<TrackingContextType | null>(null);

interface TrackingProviderProps {
  children: ReactNode;
  config: {
    url: string;
    apiKey: string;
    debug: boolean;
  };
}

export function TrackingProvider({ children, config }: TrackingProviderProps) {
  const { trackEvent } = useTracker(config);

  // En mode développement, on peut désactiver complètement le tracking
  const isDev = process.env.NODE_ENV === "development";

  const safeTrackEvent = (
    type: string,
    path: string,
    screenSize: string,
    eventName: string,
    props?: Record<string, unknown>,
  ) => {
    try {
      trackEvent(type, path, screenSize, eventName, props);
    } catch {
      if (isDev) {
        console.log("Tracking event (dev mode):", { eventName, props });
      }
    }
  };

  return (
    <TrackingContext.Provider value={{ trackEvent: safeTrackEvent }}>
      {children}
    </TrackingContext.Provider>
  );
}

export function useTracking() {
  const context = useContext(TrackingContext);
  if (!context) {
    throw new Error("useTracking doit être utilisé dans un TrackingProvider");
  }
  return context;
}
