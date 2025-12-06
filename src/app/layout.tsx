import type { Metadata } from "next";
import { Forum, Inter } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";

const forum = Forum({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-forum',
  preload: true,
});

const inter = Inter({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://pizzata.com'),
  title: {
    default: "Pizzata - Authentic Italian Pizza | Born in Napoli, Baked in Nitra",
    template: "%s | Pizzata"
  },
  description: "Experience authentic Italian pizza at Pizzata. Born in Napoli, baked in Nitra. Discover our exceptional menu featuring traditional pizzas, fresh salads, and premium beverages. Reserve your table today.",
  keywords: ["Italian pizza", "authentic pizza", "Napoli pizza", "Nitra restaurant", "Italian restaurant", "pizza delivery", "wood-fired pizza", "traditional Italian food"],
  authors: [{ name: "Pizzata" }],
  creator: "Pizzata",
  publisher: "Pizzata",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Pizzata",
    title: "Pizzata - Authentic Italian Pizza | Born in Napoli, Baked in Nitra",
    description: "Experience authentic Italian pizza at Pizzata. Born in Napoli, baked in Nitra. Discover our exceptional menu featuring traditional pizzas, fresh salads, and premium beverages.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pizzata - Authentic Italian Pizza",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pizzata - Authentic Italian Pizza",
    description: "Born in Napoli, baked in Nitra. Experience authentic Italian pizza.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${forum.variable} ${inter.variable}`}>
      <body className="antialiased">
        <StructuredData />
        {children}
      </body>
    </html>
  );
}

