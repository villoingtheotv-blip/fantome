import Link from "next/link";

export default function Succes() {
  return (
    <main className="min-h-screen bg-cream flex items-center px-6">
      <div className="mx-auto max-w-lg py-24 text-center">
        <p className="text-moss font-medium mb-4">Paiement reçu</p>
        <h1 className="font-serif text-4xl sm:text-5xl text-ink font-semibold leading-tight">
          Merci. Votre audit est lancé.
        </h1>
        <p className="mt-6 text-lg text-ink/70 leading-relaxed">
          Vous allez recevoir un email de confirmation. On revient vers vous
          sous 24 h pour récupérer votre relevé bancaire et vous envoyer la
          liste de vos abonnements oubliés.
        </p>
        <Link
          href="/"
          className="mt-10 inline-flex items-center justify-center rounded-md border border-ink/20 px-6 py-3 text-ink hover:bg-ink/5"
        >
          Retour à l&apos;accueil
        </Link>
      </div>
    </main>
  );
}
