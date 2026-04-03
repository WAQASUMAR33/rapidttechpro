export default function sitemap() {
  const baseUrl = "https://rapidtechpro.com";

  const routes = [
    "",
    "/AboutUs",
    "/Blog",
    "/Company",
    "/Company/Careers",
    "/Company/Culture-Book",
    "/Company/Events",
    "/Company/Manifesto",
    "/Company/Press-Release",
    "/Company/Privacy-Policy",
    "/Company/Process",
    "/Company/Terms-Of-Service",
    "/Company/Testimonials",
    "/ContactUs",
    "/Help",
    "/PrivacyPolicy",
    "/Services",
    "/Services/Ecommerce-Solutions",
    "/Services/HR-Solution",
    "/Services/Mobile-Apps",
    "/Services/Point-Of-Sale",
    "/Services/UIUX-Figma",
    "/Services/Web-Development",
    "/TermsAndConditions",
    "/Work",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
