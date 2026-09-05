const baseUrl = "https://rapidtechpro.com";

// Server-side only — talk to the backend directly, no need for /api/proxy.
const BACKEND_URL =
  process.env.RAPIDTECH_API_BASE_URL ||
  process.env.NEXT_PUBLIC_RAPIDTECH_API_BASE_URL ||
  "https://rapidtechpro-panel.vercel.app";
const API_KEY =
  process.env.RAPIDTECH_API_KEY ||
  process.env.NEXT_PUBLIC_RAPIDTECH_API_KEY ||
  "rapidtech_secret_key_2026";

// Re-generate hourly so new projects/services appear without a redeploy.
export const revalidate = 3600;

// Static routes carry no lastModified on purpose. We have no truthful value for
// them, and stamping `new Date()` every build tells crawlers the whole site
// changed on every deploy, which devalues the freshness signal for the dynamic
// pages below — where the dates are real.
const staticRoutes = [
  ["", 1.0, "weekly"],
  ["/services", 0.9, "weekly"],
  ["/work", 0.9, "weekly"],
  ["/about-us", 0.8, "monthly"],
  ["/contact-us", 0.8, "monthly"],
  ["/blog", 0.8, "weekly"],
  ["/services/ecommerce-solutions", 0.8, "monthly"],
  ["/services/hr-solution", 0.8, "monthly"],
  ["/services/mobile-apps", 0.8, "monthly"],
  ["/services/point-of-sale", 0.8, "monthly"],
  ["/services/uiux-figma", 0.8, "monthly"],
  ["/services/web-development", 0.8, "monthly"],
  ["/company", 0.6, "monthly"],
  ["/company/careers", 0.6, "weekly"],
  ["/company/culture-book", 0.5, "yearly"],
  ["/company/events", 0.5, "monthly"],
  ["/company/manifesto", 0.5, "yearly"],
  ["/company/press-release", 0.5, "monthly"],
  ["/company/process", 0.5, "yearly"],
  ["/company/testimonials", 0.6, "monthly"],
  ["/help", 0.5, "monthly"],
  ["/company/privacy-policy", 0.3, "yearly"],
  ["/company/terms-of-service", 0.3, "yearly"],
  ["/privacy-policy", 0.3, "yearly"],
  ["/terms-and-conditions", 0.3, "yearly"],
];

// A sitemap must never break the build. If the backend is down or slow we ship
// the static routes rather than failing deployment.
async function fetchList(path) {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);
    const res = await fetch(`${BACKEND_URL}${path}`, {
      headers: { "x-api-key": API_KEY },
      signal: controller.signal,
      next: { revalidate },
    });
    clearTimeout(timeout);
    if (!res.ok) {
      console.error(`[sitemap] ${path} responded ${res.status}`);
      return [];
    }
    const body = await res.json();
    const items = Array.isArray(body) ? body : body?.data;
    return Array.isArray(items) ? items : [];
  } catch (err) {
    console.error(`[sitemap] ${path} failed:`, err.message);
    return [];
  }
}

const lastMod = (item) => {
  const raw = item?.updatedAt || item?.createdAt;
  const d = raw ? new Date(raw) : null;
  return d && !Number.isNaN(d.getTime()) ? d : undefined;
};

export default async function sitemap() {
  const [services, projects] = await Promise.all([
    fetchList("/api/services"),
    fetchList("/api/projects"),
  ]);

  const entries = staticRoutes.map(([route, priority, changeFrequency]) => ({
    url: `${baseUrl}${route}`,
    changeFrequency,
    priority,
  }));

  // /services/[slug] — keyed by slug.
  for (const svc of services) {
    if (!svc?.slug) continue;
    const url = `${baseUrl}/services/${svc.slug}`;
    // Skip anything already covered by a hardcoded static route above.
    if (entries.some((e) => e.url === url)) continue;
    entries.push({
      url,
      lastModified: lastMod(svc),
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  // /work/[id] — the detail route takes a numeric id, not a slug
  // (see MainPage.js: <Link href={`/work/${story.id}`}>).
  for (const proj of projects) {
    if (proj?.id == null) continue;
    entries.push({
      url: `${baseUrl}/work/${proj.id}`,
      lastModified: lastMod(proj),
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  return entries;
}
