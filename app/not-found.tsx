import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-cream flex items-center px-6">
      <div className="mx-auto max-w-lg py-24 text-center">
        <p className="text-moss font-medium mb-4">404</p>
        <h1 className="font-serif text-4xl sm:text-5xl text-ink font-semibold leading-tight">
          Cette page s&apos;est volatilisée.
        </h1>
        <p className="mt-6 text-lg text-ink/70 leading-relaxed">
          Un fantôme de plus, en quelque sorte. Retournez à l&apos;accueil.
        </p>
        <Link
          href="/"
          className="mt-10 inline-flex items-center justify-center rounded-md bg-ink px-8 py-3.5 text-cream hover:bg-ink/90"
        >
          Retour à l&apos;accueil
        </Link>
      </div>
    </main>
  );
}
