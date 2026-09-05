// Crawler policy.
//
// There is no way to "submit" a site to ChatGPT or Gemini — visibility in both
// comes from being crawled and indexed. This file is the only lever we control
// on our side; the rest is Google Search Console / Bing Webmaster Tools.
//
// The AI crawlers are listed explicitly rather than relying on the "*" rule so
// that adding a restrictive rule later can't silently de-list us from them.
const AI_CRAWLERS = [
  // OpenAI — three separate agents, three separate purposes.
  "OAI-SearchBot",  // indexes pages that ChatGPT search cites  <- the important one
  "ChatGPT-User",   // live fetch when a user opens a link in a chat
  "GPTBot",         // model training crawl
  // Google — Googlebot (covered by "*") is what feeds Gemini and AI Overviews.
  // Google-Extended only governs training/grounding use, never ranking.
  "Google-Extended",
  // Other assistants that cite sources.
  "PerplexityBot",
  "ClaudeBot",
  "anthropic-ai",
  "Applebot-Extended",
  "Amazonbot",
  "CCBot",          // Common Crawl — feeds many downstream models
];

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      ...AI_CRAWLERS.map((userAgent) => ({
        userAgent,
        allow: "/",
        disallow: ["/api/"],
      })),
    ],
    sitemap: "https://rapidtechpro.com/sitemap.xml",
    host: "https://rapidtechpro.com",
  };
}
