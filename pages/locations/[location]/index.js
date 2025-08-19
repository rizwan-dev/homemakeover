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
      neighborhoods: ['Forest County', 'Ganga Platino', 'Eon IT Park Vicinity', 'Gera Greensville', 'Marvel Zephyr'],
      seo: [
        'Looking for trusted interior designers in Kharadi? Home Makeover delivers end‑to‑end home interiors—modular kitchens, wardrobes, false ceilings, and premium wall finishes—tailored to compact 2 BHK/3 BHK layouts popular in Kharadi.',
        'For house painting in Kharadi, we use low‑VOC paints, precise surface preparation, and dust‑controlled execution to ensure a clean, long‑lasting finish that stands up to Pune’s weather.'
      ],
      keywords: [
        'best home painting in Kharadi',
        'best home interior design in Kharadi',
        'affordable painting service in Kharadi',
        'quality painting service in Kharadi',
        'affordable interior design service in Kharadi',
        'quality home interior design service in Kharadi',
        'trusted house painters in Kharadi',
        'professional interior designers in Kharadi',
        'modular kitchen designers in Kharadi',
        'false ceiling contractor in Kharadi',
        '2 BHK interior in Kharadi',
        '3 BHK interior in Kharadi'
      ],
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
      neighborhoods: ['Rohan Mithila', 'Konark Nagar', 'Mhada Colony', 'Phoenix Marketcity Vicinity'],
      seo: [
        'Premium interior design in Viman Nagar with bespoke furniture, veneer wall panels, and layered lighting suited to high‑spec apartments.',
        'Professional painting in Viman Nagar with washable emulsions, silky finishes, and accent textures for a refined, timeless look.'
      ],
      keywords: [
        'best home painting in Viman Nagar',
        'best home interior design in Viman Nagar',
        'affordable painting service in Viman Nagar',
        'quality painting service in Viman Nagar',
        'affordable interior design service in Viman Nagar',
        'quality home interior design service in Viman Nagar',
        'trusted house painters in Viman Nagar',
        'professional interior designers in Viman Nagar'
      ],
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
      neighborhoods: ['Rohan Abhilasha', 'Nyati Enclave', 'Dreams Onella', 'Dhanori Road Belt'],
      seo: [
        'Budget‑friendly interiors in Lohegaon with smart storage, modular wardrobes, and space‑saving furniture for compact homes.',
        'Exterior and interior painting in Lohegaon with crack filling, damp‑proof primers, and weather‑shield top coats.'
      ],
      keywords: [
        'best home painting in Lohegaon',
        'best home interior design in Lohegaon',
        'affordable painting service in Lohegaon',
        'quality painting service in Lohegaon',
        'affordable interior design service in Lohegaon',
        'quality home interior design service in Lohegaon',
        'house painters in Lohegaon',
        'interior designers in Lohegaon'
      ],
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
      neighborhoods: ['Magarpatta City', 'Cosmos', 'Iris', 'Roystonia', 'Amanora Vicinity'],
      seo: [
        'Turnkey interior design in Magarpatta City with end‑to‑end execution, site supervision, and brand‑grade hardware.',
        'Premium painting solutions in Magarpatta—stain‑resistant emulsions, elegant textures, and zero‑VOC options for families.'
      ],
      keywords: [
        'best home painting in Magarpatta',
        'best home interior design in Magarpatta',
        'affordable painting service in Magarpatta',
        'quality painting service in Magarpatta',
        'affordable interior design service in Magarpatta',
        'quality home interior design service in Magarpatta'
      ],
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
      neighborhoods: ['Cerebrum IT Park Belt', 'Trump Towers Vicinity', 'Konark Campus', 'West Avenue'],
      seo: [
        'Luxury interiors in Kalyani Nagar with custom veneer finishes, quartz counters, and designer lighting for an elevated aesthetic.',
        'Fine‑finish painting in Kalyani Nagar—buttery matt emulsions, metallic accents, and Italian textures.'
      ],
      keywords: [
        'best home painting in Kalyani Nagar',
        'best home interior design in Kalyani Nagar',
        'affordable painting service in Kalyani Nagar',
        'quality painting service in Kalyani Nagar',
        'affordable interior design service in Kalyani Nagar',
        'quality home interior design service in Kalyani Nagar'
      ],
      highlights: [
        'Upscale Residential Area',
        'Premium Properties',
        'Excellent Amenities',
        'Prestigious Locality'
      ]
    },
    'wagholi': {
      name: 'Wagholi',
      fullName: 'Wagholi, Pune',
      description: 'Wagholi is a fast-expanding residential hub with great connectivity to Kharadi and Hadapsar. We offer complete interior and painting services tailored for modern apartments and villas in Wagholi.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1400&auto=format&fit=crop',
      neighborhoods: ['Nyati Elan', 'Ivy Estate', 'Majestique Manhattan', 'VTP Pegasus'],
      seo: [
        'Value‑driven interior design in Wagholi with modular kitchens, study units, and space‑saving wardrobes for 1.5/2 BHK homes.',
        'Durable painting systems in Wagholi—putty + primer + premium emulsions for smooth, long‑lasting results.'
      ],
      keywords: [
        'best home painting in Wagholi',
        'best home interior design in Wagholi',
        'affordable painting service in Wagholi',
        'quality painting service in Wagholi',
        'affordable interior design service in Wagholi',
        'quality home interior design service in Wagholi'
      ],
      highlights: [
        'Rapidly Developing Area',
        'Great Connectivity',
        'New Residential Projects',
        'Value-for-Money Housing'
      ]
    },
    'kesnand': {
      name: 'Kesnand',
      fullName: 'Kesnand, Pune',
      description: 'Kesnand offers peaceful living with quick access to Nagar Road. Our team delivers end-to-end interiors and painting with a focus on durability and smart space planning.',
      image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1400&auto=format&fit=crop',
      neighborhoods: ['Kesnand Greens', 'Nagar Road Corridor', 'Gatlodia Belt'],
      seo: [
        'Practical interior solutions in Kesnand—false ceilings with cove lighting, modular storage, and easy‑maintenance materials.',
        'Moisture‑resistant painting in Kesnand with anti‑fungal coats and weather shield exteriors.'
      ],
      keywords: [
        'best home painting in Kesnand',
        'best home interior design in Kesnand',
        'affordable painting service in Kesnand',
        'quality painting service in Kesnand',
        'affordable interior design service in Kesnand',
        'quality home interior design service in Kesnand'
      ],
      highlights: [
        'Peaceful Locality',
        'Good Connectivity',
        'Spacious Homes',
        'Emerging Neighborhood'
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
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
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
            <Link href="/" className="inline-block px-6 py-3 bg-primary text-white rounded-lg">
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
  const metaKeywordsList = ['interior design', 'painting', 'home renovation', location.name, location.fullName, 'Pune', ...(location.keywords || [])]
  const metaKeywords = metaKeywordsList.join(', ')

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={metaKeywords} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://homesmakeover.in/locations/${locationSlug}`} />
        <meta property="og:image" content={location.image} />
        <link rel="canonical" href={`https://homesmakeover.in/locations/${locationSlug}`} />
      </Head>
      <Header />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1400&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
          <div className="relative max-w-6xl mx-auto px-6 py-24">
            <div className="text-center">
              <nav className="flex justify-center mb-8">
                <Link href="/" className="text-secondary-dark hover:text-white transition-colors">
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
                <a href="/survey" className="inline-block px-8 py-4 bg-primary hover:bg-primary-light text-white rounded-lg font-semibold text-lg transition-colors">
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
                      <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                            <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link 
                      href={`/locations/${locationSlug}/${service.id}`}
                      className="inline-block px-6 py-3 bg-primary hover:bg-primary-light text-white rounded-lg font-semibold transition-colors"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Areas We Serve in Location */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl font-bold mb-4">Areas we serve in {location.name}</h2>
                <p className="text-slate-600 mb-6">We actively undertake projects across the most popular societies and micro‑localities in {location.fullName}.</p>
                <ul className="grid grid-cols-2 gap-3">
                  {(location.neighborhoods || []).map((n) => (
                    <li key={n} className="flex items-center gap-2 text-slate-700">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                      {n}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">Interior & Painting Experts in {location.name}</h2>
                <div className="space-y-4 text-slate-600 leading-relaxed">
                  {(location.seo || []).map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                  <p>From concept to completion, we manage design, materials, execution, and quality checks. Get a free site visit and detailed quotation tailored to your floor plan.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Searches (SEO) */}
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl font-bold mb-4">Popular searches in {location.name}</h2>
            <p className="text-slate-600 mb-4">Customers often search for these services in {location.fullName}:</p>
            <div className="flex flex-wrap gap-2">
              {(location.keywords || []).map((kw) => (
                <span key={kw} className="px-3 py-1.5 rounded-full bg-secondary text-primary text-sm font-medium">
                  {kw}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Location FAQs */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8">FAQs for {location.name}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-50 p-6 rounded-xl">
                <h3 className="font-semibold text-slate-900 mb-2">How much time does a 2 BHK interior take in {location.name}?</h3>
                <p className="text-slate-600">Most 2 BHK interiors finish within 25–40 days depending on scope, site readiness, and material choices.</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-xl">
                <h3 className="font-semibold text-slate-900 mb-2">Which paint brands do you use for homes in {location.name}?</h3>
                <p className="text-slate-600">We work with Asian Paints, Nerolac, and Dulux—recommending low‑VOC, washable emulsions for interiors and weather‑proof systems for exteriors.</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-xl">
                <h3 className="font-semibold text-slate-900 mb-2">Do you provide 3D designs and material boards?</h3>
                <p className="text-slate-600">Yes. Our design packages can include 3D renders, color palettes, veneer/laminate selections, and lighting plans.</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-xl">
                <h3 className="font-semibold text-slate-900 mb-2">Is there a warranty on workmanship?</h3>
                <p className="text-slate-600">Yes. We provide workmanship warranty along with standard brand warranties on hardware and paints.</p>
              </div>
            </div>
          </div>
        </section>

        

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-primary-light text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Home in {location.name}?</h2>
            <p className="text-xl mb-8 opacity-90">
              Get started with a free consultation and professional assessment of your project
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/survey" className="inline-block px-8 py-4 bg-white text-primary rounded-lg font-semibold text-lg hover:bg-secondary transition-colors">
                Get Free Quote
              </a>
              <a href="/contact" className="inline-block px-8 py-4 border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white hover:text-primary transition-colors">
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
