export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [],
    },
    sitemap: 'https://stacksando.com/sitemap.xml',
    host: 'https://stacksando.com',
  }
}