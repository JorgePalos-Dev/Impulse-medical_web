import "../styles/globals.css";
import { Poppins } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { I18nProvider } from "../utils/i18n";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL("https://impulsemedical.es"),
  title: {
    default:
      "Impulse Medical Service | Distribuidor oficial de Stryker España",
    template: "%s | Impulse Medical Service",
  },
  description:
    "Impulse Medical Service es el agente comercial oficial de Stryker en España. Expertos en las divisiones Endoscopy, Head & Neck, Medical y Orthopaedics. Soluciones quirúrgicas innovadoras y soporte técnico a hospitales en toda España.",
  keywords: [
    "Stryker España",
    "Impulse Medical",
    "equipos médicos quirúrgicos",
    "Endoscopia Stryker",
    "Maxilofacial Stryker",
    "Medical Surgical Equipment",
    "Orthopaedics Stryker",
    "distribuidor Stryker Madrid",
    "equipamiento hospitalario España",
  ],
  authors: [{ name: "Impulse Medical Service S.L." }],
  creator: "Impulse Medical Service S.L.",
  publisher: "Impulse Medical Service S.L.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://impulsemedical.es",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://impulsemedical.es",
    title: "Impulse Medical Service | Distribuidor oficial de Stryker España",
    description:
      "Empresa colaboradora de Stryker especializada en Endoscopia, Maxilofacial, Medical y Ortopedia. Excelencia comercial y soporte hospitalario en toda España.",
    siteName: "Impulse Medical Service",
    images: [
      {
        url: "/images/logo-impulse.jpeg",
        width: 600,
        height: 600,
        alt: "Impulse Medical Service - Stryker España",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Impulse Medical Service | Stryker España",
    description:
      "Distribuidor oficial de Stryker en España. Especialistas en Endoscopia, Maxilofacial, Medical y Ortopedia.",
    images: ["/images/logo-impulse.jpeg"],
  },
  icons: {
    icon: "/images/logo-impulse.jpeg", // ✅ favicon en pestaña
    apple: "/images/logo-impulse.jpeg", // ✅ icono para móviles
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        {/* ✅ Meta básicos */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#FFB600" />

        {/* ✅ Favicon y Apple Icon */}
        <link rel="icon" href="/images/logo-impulse.jpeg" />
        <link rel="apple-touch-icon" href="/images/logo-impulse.jpeg" />

        {/* ✅ Datos estructurados Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Impulse Medical Service S.L.",
              url: "https://impulsemedical.es",
              logo: "https://impulsemedical.es/images/logo-impulse.jpeg",
              sameAs: [
                "https://www.linkedin.com/company/impulsemedical",
                "https://www.stryker.com",
              ],
              description:
                "Distribuidor oficial de Stryker en España. Especialistas en Endoscopia, Maxilofacial, Medical y Orthopaedics.",
              foundingDate: "2015",
              founder: [
                { "@type": "Person", name: "Miguel Rubio" },
                { "@type": "Person", name: "Sonia Anaya" },
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Madrid",
                addressCountry: "ES",
              },
            }),
          }}
        />
      </head>

      <body
        className={`${poppins.className} bg-white text-neutral-900 antialiased`}
      >
        <I18nProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
