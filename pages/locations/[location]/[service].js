import Head from 'next/head'
import { useRouter } from 'next/router'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import Link from 'next/link'

export default function LocationServicePage() {
  const router = useRouter()
  const { location: locationSlug, service: serviceSlug } = router.query

  // Location and service data
  const locationData = {
    'kharadi': {
      name: 'Kharadi',
      fullName: 'Kharadi, Pune',
      description: 'Kharadi is a rapidly developing area in Pune known for its IT parks, residential complexes, and modern infrastructure.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1400&auto=format&fit=crop'
    },
    'viman-nagar': {
      name: 'Viman Nagar',
      fullName: 'Viman Nagar, Pune',
      description: 'Viman Nagar is a premium residential area in Pune with excellent connectivity and modern amenities.',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1400&auto=format&fit=crop'
    },
    'lohegaon': {
      name: 'Lohegaon',
      fullName: 'Lohegaon, Pune',
      description: 'Lohegaon is a growing residential area in Pune with good connectivity and affordable housing options.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1400&auto=format&fit=crop'
    },
    'magarpatta': {
      name: 'Magarpatta',
      fullName: 'Magarpatta, Pune',
      description: 'Magarpatta is a well-planned township in Pune known for its modern infrastructure and quality living.',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=1400&auto=format&fit=crop'
    },
    'kalyani-nagar': {
      name: 'Kalyani Nagar',
      fullName: 'Kalyani Nagar, Pune',
      description: 'Kalyani Nagar is an upscale residential area in Pune with premium properties and excellent amenities.',
      image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1400&auto=format&fit=crop'
    }
  }

  const serviceData = {
    'home-painting': {
      title: 'Home Painting Service',
      shortTitle: 'Home Painting',
      description: 'Professional home painting services with premium quality materials and expert craftsmanship.',
      longDescription: 'Transform your home with our professional painting services. We specialize in interior and exterior painting, texture work, and special effects. Our team uses premium quality paints and follows industry best practices to deliver flawless finishes that last.',
      features: [
        'Interior & Exterior Painting',
        'Texture & Special Effects',
        'Color Consultation',
        'Premium Quality Materials',
        'Professional Application',
        '2-Year Warranty'
      ],
      pricing: 'Starting from ₹15/sq ft for interior and ₹20/sq ft for exterior',
      image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1400&auto=format&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1400&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1400&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1400&auto=format&fit=crop'
      ]
    },
    'home-interior-design': {
      title: 'Home Interior Design Service',
      shortTitle: 'Home Interior Design',
      description: 'Complete interior design solutions from concept to execution with personalized attention.',
      longDescription: 'Create your dream home with our comprehensive interior design services. From space planning to furniture selection, lighting design to color schemes, we handle every aspect of your interior transformation. Our expert designers work closely with you to bring your vision to life.',
      features: [
        'Space Planning & Layout Design',
        '3D Visualizations & Renderings',
        'Custom Furniture Design',
        'Color Scheme & Material Selection',
        'Lighting Design & Installation',
        'Turnkey Project Execution'
      ],
      pricing: 'Starting from ₹50,000 for complete design',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1400&auto=format&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1400&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=1400&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1400&auto=format&fit=crop'
      ]
    }
  }

  // Wait for router to be ready
  if (!router.isReady) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-rose-600 mx-auto"></div>
          <p className="mt-4 text-slate-600">Loading...</p>
        </div>
      </div>
    )
  }

  const location = locationData[locationSlug]
  const service = serviceData[serviceSlug]

  if (!location || !service) {
    return (
      <>
        <Head>
          <title>Page Not Found — Home Makeover</title>
        </Head>
        <Header />
        <main className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
            <p className="text-slate-600 mb-8">The page you're looking for doesn't exist.</p>
            <Link href="/" className="inline-block px-6 py-3 bg-rose-600 text-white rounded-lg">
              Back to Home
            </Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  const pageTitle = `${service.shortTitle} in ${location.name}, Pune — Home Makeover`
  const pageDescription = `Professional ${service.shortTitle.toLowerCase()} services in ${location.fullName}. ${service.description} Get free consultation and quotes.`

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={`${service.shortTitle}, ${location.name}, Pune, interior design, painting, home renovation, ${location.fullName}`} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://homemakeover.com/locations/${locationSlug}/${serviceSlug}`} />
        <meta property="og:image" content={service.image} />
        <link rel="canonical" href={`https://homemakeover.com/locations/${locationSlug}/${serviceSlug}`} />
      </Head>
      <Header />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1400&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
          <div className="relative max-w-6xl mx-auto px-6 py-24">
            <div className="text-center">
              <nav className="flex justify-center mb-8">
                <Link href="/" className="text-rose-300 hover:text-white transition-colors">
                  Home
                </Link>
                <span className="mx-2 text-slate-400">/</span>
                <Link href={`/locations/${locationSlug}`} className="text-rose-300 hover:text-white transition-colors">
                  {location.name}
                </Link>
                <span className="mx-2 text-slate-400">/</span>
                <span className="text-white">{service.shortTitle}</span>
              </nav>
              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
                {service.shortTitle} in {location.name}
              </h1>
              <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
                Professional {service.shortTitle.toLowerCase()} services in {location.fullName}. 
                {service.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/survey" className="inline-block px-8 py-4 bg-rose-600 hover:bg-rose-700 text-white rounded-lg font-semibold text-lg transition-colors">
                  Get Free Quote
                </a>
                <a href="/contact" className="inline-block px-8 py-4 border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white hover:text-slate-900 transition-colors">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Service Details */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">Why Choose Our {service.shortTitle} in {location.name}?</h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  {service.longDescription}
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-slate-50 rounded-xl">
                  <h3 className="font-semibold text-slate-900 mb-2">Pricing</h3>
                  <p className="text-slate-600">{service.pricing}</p>
                </div>
              </div>

              <div className="relative">
                <div className="w-full rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src={service.image} 
                    alt={`${service.shortTitle} in ${location.name}`}
                    className="w-full h-96 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Location Benefits */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Why {location.name}?</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                {location.description}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
                <div className="w-16 h-16 bg-rose-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Local Expertise</h3>
                <p className="text-slate-600">We understand the unique requirements and preferences of {location.name} residents</p>
              </div>

              <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
                <div className="w-16 h-16 bg-amber-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Quick Response</h3>
                <p className="text-slate-600">Fast response times and quick site visits in {location.name} and surrounding areas</p>
              </div>

              <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Quality Assurance</h3>
                <p className="text-slate-600">Consistent quality and professional service standards across {location.name}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Our Work in {location.name}</h2>
              <p className="text-xl text-slate-600">Browse through our recent projects in {location.fullName}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {service.gallery.map((image, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <img 
                    src={image} 
                    alt={`${service.shortTitle} project ${index + 1}`}
                    className="w-full h-64 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-rose-600 to-rose-700 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Home in {location.name}?</h2>
            <p className="text-xl mb-8 opacity-90">
              Get started with a free consultation and professional assessment of your project
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/survey" className="inline-block px-8 py-4 bg-white text-rose-600 rounded-lg font-semibold text-lg hover:bg-slate-100 transition-colors">
                Get Free Quote
              </a>
              <a href="/contact" className="inline-block px-8 py-4 border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white hover:text-rose-600 transition-colors">
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
