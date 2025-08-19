import Head from 'next/head'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import Footer from '../../components/Footer'
import Link from 'next/link'

export default function PaintingService() {
  const locations = [
    { name: 'Kharadi', slug: 'kharadi' },
    { name: 'Viman Nagar', slug: 'viman-nagar' },
    { name: 'Kalyani Nagar', slug: 'kalyani-nagar' },
    { name: 'Magarpatta', slug: 'magarpatta' },
    { name: 'Lohegaon', slug: 'lohegaon' },
    { name: 'Wagholi', slug: 'wagholi' },
    { name: 'Kesnand', slug: 'kesnand' },
  ]

  const popularKeywords = [
    'best home painting in Pune',
    'affordable house painters in Pune',
    'interior painting Pune',
    'exterior painting Pune',
    'texture painting Pune'
  ]

  const locationKeywords = locations.flatMap(l => [
    `best home painting in ${l.name}`,
    `affordable painting service in ${l.name}`,
    `quality painting service in ${l.name}`
  ])

  const metaKeywords = [
    'painting services', 'Pune',
    ...popularKeywords, ...locationKeywords
  ].join(', ')
  const features = [
    'Interior & Exterior Painting',
    'Texture & Special Effects',
    'Color Consultation',
    'Premium Quality Materials',
    'Professional Application',
    '2-Year Warranty',
    'Wallpaper Installation',
    'Wood & Metal Painting',
    'Commercial Painting',
    'Eco-Friendly Paints'
  ]

  const process = [
    {
      step: '01',
      title: 'Site Inspection',
      description: 'Thorough inspection of surfaces and area measurement'
    },
    {
      step: '02',
      title: 'Color Selection',
      description: 'Professional color consultation and material selection'
    },
    {
      step: '03',
      title: 'Surface Preparation',
      description: 'Proper cleaning, priming, and surface preparation'
    },
    {
      step: '04',
      title: 'Application',
      description: 'Professional painting with premium materials'
    },
    {
      step: '05',
      title: 'Quality Check',
      description: 'Final inspection and touch-ups if needed'
    },
    {
      step: '06',
      title: 'Cleanup',
      description: 'Complete cleanup and project handover'
    }
  ]

  const projects = [
    {
      title: 'Interior Repainting — Ivy Estate, Wagholi',
      image: '/images/project/10-ivy-estate-wagholi-interior-painting-main.jpg',
      area: '1,100 sq ft',
      duration: '10 days'
    },
    {
      title: 'Exterior Repainting — Rohan Abhilasha, Wagholi',
      image: '/images/project/11-rohan-abhilasha-wagholi-exterior-painting-main.webp',
      area: '3,000 sq ft',
      duration: '21 days'
    },
    {
      title: 'Interior Wall Painting — Wagholi',
      image: '/images/project/05-wagholi-interior-wall-painting-main.webp',
      area: '1,500 sq ft',
      duration: '14 days'
    }
  ]

  return (
    <>
      <Head>
        <title>Professional Painting Services in Pune — Home Makeover</title>
        <meta name="description" content="Professional interior and exterior painting services in Pune. Premium quality materials, expert application, and 2-year warranty. Free consultation available." />
        <meta name="keywords" content={metaKeywords} />
        <meta property="og:title" content="Professional Painting Services in Pune — Home Makeover" />
        <meta property="og:description" content="Professional interior and exterior painting services in Pune. Premium quality materials, expert application, and 2-year warranty." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://homemakeover.com/services/painting" />
        <link rel="canonical" href="https://homemakeover.com/services/painting" />
      </Head>
      <Header />
      
      <main className="min-h-screen">
        <Hero
          title="Professional Painting Services"
          subtitle="Transform your space with expert interior and exterior painting using premium materials."
          breadcrumbs={[{ href: '/', label: 'Home' }, { href: '/services', label: 'Services' }, { label: 'Painting' }]}
          backgroundImage="/images/services/02-interior-painting-hero.webp"
        />

        {/* Service Overview */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-start lg:items-stretch">
              <div>
                <h2 className="text-4xl font-bold mb-6">Expert Painting Solutions</h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  With over 10 years of experience, we deliver flawless painting results using premium quality 
                  materials and professional techniques. Our team ensures every project meets the highest standards 
                  of quality and durability.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="prose prose-slate max-w-none mt-6 mb-8">
                  <h3>Our Paint System</h3>
                  <ul>
                    <li>Putty + primer for smooth and durable base</li>
                    <li>Low‑VOC washable emulsions for interiors</li>
                    <li>Weather‑shield and anti‑fungal coats for exteriors</li>
                  </ul>
                </div>
                {/* Removed starting price section as requested */}
              </div>

              <div className="relative">
                <div className="relative w-full h-full min-h-[24rem] rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="/images/services/02-interior-painting-hero.webp" 
                    alt="Professional painting services"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold">Painting Services Near You</h2>
              <p className="text-slate-600">We actively serve prime localities across Pune</p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {locations.map(loc => (
                <Link key={loc.slug} href={`/locations/${loc.slug}/home-painting`} className="px-4 py-2 rounded-full bg-white shadow-sm ring-1 ring-slate-200 text-slate-700 hover:text-primary hover:ring-primary transition">
                  Painting in {loc.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Our Painting Process</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                We follow a systematic approach to ensure your painting project is completed with precision and quality
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {process.map((step, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-primary">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                  <p className="text-slate-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Gallery */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Recent Painting Projects</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Explore some of our recent painting projects that showcase our expertise and quality
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative h-64">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <div className="flex justify-between text-sm text-slate-600 mb-4">
                      <span>Area: {project.area}</span>
                      <span>Duration: {project.duration}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Searches (SEO) */}
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl font-bold mb-4">Popular searches</h2>
            <div className="flex flex-wrap gap-2">
              {[...popularKeywords, ...locationKeywords.slice(0, 12)].map(kw => (
                <span key={kw} className="px-3 py-1.5 rounded-full bg-secondary text-primary text-sm font-medium">{kw}</span>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8">Painting FAQs</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl ring-1 ring-slate-100">
                <h3 className="font-semibold text-slate-900 mb-2">How long does interior painting take?</h3>
                <p className="text-slate-600">Most 2 BHK interiors complete within 7–10 days depending on surface readiness.</p>
              </div>
              <div className="bg-white p-6 rounded-xl ring-1 ring-slate-100">
                <h3 className="font-semibold text-slate-900 mb-2">Which paint brands do you use?</h3>
                <p className="text-slate-600">Asian Paints, Nerolac, Dulux—selected based on your budget and finish preference.</p>
              </div>
              <div className="bg-white p-6 rounded-xl ring-1 ring-slate-100">
                <h3 className="font-semibold text-slate-900 mb-2">Is the paint eco‑friendly?</h3>
                <p className="text-slate-600">Yes. We recommend low‑VOC emulsions for safe, odor‑free interiors.</p>
              </div>
              <div className="bg-white p-6 rounded-xl ring-1 ring-slate-100">
                <h3 className="font-semibold text-slate-900 mb-2">Do you provide warranty?</h3>
                <p className="text-slate-600">We provide workmanship warranty and follow brand‑recommended systems for durability.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20 text-white overflow-hidden">
          <img
            src="/images/services/02-interior-painting-hero.webp"
            alt="Painting background"
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary-dark/70" />
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent rounded-full blur-3xl opacity-20" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary rounded-full blur-3xl opacity-30" />
          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Space?</h2>
            <p className="text-xl mb-8 opacity-90">Get started with a free quote and let us bring color to your world</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/survey" className="inline-block px-8 py-4 bg-white text-primary rounded-lg font-semibold text-lg hover:bg-secondary transition-colors">Get Free Quote</a>
              <a href="/contact" className="inline-block px-8 py-4 border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white hover:text-primary transition-colors">Contact Us</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

