export default function Confidentialite() {
  return (
    <main className="min-h-screen bg-cream px-6 py-16">
      <div className="mx-auto max-w-2xl">
        <h1 className="font-serif text-3xl text-ink font-semibold mb-8">
          Politique de confidentialité
        </h1>
        <div className="prose prose-ink max-w-none text-ink/80 leading-relaxed space-y-6">
          <section>
            <h2 className="font-serif text-xl text-ink mb-2">
              Données collectées
            </h2>
            <p>
              Au moment du paiement, nous collectons votre adresse email.
              Cette donnée est traitée par Stripe (paiement) et Resend
              (envoi d&apos;emails). Aucune carte bancaire n&apos;est stockée
              par Fantômes.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-xl text-ink mb-2">
              Utilisation
            </h2>
            <p>
              Votre email sert uniquement à vous livrer l&apos;audit et à
              vous contacter à son sujet. Il n&apos;est ni revendu, ni
              utilisé à des fins publicitaires.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-xl text-ink mb-2">
              Mesure d&apos;audience
            </h2>
            <p>
              Ce site utilise une mesure d&apos;audience simplifiée, sans
              cookie de suivi individuel, conformément aux recommandations
              de la CNIL.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-xl text-ink mb-2">
              Vos droits
            </h2>
            <p>
              Conformément au RGPD, vous pouvez demander l&apos;accès, la
              rectification ou la suppression de vos données en écrivant à
              [À COMPLÉTER : email de contact].
            </p>
          </section>
          <section>
            <h2 className="font-serif text-xl text-ink mb-2">
              Responsable du traitement
            </h2>
            <p>[À COMPLÉTER : votre nom ou raison sociale].</p>
          </section>
        </div>
      </div>
    </main>
  );
}
