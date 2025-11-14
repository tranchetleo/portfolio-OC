import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    const trackerUrl = process.env.NEXT_PUBLIC_TRACKER_URL
    const apiKey = process.env.NEXT_PUBLIC_TRACKER_API_KEY
    
    if (!trackerUrl || !apiKey) {
      return NextResponse.json(
        { error: 'Configuration de tracking manquante' },
        { status: 500 }
      )
    }

    // Faire la requête vers le serveur de tracking depuis notre serveur
    const response = await fetch(`${trackerUrl}/api/track`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': apiKey,
      },
      body: JSON.stringify(body)
    })

    if (!response.ok) {
      console.error('Erreur tracking:', response.status, response.statusText)
      return NextResponse.json(
        { error: 'Erreur du serveur de tracking' },
        { status: response.status }
      )
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error('Erreur proxy tracking:', error)
    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: 500 }
    )
  }
}
