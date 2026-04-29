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
            // Legacy static file
            { source: '/index.html', destination: '/', permanent: true },
            // Old capitalized URLs → canonical lowercase URLs
            { source: '/AboutUs', destination: '/about-us', permanent: true },
            { source: '/Blog', destination: '/blog', permanent: true },
            { source: '/ContactUs', destination: '/contact-us', permanent: true },
            { source: '/Help', destination: '/help', permanent: true },
            // Privacy/Terms: point directly to canonical company pages (avoids redirect chains)
            { source: '/PrivacyPolicy', destination: '/company/privacy-policy', permanent: true },
            { source: '/privacy-policy', destination: '/company/privacy-policy', permanent: true },
            { source: '/TermsAndConditions', destination: '/company/terms-of-service', permanent: true },
            { source: '/terms-and-conditions', destination: '/company/terms-of-service', permanent: true },
            { source: '/Work', destination: '/work', permanent: true },
            { source: '/Work/:path*', destination: '/work/:path*', permanent: true },
            { source: '/Services', destination: '/services', permanent: true },
            // Uppercase-S service redirects
            { source: '/Services/Ecommerce-Solutions', destination: '/services/ecommerce-solutions', permanent: true },
            { source: '/Services/HR-Solution', destination: '/services/hr-solution', permanent: true },
            { source: '/Services/Mobile-Apps', destination: '/services/mobile-apps', permanent: true },
            { source: '/Services/Point-Of-Sale', destination: '/services/point-of-sale', permanent: true },
            { source: '/Services/UIUX-Figma', destination: '/services/uiux-figma', permanent: true },
            { source: '/Services/Web-Development', destination: '/services/web-development', permanent: true },
            // Lowercase-s service redirects (old mixed-case slugs from nav/footer)
            { source: '/services/Ecommerce-Solutions', destination: '/services/ecommerce-solutions', permanent: true },
            { source: '/services/HR-Solution', destination: '/services/hr-solution', permanent: true },
            { source: '/services/Mobile-Apps', destination: '/services/mobile-apps', permanent: true },
            { source: '/services/Point-Of-Sale', destination: '/services/point-of-sale', permanent: true },
            { source: '/services/UIUX-Figma', destination: '/services/uiux-figma', permanent: true },
            { source: '/services/Web-Development', destination: '/services/web-development', permanent: true },
            { source: '/Services/:path*', destination: '/services/:path*', permanent: true },
            { source: '/Company', destination: '/company', permanent: true },
            { source: '/Company/Careers', destination: '/company/careers', permanent: true },
            { source: '/Company/Culture-Book', destination: '/company/culture-book', permanent: true },
            { source: '/Company/Events', destination: '/company/events', permanent: true },
            { source: '/Company/Manifesto', destination: '/company/manifesto', permanent: true },
            { source: '/Company/Press-Release', destination: '/company/press-release', permanent: true },
            { source: '/Company/Privacy-Policy', destination: '/company/privacy-policy', permanent: true },
            { source: '/Company/Process', destination: '/company/process', permanent: true },
            { source: '/Company/Terms-Of-Service', destination: '/company/terms-of-service', permanent: true },
            { source: '/Company/Testimonials', destination: '/company/testimonials', permanent: true },
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
