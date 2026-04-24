import "./globals.css";
import StoreProvider from "@/components/StoreProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FooterReveal from "@/components/FooterReveal";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  metadataBase: new URL("https://rapidtechpro.com"),
  title: {
    default: "RapidTechPro — Advanced Technology Solutions",
    template: "%s | RapidTechPro",
  },
  description: "RapidTechPro delivers advanced technology solutions — web development, mobile apps, UI/UX design, e-commerce, POS, and HR software for businesses worldwide.",
  icons: { icon: "/company/logo.png" },
  openGraph: {
    title: "RapidTechPro — Advanced Technology Solutions",
    description: "RapidTechPro delivers advanced technology solutions — web development, mobile apps, UI/UX design, e-commerce, POS, and HR software for businesses worldwide.",
    url: "https://rapidtechpro.com",
    siteName: "RapidTechPro",
    images: [{ url: "/company/logo.png", width: 1200, height: 630, alt: "RapidTechPro" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RapidTechPro — Advanced Technology Solutions",
    description: "RapidTechPro delivers advanced technology solutions — web development, mobile apps, UI/UX design, e-commerce, POS, and HR software.",
    images: ["/company/logo.png"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "RapidTechPro",
  url: "https://rapidtechpro.com",
  logo: "https://rapidtechpro.com/company/logo.png",
  description: "Advanced technology solutions for businesses worldwide.",
  telephone: "+923403051059",
  email: "info@rapidtechpro.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Building 11, Level 7, Bay Square, Business Bay",
    addressLocality: "Dubai",
    addressCountry: "AE",
  },
  sameAs: [
    "https://www.linkedin.com/company/rapidtechpro",
    "https://www.facebook.com/rapidtechpro",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="font-manrope antialiased text-gray-900 min-h-screen overflow-x-hidden"
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
