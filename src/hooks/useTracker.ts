'use client'

import { useCallback, useMemo } from 'react'

interface TrackingData {
  eventType: string
  path: string
  screenSize: string
  event?: string
  props?: Record<string, unknown>
}

interface TrackerConfig {
  url: string
  apiKey: string
  debug: boolean
}

export function useTracker(config: TrackerConfig) {

  const trackerConfig: TrackerConfig = useMemo(() => ({
    url: config.url || '/api', // Utiliser notre proxy local par défaut
    apiKey: config.apiKey || process.env.NEXT_PUBLIC_TRACKER_API_KEY || '',
    debug: config.debug
  }), [config.url, config.apiKey, config.debug])

  // Fonction pour envoyer les données
  const sendTracking = useCallback(async (data: TrackingData) => {
    if (!trackerConfig.url || !trackerConfig.apiKey) {
      if (trackerConfig.debug) {
        console.warn('Tracker: URL ou API Key manquante')
      }
      return
    }

    try {
      const trackingPayload = {
        eventType: data.eventType,
        path: data.path,
        referrer: typeof document !== 'undefined' ? document.referrer : '',
        user_agent: typeof navigator !== 'undefined' ? navigator.userAgent : '',
        screenSize: data.screenSize,
        props: data.props ? JSON.stringify(data.props) : null,
        ...(data.event && { event: data.event })
      }

      if (trackerConfig.debug) {
        console.log('Tracker debug mode enabled :', trackerConfig.debug)
        console.log('Tracking payload:', trackingPayload)
        console.log('Sending to:', `${trackerConfig.url}api/track`)
      }

      const response = await fetch(`${trackerConfig.url}api/track`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-API-Key': trackerConfig.apiKey,
        },
        body: JSON.stringify(trackingPayload)
      })

      if (trackerConfig.debug) {
        console.log('Tracker Response:', {
          ok: response.ok,
          status: response.status,
          statusText: response.statusText
        })
      }

      if (!response.ok && trackerConfig.debug) {
        const responseText = await response.text()
        console.warn('Tracker Error Response:', responseText)
      }
    } catch (error) {
      if (trackerConfig.debug) {
        console.error('Tracker Error:', error)
        if (error instanceof TypeError && error.message.includes('Failed to fetch')) {
          console.warn('Ceci semble être un problème CORS. Vérifiez la configuration du serveur de tracking.')
        }
      }
      
      // En cas d'erreur de réseau, on pourrait loguer localement ou utiliser un service de fallback
      if (typeof window !== 'undefined' && trackerConfig.debug) {
        console.log('Données qui auraient été envoyées:', data)
      }
    }
  }, [trackerConfig])

  // Fonction pour tracker des événements personnalisés
  const trackEvent = useCallback((type: string, path: string, screen_size: string, eventName: string, props?: Record<string, unknown>) => {
    sendTracking({
      eventType: type,
      path: path,
      screenSize: screen_size,
      event: eventName,
      props
    })
  }, [sendTracking])

  return { trackEvent }
}