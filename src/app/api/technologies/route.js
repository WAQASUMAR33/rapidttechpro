const BACKEND_URL = process.env.RAPIDTECH_API_BASE_URL || process.env.NEXT_PUBLIC_RAPIDTECH_API_BASE_URL || 'https://rapidtechpro-panel.vercel.app';
const API_KEY = process.env.NEXT_PUBLIC_RAPIDTECH_API_KEY || 'rapidtech_secret_key_2026';
const LOCAL_FALLBACKS = ['http://localhost:3001', 'http://localhost:3000', 'https://panel.rapidtechpro.com'];

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const queryString = searchParams.toString();
    const targetBases = [BACKEND_URL, ...LOCAL_FALLBACKS];

    for (const base of targetBases) {
        try {
            const targetUrl = `${base}/api/technologies${queryString ? `?${queryString}` : ''}`;
            const res = await fetch(targetUrl, {
                headers: {
                    'x-api-key': API_KEY,
                    'Content-Type': 'application/json',
                },
                cache: 'no-store',
            });

            if (res.ok) {
                const data = await res.json();
                return new Response(JSON.stringify(data), {
                    status: 200,
                    headers: {
                        'Content-Type': 'application/json',
                        'Cache-Control': 'public, s-maxage=30, stale-while-revalidate=60',
                    },
                });
            }
        } catch (err) {
            // Try next fallback
        }
    }

    return new Response(
        JSON.stringify({ success: false, data: [] }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
}
