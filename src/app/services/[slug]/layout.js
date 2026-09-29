const BACKEND_URL = process.env.RAPIDTECH_API_BASE_URL || process.env.NEXT_PUBLIC_RAPIDTECH_API_BASE_URL || 'https://rapidtechpro-panel.vercel.app';
const API_KEY = process.env.NEXT_PUBLIC_RAPIDTECH_API_KEY || 'rapidtech_secret_key_2026';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  let service = null;

  try {
    const res = await fetch(`${BACKEND_URL}/api/services/slug/${slug}`, {
      headers: {
        'x-api-key': API_KEY,
        'Content-Type': 'application/json',
      },
      next: { revalidate: 60 },
    });
    if (res.ok) {
      const json = await res.json();
      service = json?.data || json;
    }
  } catch (e) {
    // fallback
  }

  const fallbackTitle = slug
    ? slug
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
    : 'Service';

  const title = service?.title || `${fallbackTitle} Services`;
  const description = service?.description
    ? service.description.split(/\n/)[0].substring(0, 160)
    : `Professional ${fallbackTitle} solutions engineered by RapidTechPro. Scalable, secure, and custom-tailored for ambitious businesses worldwide.`;
  const image = service?.icon || service?.heroImage || '/company/logo.png';

  return {
    title: `${title} — RapidTechPro`,
    description,
    alternates: {
      canonical: `https://rapidtechpro.com/services/${slug}`,
    },
    openGraph: {
      title: `${title} | RapidTechPro`,
      description,
      url: `https://rapidtechpro.com/services/${slug}`,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
      type: 'website',
    },
  };
}

export default function ServiceSlugLayout({ children }) {
  return children;
}
