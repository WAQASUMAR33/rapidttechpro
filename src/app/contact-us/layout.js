import JsonLd from "@/components/JsonLd";

export const metadata = {
  title: "Contact Us — Schedule a Free Software Architecture Consultation",
  description: "Connect with RapidTechPro's software consultants. Discuss your web app, mobile app, ERP, or AI automation project. Responsive client support across USA, UK, UAE, and Pakistan.",
  keywords: [
    "contact RapidTechPro",
    "hire software developers",
    "book software consultation",
    "custom software development company contact",
    "software house in Lahore contact",
    "software company in Mandi Bahauddin",
    "software agency Dubai contact"
  ],
  alternates: { canonical: "/contact-us" },
  openGraph: {
    title: "Contact Us — Schedule a Free Software Architecture Consultation | RapidTechPro",
    description: "Get in touch with RapidTechPro. Offices in Dubai, UAE and Pakistan serving global clients.",
    url: "/contact-us",
    images: [{ url: "/company/logo.png", width: 1200, height: 630, alt: "Contact RapidTechPro" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact RapidTechPro | Software Consultation",
    description: "Discuss your project with our engineering leaders today.",
  },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact RapidTechPro",
  url: "https://rapidtechpro.com/contact-us",
  description: "Connect with RapidTechPro for custom software development, mobile apps, and enterprise solutions.",
  mainEntity: {
    "@type": "Organization",
    name: "RapidTechPro",
    telephone: "+92 340 3051059",
    email: "info@rapidtechpro.com",
    url: "https://rapidtechpro.com",
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: "Building 11, Level 7, Bay Square, Business Bay",
        addressLocality: "Dubai",
        postalCode: "23304",
        addressCountry: "AE"
      },
      {
        "@type": "PostalAddress",
        streetAddress: "54C, Phalia Road, Punjab Center",
        addressLocality: "Mandi Bahauddin",
        addressRegion: "Punjab",
        postalCode: "75400",
        addressCountry: "PK"
      }
    ]
  },
};

export default function ContactUsLayout({ children }) {
  return (
    <>
      <JsonLd data={contactSchema} />
      {children}
    </>
  );
}
