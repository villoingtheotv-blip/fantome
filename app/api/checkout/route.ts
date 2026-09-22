import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(req: NextRequest) {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    return NextResponse.json(
      { error: "Stripe n'est pas configuré (clé secrète manquante)." },
      { status: 500 }
    );
  }

  const stripe = new Stripe(secretKey);

  const formData = await req.formData();
  const email = String(formData.get("email") || "").trim();

  if (!email || !email.includes("@")) {
    return NextResponse.redirect(new URL("/?erreur=email", req.url), 303);
  }

  const origin = req.nextUrl.origin;

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      customer_email: email,
      line_items: [
        {
          price_data: {
            currency: "eur",
            unit_amount: 1900,
            product_data: {
              name: "Audit Fantômes — détection des abonnements oubliés",
              description:
                "Analyse de votre relevé bancaire, liste des prélèvements récurrents et lettres de résiliation.",
            },
          },
          quantity: 1,
        },
      ],
      success_url: `${origin}/succes?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/echec`,
    });

    if (!session.url) {
      throw new Error("Stripe n'a pas renvoyé d'URL de paiement.");
    }

    return NextResponse.redirect(session.url, 303);
  } catch (err) {
    console.error("Erreur création session Stripe:", err);
    return NextResponse.redirect(new URL("/echec", req.url), 303);
  }
}
