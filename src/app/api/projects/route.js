const BACKEND_URL = 'https://rapidtechpro-panel.vercel.app';
const API_KEY = process.env.NEXT_PUBLIC_RAPIDTECH_API_KEY || 'rapidtech_secret_key_2026';

export const revalidate = 300; // cache at the Next.js layer for 5 minutes

export async function GET(request) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000); // 10s server-side timeout

    try {
        const { searchParams } = new URL(request.url);
        const queryString = searchParams.toString();
        const targetUrl = `${BACKEND_URL}/api/projects${queryString ? `?${queryString}` : ''}`;

        const res = await fetch(targetUrl, {
            headers: {
                'x-api-key': API_KEY,
                'Content-Type': 'application/json',
            },
            next: { revalidate: 300 }, // Next.js fetch cache — reuse warm response for 5 min
            signal: controller.signal,
        });
        clearTimeout(timeout);

        const responseBody = await res.text();

        if (!res.ok) {
            console.error(`[/api/projects] Backend error ${res.status}:`, responseBody.substring(0, 200));
            return new Response(JSON.stringify({ success: false, data: [] }), {
                status: 200, // return 200 with empty data so the UI degrades gracefully
                headers: { 'Content-Type': 'application/json' },
            });
        }

        return new Response(responseBody, {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
                'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
            },
        });
    } catch (err) {
        clearTimeout(timeout);
        const isTimeout = err.name === 'AbortError';
        console.error('[/api/projects] Proxy error:', isTimeout ? 'timeout' : err.message);
        return new Response(
            JSON.stringify({ success: false, data: [], message: isTimeout ? 'Backend timeout' : err.message }),
            {
                status: 200, // return 200 with empty data so the UI degrades gracefully
                headers: { 'Content-Type': 'application/json' },
            }
        );
    }
}
