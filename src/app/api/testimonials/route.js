const BACKEND_URL = 'https://rapidtechpro-panel.vercel.app';
const API_KEY = process.env.NEXT_PUBLIC_RAPIDTECH_API_KEY || 'rapidtech_secret_key_2026';

export async function GET(request) {
    try {
        const res = await fetch(`${BACKEND_URL}/api/testimonials`, {
            headers: {
                'x-api-key': API_KEY,
                'Content-Type': 'application/json',
            },
            cache: 'no-store',
        });

        if (!res.ok) {
            return new Response(JSON.stringify({ error: `Backend error: ${res.status}` }), {
                status: res.status,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        const data = await res.json();
        return new Response(JSON.stringify(data), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
                'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=120',
            },
        });
    } catch (err) {
        console.error('[/api/testimonials] Proxy error:', err);
        return new Response(JSON.stringify({ error: 'Failed to fetch testimonials' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
