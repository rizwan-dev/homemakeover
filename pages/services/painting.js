import Head from 'next/head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Link from 'next/link'

export default function PaintingService() {
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
      title: 'Modern Apartment Interior',
      image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1400&auto=format&fit=crop',
      area: '1,200 sq ft',
      duration: '1 week'
    },
    {
      title: 'Villa Exterior',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1400&auto=format&fit=crop',
      area: '2,500 sq ft',
      duration: '2 weeks'
    },
    {
      title: 'Commercial Office',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1400&auto=format&fit=crop',
      area: '3,000 sq ft',
      duration: '3 weeks'
    }
  ]

  return (
    <>
      <Head>
        <title>Professional Painting Services in Pune — Home Makeover</title>
        <meta name="description" content="Professional interior and exterior painting services in Pune. Premium quality materials, expert application, and 2-year warranty. Free consultation available." />
        <meta name="keywords" content="painting services, Pune, interior painting, exterior painting, professional painter, color consultation" />
        <meta property="og:title" content="Professional Painting Services in Pune — Home Makeover" />
        <meta property="og:description" content="Professional interior and exterior painting services in Pune. Premium quality materials, expert application, and 2-year warranty." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://homemakeover.com/services/painting" />
        <link rel="canonical" href="https://homemakeover.com/services/painting" />
      </Head>
      <Header />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1400&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
          <div className="relative max-w-6xl mx-auto px-6 py-24">
            <div className="text-center">
              <nav className="flex justify-center mb-8">
                <Link href="/" className="text-indigo-300 hover:text-white transition-colors">
                  Home
                </Link>
                <span className="mx-2 text-slate-400">/</span>
                <Link href="/services" className="text-indigo-300 hover:text-white transition-colors">
                  Services
                </Link>
                <span className="mx-2 text-slate-400">/</span>
                <span className="text-white">Painting</span>
              </nav>
              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
                Professional Painting Services
              </h1>
              <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
                Transform your space with our expert painting services. Interior and exterior painting with 
                premium quality materials and professional application techniques.
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

        {/* Service Overview */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
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
                      <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-slate-50 rounded-xl">
                  <h3 className="font-semibold text-slate-900 mb-2">Starting Prices</h3>
                  <p className="text-slate-600">Interior: ₹15/sq ft | Exterior: ₹20/sq ft</p>
                </div>
              </div>

              <div className="relative">
                <div className="w-full rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1400&auto=format&fit=crop" 
                    alt="Professional Painting Services"
                    className="w-full h-96 object-cover"
                  />
                </div>
              </div>
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
                  <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-indigo-600">{step.step}</span>
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

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-amber-600 to-amber-700 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Space?</h2>
            <p className="text-xl mb-8 opacity-90">
              Get started with a free quote and let us bring color to your world
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/survey" className="inline-block px-8 py-4 bg-white text-amber-600 rounded-lg font-semibold text-lg hover:bg-slate-100 transition-colors">
                Get Free Quote
              </a>
              <a href="/contact" className="inline-block px-8 py-4 border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white hover:text-amber-600 transition-colors">
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

