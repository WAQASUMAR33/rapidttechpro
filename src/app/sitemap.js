export const dynamic = "force-static";

export default function sitemap() {
    const baseUrl = 'https://rapidtechpro.com';

    const routes = [
        '',
        '/AboutUs',
        '/Blog',
        '/Company',
        '/Company/Careers',
        '/Company/Culture-Book',
        '/Company/Events',
        '/Company/Manifesto',
        '/Company/Press-Release',
        '/Company/Privacy-Policy',
        '/Company/Process',
        '/Company/Terms-Of-Service',
        '/Company/Testimonials',
        '/ContactUs',
        '/Help',
        '/PrivacyPolicy',
        '/Services',
        '/Services/Ecommerce-Solutions',
        '/Services/HR-Solution',
        '/Services/Mobile-Apps',
        '/Services/Point-Of-Sale',
        '/Services/UIUX-Figma',
        '/Services/Web-Development',
        '/TermsAndConditions',
        '/Work',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: route === '' ? 1 : 0.8,
    }));

    return routes;
}
