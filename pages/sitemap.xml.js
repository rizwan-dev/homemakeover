const Sitemap = () => {
  return null
}

export const getServerSideProps = async ({ res }) => {
  const baseUrl = 'https://homemakeover.com'
  
  const locations = [
    'kharadi',
    'viman-nagar', 
    'lohegaon',
    'magarpatta',
    'kalyani-nagar'
  ]

  const services = [
    'home-painting',
    'home-interior-design'
  ]

  const staticPages = [
    '',
    '/services',
    '/services/interior-design',
    '/services/painting',
    '/services/renovation',
    '/contact', 
    '/survey',
    '/blog'
  ]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticPages.map(page => `
        <url>
          <loc>${baseUrl}${page}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>${page === '' ? '1.0' : '0.8'}</priority>
        </url>
      `).join('')}
      
      ${locations.map(location => `
        <url>
          <loc>${baseUrl}/locations/${location}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>0.9</priority>
        </url>
      `).join('')}
      
      ${locations.map(location => 
        services.map(service => `
          <url>
            <loc>${baseUrl}/locations/${location}/${service}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>weekly</changefreq>
            <priority>0.8</priority>
          </url>
        `).join('')
      ).join('')}
    </urlset>
  `

  res.setHeader('Content-Type', 'text/xml')
  res.write(sitemap)
  res.end()

  return {
    props: {},
  }
}

export default Sitemap
