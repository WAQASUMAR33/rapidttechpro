import ServiceDetailClient from './ServiceDetailClient';

const BACKEND_URL = process.env.RAPIDTECH_API_BASE_URL || process.env.NEXT_PUBLIC_RAPIDTECH_API_BASE_URL || 'https://rapidtechpro-panel.vercel.app';
const API_KEY = process.env.NEXT_PUBLIC_RAPIDTECH_API_KEY || 'rapidtech_secret_key_2026';

async function getService(slug) {
  try {
    const res = await fetch(`${BACKEND_URL}/api/services/slug/${slug}`, {
      headers: {
        'x-api-key': API_KEY,
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    });

    if (!res.ok) {
      console.warn(`[getService] Service not found for slug: ${slug}, status: ${res.status}`);
      return null;
    }

    const data = await res.json();
    return data?.data || data;
  } catch (err) {
    console.error(`[getService] Fetch error for slug ${slug}:`, err);
    return null;
  }
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = await getService(slug);

  return <ServiceDetailClient initialService={service} slug={slug} />;
}
