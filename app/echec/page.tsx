import Link from "next/link";

export default function Echec() {
  return (
    <main className="min-h-screen bg-cream flex items-center px-6">
      <div className="mx-auto max-w-lg py-24 text-center">
        <h1 className="font-serif text-4xl sm:text-5xl text-ink font-semibold leading-tight">
          Le paiement n&apos;a pas abouti.
        </h1>
        <p className="mt-6 text-lg text-ink/70 leading-relaxed">
          Aucune somme n&apos;a été prélevée. Vous pouvez réessayer quand vous
          voulez.
        </p>
        <Link
          href="/#audit"
          className="mt-10 inline-flex items-center justify-center rounded-md bg-ink px-8 py-3.5 text-cream hover:bg-ink/90"
        >
          Réessayer
        </Link>
      </div>
    </main>
  );
}
