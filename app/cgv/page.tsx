export default function CGV() {
  return (
    <main className="min-h-screen bg-cream px-6 py-16">
      <div className="mx-auto max-w-2xl">
        <h1 className="font-serif text-3xl text-ink font-semibold mb-8">
          Conditions générales de vente
        </h1>
        <div className="prose prose-ink max-w-none text-ink/80 leading-relaxed space-y-6">
          <section>
            <h2 className="font-serif text-xl text-ink mb-2">1. Objet</h2>
            <p>
              Les présentes conditions régissent la vente du service Audit
              Fantômes, édité par [À COMPLÉTER : raison sociale], au prix de
              19 € TTC, paiement unique.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-xl text-ink mb-2">2. Service</h2>
            <p>
              L&apos;audit consiste en l&apos;analyse d&apos;un relevé
              bancaire déposé par le client, la détection des prélèvements
              récurrents, leur classement par coût annuel, et la génération
              de lettres de résiliation. Le résultat est livré par email sous
              24 heures ouvrées.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-xl text-ink mb-2">
              3. Prix et paiement
            </h2>
            <p>
              Le prix est de 19 € TTC, payé en une fois via Stripe au moment
              de la commande. Aucune donnée bancaire n&apos;est stockée par
              Fantômes.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-xl text-ink mb-2">
              4. Droit de rétractation
            </h2>
            <p>
              Conformément à l&apos;article L221-28 du Code de la
              consommation, le droit de rétractation ne s&apos;applique pas
              une fois l&apos;audit livré avec l&apos;accord exprès du
              client. En passant commande, le client demande l&apos;exécution
              immédiate du service et reconnaît renoncer à son droit de
              rétractation une fois le résultat livré.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-xl text-ink mb-2">
              5. Réclamations
            </h2>
            <p>
              Pour toute question ou réclamation : [À COMPLÉTER : email de
              contact].
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
