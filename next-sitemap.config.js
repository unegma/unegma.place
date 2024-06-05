/** @type {import('next-sitemap').IConfig} */
const isProd = process.env.NODE_ENV === 'production';
const siteUrl = (isProd ?  `https://${process.env.BASE_URL}` :  `https://${process.env.DEV_BASE_URL}`);

console.log('# Building Sitemap');
console.log('Current NODE_ENV:', isProd);
console.log('Site URL:', siteUrl);

// this might only work with --stage prod in the sst deployment?

// todo is it just this file which doesn't seem to have access to the correct env variables?

module.exports = {
  siteUrl: siteUrl,
  generateRobotsTxt: true, // (optional),
  // todo check how this might impact seo
  changefreq: 'weekly',
  // ...other options
  // exclude: ['/protected-page', '/awesome/secret-page'],
  // alternateRefs: [
  //   {
  //     href: 'https://es.example.com',
  //     hreflang: 'es',
  //   },
  //   {
  //     href: 'https://fr.example.com',
  //     hreflang: 'fr',
  //   },
  // ],
  robotsTxtOptions: {
    policies: isProd
      ? [
        {
          userAgent: '*',
          allow: '/',
          disallow: '/private'
        },
      ]
      : [
        {
          userAgent: '*',
          disallow: '/',
        },
      ],
    // additionalSitemaps: [
    //   'https://mycoastalhost.unegma.work/sitemap.xml',
    // ],
  },
}
