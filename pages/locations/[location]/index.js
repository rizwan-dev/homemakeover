import Head from 'next/head'
import { useRouter } from 'next/router'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import Link from 'next/link'

export default function LocationPage() {
  const router = useRouter()
  const { location: locationSlug } = router.query

  // Location data
  const locationData = {
    'kharadi': {
      name: 'Kharadi',
      fullName: 'Kharadi, Pune',
      description: 'Kharadi is a rapidly developing area in Pune known for its IT parks, residential complexes, and modern infrastructure. We provide comprehensive interior design and painting services to transform homes in this vibrant locality.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1400&auto=format&fit=crop',
      highlights: [
        'IT Park Proximity',
        'Modern Residential Complexes',
        'Excellent Connectivity',
        'Growing Infrastructure'
      ]
    },
    'viman-nagar': {
      name: 'Viman Nagar',
      fullName: 'Viman Nagar, Pune',
      description: 'Viman Nagar is a premium residential area in Pune with excellent connectivity and modern amenities. Our expert team delivers high-quality interior design and painting services to enhance the beauty of homes in this upscale locality.',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1400&auto=format&fit=crop',
      highlights: [
        'Premium Residential Area',
        'Excellent Connectivity',
        'Modern Amenities',
        'Upscale Properties'
      ]
    },
    'lohegaon': {
      name: 'Lohegaon',
      fullName: 'Lohegaon, Pune',
      description: 'Lohegaon is a growing residential area in Pune with good connectivity and affordable housing options. We offer professional interior design and painting services to help residents create beautiful living spaces.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1400&auto=format&fit=crop',
      highlights: [
        'Growing Residential Area',
        'Good Connectivity',
        'Affordable Housing',
        'Family-Friendly Environment'
      ]
    },
    'magarpatta': {
      name: 'Magarpatta',
      fullName: 'Magarpatta, Pune',
      description: 'Magarpatta is a well-planned township in Pune known for its modern infrastructure and quality living. Our comprehensive interior design and painting services help residents maintain and enhance their beautiful homes.',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=1400&auto=format&fit=crop',
      highlights: [
        'Well-Planned Township',
        'Modern Infrastructure',
        'Quality Living',
        'Planned Development'
      ]
    },
    'kalyani-nagar': {
      name: 'Kalyani Nagar',
      fullName: 'Kalyani Nagar, Pune',
      description: 'Kalyani Nagar is an upscale residential area in Pune with premium properties and excellent amenities. We provide luxury interior design and painting services to match the high standards of this prestigious locality.',
      image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1400&auto=format&fit=crop',
      highlights: [
        'Upscale Residential Area',
        'Premium Properties',
        'Excellent Amenities',
        'Prestigious Locality'
      ]
    }
  }

  const services = [
    {
      id: 'home-painting',
      title: 'Home Painting Service',
      description: 'Professional interior and exterior painting services with premium quality materials.',
      image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1400&auto=format&fit=crop',
      features: ['Interior & Exterior Painting', 'Texture Work', 'Color Consultation', 'Premium Materials']
    },
    {
      id: 'home-interior-design',
      title: 'Home Interior Design',
      description: 'Complete interior design solutions from concept to execution.',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1400&auto=format&fit=crop',
      features: ['Space Planning', '3D Visualizations', 'Custom Furniture', 'Lighting Design']
    }
  ]

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

  if (!location) {
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

  const pageTitle = `Interior Design & Painting Services in ${location.name}, Pune — Home Makeover`
  const pageDescription = `Professional interior design and painting services in ${location.fullName}. Transform your home with our expert team. Free consultation and quotes available.`

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={`interior design, painting, ${location.name}, Pune, home renovation, ${location.fullName}`} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://homemakeover.com/locations/${locationSlug}`} />
        <meta property="og:image" content={location.image} />
        <link rel="canonical" href={`https://homemakeover.com/locations/${locationSlug}`} />
      </Head>
      <Header />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1400&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
          <div className="relative max-w-6xl mx-auto px-6 py-24">
            <div className="text-center">
              <nav className="flex justify-center mb-8">
                <Link href="/" className="text-indigo-300 hover:text-white transition-colors">
                  Home
                </Link>
                <span className="mx-2 text-slate-400">/</span>
                <span className="text-white">{location.name}</span>
              </nav>
              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
                Interior Design & Painting in {location.name}
              </h1>
              <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
                Professional interior design and painting services in {location.fullName}. 
                Transform your home with our expert team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/survey" className="inline-block px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold text-lg transition-colors">
                  Get Free Quote
                </a>
                <a href="/contact" className="inline-block px-8 py-4 border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white hover:text-slate-900 transition-colors">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Location Overview */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">Why Choose Home Makeover in {location.name}?</h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  {location.description}
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {location.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-slate-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="w-full rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src={location.image} 
                    alt={`${location.name} area`}
                    className="w-full h-96 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Our Services in {location.name}</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Comprehensive interior design and painting solutions tailored for {location.name} residents
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service) => (
                <div key={service.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative h-64">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                    <p className="text-slate-600 mb-6">{service.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 text-slate-800">What's Included:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-3 text-sm text-slate-600">
                            <div className="w-2 h-2 bg-rose-400 rounded-full flex-shrink-0"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Link 
                      href={`/locations/${locationSlug}/${service.id}`}
                      className="inline-block px-6 py-3 bg-rose-600 hover:bg-rose-700 text-white rounded-lg font-semibold transition-colors"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Why Choose Home Makeover in {location.name}?</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                We combine local expertise with professional standards to deliver exceptional results
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                 <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                   <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Local Expertise</h3>
                <p className="text-slate-600">We understand the unique requirements and preferences of {location.name} residents</p>
              </div>

              <div className="text-center">
                 <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                   <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Quick Response</h3>
                <p className="text-slate-600">Fast response times and quick site visits in {location.name} and surrounding areas</p>
              </div>

              <div className="text-center">
                 <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                   <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Quality Assurance</h3>
                <p className="text-slate-600">Consistent quality and professional service standards across {location.name}</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Home in {location.name}?</h2>
            <p className="text-xl mb-8 opacity-90">
              Get started with a free consultation and professional assessment of your project
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/survey" className="inline-block px-8 py-4 bg-white text-indigo-600 rounded-lg font-semibold text-lg hover:bg-slate-100 transition-colors">
                Get Free Quote
              </a>
              <a href="/contact" className="inline-block px-8 py-4 border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white hover:text-indigo-600 transition-colors">
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
