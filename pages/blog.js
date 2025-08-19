import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Link from 'next/link'
import blogPosts from '../data/blogPosts'

export default function Blog() {

  const featured = blogPosts[0]
  const rest = blogPosts.slice(1)

  return (
    <>
      <Head>
        <title>Blog — Home Makeover | Interior Design & Painting Tips</title>
        <meta name="description" content="Expert tips and guides for interior design, painting, waterproofing, and home renovation. Stay updated with the latest trends and best practices." />
        <meta name="keywords" content="interior design blog Pune, painting tips Pune, renovation guides, waterproofing tips, Home Makeover blog" />
        <meta property="og:title" content="Blog — Home Makeover | Interior Design & Painting Tips" />
        <meta property="og:description" content="Expert tips and guides for interior design, painting, waterproofing, and home renovation in Pune." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://homesmakeover.in/blog" />
        <link rel="canonical" href="https://homesmakeover.in/blog" />
      </Head>
      <Header />
      
      <main className="min-h-screen bg-gray-50">
        <Hero
          title="Our Blog"
          subtitle="Expert tips, guides, and insights for interior design, painting, and home renovation."
          breadcrumbs={[{ href: '/', label: 'Home' }, { label: 'Blog' }]}
          backgroundImage={featured?.image}
        />

        {/* Featured Post */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <img src={featured.image} alt={featured.title} className="w-full h-80 object-cover" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary text-white rounded-full text-xs font-medium">{featured.category}</span>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
                  <span>{featured.date}</span>
                  <span>•</span>
                  <span>{featured.readTime}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">{featured.title}</h2>
                <p className="text-slate-600 mb-6 text-lg">{featured.excerpt}</p>
                <Link href={`/blog/${featured.id}`} className="inline-flex items-center px-5 py-3 bg-primary hover:bg-primary-light text-white rounded-lg font-semibold transition-colors">
                  Read Article
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {rest.map((post) => (
                <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-primary text-white rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-slate-900">{post.title}</h3>
                    <p className="text-slate-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    <Link 
                      href={`/blog/${post.id}`} 
                      className="inline-flex items-center text-primary hover:text-primary-light font-medium transition-colors"
                    >
                      Read More
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        

        {/* Categories Section */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Browse by Category</h2>
              <p className="text-xl text-slate-600">Find articles that match your interests</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h18v14H3z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5v7M3 12h6" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v10M21 10h-6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Interior Design</h3>
                <p className="text-slate-600 mb-4">Tips, trends, and guides for creating beautiful interiors</p>
                <Link href="/blog?category=interior-design" className="text-primary hover:text-primary-light font-medium">
                  View Articles →
                </Link>
              </div>

              <div className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16.5 3.5l4 4" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 20h3a3 3 0 003-3v-1l9-9-3-3-9 9H7a3 3 0 00-3 3v1z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Painting Tips</h3>
                <p className="text-slate-600 mb-4">Professional painting techniques and color guidance</p>
                <Link href="/blog?category=painting-tips" className="text-primary hover:text-primary-light font-medium">
                  View Articles →
                </Link>
              </div>

              <div className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10l9-7 9 7v8a2 2 0 01-2 2h-4v-6H9v6H5a2 2 0 01-2-2v-8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Renovation</h3>
                <p className="text-slate-600 mb-4">Home renovation guides and project management tips</p>
                <Link href="/blog?category=renovation" className="text-primary hover:text-primary-light font-medium">
                  View Articles →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
