import JsonLd from "@/components/JsonLd";

export const metadata = {
  title: "Contact Us",
  description: "Get in touch with RapidTechPro. We're ready to discuss your project and provide the right technology solutions.",
  alternates: { canonical: "https://rapidtechpro.com/contact-us" },
  openGraph: {
    title: "Contact Us | RapidTechPro",
    description: "Get in touch with RapidTechPro. We're ready to discuss your project and provide the right technology solutions.",
    url: "https://rapidtechpro.com/contact-us",
    images: [{ url: "/company/logo.png", width: 1200, height: 630, alt: "Contact RapidTechPro" }],
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Contact Us | RapidTechPro", description: "Get in touch with RapidTechPro for your technology needs." },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact RapidTechPro",
  url: "https://rapidtechpro.com/contact-us",
  description: "Contact RapidTechPro to discuss your technology project.",
  mainEntity: {
    "@type": "Organization",
    name: "RapidTechPro",
    telephone: "+923403051059",
    email: "info@rapidtechpro.com",
    url: "https://rapidtechpro.com",
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
