export const metadata = {
  title: "Blog",
  description: "Stay updated with the latest insights, news, and technology trends from the RapidTechPro team.",
  alternates: { canonical: "https://rapidtechpro.com/blog" },
  openGraph: {
    title: "Blog | RapidTechPro",
    description: "Stay updated with the latest insights, news, and technology trends from the RapidTechPro team.",
    url: "https://rapidtechpro.com/blog",
    images: [{ url: "/company/logo.png", width: 1200, height: 630, alt: "RapidTechPro Blog" }],
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Blog | RapidTechPro", description: "Latest insights and technology trends from RapidTechPro." },
};

export default function BlogLayout({ children }) {
  return children;
}
