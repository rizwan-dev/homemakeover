import Head from 'next/head'
import { useRouter } from 'next/router'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Link from 'next/link'
import posts from '../../data/blogPosts'

export default function BlogPost() {
  const router = useRouter()
  const { id } = router.query

  const post = posts.find(p => String(p.id) === String(id))

  if (!post) {
    return (
      <>
        <Head>
          <title>Blog Post Not Found — Home Makeover</title>
        </Head>
        <Header />
        <main className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
            <p className="text-slate-600 mb-8">The blog post you're looking for doesn't exist.</p>
            <Link href="/blog" className="inline-block px-6 py-3 bg-primary text-white rounded-lg">
              Back to Blog
            </Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Head>
        <title>{post.title} — Home Makeover Blog</title>
        <meta name="description" content={post.excerpt} />
      </Head>
      <Header />
      
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-6">
              <Link href="/blog" className="text-secondary-dark hover:text-white transition-colors">
                ← Back to Blog
              </Link>
            </div>
            <div className="flex items-center gap-4 text-sm text-slate-300 mb-4">
              <span>{post.category}</span>
              <span>•</span>
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
            <p className="text-xl text-slate-300 mb-6">{post.excerpt}</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-white">
                <img
                  src="/images/brand/logo.svg"
                  alt="Home Makeover logo"
                  className="w-full h-full object-cover transform scale-150"
                />
              </div>
              <div>
                <p className="font-semibold">{post.author}</p>
                <p className="text-sm text-slate-300">Home Makeover Team</p>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-12 gap-10">
            <aside className="lg:col-span-3 order-last lg:order-first">
              <div className="sticky top-24 space-y-6">
                <div className="bg-white rounded-xl shadow p-5">
                  <h3 className="text-sm font-semibold text-slate-500 mb-3">Post details</h3>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li><span className="text-slate-500">Category:</span> {post.category}</li>
                    <li><span className="text-slate-500">Published:</span> {post.date}</li>
                    <li><span className="text-slate-500">Read time:</span> {post.readTime}</li>
                    <li><span className="text-slate-500">Author:</span> {post.author}</li>
                  </ul>
                </div>
                <div className="bg-white rounded-xl shadow p-5">
                  <h3 className="text-sm font-semibold text-slate-500 mb-3">Share</h3>
                  <div className="flex gap-3">
                    <a className="px-3 py-2 bg-primary text-white rounded-lg text-sm" href={`https://wa.me/?text=${encodeURIComponent(post.title + ' - ' + (typeof window !== 'undefined' ? window.location.href : '') )}`} target="_blank" rel="noreferrer">WhatsApp</a>
                    <a className="px-3 py-2 border border-primary text-primary rounded-lg text-sm" href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`} target="_blank" rel="noreferrer">Facebook</a>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-primary to-primary-dark text-white rounded-xl p-5">
                  <h4 className="font-semibold mb-2">Need expert help?</h4>
                  <p className="text-sm text-white/80 mb-4">Book a free consultation and get a tailored plan for your home.</p>
                  <a href="/survey" className="inline-block px-4 py-2 bg-white text-primary rounded-lg text-sm font-semibold">Get Free Quote</a>
                </div>
              </div>
            </aside>
            <article className="lg:col-span-9 bg-white rounded-2xl shadow-lg p-6 md:p-10">
              <div className="mb-8">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-64 md:h-96 object-cover rounded-lg"
                />
              </div>
              <div 
                className="prose prose-slate prose-lg max-w-none prose-headings:scroll-mt-24"
                dangerouslySetInnerHTML={{ __html: post.contentHtml }}
              />
              <nav className="mt-12 pt-8 border-t border-slate-200 grid md:grid-cols-2 gap-4">
                {posts.find(p => p.id === Number(id) - 1) && (
                  <Link href={`/blog/${Number(id) - 1}`} className="group block p-4 rounded-lg border hover:bg-slate-50 transition-colors">
                    <div className="text-xs text-slate-500">Previous</div>
                    <div className="font-semibold text-slate-800 group-hover:text-primary line-clamp-2">{posts.find(p => p.id === Number(id) - 1)?.title}</div>
                  </Link>
                )}
                {posts.find(p => p.id === Number(id) + 1) && (
                  <Link href={`/blog/${Number(id) + 1}`} className="group block p-4 rounded-lg border hover:bg-slate-50 transition-colors text-right">
                    <div className="text-xs text-slate-500">Next</div>
                    <div className="font-semibold text-slate-800 group-hover:text-primary line-clamp-2">{posts.find(p => p.id === Number(id) + 1)?.title}</div>
                  </Link>
                )}
              </nav>
            </article>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {posts
                .filter(p => p.id !== parseInt(id))
                .slice(0, 3)
                .map((relatedPost) => (
                  <article key={relatedPost.id} className="bg-slate-50 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative">
                      <img 
                        src={relatedPost.image} 
                        alt={relatedPost.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-primary text-white rounded-full text-xs font-medium">
                          {relatedPost.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
                        <span>{relatedPost.date}</span>
                        <span>•</span>
                        <span>{relatedPost.readTime}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-slate-900">{relatedPost.title}</h3>
                      <p className="text-slate-600 mb-4 line-clamp-3">{relatedPost.excerpt}</p>
                      <Link 
                        href={`/blog/${relatedPost.id}`} 
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
      </main>
      <Footer />
    </>
  )
}

