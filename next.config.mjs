/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '3001',
                pathname: '/uploads/**',
            },
            {
                protocol: 'https',
                hostname: 'rapidtechpro-panel.vercel.app',
                pathname: '/uploads/**',
            },
        ],
    },
    async redirects() {
        return [
            // www → non-www
            {
                source: '/:path*',
                has: [{ type: 'host', value: 'www.rapidtechpro.com' }],
                destination: 'https://rapidtechpro.com/:path*',
                permanent: true,
            },
            // Legacy URL redirects for old paths that genuinely changed
            { source: '/index.html', destination: '/', permanent: true },
            { source: '/privacy-policy', destination: '/company/privacy-policy', permanent: true },
            { source: '/terms-and-conditions', destination: '/company/terms-of-service', permanent: true },
        ];
    },
    async rewrites() {
        return [
            {
                // Proxies /api/proxy/api/projects -> https://rapidtechpro-panel.vercel.app/api/projects
                source: '/api/proxy/api/:path*',
                destination: 'https://rapidtechpro-panel.vercel.app/api/:path*',
            },
            {
                // Proxies /api/proxy/uploads/img.png -> https://rapidtechpro-panel.vercel.app/uploads/img.png
                source: '/api/proxy/uploads/:path*',
                destination: 'https://rapidtechpro-panel.vercel.app/uploads/:path*',
            },
        ];
    },
};

export default nextConfig;
