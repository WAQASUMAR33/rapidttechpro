export const metadata = {
  title: "Company",
  description: "Discover RapidTechPro as a company — our culture, values, team, and what drives us to deliver excellent technology.",
  alternates: { canonical: "https://rapidtechpro.com/company" },
  openGraph: {
    title: "Company | RapidTechPro",
    description: "Discover RapidTechPro as a company — our culture, values, team, and what drives us to deliver excellent technology.",
    url: "https://rapidtechpro.com/company",
    images: [{ url: "/company/logo.png", width: 1200, height: 630, alt: "RapidTechPro Company" }],
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Company | RapidTechPro", description: "Discover RapidTechPro — our culture, values, and team." },
};

export default function CompanyLayout({ children }) {
  return children;
}
