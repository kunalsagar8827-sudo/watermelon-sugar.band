import { Playfair_Display, Caveat, Manrope } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["500", "600", "700", "800", "900"],
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  weight: ["500", "600", "700"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
});

const SITE_URL = "https://watermelonsugar.band";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Watermelon Sugar Band | Auditions Open — Meerut, India",
    template: "%s | Watermelon Sugar Band",
  },
  description:
    "Watermelon Sugar is a new K-pop inspired live band forming in India with a dream to perform in Korea. Auditions open October 2026 for vocalists, guitarists, bassists, drummers, keyboardists, managers and content creators. Apply now.",
  keywords: [
    "Watermelon Sugar Band",
    "K-pop band India",
    "band auditions India",
    "Meerut band auditions",
    "vocalist audition India",
    "guitarist audition",
    "drummer audition",
    "Korean band India",
    "join a band India 2026",
  ],
  authors: [{ name: "Watermelon Sugar Band" }],
  category: "Music",
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: "Watermelon Sugar Band | Auditions Open",
    description:
      "A new K-pop inspired live band forming in India, dreaming of the Korea stage. Auditions open October 2026 — vocals, guitar, bass, drums, keys, management, content.",
    url: SITE_URL,
    siteName: "Watermelon Sugar Band",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-cover.jpg",
        width: 1200,
        height: 1500,
        alt: "Watermelon Sugar Band — Auditions Open",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Watermelon Sugar Band | Auditions Open",
    description:
      "A new K-pop inspired live band forming in India, dreaming of the Korea stage. Auditions open October 2026.",
    images: ["/og-cover.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MusicGroup",
    name: "Watermelon Sugar",
    url: SITE_URL,
    genre: ["K-pop", "Pop Rock"],
    foundingLocation: {
      "@type": "Place",
      name: "Meerut, Uttar Pradesh, India",
    },
    foundingDate: "2025",
    telephone: "+91-8882767450",
    sameAs: [],
    description:
      "A K-pop inspired live band forming in India, holding auditions in October 2026 for vocalists, guitarists, bassists, drummers, keyboardists, managers and content creators.",
  };

  return (
    <html lang="en" className={`${playfair.variable} ${caveat.variable} ${manrope.variable}`}>
      <body className="font-body bg-night text-cream antialiased">
        <div className="grain" />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
