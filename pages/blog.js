import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: 'Choosing the Right Paint Finish for Every Room',
      excerpt: 'Learn how to select the perfect paint finish for different rooms in your home. From matte to glossy, we cover all the options and their best applications.',
      image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1400&auto=format&fit=crop',
      category: 'Painting Tips',
      date: 'March 15, 2024',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Waterproofing Your Terrace: What You Need to Know',
      excerpt: 'Essential guide to terrace waterproofing to prevent leaks during monsoon season. Best practices and materials for long-lasting protection.',
      image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1400&auto=format&fit=crop',
      category: 'Waterproofing',
      date: 'March 10, 2024',
      readTime: '7 min read'
    },
    {
      id: 3,
      title: 'Budgeting for a Full Home Makeover',
      excerpt: 'Smart strategies to plan and budget your home renovation without sacrificing quality. Get the most value for your investment.',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1400&auto=format&fit=crop',
      category: 'Interior Design',
      date: 'March 5, 2024',
      readTime: '8 min read'
    },
    {
      id: 4,
      title: 'Modern Kitchen Design Trends for 2024',
      excerpt: 'Discover the latest kitchen design trends including smart storage solutions, modern appliances, and contemporary aesthetics.',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=1400&auto=format&fit=crop',
      category: 'Interior Design',
      date: 'February 28, 2024',
      readTime: '6 min read'
    },
    {
      id: 5,
      title: 'Exterior Painting: Weather-Resistant Solutions',
      excerpt: 'Complete guide to exterior painting with weather-resistant paints and techniques for long-lasting protection against Pune\'s climate.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1400&auto=format&fit=crop',
      category: 'Painting Tips',
      date: 'February 20, 2024',
      readTime: '6 min read'
    },
    {
      id: 6,
      title: 'False Ceiling Designs for Modern Homes',
      excerpt: 'Explore contemporary false ceiling designs that enhance your home\'s aesthetics while providing functional benefits like lighting and acoustics.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1400&auto=format&fit=crop',
      category: 'Interior Design',
      date: 'February 15, 2024',
      readTime: '7 min read'
    }
  ]

  const featured = blogPosts[0]
  const rest = blogPosts.slice(1)

  return (
    <>
      <Head>
        <title>Blog — Home Makeover | Interior Design & Painting Tips</title>
        <meta name="description" content="Expert tips and guides for interior design, painting, waterproofing, and home renovation. Stay updated with the latest trends and best practices." />
      </Head>
      <Header />
      
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h1 className="text-5xl font-bold mb-6">Our Blog</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Expert tips, guides, and insights for interior design, painting, and home renovation
            </p>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <img src={featured.image} alt={featured.title} className="w-full h-80 object-cover" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-indigo-600 text-white rounded-full text-xs font-medium">{featured.category}</span>
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
                <Link href={`/blog/${featured.id}`} className="inline-flex items-center px-5 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold transition-colors">
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
                      <span className="px-3 py-1 bg-indigo-600 text-white rounded-full text-xs font-medium">
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
                      className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium transition-colors"
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

        {/* Newsletter Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Get the latest interior design tips, painting guides, and renovation insights delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-rose-600 hover:bg-rose-700 text-white rounded-lg font-semibold transition-colors">
                Subscribe
              </button>
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
                <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Interior Design</h3>
                <p className="text-slate-600 mb-4">Tips, trends, and guides for creating beautiful interiors</p>
                <Link href="/blog?category=interior-design" className="text-indigo-600 hover:text-indigo-700 font-medium">
                  View Articles →
                </Link>
              </div>

              <div className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-amber-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Painting Tips</h3>
                <p className="text-slate-600 mb-4">Professional painting techniques and color guidance</p>
                <Link href="/blog?category=painting-tips" className="text-amber-600 hover:text-amber-700 font-medium">
                  View Articles →
                </Link>
              </div>

              <div className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Renovation</h3>
                <p className="text-slate-600 mb-4">Home renovation guides and project management tips</p>
                <Link href="/blog?category=renovation" className="text-blue-600 hover:text-blue-700 font-medium">
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
