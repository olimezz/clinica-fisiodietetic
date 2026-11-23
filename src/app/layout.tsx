import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0F766E",
};

export const metadata: Metadata = {
  title:
    "Clínica FisioDietetic València (Sede Jesús) | Fisioterapia, Osteopatía, Nutrición, Podología y Láser",
  description:
    "Centro Sanitario Autorizado Reg. 21951 en C/ Jesús, 114 (València) y Alboraya. Fisioterapeutas y Podólogo colegiados, Osteopatía C.O., Nutrición con comida real sin batidos, Pilates Terapéutico y Depilación Láser Diodo sin bonos.",
  keywords: [
    "Fisioterapia Valencia Jesús",
    "Osteopatía Valencia",
    "Nutricionista Valencia comida real",
    "Podólogo Valencia plantillas",
    "Depilación Láser Diodo Valencia sin bonos",
    "Pilates Terapéutico Valencia",
    "Drenaje Linfático Manual Valencia",
    "Clínica FisioDietetic",
  ],
  authors: [{ name: "Clínica FisioDietetic — Centro Sanitario Reg. 21951" }],
  openGraph: {
    title: "Clínica FisioDietetic — Sede Jesús (València) & Alboraya",
    description:
      "Equipo de profesionales sanitarios colegiados. Fisioterapia, Osteopatía, Nutrición con comida real, Podología y Láser Diodo sin bonos. 90% recomendados por el boca a boca.",
    locale: "es_ES",
    type: "website",
    siteName: "Clínica FisioDietetic",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const medicalClinicJsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: "Clínica FisioDietetic — Sede Jesús (València)",
    identifier: "Registro Sanitario GVA N.º 21951",
    url: "https://fisiodietetic.com",
    telephone: "+34623025258",
    email: "info@fisiodietetic.com",
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      streetAddress: "C/ Jesús, 114",
      addressLocality: "València",
      postalCode: "46007",
      addressRegion: "Valencia",
      addressCountry: "ES",
    },
    department: [
      {
        "@type": "MedicalClinic",
        name: "Clínica FisioDietetic Alboraya",
        telephone: "+34654252244",
        address: {
          "@type": "PostalAddress",
          streetAddress: "C/ Pintor Peris Aragó, 26",
          addressLocality: "Alboraya",
          postalCode: "46120",
          addressRegion: "Valencia",
          addressCountry: "ES",
        },
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.5",
      bestRating: "5",
      ratingCount: "120",
    },
    medicalSpecialty: [
      "Physiotherapy",
      "Osteopathic",
      "DietNutrition",
      "Podiatric",
    ],
  };

  return (
    <html lang="es-ES">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalClinicJsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-background text-ink antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2.5 focus:rounded-xl focus:bg-primary focus:text-white focus:font-bold"
        >
          Saltar al contenido principal
        </a>
        {children}
      </body>
    </html>
  );
}
