const BACKEND_URL = 'https://rapidtechpro-panel.vercel.app';
const API_KEY = process.env.NEXT_PUBLIC_RAPIDTECH_API_KEY || 'rapidtech_secret_key_2026';

async function handler(request, { params }) {
    const { path } = await params;
    const pathStr = Array.isArray(path) ? path.join('/') : path;

    // Forward query params
    const { searchParams } = new URL(request.url);
    const queryString = searchParams.toString();
    const targetUrl = `${BACKEND_URL}/${pathStr}${queryString ? `?${queryString}` : ''}`;

    try {
        const headers = {
            'x-api-key': API_KEY,
            'Content-Type': 'application/json',
        };

        const fetchOptions = {
            method: request.method,
            headers,
            cache: 'no-store',
        };

        // Forward body for POST/PUT/PATCH
        if (['POST', 'PUT', 'PATCH'].includes(request.method)) {
            const body = await request.text();
            if (body) fetchOptions.body = body;
        }

        const res = await fetch(targetUrl, fetchOptions);

        const responseBody = await res.text();

        return new Response(responseBody, {
            status: res.status,
            headers: {
                'Content-Type': res.headers.get('Content-Type') || 'application/json',
                'Cache-Control': 'public, s-maxage=30, stale-while-revalidate=60',
            },
        });
    } catch (err) {
        console.error(`[/api/proxy/${pathStr}] Proxy error:`, err);
        return new Response(
            JSON.stringify({ success: false, message: `Proxy error: ${err.message}` }),
            {
                status: 500,
                headers: { 'Content-Type': 'application/json' },
            }
        );
    }
}

export const GET = handler;
export const POST = handler;
export const PUT = handler;
export const DELETE = handler;
export const PATCH = handler;
