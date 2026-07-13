import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/private/'],
      },
      {
        userAgent: ['GPTBot', 'OAI-SearchBot', 'Google-Extended', 'PerplexityBot', 'ClaudeBot', 'anthropic-ai'],
        allow: '/',
      },
    ],
    sitemap: 'https://advocate-satish-mor.vercel.app/sitemap.xml',
    host: 'https://advocate-satish-mor.vercel.app',
  };
}
