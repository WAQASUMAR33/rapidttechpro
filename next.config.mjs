/** @type {import('next').NextConfig} */
const nextConfig = {
    // Removed output: 'export' to enable full Next.js features like Image Optimization on Vercel
    images: {
        formats: ['image/avif', 'image/webp'],
    },
    experimental: {
        optimizePackageImports: ['react-icons', 'framer-motion', 'gsap'],
    },
};

export default nextConfig;
