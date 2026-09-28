export async function generateMetadata({ params }) {
  const { slug } = await params;
  const formattedTitle = slug
    ? slug
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
    : 'Service';

  return {
    title: `${formattedTitle} Services — RapidTechPro`,
    description: `Professional ${formattedTitle} solutions engineered by RapidTechPro. Scalable, secure, and custom-tailored for ambitious businesses worldwide.`,
    alternates: {
      canonical: `https://rapidtechpro.com/services/${slug}`,
    },
    openGraph: {
      title: `${formattedTitle} Services | RapidTechPro`,
      description: `Explore custom ${formattedTitle} solutions built by RapidTechPro.`,
      url: `https://rapidtechpro.com/services/${slug}`,
      images: [{ url: '/company/logo.png', width: 1200, height: 630, alt: formattedTitle }],
      type: 'website',
    },
  };
}

export default function ServiceSlugLayout({ children }) {
  return children;
}
