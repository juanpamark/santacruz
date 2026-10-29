import type { Metadata } from "next";
import "./globals.css";
import { VENUE_INFO } from "@/constants/venue";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/layout/CartDrawer";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";

export const metadata: Metadata = {
  metadataBase: new URL("https://santacruzrestaurante.com"),
  title: "Santa Cruz Restaurante | Almuerzos Caseros, Ejecutivos y Eventos en Bogotá",
  description:
    "Descubre Santa Cruz Restaurante en Engativá, Bogotá. Almuerzos caseros diarios, platos ejecutivos al carbón, salón de doble altura y segundo piso exclusivo para eventos privados.",
  keywords: [
    "Santa Cruz Restaurante",
    "Restaurante Engativa Bogota",
    "Almuerzos caseros Bogota",
    "Platos ejecutivos Engativa",
    "Eventos privados Bogota",
    "Salon doble altura eventos",
    "Santa Cruz Bogota",
    "Restaurante Alamos Bogota",
  ],
  icons: {
    icon: VENUE_INFO.officialLogoUrl,
    shortcut: VENUE_INFO.officialLogoUrl,
    apple: VENUE_INFO.officialLogoUrl,
  },
  openGraph: {
    title: "Santa Cruz Restaurante | Tradición y Confort en Bogotá",
    description: "Almuerzos caseros de tradición, platos ejecutivos y salón exclusivo para eventos en Engativá.",
    url: "https://santacruzrestaurante.com",
    siteName: "Santa Cruz Restaurante",
    images: [
      {
        url: VENUE_INFO.officialLogoUrl,
        width: 800,
        height: 800,
        alt: "Logo Santa Cruz Restaurante",
      },
    ],
    locale: "es_CO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: VENUE_INFO.name,
    image: VENUE_INFO.officialLogoUrl,
    address: {
      "@type": "PostalAddress",
      streetAddress: VENUE_INFO.address,
      addressLocality: "Engativá, Bogotá",
      addressRegion: "Bogotá D.C.",
      addressCountry: "CO",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "4.7042",
      longitude: "-74.1165",
    },
    telephone: VENUE_INFO.deliveryPhone,
    hasMap: VENUE_INFO.mapsUrl,
    servesCuisine: "Colombiana Tradicional, Almuerzos Caseros, Cortes al Carbón",
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "11:30",
        closes: "17:00",
      },
    ],
  };

  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#121212] text-[#F5F2EB] antialiased selection:bg-brand-gold selection:text-brand-dark">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CartDrawer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
