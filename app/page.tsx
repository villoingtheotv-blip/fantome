import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-cream">
      {/* Hero */}
      <section className="px-6 pt-14 pb-16 sm:pt-24 sm:pb-24">
        <div className="mx-auto max-w-2xl">
          <p className="text-moss font-medium tracking-tight mb-5">Fantômes</p>

          <h1 className="font-serif text-[2.5rem] leading-[1.08] sm:text-6xl sm:leading-[1.05] text-ink font-semibold">
            Vous payez encore pour un service que vous avez oublié.
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-ink/70 leading-relaxed max-w-xl">
            Un essai jamais résilié, une option activée une fois, un service
            remplacé sans qu&apos;on pense à couper l&apos;ancien. Seuls,
            chacun coûte peu. Ensemble, ils tournent depuis des années sur
            votre compte.
          </p>

          <div className="mt-9 flex flex-col gap-3">
            <a
              href="#audit"
              className="btn-thumb inline-flex items-center justify-center rounded-md bg-ink px-8 text-base font-medium text-cream transition-colors hover:bg-ink/90 active:bg-ink/80"
            >
              Faire l&apos;audit de mon compte — 19 €
            </a>
            <p className="text-sm text-ink/50">
              Paiement unique. Résultat sous 24 h.
            </p>
          </div>
        </div>
      </section>

      {/* Chiffre de la douleur */}
      <section className="px-6 py-14 border-y border-ink/10 bg-ink text-cream">
        <div className="mx-auto max-w-2xl">
          <p className="font-serif text-5xl sm:text-6xl font-semibold text-moss">
            220&nbsp;€
          </p>
          <p className="mt-3 text-lg text-cream/80 max-w-md">
            C&apos;est ce qu&apos;un foyer français perd en moyenne chaque
            année en abonnements dont il ne se sert plus. Rarement un seul
            gros prélèvement — presque toujours cinq ou six petits, trop
            discrets pour sauter aux yeux sur un relevé.
          </p>
        </div>
      </section>

      {/* Bénéfices */}
      <section className="px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-2xl">
          <div className="grid gap-10 sm:grid-cols-3 sm:gap-8">
            <div>
              <p className="font-serif text-2xl text-ink mb-2">On repère</p>
              <p className="text-ink/70 leading-relaxed">
                Déposez votre relevé bancaire. On retrouve chaque prélèvement
                régulier, classé par ce qu&apos;il vous coûte à l&apos;année —
                pas par le petit montant mensuel qui le cache.
              </p>
            </div>
            <div>
              <p className="font-serif text-2xl text-ink mb-2">On rédige</p>
              <p className="text-ink/70 leading-relaxed">
                Pour chaque abonnement que vous voulez arrêter, une lettre de
                résiliation prête à envoyer. Vous n&apos;avez plus qu&apos;à
                l&apos;expédier.
              </p>
            </div>
            <div>
              <p className="font-serif text-2xl text-ink mb-2">Vous gardez</p>
              <p className="text-ink/70 leading-relaxed">
                Un total, mis à jour, de ce que vous récupérez sur
                l&apos;année. Rien d&apos;utile n&apos;est touché — seulement
                ce que vous avez oublié.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section id="audit" className="px-6 py-16 sm:py-20 bg-moss/10">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-serif text-3xl sm:text-4xl text-ink font-semibold">
            L&apos;audit complet de votre compte.
          </h2>
          <p className="mt-4 text-ink/70 leading-relaxed max-w-md">
            19 €, une fois. Vous déposez votre relevé, on vous renvoie la
            liste de vos fantômes et les lettres pour les faire partir.
          </p>
          <form action="/api/checkout" method="POST" className="mt-8">
            <label htmlFor="email" className="block text-sm text-ink/70 mb-2">
              Votre email, pour recevoir le résultat
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="vous@exemple.fr"
              className="w-full rounded-md border border-ink/20 bg-white px-4 py-3.5 text-base text-ink placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-moss"
            />
            <button
              type="submit"
              className="btn-thumb mt-4 w-full inline-flex items-center justify-center rounded-md bg-ink px-8 text-base font-medium text-cream transition-colors hover:bg-ink/90 active:bg-ink/80"
            >
              Payer 19 € et lancer l&apos;audit
            </button>
            <p className="mt-3 text-xs text-ink/50">
              Paiement sécurisé par Stripe. Aucune carte n&apos;est stockée
              par Fantômes.
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}
