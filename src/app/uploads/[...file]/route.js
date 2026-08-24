const BACKEND_URL = process.env.RAPIDTECH_API_BASE_URL || process.env.NEXT_PUBLIC_RAPIDTECH_API_BASE_URL || 'https://rapidtechpro-panel.vercel.app';
const LOCAL_FALLBACK_URLS = ['http://localhost:3000', 'http://localhost:3001'];

export async function GET(request, { params }) {
    const { file } = await params;
    const filePath = Array.isArray(file) ? file.join('/') : file;
    const relativePath = `uploads/${filePath}`;

    const { searchParams } = new URL(request.url);
    const queryString = searchParams.toString();

    const urlsToTry = [
        `${BACKEND_URL}/${relativePath}${queryString ? `?${queryString}` : ''}`,
        ...LOCAL_FALLBACK_URLS.map((base) => `${base}/${relativePath}${queryString ? `?${queryString}` : ''}`),
    ];

    for (const url of urlsToTry) {
        try {
            const res = await fetch(url, { cache: 'no-store' });
            if (res.ok) {
                const buffer = await res.arrayBuffer();
                return new Response(buffer, {
                    status: 200,
                    headers: {
                        'Content-Type': res.headers.get('Content-Type') || 'application/octet-stream',
                        'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=120',
                    },
                });
            }
        } catch (e) {
            // continue
        }
    }

    return new Response('Not Found', { status: 404 });
}
