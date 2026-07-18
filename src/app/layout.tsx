import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { AccessibilityWidget } from "@/components/AccessibilityWidget";
import { CookieBanner } from "@/components/CookieBanner";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Cookie-Consent-Banner ist standardmäßig AUS: die Seite setzt keine nicht-notwendigen
// Cookies, lädt keine Dritt-Tracker, hostet Schriften lokal und bindet keine
// Cookie-Embeds ein (§ 25 TDDDG greift nicht → kein Banner nötig).
// REAKTIVIEREN: sobald ein einwilligungspflichtiges Feature eingebaut wird
// (echtes Google-Maps-iframe, Analytics/GTM, Meta-Pixel, reCAPTCHA), diese Konstante
// auf true setzen — der Banner erscheint dann wieder und das Feature MUSS bis zur
// Einwilligung geblockt bleiben (Opt-in). Der CookieBanner bleibt dafür im Repo.
const COOKIE_CONSENT_REQUIRED: boolean = false;

export const metadata: Metadata = {
  title: "KFZ-Meisterbetrieb Krause | Kfz-Werkstatt in Hamburg",
  description: "KFZ-Meisterbetrieb Krause in Hamburg — Ihr Experte für  und mehr. Jetzt Termin vereinbaren!",
  openGraph: {
    title: "KFZ-Meisterbetrieb Krause | Kfz-Werkstatt in Hamburg",
    description: "KFZ-Meisterbetrieb Krause in Hamburg — Ihr Experte für  und mehr. Jetzt Termin vereinbaren!",
    type: "website",
    locale: "de_DE",
  },
  twitter: {
    card: "summary_large_image",
    title: "KFZ-Meisterbetrieb Krause | Kfz-Werkstatt in Hamburg",
    description: "KFZ-Meisterbetrieb Krause in Hamburg — Ihr Experte für  und mehr. Jetzt Termin vereinbaren!",
  },

};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className={`${geistSans.variable} h-full scroll-smooth`}>
      <body className="min-h-full bg-brand-bg text-brand-text antialiased">
        <a href="#main-content" className="skip-link">
          Zum Hauptinhalt springen
        </a>
        {children}
        <AccessibilityWidget />
        {COOKIE_CONSENT_REQUIRED && <CookieBanner />}
        <WhatsAppButton />
      </body>
    </html>
  );
}
