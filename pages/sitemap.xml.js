const Sitemap = () => {
  return null
}

export const getServerSideProps = async ({ res }) => {
  const baseUrl = 'https://homesmakeover.in'
  
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
    '/projects',
    '/contact', 
    '/survey',
    '/blog'
  ]

  // Blog detail pages from data source
  let blogUrls = []
  try {
    const { default: blogPosts } = await import('../data/blogPosts')
    blogUrls = (blogPosts || []).map(p => `/blog/${p.id}`)
  } catch (e) {
    blogUrls = []
  }

  // Project detail pages (ids defined in projects listing)
  const projectIds = [1,2,3,4,5,6,7,8,9,10,11,12]
  const projectUrls = projectIds.map(id => `/projects/${id}`)

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

      ${blogUrls.map(page => `
        <url>
          <loc>${baseUrl}${page}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>0.7</priority>
        </url>
      `).join('')}

      ${projectUrls.map(page => `
        <url>
          <loc>${baseUrl}${page}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>0.7</priority>
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
