import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { company } from "@/content/site";
import "./globals.css";

const bricolage = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-bricolage" });
const instrument = Instrument_Sans({ subsets: ["latin"], variable: "--font-instrument" });

const description =
  "Nigat Fanawi Trading PLC is an Addis Ababa company in construction and contracting, electric and hybrid vehicle imports, and Ethiopian agricultural exports.";

export const metadata: Metadata = {
  metadataBase: new URL(company.url),
  title: { default: `${company.name} | ${company.tagline}`, template: `%s | ${company.shortName}` },
  description,
  openGraph: { type: "website", siteName: company.name, locale: "en", description },
};

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: company.name,
  url: company.url,
  logo: `${company.url}/images/logo-mark.png`,
  email: company.email,
  foundingDate: String(company.established),
  address: {
    "@type": "PostalAddress",
    streetAddress: `${company.address.line1}, ${company.address.line2}`,
    addressLocality: company.address.city,
    addressCountry: "ET",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${bricolage.variable} ${instrument.variable}`}>
      <body className="flex min-h-dvh flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-white"
        >
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
        />
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
