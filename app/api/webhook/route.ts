import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!secretKey || !webhookSecret) {
    console.error("Variables Stripe manquantes côté serveur.");
    return NextResponse.json({ error: "Config manquante" }, { status: 500 });
  }

  const stripe = new Stripe(secretKey);

  const body = await req.text();
  const signature = req.headers.get("stripe-signature");

  if (!signature) {
    return NextResponse.json({ error: "Signature manquante" }, { status: 400 });
  }

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (err) {
    console.error("Signature webhook invalide:", err);
    return NextResponse.json({ error: "Signature invalide" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const clientEmail = session.customer_email || session.customer_details?.email;

    if (clientEmail) {
      await notifyNewSale(clientEmail, session.id);
    } else {
      console.error("Paiement confirmé sans email client:", session.id);
    }
  }

  return NextResponse.json({ received: true });
}

async function notifyNewSale(clientEmail: string, sessionId: string) {
  const resendKey = process.env.RESEND_API_KEY;
  const notifyEmail = process.env.NOTIFY_EMAIL;

  if (!resendKey) {
    console.error("RESEND_API_KEY manquante, impossible d'envoyer les emails.");
    return;
  }

  const resend = new Resend(resendKey);

  if (notifyEmail) {
    try {
      await resend.emails.send({
        from: "Fantômes <onboarding@resend.dev>",
        to: notifyEmail,
        subject: "Nouvelle vente Fantômes",
        text: `Nouveau paiement reçu.\n\nEmail du client : ${clientEmail}\nSession Stripe : ${sessionId}\n\nContactez-le pour récupérer son relevé et lui livrer l'audit.`,
      });
    } catch (err) {
      console.error("Erreur envoi email de notification:", err);
    }
  }

  try {
    await resend.emails.send({
      from: "Fantômes <onboarding@resend.dev>",
      to: clientEmail,
      subject: "Votre audit Fantômes est en route",
      text: `Bonjour,\n\nVotre paiement a bien été reçu. On revient vers vous sous 24 h pour récupérer votre relevé bancaire et vous envoyer la liste de vos abonnements oubliés.\n\nÀ très vite,\nL'équipe Fantômes`,
    });
  } catch (err) {
    console.error("Erreur envoi email de confirmation client:", err);
  }
}
