import Head from 'next/head'
import { useRouter } from 'next/router'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Link from 'next/link'

export default function BlogPost() {
  const router = useRouter()
  const { id } = router.query

  // Blog post data - in a real app, this would come from a CMS or database
  const blogPosts = {
    1: {
      id: 1,
      title: 'Choosing the Right Paint Finish for Every Room',
      excerpt: 'Learn how to select the perfect paint finish for different rooms in your home. From matte to glossy, we cover all the options and their best applications.',
      content: `
        <h2>Understanding Paint Finishes</h2>
        <p>When it comes to painting your home, choosing the right paint finish is just as important as selecting the perfect color. Different finishes offer varying levels of durability, sheen, and maintenance requirements. Understanding these differences will help you make the best choice for each room in your home.</p>
        
        <h3>Types of Paint Finishes</h3>
        <h4>1. Flat/Matte Finish</h4>
        <p>Flat finishes have the least amount of sheen and provide a smooth, velvety appearance. They're excellent for hiding surface imperfections and creating a sophisticated look.</p>
        <ul>
          <li><strong>Best for:</strong> Ceilings, low-traffic areas, adult bedrooms</li>
          <li><strong>Pros:</strong> Hides imperfections, sophisticated look, no glare</li>
          <li><strong>Cons:</strong> Difficult to clean, not very durable</li>
        </ul>
        
        <h4>2. Eggshell Finish</h4>
        <p>Eggshell finishes have a slight sheen that resembles the surface of an eggshell. They offer better durability than flat finishes while maintaining a subtle appearance.</p>
        <ul>
          <li><strong>Best for:</strong> Living rooms, dining rooms, hallways</li>
          <li><strong>Pros:</strong> Easy to clean, good durability, subtle sheen</li>
          <li><strong>Cons:</strong> Shows some imperfections</li>
        </ul>
        
        <h4>3. Satin Finish</h4>
        <p>Satin finishes provide a smooth, velvety appearance with a slight sheen. They're highly durable and easy to clean, making them perfect for high-traffic areas.</p>
        <ul>
          <li><strong>Best for:</strong> Kitchens, bathrooms, children's rooms, trim</li>
          <li><strong>Pros:</strong> Very durable, easy to clean, moisture-resistant</li>
          <li><strong>Cons:</strong> Shows brush strokes and imperfections</li>
        </ul>
        
        <h4>4. Semi-Gloss Finish</h4>
        <p>Semi-gloss finishes have a noticeable sheen and are highly durable. They're perfect for areas that need frequent cleaning or are exposed to moisture.</p>
        <ul>
          <li><strong>Best for:</strong> Kitchens, bathrooms, doors, trim, cabinets</li>
          <li><strong>Pros:</strong> Very durable, easy to clean, moisture-resistant</li>
          <li><strong>Cons:</strong> Shows all imperfections, high sheen</li>
        </ul>
        
        <h4>5. Gloss Finish</h4>
        <p>Gloss finishes have the highest sheen and are the most durable. They create a dramatic, modern look but require perfect surface preparation.</p>
        <ul>
          <li><strong>Best for:</strong> Doors, trim, furniture, accent walls</li>
          <li><strong>Pros:</strong> Most durable, easy to clean, dramatic appearance</li>
          <li><strong>Cons:</strong> Shows all imperfections, very high sheen</li>
        </ul>
        
        <h3>Room-by-Room Recommendations</h3>
        
        <h4>Living Room</h4>
        <p>For living rooms, consider eggshell or satin finishes. These provide good durability for a high-traffic area while maintaining an elegant appearance.</p>
        
        <h4>Kitchen</h4>
        <p>Kitchens require durable, washable finishes. Satin or semi-gloss are ideal choices as they can withstand frequent cleaning and moisture exposure.</p>
        
        <h4>Bathroom</h4>
        <p>Bathrooms need moisture-resistant finishes. Semi-gloss is the best choice for walls, while gloss works well for trim and doors.</p>
        
        <h4>Bedroom</h4>
        <p>Bedrooms can use flat, eggshell, or satin finishes depending on the desired look and maintenance requirements.</p>
        
        <h3>Tips for Choosing the Right Finish</h3>
        <ul>
          <li>Consider the room's function and traffic level</li>
          <li>Think about maintenance requirements</li>
          <li>Consider the existing lighting in the room</li>
          <li>Test samples in the actual room before committing</li>
          <li>Remember that higher sheen means more durability but also shows more imperfections</li>
        </ul>
        
        <h3>Professional Tips from Home Makeover</h3>
        <p>At Home Makeover, we always recommend:</p>
        <ul>
          <li>Using premium quality paints for better durability</li>
          <li>Proper surface preparation for any finish</li>
          <li>Testing finishes in different lighting conditions</li>
          <li>Considering the overall design aesthetic of your home</li>
        </ul>
        
        <p>Ready to transform your home with the perfect paint finishes? Contact Home Makeover for a free consultation and professional painting services in Pune.</p>
      `,
      image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1400&auto=format&fit=crop',
      category: 'Painting Tips',
      date: 'March 15, 2024',
      readTime: '5 min read',
      author: 'Home Makeover Team'
    },
    2: {
      id: 2,
      title: 'Waterproofing Your Terrace: What You Need to Know',
      excerpt: 'Essential guide to terrace waterproofing to prevent leaks during monsoon season. Best practices and materials for long-lasting protection.',
      content: `
        <h2>Why Terrace Waterproofing is Essential</h2>
        <p>Terrace waterproofing is one of the most critical aspects of home maintenance, especially in Pune's monsoon climate. A properly waterproofed terrace prevents water seepage, structural damage, and costly repairs. Understanding the process and materials involved will help you make informed decisions for your home.</p>
        
        <h3>Common Waterproofing Problems</h3>
        <ul>
          <li>Water seepage through cracks and joints</li>
          <li>Dampness in walls and ceilings</li>
          <li>Mold and mildew growth</li>
          <li>Structural damage to concrete</li>
          <li>Damage to interior finishes</li>
        </ul>
        
        <h3>Waterproofing Methods</h3>
        
        <h4>1. Cementitious Waterproofing</h4>
        <p>This method uses cement-based materials that are easy to apply and cost-effective. It's suitable for internal wet areas and provides good protection against water penetration.</p>
        <ul>
          <li><strong>Pros:</strong> Easy application, cost-effective, good adhesion</li>
          <li><strong>Cons:</strong> Limited flexibility, may crack over time</li>
          <li><strong>Best for:</strong> Internal wet areas, bathrooms</li>
        </ul>
        
        <h4>2. Liquid Waterproofing Membrane</h4>
        <p>Liquid membranes are applied as a coating and provide excellent flexibility and durability. They're perfect for complex surfaces and areas with movement.</p>
        <ul>
          <li><strong>Pros:</strong> Flexible, seamless, easy application</li>
          <li><strong>Cons:</strong> Higher cost, requires proper surface preparation</li>
          <li><strong>Best for:</strong> Terraces, balconies, complex surfaces</li>
        </ul>
        
        <h4>3. Bituminous Waterproofing</h4>
        <p>Bituminous coatings are made from asphalt and provide excellent water resistance. They're commonly used for terrace waterproofing and offer long-lasting protection.</p>
        <ul>
          <li><strong>Pros:</strong> Excellent water resistance, durable, cost-effective</li>
          <li><strong>Cons:</strong> Limited color options, may require top coating</li>
          <li><strong>Best for:</strong> Terraces, foundations, basements</li>
        </ul>
        
        <h4>4. Polyurethane Waterproofing</h4>
        <p>Polyurethane coatings offer superior flexibility and durability. They're perfect for areas that experience temperature variations and movement.</p>
        <ul>
          <li><strong>Pros:</strong> Highly flexible, excellent durability, UV resistant</li>
          <li><strong>Cons:</strong> Higher cost, requires professional application</li>
          <li><strong>Best for:</strong> Terraces, roofs, high-traffic areas</li>
        </ul>
        
        <h3>Waterproofing Process</h3>
        
        <h4>Step 1: Surface Preparation</h4>
        <p>Proper surface preparation is crucial for effective waterproofing. This includes:</p>
        <ul>
          <li>Cleaning the surface thoroughly</li>
          <li>Repairing cracks and holes</li>
          <li>Leveling uneven surfaces</li>
          <li>Priming the surface if required</li>
        </ul>
        
        <h4>Step 2: Application</h4>
        <p>The waterproofing material is applied in multiple layers:</p>
        <ul>
          <li>Base coat application</li>
          <li>Reinforcement with fabric or mesh</li>
          <li>Top coat application</li>
          <li>Proper curing time</li>
        </ul>
        
        <h4>Step 3: Quality Check</h4>
        <p>After application, the waterproofing is tested for:</p>
        <ul>
          <li>Proper adhesion</li>
          <li>Uniform thickness</li>
          <li>No gaps or missed areas</li>
          <li>Water resistance</li>
        </ul>
        
        <h3>Maintenance Tips</h3>
        <ul>
          <li>Regular inspection for cracks and damage</li>
          <li>Keep drainage systems clear</li>
          <li>Avoid placing heavy objects directly on the surface</li>
          <li>Clean the surface regularly</li>
          <li>Address any issues immediately</li>
        </ul>
        
        <h3>Professional Waterproofing Services</h3>
        <p>At Home Makeover, we provide comprehensive waterproofing solutions including:</p>
        <ul>
          <li>Professional assessment and consultation</li>
          <li>High-quality materials and equipment</li>
          <li>Experienced technicians</li>
          <li>Warranty coverage</li>
          <li>Post-installation support</li>
        </ul>
        
        <p>Don't wait until monsoon season to waterproof your terrace. Contact Home Makeover for a free consultation and professional waterproofing services in Pune.</p>
      `,
      image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1400&auto=format&fit=crop',
      category: 'Waterproofing',
      date: 'March 10, 2024',
      readTime: '7 min read',
      author: 'Home Makeover Team'
    },
    3: {
      id: 3,
      title: 'Budgeting for a Full Home Makeover',
      excerpt: 'Smart strategies to plan and budget your home renovation without sacrificing quality. Get the most value for your investment.',
      content: `
        <h2>Planning Your Home Makeover Budget</h2>
        <p>A successful home makeover requires careful planning and budgeting. Understanding the costs involved and how to allocate your budget effectively will help you achieve your dream home without breaking the bank.</p>
        
        <h3>Understanding Renovation Costs</h3>
        
        <h4>Labor Costs (40-50% of total budget)</h4>
        <p>Labor costs typically account for the largest portion of your renovation budget. This includes:</p>
        <ul>
          <li>Interior designers and consultants</li>
          <li>Skilled laborers (painters, carpenters, electricians)</li>
          <li>Project managers</li>
          <li>Quality control and supervision</li>
        </ul>
        
        <h4>Materials and Finishes (30-40% of total budget)</h4>
        <p>Materials and finishes significantly impact both cost and quality:</p>
        <ul>
          <li>Paints and coatings</li>
          <li>Flooring materials</li>
          <li>Lighting fixtures</li>
          <li>Furniture and accessories</li>
          <li>Electrical and plumbing fixtures</li>
        </ul>
        
        <h4>Permits and Professional Services (5-10% of total budget)</h4>
        <p>Don't forget to budget for:</p>
        <ul>
          <li>Building permits</li>
          <li>Architectural drawings</li>
          <li>Structural engineering</li>
          <li>Inspections</li>
        </ul>
        
        <h4>Contingency Fund (10-15% of total budget)</h4>
        <p>Always set aside a contingency fund for unexpected expenses:</p>
        <ul>
          <li>Hidden structural issues</li>
          <li>Material price fluctuations</li>
          <li>Design changes</li>
          <li>Additional work requirements</li>
        </ul>
        
        <h3>Room-by-Room Budget Breakdown</h3>
        
        <h4>Living Room (₹1,50,000 - ₹3,00,000)</h4>
        <ul>
          <li>Painting and wall treatments: ₹30,000 - ₹60,000</li>
          <li>Flooring: ₹40,000 - ₹80,000</li>
          <li>Lighting: ₹20,000 - ₹40,000</li>
          <li>Furniture: ₹40,000 - ₹80,000</li>
          <li>Accessories: ₹20,000 - ₹40,000</li>
        </ul>
        
        <h4>Kitchen (₹2,00,000 - ₹5,00,000)</h4>
        <ul>
          <li>Cabinets and countertops: ₹80,000 - ₹2,00,000</li>
          <li>Appliances: ₹60,000 - ₹1,50,000</li>
          <li>Lighting and electrical: ₹30,000 - ₹60,000</li>
          <li>Flooring and backsplash: ₹30,000 - ₹90,000</li>
        </ul>
        
        <h4>Bathroom (₹1,00,000 - ₹2,50,000)</h4>
        <ul>
          <li>Fixtures and fittings: ₹40,000 - ₹1,00,000</li>
          <li>Tiles and flooring: ₹30,000 - ₹60,000</li>
          <li>Lighting and electrical: ₹15,000 - ₹30,000</li>
          <li>Accessories: ₹15,000 - ₹60,000</li>
        </ul>
        
        <h3>Cost-Saving Strategies</h3>
        
        <h4>1. Prioritize Your Needs</h4>
        <p>Identify what's most important to you and allocate your budget accordingly. Focus on high-impact changes that will make the biggest difference.</p>
        
        <h4>2. Choose Quality Over Quantity</h4>
        <p>It's better to do fewer things well than many things poorly. Invest in quality materials and workmanship for areas that matter most.</p>
        
        <h4>3. DIY Where Appropriate</h4>
        <p>Consider DIY options for simple tasks like painting or installing accessories. However, leave complex work to professionals.</p>
        
        <h4>4. Shop Smart</h4>
        <ul>
          <li>Compare prices from multiple suppliers</li>
          <li>Look for sales and discounts</li>
          <li>Consider alternative materials</li>
          <li>Buy in bulk when possible</li>
        </ul>
        
        <h4>5. Phase Your Project</h4>
        <p>Instead of doing everything at once, consider phasing your renovation over time. This spreads out costs and allows you to save between phases.</p>
        
        <h3>Financing Options</h3>
        
        <h4>Personal Savings</h4>
        <p>The most cost-effective option, but requires significant upfront capital.</p>
        
        <h4>Home Improvement Loans</h4>
        <p>Banks and financial institutions offer specific loans for home renovations with competitive interest rates.</p>
        
        <h4>Credit Cards</h4>
        <p>Suitable for smaller projects, but be mindful of high interest rates.</p>
        
        <h4>EMI Options</h4>
        <p>Many contractors and suppliers offer EMI options for materials and services.</p>
        
        <h3>Working with Home Makeover</h3>
        <p>At Home Makeover, we help you:</p>
        <ul>
          <li>Create realistic budgets based on your requirements</li>
          <li>Suggest cost-effective alternatives</li>
          <li>Provide transparent pricing</li>
          <li>Offer flexible payment options</li>
          <li>Ensure quality work within your budget</li>
        </ul>
        
        <p>Ready to start your home makeover journey? Contact Home Makeover for a free consultation and detailed quote tailored to your budget and requirements.</p>
      `,
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1400&auto=format&fit=crop',
      category: 'Interior Design',
      date: 'March 5, 2024',
      readTime: '8 min read',
      author: 'Home Makeover Team'
    }
  }

  const post = blogPosts[id]

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
            <Link href="/blog" className="inline-block px-6 py-3 bg-rose-600 text-white rounded-lg">
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
          <div className="max-w-4xl mx-auto px-6">
            <div className="mb-6">
              <Link href="/blog" className="text-rose-300 hover:text-white transition-colors">
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
              <div className="w-12 h-12 bg-rose-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">HM</span>
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
          <div className="max-w-4xl mx-auto px-6">
            <article className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <div className="mb-8">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-64 md:h-96 object-cover rounded-lg"
                />
              </div>
              
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
              
              <div className="mt-12 pt-8 border-t border-slate-200">
                <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Home?</h3>
                <p className="text-slate-600 mb-6">
                  Get professional help with your home makeover project. Contact us for a free consultation and quote.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="/survey" className="inline-block px-6 py-3 bg-rose-600 hover:bg-rose-700 text-white rounded-lg font-semibold transition-colors">
                    Get Free Quote
                  </a>
                  <a href="/contact" className="inline-block px-6 py-3 border-2 border-rose-600 text-rose-600 hover:bg-rose-600 hover:text-white rounded-lg font-semibold transition-colors">
                    Contact Us
                  </a>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {Object.values(blogPosts)
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
                        <span className="px-3 py-1 bg-rose-600 text-white rounded-full text-xs font-medium">
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
                        className="inline-flex items-center text-rose-600 hover:text-rose-700 font-medium transition-colors"
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

