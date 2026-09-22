import type { Metadata } from "next";
import { Fraunces, Instrument_Sans } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["500", "600", "700"],
  display: "swap",
});

const instrument = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  weight: ["400", "500", "600"],
  display: "swap",
});

const siteUrl = "https://fantomes.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Fantômes — Débusquez les abonnements que vous ne payez pour rien",
  description:
    "Déposez votre relevé bancaire, on retrouve les prélèvements oubliés et on génère les lettres pour les arrêter. Audit complet à 19 €.",
  openGraph: {
    title: "Fantômes — Débusquez les abonnements que vous ne payez pour rien",
    description:
      "Déposez votre relevé bancaire, on retrouve les prélèvements oubliés et on génère les lettres pour les arrêter.",
    url: siteUrl,
    siteName: "Fantômes",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fantômes — Débusquez les abonnements que vous ne payez pour rien",
    description:
      "Déposez votre relevé bancaire, on retrouve les prélèvements oubliés et on génère les lettres pour les arrêter.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${fraunces.variable} ${instrument.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <footer className="border-t border-ink/10 px-6 py-10 text-sm text-ink/60">
          <div className="mx-auto max-w-3xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} Fantômes</p>
            <nav className="flex gap-5">
              <Link href="/mentions-legales" className="hover:text-ink">
                Mentions légales
              </Link>
              <Link href="/cgv" className="hover:text-ink">
                CGV
              </Link>
              <Link href="/confidentialite" className="hover:text-ink">
                Confidentialité
              </Link>
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}
