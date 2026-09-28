import "./globals.css";
import StoreProvider from "@/components/StoreProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FooterReveal from "@/components/FooterReveal";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  metadataBase: new URL("https://rapidtechpro.com"),
  title: {
    default: "RapidTechPro — Custom Software, Mobile Apps & Web Development Company",
    template: "%s | RapidTechPro",
  },
  description: "RapidTechPro is a global custom software development company engineering high-performance web applications, mobile apps (iOS & Android), enterprise ERP, POS systems, and AI automation for clients across the US, UK, UAE, Europe, and Pakistan.",
  keywords: [
    "custom software development company",
    "web application development services",
    "mobile app development company",
    "iOS app development",
    "Android app development",
    "enterprise ERP software",
    "custom POS system development",
    "desktop application development",
    "UI UX design development",
    "API development and integration",
    "AI automation solutions",
    "database design and development",
    "software house in Lahore",
    "software company in Islamabad",
    "software house in Mandi Bahauddin",
    "custom software development Pakistan",
    "hire dedicated developers"
  ],
  alternates: {
    canonical: "https://rapidtechpro.com",
  },
  icons: { icon: "/company/logo.png" },
  verification: {
    google: "F3pugG7B7EPPApfvVTW2QiaSfjwb17DZ4xYPEVHZOjs",
  },
  openGraph: {
    title: "RapidTechPro — Custom Software, Mobile Apps & Web Development Company",
    description: "Engineering scalable web apps, iOS & Android mobile applications, enterprise ERP, and custom POS systems for businesses in the US, UK, UAE, Europe, and Pakistan.",
    url: "https://rapidtechpro.com",
    siteName: "RapidTechPro",
    images: [{ url: "/company/logo.png", width: 1200, height: 630, alt: "RapidTechPro Software Development" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RapidTechPro — Custom Software, Mobile Apps & Web Development",
    description: "Full-cycle custom software, mobile apps (iOS/Android), ERP, POS, and AI solutions for startups and enterprises worldwide.",
    images: ["/company/logo.png"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": "https://rapidtechpro.com/#organization",
      "name": "RapidTechPro",
      "url": "https://rapidtechpro.com",
      "logo": "https://rapidtechpro.com/company/logo.png",
      "description": "Global custom software development company delivering web applications, mobile apps (iOS & Android), enterprise ERP, POS, and AI automation solutions.",
      "telephone": "+923403051059",
      "email": "info@rapidtechpro.com",
      "priceRange": "$$",
      "address": [
        {
          "@type": "PostalAddress",
          "streetAddress": "Building 11, Level 7, Bay Square, Business Bay",
          "addressLocality": "Dubai",
          "postalCode": "23304",
          "addressCountry": "AE"
        },
        {
          "@type": "PostalAddress",
          "streetAddress": "54C, Phalia Road, Punjab Center",
          "addressLocality": "Mandi Bahauddin",
          "addressRegion": "Punjab",
          "postalCode": "75400",
          "addressCountry": "PK"
        }
      ],
      "areaServed": [
        { "@type": "Country", "name": "United States" },
        { "@type": "Country", "name": "United Kingdom" },
        { "@type": "Country", "name": "United Arab Emirates" },
        { "@type": "Country", "name": "Saudi Arabia" },
        { "@type": "Country", "name": "Germany" },
        { "@type": "Country", "name": "France" },
        { "@type": "Country", "name": "Spain" },
        { "@type": "Country", "name": "Italy" },
        { "@type": "Country", "name": "Mexico" },
        {
          "@type": "AdministrativeArea",
          "name": "Pakistan",
          "containsPlace": [
            { "@type": "City", "name": "Lahore" },
            { "@type": "City", "name": "Islamabad" },
            { "@type": "City", "name": "Mandi Bahauddin" }
          ]
        }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Software Development Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Web App Development" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mobile Application Development (iOS & Android)" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Enterprise ERP Development" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Point of Sale (POS) Systems" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "System Design & Desktop Applications" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "UI/UX Product Design" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "API Development & Integration" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI Automation & System Optimization" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Database Architecture & Optimization" } }
        ]
      },
      "sameAs": [
        "https://www.linkedin.com/company/rapidtechpro",
        "https://www.facebook.com/rapidtechpro",
        "https://www.instagram.com/rapidtechpro",
        "https://x.com/rapidtechpro"
      ]
    }
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="font-manrope antialiased text-gray-900 min-h-screen overflow-x-clip"
        suppressHydrationWarning
      >
        <JsonLd data={organizationSchema} />
        <StoreProvider>
          <FooterReveal footer={<Footer />}>
            <Header />
            {children}
          </FooterReveal>
        </StoreProvider>
      </body>
    </html>
  );
}
