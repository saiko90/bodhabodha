import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    // 1. Vérif des clés
    const API_KEY = process.env.KIT_API_KEY;
    const FORM_ID = process.env.KIT_FORM_ID;

    console.log("--- DÉBUT TENTATIVE ---");
    console.log("Email:", email);
    console.log("Form ID:", FORM_ID);
    console.log("API Key présente:", !!API_KEY);

    if (!API_KEY || !FORM_ID) {
      console.error("ERREUR: Clés manquantes");
      return NextResponse.json({ error: 'Config missing' }, { status: 500 });
    }

    // 2. Envoi à Kit
    const url = `https://api.convertkit.com/v3/forms/${FORM_ID}/subscribe`;
    console.log("Appel URL:", url);

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        api_key: API_KEY,
        email: email,
      }),
    });

    // 3. Analyse de la réponse (C'est ici qu'on va trouver le coupable)
    const data = await response.json();
    
    console.log("STATUT KIT:", response.status);
    console.log("RÉPONSE KIT:", JSON.stringify(data, null, 2)); // <--- LE MESSAGE IMPORTANT

    if (!response.ok) {
      return NextResponse.json({ error: data.message || 'Error subscribing' }, { status: 500 });
    }

    return NextResponse.json({ success: true });

  } catch (error: any) {
    console.error("CRASH SERVEUR:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}