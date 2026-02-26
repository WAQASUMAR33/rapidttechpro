export const dynamic = "force-static";

export default function robots() {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: '/private/', // Keep as placeholder for any future private pages
            },
        ],
        sitemap: 'https://rapidtechpro.com/sitemap.xml',
    }
}
