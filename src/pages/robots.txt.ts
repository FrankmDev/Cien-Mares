import type { APIRoute } from 'astro';

const getRobotsTxt = (sitemapURL: URL) => `
# robots.txt for Cien Mares
# https://cienmares.es

User-agent: *
Allow: /

# Sitemap
Sitemap: ${sitemapURL.href}

# Crawl-delay for all bots
Crawl-delay: 1

# Disallow admin and private areas (if any in future)
Disallow: /admin/
Disallow: /private/
Disallow: /api/

# Allow specific bots
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: DuckDuckBot
Allow: /
`;

export const GET: APIRoute = ({ site }) => {
  const sitemapURL = new URL('sitemap-index.xml', site);
  
  return new Response(getRobotsTxt(sitemapURL), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
};
