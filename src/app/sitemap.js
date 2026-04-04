export default function sitemap() {
  const baseUrl = "https://rapidtechpro.com";

  const routes = [
    "",
    "/about-us",
    "/blog",
    "/company",
    "/company/careers",
    "/company/culture-book",
    "/company/events",
    "/company/manifesto",
    "/company/press-release",
    "/company/privacy-policy",
    "/company/process",
    "/company/terms-of-service",
    "/company/testimonials",
    "/contact-us",
    "/help",
    "/privacy-policy",
    "/services",
    "/services/ecommerce-solutions",
    "/services/hr-solution",
    "/services/mobile-apps",
    "/services/point-of-sale",
    "/services/uiux-figma",
    "/services/web-development",
    "/terms-and-conditions",
    "/work",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: route === "" ? 1 : 0.8,
  }));
}
