const BACKEND_URL = process.env.RAPIDTECH_API_BASE_URL || process.env.NEXT_PUBLIC_RAPIDTECH_API_BASE_URL || 'https://rapidtechpro-panel.vercel.app';
const API_KEY = process.env.NEXT_PUBLIC_RAPIDTECH_API_KEY || 'rapidtech_secret_key_2026';

const LOCAL_FALLBACK_URLS = ['http://localhost:3000', 'http://localhost:3001'];

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
        };

        const fetchOptions = {
            method: request.method,
            headers,
            cache: 'no-store',
        };

        // Forward body for POST/PUT/PATCH
        if (['POST', 'PUT', 'PATCH'].includes(request.method)) {
            headers['Content-Type'] = request.headers.get('Content-Type') || 'application/json';
            const body = await request.text();
            if (body) fetchOptions.body = body;
        }

        let res = await fetch(targetUrl, fetchOptions);

        // If upload image returns 404 from remote, try local dev servers
        if (!res.ok && pathStr.startsWith('uploads/')) {
            for (const localBase of LOCAL_FALLBACK_URLS) {
                try {
                    const localUrl = `${localBase}/${pathStr}${queryString ? `?${queryString}` : ''}`;
                    const localRes = await fetch(localUrl, { cache: 'no-store' });
                    if (localRes.ok) {
                        res = localRes;
                        break;
                    }
                } catch (e) {
                    // Ignore local connection errors
                }
            }
        }

        const contentType = res.headers.get('Content-Type') || 'application/octet-stream';
        const buffer = await res.arrayBuffer();

        return new Response(buffer, {
            status: res.status,
            headers: {
                'Content-Type': contentType,
                'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=120',
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
