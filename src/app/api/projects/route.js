const BACKEND_URL = 'https://rapidtechpro-panel.vercel.app';
const API_KEY = process.env.NEXT_PUBLIC_RAPIDTECH_API_KEY || 'rapidtech_secret_key_2026';

export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const queryString = searchParams.toString();
        const targetUrl = `${BACKEND_URL}/api/projects${queryString ? `?${queryString}` : ''}`;

        const res = await fetch(targetUrl, {
            headers: {
                'x-api-key': API_KEY,
                'Content-Type': 'application/json',
            },
            cache: 'no-store',
        });

        const responseBody = await res.text();

        if (!res.ok) {
            console.error(`[/api/projects] Backend error ${res.status}:`, responseBody.substring(0, 200));
            return new Response(responseBody, {
                status: res.status,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        return new Response(responseBody, {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
                'Cache-Control': 'public, s-maxage=30, stale-while-revalidate=60',
            },
        });
    } catch (err) {
        console.error('[/api/projects] Proxy error:', err);
        return new Response(
            JSON.stringify({ success: false, message: `Failed to fetch projects: ${err.message}` }),
            {
                status: 500,
                headers: { 'Content-Type': 'application/json' },
            }
        );
    }
}
